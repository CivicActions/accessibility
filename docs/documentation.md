The site is using the [USWDS theme](https://designsystem.digital.gov/) built with [Jekyll](https://jekyllrb.com/).
## How we work
We as a team have created a [board](https://github.com/CivicActions/accessibility/projects/1) where we can collaborate our work. Here we can track what work is in the backlog or in progress. 

Email [accessibility@civicactions.com](mailto:accessibility@civicactions.com) or message in slack #accessibility for access to the [github repo](https://github.com/CivicActions/accessibility)
Once added to the github repo, if you find any issues, spelling mistake, or an idea you think should be added to the site, create an issue.

## Create an issue
1. Visit [create an issue page](https://github.com/CivicActions/accessibility/issues/new/choose)
2. Choose the type of issue
    * Add new team member to repo
    * Bug report
    * Feature request
    * General issue
    * Retrospective
3. Add a title and a description and click submit

The ticket will be added to the backlog column on the [board](https://github.com/CivicActions/accessibility/projects/1)

## Working on an issue
All tickets should be kept in the backlog. Tickets in To-do column are added by a team member who is committing to working on this ticket in the current week. 
When working on a ticket, the ticket should be moved to the In-progress column on the [board](https://github.com/CivicActions/accessibility/projects/1)

## How to add content
To create a page with content, can be done directly in github. 
The repo is has been setup for different sections
* About
* Calendar
* News
* Playbook (how to's)
* Guide (resources)

To add a page with no section click [Add file](https://github.com/CivicActions/accessibility/new/main/pages)

To add a page under a section when creating a new file in the [main repo](https://github.com/CivicActions/accessibility)
1. Click on the directory of the section your page will live.
2. Click Add file. 

Learn how to use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to create stuctured content.

## How to setup a local environment
1. git clone git@github.com:CivicActions/accessibility.git
2. cd accessibility
3. bundle install
4. bundle exec jekyll serve -> this will continue to run while in development.

## Creating a pull request
1. git checkout -b your-name/issue-number
2. git add files
3. git push origin your-name/issue-number

A member with permissions to approve the merge of the pull request will review and merge your work.
