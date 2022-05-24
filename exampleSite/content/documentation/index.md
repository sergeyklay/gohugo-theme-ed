---
title: Documentation
author: Alex Gil
---

## Contents
{:.no_toc}

* ToC
{:toc}

---

## Prerequisites

This documentation was built with beginners in mind, but has the necessary information for more seasoned producers.

To install and use Ed you will be using your terminal. If you need a refresher, I highly recommend "{{< link src="https://www.computervillage.org/articles/CommandLine.pdf" target="_blank" rel="noopener noreferrer" >}}The Command Line Crash Course{{< /link >}}." Working knowledge of HTML and CSS is also taken for granted. If you're new to HTML and CSS, you may want to check out the relevant courses on {{< link src="https://www.codecademy.com/learn/web" target="_blank" rel="noopener noreferrer" >}}codecademy.com{{< /link >}}.

---

## Installing Ed

Before starting, please be sure that you have {{< link src="https://gohugo.io/getting-started/quick-start/#step-1-install-hugo" target="_blank" rel="noopener noreferrer" >}}installed Hugo{{< /link >}} and {{< link src="https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site" target="_blank" rel="noopener noreferrer" >}}created a new site{{< /link >}}. After that, you are ready to install Ed.

The first step to install Ed is to download the source files from GitHub. To do so you must have git installed on your computer. You probably have git already, but if you don't, the easiest way is probably to install {{< link src="https://desktop.github.com/" target="_blank" rel="noopener noreferrer" >}}Github Desktop{{< /link >}} (even though we will be using git and github from the terminal in this tutorial). Mac users may want to ensure they have {{< link src="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer" >}}Xcode{{< /link >}} and its command line tools installed as well. To check if git is running on your system enter the following line on your terminal (remember to ignore the $):

~~~ bash
$ git --version
~~~

If you don't get an error, you're good to go. Using the `cd` command on your terminal, navigate to the folder where you keep your web projects. Once you're in the folder where project live, download it from github using the following line (remember you can copy and paste):

~~~ bash
$ git clone https://github.com/sergeyklay/gohugo-theme-ed.git themes/ed
~~~

Or, if you don't plan to make any significant changes but want to track and update the theme, you can add it as a git submodule via the following command:

~~~ bash
$ git submodule add https://github.com/sergeyklay/gohugo-theme-ed.git themes/ed
~~~

---

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

---

### The config file

Take a look inside the {{< link src="https://github.com/sergeyklay/gohugo-theme-ed/tree/master/exampleSite" target="_blank" rel="noopener noreferrer" >}}`exampleSite`{{< /link >}} folder of this theme. You'll find a file called {{< link src="https://github.com/sergeyklay/gohugo-theme-ed/blob/master/exampleSite/config.toml" target="_blank" rel="noopener noreferrer" >}}`config.toml`{{< /link >}}. To use it, copy the {{< link src="https://github.com/sergeyklay/gohugo-theme-ed/blob/master/exampleSite/config.toml" target="_blank" rel="noopener noreferrer" >}}`config.toml`{{< /link >}} in the root folder of your Hugo site. Feel free to change the strings in this theme.

You may need to delete the line: `themesDir = "../.."`, because it's necessary only for theme developers. Also, make sure  the theme option is set to `ed`:

~~~ toml
theme = "ed"
~~~

To see if Ed is working properly we will take advantage of Hugo's built in server. You can build the first version of your site and run the Hugo server at the same time by entering:

~~~ bash
$ hugo server
~~~

Copy the url from your terminal log and paste it into your browser of choice. This url usually looks something like this `http://localhost:1313`. At this point you should be looking at your very own working version of Ed:

{{< img src="screenshot-home.png" alt="Your very own Ed" >}}

---

## Hugo

Ed is a Hugo theme. That means you will need some familiarity with Hugo to take advantage of its full potential. While running a Hugo site is a bit more involved than Wordpress and other similar tools, the payoff in the long term is worth the effort to learn it. If you are new to Hugo, I recommend you take a look at {{< link src="https://strapi.io/blog/guide-to-using-hugo-site-generator" target="_blank" rel="noopener noreferrer" >}}A Guide to Using Hugo{{< /link >}} at *Strapi*, {{< link src="https://gohugo.io/hosting-and-deployment/hosting-on-github/" target="_blank" rel="noopener noreferrer" >}}Host on GitHub{{< /link >}} on *Hugo Documentation Site* and {{< link src="https://gohugo.io/documentation/" target="_blank" rel="noopener noreferrer" >}}Hugo's own documentation{{< /link >}} to start getting a sense of how it works.

