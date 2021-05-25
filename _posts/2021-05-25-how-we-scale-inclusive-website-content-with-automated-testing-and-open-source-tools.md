---
layout: post
title:  "How we scale inclusive website content with automated testing and open source tools"
date:   2021-05-25 06:00:00 -0800
description: Using GitHub and open source technology -- general and text-specific -- we created a continuous text feedback mechanism to help ensure our content meets out standards.
author: daniel-mundra
categories: 
image: card-power.png
---

Since launching the [CivicActions Accessibility](https://accessibility.civicactions.com/) website, we've had [9 contributors on GitHub](https://github.com/CivicActions/accessibility) and many more contributing to our [guide](/guide), [playbooks](/playbook), and [posts](/news).

We value openness, agility, inclusiveness and continuous improvement. Ensuring that our site is consistently built makes it easier to maintain in the long-run.

As our website grows, we want to ensure our content mirrors our values — and that it scales with ease. So, we have enabled automated testing (and some updating) of text when it's submitted in a pull request.

## Content goals that match our values

It is important that this site demonstrates our values by being accessible and professional. That's why we eliminate unclear, insensitive language that could alienate our audience.

Automation is not full-proof. It doesn't have context to understand why a sentence is structured a certain way or why particular words are used. It is a tool in our arsenal to help us continuously improve, like catching terms that might be offensive or simplifying complex sentences, and so on.

## The technology

Most content changes are done through plain text editors or directly on GitHub. So, many of the conveniences that are built into modern word processing applications aren't available. The following tools help us keep the quality of our site high.

To achieve the testing we use the following technologies:
* [remark](https://github.com/remarkjs/remark): A markdown processor (Markdown is how we write all our content that is then compiled into static HTML pages by Jekyll).
* [retext](https://github.com/retextjs/retext): A natural language processor to check for issues in the text.
* [reviewdog](https://github.com/reviewdog/reviewdog): Takes the errors and warnings from remark and retext and comments on the markdown text in the code (pull request) indicating the issues and recommended corrections.
* [pre-commit](https://pre-commit.com/): Also test files for any issues and in some cases updates the text automatically.
* [docker](https://www.docker.com/) and [GitHub Actions](https://github.com/features/actions): Used to run the reviewdog scripts with remark and retext whenever a pull request is submitted.

## The setup

For remark/retext we create a Docker image that installs the dependencies and sets up reviewdog to execute our configuration on a pull request. The details are [visible in our repository](https://github.com/CivicActions/accessibility/tree/main/lint) but here are the important bits.

The following files (truncated for brevity) configure the plugins for testing markdown and text — and their individual settings. 

Here are some of our example settings:
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

Similar to our [automated accessibility testing](/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe) post, we use [GitHub actions](https://github.com/CivicActions/accessibility/blob/main/.github/workflows/reviewdog.yml) to run our set up on pull requests. The setup is also tuned to only check the changes for the text issues and not all files. This encourages authors to focus on the changes they are submitting.

### Examples

In [pull request 373](https://github.com/CivicActions/accessibility/pull/373/files) and the below screenshot you can see that the sentence, "Whole websites can now be easily crawled for bugs" that the word **'easily'** has been flagged as may be insensitive and we should try to avoid it.

![Screenshot of the insensitive warning](/assets/img/insensitive-text-warning.png)

In [pull request 374](https://github.com/CivicActions/accessibility/pull/374/commits/9b6c162495de0c5212e5cf99b27470e710082bdb) and the below screenshots you can see that I took an earlier version of this post and ran it through the process and got some good feedback.

In this screenshot we see a warning about a hard to read sentence.

![Screenshot of the hard to read sentence warning](/assets/img/hard-to-read-sentence-warning.png)

In this screenshot we see that a typo was misattributed as an insensitive word.

![Screenshot of the typo that lead to insensitive warning](/assets/img/typo-lead-to-insensitive-warning.png)

### Automating changes

Some of the recommendations that are provided could be automatically edited, like changing smart quotes to straight quotes (remember the note from earlier). We do this using the pre-commit tool and here is an example:

In this screenshot we see a warning about a smart quote:
![Screenshot before](/assets/img/smart-quote-warning.png)

In this screenshot the change is made for us and committed to the pull request:
![Screenshot after](/assets/img/smark-quote-fix.png)

You can see the details at this URL: [pull request 342](https://github.com/CivicActions/accessibility/pull/342).

### Future considerations

We are interested in adding the [retext-simplify plugin](https://github.com/retextjs/retext-simplify) to check phrases for simpler alternatives and maybe reduce the age for readability. Check out the [available plugins in the retext documentation](https://github.com/retextjs/retext/blob/main/doc/plugins.md).

## Conclusion

Following this set-up can help you inject tools to help you test your content. But remember, automation can be devoid of context and can still contain our biases. 

You should keep tweaking the tools and double-check your content to make sure it meets your values.

## Further reading and examples
* The same tools above are used in:
  * [Quality docs](https://github.com/sparkartgroup/quality-docs/).
  * [CivicActions handbook](https://github.com/CivicActions/handbook).
* Some similar tools for GitHub and other applications:
  * [A markdown proofing platform for individuals, teams, and organizations](https://github.com/ritterim/markdown-proofing).
  * [Readability Check](https://marketplace.visualstudio.com/items?itemName=jemcclin.readabilitycheck).
  * [status-stats-jbrains package](https://atom.io/packages/status-stats-jbrains).

Thank you to [Michelle Kang](/about/people/michelle-kang), [Marlena Medford](https://civicactions.com/team/marlena-medford), [Luke Fretwell](/about/people/luke-fretwell), and [Mike Gifford](/about/people/mike-gifford) for your support, thoughts, and feedback.
