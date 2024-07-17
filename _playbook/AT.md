---
layout: playbook
title: Screen reader testing
description: A guide to common, popular screen readers such as JAWS and NVDA and a basic screen reader test plan.
excerpt: A guide to common, popular screen readers such as JAWS and NVDA and a basic screen reader test plan.
sidenav: docs
categories:
  - Accessibility
roles:
  - Content designer
  - Developer
  - Product manager
  - Project manager
  - UX designer
---

Screen reader users navigate and experience web pages differently than non-screen reader users typically do. While it takes considerable experience to use a screen reader in the same way as the average daily user, incorporating basic screen reader testing into your accessibility test plan can still be quite effective in finding potential issues.

There is considerable variation, even within the blind and low vision community, on how screen reader users navigate the web due to the wide range of vision related disabilities and technologies available. Each screen reader also has different default functionality and behaviors and can be customized to the user's preferences. It's recommended to test with multiple screen readers and devices to account for as many of these variations as possible. 

## Common screen readers

* [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Job Access With Speech)
  * A very popular screen reader available for PC
  * Requires a paid license to be run
  * For testing purposes, JAWS can be run in 40 minute intervals without a license
* [NVDA](https://www.nvaccess.org/about-nvda/) (Non-Visual Desktop Access)
  * Another popular option for PC
  * Free screen reading software that does not require a license
* VoiceOver
  * All Apple products come with VoiceOver by default
  * VoiceOver is typically more popular as a screen reader for mobile rather than desktop
* TalkBack
  * All Android devices come with this screen reader by default
  * Not extremely popular overall, but is the most popular for Android devices


## Basic screen reader tests

Using at least one of the common screen readers mentioned, complete the basic testing steps.

1. Read through the web page start to finish.
   * Is everything read on the page that you expected? Is anything skipped or read in an incorrect order?
   * Are all elements read in a way that is understandable? 
2. Tab through the webpage using the keyboard.
   * Are all the interactive elements on the page available using the keyboard?
   * Does each element respond to expected keys? WebAim has a good reference for expected keyboard interaction.
3. Confirm use of landmarks to create the main document structure of the page.
   * Review the landmarks list to see which landmarks/semantic layout elements are used on the page.
   * Confirm that any duplicate landmarks or regions have been identified with a unique label.
4. Fill out and submit all forms.
   * Are all field labels, instructions and hint text, announced as expected?
   * Are error messages announced and understood?
   * Are the invalid fields clearly marked?
5. Confirm that links and buttons appear in the appropriate list within the screen reader menus and have descriptive, unique text labels.
6. Review all images and other non-text content to confirm they have meaningful alternative text descriptions.

## Resources
These resources and guides can help you to become familiar with and learn how to use each screen reader.
* [JAWS keyboard shortcuts](https://webaim.org/resources/shortcuts/jaws)
* [NVDA keyboard shortcuts](https://webaim.org/resources/shortcuts/nvda)
* [VoiceOver keyboard shortcuts](https://webaim.org/articles/voiceover/)
* [VoiceOver touch device gestures](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios)
* [Getting started with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en)
