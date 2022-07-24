---
title: Documentation
author: Alex Gil
featuredImage: screenshot-home.png
---

{{< toc >}}

---

## Prerequisites

This documentation was built with beginners in mind, but has the necessary information for more seasoned producers.

To install and use Ed you will be using your terminal. If you need a refresher, I highly recommend "{{< link src="https://www.computervillage.org/articles/CommandLine.pdf" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}The Command Line Crash Course{{< /link >}}". Working knowledge of HTML and CSS is also taken for granted. If you're new to HTML and CSS, you may want to check out the relevant courses on {{< link src="https://www.codecademy.com/learn/web" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}codecademy.com{{< /link >}}.

---

## Installing Ed

Before starting, please be sure that you have {{< link src="https://gohugo.io/getting-started/quick-start/#step-1-install-hugo" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}installed Hugo{{< /link >}} and {{< link src="https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}created a new site{{< /link >}}. After that, you are ready to install Ed.

Please note, to install Ed, you must have {{< link src="https://golang.org/dl/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Go >= 1.12{{< /link >}} installed on your computer. You probably have Go already, but if you don't, the easiest way is probably to install is to follow {{< link src="https://go.dev/doc/install" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Go installation instruction{{< /link >}}. To check if Go is running on your system enter the following line on your terminal (remember to ignore the `$`):

~~~ bash
$ go version
~~~

If you don't get an error, you're good to go. Using the `cd` command on your terminal, navigate to the folder where you keep your web projects. Once you're in the folder where project live, initialize the {{< link src="https://gohugo.io/hugo-modules" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Hugo Modules{{< /link >}} system using the following line (replace `<your_user>` and `<your_project>` by real names):

~~~ bash
$ hugo mod init github.com/<your_user>/<your_project>
~~~

Take a look inside the `{{< link src="https://github.com/sergeyklay/gohugo-theme-ed/tree/master/exampleSite" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}exampleSite{{< /link >}}` folder of this theme. You'll find a folder called `{{< link src="https://github.com/sergeyklay/gohugo-theme-ed/blob/master/exampleSite/config" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}config{{< /link >}}`. Copy the `config` folder in the project root of your Hugo site. Check the contents of the `config` folder and configure it.

After that, import the theme adding the following lines to `config/_default/config.yaml`:

~~~ yaml
module:
  imports:
    - path: github.com/sergeyklay/gohugo-theme-ed
~~~

Finally, install Hugo Modules using the following command (remember you can copy and paste):

~~~ bash
$ hugo mod get
~~~

---

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

If you create a new Hugo project, the `content` folder is blank by default. You can copy the `content` folder from `exampleSite/content` to the project root directory to preview.

To see if Ed is working properly we will take advantage of Hugo's built in server. You can build the first version of your site and run the Hugo server at the same time by entering:

~~~ bash
$ hugo server
~~~

Copy the url from your terminal log and paste it into your browser of choice. This url usually looks something like this `http://localhost:1313`. At this point you should be looking at your very own working version of Ed:

{{< img src="screenshot-home.png" alt="Your very own Ed" >}}

---

## Hugo

Ed is a Hugo theme. That means you will need some familiarity with Hugo to take advantage of its full potential. While running a Hugo site is a bit more involved than Wordpress and other similar tools, the payoff in the long term is worth the effort to learn it. If you are new to Hugo, I recommend you take a look at {{< link src="https://strapi.io/blog/guide-to-using-hugo-site-generator" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}A Guide to Using Hugo{{< /link >}} at *Strapi*, {{< link src="https://gohugo.io/hosting-and-deployment/hosting-on-github/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Host on GitHub{{< /link >}} on *Hugo Documentation Site* and {{< link src="https://gohugo.io/documentation/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Hugo's own documentation{{< /link >}} to start getting a sense of how it works.

Once you have gone through these tutorials, you can get started using Ed. Remember to always and only edit content files for your site using {{< link src="https://en.wikipedia.org/wiki/Text_editor" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}a plain text editor{{< /link >}}, and *not* a word processor. I'm composing this file using a plain text editor called {{< link src="https://code.visualstudio.com/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Visual Studio Code{{< /link >}}.

You should make sure that all your texts have the YAML {{< link src="https://gohugo.io/content-management/front-matter/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Front Matter{{< /link >}} (the information at the top of the file). YAML stands for "YAML Ain't Markup Language" --- no disrespect to XML --- and it's the main way that Hugo handles named data. Here's an example of YAML Front Matter:

~~~ yaml
---
# Common-Defined params
title: "Cahier d'un retour au pays natal"
draft: true # Is this text a draft?
tags:
  - Tag
  - "Another tag"
date: 2022-02-01T14:56:58+02:00
lastmod: 2022-05-01T14:56:58+02:00

# Theme-Defined params
author: Aimé Césaire # Author of the text
editor: Alex Gil # Editor of the text
source: Project Guttenberg # The source of the text
rights: Public Domain # Rights for this text
pageTitle: Hello! # The title for the content w/o setting <title> tag
toc: true # Enable Table of Contents for specific page
private: true # Hide text from search engines
semanticType: about # Semantic type of the work (used for Schema.org)
featuredImage: screenshot-home.png # Featured image of the text
annotations: false # Disable annotation via hypothesis on this page
---
~~~

For more information about all available standard front matter variables, please read {{< link src="https://gohugo.io/content-management/front-matter/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Hugo Front Matter{{< /link >}}.

---

## Markdown and CommonMark

Ed is designed for scholars and amateur editors who want to produce either a clean reading edition or a scholarly annotated edition of a text. The main language we use to write in the Hugo environment is called Markdown. To learn more about the Markdown family, see Dennis Tenen and Grant Wythoff's "{{< link src="http://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Sustainable Authorship in Plain Text using Pandoc and Markdown{{< /link >}}".

By default Hugo uses a special Markdown processor called Goldmark. The processor can be said to use it's own 'flavor' of Markdown called CommonMark, and sometimes the Markdown syntax will be different than other flavors of Markdown. CommonMark is a rationalized version of Markdown syntax with a spec whose goal is to remove the ambiguities and inconsistency surrounding the original Markdown specification. It offers a standardized specification that defines the common syntax of the language along with a suite of comprehensive tests to validate Markdown implementations against this specification. You can become familiar with the CommonMark syntax in the {{< link src="https://spec.commonmark.org/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}CommonMark documentation{{< /link >}}. Another way to become familiar is to examine the sample text source files we provided.

---

## Genres

Ed offers three different layouts: poem, narrative and drama. To create content of a certain genre, create a file in the appropriate folder. For example, if you want to create a poem, create a file in the `content/poem` folder. Another way is to indicated genre in the YAML front matter on your texts. The templates that govern how these genres are displayed can be found in the Ed's `layouts` folder. Redefining these layouts in project wide level will allow you to tweak the stylesheets according to your different needs. Out of the box, Ed contains some special instructions for poetry in its stylesheets that allow you to deal with some of the peculiarities of poetry layouts.

To indicate lines in poetry we use the line syntax from Markdown:

~~~ markdown
- Hold fast to dreams
- For if dreams die
- Life is a broken-winged bird
- That cannot fly.
- Hold fast to dreams
- For when dreams go
- Life is a barren field
- Frozen with snow.
~~~

The `-` at the beginning of each line indicates that these are lines. Another way to achieve the same effect is to use the following syntax:

~~~ markdown
Hold fast to dreams\
For if dreams die\
Life is a broken-winged bird\
That cannot fly.\
Hold fast to dreams\
For when dreams go\
Life is a barren field\
Frozen with snow.
~~~

To indent specific lines we take advantage of Hugo shortcuts that allows us to create empty indentation for a line. This approach still allows the line to be readable while editing.

~~~ markdown
- {{</* indent 3 */>}} But O heart! heart! heart!
- {{</* indent 4 */>}} O the bleeding drops of red,
- {{</* indent 5 */>}} Where on the deck my Captain lies,
- {{</* indent 6 */>}} Fallen cold and dead.
~~~

or:

~~~ markdown
{{</* indent 3 */>}} But O heart! heart! heart!\
{{</* indent 4 */>}} O the bleeding drops of red,\
{{</* indent 5 */>}} Where on the deck my Captain lies,\
{{</* indent 6 */>}} Fallen cold and dead.
~~~

The `{{</* indent 3 */>}}` is what we need to in order to indicate the indent value for that line. Values can range from 1-10. You can expand the range or adjust the values in the custom stylesheet file. Ed is customized by creating stylesheet files in `assets/css/extended/*.css` at project wide level.

The example from Raisin in the Sun shows us that we don't need much special markup for theater as long as we use CAPITAL LETTERS for speakers. Italics for directions are easy enough. Just use `*` around the words you want to italicize.

*Narrative of the Life of Frederick Douglass* shows us an example of narrative that includes footnotes and quoted poetry. See the sections below for how to accomplish these different effects.

---

## Footnotes

Footnotes are the bread and butter of scholarship. Hugo makes footnotes a fairly simple affair:

~~~ markdown
- O Captain! my Captain! rise up and hear the bells;
- Rise up—for you the flag is flung—for you the bugle[^1] trills,

...

[^1]: The bugle is a small trumpet implicated in the military industrial complex.
~~~

These footnotes can be placed anywhere, but they will always be generated at the bottom of the document. To have a multi-paragraph footnote you need to start the footnote text on the next line after the footnote anchor and indent it:

~~~ markdown
[^1]: Ugh pinterest fixie cronut pitchfork beard. Literally deep
      cold-pressed distillery pabst austin.

      Typewriter 90's roof party poutine, kickstarter raw
      denim pabst readymade biodiesel umami chicharrones XOXO.
~~~

Please note, you need to indent all lines at the same level to make them stay inside the footnote.

At the moment (May 2022) time the footnotes system provided by Hugo does have one limitation: It does not support non-numbered footnotes, and it only allows you to have one set of footnotes for a text. In some cases we have to separate the author's footnotes from our own, in others we want to represent the author's own footnote style. In these cases we have to use custom Ed's shortcode for footnotes. Here's the example from *Narrative of the Life*:

~~~ markdown
... At this time, Anna,{{</* footnote "fn2" */>}} my intended wife, came on;

...

{{</* footnotesList */>}}
...
{{</* citation "fn2" "She was free." */>}}
...
{{</* /footnotesList */>}}
~~~

---

## Blockquote

*Narrative of the Life* also includes several blockquote elements. You can also find another example of blockquote use in the footnote of "O Captain! My Captain!" Simple blockquote are simple enough in Markdown:

~~~
> This is to certify that I, the undersigned, have given the bearer, my servant, full liberty to go to Baltimore, and spend the Easter holidays.
>
> Written with mine own hand, &c., 1835.
> WILLIAM HAMILTON,
~~~

To use a line break in block elements add two spaces after the end of the line where you want the break. You can't see them after `&c., 1835.` but they are there.

Things get a bit complicated when we want to use poetry inside the block or when the block is included in another block element, like a footnote. Here's the last two stanzas from "A Parody" in *Narrative of the Life*, which shows an example of a blockquote of poetry:

~~~
...
> - Two others oped their iron jaws,
> - And waved their children-stealing paws;
> - There sat their children in gewgaws;
> - By stinting negroes' backs and maws,
> - They kept up heavenly union.
{.poetry}
> - All good from Jack another takes,
> - And entertains their flirts and rakes,
> - Who dress as sleek as glossy snakes,
> - And cram their mouths with sweetened cakes;
> - And this goes down for union.
{.poetry}
~~~

The `{.poetry}` tag at the end tells the processor to think of the lines above it as poetry. The `{.poetry}` tag is an example of Goldmark class assignments for block-elements. Because this segment of poetry exists in the 'narrative' layout, and because it is part of a blockquote, we need to signal to the processor to process poetry this way, so that the right class is invoked in the stylesheet. The good news is this is the most complex Goldmark syntax layout you will encounter in Ed.


## Pages

Your editions are treated as {{< link src="https://gohugo.io/content-management/sections/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}sections{{< /link >}} or {{< link src="https://gohugo.io/content-management/page-bundles/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}page bundles{{< /link >}} in Ed. Other web pages in your site exist outside the `content` folder. Default homepage, for example, is constructed from the `index.html` file found on the `layouts` folder of Ed theme.

You will notice that the homepage in particular has a `.html` file ending instead of a `.md` ending. All template files in Hugo are HTML, and the index behaves as a template file. Although these files are mostly written in HTML, notice that they may contain {{< link src="https://gohugo.io/templates/introduction/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}template tags{{< /link >}}. To create your own homepage create `index.html` file in project `layouts` folder, making sure that your changes to `index.html` are written in valid HTML. The same goes for all Ed's template files in the `layouts` folder.

---

## Tables of Content

You will find three kinds of Tables of Content in Ed. The first example is in the list of Latest Publications in the Homepage. This list is generated using the {{< link src="https://gohugo.io/templates/introduction/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}templating language{{< /link >}}. This is one of the major components of Hugo, and I recommend you deepen your knowledge of it if you want to modify the logic that automates much of Ed. Here is the code that generates the Latest Publications list on the homepage:

~~~ html
<div class="toc">
  <h2>Latest Publications</h2>
  <ul class="texts">
      {{ range first 10 (where site.RegularPages.ByDate.Reverse "Type" "in" site.Params.mainSections) }}
          <li class="text-title">
              <a href="{{ .Permalink }}">{{ .Title }}</a>
          </li>
      {{ end }}
  </ul>
</div>
~~~

To override this list, create file `mini-toc.html` inside `layouts/partials` folder.

As you can see, the templating tags `{{ }}` are embedded into the HTML. These tags often use programmatic logic, as is the case here. However, another use of these tags is pull data from your project. In the example above it pulls the `Title` from each allowed post type.

As you may have noticed already, we are basically adapting the blogging features of Hugo to our own ends, what Cuban designer and theorist Ernesto Oroza would call "{{< link src="https://www.ernestooroza.com/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}technological dissobedience{{< /link >}}".

The second kind of table of content is exemplified in this documentation. If you open the source file for the documentation, you will notice at the top this snippet:

~~~ markdown
{{</* toc */>}}
~~~

This is the Hugo way. The shortcode, `{{</* toc */>}}` tells the processor to create a table of contents based on headers in the document. You can use this syntax in any page on the site that uses headers.

The third way is simple as the previous one, but very useful for long texts. If we enable the table of contents in the YAML front matter of a page:

~~~ yaml
toc: true
~~~

Ed will activate the optional table of content sidebar (`layouts/partials/sidebar-toc.html` in Ed) and move the table of contents to a special sidebar for that page. *Narrative of the Life* uses this method for its table of content. 

The internal links pointing to the right sections in your document are generated from the title names automatically. If you can figure out how Ed accomplishes this trick, you have graduated from the Ed school of minimal editions.

---

## Getting help

That should do it. If you have suggestions on how to improve Ed, make sure to leave us a line on {{< link src="https://github.com/sergeyklay/gohugo-theme-ed/issues" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}our issues page{{< /link >}}, or send us a pull request. If you run into an issue that isn't answered by this documentation or the `{{< link src="https://github.com/sergeyklay/gohugo-theme-ed/tree/master/exampleSite" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}exampleSite{{< /link >}}`, then visit the {{< link src="https://discourse.gohugo.io/" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}Hugo forum{{< /link >}}. The folks there are helpful and friendly. **Before** asking your question, be sure to read the {{< link src="https://discourse.gohugo.io/t/requesting-help/9132" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}requesting help guidelines{{< /link >}}. Feel free to tag me in your question, my forum username is {{< link src="https://discourse.gohugo.io/u/egrep/summary" class="external" target="_blank" hreflang="en" rel="noopener noreferrer" >}}@egrep{{< /link >}}.


Happy editing!

Serghei Iakovlev
April 2022

Alex Gil
April 2016
