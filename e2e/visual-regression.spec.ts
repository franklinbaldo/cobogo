import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 }
  ];

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

  for (const viewport of viewports) {
    test.describe(`Viewport: ${viewport.name}`, () => {
      test.use({ viewport });

      for (const component of components) {
        test(`Component: ${component}`, async ({ page }) => {
          // Navigating to the specific component documentation
          await page.goto(`/cobogo/docs/components/${component}`);
          // Wait for network requests to settle
          await page.waitForLoadState('networkidle');

          // Small delay to allow any animations or fonts to settle
          await page.waitForTimeout(1000);

          // Find the main content area to avoid snapshotting navigation/header flakiness if desired,
          // but full page gives better visual governance overview
          await expect(page).toHaveScreenshot(`${component}-${viewport.name}.png`, {
            fullPage: true,
            maxDiffPixelRatio: 0.05 // Allow slight pixel differences
          });
        });
      }
    });
  }
});
