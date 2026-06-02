'use strict';

// @ts-check
const { test, expect } = require('@playwright/test');

// Regression coverage for the schema.org WebSite structured data.
// See https://github.com/sergeyklay/gohugo-theme-ed/issues/244: the
// SearchAction must reference the site search page only when that page
// exists, and the emitted JSON-LD must stay valid in either case.

test('home page emits a single, valid schema.org JSON-LD block', async ({ page }) => {
  await page.goto('/');

  const ld = page.locator('script#schema-data');
  await expect(ld).toHaveCount(1);

  // JSON.parse throws on malformed JSON; this guards the conditional
  // SearchAction block and its surrounding comma (regression test for #244).
  const data = JSON.parse((await ld.textContent()) ?? '');

  expect(data['@context']).toBe('https://schema.org');
  expect(data['@type']).toBe('WebSite');
});

test('schema.org SearchAction targets the search page when one exists', async ({ page }) => {
  await page.goto('/');

  const data = JSON.parse((await page.locator('script#schema-data').textContent()) ?? '');

  // The example site ships content/search.md, so the SearchAction must be
  // present and point at it. Sites without a search page omit this whole
  // block instead of aborting the build with REF_NOT_FOUND (#244).
  expect(data.potentialAction).toBeDefined();
  expect(data.potentialAction['@type']).toBe('SearchAction');
  expect(data.potentialAction.target['@type']).toBe('EntryPoint');
  expect(data.potentialAction.target.urlTemplate).toContain('/search/');
  expect(data.potentialAction.target.urlTemplate).toContain('{search_term_string}');
});
