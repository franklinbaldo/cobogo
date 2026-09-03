#!/usr/bin/env node

import { mkdirSync, writeFileSync } from 'node:fs';
import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';

const [baseUrl, ...routeArgs] = process.argv.slice(2);
const routes = routeArgs.length ? routeArgs : ['/'];
const outputDir = process.env.ACCESSIBILITY_EVIDENCE_DIR || 'artifacts/accessibility';

if (!baseUrl) {
  console.error('Usage: node scripts/check-semantic-accessibility.mjs <base-url> [route ...]');
  process.exit(2);
}

const normalizeUrl = (base, route) => new URL(route.replace(/^\//, ''), `${base.replace(/\/$/, '')}/`).toString();

async function keyboardAudit(page) {
  const expected = await page.evaluate(() => {
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'summary',
    ].join(',');
    const visible = [...document.querySelectorAll(selector)].filter((element) => {
      if (!(element instanceof HTMLElement)) return false;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0 && element.tabIndex >= 0;
    });
    visible.forEach((element, index) => {
      element.dataset.cobogoA11yId = `focus-${index + 1}`;
    });
    return visible.map((element) => ({
      id: element.dataset.cobogoA11yId,
      tag: element.tagName.toLowerCase(),
      text: (element.getAttribute('aria-label') || element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120),
      href: element instanceof HTMLAnchorElement ? element.getAttribute('href') : null,
    }));
  });

  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  });

  const seen = [];
  const focusFailures = [];
  const maxTabs = Math.max(expected.length + 3, 3);

  for (let index = 0; index < maxTabs; index += 1) {
    await page.keyboard.press('Tab');
    const state = await page.evaluate(() => {
      const element = document.activeElement;
      if (!(element instanceof HTMLElement)) return null;

      const text = (element.getAttribute('aria-label') || element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120);
      const style = getComputedStyle(element);
      const outlineWidth = Number.parseFloat(style.outlineWidth || '0');
      const borderWidths = [style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth, style.borderLeftWidth]
        .map((value) => Number.parseFloat(value || '0'));
      const visibleIndicator =
        (style.outlineStyle !== 'none' && outlineWidth > 0) ||
        style.boxShadow !== 'none' ||
        borderWidths.some((width) => width > 0);

      return {
        id: element.dataset.cobogoA11yId || null,
        tag: element.tagName.toLowerCase(),
        text,
        href: element instanceof HTMLAnchorElement ? element.getAttribute('href') : null,
        focusVisible: element.matches(':focus-visible'),
        visibleIndicator,
        outline: `${style.outlineWidth} ${style.outlineStyle} ${style.outlineColor}`,
        boxShadow: style.boxShadow,
      };
    });
    if (!state?.id) continue;

    seen.push(state);
    if (!state.focusVisible || !state.visibleIndicator) {
      focusFailures.push(`${state.id} (${state.tag} ${state.text || state.href || ''}) recebeu foco por teclado sem indicador visual detectável`);
    }
  }

  const reached = new Set(seen.map((item) => item.id));
  const unreachable = expected.filter((item) => !reached.has(item.id));
  const consecutiveRepeat = seen.some((item, index) => index > 0 && item.id === seen[index - 1].id);

  return {
    expected,
    sequence: seen,
    unreachable,
    consecutive_repeat: consecutiveRepeat,
    failures: [
      ...unreachable.map((item) => `${item.id} (${item.tag} ${item.text || item.href || ''}) não foi alcançado por Tab`),
      ...(consecutiveRepeat ? ['a sequência de Tab ficou presa no mesmo controle em passos consecutivos'] : []),
      ...focusFailures,
    ],
  };
}

mkdirSync(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const observations = [];
const failures = [];

try {
  for (const route of routes) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const url = normalizeUrl(baseUrl, route);
    const response = await page.goto(url, { waitUntil: 'networkidle' });
    const status = response?.status() ?? 0;

    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    const materialViolations = axe.violations
      .filter((violation) => violation.impact === 'serious' || violation.impact === 'critical')
      .map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        help: violation.help,
        help_url: violation.helpUrl,
        nodes: violation.nodes.map((node) => ({ target: node.target, summary: node.failureSummary })),
      }));

    const keyboard = await keyboardAudit(page);
    const routeFailures = [];
    if (status !== 200) routeFailures.push(`${route}: HTTP ${status}`);
    for (const violation of materialViolations) {
      routeFailures.push(`${route}: axe ${violation.impact} ${violation.id} — ${violation.help}`);
    }
    routeFailures.push(...keyboard.failures.map((failure) => `${route}: ${failure}`));

    observations.push({
      route,
      url,
      status,
      axe: {
        total_violations: axe.violations.length,
        serious_or_critical: materialViolations,
      },
      keyboard,
      failures: routeFailures,
    });
    failures.push(...routeFailures);
    await context.close();
  }
} finally {
  await browser.close();
}

const report = {
  evaluated_sha: process.env.EVALUATED_SHA || process.env.GITHUB_SHA || null,
  synthetic_ref: process.env.SYNTHETIC_REF || null,
  phase: process.env.EVIDENCE_PHASE || null,
  base_url: baseUrl,
  routes,
  contract: {
    axe_tags: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
    material_impacts: ['serious', 'critical'],
    keyboard: 'all visible sequentially-focusable controls must be reachable by real Tab and expose a detectable focus indicator',
  },
  observations,
  failures,
};

writeFileSync(`${outputDir}/accessibility-evidence.json`, `${JSON.stringify(report, null, 2)}\n`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Accessibility contract passed for ${routes.length} route(s).`);