Once you have gone through these tutorials, you can get started using Ed. Remember to always and only edit content files for your site using {{< link src="https://en.wikipedia.org/wiki/Text_editor" target="_blank" rel="noopener noreferrer" >}}a plain text editor{{< /link >}}, and *not* a word processor. I'm composing this file using a plain text editor called {{< link src="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" >}}Visual Studio Code{{< /link >}}.

You should make sure that all your texts have the YAML front matter (the information at the top of the file). YAML stands for "YAML Ain't Markup Language" --- no disrespect to XML --- and it's the main way that Hugo handles named data. Here's an example of YAML front matter:

~~~ yaml
---
title: "Cahier d'un retour au pays natal"
author: Aimé Césaire
draft: true
---
~~~

---

## Markdown and CommonMark

Ed is designed for scholars and amateur editors who want to produce either a clean reading edition or a scholarly annotated edition of a text. The main language we use to write in the Hugo environment is called Markdown. To learn more about the Markdown family, see Dennis Tenen and Grant Wythoff's "{{< link src="http://programminghistorian.org/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown" target="_blank" rel="noopener noreferrer" >}}Sustainable Authorship in Plain Text using Pandoc and Markdown{{< /link >}}."

By default Hugo uses a special Markdown processor called Goldmark. The processor can be said to use it's own 'flavor' of Markdown called CommonMark, and sometimes the Markdown syntax will be different than other flavors of Markdown. CommonMark is a rationalized version of Markdown syntax with a spec whose goal is to remove the ambiguities and inconsistency surrounding the original Markdown specification. It offers a standardized specification that defines the common syntax of the language along with a suite of comprehensive tests to validate Markdown implementations against this specification. You can become familiar with the CommonMark syntax in the {{< link src="https://spec.commonmark.org/" target="_blank" rel="noopener noreferrer" >}}CommonMark documentation{{< /link >}}. Another way to become familiar is to examine the sample text source files we provided.

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

## Blockquotes

*Narrative of the Life* also includes several blockquotes. You can also find another example of blockquote use in the footnote of "O Captain! My Captain!" Simple blockquotes are simple enough in Markdown:

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

Your editions are treated as {{< link src="https://jekyllrb.com/docs/collections/" target="_blank" rel="noopener noreferrer" >}}collections{{< /link >}} in Ed. Other web pages in your site exist outside the `_texts` folder. The homepage, for example, is constructed from the `index.html` file found on the root folder of your Ed project.

You will notice that the homepage in particular has a `.html` file ending instead of a `.md` ending. All template files in Jekyll are HTML, and the index behaves as a template file. Although these files are mostly written in HTML, notice that they still contain YAML front matter and liquid tags. To edit the homepage replace the content on the file shipped with Ed, making sure that your changes to `index.html` are written in valid HTML. The same goes for the template files in the `_layouts` folder.

Ed also comes with a search page, `search.html`. This page implements {{< link src="http://elasticlunr.com/" target="_blank" rel="noopener noreferrer" >}}elastic lunr{{< /link >}}, "a lightweight full-text search engine in Javascript for browser search and offline search." This simple search page can be useful if you have large collections of texts. If you don't, and don't feel the need, go ahead and delete it along with the `assets/js` folder.

Besides the homepage and the search page, Ed ships with an About page, `about.md` and a documentation page, `documentation.md`, i.e. this page. As you can see, these are regular `.md` files. You can replace the contents of each file using normal kramdown syntax. This also applies to any new page you create, which you should remember to save with an `.md` extension. When editing the `bibliography.md` file, be careful not to replace the liquid tag that generates your bibliography, unless you don't want to have a bibliography at all.

---

## Tables of Content

You will find three kinds of Tables of Content in Ed. The first example is in the list of Sample Texts in the Homepage. This list is generated using the {{< link src="http://liquidmarkup.org/" target="_blank" rel="noopener noreferrer" >}}Liquid Templating language{{< /link >}}. This is one of the major components of Jekyll, and I recommend you deepen your knowledge of it if you want to modify the logic that automates much of Ed. Here is the code that generates the Sample Texts list on the homepage:

~~~ html
<div class="toc">
  <h2>Sample texts</h2>
  <ul class="post">
  {% for item in site.texts %}
    <li class="text-title">
      <a href="{{ site.baseurl }}{{ item.url }}">
        {{ item.title }}
      </a>
    </li>
  {% endfor %}
  </ul>
</div>
~~~

