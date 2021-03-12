---
layout: post
title:  "Automated accessibility testing: Leveraging GitHub Actions and pa11y-ci with axe"
date:   2021-03-12 07:00:00 -0800
description: Using GitHub and open source technology -- general and accessibility-specific -- we created a continuous accessibility integration environment that helps us better practice what we preach.
author: daniel-mundra
categories: 
image: card-power.png
---

We launched the [CivicActions Accessibility](https://accessibility.civicactions.com/) practice area and its accompanying website in January 2021.

Our intent is for the practice area to be an open project and community for CivicActions team members, and the broader digital government service industry, including clients, partners, government contractors, and generally anyone who wants to improve accessibility on the web.

## Practicing what we preach
We realized early on that if we were going to be truly inclusive with our work and provide accessibility resources to the broader community, we should strive to make the website as accessible as possible.

While we acknowledge that automated testing isn't a panacea, it's one way to address accessibility issues quickly and at scale.

Using GitHub and open source technology -- general and accessibility-specific -- we created a continuous accessibility integration environment that helps us better practice what we preach.

## Our technology and accessibility "stack"
We proudly leverage open source technologies wherever possible, and all of these tools used here meet that criteria.

The site is powered by [Jekyll](https://jekyllrb.com/) and [U.S. Web Design System](https://designsystem.digital.gov/), specifically the [U.S. Web Design System Jekyll theme](https://github.com/18F/uswds-jekyll) maintained by [18F](https://18f.gsa.gov/) and the USWDS team. The site is hosted through [GitHub Pages](https://pages.github.com/).

We added automated accessibility testing using [GitHub Actions](https://github.com/features/actions) and [pa11y-ci](https://github.com/pa11y/pa11y-ci) with [axe](https://www.deque.com/axe/).

## Configuring Jekyll with a sitemap and npm
We recommend adding a sitemap.xml generator to Jekyll which will be used by pa11y-ci to test all pages. We use the [jekyll-sitemap plugin](https://github.com/jekyll/jekyll-sitemap).

We recommend using npm to manage the pa11y-ci packages and commands. Run `npm init` command to create the `package.json` file.

## Installing pa11y-ci and setting it up to run locally
Install pa11y-ci as a development dependency with npm.

```bash
npm i --save-dev pa11y-ci
```

After the installation is complete edit the `package.json` and add the following commands to the "scripts" section:

```json
"start-detached": "bundle exec jekyll serve --detach",
"pa11y-ci:sitemap": "pa11y-ci --sitemap http://localhost:4000/sitemap.xml --sitemap-exclude \"/*.pdf\""
```

* `start-detached`: Starts the webserver that will run Jekyll to be used for testing.
* `pa11y-ci:sitemap`: Runs pa11y-ci tests using the sitemap and excludes PDFs.

Add a JSON file named `.pa11yci` which allows you to configure pa11y-ci with [various options](https://github.com/pa11y/pa11y#configuration). Here is our file:

```json
{
  "defaults": {
    "concurrency": 4,
    "standard": "WCAG2AA",
    "runners": ["axe"]
  }
}
```

* `concurrency`: The number of tests that should be run in parallel.
* `standard`: The accessibility standard to use: Section508, WCAG2A, WCAG2AA (default), WCAG2AAA.
* `runners`: The test runners to use: axe (run tests using aXe-core), htmlcs (default,  run tests using HTML CodeSniffer).

That's it. You can run this setup locally using npm, and you will see the following output (truncated for brevity):

```bash
dmundra in ~/workspace/accessibility/accessibility on branch main > npm run start-detached

> start-detached
> bundle exec jekyll serve --detach

Configuration file: /Users/dmundra/workspace/accessibility/accessibility/_config.yml
            Source: /Users/dmundra/workspace/accessibility/accessibility
       Destination: /Users/dmundra/workspace/accessibility/accessibility/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 8.217 seconds.
 Auto-regeneration: disabled when running server detached.
    Server address: http://127.0.0.1:4000
Server detached with pid '14850'. Run `pkill -f jekyll' or `kill -9 14850' to stop the server.
dmundra in ~/workspace/accessibility/accessibility on branch main > npm run pa11y-ci:sitemap

> pa11y-ci:sitemap
> pa11y-ci --sitemap http://localhost:4000/sitemap.xml --sitemap-exclude "/*.pdf"

Running Pa11y on 49 URLs:
 > http://localhost:4000/guide/glossary - 0 errors
 > http://localhost:4000/guide/introduction - 0 errors
 > http://localhost:4000/guide/history - 0 errors
 > http://localhost:4000/guide/design - 0 errors
...

✔ 49/49 URLs passed
```

As you can see, at the time of this writing we have all our pages passing! To see examples of us fixing reported accessibility issues check out [https://github.com/CivicActions/accessibility/pull/128](https://github.com/CivicActions/accessibility/pull/128).

Note: we have also noticed that pa11y-ci intermittently throws an error when trying to test many pages. Here is an open issue to find a solution to that: [https://github.com/pa11y/pa11y-ci/issues/128](https://github.com/pa11y/pa11y-ci/issues/128).

## Running pa11y-ci in a GitHub action
Now that we have it running locally, here is how we configure it to run every time we submit a pull request in GitHub.

Add a YML file to `.github/workflows` folder. We called our version `pa11y.yml`. Here is our file:

{% raw %}
```yml
name: pa11y tests

on: [pull_request]

jobs:
  build:
    name: Building site and running pa11y-ci tests
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source.
        uses: actions/checkout@v2

      - name: Install jekyll site dependencies.
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 2.6
          bundler-cache: true

      - name: Install pa11y-ci dependencies.
        run: npm install

      - name: Start up jekyll server.
        run: npm run start-detached

      - name: Run pa11y-ci.
        run: npm run pa11y-ci:sitemap 2>&1 | tee pa11y_output.txt
        
      - name: Read pa11y_output file.
        id: pa11y_output
        uses: juliangruber/read-file-action@v1
        with:
          path: ./pa11y_output.txt
        
      - name: Comment on pull request.
        uses: thollander/actions-comment-pull-request@master
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          message: '<details><summary>Pa11y testing results</summary>


```${{ steps.pa11y_output.outputs.content }}```

</details>'

      - name: Check for pa11y failures.
        if: contains(steps.pa11y_output.outputs.content, 'errno 2')
        run: |
          echo "::error::The site is failing accessibility tests. Please review the comment in the pull request or the pa11y-ci step in the workflow for details."
          exit 1
```
{% endraw %}

From the top, this action is run only on pull requests and uses the `ubuntu-latest` image. Then the steps will:

1. Check out the source code.
2. Install the Jekyll Ruby dependencies but caches them so that subsequent runs can go faster.
3. Install the pa11y-ci dependencies via npm.
4. Start the webserver as we did locally.
5. Run pa11y-ci to test the site and capture the output to a file.*
6. Read the file to a variable so that we can use it in the next step.*
7. Send the results of the file to the pull request as a comment in a `<details>` collapsed element.*
8. Check the output for failures and "hard fail" the action.*

\* *Capturing the output to a file and commenting on the pull request are optional features and could be harder to maintain. You can simply run the pa11y-ci commands and view the results in the action output.*

Here is an example screenshot of the GitHub action run of pa11y-ci tests (taken from [https://github.com/CivicActions/accessibility/pull/127/checks](https://github.com/CivicActions/accessibility/pull/127/checks)):

![Screenshot of the GitHub action run](/assets/img/github-action-steps.png)

Here is an example screenshot of the comments added to a pull request (taken from [https://github.com/CivicActions/accessibility/pull/137#issuecomment-796975773](https://github.com/CivicActions/accessibility/pull/137#issuecomment-796975773)):

![Screenshot of the GitHub action comment](/assets/img/github-actions-comment-in-pull-request.png)

## Summary
Using the above steps, you can quickly get your GitHub-hosted Jekyll site automatically tested for accessibility issues, but remember, automatic tests are not a panacea.

As noted in our [playbook for automated testing](/playbook/automated-testing):

> … no matter the tool, [automated testing only catches about one-third of accessibility issues](https://alphagov.github.io/accessibility-tool-audit/), so it cannot be relied upon to determine if a site complies. To better ensure that their digital tools are accessible to keyboard-only and assistive technology users, automated tests need to be done along with a robust manual testing plan.

## Further reading and examples
* [Automated accessibility testing with Travis CI](https://andrewmee.com/posts/automated-accessibility-testing-node-travis-ci-pa11y/)
* [How to Automate Web Accessibility Testing](https://medium.com/@f3igao/how-to-automate-web-accessibility-testing-921512bdd4bf)
* Examples of applying the above steps to Jekyll sites:
  * [BBC's "Accessibility, News and You"](https://github.com/bbc/accessibility-news-and-you) can be seen in this pull request: [https://github.com/dmundra/accessibility-news-and-you/pull/1](https://github.com/dmundra/accessibility-news-and-you/pull/1).
  * [GSA's "Accessibility for Teams"](https://github.com/GSA/accessibility-for-teams) can be seen in this pull request: [https://github.com/dmundra/accessibility-for-teams/pull/1](https://github.com/dmundra/accessibility-for-teams/pull/1).
  * [18F Accessibility Guide](https://github.com/18F/accessibility) can be seen in this pull request: [https://github.com/dmundra/accessibility-1/pull/1](https://github.com/dmundra/accessibility-1/pull/1).
* What are other Jekyll sites doing?
  * [The Pa11y website](https://github.com/pa11y/pa11y.github.io) uses Travis CI and pa11y-ci.
  * The [18F Accessibility Guide](https://github.com/18F/accessibility) uses CircleCI and axe.

Thank you to [Melinda Burgess](https://civicactions.com/team/melinda-burgess), [Luke Fretwell](/people/luke-fretwell), and [Mike Gifford](/people/mike-gifford) for your support, thoughts, and feedback.
