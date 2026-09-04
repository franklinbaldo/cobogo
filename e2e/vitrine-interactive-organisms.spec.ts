import { test, expect } from '@playwright/test';

test.describe('Vitrine Interactive Organisms Documentation', () => {
  test('Interactive organisms are documented', async ({ page }) => {
    // Disclosure, including mutually exclusive groups via shared name
    await page.goto('/cobogo/docs/components/disclosure');
    await expect(page.locator('h1', { hasText: 'Disclosure' }).first()).toBeVisible();

    // Tabs
    await page.goto('/cobogo/docs/components/tabs');
    await expect(page.locator('h1', { hasText: 'Tabs' }).first()).toBeVisible();

    // DatePicker
    await page.goto('/cobogo/docs/components/date-picker');
    await expect(page.locator('h1', { hasText: 'DatePicker' }).first()).toBeVisible();

    // TimePicker
    await page.goto('/cobogo/docs/components/time-picker');
    await expect(page.locator('h1', { hasText: 'TimePicker' }).first()).toBeVisible();

    // DateRangePicker
    await page.goto('/cobogo/docs/components/date-range-picker');
    await expect(page.locator('h1', { hasText: 'DateRangePicker' }).first()).toBeVisible();

    // TimeRangePicker
    await page.goto('/cobogo/docs/components/time-range-picker');
    await expect(page.locator('h1', { hasText: 'TimeRangePicker' }).first()).toBeVisible();
  });
});
