---
layout: guide
title: Build up your accessibility toolbox
description: Digital tools that can help make content accessible.
excerpt: 
sidenav: docs
categories:
  - Tools

---

Digital accessibility tools can help ensure that the content you create is meeting accessibility guidelines. This page lists a variety of tools that designers, developers, and others can use to make web content more accessible. We have focused on open source tools, as they are the easiest to adopt and scale for most organizations. 

## Authoring
An authoring tool is software that can be used to create or modify content for use by others. These tools should allow authors to create accessible content from the beginning, without having to come up with a workaround. Output should conform to WCAG Level A and Level AA Success Criteria and Conformance Requirements. These are some authoring tools we recommend.

* [Sa11y](https://sa11y.netlify.app/): This is an accessibility quality assurance assistant that visually highlights common accessibility and usability issues on a web page.
* [Editoria11y](https://github.com/itmaybejj/editoria11y): This highlights common issues inline within the content editor.
* [Drupal](https://drupal.org/): This is a content management system and has modules that can enhance its accessibility.

## Automated testing
Automated accessibility testing should occur at different stages when creating digital content, from design to development. We recommend getting started with these tools and learning more about how to [implement automated testing](https://accessibility.civicactions.com/playbook/automated-testing). 

* [Cypress with axe core](https://github.com/component-driven/cypress-axe): This combines the JavaScript testing framework of Cypress with the popular accessibility testing engine, axe core. 
* [Pa11y CI](https://github.com/pa11y/pa11y-ci): This is a continuous integration (CI) runner that can test a few pages or an entire site for accessibility issues. 

## Bookmarklets
Bookmarklets provide quick, automated checks for accessibility issues. They can test for a wide variety of issues, such as testing interactive elements, focus, touch events, and reading order. These are some of the bookmarklets that we recommend, but there are many more out there! 

* [Accessibility and Contrast Bookmarklet](https://ada.is/blog/2016/02/12/contrast-bookmarklet/): Analyze the contrast of the text on a page and highlight elements which may have readability issues.
* [ANDI by SSA.gov](https://www.ssa.gov/accessibility/andi/): A free accessibility testing tool that offers detection of problems, checks for 508 compliance and shows what a screen reader will typically say for interactive elements. It also gives realistic recommendations to improve accessibility.
* [Sa11y](https://sa11y.netlify.app/): Is also available as a bookmarklet.
* [Reading Order Bookmarklet](https://adrianroselli.com/2019/04/reading-order-bookmarklet.html): Running this bookmarklet will visually number the reading order in which screen-reading software will announce different parts of the page to check to see that it matches the visual order.
* [W3C markup validator](https://validator.w3.org/favelets.html): Checking your HTML for errors catches a lot of accessibility issues, especially with forms and images.

### Page level evaluation tools
Browser extensions can provide powerful tools for analyzing page accessibility. 

* [Microsoft's Accessibility Insights](https://accessibilityinsights.io/): Provides quick checks with WCAG success criteria codes, as well as guided evaluation reports.
* [Deque's axe Browser extension](https://www.deque.com/axe/browser-extensions/): Test web applications and identify accessibility issues.

## Color contrast checker
Color contrast is an important part of accessibility. Text and background colors must have enough contrast so that the content on the page can be easily seen. Web Content Accessibility Guidelines (WCAG) 2 suggest a minimum contrast of 4:5:1. W3C has an [Understanding SC 1.4.3 page](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) that explains this in greater detail, if you are new to accessibility [WebAim has great resources](https://webaim.org/articles/contrast/). These tools can help quickly check if the colors on a page meet these guidelines.

* [Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/) - Best open source desktop application for color contrast (Windows/Mac). 
* [ColorZilla for Chrome](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp) or [ColorZilla for Firefox](https://addons.mozilla.org/en-US/firefox/addon/colorzilla/): Best open source browser extension/plugin for Chrome or Firefox browsers.
* [Contrast Report](https://contrast.report/) - Innovative site which has a pop-out function that allows for building collections of different color combinations.
* [tanaguru contrast finder](https://contrast-finder.tanaguru.com/) - Best tool for proposing alternative colors when a combination fails WCAG.
* [Color Contrast Checker](https://color-contrast.incluud.dev/?fg=521b92&bg=fefc78) - Great for designers who want to see the implications for charts, a sample color palette and design tokens.

Other options include:
* [Coolors Color Contrast Checker](https://coolors.co/contrast-checker)
* [Colour contrast checker](https://colourcontrast.cc/)
* [ColorContrast.dev](https://colorcontrast.dev/)
* [OddContrast](https://www.oddcontrast.com/)
* [Accessible Color Palette Generator](https://thisisfranciswu.com/enterprise-ui-palette-generator/)

## Design tool integrations
Different design tools can be added to Figma, Sketch, and Storybook to ensure that accessibility criteria is being met. There are plenty of different integrations available, but these are the ones we recommend to start with. 

### Figma
* [Accessibility Annotation Kit](https://www.figma.com/community/file/953682768192596304): This kit helps designers document accessibility considerations to share with developers when handing off designs.
* [Accessibility Checklist for Designers](https://www.figma.com/community/file/1233184772650050315/Accessibility-Checklist-for-Designers): A checklist that was created on the base of WCAG 2.1 AA standards and helps check designs for accessibility.
* [Include—Accessibility Annotations](https://www.figma.com/community/plugin/1208180794570801545/includeaccessibility-annotations): This plugin guides designers through a series of checks and creates multiple annotation layers in an annotations frame.

### Sketch
* [Sketch Accessibility Assistant](https://github.com/ygev/sketch-accessibility-assistant): A linter that checks Sketch elements to make sure they pass AA+ compliance for WCAG 2.1.
* [Sketch Cluse](https://cluse.cc/): Sketch plugin to check and adjust color contrast.

### Storybook
* [Storybook-addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y): A Storybook addon which uses axe to improve the accessibility of UI components.
* [Aria Live](https://storybook.js.org/addons/storybook-addon-aria-live): A utility tool for inspecting announcements of ARIA live regions

## EPUB
An electronic publication (EPUB) is an e-book file format and is a technical standard set by the International Digital Publishing Forum (IDPF). These are some helpful tools that can check for accessibility in this format. 

* [EPUBCheck](https://github.com/w3c/epubcheck): The official conformance checker for EPUB publications, maintained by the DAISY Consortium on behalf of W3C
* [Ace, by DAISY](https://github.com/daisy/ace): Assists with the evaluation of accessibility features of EPUB publications and is also maintained by the DAISY Consortium. 

## Evaluation
Evaluation tools are software programs or online services that can help determine if your website content meets accessibility guidelines. These are the tools we recommend to help evaluate content at a site or page level. 

### Site level evaluation tools
* [Domain Accessibility Audit](https://github.com/MSU-NatSci/DomainAccessibilityAudit): This web application by MSU College of Natural Science automatically crawls websites and checks for accessibility violations. It's based on axe by Deque Systems, Inc.
* [Pa11y](https://pa11y.org/): A popular command-line interface which loads web pages and highlights any accessibility issues it finds.

## PDF
A portable document format (PDF) is a file format that helps share and print documents. They can be opened and viewed on any device. Although PDFs [should generally be avoided](https://accessibility.civicactions.com/playbook/pdf), it is possible to create files that meet section 508 compliance. These are some tools we recommend to make a PDF accessible. 

* [PAVE](https://pave-pdf.org/): Automatically makes corrections to a PDF while leaving the visual representation unchanged. 
* [VeraPDF](https://verapdf.org/home/): Will evaluate all parts of a PDF and conformance levels. 
* [simplA11yPDFCrawler](https://github.com/accessibility-luxembourg/simplA11yPDFCrawler): Analyzes PDF documents and detects accessibility issues. 

## Simulators that help build empathy
When working to make content accessible, it can be helpful to learn how people with disabilities experience the web. These simulators help develop an understanding of how to make content accessible. 

* [A11Y: Color blindness empathy test](https://vinceumo.github.io/A11Y-Color-Blindness-Empathy-Test/): A web-based tool created to help designers and developers better understand color blindness and visual imparity.
* [Funkify Chrome Extension](https://www.funkify.org/): Not open source, but a free version is available which simulates dyslexia, different cognitive conditions, and vision impairments.
* [Metamatrix Web Disability Simulator Chrome Extension](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla): Simulates color blindness, low vision, dyslexia and more.

## Screen readers
Screen readers help people who are blind or visually impaired read text on a screen. We recommend using these common screen readers and testing your content with multiple screen readers and devices. We are including both free and proprietary options, as it is important for compliance testing. 

* [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Job Access With Speech): This is a popular, *proprietary screen reader* provides speech and Braille output for Windows. It requires a paid license to run. 
* [NVDA](https://www.nvaccess.org/about-nvda/): (Non-Visual Desktop Access): This is another common screen reader for Windows that's **open source** and available for free.
* [Microsoft Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) Is a *proprietary screen reader* that is included with Windows.
* [VoiceOver](https://www.apple.com/accessibility/vision/): While *not open source*, VoiceOver is a screen reader that's a default on all Apple devices (desktop and mobile) and gives descriptions in braille.
* [Google Talkback](https://support.google.com/accessibility/android/answer/6283677?hl=en): A Google screen reader included on Android devices. All Android devices come with this screen reader by default. It is also released with an **open source** license. 

Learn more about [screen reader testing](https://accessibility.civicactions.com/playbook/AT).

## Resources
These are a few other lists that contain helpful accessibility tools.

* [Accessibility Lists of Lists](https://github.com/accessibility/a11y-lists-of-lists)
* [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/)

## Next Steps
When you are ready to learn more, here are some further guides and resources that may help:

* [Invest in accessibility training](https://accessibility.civicactions.com/playbook/training)
* [Join the global accessibility community](https://accessibility.civicactions.com/playbook/community)
* [Learning resources](https://accessibility.civicactions.com/guide/resources)

