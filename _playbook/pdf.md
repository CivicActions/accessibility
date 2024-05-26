---
layout: playbook
title: Avoid PDF documents
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility
roles:
  - Executive
  - Content designer
  - Developer
  - Operations
  - Procurement
  - Product manager
  - Project manager
  - UX designer
---

Most PDFs simply do not meet the Section 508 requirements. It is just simply so easy to produce PDFs, but so difficult to produce accessible ones. There are very few tools that allow you to tell the difference between. 

The Luxembourg government has several open source accessibility projects inclucing their [simplA11yPDFCrawler](https://github.com/accessibility-luxembourg/simplA11yPDFCrawler). This small government has created a great tool which collects and scans PDFs for known accessibility errors. [VeraPDF](https://verapdf.org/home/) or [VeraPDF on GitHub](https://github.com/verapdf) is another open source option that can provide more detailed results but has a more complicated installation. 

It is possible to create PDF files that meet requirements of Section 508, but it is often overlooked or not done properly. Often the source documents used to create them do not have proper semantics. It is always more expensive to try to remediate a PDF than to implement accessibility best practices into the authoring tool.

The UK's Government Digital Services model decreases the reliance on PDFs and is [actively working to move away from them online and pushing for HTML content instead](https://gds.blog.gov.uk/2018/07/16/why-gov-uk-content-should-be-published-in-html-and-not-pdf/). When publishing a PDF is unavoidable, ideally an HTML or MSWord version of the content should be available as well.

For creating accessible documents in Microsoft Word, Excel or Powerpoint, is the preferred method. Microsoft offers an Accessibilty Checker tool, although this may not be an extensive check of the document, it does show major accessibility issues needed to fix.

Visit [Creating Accessible Documents](/playbook/documents).

## Checklist

* Check that the PDFs are accessible prior to allowing them to be posted to the website (ideally with a tool like the [CommonLook PDF Validator](https://allyant.com/commonlook-accessibility-suite/cl-pdf-validator/)).
* Track source files, so that additional improvements can be made, if barriers are identified.
* Encourage teams to build documents in HTML first.
* Test PDFs with assistive technology.
    

## Key questions

* Does the department have a clear public policy on use of PDFs?
* What is the process to review that all PDF documents are accessible?
* Are there better alternatives to using PDFs that could be used?
* Is a print-friendly version useful for some users?
