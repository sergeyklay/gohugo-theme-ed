# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/sergeyklay/gohugo-theme-ed/compare/v0.2.0...HEAD)

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
