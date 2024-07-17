---
layout: guide
title: Semantic HTML and accessibility
description: The importance of using semantic HTML tags and the accessibility benefits these can provide.
excerpt: The importance of using semantic HTML tags and the accessibility benefits these can provide.
sidenav: docs
categories:
- Accessibility 
  
roles:
- Developer
---


When a contractor builds a house, they tend to use standard and expected materials that are appropriate for their purpose—i.e. concrete, wood, shingles, etc. Using standard materials helps to ensure the house is built well. If other materials are used instead, the house might require additional work to achieve the same end result. If the Three Little Pigs have taught us anything, unless it's reinforced, a house made of straw can't be expected to withstand strong winds.

This same principle is true when building a website—there are standard building blocks for each section, typically referred to as semantic HTML tags. Using these tags gives the resulting website more structure and context than building with other, generic tags. Semantic HTML tags also provide some default accessibility to the page elements that would otherwise need to be reinforced using additional, custom code.

## What is semantic HTML?
When someone says that you should be building using semantic HTML, what does this actually mean?

Semantic markup refers to the HTML tags that define the meaning and structure of the content they contain. There are [many semantic tags](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements) but a few common examples are:
* `<header>`: This represents the header or introduction of the website. This is typically the area that contains the site logo and global navigation.
* `<main>`: This is for the main body content of the webpage. There should always be only one main section on each page.
* `<a>`: This tag is sometimes referred to as the anchor element and is used for a link. A link element has an `href` attribute and goes somewhere, to a new page on the website or an external page on another website.
* `<button>`: This represents a button element. A button element is for an action that does something, such as opening a modal or submitting a form.
* `<li>`: This tag represents an item in a list. This tag must be contained within a `<ul>` tag (unordered list) or an `<ol>` tag (ordered list) or `<menu>` tag.


There are also other, generic tags such as `<div>` and `<span>` that do not define any meaning and therefore are not considered semantic tags.

Here's an example of the same element written with and without semantic tags:

**Example 1 - Generic tags:**
```
<div>
  <div>
    <span><a href="/">Home</a></span>
    <span><a href="/about">About Us</a></span>
    <span><a href="/contact">Contact</a></span>
  </div>
</div>
```

**Example 2 - Semantic tags:**
```
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

In the first example, using generic tags, without the visual of the website itself, it's hard to clearly understand what the purpose of this code is for. There are 3 links, grouped together but why exactly it's not clear.

In the second example we clearly see semantic tags for a navigation menu (`<nav>`), containing an unordered list (`<ul>`) with 3 links. There still is no visual but from just the implicit meaning of the tags, it's understood that the purpose of this code is to provide a navigational list element for the website.

## Why use semantic HTML?
Besides providing clear structure and contextual information to your HTML document, semantic tags will also inherit default styles from the user-agent stylesheets. Each browser, or user-agent, provides a basic set of CSS rules that define how semantic HTML elements will visually render. These rules can include underlining links, a larger font-weight for bold text, backgrounds on buttons, etc. By already having basic styles on certain elements, specifying additional CSS is not always needed which can make your work more efficient.

A further benefit of using semantic HTML tags is that along with the default CSS styles, they also provide some basic accessibility functionality, no additional custom code is required, 

## Keyboard functionality
One of the main benefits of using semantic HTML tags is that by default, they provide the required keyboard functionality needed for accessibility. At a minimum, all interactive elements on a webpage must be available and focusable using the TAB key. They must also respond appropriately to expected keyboard keys. Typically, these keys are ENTER and SPACE, however for certain elements the ARROW keys or ESC key, among others, are expected. Each element has different default behavior and by using the standard semantic tag, you will be getting this default functionality and behavior for free. 

For example, if an element is created using the `<button>` tag, a user will be able to tab to the button and will be able to activate it using both the SPACE and ENTER keys. However, another element styled to visually look like a button but created using a generic `<div>` tag will not have this default keyboard functionality and this interaction will need to be added using additional code, typically JavaScript.

**Example**
Using the keyboard, try to tab to the two buttons. Notice that only the first, semantic button receives proper keyboard focus.

<button>A semantic button</button>

<div style="background:black; padding: 10px; color:white; display:inline-block;">Generic button</div>

## Landmarks
People using assistive technology often navigate a webpage by using the landmarks on a page. However, these sections need to first be identified as such in order for this to be possible. The 7 sections that should be identified on each page are:
* `role="banner"`:  Semantic equivalent is `<header>`
* `role="navigation"`: Semantic equivalent is `<nav>`
* `role="search"`: Semantic equivalent is `<search>`
* `role="main"`: Semantic equivalent is `<main>`
* `role="complementary"`: Semantic equivalent is `<aside>`
* `role="form"`: Semantic equivalent is `<form>`
* `role="contentinfo"`: Semantic equivalent is `<footer>`

Structuring web pages using the equivalent semantic tag rather than the role attribute, means these sections will be identified by default, no landmark role will be forgotten, and the user will be able to clearly understand the structure and layout of the page as well as navigate directly to a particular landmark if they choose.

## Assistive technology
As with landmarks, assistive technology users, especially those using screen readers, also often use the menus within their software to view a full list of other elements on a page, such as headings, links, buttons or forms. Using that list they can get a sense of the content on the page and can also  jump directly to a particular element if they want.

![Elements link menu in NVDA with the links list selected and showing all links on a web page. There are buttons at the bottom for the user to choose to Activate a link, Move to a link, or Cancel and close out the menu.](/assets/img/NVDA_links_menu.png)

However, only the elements built using semantic HTML tags will be available to these assistive technologies and displayed in these menus. Generic elements, even if they are styled to look like headings, links or buttons, will not be shown in these menus which could cause users to miss important content.

## Resources
* [List of semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements)
* [Semantic Structure](https://webaim.org/techniques/semanticstructure/)
* [More information about the div tag](https://www.scottohara.me/blog/2022/01/20/divisive.html)
* [HTML and landmark roles](https://developer.mozilla.org/en-US/blog/aria-accessibility-html-landmark-roles/)

