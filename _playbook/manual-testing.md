---
layout: playbook
title: Do Manual Testing
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility

---

Manual testing is key to any comprehensive accessibility testing plan. We have designed websites in a very mouse-centric way, but there are many people who cannot use a mouse to navigate a site. Although it doesn't catch everything, basic keyboard only testing can catch many problems that automatic testing will miss. 

If you need easy steps to get started here are some great resources:
* [Knowability Keyboard Testing Basics](https://knowbility.org/blog/2018/keyboard-testing-basics/)
* [WebAIM's Keyboard Testing Guide](https://webaim.org/techniques/keyboard/#testing)
* [Berkeley's How to do keyboard testing](https://webaccess.berkeley.edu/resources/tips-and-how-tos/how-do-keyboard-testing)

Testing should also zoom in so that the page is at least 200% and ideally at 300% with just your browser and not suffer any loss of content or functionality. Just determining if the page still reads well and that navigational elements don't overlap is useful.

Many browsers are now coming out with dark mode and reader mode options. These can be useful for a range of people with disabilities, but also for people looking to optimize their time online. Pages need to be set up properly to access this. 

It is also useful to test sites with Custom CSS stylesheets & Windows High Contrast Mode to determine if there are any elements which are obscured.

## Checklist

* Keyboard testing is done on the website, and with new patterns as they are added to the site.
* Testing the tab order to make sure that users can tab through the page in a logical way.
* Dark mode works effectively, even when forced by a browser extension.
* Reader mode works.
* Screen can be magnified 200%.
* Interactions work with touch interaction (smartphone/tablet).
* Site works in Windows High Contrast Mode.
* Confirming that focused elements are visibly different from a default state.
* Confirming that color is not used to convey meaning and if it does an alternate visual cue is provided.

## Key questions

* What are teams doing to see that accessibility is maintained as the site evolves?
* Do your personas include multiple forms of navigation to ensure that developers are reminded about the variety of ways that users consume content?
* Does your team have access to an [empathy lab](https://accessibility.blog.gov.uk/2020/11/12/how-we-made-our-accessibility-empathy-lab-virtual/) or a range of devices that they can use for testing?