As you can see, the liquid tags `{%raw%}{% %}{%endraw%}` and `{%raw%}{{ }}{%endraw%}` are embedded into the HTML. Those with `{%raw%}{% %}{%endraw%}` often use programmatic logic, as is the case here. If you are not already familiar with programming languages, you may need to start elsewhere. I recommend learning Ruby, since this is the language used to build jekyll and jekyll-scholar in the first place (it's also the first programming language I used, so I'm biased). The `{%raw%}{{ }}{%endraw%}` simply pulls data from your project. In the example above it pulls the title from each 'post', i.e. each edited text. As you may have noticed already, we are basically adapting the blogging features of Jekyll to our own ends, what Cuban designer and theorist Ernesto Oroza would call "{{< link src="http://www.ernestooroza.com/" target="_blank" rel="noopener noreferrer" >}}technological dissobedience{{< /link >}}."

The second kind of table of content is exemplified in this documentation. If you open the source file for the documentation, you will notice at the top this snippet:

~~~ markdown
## Contents
{:.no_toc}

* ToC
{:toc}
~~~

This is the kramdown way. The first tag, `{:.no_toc}` tells the processor not to add `## Contents` to the ToC. The second part creates an empty list and then tells the processor to replace it with a table of contents based on headers in the document. You can use this syntax in any page on the site that uses headers.

The third way is slightly more involved, but very useful for long texts. If we add the table of contents to the YAML front matter of a page, Ed will activate the optional table of content sidebar (`_includes/sidebar-toc.html`) and move the table of contents to a special sidebar for that page. *Narrative of the Life* uses this method for its table of content. If you would like to replicate this functionality in your own long texts, make sure to use the same syntax:

~~~ yaml
toc:
- Title Page
- Preface
- Letter From Wendell Phillips
- Chapter I
- Chapter II
~~~

The internal links pointing to the right sections in your document are generated from the title names automatically. In order for the links to work the names on section headings must contain the same words as the section headers. The punctuation and capitalization is irrelevant. If you can figure out how Ed accomplishes this trick, you have graduated from the Ed school of minimal editions.

---

## Bibliographies

If you want to include a small bibliography, and you feel it would be easier to write it out directly, Ed can help you render it with hanging indentation.  To achieve this effect make sure to use the `.bibliography` class in an ordered list. For example:

~~~ markdown
1. Douglass, Frederick et al. Narrative of the Life of Frederick Douglass: An American Slave. Charlottesville, Va.: University of Virginia Library, 1996. Open WorldCat. Web. 17 Apr. 2016.
2. Hansberry, Lorraine, and Robert Nemiroff. A Raisin in the Sun. Rep Rei edition. New York: Vintage, 2004. Print.
{.bibliography}
~~~

Which should display like this:

1. Douglass, Frederick et al. Narrative of the Life of Frederick Douglass: An American Slave. Charlottesville, Va.: University of Virginia Library, 1996. Open WorldCat. Web. 17 Apr. 2016.
2. Hansberry, Lorraine, and Robert Nemiroff. A Raisin in the Sun. Rep Rei edition. New York: Vintage, 2004. Print.
{:.bibliography}

---


To help us style and generate bibliographies and citations *automatically*, Ed can use the jekyll-scholar gem by {{< link src="https://github.com/inukshuk/" target="_blank" rel="noopener noreferrer" >}}Sylvester Keil{{< /link >}}. To learn more about the gem beyond the basic instructions below, make sure to read the documentation on the {{< link src="https://github.com/inukshuk/jekyll-scholar" target="_blank" rel="noopener noreferrer" >}}jekyll-scholar{{< /link >}} GitHub page. Keep in mind, though, that installing jekyll-scholar and working with it may be a bit difficult for beginners.


If you can get over the hurdles, jekyll-scholar can save you enormous amounts of time in the long term for your citation and bibliographic work. To begin, you must move the contents of the `jekyll-scholar starter kit` in your `optional` folder into the root folder. This will effectively replace the original `_config.yml` and `Gemfile` files, and add a `_bibliography` folder, and the `bibliography.md` and `Rakefile` files. To enable jekyll-scholar you must re-run `bundle install` again.

If everything goes smoothly, you should be able to start using jekyll-scholar at this point. The first thing you may want to do is provide Jekyll with your own bibliographic information in the form of a `.bib` file to replace the content of the `references.bib` file we've provided in the `_bibliography` folder.

To make it easy to create your own version of this file and to keep track of your bibliography for your project, in general I recommend you use {{< link src="http://zotero.org/" target="_blank" rel="noopener noreferrer" >}}Zotero{{< /link >}}. To export from Zotero in this format select the references you need from within your Zotero library, right click and select `export in...` and choose the BibLaTeX format. Rename your file to `references.bib` and move it into the `_bibliography` folder. You are, of course, free to create your `references.bib` file using any method you prefer as long as it is a BibTeX file.

