'use strict';

// @ts-check
const { test, expect } = require('@playwright/test');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

test('rss feed has correct lastBuildDate field', async ({ page }) => {
  await page.goto('/rss.xml');

  // Get the content of the page
  const content = await page.content();

  // Create a new JSDOM instance
  const dom = new JSDOM(content, { contentType: 'text/xml' });

  // Get the global window object
  const { window } = dom;

  // Get the lastBuildDate field
  const lastBuildDateField = window.document.querySelector('rss > channel > lastBuildDate');

  // Check if the lastBuildDate field exists
  expect(lastBuildDateField).not.toBeNull();

  // Check if the lastBuildDate field is not empty
  expect(lastBuildDateField.textContent.trim()).not.toBe('');

  // Check if the lastBuildDate field has the correct format
  const dateRegex = /^[A-Za-z]{3}, \d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2}:\d{2} [+-]\d{4}$/;
  expect(lastBuildDateField.textContent).toMatch(dateRegex);
});

test('rss feed items have correct fields', async ({ page }) => {
  await page.goto('/rss.xml');

  // Get the content of the page
  const content = await page.content();

  // Create a new JSDOM instance
  const dom = new JSDOM(content, { contentType: 'text/xml' });

  // Get the global window object
  const { window } = dom;

  // Get all item elements
  const items = window.document.querySelectorAll('rss > channel > item');

  // Regex to match RFC 822 date-time format
  const rfc822Regex = /^[A-Za-z]{3}, \d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2}:\d{2} [+-]\d{4}$/;

  items.forEach(item => {
    // Check for title element
    const titleElement = item.querySelector('title');
    expect(titleElement).not.toBeNull();
    expect(titleElement.textContent.trim()).not.toBe('');

    // Check for link element
    const linkElement = item.querySelector('link');
    expect(linkElement).not.toBeNull();
    expect(linkElement.textContent.trim()).not.toBe('');

    // Check for pubDate element
    const pubDateElement = item.querySelector('pubDate');
    expect(pubDateElement).not.toBeNull();
    expect(pubDateElement.textContent.trim()).not.toBe('');
    expect(pubDateElement.textContent).toMatch(rfc822Regex);

    // Check for author element
    const authorElement = item.querySelector('author');
    expect(authorElement).not.toBeNull();
    expect(authorElement.textContent.trim()).not.toBe('');

    // Check for category element
    const categoryElement = item.querySelector('category');
    expect(categoryElement).toBeNull();

    // Check for guid element
    const guidElement = item.querySelector('guid');
    expect(guidElement).not.toBeNull();
    expect(guidElement.textContent.trim()).not.toBe('');

    // Check for description element
    const descriptionElement = item.querySelector('description');
    expect(descriptionElement).not.toBeNull();
    expect(descriptionElement.textContent.trim()).not.toBe('');
  });
});
