'use strict';

// @ts-check
const { test, expect } = require('@playwright/test');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

test('atom feed has correct updated field', async ({ page }) => {
  await page.goto('/feeds/feed.atom.xml');

  // Get the content of the page
  const content = await page.content();

  // Create a new JSDOM instance
  const dom = new JSDOM(content, { contentType: 'text/xml' });

  // Get the global window object
  const { window } = dom;

  // Get the updated field
  const updatedField = window.document.querySelector('feed > updated');

  // Check if the updated field exists
  expect(updatedField).not.toBeNull();

  // Check if the updated field is not empty
  expect(updatedField.textContent).not.toBe('');

  // Check if the updated field has the correct format
  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/;
  expect(updatedField.textContent).toMatch(dateRegex);
});

test('rss feed has correct lastBuildDate field', async ({ page }) => {
  await page.goto('/feeds/feed.rss.xml');

  // Get the content of the page
  const content = await page.content();

  // Create a new JSDOM instance
  const dom = new JSDOM(content, { contentType: 'text/xml' });

  // Get the global window object
  const { window } = dom;

  // Get the lastBuildDate field
  const lastBuildDateField = window.document.querySelector('rss > lastBuildDate');

  // Check if the lastBuildDate field exists
  expect(lastBuildDateField).not.toBeNull();

  // Check if the lastBuildDate field is not empty
  expect(lastBuildDateField.textContent.trim()).not.toBe('');

  // Check if the lastBuildDate field has the correct format
  const dateRegex = /^[A-Za-z]{3}, \d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2}:\d{2} [+-]\d{4}$/;
  expect(lastBuildDateField.textContent).toMatch(dateRegex);
});
