---
layout: guide
title: History
description: 
excerpt: 
sidenav: docs
categories:
  - Accessibility

---
 
A brief history of digital accessibility.


## Digital accessibility basics {#digital-accessibility-basics}

Digital accessibility is both complicated and simple. It is complicated because there are many layers of technology involved in communicating content from an author to the user. It is simple because, ultimately, if you keep your site simple and follow some basic guidelines, you're generally going to achieve digital accessibility.


## Section 508 {#section-508}

The United States first led the movement to articulate web accessibility with the creation of Section 508 in the Rehabilitation Act of 1973. In 1998, the U.S. legislature [corrected](https://en.wikipedia.org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973) the shortcomings of the original Section 508 Amendment. This included a list of technical standards against which products can be evaluated to determine if they meet the technical compliance.


## WCAG and POUR {#wcag-and-pour}

In 1999 the World Wide Web Consortium's (W3C) Web Content Accessibility Guidelines ([WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html)) 1.0 were published. The guidelines were built to be technology-agnostic—HTML was just one way to structure content on the web—and to accommodate the rapid pace of change online.

For example, when the first iPhone was released in 2007, people had no idea how much mobile devices would revolutionize how people interact—both with digital content and each other. The web has continued to evolve rapidly. It is clear that nobody wants to create an app or a website that makes someone physically ill, but how much animation is acceptable? [Where is the line](https://github.com/w3c/wcag/issues/1072) between visual changes that help people identify where new content is, and the changes that cause some people to become sick?

Additionally, since the WCAG process requires a great deal of negotiation—the standards must be based on evidence-based rules that have broad applicability—it isn't feasible to make specific guidelines for every disability. There are even occasions where designing a site for one type of disability (say, low vision users) will conflict with another disability (say, people with dyslexia).

Rather than guidelines based on specific accommodations for particular disabilities, the W3C's Web Accessibility Initiative (WAI) settled on four key principles—known by the acronym POUR—which have guided digital accessibility. To be accessible, digital content must be:



*   Perceivable: users must be able to perceive the information being presented
*   Operable: users must be able to operate the interface
*   Understandable: users must be able to understand the information as well as the operation of the user interface
*   Robust: users must be able to access the content as technologies advance

As the web continues to change and develop, the guidelines to maintain accessibility need to as well. WCAG 2.0 was released in 2008, 2.1 was released in 2018, and 2.2 is slated for release in mid-2021. There may be other releases within the WCAG 2.x series, and the WAI has [released the first draft of WCAG 3.0](https://w3c.github.io/silver/guidelines/), which is working to revise the whole framework.

In the near future, digital tools will be expected to be personalized so that every individual can maximize their use. And while digital accessibility continues to develop, it is clear that government bodies must invest to make their technology more accessible today than before.

To be clear, no website will be 100% accessible. Any work that is done should strive for excellence, not perfection. Even a site that met WCAG 2.1 AAA compliance would not necessarily be accessible to everyone. Like security, accessibility is a journey where improvements must be constantly adapted to meet changing realities. Organizations must seek to be better today than they were yesterday.

WCAG guidelines should be seen not as the goal to strive for, but a floor from which to build.

Other governments around the world began implementing accessibility regulations. In Canada there was the Accessible Canada Act (ACA) and also several provincial acts like Accessibility for Ontarians with Disabilities Act (AODA). Accessibility legislation occurs at all levels of government, and although there may be differences, web standards usually follow the WCAG recommendations.


## Harmonised European Standard & European Accessibility Act {#harmonised-european-standard-&-european-accessibility-act}

Europe is currently seen as the leader in digital accessibility best practices. The Harmonised European Standard (EN 301 549) is a living document first published by the European Telecommunications Standards Institute (ETSI) in 2014. The latest version, 3.1.1, was published in November 2019 and embraces WCAG 2.1 AA as the minimum accessibility standard for countries in the EU. Governments in the EU are given the freedom to choose how they want to implement the standard within their own countries, and after the W3C releases WCAG 2.2, it will be reviewed for consideration for an upcoming release of EN 301 549.

Web content makes up a lot of the material covered in the standard, but it also includes:



*   computers, smartphones, tablets and TV sets;
*   banking ATM and services, and payment terminals;
*   e-books and e-readers;
*   mobile apps and ticketing machines.

Aligning with EN 301 549 means that government accessibility efforts evolve with an ever-changing internet. Since its creation, EN 301 549 has been embraced by the UK, Mexico and Australia, and will continue to be adopted around the world. There will be costs to adopting the standard, but doing so will make it easier for companies to trade on a global stage.

In 2016, the European Union (EU) Parliament and the Council of the European Union passed the EU Web Accessibility Directive. The directive aims to ensure that all Europeans can take a full and active part in the digital economy and society. EU Member states had until 2018 to adapt the Directive into national law.

In 2019, the EU formally adopted the European Accessibility Act (EAA) to create a common set of accessibility guidelines for member states. When it comes into effect in 2025, the EAA will apply to businesses as well as governments across the EU—any product or service that is sold for use within the Eurozone will need to comply, including the full range of digital tools. This will include any foreign businesses that work with EU member states.

The goal of the EAA is to provide unrestricted access to people experiencing any form of disability and ensure that all EU citizens can access information and services through websites, mobile applications, and electronic devices.


## European monitoring requirements {#european-monitoring-requirements}

By December 23, 2021, all EU member states will be required to monitor the accessibility of their public-facing websites and report on progress over time. It will be up to member states to determine how this is done, but some of them will certainly leverage open source tools to aggregate national results.

In the UK, the Government Digital Services (GDS) is playing the role of the central monitoring team to assess public websites and apps. This monitoring is designed to encourage the public sector to make timely improvements to accessibility. The hope is that with active engagement with various departments, the government can avoid the need to implement further enforcement. The GDS team isn't sampling all government sites, but is prioritizing those which threaten to exclude the most people, or where there are known or suspected problems. Like others in Europe, the UK has implemented [Accessibility Statements](https://www.gov.uk/government/publications/sample-accessibility-statement) into its standard web pages so that citizens are encouraged to submit feedback when they run into barriers. This feedback loop empowers the public and highlights barriers that have been missed by automated and manual testing.

In the UK, by the time a website reaches a public beta it [must have monitoring in place](https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service) to identify potential problems. While the monitoring instructions don't specifically state accessibility, the [GDS is actively building tools to make it easier to incorporate](https://github.com/alphagov/accessibility-monitoring), including a site crawler that runs on an open-source accessibility engine built by [Deque Systems, called Axe](https://www.deque.com/axe/).
