'use strict';

// @ts-check
const { test, expect } = require('@playwright/test');

test('humans.txt contains expected information', async ({ page }) => {
  await page.goto('/humans.txt');

  // Get the content of the page
  const content = await page.content();

  // Define the expected fields
  const expectedFields = [
    'Author:',
    'Contact:',
    'GitHub:',
    'Twitter:',
    'From:',
    'Last update:',
    'Language:',
    'Doctype:',
    'Standards:',
    'Components:',
    'Hugo version:'
  ];

  // Check if each expected field is present in the content
  for (const field of expectedFields) {
    expect(content).toContain(field);
  }

  // Check if the content contains non-empty values for each field
  for (const field of expectedFields) {
    const regex = new RegExp(`${field}\\s+(.+)`, 'g');
    const match = regex.exec(content);
    expect(match).not.toBeNull();
    expect(match[1].trim()).not.toBe('');
  }
});
