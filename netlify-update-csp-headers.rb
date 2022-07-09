#!/usr/bin/env ruby

NETLIFY_CONFIG = 'netlify.toml'

text = File.read(NETLIFY_CONFIG)

# => default-src 'self';
# <= default-src 'self' blob:;
text = text.gsub(
    /(default-src) ('self')(;)/,
    "\\1 \\2 blob:\\3"
)

# => style-src 'self';
# <= style-src 'self' 'unsafe-inline';
text = text.gsub(
    /(style-src) ('self')(;)/,
    "\\1 \\2 'unsafe-inline'\\3"
)

# => media-src 'self';
# <= media-src 'self' blob: https://app.netlify.com;
text = text.gsub(
    /(media-src) ('self')(;)/,
    "\\1 'self' blob: https://app.netlify.com\\3"
)

# => frame-src 'none';
# <= frame-src app.netlify.com;
text = text.gsub(
    /(frame-src) ('none')(;)/,
    "\\1 app.netlify.com\\3"
)

# => script-src 'self' *.googletagmanager.com;
# <= script-src 'self' *.googletagmanager.com netlify-cdp-loader.netlify.app;
text = text.gsub(
    /(script-src) ('self' \*.googletagmanager.com)(;)/,
    "\\1 \\2 netlify-cdp-loader.netlify.app\\3"
)

File.open(NETLIFY_CONFIG, "w") { |file| file << text }
