---
layout: page
title: Accessibility Statement
description: Website accessibility statement and feedback document.
permalink: /accessibility
---

## Our goals

The CivicActions Accessibility website is a work in progress, but as part of this we are attempting to follow the best practices we are documenting.

We strive to meet the latest W3C Recommendation of the WCAG guidelines (currently [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/)).

## Design framework

The design framework for this website is built primarily leveraging the [U.S. Web Design System](https://designsystem.digital.gov/) which has undergone extensive accessibility testing. By leveraging open source best practices, we can benefit from much larger teams which have done extensive testing of their patterns.


## Color

The website color palette is based on the [USWDS color tokens](https://designsystem.digital.gov/design-tokens/color/system-tokens/).


## Technology

The pages on this website are primarily written in Markdown which substantially reduces the range of errors available in HTML. These are then compiled using <a href="https://jekyllrb.com/">Jekyll</a> and presented to the user as structured HTML5. The site is hosted on <a href="https://github.com">GitHub</a>, which has a very broad community of users who are free to to add issues or pull requests. 

We use [axe-core](https://github.com/dequelabs/axe-core) with [Pa11y](https://github.com/pa11y) to evaluate that every page follows basic accessibility best practices. Details for this are [shared in our blog](https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe). 

## Known issues

* [Open website accessibility issues](https://github.com/CivicActions/accessibility/labels/accessibility)
* We can control the accessibility of the site, but not the accessibility of GitHub. GitHub is reasonably accessible, but is not currently seeking to be as accessible as this site.

## Feedback

If you run into any accessibility barriers with this website, please contact us:

* Email: [accessibility@civicactions.com](mailto:accessibility@civicactions.com)
* [Submit an issue](https://github.com/CivicActions/accessibility/issues)
* [Submit a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
