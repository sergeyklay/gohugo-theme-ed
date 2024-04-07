'use strict';

// @ts-check
const { test, expect } = require('@playwright/test');

test('correct loading main page', async ({ page }) => {
  const consoleErrors = [];
  await page.goto('/');

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Ed./);

  // Expect no errors in the console.
  expect(consoleErrors).toHaveLength(0);
});

test('main page have navigation and latest publications section', async ({ page }) => {
  await page.goto('/');

  // Expect a navigation element to be visible.
  const navigationElement = page.locator('div[role="navigation"]');
  await expect(navigationElement).toBeVisible();

  // Expect a header with the text "Latest publications" to be visible.
  const latestPublicationsHeader = navigationElement.locator('text="Latest publications"');
  await expect(latestPublicationsHeader).toBeVisible();

  // Expect a list of links to be visible.
  const linksList = navigationElement.locator('ul');
  await expect(linksList).toBeVisible();

  // Expect the list of links to have 5 items.
  const textTitleContainers = linksList.locator('li.text-title');
  await expect(textTitleContainers).toHaveCount(5);

  for (let i = 0; i < 5; i++) {
    const postMetaContainer = textTitleContainers.nth(i).locator('.post-meta');
    await expect(postMetaContainer).toBeVisible();

    const timeElement = postMetaContainer.locator('time');
    await expect(timeElement).toBeVisible();
  }
});

test('our documentation link', async ({ page }) => {
  await page.goto('/');

  // Click the "our documentation" link.
  await page.getByText('our documentation').click();

  // Expects page to have a heading with the name of Documentation.
  await expect(page.getByRole('heading', { name: 'Documentation' })).toBeVisible();
});


test('external links in main wrapper have correct attributes', async ({ page }) => {
  await page.goto('/');

  const links = await page.$$('main a');

  for (const link of links) {
    const href = await link.getAttribute('href');

    if (href && !href.startsWith('/') && !href.startsWith('#') && !href.includes('127.0.0.1')) {
      // Expect the link to have class="external".
      const hasExternalClass = await link.evaluate((el) => el.classList.contains('external'));
      expect(hasExternalClass).toBe(true);

      // Expect the link to have target="_blank".
      const target = await link.getAttribute('target');
      expect(target).toBe('_blank');

      // Expect the link to have rel="noopener noreferrer".
      const rel = await link.getAttribute('rel');
      expect(rel).toBe('noopener noreferrer');
    }
  }
});
