---
layout: playbook
title: Provide Role Based Evaluations
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility

---

Creation of modern digital content involves a great many distinct roles. Most roles only touch on some accessibility issues because they have limited access. The [UK's Department for Work & Pensions' Accessibility Manual](https://accessibility-manual.dwp.gov.uk/) has specific [guidance for job role](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role). Similarly the USA's GSA has created an [Accessibility for Teams](https://accessibility.digital.gov/) highlights roles that they see in the industry.

We've taken these two lists, added other roles that we didn't see included and included them here. With each role we are including tools that we think would be most useful for that role. Where appropriate we have also included links to the W3C's [Accessibility Responsibility Breakdown](https://www.w3.org/community/wai-) for WCAG 2.0 requirements.

* Accessibility Lead
    * The lead is responsible for providing an overview of the whole project and ensuring that the components flow together for the user.
    * **Tools:** [Purple Hats](https://github.com/GovTechSG/purple-hats), [MSU's Domain Accessibility Audit](https://github.com/MSU-NatSci/DomainAccessibilityAudit) or [Siteimprove](https://siteimprove.com) and [Accessibility Insights](https://accessibilityinsights.io/).
* Back-end Engineer
    * [W3C Accessibility Responsibility: Back-end Development](https://www.w3.org/community/wai-engage/wiki/Back-end_Development).
    * **Tools:** [axe](https://www.deque.com/axe/) and [Accessibility Insights](https://accessibilityinsights.io/).
    * Training: [Section 508.gov recommendations](https://www.section508.gov/create/developer-training) & [University of Minnesota guide](https://accessibility.umn.edu/your-role/web-developers).
    * Resources: [Free Book: Web Accessibility for Developers](https://pressbooks.library.ryerson.ca/wafd/).
* Business Analyst - [UK GDS](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/business-analyst), [BBC](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-business-analysts)
    * "As a Business Analyst in an agile team, you're involved in the critical parts where accessibility is often overlooked. Your role is often a facilitating role, to make sure user stories and conversations always include accessibility."
    * Write the [accessibility acceptance criteria](https://bbc.github.io/accessibility-news-and-you/guides/accessibility-acceptance-criteria.html) (design review, documentation, high risk factors, scenarios, and awareness).
    * [W3C Accessibility Responsibility: Analysis](https://www.w3.org/community/wai-engage/wiki/Accessibility_By_Roles_-_Analysis).
    * **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/).
* Content Author - [USA](https://accessibility.digital.gov/content-design/getting-started/)
    * **Tools:** [Sa11y](https://ryersondmp.github.io/sa11y/) and [HemingwayApp](http://www.hemingwayapp.com/)
    * Checklist:
        * Does the content meet your readability target?
        * Are there any [unusual words](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#unusual-words) to watch for?
        * Do images have meaningful alternative text that is related to the other content?
        * Are there large blocks of text, or is it broken up by appropriate headers?
        * Can links be understood without any surrounding content?
    * Resources: [Blog post for content authors](https://www.digitala11y.com/authoring-the-authors-accessibility-best-practices-for-content-authors/).
* Content Designer / Information Architecture - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/content-designer)
    * "Making the content as easy to understand as possible makes it better for everybody. There are common scenarios where people might benefit from simple content. For example, people where English is not their first language or people who have Dyslexia."
    * [W3C Accessibility Responsibility: Architecture](https://www.w3.org/community/wai-engage/wiki/Accessibility_By_Roles_-_Architecture).
    * **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/).
    * Resource: [Blog post: Accessibility: Guidelines for Information Architecture, UX Design, and Visual Design](https://medium.com/design-ibm/accessibility-guidelines-for-information-architecture-ux-design-and-visual-design-5ae33ed1d52d).
* Customer Experience / Service Design / Content Strategy
    * [W3C Accessibility Responsibility: Content Strategy](https://www.w3.org/community/wai-engage/wiki/Content_Strategy).
    * **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/).
    * Resources: [Accessibility and the Digital Service Standard, Accessible service design](https://www.dta.gov.au/blogs/accessibility-and-digital-service-standard).
* Delivery Manager - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/delivery-manager)
    * "As a Delivery Manager you need to make sure that accessibility is considered when sizing up stories and that very feature is fully accessible before it is released."
    * **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/).
* DevOps
    * **Tools:** [pa11y](https://pa11y.org/) and [Accessibility Insights](https://accessibilityinsights.io/).
    * Resources: [Blog - Embedding Accessibility into the DevOps Process](https://devops.com/embedding-accessibility-into-the-devops-process/).
* Digital Performance Analyst - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/digital-performance-analyst)    
    * "As a Digital Performance Analyst, most of your considerations will be around presenting statistical data so that they don't exclude anybody that might not be able to perceive complex charts or tables of data."
    * **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/).
* Front End Engineer - [USA](https://accessibility.digital.gov/front-end/getting-started/), & [BBC](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-developers)
    * "As a Software Engineer or Frontend Developer, you have one of the most important roles when it comes to accessibility. A design can have considered accessibility, but it's up to you to build it to work correctly. By using existing libraries and frameworks such as GOV.UK Frontend and DWP CASA, you can get a lot of good practices for accessibility built in, however we need to be mindful of how we apply them."
    * [Development W3C Accessibility Responsibility: Front End](https://www.w3.org/community/wai-engage/wiki/Front-end_Development).
    * **Tools:** [Accessibility Insights](https://accessibilityinsights.io/).
    * Checklist
        * Run the FastPass's automated axe checks on every page.
        * Check that the Tab stops follow a logical order when navigating with a keyboard.
        * Look over the elements that are marked Needs reviews to see if there are elements where a manual review can identify whether it is an issue or not.
        * On new patterns make sure to complete the rest of the assessment to ensure that the new functionality meets WCAG requirements.
        * See more from [BBC's Checklists](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-developers).
    * Resources 
      * [Building Accessible Front-Ends](https://medium.com/capital-one-tech/building-accessible-front-ends-298c03e5bd86) 
      * [Accessibility Tips for Frontend Developers](https://medium.com/@lizfaria/accessibility-tips-for-frontend-developers-83d094146153)
      * [W3C WAI's Developer Modules Curriculum](https://www.w3.org/WAI/curricula/developer-modules/)
      * [Helping developers write accessible code](https://blogs.intuit.com/blog/2021/03/30/helping-developers-write-accessible-code/)
* HTML & CSS Prototyping
    * [HTML & CSS Prototyping W3C Accessibility Responsibility](https://www.w3.org/community/wai-engage/wiki/HTML/CSS_Prototyping).
* Interaction Designer - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/interaction-designer)
    * See UX.
* Product Manager / Project Manager - [USA](https://accessibility.digital.gov/product/getting-started/), [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/product-manager), [BBC (Product Owner)](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-product-owners) & [BBC (Project Manager)](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-project-managers)
    * "Make sure the team know their responsibilities"
    * [W3C Accessibility Responsibility: Project Manager](https://www.w3.org/community/wai-engage/wiki/Accessibility_Responsibility_Breakdown#pm).
    * **Tools:** Site-wide scanners and [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/).
    * Checklist
        * Verify that personas include permanent, temporary or situational examples for vision, mobility, hearing, and cognitive disabilities.
        * Ensure that accessibility is being considered with every sprint (or alternative process).
        * Find ways to prioritize common, weird and critical barriers that are discovered in QA.
        * Identify where to include people with disabilities in the process.
    * Resources: [BBC's Product Owner Checklists](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-product-owners) & [BBC's Project Managers Checklist](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-product-owners), [Planning and Managing Web Accessibility](https://www.w3.org/WAI/planning-and-managing/), [Managing for Accessibility](https://www.washington.edu/accessibility/managing/).
* Procurement Manager 
    * **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/).
    * Resources: [DisabilityIN - Accessible Technology Procurement Toolkit](https://private.disabilityin.org/procurementtoolkit/).
* QA Tester - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/qa-tester), [BBC](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-testers)
    * "As QA Tester, you're responsible for checking if the finished product is actually accessible. This means running automated tests, manually checking the pages against the WCAG criteria, and testing usability with assistive technology."
    * [W3C Accessibility Responsibility: Quality Control](https://www.w3.org/community/wai-engage/wiki/Quality_Control).
    * **Tools:** [Purple Hats](https://github.com/GovTechSG/purple-hats), [MSU's Domain Accessibility Audit](https://github.com/MSU-NatSci/DomainAccessibilityAudit) or [Siteimprove](https://siteimprove.com) and [Accessibility Insights](https://accessibilityinsights.io/).
    * Resources: [BBC's Checklist](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-testers), [Paul Adams Checklist](https://pauljadam.com/demos/mobilechecklist.html).
* Search Engine Optimization
    * [W3C Accessibility Responsibility: SEO](https://www.w3.org/community/wai-engage/wiki/Search_Engine_Optimization).
* User Researcher - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/user-researcher)
    * "As a user researcher, you will help the team to understand the needs of the people who use the service, including those users who might have impairments and use assistive technologies."
    * **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
    * Resources: [UK GDS Blogs](https://accessibility.blog.gov.uk/category/user-research/), [How inclusive user research makes your products better](https://rangle.io/blog/ux-research-and-accessibility/), [Working with Others: Accessibility and User Research](https://alistapart.com/article/workingwithothers/), [A Comprehensive Guide to Accessible User Research](https://dscout.com/people-nerds/accessible-user-research-1), [What user researchers need to know about accessibility](https://www.userzoom.com/ux-library/what-user-researchers-need-to-know-about-accessibility/), [How to Conduct Usability Studies for Accessibility](https://www.nngroup.com/reports/how-to-conduct-usability-studies-accessibility/), [Conducting Accessibility User Research: What's Really Needed?](https://technica11y.org/conducting-accessibility-user-research-what-s-reall), [Tips For Conducting Usability Studies With Participants With Disabilities — Smashing Magazine](https://www.smashingmagazine.com/2018/03/tips-conducting-usability-studies-participants-disabilities/).
* UX - [USA](https://accessibility.digital.gov/ux/getting-started/)
    * "As an Interaction Designer, you play an important part of making sure a service or website is accessible. Making screens and interactions simple makes things easier for everybody. Overcomplicated designs or using inaccessible design patterns can have a knock-on effect when it's time for developers to code up your designs."
    * [W3C Accessibility Responsibility: Usability](https://www.w3.org/community/wai-engage/wiki/Accessibility_By_Roles_-_Interaction_Design_/_Usability).
    * **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/).
    * Also see Interaction Designer.
    * Checklist:
        * Make sure that the tab order is meaningful and that focus is considered in the design process.
        * Ensure that ARIA Landmarks are identified for each of the pieces of content used in the site.
        * Look to see that both the forms and errors associated with those forms are understandable.
        * Ensure that decorative images are clearly identified so that they are not described.
        * Check to see that the touch targets exceed 44 px or 10 mm.
    * Resources: [Accessibility guidelines for UX Designers](https://uxdesign.cc/accessibility-guidelines-for-a-ux-designer-c3ba775539be), [W3C Accessibility, Usability, and Inclusion](https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/), and [Deque blogs Accessible User Experience & Design](https://www.deque.com/blog/category/accessible-user-experience/).
* Visual Design / Graphic Design - [USA](https://accessibility.digital.gov/visual-design/getting-started/)
    * "Everyone benefits from designs that are easier to see. People with different visual abilities see your designs in varying ways—the diverse nature of impairments creates a wide variation in how your designs are perceived. A clean and clear visual presentation helps everyone make sense of a website's information and functionality."
    * [W3C Accessibility Responsibility: Graphic Design](https://www.w3.org/community/wai-engage/wiki/Accessibility_By_Roles_-_Graphic_Design).
    * **Tools:** [Open source color contrast tools](/guide/tools#color).
    * Checklist:
        * Is there enough contrast between text and its background color?
        * Are buttons and links semantically defined?
        * Can you quickly understand the meaning of the page and complete your task?
        * Can you easily read and comprehend textual information on the page?
        * Can you easily understand content associated with graphics, icons, and images?
        * Can you understand the overall trend of the graph? Can you quickly grasp the relationship between parts of the data?
        * Can you understand key information and perform critical tasks on a mobile device?
        * Can you reach everything that's interactive using the tab key?
        * See more from [BBC's Checklists](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-designers) including information about an [accessibility design review](https://bbc.github.io/accessibility-news-and-you/guides/accessibility-design-review.html).
    * Resources: W3C -  Designing for Web Accessibility, Stop Designing For Only 85% Of Users: Nailing Accessibility In Design, Designing For Accessibility And Inclusion, BBC - How to design for accessibility.

We plan to continue to add to this as other role specific advice becomes relevant. The W3C's [ARRM Project - Accessibility Roles and Responsibilities Mapping](https://www.w3.org/WAI/EO/wiki/ARRM_Project_-_Accessibility_Roles_and_Responsibilities_Mapping) will be mapping this out in more detail in the years to come. 

## Checklist

* Identify list of digital roles in your organizations.
* List what each role can do to enhance accessibility.
* Provide checklists personalized for each role.
* Look for educational materials that are focused on each role.

## Key questions

* What digital content creation roles does your organization have?
* Where are there opportunities for barriers to be introduced in your digital content?
