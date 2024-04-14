'use strict';

const fs = require('fs');
const path = require('path');

const netlifyConfig = 'netlify.toml';

// Read the netlify.toml file
fs.readFile(path.resolve(__dirname, netlifyConfig), 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ', err);
    return;
  }

  // Split the file content into lines
  const lines = data.split('\n');

  // Process each line
  const processedLines = lines.map((line) => {
    // -> default-src 'self';
    // <- default-src 'self' blob:;
    line = line.replace(/(default-src) ('self')(;)/, '$1 $2 blob:$3');

    // -> style-src 'self' cdn.hypothes.is giscus.app;
    // <- style-src 'self' 'unsafe-inline' cdn.hypothes.is giscus.app;
    line = line.replace(/(style-src) ('self') (cdn\.hypothes\.is giscus\.app)(;)/, '$1 $2 $3 \'unsafe-inline\'$4');

    // -> media-src 'self';
    // <- media-src 'self' blob: https://app.netlify.com;
    line = line.replace(/(media-src) ('self')(;)/, '$1 $2 blob: https://app.netlify.com$3');

    // -> frame-src hypothes.is giscus.app;
    // <- frame-src hypothes.is giscus.app app.netlify.com;
    line = line.replace(/(frame-src) (hypothes\.is giscus\.app)(;)/, '$1 $2 app.netlify.com$3');

    // -> script-src 'self' www.googletagmanager.com hypothes.is cdn.hypothes.is giscus.app;
    // <- script-src 'self' www.googletagmanager.com hypothes.is cdn.hypothes.is giscus.app netlify-cdp-loader.netlify.app;
    line = line.replace(
      /(script-src) ('self' www\.googletagmanager\.com hypothes\.is cdn\.hypothes\.is giscus\.app)(;)/,
      '$1 $2 netlify-cdp-loader.netlify.app$3'
    );

    return line;
  });

  // Join the processed lines back into a single string
  const output = processedLines.join('\n');

  // Write the modified content back to the file
  fs.writeFile(path.resolve(__dirname, netlifyConfig), output, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }

    console.log('Done');
  });
});
