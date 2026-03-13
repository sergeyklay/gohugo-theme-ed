'use strict';

// @ts-check
const { test, expect } = require('@playwright/test');

test('section list page renders _index.md content', async ({ page }) => {
  await page.goto('/poems/');

  // Expect the section title to be visible.
  const heading = page.locator('h1.page-title');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Poems');

  // Expect the section content from _index.md to be rendered
  // inside .section-content (regression test for #246).
  const sectionContent = page.locator('.section-content');
  await expect(sectionContent).toBeVisible();
  await expect(sectionContent).toContainText('A collection of poems curated for this edition.');
});
