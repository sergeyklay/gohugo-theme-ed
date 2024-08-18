# Contributing to Ed

**Ed** welcomes contributions and corrections. Before contributing, please make
sure you have read the guidelines below. If you're a newcomer to open source,
and you haven't contributed to other projects or used [Git](https://git-scm.com/)
before, you should make yourself familiar before proceeding.

If you would like to contribute to Ed, please take a look at the
[current issues](https://github.com/sergeyklay/gohugo-theme-ed/issues).
If there is a bug or feature that you want, but it isn't listed, make an issue
and work on it.

## Issues

The [issue tracker](https://github.com/sergeyklay/gohugo-theme-ed/)
is the preferred channel for bug reports and features requests, but please
respect the following restrictions:

### General requirements

- Issue must be written in English.
- Please **do not** combine a few problems or feature requests in one issue.
  Create separate issues if needed.
- Please **do not** duplicate issues.
- Please **do not** create an issue that contains only title.
  Write a clear title and useful description.
- Please **do not** use the issue tracker for personal support requests.
- Please **do not** post comments consisting solely of "+1" or emoji.
  The project maintainer reserve the right to delete such comments. Use
  [GitHub's reactions feature](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)
  instead.
- Search first before filing a new issue. Please check existing open
  or recently closed issues to make sure somebody else hasn't already
  reported the issue.

### Reporting bugs

When creating a new bug issue make sure to include the following
information:

- Your environment e.g. OS version, Hugo version, theme is up to date?
  Anything unusual about your environment or deployment.
- Specify the exact steps to reproduce the bug in as many details as
  possible with code examples. Include links to files or demo projects,
  or copy/pasteable snippets, which you use in those examples.
- Any message or error you get from Hugo, if you do.
- A screenshot of any visual bug.

### Proposing features

- Explain the proposed feature, what it should do, why it is useful,
  and alternatives considered if possible. Please note that the project
  maintainer may close this issue or ask you to create a Pull Request if
  this is not something that the project maintainer sees as a sufficiently
  high priority.

Following these guidelines helps maintainer and the community understand
your suggestion and find related suggestions.

## Pull Requests (PR)

**Please ask first** before embarking on any significant pull request
(e.g. implementing features or refactoring code), otherwise, you risk
spending a lot of time working on something that the project maintainer
might not want to merge into the project.

Please respect our Pull Request Acceptance Criteria. For larger changes,
you will likely receive multiple rounds of comments, and it may take some
time to complete.

### Pull Request Acceptance Criteria

- Keep the change in a single PR as small as possible
- 1 PR = 1 FIX or FEATURE (do not combine things, send separate PR if needed)
  - PR with irrelevant changes won't be merged. If you do want to fix
    formatting or style, do that in a separate PR
- Provide a reasonable PR title and description
  - PR must be written in English
  - If the PR changes the UI it should include before-and-after
    screenshots or a link to a video
- Keep PR up to date with upstream/master
- Pay attention to any automated CI failures reported in the
  Pull Request
- PR solves a common use case that several users will need in their
  real-life projects, not only your specific problems
- If you've added or modify SVG, ensure that each SVG file:
  - Be less than 2048 bytes
  - Be minified to a single line with no formatting
  - Not contain any JS or CSS section inside it
  - Not contain any additional transformations (matrix, translate, scale)
  - Compatible with [MIT License](https://raw.githubusercontent.com/sergeyklay/gohugo-theme-ed/main/LICENSE)
- Maintain clean commit history and use meaningful commit messages.
  Pull Requests with messy commit history (with commit messages
  like "update", "another update", etc.) are difficult to review and won't
  be merged, even if the changes are good enough
- Be prepared to answer questions and make code changes. The project
  maintainer expect you to be reasonably responsive to those feedback,
  otherwise the PR will be closed after 2-4 weeks of inactivity

### Pull Request Contribution Prerequisites

- You have Node & npm installed
- You have Hugo installed at v0.121.0+
- You are familiar with Git

### Pull Request Process

1. Fork the repository
2. Clone down the repository to your local system
3. Run `npm i` in the repository root
4. Create a new *dedicated branch* with descriptive name from `main`
5. Make your change and commit to the new branch from the previous step
    1. Write a clear commit message
    2. If you've added code that need documentation, update
      `exampleSite/content/documentation/index.md` file.
6. Make sure your code lints (`npm run lint`)
7. Push to your fork
8. Submit a Pull Request (PR) to the upstream

---

**Note:** No guarantees can be made that your pull request will be accepted.

## License

By contributing to Ed, you agree that your contributions will be licensed under
[MIT License](https://raw.githubusercontent.com/sergeyklay/gohugo-theme-ed/main/LICENSE).
