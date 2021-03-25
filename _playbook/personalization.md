---
layout: playbook
title: Support Personalization
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility

---

Many users are not familiar with the power that they have to modify or control how they engage with or modify content to meet their needs. Users have always been able to adjust the font size by Pressing the "CTRL and +" and "CTRL and -" keys. Increasingly users are choosing to use dark mode, especially with their phone. Users can also control animation by choosing reduced animation in the operating system.

There are widgets that allow users to modify the spacing, font, focusable elements, and even generate a table of contents for your content. There are browser extensions that can force dark mode, eliminate pieces of your page, or read it aloud to you. We are seeing a real explosion of how people of all abilities are engaging with your site, even eye tracking usage is increasing.

The BBC had pioneered this with [My Web My Way](https://web.archive.org/web/20210123003228/http://www.bbc.co.uk/accessibility/index.shtml) (MWMW), but this has since been archived. UK's AbilityNet has taken this on and produced [My Computer My Way](https://mcmw.abilitynet.org.uk/) (MCMW), modernizing much of the same content. The BBC now simply maintains an impressive list of accessibility information on their [main accessibility page](https://www.bbc.co.uk/accessibility/) including links to Microsoft, Apple and Google.

It is worth adding links to something like MCMW into accessibility statements to help educate users about how to get more power over their devices. Most people do not have anyone help them learn how to make best use of the new technology that is coming built-in with new operating systems. Front-end developers  should also be checking that their sites work with a broader range of users settings.

[The Inclusive Design Research Centre's Preferences Framework Editor](https://idrc.ocadu.ca/) provides a good example of how many user preferences can be exposed through the user interface. Not only can users choose from a variety of font sizes and color options, but they can also choose between multiple fonts, adjust the spacing, and expose a table of contents from the page's heading structure.

## Checklist

* Test that your site respects the following CSS media queries:
    * Dark mode (prefers-color-scheme).
    * Reduced motion (prefers-reduced-motion).
    * Reduced data (prefers-reduced-data) - Coming soon!
* Test with reader mode in Firefox and Edge?
* Listen to your content being read to you and see if it could be improved.
* Find ways to incorporate tools into the design and development phases to make personalization easier for everyone (ie. ability to toggle color modes and font sizes).

## Key questions

* How much responsibility do you want to have in educating your users?
* How do you integrate this into your testing so it can be maintained?
* How do you design your brand so that it can be conveyed even when the user is able to override how basic elements of your site are being displayed? 
* Are we putting the burden of technology on the user?
