// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Ed./);
});

test('our documentation link', async ({ page }) => {
  await page.goto('/');

  // Click the "our documentation" link.
  await page.getByText('our documentation').click();

  // Expects page to have a heading with the name of Documentation.
  await expect(page.getByRole('heading', { name: 'Documentation' })).toBeVisible();
});
