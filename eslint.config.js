'use strict';

const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    rules: {
      // Possible Errors
      //
      // The following rules point out areas where you might have made mistakes.

      // disallow or enforce trailing commas
      'comma-dangle': ['error', 'never'],

      // disallow use of console
      'no-console': 'warn',

      // Best Practices
      //
      // These are rules designed to prevent you from making mistakes.
      // They either prescribe a better way of doing something or help you avoid footguns.

      // require the use of === and !==
      'eqeqeq': ['error', 'always'],

      // disallow the use of alert, confirm, and prompt
      'no-alert': 'error',

      // disallow use of eval()
      'no-eval': 'error',

      // disallow use of multiple spaces
      'no-multi-spaces': 'error',

      // Strict Mode
      //
      // These rules relate to using strict mode.

      // controls location of Use Strict Directives
      'strict': ['error', 'global'],

      // Stylistic Issues
      //
      // These rules are purely matters of style and are quite subjective.

      // this option sets a 2-space indentation for your code
      'indent': ['warn', 2],

      // enforce one true brace style (1tbs)
      'brace-style': 'warn',

      // require camel case names
      'camelcase': 'warn',

      // enforce spacing before and after comma
      'comma-spacing': ['warn', { 'before': false, 'after': true }],

      // enforce one true comma style
      'comma-style': ['warn', 'last'],

      // enforce newline at the end of file, with no multiple empty lines
      'eol-last': ['warn', 'always'],

      // specify whether double or single quotes should be used
      'quotes': ['warn', 'single'],

      // require or disallow use of semicolons instead of ASI
      'semi': ['warn', 'always'],

      // enforce spacing before and after semicolons
      'semi-spacing': ['warn', { 'before': false, 'after': true }],

      // sort variables within the same declaration block
      'sort-vars': 'warn',

      // ECMAScript 6
      //
      // These rules are only relevant to ES6 environments.

      // require let or const instead of var
      'no-var': 'error'
    },

    languageOptions: {
      // Specify the version of ECMAScript syntax you want to use
      'ecmaVersion': 'latest',

      globals: {
        // Browser global variables
        ...globals.browser
      }
    },

    linterOptions: {
      // Report unused eslint-disable comments
      reportUnusedDisableDirectives: true
    }
  },
  {
    files: ['tests/*.spec.js', 'eslint.config.js', 'playwright.config.js'],
    languageOptions: {
      'sourceType': 'commonjs'
    }
  },
  {
    files: ['playwright.config.js'],
    languageOptions: {
      globals: {
        // Browser global variables
        ...globals.node
      }
    }
  },
  {
    files: ['netlify-preview.js'],
    rules: {
      // allow use of console
      'no-console': 'off'
    },
    languageOptions: {
      'sourceType': 'commonjs',
      globals: {
        // Browser global variables
        ...globals.node
      }
    }
  }
];
