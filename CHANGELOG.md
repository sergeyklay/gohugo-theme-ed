# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.6.0...HEAD)

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
