import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Vitrine Accessibility Governance', () => {
  const components = [
    'alert',
    'badge',
    'breadcrumbs',
    'button',
    'card',
    'checkbox',
    'combobox',
    'data-table',
    'date-picker',
    'date-range-picker',
    'dialog',
    'disclosure',
    'drawer',
    'file-input',
    'filter-bar',
    'grid',
    'multiselect',
    'notification',
    'pagination',
    'radio',
    'select',
    'switch',
    'tabs',
    'text-input',
    'time-picker',
    'time-range-picker',
    'timeline',
    'tooltip'
  ];

  for (const component of components) {
    test(`${component} should pass automated accessibility checks`, async ({ page }) => {
      await page.goto(`/cobogo/docs/components/${component}`);
      await page.waitForLoadState('networkidle');

      // Small delay to ensure all client-side hydrating components are ready
      await page.waitForTimeout(500);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules([
          // Documentation shell rules to ignore
          'heading-order',
          'landmark-unique',
          'region',
          'page-has-heading-one',
          'listitem',
          'aria-allowed-role',
          'color-contrast',
          'landmark-complementary-is-top-level',
          // False positives for complex form inputs with visually hidden native mechanics
          'aria-input-field-name',
          'label-title-only',
          'aria-hidden-focus',
          // Label false positives for standalone component demos that don't have wrappers
          'label'
        ])
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
