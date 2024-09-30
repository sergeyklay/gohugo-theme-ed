# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.8.0...HEAD)

### Added

- Added `https://schema.org/WebPage` itemtype to base HTML layout to improve
  the site's SEO and accessibility.
- Added support for Google Tag Manager. The theme now checks if Google Tag
  Manager is enabled and disables Google Analytics accordingly.
  [See the documentation for details](https://gohugo-theme-ed.netlify.app/documentation/#integrating-analytics-with-ed).
- Added `layouts/partials/head/author.html` and `showAuthor` configuration parameter
  to allow users to display the author's name on the site's pages.
  [See the documentation for details](https://gohugo-theme-ed.netlify.app/documentation/#configuring-author-selection).

### Changed

- Simplified setting of language and direction for the site by using the
  `site.Language.LanguageCode` and `site.Language.LanguageDirection` variables.
  This change simplifies the theme's configuration and aligns with Hugo's best
  practices.
- Use new `css.Sass` for new Hugo versions instead of `resource.ToCss` to ensure
  compatibility with future  versions of Hugo.
- The default location of Google Analytics configuration was changed to
  `config.services.googleAnalytics` and `privacy.googleAnalytics` to align with
  Hugo's standard configuration.
  [See the documentation for details](https://gohugo-theme-ed.netlify.app/documentation/#integrating-analytics-with-ed).

### Removed

- Removed `GetLanguageDirection` function as it is no longer needed.
- Drop support of AnonymizeIp configuration parameter for Google Analytics as
  it is no longer relevant in Google Analytics >= v4.
- Removed custom RSS template (`layouts/_default/list.feed.xml`), relying
  entirely on Hugo's built-in rendering.
- Removed `layouts/partials/alternate-outputs.html` partial. Alternate outputs
  (e.g., RSS, Atom feeds, etc.) are now handled in `layouts/partials/head.html`.
- Removed the following partials:
  - `layouts/partials/author.html`
  - `layouts/partials/post-meta/author.html`
  - `layouts/partials/site-author.html`
  These partials are no longer used in the theme.
  [See the documentation for details](https://gohugo-theme-ed.netlify.app/documentation/#configuring-author-selection).
- Removed custom sitemap template (`layouts/_default/sitemap.xml`), relying
  entirely on Hugo's built-in rendering.    

## [v0.8.0](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.7.0...v0.8.0)

### Added

- Introduced a new partial template `site-last-mod.html` to handle site last
  modification date more robustly across Hugo versions. This change accommodates
  the deprecation of `.Site.LastChange` in favour of `.Site.Lastmod` for Hugo
  versions equal to or greater than 0.123.0. Usage:
  ```
  {{ $siteLastMod := partial "site-last-mod.html" . }}
  ```
- Introduced a new partial template `site-author.html` to handle site author
  information more consistently across Hugo versions. This change accommodates
  the deprecation of `site.Author` in favour of `site.Params.author` for Hugo
  versions equal to or greater than 0.124.0. Usage:
  ```
  {{ $siteAuthor := partial "site-author.html" . }}

  {{ with $siteAuthor.name }} {{ . }} {{ end }}
  {{ with $siteAuthor.email }} {{ . }} {{ end }}
  {{ with $siteAuthor.github }} {{ . }} {{ end }}
  {{ with $siteAuthor.twitter }} {{ . }} {{ end }}
  {{ with $siteAuthor.location }} {{ . }} {{ end }}
  ```
- Provided support for giscus comments, enabling interactive discussions on site
  pages. This includes:
  - A new JavaScript file (`giscus.js`) handling the dynamic loading of giscus
    scripts based on site configuration.
  - Configuration settings for giscus in the `exampleSite/config/_default/params.yaml`
    to allow users to easily enable and configure giscus comments from the site's
    parameters.

### Changed

- Updated the minimum required Hugo version for this theme to 0.121.0.
- Refactored the theme configuration in `exampleSite/config/_default/config.yaml`
  to use Hugo's module imports instead of the `theme` variable. The theme's
  repository path is now specified under the `imports` section in the `module`
  block. This change improves clarity and aligns with Hugo's recommended practices
  for managing theme dependencies.
- Replaced the deprecated `--verbose` flag with `--logLevel info` in the npm
  script for `server` in `package.json`. This change addresses a deprecation
  warning introduced in Hugo v0.114.0, ensuring compatibility with future versions
  of Hugo.
- Replace Go script with Node.js implementation for Netlify redirects patching
  for Deploy Preview context.
- Updated Atom and RSS feed templates to use the `site-last-mod.html` partial for
  dynamically setting the site's last modification date.
  - In `list.atom.xml`, replaced `site.LastChange` with `$siteLastMod` in the
    `<updated>` tag.
  - In `list.feed.xml`, replaced `site.LastChange` with `$siteLastMod` in the
    `<lastBuildDate>` tag.
- Updated `humans.txt`, Atom feed, RSS feed, JSON feed, author partial, and
  schema.org Article template to use the `site-author.html` partial for
  retrieving site author information.
- Moved site author configuration from `config.yaml` to `params.yaml` to align
  with the recommended usage of `site.Params.author`.

### Fixed

- Fix Atom / RSS feed formats to meet the standard
- Fixed broken link in documentation.

## [v0.7.0](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.6.0...v0.7.0)

### Added

- Added support of E2E tests on CI/CD stage using Playwright

### Changed

- Updated dev dependencies to test and build project
- Updated contributing documentation
- Used latest LTS Node.js version in CI/CD pipeline
- Renamed master branch to main

### Security

- Updated security policy by providing new address to report vulnerabilities

## [v0.6.0](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.5.0...v0.6.0)

### Added

- Provide annotation support via https://hypothes.is

### Changed

- Set the language target to `es2015` when build JavaScript
- Use HTML5 `<template>` tag to render search results
- Changed generic CSS classes for common text purposes:
  - Renamed `p.centered` to `.text-center`
  - Renamed `p.larger` to `.fs-4`
  - Renamed `p.large` to `.fs-5`
  - Renamed `p.small` to `.fs-7`
  - Removed `li.centered` in favour of `.text-center`

### Fixed

- Fix opening external links in new tab/window when use
  Google Site Tag tagging/analytics framework
- Correct Regex to match sentence boundary when render search result

## [v0.5.0](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.4.0...v0.5.0)

### Added

- Provide template to render pure JSON of the site contents.
- Provide search feature.
- Provide ability to specify semantic page type in Front Matter
  (will be used for Schema.org)
- Provide ability to mark links as external using svg icon
- Provide minimal tag cloud
- Provide 'Back to top' functionality

### Changed

- Rename template to render JSON Feed from `list.json.json` to `list.jsonfeed.json`
- Rename partial for Google Site Tag tagging/analytics
  framework from `layouts/partials/scripts.html` to `layouts/partials/seo/ga.html`
- Use Google Site Tag tagging/analytics framework on production mode only
- Rename `.Params.caption` to `.Params.pageTitle` Front Matter param
- Rename `.Params.featured_image` to `.Params.featuredImage` Front Matter param
- Rename `site.Social.facebook_id` to `site.Params.social.facebookId`
- Rename `site.Social.facebook_admin` to `site.Params.social.facebookAdminIds`
- Rename `site.Social.twitter` to `site.Params.social.twitter`
- Disable categories taxonomy as not used by Ed

### Removed

- Remove no longer needed jQuery library
- Remove no longer used `layouts/partials/data.html` partial

## [v0.4.0](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.3.0...v0.4.0)

### Added

- Add `keywords` to schema.org metadata
- Add support for Global site tag (Google Analytics)
- Add support for jQuery

### Changed

- Rework post dates format. Now they prefixes with "Published on" and "Updated on"
- Rework single post layouts. Reduce the number of layouts for poems, dramas,
  narratives and posts to one
- Rename `site.Params.seoKeywords` to `site.Params.keywords` to match the Hugo
  documentation
- Global `site.Params.keywords` may be overridden by `.Params.keywords` or
  `.Params.tags` in the post front matter
- Use builtin `.TableOfContents` to generate table of contents in the sidebar
- Change the way you enable table of contents in the sidebar. Now you can
  enable/disable it in the front matter using `toc: true` or `toc: false`

### Fixed

- Fix tags html layout
- Add missed `theme-color` meta tag
- Enable maskable icon support
- Rework term rendering for Atom feeds to not include duplicates
- Remove redundant `<aside>` tags around the post's ToC
- Fix date format for sitemap

## [v0.3.0](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.2.0...v0.3.0)

### Added

- Provide ability to include custom scripts in the theme
- Provide ability to specify custom language of a post
- Add tagging support
- Provide ability to hide particular page from the sitemap by using
  `private: true` in front matter
- Provided initial support os schema.org microdata for the site
  and for the posts

### Changed

- Minor reformatting of posts layout
- Allow manually override `lastmod` for posts
- Check that `lastmod` exists and is greater than `date` before printing it
- Do not allow modification of date formats that are required by spec

## [v0.2.0](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.1.0...v0.2.0)

### Added

- Add multilanguage support
- Add Russian translation
- Provide an ability to use `hreflang` attribute in `link` shortcode
- Add `{{< mini-toc >}}` shortcode
- Provide ability to use `keywords` meta tag
- Provide ability to render feeds menu
- Add pagination support

### Changed

- Amend documentation
- Do not show "Latest Publications" section at the homepage if there are no publications
- Add fallback if main sections are not configured
- Reformat default 404 page
- Rework the "Latest Publications" section, add post date
- Add 404 page to robots.txt file (to prevent search engines from indexing it)
- Footer text now is fully optional (do not show default text if it is empty)

### Fixed

- Fix margin bottom on the nested unordered lists for page's table of contents
- Fix default section type for the `params.mainSections` configuration variable
- Fix url to sitemap in `robots.txt` file

## v0.1.0 - 2022-05-27

- Initial release
