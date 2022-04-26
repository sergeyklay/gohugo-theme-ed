# Ed

Ed is a [Hugo][hugo] theme designed for textual editors based on
[minimal computing][mincomp] principles, and focused on legibility,
durability, ease and flexibility.

This theme is adopted from [Jekyll](https://jekyllrb.com/) [Ed][ed-original] theme
by [Alex Gil][gil-twitter].

## Introduction

One of our most pressing and ever-evolving needs as scholars is to pass on our textual artifacts
from one generation to another. The art of textual editing, among other practices, has helped many
cultures to remember and interpret for centuries. Alas, that art is practiced and encouraged in its
highest form by a dwindling number of scholars. In a digital environment the problem is compounded
by the difficulties of the medium. While vast repositories and "e-publications" appear on the
online scene yearly, very few manifest a textual scholar's disciplined attention to detail. In
contrast, most textual scholars who have made the leap to a rigorous digital practice have focused
on markup, relying on technical teams to deploy and maintain their work. This makes your average
scholarly digital edition a very costly and therefore limited affair.

As we see it, a minimal edition is one that aims to reduce the size and complexity of the back and
front end while flattening the learning curves for the user and the producer. Out of the box, the Ed
theme can help you build a simple reading edition, or a traditional scholarly edition with footnotes
and a bibliography, without breaking the bank. In our estimate, these are the two most immediately
useful type of editions for editors and readers. An edition produced with Ed consists of static
pages whose rate of decay is substantially lower than database-driven systems. As an added bonus,
these static pages require less bandwidth. Our hope is that our approach can help beginners and
veterans deploy beautiful editions with less effort, and that it can help us teach a 'full stack'
[in one academic semester][minimal-editions], while allowing us to care for our projects at less
cost, and perhaps, just perhaps, to generate high-quality editions on github.io in large quantities
based on the [git-lit][git-lit] model by Jonathan Reeve. We're coming for you, Kindle!

## Features

- Responsive
- Accessible

## Getting started

### The config file

Take a look inside the [`exampleSite`][example-site] folder of this theme.
You'll find a file called [`config.toml`][config-sample]. To use it, copy the
[`config.toml`][config-sample] in the root folder of your Hugo site. Feel
free to change the strings in this theme.

You may need to delete the line: `resourceDir = "../resources"`.

## License

Ed licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

[hugo]: http://gohugo.io
[mincomp]: http://go-dh.github.io/mincomp/
[ed-original]: https://github.com/minicomp/ed
[gil-twitter]: https://twitter.com/elotroalex
[minimal-editions]: https://github.com/susannalles/MinimalEditions/blob/master/README.md
[git-lit]: http://jonreeve.com/2015/09/introducing-git-lit/
[example-site]: https://github.com/sergeyklay/gohugo-theme-ed/tree/master/exampleSite
[config-sample]: https://github.com/sergeyklay/gohugo-theme-ed/blob/master/exampleSite/config.toml
