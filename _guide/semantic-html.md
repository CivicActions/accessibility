---
layout: guide
title: Semantic HTML
description: Basic information on semantic HTML and accessibility.
excerpt: Basic information on semantic HTML and accessibility.
sidenav: docs
categories:
- Accessibility 
  
roles:
- Developer
---


Writing semantic HTML can make your site more accessible. When you switch your browser to "read mode", only the main content will be visible. Read mode hides:
* the header
* footer
* background images,
* colours
* animations
* or functionality like tabs and accordions.

Many people switch to read mode to improve their readability. It can also make for more personalization, allowing the user to control how they see the web page.

The `<div>` element main purpose is for styling your page. Read mode will ignore <div> tags, so any text inside not a heading or `<p>` will be ignored. Users using the read mode will not get all the information that they should, and can be confusing.

HTML elements to structure every page:
* header
* nav
* main 
* article
* aside
* footer

Headings
Use only one H1 per page, which should match the page title.
Do not skip heading levels.

## Using reader mode in browsers

* Edge - by adding `read://` to before your url (example `read://https://www.civicactions.com`)
* Chrome - [download the app](https://chrome.google.com/webstore/detail/reader-mode/llimhhconnjiflfimocjggfjdlmlhblm?hl=en) or [enable the read mode setting](https://www.howtogeek.com/423643/how-to-use-google-chromes-hidden-reader-mode/)
* Safari - `Ctrl+Shift+R` turns on reading mode on a macbook
* Firefox - `View->Enter reader view` from top toolbar or to the right of the url is a reader view button

