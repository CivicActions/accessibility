---
layout: playbook
title: How to do manual testing
description: 
excerpt: 
sidenav: docs
categories:
  - Testing
roles:
  - Content designer
  - Developer
  - Product manager
  - UX designer
---

A comprehensive accessibility testing plan must include manual testing. As automated testing generally only catches about [20-30% of accessibility errors](https://www.levelaccess.com/blog/automated-accessibility-testing-tools-how-much-do-scans-catch/), without manual testing the majority of issues are going to be missed.

There are various types of manual testing that can be incorporated into your testing plan, some are easier than others to work in based on resources, expertise, available tools, etc. You can create your testing plan based on what works for you and your team; the most important thing is that some amount of manual testing is consistently part of the process.


## Keyboard testing

Keyboard testing can catch a high volume of potential accessibility issues. Keyboard testing can identify if semantic elements were not used—which typically lead to larger issues with other devices. It can also identify if the reading order is incorrect and if there are keyboard traps on the page, among other issues.

Keyboard testing is easy to do and requires no specific expertise or hardware—other than a keyboard—so this type of  testing can be shared among various project team members. It is one of the most important manual tests that should be included in any testing plan. 

**To do keyboard testing:**
1. Confirm that all interactive elements are available and actionable using the keyboard only.
   * Use TAB to move forward through the page and SHIFT + TAB to go backwards.
   * SPACE and ENTER are the most common keys to activate elements but for more custom elements [WebAIM provides a good resource](https://webaim.org/techniques/keyboard/#testing).
2. Confirm that while tabbing, all interactive elements have a visible focus indicator when receiving focus.
   * Typically, this is a colored border around the element.
3. Confirm that while tabbing, the order of tabbing moves logically through the page. It should follow a typical reading order - top to bottom, left to right.


## Zoom and resizing
The purpose of zoom testing is to confirm that at 200% there are no visual or functional issues from the page resizing. It is also important to specifically test text resizing, that it is working as expected.

Zoom testing is another testing type that can be completed without any specialized hardware, software or expertise, making it relatively easy to add to a basic testing plan.

**To test content zoom:**
1. Set your browser width to 1280 pixels.
2. Use CTRL + or CMD + to zoom in to 200%.
3. Confirm that:
   * You can see each element and all the text that you could previously
   * You can use and interact with each element (both with keyboard and mouse)
   * Confirm that horizontal scrolling is not present except for a few exceptions (i.e. data tables, images, charts, etc.)

**To test text resizing:**
1. Within your browser, update your settings to increase text size.
   * Chrome: Settings > Appearance > Font size
   * Firefox: Settings > Language & Appearance > Fonts
   * Edge: Settings > Appearance > Fonts
2. Confirm that all text on the page resizes appropriately based on the indicated browser size.

## Contrast and use of color
The most basic rule in color contrast testing is to confirm that all elements have a contrast ratio of at least 4.5:1 against their background. There are some nuances with this requirement where a lower ratio can pass if necessary, however it is always best to aim higher whenever possible. 

Color use within a page or product should also be evaluated to ensure that it is not the only means of conveying information. This is especially helpful for folks using your product who may be colorblind or have low vision.

While testing color does not require any specific testing tools, there are some available that are helpful and may make testing easier:
* [Contrast finder](https://app.contrast-finder.org/)
* [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
* [Colorblindly plugin for Chrome](https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg?pli=1)
* Built-in browser rendering for color blindness

**To test color contrast:**
1. Small text (20px or smaller) has at least a 4.5:1 contrast ratio
2. Large text (greater than 20px) has at least a 3:1 contrast ratio
3. Non-text elements have at least a 3:1 contrast ratio to their background and to neighboring elements. For example:
   * Graphics - sections in a pie chart must meet requirements
   * UI elements - colors indicating if a checkbox or radio button is selected must meet requirements

**To test use of color:**
1. Identify all links and confirm that each has an underline.
2. Identify any data elements (i.e. charts, tables, maps, etc.) and confirm that the information within each is presented with more than just color.
   * For example, in a table if yes is indicated by coloring a cell green, does it also use another indicator? A checkmark, a pattern, etc.?
3. Confirm that any instructions given do not refer to color. (e.g. Click the blue button)


## Next steps
When you are ready to learn more, here are some further guides and resources for accessibility testing:

* [Screen reader testing](https://accessibility.civicactions.com/playbook/AT)
* [Implement automated testing](https://accessibility.civicactions.com/playbook/automated-testing)
* [Additional Tools](https://accessibility.civicactions.com/guide/tools)


