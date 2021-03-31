---
layout: playbook
title: Avoid PDF Documents
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility

---

Most PDFs simply do not meet the Section 508 requirements. It is just simply so easy to produce PDFs, but so difficult to produce accessible ones. There are very few tools that allow you to tell the difference between. One free tool and easy tool is the [Tingtun Checker PDF Checker](http://checkers.eiii.eu/en/pdfcheck/), but does not show all errors that could be there. There are other tools that can provide more detailed results but require installation.

It is possible to create PDF files that meet requirements of Section 508, but it is often overlooked or not done properly. Often the source documents used to create them do not have proper semantics. It is always more expensive to try to remediate a PDF than to implement accessibility best practices into the authoring tool.

The UK's Government Digital Services model decreases the reliance on PDFs and is [actively working to move away from them online and pushing for HTML content instead](https://gds.blog.gov.uk/2018/07/16/why-gov-uk-content-should-be-published-in-html-and-not-pdf/). When publishing a PDF is unavoidable, ideally an HTML or MSWord version of the content should be available as well.

## Checklist

* Check that the PDFs are accessible prior to allowing them to be posted to the website (ideally with a tool like the [CommonLook PDF Validator](https://commonlook.com/best-pdf-validator-is-free-for-everyone/))
* Track source files, so that additional improvements can be made, if barriers are identified
* Encourage teams to build documents in HTML first
* Test PDFs with assistive technology
    

## Key questions

* Does the department have a clear public policy on use of PDFs?
* What is the process to review that all PDF documents are accessible?
* Are there better alternatives to using PDFs that could be used?
* Is a print-friendly version useful for some users?
