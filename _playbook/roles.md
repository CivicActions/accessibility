---
layout: playbook
title: Role based evaluations
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility

---

Creation of modern digital content involves a great many distinct roles. Most roles only touch on some accessibility issues because they have limited access. The [UK's Department
for Work & Pensions' Accessibility Manual](https://accessibility-manual.dwp.gov.uk/) has specific [guidance for job role](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role). Similarly the USA's GSA has created an [Accessibility for Teams](https://accessibility.digital.gov/) have highlighted roles that they see in the industry. 

We've taken these two lists, added other roles that we didn't see included and included them here. With each role we are including tools that we think would be most useful for that role. Where appropriate we have also included links to the W3C's [Accessibility Responsibility Breakdown](https://www.w3.org/community/wai-) for WCAG 2.0 requirements.

- Accessibility Lead
    - The lead is responsible for providing an overview of the whole project and ensuring that the components flow together for the user.
    - **Tools:** [Purple Hats](https://github.com/GovTechSG/purple-hats), [MSU's Domain Accessibility Audit](https://github.com/MSU-NatSci/DomainAccessibilityAudit) or [Siteimprove](https://siteimprove.com) and [Accessibility Insights](https://accessibilityinsights.io/)
- Back-end Engineer
    - [W3C Accessibility Responsibility: Back-end Development](https://www.w3.org/community/wai-engage/wiki/Back-end_Development)
    - **Tools:** [axe](https://www.deque.com/axe/) and [Accessibility Insights](https://accessibilityinsights.io/)
- Business Analyst - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/business-analyst)
    - "As a Business Analyst in an agile team, you’re involved in the critical parts where accessibility is often overlooked. Your role is often a facilitating role, to make sure user stories and conversations always include accessibility."
    - [W3C Accessibility Responsibility: Analysis](https://www.w3.org/community/wai-engage/wiki/Accessibility_By_Roles_-_Analysis)
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
- Content Author - [USA](https://accessibility.digital.gov/content-design/getting-started/)
    - **Tools:** [Sa11y](https://ryersondmp.github.io/sa11y/) and [HemingwayApp](http://www.hemingwayapp.com/)
    - Checklist
        - Does the content meet your readability target?
        - Are there any [unusual words](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#unusual-words) to watch for?
        - Do images have meaningful alternative text that is related to the other content?
        - Are there large blocks of text, or is it broken up by appropriate headers?
        - Can links be understood without any surrounding content? 
- Content Designer / Information Architecture - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/content-designer)
    - "Making the content as easy to understand as possible makes it better for everybody. There are common scenarios where people might benefit from simple content. For example, people where English is not their first language or people who have Dyslexia."
    - [W3C Accessibility Responsibility: Architecture](https://www.w3.org/community/wai-engage/wiki/Accessibility_By_Roles_-_Architecture)
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
- Customer Experience / Service Design / Content Strategy
    - [W3C Accessibility Responsibility: Content Strategy](https://www.w3.org/community/wai-engage/wiki/Content_Strategy)
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
- Delivery Manager - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/delivery-manager)
    - "As a Delivery Manager you need to make sure that accessibility is considered when sizing up stories and that very feature is fully accessible before it is released."
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
- DevOps
    - **Tools:** [pa11y](https://pa11y.org/) and [Accessibility Insights](https://accessibilityinsights.io/)
- Digital Performance Analyst - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/digital-performance-analyst)    
    - "As a Digital Performance Analyst, most of your considerations will be around presenting statistical data so that they don’t exclude anybody that might not be able to perceive complex charts or tables of data."
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
- Front End Engineer - [USA](https://accessibility.digital.gov/front-end/getting-started/)
    - "As a Software Engineer or Frontend Developer, you have one of the most important roles when it comes to accessibility. A design can have considered accessibility, but it’s up to you to build it to work correctly. By using existing libraries and frameworks such as GOV.UK Frontend and DWP CASA, you can get a lot of good practices for accessibility built in, however we need to be mindful of how we apply them."
    - [Development W3C Accessibility Responsibility: Front End ](https://www.w3.org/community/wai-engage/wiki/Front-end_Development)
    - **Tools:** [Accessibility Insights](https://accessibilityinsights.io/)
    - Checklist
        - Run the FastPass’s automated axe checks on every page
        - Check that the Tab stops follow a logical order when navigating with a keyboard
        - Look over the elements that are marked Needs reviews to see if there are elements where a manual review can identify whether it is an issue or not
        - On new patterns make sure to complete the rest of the assessment to ensure that the new functionality meets WCAG requirements
- HTML & CSS Prototyping
    - [HTML & CSS Prototyping W3C Accessibility Responsibility](https://www.w3.org/community/wai-engage/wiki/HTML/CSS_Prototyping)
- Interaction Designer - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/interaction-designer)
    - See UX
- Product Manager / Project Manager - [USA](https://accessibility.digital.gov/product/getting-started/) & [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/product-manager)
    - "Make sure the team know their responsibilities"
    - [W3C Accessibility Responsibility: Project Manager](https://www.w3.org/community/wai-engage/wiki/Accessibility_Responsibility_Breakdown#pm)
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
    - Checklist
        - Verify that personas include permanent, temporary or situational examples for vision, mobility, hearing, and cognitive disabilities
        - Ensure that accessibility is being considered with every sprint (or alternative process)
        - Find ways to prioritize common, weird and critical barriers that are discovered in QA
        - Identify where to include people with disabilities in the process
- Procurement Manager 
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
- QA Tester - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/qa-tester)
    - "As QA Tester, you’re responsible for checking the finished product is actually accessible. This means running automated tests, manually checking the pages against the WCAG criteria, and testing usability with assistive technology."
    - [W3C Accessibility Responsibility: Quality Control](https://www.w3.org/community/wai-engage/wiki/Quality_Control)
    - **Tools:** [Purple Hats](https://github.com/GovTechSG/purple-hats), [MSU's Domain Accessibility Audit](https://github.com/MSU-NatSci/DomainAccessibilityAudit) or [Siteimprove](https://siteimprove.com) and [Accessibility Insights](https://accessibilityinsights.io/)
- Search Engine Optimization
    - [W3C Accessibility Responsibility: SEO](https://www.w3.org/community/wai-engage/wiki/Search_Engine_Optimization)
- User Researcher - [UK](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/user-researcher)
    - "As a user researcher, you will help the team to understand the needs of the people who use the service, including those users who might have impairments and use assistive technologies."
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
- UX - [USA](https://accessibility.digital.gov/ux/getting-started/)
    - "As an Interaction Designer, you play an important part of making sure a service or website is accessible. Making screens and interactions simple makes things easier for everybody. Overcomplicated designs or using inaccessible design patterns can have a knock-on effect when it’s time for developers to code up your designs."
    - [W3C Accessibility Responsibility: Usability](https://www.w3.org/community/wai-engage/wiki/Accessibility_By_Roles_-_Interaction_Design_/_Usability)
    - **Tools:** [WebAim's WAVE Toolbar](https://wave.webaim.org/extension/)
    - Also see Interaction Designer.
    - Checklist
        - Make sure that the tab order is meaningful and that focus is considered in the design proccess
        - Ensure that ARIA Landmarks are identified for each of the pieces of content used in the site
        - Look to see that both the forms and errors associated with those forms are understandable
        - Ensure that decorative images are clearly identified so that they are not described
        - Check to see that the touch targets exceed 44 px or 10 mm
- Visual Design / Graphic Design - [USA](https://accessibility.digital.gov/visual-design/getting-started/)
    - "Everyone benefits from designs that are easier to see. People with different visual abilities see your designs in varying ways—the diverse nature of impairments creates a wide variation in how your designs are perceived. A clean and clear visual presentation helps everyone make sense of a website’s information and functionality."
    - [W3C Accessibility Responsibility: Graphic Design](https://www.w3.org/community/wai-engage/wiki/Accessibility_By_Roles_-_Graphic_Design)
    - **Tools:** [Open source color contrast tools](https://github.com/CivicActions/accessibility/blob/main/_handbook/tools.md#color)
    - Checklist
        - Is there enough contrast between text and its background color?
        - Can you quickly understand the meaning of the page and complete your task?
        - Can you easily read and comprehend textual information on the page?
        - Can you easily understand content associated with graphics, icons, and images?
        - Can you understand the overall trend of the graph? Can you quickly grasp the relationship between parts of the data?
        - Can you understand key information and perform critical tasks on a mobile device?
        - Can you reach everything that’s interactive using the tab key?


We plan to continue to add to this as other role specific advice becomes relevant. The W3C's [ARRM Project - Accessibility Roles and Responsibilities Mapping](https://www.w3.org/WAI/EO/wiki/ARRM_Project_-_Accessibility_Roles_and_Responsibilities_Mapping) will be mapping this out in more detail in the years to come. 