Because as textual editors we are more likely than not to use citations in footnotes or pages that contain footnotes, and because footnotes will be necessarily generated at the bottom of the page, Ed also needs a separate page for your Bibliography or works cited. This is the role of the `bibliography.md` file. Feel free to edit the sample text, but make sure to leave the following line intact:

<pre>
&#123;% bibliography %&#125;
</pre>

To link your citations to the bibliography page, instead of writing them by hand, you can use the cite function in jekyll-scholar:

<pre>
&#123;% cite cesaire_discourse_2001 %&#125;
</pre>

Here's the breakdown:

* `cite` is the jekyllscholar command.
* `cesaire_discourse_2001` is the unique ID for Césaire's *Discourse on Colonialism* entry included in the reference.bib file.

Note that our jekyll-scholar starter kit comes ready for MLA style. To use Chicago style or more advanced citation features, refer to the documentation on jekyll-scholar to make the appropriate changes.

**Publishing your site on Github Pages with jekyll-scholar**

If you install jekyll-scholar, or most other plugins in Jekyll, you will need a workaround to publish your site on Github Pages, which only runs in 'safe mode.' I've provided a slightly modified version of a `Rakefile` originally created by {{< link src="https://blog.sorryapp.com/blogging-with-jekyll/2014/01/31/using-jekyll-plugins-on-github-pages.html" target="_blank" rel="noopener noreferrer" >}}Robert Rawlins{{< /link >}} that will help you accomplish this task. Once you are ready to publish, switch to your `gh-pages` branch and run the following command:

~~~ bash
$ rake ed:publish
~~~

---

## Tips and Tricks

- The folding sidebar menu is generated from the `sidebar.html` file in the `_includes` folder. The top menu items are generated automatically from your pages. The bottom menu items are manually written in HTML. This structure can allow you to add external links. If you don't have that many pages, you may choose to do all the links by hand.
- For more hand-crafted layouts---such as {{< link src="{{ site.baseurl }}/texts/narrative/index.html#title-page" target="_blank" rel="noopener noreferrer" >}}the title page in *The Narrative of the Life*{{< /link >}}---you may choose to work directly with HTML. One of the great advantages of working with the kramdown processor is that we have a lot of flexibility to mix HTML with the kramdown syntax. Note though, that even in the case of the title page, you can achieve these effects using kramdown syntax.
- Make sure to add horizontal rules, `---`, to separate sections in your texts. This creates a more pleasant layout.
- You can clean unnecessary folders and files from the original Ed package before publishing your site. This will help you reduce overhead. For example, you can erase this page, the sample texts and the `syntax.css` file (used for styling code).
- Consider providing tips for your readers on how to make their font bigger or smaller by taking advantage of <kbd>Command</kbd> + <kbd>+</kbd> and <kbd>Command</kbd> + <kbd>-</kbd>. Or returning to the top of the page using <kbd>Command</kbd> + <kbd>Up Arrow</kbd>. Part of the philosophy behind Ed is to avoid duplicating features that are already easily available in most web ecosystems.
- If you want to allow annotations on your site, consider providing a `via.hypothes.is` link. Our sample site can be annotated, for example, using the following link: `https://via.hypothes.is/https://sergeyklay.github.io/gohugo-theme-ed/`, which readers can access on the sidebar. Once you've indicated your own URL in the config file, the link will update automatically. Make sure to visit {{< link src="https://hypothes.is/" target="_blank" rel="noopener noreferrer" >}}hypothes.is{{< /link >}} to learn more.
- Ed includes metadata in the headers that makes it easier for users of Zotero, and other systems to grab bibliographic information for the site and individual texts. Our metadata functionality may not be enough to generate a full proper citation. Consider providing visible citation information in your about page or homepage.
- Make sure to deepen your knowledge of the building blocks of Ed: Jekyll, YAML and Liquid. A great list of resources can be found in the blog "{{< link src="http://jameswillweb.github.io/jekyll-for-designers/resources.html" target="_blank" rel="noopener noreferrer" >}}Jekyll for Web Designers{{< /link >}}".
- Our base themes Poole/Lanyon allow for easily customization of the interface. You can, for example, switch the position of the sidebar, change the theme colors and overlay options. To learn more check out the {{< link src="https://github.com/poole/lanyon#themes" target="_blank" rel="noopener noreferrer" >}}Lanyon documentation{{< /link >}}, and make sure to try the green, `.theme-base-0b`, it's really nice.
- You can change the look and feel of the site as a whole by changing the `color-scheme` in the `_config.yml` file. If you want to have more granularity, short of editing the `css`, you can change the variable values in the `assets/css/style.scss` file.
- In the `optional` folder you will find a sample `xslt` to help you get started converting TEI to Ed. You will also find css for adding pop-up "balloons" or tooltips to your texts.

