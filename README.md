lightAHK
=========

This **(fun)** project uses [Prism.js](https://github.com/LeaVerou/prism) to make a really lightweight syntax highlighting solution for AutoHotkey. 
This Syntax highlighting javascript lacks autohotkey keywords and simply **relies on regex** to highlight code. Any valid AHK code will thus 
highlight correctly. See [demo](https://rawgit.com/aviaryan/lightAHK/master/test.html)

**Note** - Highlighting may encounter issues due to its **total** reliance on **regex**.

Prism also has full AutoHotkey syntax highlighting. Get it at their [download page](http://prismjs.com/download.html). 
This highlighting script for AutoHotkey weighs upto **14 times less** than that distributed with Prism. It is recommended to use this highlighting 
script *only* when you're sure the code is correct. Small chunks of code usually don't have *typos* or *hidden issues* and thus perfect for usage with 
this script.

The whole highlight package = 850 + 4111 + 1525 = **6.4kb**

## Using
Include these 3 files in the `<head>` tag. 

    <head>
	<script src="components/prism-core.min.js"></script>
	<script src="components/prism-ahk.min.js"></script>
	<link href="themes/prism-github.min.css" rel="stylesheet" />
    </head>

Then use `language-autohotkey` class in code tag for highlighting.

    <pre><code class="language-autohotkey">
    ;Ahk code starts
    #SingleInstance Force
    msgbox Starting
    msgbox % "Loading Databases"
    </code></pre>
  
### More themes and docs
Please get more themes from [Prism](http://prismjs.com)'s website. As this project uses Prism.js and is nothing on its own, 
[Prismjs.com](http://prismjs.com) is the best resource for more information. If you need more help, open an issue.
  
### Bugs
Bugs may exist due to the regex factor mentioned above. Feel free to open an issue when you encounter one. 