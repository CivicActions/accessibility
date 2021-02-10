---
layout: page
title: Accessibility Statement
description: Website accessibility statement and feedback document
permalink: /accessibility
---

## Our Goals

CivicActions Accessibility site is a work in progress, but as part of this we are attempting to follow the best practices we are documenting.

We strive to meet the latest W3C Recommendation of the WCAG guidelines (currently WCAG 2.1 AA).

## Our Process

The framework for this is built primarily leveraging the <a href="https://designsystem.digital.gov/">U.S. Web Design System</a> which has undergone extensive testing on accessibility. By leveraging open source best practices, we can benefit from much larger teams which have done extensive testing of their patterns. 

The color pallett is based on work with the <a href="https://civicactions.github.io/uswds-color-tool/">USWDS Color Compare Tool</a>. The USWDS's Color framework provides [magic numbers](https://designsystem.digital.gov/whats-new/updates/2019/04/08/introducing-uswds-2-0/) that allow us to quickly determine if color contrast requirements have been met.

The pages are primarily written in Markdown which substantially reduces the range of errors available in HTML. These are then compiled using <a href="https://jekyllrb.com/">Jekyll</a> and presented to the user as structured HTML5. The site is hosted on <a href="https://github.com">GitHub</a>, which has a very broad community of users who are free to to add issues or submit pull requests. 

## Known issues

- We are not currently doing readability testing on the content, and it has not been reviewed for plain language.
- We can control the accessibility of the site, but not the accessibility of GitHub. GitHub is reasonably accessible, but is not currently seeking to be as accessible as this site.

## Feedback
 
If you run into any barriers please contact us - [accessibility@civicactions.com](mailto:accessibility@civicactions.com) - with details to help track down the problem. Alternatively, feel free to jump in and post an issue to our issue queue or submit a Pull Request to the repository. 