---

## Publishing: A UNIX server

Publishing and Ed edition can be done in one of two ways. One way is to host it on a server you rent, own or have access to. Most mortals pay a hosting provider to host their sites. I recommend {{< link src="https://reclaimhosting.com/" target="_blank" rel="noopener noreferrer" >}}Reclaim Hosting{{< /link >}}, which is run by scholars for scholars. If you are affiliated with a university, chances are that your institution provides you with a UNIX account and a bit of server space. Since Jekyll generates a full static site for you, that means you can park it there too. To do so you need to build the site first. If you have been keeping your eye on your project by using `jekyll serve`, chances are you have a current built site in your project folder labelled `_site`.

If you don't already, you can build one easily by using the following Jekyll command:

~~~ bash
$ jekyll build
~~~

Or, again, if you have multiple environments:

~~~ bash
$ bundle exec jekyll serve
~~~

Using an FTP client like {{< link src="https://filezilla-project.org/" target="_blank" rel="noopener noreferrer" >}}Filezilla{{< /link >}}, or {{< link src="https://www.siteground.com/tutorials/ssh/" target="_blank" rel="noopener noreferrer" >}}SSH on your terminal{{< /link >}}, you need to push the contents of the `_site` folder to the folder on your server where you would like your project to exist. Depending on your host provider, you may be able to receive help from the sys admins with this step.

Please refer to the {{< link src="#a-note-on-your-base-url" target="_blank" rel="noopener noreferrer" >}}note below on base urls{{< /link >}} to make sure your new links work on your new site.

## Publishing: GitHub pages

The second option is to publish your site for free on GitHub Pages.
Whether you decide to publish on GitHub pages or not, we recommend that you still use git and GitHub to version your edition and make the data available via another channel other than your webpage. This is one of the great advantages of using our system, increasing the chances of survival of your work and opening new audiences for it.

If you do decide to use the GitHub pages option, please make sure to read the [note below on base urls](#a-note-on-your-base-url).

To publish on GitHub pages, you must have a copy of the repository in GitHub. That means you also need an account there. Once you've created the repository that you will use, you must link your local repository to the one on GitHub. Notice that because you cloned the original source files from my repository, it will be linked to my repository (to which you don't have writing privileges) until you do this step. Instructions for changing the remote URL can be found {{< link src="https://help.github.com/articles/changing-a-remote-s-url/" target="_blank" rel="noopener noreferrer" >}}here{{< /link >}}.

The usual way of doing it is to create a different git branch called `gh-pages` within your local repository for your site. This is a branch is published by GitHub by default. GitHub also gives you the option to select {{< link src="https://github.com/blog/2228-simpler-github-pages-publishing" target="_blank" rel="noopener noreferrer" >}}any branch you want to publish{{< /link >}}, including the master branch.

In the following I use the gh-pages branch. To create and use that branch use the following command:

~~~ bash
$ git checkout -b gh-pages
~~~

Once you are using that branch, you are ready to publish your site. To do so use simply push the gh-pages branch to github:

~~~ bash
$ git push origin gh-pages
~~~

You can now access your site using an address that looks like `http://your-username.github.io/your-project-name`. The sample page for Ed, for example, is hosted at {{< link src="https://sergeyklay.github.io/gohugo-theme-ed/" target="_blank" rel="noopener noreferrer" >}}sergeyklay.github.io/gohugo-theme-ed{{< /link >}}.

**<span id="a-note-on-your-base-url">A note on your base url</span>**

When you publish on a subfolder—automatic on GitHub pages—many of your links will break unless you indicate the name of your sub-folder in the `baseurl` value in your `_config.html` file. In addition, you need to make sure that your site-wide links (your links to your CSS files, for example) are preceded by the `{{ site.baseurl }}` tag. The base Ed install already uses this system, so you can simply replace the value `/ed` in your `baseurl` to `/your-project-slug`.

If on the other hand you are running your site on a root folder, simply erase `/ed`, but do make sure to leave the single quotes:

~~~ yaml
baseurl: ''
~~~

---

That should do it. If you have suggestions on how to improve Ed, make sure to leave us a line on {{< link src="https://github.com/sergeyklay/gohugo-theme-ed/issues" target="_blank" rel="noopener noreferrer" >}}our issues page{{< /link >}}, or send us a pull request.

Happy editing!

Serghei Iakovlev
April 2022

Alex Gil
April 2016
