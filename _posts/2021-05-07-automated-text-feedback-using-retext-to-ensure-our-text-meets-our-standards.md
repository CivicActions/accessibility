---
layout: post
title:  "Automated text feedback: Using retext to ensure our text meets our standards"
date:   2021-05-07 07:00:00 -0800
description: Using GitHub and open source technology -- general and text-specific -- we created a continuous text feedback mechanism to help ensure our content meets out standards.
author: daniel-mundra
categories: 
image: card-power.png
---

Since launching the [CivicActions Accessibility](https://accessibility.civicactions.com/) site we have had [8 contributors on GitHub](https://github.com/CivicActions/accessibility) and many more helping build out the guide, playbooks, and posts.

To assist our contributors and ensure that our content is meeting our standards we have enabled automated testing (and some updating) of the text when submitted in a pull request.

## The goals

It is important that this site is demonstrating our values and represents an accessible, professional site. It is important that we eliminate language that would alienate our audience. Ensuring that our site is consistently built makes it longer to maintain in the long-run.

Most of these changes are done through plain text editors or directly on GitHub, so many of the conveniences that are built into modern word processing applications aren't available. These tools help us keep the quality of our site high.

This automation is also not full-proof as it doesn't have the context for why a sentence is structured in a certain way or why particular words are used. This is just another tool in our arsenal to help us with catching terms that might be offensive or less than inclusive, catching long complex sentences that we might express more clearly and simply, and others.

## The technologies

To achieve the testing we use the following technologies:
* [remark](https://github.com/remarkjs/remark) a Markdown processor. Markdown is how we write all our content that is then compiled into static HTML pages by Jekyll.
* [retext](https://github.com/retextjs/retext) a natural language processor to check for issues in the text.
* [reviewdog](https://github.com/reviewdog/reviewdog) takes the errors and warnings from the remark and retext and comments on the Markdown text in the code (pull request) indicating the issues and recommended corrections.
* [pre-commit](https://pre-commit.com/) that can also test the files for any issues and in some cases update the text automatically.
* [docker](https://www.docker.com/) and [GitHub Actions](https://github.com/features/actions) which are used to run the reviewdog scripts with remark and retext whenever a pull request is submitted.

## The setup

For remark/retext we create a Docker image that installs the dependencies and sets up reviewdog to execute our configuration on a pull request. The details are [visible in our repo](https://github.com/CivicActions/accessibility/tree/main/lint) but here are the import bits.

The following files configure the plugins for testing markdown and text and their individual settings. Her are some of our example settings:
* Markdown bullets be denoted with an asterisk '*'.
* Single space between sentences.
* Straight quotes (note this down, it will be important later in the post).
* Readability set to 18 years.
* Checking for spelling mistakes.
* Checking for insensitive or inconsiderate language.
