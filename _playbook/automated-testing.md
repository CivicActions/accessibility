---
layout: playbook
title: Automated Testing
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility

---

Automated testing can occur at different layers of the process of creating digital content. 
- Developers can run automated checks as part of their continuous integration (CI) process
- Everyone can look at the accessibility of a single page
- Editors can be given accessibility issues within a WYSIWYG editor
- Whole websites can now be easily crawled for bugs 
- Designers can evaluate problems with contrast issues in their designs

All of this is now possible with with a range of proprietary and open source tools. With the rapid development of automated testing, there are now multiple options to gather information on a single website—or an entire government.

Deque’s [aXe](https://www.deque.com/axe/) has changed the playing field for site reviews. Because of its flexible design, it can be executed from the command line, from within the browser, or even from a WYSIWYG editor. Being executed from the command line means that it is much easier to simply add accessibility checking to any scripts that are being run. It can be appended to a script crawling to ensure security best practices are maintained, or simply added to a continuous integration script.

Axe also provides highly structured and easily actionable error reports. These empower entities to pinpoint and categorize issues—from alt text to problems with the symantec structure and missing language. Axe is also already incorporating elements of WCAG 2.1.

The Axe accessibility engine is now built into [Google’s Lighthouse](https://developers.google.com/web/tools/lighthouse/), [Microsoft’s Accessibility Insights](https://accessibilityinsights.io/), and a [host of other projects](https://github.com/dequelabs/axe-core/blob/develop/doc/projects.md). Axe can also be applied to the web, Android and Windows testing. This provides a huge amount of flexibility for most software development teams.

Government Digital Services in both the [United Kingdom](https://github.com/alphagov/accessibility-monitoring) and [Singapore](https://github.com/GovTechSG/purple-hats) have leveraged Deque’s open-source axe-core accessibility engine to create tools that crawl and gather accessibility barriers for both public-facing websites and internal web-based communications. Similar open-source accessibility engines have been built by IBM & Deque, and there are proprietary tools available from firms like WebAim, Tenon & Siteimprove.

However, it is important to note that, no matter the tool, [automated testing only catches about one third of accessibility issues](https://alphagov.github.io/accessibility-tool-audit/), so it cannot be relied upon to determance if a site complies. To better ensure that their digital tools are accessible to keyboard-only and assistive technology users, automated tests need to be done along with with a robust manual testing plan.

List of popular automated testing tools
- [Wave](http://wave.webaim.org/extension/)
- [Tenon](https://tenon.io/)
- [SiteImprove](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc)
- [See more tools in our guide](/guide/tools)


