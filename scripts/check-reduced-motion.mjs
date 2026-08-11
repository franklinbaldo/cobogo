/* Reduced-motion conformance probe.
 *
 * Under `prefers-reduced-motion: reduce`, no non-essential animation or transition
 * should remain active. The invariant is stated in knowledge/foundations/contract.md;
 * this makes it observable instead of aspirational.
 *
 * Deliberately framework-agnostic: it takes a base URL and routes, and knows nothing
 * about Astro, this repository, or how the page was produced. A consumer can copy this
 * file and use it without adopting anything else from Cobogó.
 *
 *   node scripts/check-reduced-motion.mjs http://127.0.0.1:4321/cobogo / grammar/ core/
 *
 * Escape hatch: mark genuinely essential motion with `data-motion="essential"` on the
 * element or any ancestor. Reduced motion means reduced, not none — a progress
 * indicator may legitimately keep moving. The attribute makes that a recorded decision
 * rather than an oversight.
 */
import { chromium } from 'playwright';

const [base, ...routes] = process.argv.slice(2);
if (!base || routes.length === 0) {
  console.error('usage: check-reduced-motion.mjs <baseUrl> <route> [route...]');
  process.exit(2);
}

// PLAYWRIGHT_CHROMIUM_PATH lets a sandbox or self-hosted runner point at a preinstalled
// browser instead of downloading one. Unset everywhere else, which is the normal case.
const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH } : {},
);
const context = await browser.newContext({ reducedMotion: 'reduce' });
const page = await context.newPage();

let total = 0;
for (const route of routes) {
  const url = new URL(route, base.endsWith('/') ? base : base + '/').href;
  await page.goto(url, { waitUntil: 'networkidle' });

  const offenders = await page.evaluate(() => {
    const seen = new Set();
    for (const el of document.querySelectorAll('*')) {
      if (el.closest('[data-motion="essential"]')) continue;
      const cs = getComputedStyle(el);
      const animating = cs.animationName !== 'none' && (parseFloat(cs.animationDuration) || 0) > 0.01;
      const transitioning = (parseFloat(cs.transitionDuration) || 0) > 0.01;
      if (!animating && !transitioning) continue;
      const cls = typeof el.className === 'string' && el.className.trim()
        ? '.' + el.className.trim().split(/\s+/).join('.')
        : '';
      const what = animating ? `animation ${cs.animationName} ${cs.animationDuration}` : `transition ${cs.transitionDuration}`;
      seen.add(`${el.tagName.toLowerCase()}${cls} — ${what}`);
    }
    return [...seen];
  });

  if (offenders.length) {
    total += offenders.length;
    console.error(`\n${url}`);
    for (const o of offenders.slice(0, 10)) console.error(`   ${o}`);
    if (offenders.length > 10) console.error(`   ... +${offenders.length - 10} more`);
  }
}

await browser.close();

if (total) {
  console.error(`\nFAIL — ${total} declaration(s) still active under prefers-reduced-motion.`);
  console.error('Honour the preference, or mark genuinely essential motion with data-motion="essential".');
  process.exit(1);
}
console.log(`PASS — ${routes.length} route(s) quiet under prefers-reduced-motion.`);
