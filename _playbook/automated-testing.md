---
layout: playbook
title: Implement Automated Testing
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

All of this is now possible with a range of proprietary and open source tools. With the rapid development of automated testing, there are now multiple options to gather information on a single website—or an entire government.

Deque's [aXe](https://www.deque.com/axe/) has changed the playing field for site reviews. Because of its flexible design, it can be executed from the command line, from within the browser, or even from a WYSIWYG editor. Being executed from the command line means that it is much easier to simply add accessibility checking to any scripts that are being run. It can be appended to a script crawling to ensure security best practices are maintained, or simply added to a continuous integration script.

Axe also provides highly structured and easily actionable error reports. These empower entities to pinpoint and categorize issues—from alt text to problems with the symantec structure and missing language. Axe is also already incorporating elements of WCAG 2.1.

The Axe accessibility engine is now built into [Google's Lighthouse](https://developers.google.com/web/tools/lighthouse/), [Microsoft's Accessibility Insights](https://accessibilityinsights.io/), and a [host of other projects](https://github.com/dequelabs/axe-core/blob/develop/doc/projects.md). Axe can also be applied to the web, Android and Windows testing. This provides a huge amount of flexibility for most software development teams.

Government Digital Services in both the [United Kingdom](https://github.com/alphagov/accessibility-monitoring) and [Singapore](https://github.com/GovTechSG/purple-hats) have leveraged Deque's open-source axe-core accessibility engine to create tools that crawl and gather accessibility barriers for both public-facing websites and internal web-based communications. Similar open-source accessibility engines have been built by IBM & Deque, and there are proprietary tools available from firms like WebAim, Tenon & Siteimprove.

However, it is important to note that, no matter the tool, [automated testing only catches about one third of accessibility issues](https://alphagov.github.io/accessibility-tool-audit/), so it cannot be relied upon to determine if a site complies. To better ensure that their digital tools are accessible to keyboard-only and assistive technology users, automated tests need to be done along with a robust manual testing plan.

List of popular automated testing tools
* [Wave](http://wave.webaim.org/extension/)
* [Tenon](https://tenon.io/)
* [SiteImprove](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc)
* [See more tools in our guide](/guide/tools)

## CivicActions Approach

Currently CivicActions uses the following approaches.

### Pa11y-ci

[Pa11y-ci](https://github.com/pa11y/pa11y-ci) is a continuous integration (CI) runner that can test a few pages or an entire site for accessibility issues. Our projects include pa11y-ci in their CI pipelines and generate reports as artifacts or comments with the results of the testing.

We are currently testing this [accessibility site using pa11y-ci](https://github.com/CivicActions/accessibility/tree/main/.github/workflows#pa11yyml).

### Cypress testing with the axe core

[Cypress](https://www.cypress.io/) is a JavaScript testing framework that is used for automated testing. [Axe core](https://github.com/dequelabs/axe-core) is a popular accessibility testing engine. Our projects use [cypress with the axe core](https://github.com/component-driven/cypress-axe) to test components for accessibility issues.

Take a look at [Setting up Cypress with axe for accessibility](https://timdeschryver.dev/blog/setting-up-cypress-with-axe-for-accessibility) article that illustrates the setup.

## Checklist

* Continuous Integration tests incorporate accessibility tools like axe and errors block commits.
* Patterns and pages are regularly reviewed to see that they test patterns available to authors.
* Site-wide scans are used to track errors over time and catch both common and weird issues.
* Creators of digital content all have some browser extension that allows them to quickly evaluate page-level accessibility.

## Key questions

* Are you using a variety of automated testing tools to help identify potential problems?
* How are you ensuring that you aren't relying too heavily on automated tests?
* Have automated processes been set up to optimize use of developer time?
