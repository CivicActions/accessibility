---
layout: post
title:  "Automated web content testing: How we use open source tools to scale inclusive, accessible online content"
date:   2021-05-07 07:00:00 -0800
description: Using GitHub and open source technology -- general and text-specific -- we created a continuous text feedback mechanism to help ensure our content meets out standards.
author: daniel-mundra
categories: 
image: card-power.png
---

Since launching the [CivicActions Accessibility](https://accessibility.civicactions.com/) website we have had [8 contributors on GitHub](https://github.com/CivicActions/accessibility) and many more helping build out the guide, playbooks, and posts.

To assist our contributors and ensure that our content is meeting our standards we have enabled automated testing (and some updating) of the text when submitted in a pull request.

## The goals

It is important that this site demonstrates our values and represents an accessible, professional site. It is important that we eliminate language that would alienate our audience. Ensuring that our site is consistently built makes it more sustainable to maintain in the long-run.

Most of these changes are done through plain text editors or directly on GitHub, so many of the conveniences that are built into modern word processing applications aren't available. These tools help us keep the quality of our site high.

This automation is also not full-proof as it doesn't have the context for why a sentence is structured in a certain way or why particular words are used. This is another tool in our arsenal to help us with catching terms that might be offensive or less than inclusive, catching long complex sentences that we could rewrite, and so on.

## The technologies

To achieve the testing we use the following technologies:
* [remark](https://github.com/remarkjs/remark) a Markdown processor. Markdown is how we write all our content that is then compiled into static HTML pages by Jekyll.
* [retext](https://github.com/retextjs/retext) a natural language processor to check for issues in the text.
* [reviewdog](https://github.com/reviewdog/reviewdog) takes the errors and warnings from the remark and retext and comments on the Markdown text in the code (pull request) indicating the issues and recommended corrections.
* [pre-commit](https://pre-commit.com/) that can also test the files for any issues and in some cases update the text automatically.
* [docker](https://www.docker.com/) and [GitHub Actions](https://github.com/features/actions) which are used to run the reviewdog scripts with remark and retext whenever a pull request is submitted.

## The setup

For remark/retext we create a Docker image that installs the dependencies and sets up reviewdog to execute our configuration on a pull request. The details are [visible in our repository](https://github.com/CivicActions/accessibility/tree/main/lint) but here are the important bits.

The following files (truncated for brevity) configure the plugins for testing markdown and text and their individual settings. Here are some of our example settings:
* Markdown bullets denoted with an asterisk '*'.
* Single space between sentences.
* Straight quotes (note this down, it will be important later in the post).
* Readability set to 18 years.
* Checking for spelling mistakes.
* Checking for insensitive or inconsiderate language.

[remarkrc.problem file](https://github.com/CivicActions/accessibility/blob/main/lint/config/remarkrc.problem):
```json
{
  "settings": {
    "listItemIndent": "1",
    "bullet": "*",
    "strong": "*",
    "emphasis": "_",
    "fences": true
  },
  "plugins": [
      "remark-frontmatter",
      "remark-validate-links",
      "remark-comment-config",
...
      ["remark-lint-table-cell-padding", "consistent"],
      ["remark-lint-table-cell-padding", "consistent"],
      ["remark-lint-unordered-list-marker-style", "*"],
      "./retext.problem"
    ]
}
```

[retext.problem.js file](https://github.com/CivicActions/accessibility/blob/main/lint/config/retext.problem.js):
```javascript
"use strict";

...

module.exports = attacher;

function attacher() {
  this.use(
    remark2retext,
    unified()
      .use(english)
      .use(sentenceSpacing, { preferred: 1 })
      .use(quotes, { preferred: "straight" })
      .use(repeated)
      .use(indefinite)
  );
}
```

[retext.suggestion.js file](https://github.com/CivicActions/accessibility/blob/main/lint/config/retext.suggestion.js):
```javascript
"use strict";

...

function attacher() {
  this.use(
    remark2retext,
    unified()
      .use(english)
      .use(contractions, { straight: true })
      .use(readability, {
        age: 18,
        minWords: 15,
        severity: "fatal",
        threshold: 5 / 7,
      })
      .use(equality, { ignore: ignoreWords || [] })
      .use(spell, dictionary)
  );
}
```

## The execution

Similar to our post [automated accessibility testing](/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe) we use [GitHub actions](https://github.com/CivicActions/accessibility/blob/main/.github/workflows/reviewdog.yml) to run our set up on pull requests. The setup is also tuned to only check the changes for the text issues and not all files to encourage the author to focus on the changes they are submitting.

Here are some examples of tool doing its thing:

In [pull request 373](https://github.com/CivicActions/accessibility/pull/373/files) and the below screenshot you can see that the sentence, "Whole websites can now be easily crawled for bugs" that the word **'easily'** has been flagged as may be insensitive and we should try to avoid it.

![Screenshot of the insensitive warning](/assets/img/insensitive-text-warning.png)

In [pull request 374](https://github.com/CivicActions/accessibility/pull/374/commits/9b6c162495de0c5212e5cf99b27470e710082bdb) and the below screenshots you can see that I took an earlier version of this post and ran it through the process and got some good feedback.

In this screenshot we see a warning about a hard to read sentence.

![Screenshot of the hard to read sentence warning](/assets/img/hard-to-read-sentence-warning.png)

In this screenshot we see that a typo was misattributed as an insensitive word.

![Screenshot of the typo that lead to insensitive warning](/assets/img/typo-lead-to-insensitive-warning.png)

### Automating changes

Some of the recommendations that are provided could be automatically changed like changing smart quotes to straight quotes. We do this using the pre-commit tool and here is an example.

In this screenshot we see a warning about a smart quote:
![Screenshot before](/assets/img/smart-quote-warning.png)

In this screenshot the change is made for us and committed to the pull request:
![Screenshot after](/assets/img/smark-quote-fix.png)

You can see the details at this URL: [pull request 342](https://github.com/CivicActions/accessibility/pull/342).

### Future considerations

We are interested in adding the [retext-simplify plugin](https://github.com/retextjs/retext-simplify) to check phrases for simpler alternatives. Maybe reduce the age for readability as well.

## Conclusion

Following the above set up can help you inject tools to help you test your content, but remember, automation can be devoid of context and can still contain our biases, so you want to keep tweaking the tools and double checking your content to make sure it meets your standards.

## Further reading and examples
* The same tools above are used in:
  * [Quality docs](https://github.com/sparkartgroup/quality-docs/).
  * [CivicActions handbook](https://github.com/CivicActions/handbook).
* Some similar tools for GitHub and other applications:
  * [A markdown proofing platform for individuals, teams, and organizations](https://github.com/ritterim/markdown-proofing).
  * [Readability Check](https://marketplace.visualstudio.com/items?itemName=jemcclin.readabilitycheck).
  * [status-stats-jbrains package](https://atom.io/packages/status-stats-jbrains).
