---
layout: guide
title: Tools
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility

---

Digital accessibility tools.

## Authoring {#authoring}

*   [A11yFirst for CKEditor](http://a11yfirst.web.illinois.edu/) - [Accessibility First on GitHub](https://github.com/a11yfirst/distribution) \
Series of plugins for supporting a11y best practices within the WYSIWYG editor, CKEditor.
*   [Sa11y Ryerson Digital Media Projects](https://ryersondmp.github.io/sa11y/#install) - [Sa11y on GitHub](https://github.com/ryersondmp/sa11y) \
Sa11y is an accessibility QA tool that visually highlights common accessibility and usability issues and is geared towards content authors.
*   [retextjs: retext-readability plugin](https://github.com/retextjs/retext-readability) \
A plugin for [retext](https://github.com/retext-project/retext) that scans text content for readability (defaults to age 16 reading level, but is configurable) and warns developers of issues.
*   [retextjs: retext-equality plugin](https://github.com/retextjs/retext-equality) \
Another plugin for [retext](https://github.com/retext-project/retext) that checks text content for possible insensitive, inconsiderate language.
*   [Zettlr: Markdown Editor](https://www.zettlr.com/) - [Zettlr on GitHub](https://github.com/Zettlr/Zettlr) \
Open source Markdown editor that simplifies the content creation experience by avoiding the clutter seen in many common word processing solutions.
*   [Drupal](http://drupal.org/) is a very accessible CMS and [these modules can enhance its accessibility](https://accessibility.civicactions.com/guide/resources)
*   [ATOM Plugin - web-accessibility-checker package](https://atom.io/packages/web-accessibility-checker) An accessibility \
Plugin for the popular open source ATOM Editor from GitHub.

## Assistive technology {#assistive-technology}

*   [NVDA](https://www.nvaccess.org/) - [NVDA on GitHub](https://github.com/nvaccess/nvda/) \
Available for PCs running Microsoft Windows 7 SP1 and later, NVDA is a fast, functional, and free screen reader.
*   [ChromeVox Chrome Extension](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn) - [ChromeVox as part of ChromeOS on GitHub](https://github.com/chromium/chromium/blob/master/docs/accessibility/chromevox.md) - [Install and Setup Instructions from Web Accessibility for Developers Guide (with video)](https://pressbooks.library.ryerson.ca/wafd/chapter/chromevox-screen-reader-install-and-setup/) \
A fully featured screen reader for the web built using only web technologies such as HTML and Javascript. This extension specifically works within the Chrome browser to read content aloud.
*   Android [Talkback](https://support.google.com/accessibility/android/answer/6283677?hl=en) & [Switch](https://support.google.com/accessibility/android/answer/6122836?hl=en) - on [GitHub](https://github.com/google/talkback) \
TalkBack is the Google screen reader included on Android devices. Switch lets you interact with your Android device using one or more switches instead of the touchscreen, useful if you can't interact directly with your device.
*   [Apple VoiceOver](https://www.apple.com/accessibility/vision/) \
While not open source, VoiceOver is an industry‑leading screen reader for Apple products, which also gives descriptions in braille.
*   [Linux Orca](https://help.gnome.org/users/orca/stable/index.html.en) - [Orca on GitLab](https://gitlab.gnome.org/GNOME/orca) - [Orca on Chrome/Chromium](https://wiki.gnome.org/Projects/Orca/Chromium) \
Orca is a free, open source, flexible, and extensible screen reader that provides access to the graphical desktop via speech and refreshable braille.

## Site-wide evaluation {#site-wide-evaluation}

*   [bbc-a11y](https://github.com/bbc/bbc-a11y/blob/master/guides/using/using-bbc-a11y-in-your-project.md) on GitHub \
Highly-configurable bbc-a11y runs a set of tests against a set of URLs to verify whether each one meets the [BBC accessibility guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/).
*   [Domain Accessibility Audit by MSU College of Natural Science](https://github.com/MSU-NatSci/DomainAccessibilityAudit) on GitHub \
This web application automatically crawls websites, checks for accessibility violations, and is based on [axe](https://github.com/dequelabs/axe-core).
*   [Pa11y](https://pa11y.org/) - [Pa11y on GitHub](https://github.com/pa11y) \
A popular command-line interface which loads web pages and highlights any accessibility issues it finds. The Pa11y family of applications includes a [Dashboard](https://github.com/pa11y/dashboard) for monitoring several projects' a11y issues, as well as [continuous integration](https://github.com/pa11y/pa11y-ci) (CI) abilities.
*   [purple-hats by Government Digital Services, Singapore](https://github.com/GovTechSG/purple-hats) on GitHub \
Powered by [axe](https://github.com/dequelabs/axe-core), purple-hats is a customisable, automated accessibility testing tool.

## Page level evaluation {#page-level-evaluation}

*   [A11ygator](https://a11ygator.chialab.io/) - [A11ygator on GitHub](https://github.com/chialab/a11ygator-app) \
An application and Twitter bot that quickly tests single pages against WCAG.
*   [Accessibility Insights by Microsoft](https://accessibilityinsights.io/) - [Accessibility Insights GitHub Page](https://github.com/microsoft/accessibility-insights-web) \
Feature-rich testing suite for reviewing/auditing a11y on web sites, Android apps and Windows apps. 
*   [Accessibility Toolbar Plugin](https://webworks.ga/acc_toolbar/) - [ACC Toolbar on GitHub](https://github.com/mickidum/acc_toolbar) \
A component you can add to your site which adds tools that give people with vision disabilities a way to change text size, contrast level, etc...
*   [axe by Deque](https://www.deque.com/axe/) - [axe GitHub Page](https://github.com/dequelabs/axe-core) \
A leading testing toolkit that powers many other projects and offers different levels of usage, through browser extension tests or within continuous integration via their API.
*   [bbc-a11y](https://github.com/bbc/bbc-a11y/blob/master/guides/using/checking-a-website.md) on GitHub \
This tool runs a set of tests against a set of URLs to verify whether each one meets the [BBC accessibility guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/). Can be run from the command line and added to continuous integration pipelines.
*   [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) - [Lighthouse on GitHub](https://github.com/GoogleChrome/lighthouse) \
Extremely flexible and popular testing suite from Google that can be run directly on pages, from the command line, or as a Node module.
*   [IBM Equal Access Toolkit](https://www.ibm.com/able/toolkit/) - [equal-access on GitHub](https://github.com/IBMa/equal-access) \
Tools from IBM that can automate accessibility testing from a browser, or when added to a continuous integration environment.
*   [Explore ARIA Landmarks Browser Extension](http://matatk.agrip.org.uk/landmarks/) - [Landmarks on GitHub](https://github.com/matatk/landmarks) \
Browser extension that allows you to navigate a web page via WAI-ARIA landmarks, using the keyboard or a pop-up menu.

## Bookmarklets {#bookmarklets}

*   [Tota11y](https://khan.github.io/tota11y/) - [Tota11y on GitHub](https://github.com/Khan/tota11y) \
From the people at Khan Academy, tota11y is typically used as a browser bookmarklet that helps visualize how your site performs with assistive technologies.
*   [ANDI by SSA.gov](https://www.ssa.gov/accessibility/andi/) - [ANDI on GitHub](https://github.com/SSAgov/ANDI) \
A free accessibility testing tool that offers detection of problems and shows what a screen reader should say for interactive elements. It also gives realistic recommendations to improve accessibility, and checks 508 compliance.
*   [Touch Bookmarklet](https://louisremi.github.io/touch-devtool/) - [Touch on GitHub](https://github.com/louisremi/touch-devtool) \
Simulate touch events (swipe, rotate, pinch) with a mouse.
*   [Outline ⭐️ Bookmarklet](https://codepen.io/svinkle/pen/grYjPa) on Codepen (MIT Licence) \
On click, every focusable element will receive a red border, so you can see where the keyboard cursor is.
*   [What has focus?](https://codepen.io/svinkle/pen/WgYRxq) on Codepen (MIT Licence) \
When something receives keyboard focus via Tab key, the current element will be logged to the JavaScript console so you can determine which element currently has focus.
*   [Visual ARIA Bookmarklet](https://accdc.github.io/visual-aria/github-bookmarklet/visual-aria.htm) - [Visual ARIA on GitHub](https://github.com/accdc/visual-aria) \
Watch ARIA usage within web technologies, including ARIA 1.1 structural, live region, and widget roles, as well as help with nesting and focus management.
*   [Reading Order Bookmarklet](https://adrianroselli.com/2019/04/reading-order-bookmarklet.html) \
Running this bookmarklet will visually number the reading order in which screen-reading software will announce different parts of the page, to check to see that it matches the visual order (up to down, left to right).
*   [Accessibility and Contrast Bookmarklet](https://ada.is/blog/2016/02/12/contrast-bookmarklet/) - [Contrast Bookmarklet on GitHub](https://github.com/AdaRoseCannon/contrast-widget) \
Analyse the contrast of the text on a page and highlight elements which may have readability issues.
*   [WAI-ARIA-Usage](https://github.com/ThePacielloGroup/WAI-ARIA-Usage) by The Paciello Group \
Evaluate WAI-ARIA according to the [ARIA in HTML](https://www.w3.org/TR/html-aria/) specification.

## Color {#color}

### Creating palettes

*   [Accessible color combinations](https://toolness.github.io/accessible-color-matrix/) - [Color combinations on GitHub](https://github.com/toolness/accessible-color-matrix)
*   [Accessible color palette builder](https://toolness.github.io/accessible-color-matrix/) - [Accessible Color Palette on GitHub](https://github.com/toolness/accessible-color-matrix)
*   [ButtonBuddy](https://buttonbuddy.dev/) - [ButtonBuddy on GitHub](https://github.com/5t3ph/buttonbuddy)
*   [Contrast Finder by Tanaguru](https://contrast-finder.tanaguru.com/) - [Contrast Finder GitHub Page](https://github.com/Tanaguru/Contrast-Finder)
*   [Contrast Grid](https://contrast-grid.eightshapes.com/) - [Contrast Grid on GitHub](https://github.com/EightShapes/contrast-grid)

### Quick tests

*   [Contrast-Ratio.com](https://contrast-Ratio.com) - [Contrast-Ratio GitHub Page](https://github.com/LeaVerou/contrast-ratio) \
Allows for testing of contrast of text on top of a semi transparent background.
*   [Contrast Checker](https://contrast-checker.glitch.me/) - [Contrast Checker on Glitch](https://glitch.com/edit/#!/contrast-checker?path=server.js%3A1%3A0)

### Plugins, apps & integrations

*   [Colour Contrast Analyser (CCA) by TPG](https://developer.paciellogroup.com/resources/contrastanalyser/) - [CCAe on GitHub](https://github.com/ThePacielloGroup/CCAe) \
Determine the contrast ratio of two colors using an eyedrop tool on Windows and Mac.
*   [Pika MacOS Color Picker](https://superhighfives.com/pika) - [Pika on GitHub](https://github.com/superhighfives/pika) \
Open-source, native colour picker for macOS.
*   [Color Contrast Analyser for Sketch on GitHub](https://github.com/getflourish/Sketch-Color-Contrast-Analyser) \
Sketch plugin that calculates the color contrast of two layers and evaluates it against the WCAG.

## Automated testing & continuous integration {#automated-testing}

*   [Cypress-axe](https://github.com/component-driven/cypress-axe) \
Testing with [Cypress](https://www.cypress.io/) on GitHub
*   [Jest-axe](https://github.com/nickcolley/jest-axe) \
Testing with [Jest](https://jestjs.io/) on GitHub
*   [Nightwatch aXe-core](https://github.com/rikki-iki/nightwatch-axe-core) \
Testing with [Nightwatch](https://nightwatchjs.org/) on GitHub

## Simulators & building empathy {#simulators}

*   [Metamatrix Web Disability Simulator Chrome Extension](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) on [Metamatrix on GitHub](https://github.com/Metamatrix/web-disability-simulator) \
Simulates color blindness, low vision, dyslexia and more.
*   [NoCoffee Chrome Extension](https://accessgarage.wordpress.com/) - [NoCoffee on GitHub](https://github.com/eeejay/NoCoffee) \
Extension for Chrome, helpful for understanding people with slight to extreme vision problems.
*   [Funkify Chrome Extension](https://www.funkify.org/) \
Not open source, but a free version is available which simulates dyslexia and cognitive/motor/vision conditions.
*   [ChromeLens Extension](http://chromelens.xyz/) - [ChromeLens on GitHub](https://github.com/chromelens/chromelens) \
Chrome extension that offers vision simulators, testing, and a tab focus order visualizer.
*   [Sim Daltonism](https://michelf.ca/projects/sim-daltonism/) - [sim-daltonism on GitHub](https://github.com/michelf/sim-daltonism/) \
iOS/Mac app that lets you visualize colors as they are perceived with various types of color blindness.
*   [A11Y: Color blindness empathy test](https://vinceumo.github.io/A11Y-Color-Blindness-Empathy-Test/) [on GitHub](https://github.com/vinceumo/A11Y-Color-Blindness-Empathy-Test-browser-extensions)
Chrome/Firefox extension and a web-based tool created to help designers and developers better understand color blindness and visual imparity.
*   [Color Oracle](http://colororacle.org/) - [Oracle-Mac on GitHub](https://github.com/nvkelso/color-oracle) & [Oracle-Windows on GitHub](https://github.com/nvkelso/color-oracle-java) \
Color blindness simulator for Windows, Mac, and Linux.

## PDFs {#pdfs}

### Accessibility checkers

*   [PAC 3](https://www.access-for-all.ch/en/pdf-accessibility-checker.html)
*   [PAVE](https://pave-pdf.org/) 

### Parsing/manipulating PDFs (not a11y-focused)

*   [PDF Parser](https://www.pdfparser.org/)
*   [PyPDF2](https://pythonhosted.org/PyPDF2/index.html)

## Other lists of tools {#other-lists-of-tools}

*   [Donna Bungard's An Incomplete List of Tools for Accessibility](https://docs.google.com/spreadsheets/d/1WEujpG4RNEGTcBHOwvVYsixAZPnhkcnJujVoLdMZM4o/edit?disco=AAAALK-X_iI&usp=comment_email_discussion&usp_dm=false&ts=600ee792)
Google spreadsheet tracking the feature sets and various aspects of several popular tools.
*   [Paul J Adam's Resources List](https://pauljadam.com/resources.html)
*   [Accessibility Lists of Lists](https://github.com/accessibility/a11y-lists-of-lists#development-and-testing-resources)
*   [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/)

## Videos {#videos}

*   [WebAim's WAVE](https://webaim.org/blog/wave-webinar-and-intro-video/) \
Introduction to the WAVE Toolbar.
*   [Microsoft's Accessibility Insights](https://www.youtube.com/channel/UCQHGtwrr3cZxC-UutftMMbw) \
Introductory Videos about use of Accessibility Insights.
*   [Deque's Axe](https://www.youtube.com/watch?v=f_pW2EpwqG8) \
Get started with using axe.
