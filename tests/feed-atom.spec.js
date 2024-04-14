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

test('atom feed has correct author information', async ({ page }) => {
  await page.goto('/feeds/feed.atom.xml');

  // Get the content of the page
  const content = await page.content();

  // Create a new JSDOM instance
  const dom = new JSDOM(content, { contentType: 'text/xml' });

  // Get the global window object
  const { window } = dom;

  // Get the author element
  const authorElement = window.document.querySelector('feed > author');

  // Check if the author element exists
  expect(authorElement).not.toBeNull();

  // Get the name element
  const nameElement = authorElement.querySelector('name');

  // Check if the name element exists
  expect(nameElement).not.toBeNull();

  // Check if the name element has the correct type attribute
  expect(nameElement.getAttribute('type')).toBe('html');

  // Check if the name element has the correct text content
  expect(nameElement.textContent).not.toBeNull();
  expect(nameElement.textContent.trim()).not.toBe('');

  // Get the email element
  const emailElement = authorElement.querySelector('email');

  // Check if the email element exists
  expect(emailElement).not.toBeNull();

  // Check if the email element has the correct text content
  expect(emailElement.textContent).not.toBeNull();
  expect(emailElement.textContent.trim()).not.toBe('');
});
