# Ed
A theme for [Hugo](http://gohugo.io), a framework for building websites.

## Configuration

### `config.toml` example

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'Ed.'
theme = 'ed'

# Used in authorbox
[Author]
  name = 'John Doe'

[Params]
    # Site description. Used in meta description
    description = 'Ed is a Hugo theme designed for textual editors based on minimal computing principles, and focused on legibility and flexibility.'
    # Color scheme. Options: red, orange, magenta, cyan, blue, brown
    color_scheme = ''
    # Github project url. Used in sidebar
    github_url = 'https://github.com/user/project'

[menu]
  [[menu.nav]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.nav]]
    name = "Posts"
    url = "/posts/"
    weight = 2
  [[menu.nav]]
    name = "Tags"
    url = "/tags/"
    weight = 3
```
