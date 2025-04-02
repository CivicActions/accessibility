---
layout: post
title: "How We Helped a Government Website Achieve Zero Accessibility Errors*"
date: 2023-12-8 08:00:00 -0800
author: civicactions
---
![Blue abstract fiberoptics](https://cdn-images-1.medium.com/max/1024/1*qqsBbdQRCiCDw8Kr5GKu9w.jpeg)

At CivicActions we have
[pledged](https://accessibility.civicactions.com/posts/CivicActions-Accessibility-Pledge) to advance our accessibility maturity to provide
critical human services to as many people as possible so that they can get the
help they need, as well allowing service providers to readily engage with
their users. The commitment here is twofold (at least). Firstly, allow users
of the site to not only access information the site provides, but to make that
process as easy as possible regardless of their accessibility challenges.
Secondly, allowing service providers to reach as many users as possible while
keeping those users engaged, and keeping the site first and foremost in the
users' minds for subsequent times they need information.

Reaching this higher level of maturity includes, but is not limited to:

  * Integrating the highest standards of testing into our continuous integration processes
  * Automating site-wide testing and historical analysis
  * Implementing site-wide rankings and improvement targets into the agile process
  * Include manual testing to catch issues that automated testing cannot evaluate

To that, the team that works for the Defense Security Cooperation Agency
(DSCA) supporting the Department of Defense (DoD) Regional Centers has spent
the last year (2022 Q4 to 2023 Q3) monitoring accessibility issues on the
platform and working to improve them. We use browser extensions, WAVE and axe
DevTools to check for issues on individual features we work on. To capture
issues across many pages, we have set up Pa11y CI running axe-core and HTMLCS
and Cypress with cypress-axe plugin. Axe-core is an industry standard
automated accessibility testing engine. The tools are all run automatically
using GitLab CI/CD pipelines.

Our efforts to improve accessibility have not produced any reported site
disturbances, slow-downs, or errors; the feedback from our users has been
overwhelmingly positive:

 _"As far as accessibility goes, this system is way ahead of other DoD systems
that I've used." —_ Dwayne Wood Ed.D., Curriculum & Training Developer, Ted
Stevens Center for Arctic Security Studies

While it is always nice to receive kudos, praise like this makes us aware that
accessibility is also important to our stakeholders, and that our efforts have
not gone unnoticed.

### Issues explored and URLs Scanned

The team's goal was to, at the minimum, attain Section 508 and WCAG 2.0 AA
standards and our plan is to work on reported issues in quarterly epics (an
epic is a large chunk of work that is segmented into smaller tasks, used to
organize tasks and create hierarchy in the development process). While
automation only catches about 33% — 50% issues, those are still important to
fix. Following the[ axe issue impact](https://github.com/dequelabs/axe-core/blob/develop/doc/issue_impact.md), the team focused first on critical and
serious issues. The team also focused on moderate/minor issues that are common
to many pages where possible.

We configured each tool to assess a set of URLs with our Pa11y scans. We
focused on the URLs that are the main pages and also represent common
features. With Cypress-axe the focus also includes URLs for organization
manager and member roles. The URLs cover:

  * Home Page
  * Login
  * Organization Management
  * Support Form
  * Policies
  * Organization/Groups/Courses
  * Account Management
  * Search
  * Guide
  * 404 Page

The common features are:

  * Headers
  * Links
  * Tabs
  * Buttons
  * Breadcrumbs
  * Images
  * Text/Link Colors
  * Form Fields
  * Various Text Displays
  * Tables

### Reduction of issues over each quarter

Here is our progression as we started fixing the system's accessibility issues
as reported by the two different tools.

### Pa11y-CI

Run against 15 production URLs:

  * Start of Q1, number of issues: 118
  * Start of Q2, number of issues: 66
  * Start of Q3, number of issues: 12
  * As of August 15th: 0*

### Cypress

Run against 33 URLs (the additional URLs are tested with authenticated users
who have different roles):

  * Start of Q1, number of issues: 156
  * Start of Q2, number of issues: 68
  * Start of Q3, number of issues: 33
  * Start of Q4, number of issues: 5
  * As of Oct 5th: 0*

### Additional Criteria

In our analysis of accessibility issues reported by the tools and our efforts
to fix them, we identified the following issues that went unaddressed:

  * [Color-contrast](https://dequeuniversity.com/rules/axe/4.6/color-contrast): we skipped this because the system theme uses background images in CSS. So we get a lot of reports of color contrast reports requiring manual review from both tools.
  * [Nested-interactive](https://dequeuniversity.com/rules/axe/4.6/nested-interactive): we skipped this because of the use of jQuery UI tabs that rely on nested implementation to work. We did confirm manually that the tabs are accessible with a keyboard.
  * [Aria-required-children](https://dequeuniversity.com/rules/axe/4.7/aria-required-children?application=AxeChrome): similar to the previous one, jQuery UI accordions creates HTML elements with non-standard aria roles, throwing this error. We did confirm manually that the tabs are accessible with a keyboard.
  * [Duplicate-ID](https://dequeuniversity.com/rules/axe/4.7/duplicate-id?application=AxeChrome), [duplicate-id-aria](https://dequeuniversity.com/rules/axe/4.7/duplicate-id-aria?application=AxeChrome): we skipped these on a few pages because in some cases making the ids unique caused existing features to not work as expected.
  * [Heading-order](https://dequeuniversity.com/rules/axe/4.7/heading-order?application=AxeChrome): in a future ticket, we will tackle adjusting header order for multiple pages (see challenges for details).
  * We also skipped checking accessibility of third-party widgets such as Google Translate as we cannot control the HTML they render.

### Challenges

 **Challenge** : CSS used across multiple element types: changing the element
to be accessibility compliant sometimes means updating the CSS, which in turns
breaks another element sharing that CSS styling.

 **Possible solution(s)** : Create smaller CSS "classes" so that elements
which need modification can have their CSS attributes updated with minimal
effects on other elements. Elements that need a number of CSS attributes can
implement groups of these smaller CSS classes. If, while fixing an
accessibility issue, a conflict arises because two or more elements are
sharing a class, we can create another small CSS class to swap out for the
pre-existing class to resolve the conflict.

 **Challenge** : When attempting to have our header hierarchy meet
accessibility standards, we found out header elements were tightly coupled
with CSS and JavaScript functionality. For this reason, it is not as simple as
swapping out h2 for h3, because the combination of styling and JavaScript
leads to misalignment, or broken functionality i.e. a menu heading that does
not open when clicked.

 **Possible solution(s)** : This is similar to the CSS challenge. Break down
the CSS/JavaScript so that the header elements share as few attributes as
possible.

 **Challenge** : Using an image and teaser text within a link to an article
caused accessibility issues. In this case the image, which has its own
descriptor text when a user hovers, causes a context error since it is in the
scope of the link, but does not describe to what it is being linked.

 **Possible solution(s):** To rectify this issue, we decided to create a
teaser card element in which the image and teaser text would reside and the
card containing those elements would provide context to the linked page.

 **Challenge** : Color contrast adjustments to meet WCAG AA standards is not
problematic, however getting to WCAG AAA standards will be a bit more
challenging as the range of colors to achieve the correct contrast ratio is a
bit more narrow, and one must also consider the link color contrasts in
addition to the background color, and foreground color contrasts.

 **Possible solution(s)** : If you already have a comprehensive style guide,
then this should not be too much of an issue. However, if you don't, then the
creation of a style guide would go a long way to helping to keep color
contrasts meeting accessibility standards. Also, it's not enough for the guide
to have one foreground color A contrasts well with one background color B, but
maybe include a range of colors that are acceptable for the site.

 **Challenge** : Dealing with third party issues. For example, when trying to
clean up the AXE accessibility tool error **attribute IDs must be unique** ,
we found that the methodology the **Date** module uses to construct the
wrapper IDs was the cause of the issue.

 **Possible solution(s)** : Making changes to third party software can be
problematic in that a modification can solve your problem, but runs the risk
of causing problems for someone else. The recommended course of action is to
create a patch file which solves your problem, and share the patch with the
overall community for review and testing.

### Manual testing and fixes

In our progress to fix accessibility issues, we also did manual testing using
a keyboard and found certain elements of the site didn't work. These are
issues that automated tests will not catch. We fixed those as well to improve
the keyboard navigability of the platform.

### What's next

Overall, we were able to improve the accessibility of our site through

  * Having guidelines to direct our efforts
  * Making a plan based on how effective our implementations would be
  * Making use of automated testing
  * Integrating manual testing/checking with the automated testing
  * Keeping an eye on which issues could put on the back burner

However, accessibility is not a one and done aspect of any project. It
requires constant vigilance. To that end, we are looking forward to continuing
our work with these high-level to-do items:

  * Add more URLs to each list. Cover more areas of the site that might not be covered in the examples above.
  * Share results of the Pa11y CI with users who primarily provide content, like our organization managers. They can use the results to make sure they are not introducing accessibility issues with their content.
  * Cypress accessibility tests run whenever we push code changes; we are waiting to get down to a few remaining issues to switch it to running automatically instead of on demand. We will also switch the pipeline from allowing failure to requiring the pipeline to pass, this should prevent accessibility issues from being introduced whenever we push code changes.
  * Add more dynamic element testing like menus and interactive components. This is to make sure when a menu is open or some element is interacted with that the results are also accessible. This can be accomplished with both Pa11y-CI and Cypress testing.

In conclusion, while our process might not be appropriate for every use case,
however, it is important for everyone to put some effort into increasing the
accessibility of their site. Our efforts have not only increased the
accessibility of the government site we support, but has also made us more
cognizant of accessibility challenges. This awareness contributes to the
raising of the best practices bar for our developers and other members of our
team. In addition to the success of incorporating accessibility into our
coding and design process, success can also be measured by what we are not
hearing; namely bug reports and complaints regarding usability. In that
regard, to date, our efforts have proven to be successful.

* _Zero accessibility automated issues doesn't mean the site is without barriers, but it does mean 30% to 50% of potential issues on the URLs we test are clear._

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=38e7cf3cc52a)

* * *

[How We Helped a Government Website Achieve Zero Accessibility
Errors*](https://medium.com/civicactions/how-we-helped-a-government-website-achieve-zero-accessibility-errors-38e7cf3cc52a) was originally published in
[CivicActions](https://medium.com/civicactions) on Medium, where people are
continuing the conversation by highlighting and responding to this story.

