Drupal Accessibility Conformance Report
=======================================

Revised Section 508 Edition
===========================

(Based on VPAT® Version 2.4)

Name of Product/Version: Drupal 9.2
-----------------------------------

Report Date: 14 December, 2020
------------------------------

Report Version: 1.0
-------------------

Product Description: Content Management System
----------------------------------------------

Contact Information:
--------------------

Mike Gifford  
CivicActions  
3527 Mt Diablo Blvd, Unit 269  
Lafayette, CA 94549  
[mike.gifford@civicactions.com](mailto:mike.gifford@civicactions.com)  
(510) 408-7510

Notes:
------

Links to the issues identified are included where possible to ensure that this is a living document where outstanding issues are regularly reviewed for compliance. The Authoring tool is evaluated against ATAG 2.0, Part A and B.

Evaluation Methods Used: 
-------------------------

Use of automated tools like WAVE and Accessibility Insights. Manual keyboard only testing. Some testing with JAWS, NVDA and VoiceOver. The evaluation process also includes a review of the Drupal Core accessibility issue queue.

Applicable Standards/Guidelines
-------------------------------

This report covers the degree of conformance for the following accessibility standard/guidelines:


------------------


------------------

| Standard/Guideline | Included In Report            |
|--------------------|-------------------------------|
|  [Web Content Accessibility Guidelines 2.0](https://www.google.com/url?q=http://www.w3.org/TR/2008/REC-WCAG20-20081211&sa=D&ust=1607973994149000&usg=AOvVaw3-0gHe7v6ATtZlroyhloWx)  | Level A (Yes) <br />Level AA (Yes) <br />Level AAA (No)  |
| [Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines&sa=D&ust=1607973994151000&usg=AOvVaw0XOEd3xy37OohdwzhT1Tpa)   | (Yes) |

Terms
-----

The terms used in the Conformance Level information are defined as follows:

*   **Supports:** The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
*   **Partially Supports:** Some functionality of the product does not meet the criterion.
*   **Does Not Support:** The majority of product functionality does not meet the criterion.
*   **Not Applicable:** The criterion is not relevant to the product.
*   **Not Evaluated:** The product has not been evaluated against the criterion. This can be used only in WCAG 2.0 Level AAA.

WCAG 2.0 Report
---------------

Tables 1 and 2 also document conformance with Revised Section 508:

*   Chapter 5 – 501.1 Scope, 504.2 Content Creation or Editing
*   Chapter 6 – 602.3 Electronic Support Documentation

Note: When reporting on conformance with the WCAG 2.0 Success Criteria, they are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.0 Conformance Requirements](https://www.google.com/url?q=https://www.w3.org/TR/WCAG20/%23conformance-reqs&sa=D&ust=1607973994155000&usg=AOvVaw28VVkoHXIehwT-QMXfJek5).

* * *


### Table 1: Success Criteria, Level A

**Notes:** 

||||
|--- |--- |--- |
|Criteria|Conformance Level|Remarks and Explanations|
|1.1.1 Non-text Content (Level A) <br />&nbsp;&nbsp;Also applies to:Revised Section 508 <ul><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li><li>602.3 (Support Docs)</li></ul>|**Web**: Supports <br />s <br />**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:**  Supports|Web: Drupal 8 requires alt text for images by default.Electronic Docs: Some non-textual content in the documentation does not provide a textual alternative.**Software:** Not Applicable<br />**Authoring Tool:** The back end of Drupal Core was built to be  WCAG 2.0 AA compliant and non-text content in the administration interface has a textual equivalent. Audio and video can be added to the media library, but Core does not provide tools to manage transcripts and captions/subtitles for local video and audio - Drupal issue #3002770.|
|1.2.1 Audio-only and Video-only (Prerecorded) (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web:** Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />**Authoring Tool:** Not Applicable||
|1.2.2 Captions (Prerecorded) (Level A)Also applies to:Revised Section 508501 (Web)(Software) 504.2 (Authoring Tool)602.3 (Support Docs)|**Web:** Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />Authoring Tool:Not Applicable||
|1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)Also applies to:Revised Section 508501 (Web)(Software) 504.2 (Authoring Tool)602.3 (Support Docs)|**Web:** Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />Authoring Tool:Not Applicable||
|1.3.1 Info and Relationships (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:**  Supports|Web: Information is structured into logical relationships. Navigational lists are well used to group information. Forms have a visual and semantic representation for required fields. Electronic Docs: Information is structured into logical relationships. Navigational lists are well used to group information. **Software:** Not Applicable<br />**Authoring Tool:** The authoring environment was constructed to support ATAG 2.0 AA (Part A and B)|
|1.3.2 Meaningful Sequence (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Drupal Core has been extensively tested with keyboard only users. As a proudly multilingual CMS, Drupal provides support for bidirectional navigation.**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** The authoring environment was constructed to support ATAG 2.0 AA (Part A and B)|
|1.3.3 Sensory Characteristics  (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Where possible Drupal Core uses combinations of text and symbols for the user interface.**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** The authoring interface has been developed to not rely on symbols alone to convey information to the user.|
|1.4.1 Use of Color (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Color is not used without text and often symbols to convey meaning. **Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** In general, the admin theme is very accessible. The Claro Administration Theme shortcut start needs improvement - Drupal issue #3171726.|
|1.4.2 Audio Control (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />**Authoring Tool:** Not Applicable||
|2.1.1 Keyboard (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Partial Support|Web: Users can interact with Drupal Core with the keyboard and without specific timings for individual keystrokes.**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Authors are largely able to engage with Drupal Core with the keyboard and without specific timings for individual keystrokes.Tooltips not displayed for keyboard navigation - Drupal issue #2933984.There are reported issues with IE11 and JAWS - Drupal issue #2852702.It is worth noting that Drupal’s admin is powerful and complex, and there are other accessibility reports in the issue queue.|
|2.1.2 No Keyboard Trap (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Focus can be moved away from that component using only a keyboard interface.Electronic Docs: See Web comment above.**Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|2.2.1 Timing Adjustable (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: The time limit is longer than 20 hours.Electronic Docs: **Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|2.2.2 Pause, Stop, Hide (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Not Applicable**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Not Applicable**Electronic Docs:** Supports <br /> **Software:** Not Applicable<br />**Authoring Tool:** There is no moving, blinking, scrolling, or auto-updating information in Drupal Core. There is also no built-in mechanism to support authors in controlling this type of motion.|
|2.3.1 Three Flashes or Below Threshold (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports||
|2.4.1 Bypass Blocks (Level A)Also applies to:Revised Section 508501 (Web)(Software) – Does not apply to non-web software504.2 (Authoring Tool)602.3 (Support Docs) – Does not apply to non-web docs|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Authoring Tool:** Supports|Web: Skip links are provided.Electronic Docs: See above comment.**Authoring Tool:** See Web comment above.|
|2.4.2 Page Titled (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Partial Supports**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Pages have titles, but in the case of multi-page events, the page number is not included - Drupal issue #2509716.Electronic Docs: **Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|2.4.3 Focus Order (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Focusable components receive focus in an order that preserves meaning and operability.Electronic Docs: See above comment.**Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|2.4.4 Link Purpose (In Context) (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Careful attention has been paid to ensure that automated “Read More” links are available in a way that is available with contextual information for screen readers. Electronic Docs: Not Applicable**Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|3.1.1 Language of Page (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Page language is defined semantically on every page. Electronic Docs:See Web comment above. **Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|3.2.1 On Focus (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Change in the focus state does not initiate a change of context for the user.Electronic Docs: See Web comment above.**Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|3.2.2 On Input (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Engaging with the interactive sites does not unexpectedly take control from the users. Electronic Docs: See Web comment above.**Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|3.3.1 Error Identification (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />sElectronic Docs: Not Applicable**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: The Inline Form Error module was added in Drupal 8. This needs to be enabled site-wide on installation. Electronic Docs: Not Applicable**Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|3.3.2 Labels or Instructions (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Partially Supports|Web: Default forms all include labels.Electronic Docs: See Web comment above.**Software:** Not Applicable<br />**Authoring Tool:** There are a few places where there are problems with labels, but these are odd exceptions - Drupal issue #2766853 and #3015494.|
|4.1.1 Parsing (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Partially Supports|Web: There are no HTML5 errors or warnings that are known to impact assistive technology users..Electronic Docs: See Web comment above.**Software:** Not Applicable<br />**Authoring Tool:** Generally parsing is very well supported, but there are a few places where this needs to be improved - Drupal issue #1852090 and #3144948.|
|4.1.2 Name, Role, Value (Level A)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Partially Supports|Web: Public pages support this criterion. Electronic Docs: See Web comment above.**Software:** Not Applicable<br />**Authoring Tool:** This is generally well supported, but there are places where it has been overlooked.  Drupal issue #3144948 and #3019487.|

### Table 2: Success Criteria, Level AA

**Notes:** 


||||
|--- |--- |--- |
|Criteria|Conformance Level|Remarks and Explanations|
|1.2.4 Captions (Live) (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />Authoring Tool:Not Applicable||
|1.2.5 Audio Description (Prerecorded) (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />Authoring Tool:Not Applicable||
|1.4.3 Contrast (Minimum) (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Partially Supports**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Partially Supports|Web: Generally meets. Some contrast failures around grey backgrounds - Drupal  issue #3040673.Electronic Docs: The docs have sufficient contrast.**Software:** Not Applicable<br />**Authoring Tool:** Generally meets requirements. Some challenges with Core admin themes - Drupal issue #930508 and #3080100.|
|1.4.4 Resize text (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Partially Supports**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Partially Supports|Web: Generally support with some minor exceptions - Drupal issue #3129257.Electronic Docs: The docs are accessible up to 200%**Software:** Not Applicable<br />**Authoring Tool:** Generally good with some exceptions - Drupal issue #3164587.|
|1.4.5 Images of Text (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />**Authoring Tool:** Text is generally styled with CSS in the authoring tool. Should images of text be uploaded by the user, they will be required to add alternative text.|
|2.4.5 Multiple Ways (Level AA)Also applies to:Revised Section 508501 (Web)(Software) – Does not apply to non-web software504.2 (Authoring Tool)602.3 (Support Docs) – Does not apply to non-web docs|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Authoring Tool:** Supports|Web: There is more than one way to locate a Web page within the CMS. Electronic Docs: See Web comment above.**Authoring Tool:** See Web comment above.|
|2.4.6 Headings and Labels (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Partially Supports**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Partially Supports|Web: Generally there is very good support. Some heading levels may be missed in some unique contexts - Drupal issue #1768732. Better support could be provided for threaded comments - Drupal issue #2290043. Electronic Docs: **Software:** Not Applicable<br />**Authoring Tool:** Generally good, but for dynamic elements like the Layout Builder need a plan for a dynamic heading structure - Drupal issue #3007978.|
|2.4.7 Focus Visible (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Software:** Not Applicable<br />**Authoring Tool:** Partially Supports|Web: Focus elements are well established for the front-end. Further enhancements are being developed to make it more obvious for keyboard only users. Electronic Docs: **Software:** Not Applicable<br />**Authoring Tool:** There are places where we are seeking to improve the focus for authors and administrators - Drupal issue #3048785.|
|3.1.2 Language of Parts (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />sElectronic Docs: Not Applicable**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: Multilingual sites have language switchers with proper semantics.  Electronic Docs: Not Applicable**Software:** Not Applicable<br />**Authoring Tool:** Drupal has good support for multilingual content and accessibility. To support the Language of Parts for authors, a button can be added to simplify the process of adding language specific phrases.|
|3.2.3 Consistent Navigation (Level AA)Also applies to:Revised Section 508501 (Web)(Software) – Does not apply to non-web software504.2 (Authoring Tool)602.3 (Support Docs) – Does not apply to non-web docs|**Web**: Supports <br />s**Electronic Docs:** Supports <br />Authoring Tool Supports|Web: Drupal’s menu structure allows for consistent navigation across the site. Electronic Docs: See Web comment above.**Authoring Tool:** See Web comment above.|
|3.2.4 Consistent Identification (Level AA)Also applies to:Revised Section 508501 (Web)(Software) – Does not apply to non-web software504.2 (Authoring Tool)602.3 (Support Docs) – Does not apply to non-web docs|**Web**: Supports <br />s**Electronic Docs:** Supports <br />**Authoring Tool:** Supports|Web: Components in Drupal that have the same functionality are identified consistently. Electronic Docs: See Web comment above.**Authoring Tool:** See Web comment above.|
|3.3.3 Error Suggestion (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|**Web**: Supports <br />sElectronic Docs: Not Applicable**Software:** Not Applicable<br />**Authoring Tool:** Supports|Web: The Inline Form Error Module is provided in Core and needs to be enabled to allow for this functionality. Electronic Docs: Not Applicable**Software:** Not Applicable<br />**Authoring Tool:** See Web comment above.|
|3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)Also applies to:Revised Section 508501 (Web)(Software)504.2 (Authoring Tool)602.3 (Support Docs)|Web: Not Applicable <br />**Electronic Docs:** Not Applicable <br />**Software:** Not Applicable<br />**Authoring Tool:** Not Applicable||


### Table 3: Success Criteria, Level AAA

**Notes:**


||||
|--- |--- |--- |
|Criteria|Conformance Level|Remarks and Explanations|
|1.2.6 Sign Language (Prerecorded) (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|1.2.7 Extended Audio Description (Prerecorded) (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|1.2.8 Media Alternative (Prerecorded) (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|1.2.9 Audio-only (Live) (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|1.4.6 Contrast (Enhanced)  (Level AAA)Revised Section 508 – Does not apply|**Web**: Supports <br />s|Web: A front-end and back-end theme could be configured to allow this to comply.|
|1.4.7 Low or No Background Audio (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|1.4.8 Visual Presentation (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|1.4.9 Images of Text (No Exception) (Level AAA)Revised Section 508 – Does not apply|**Web**: Supports <br />s|Web: Text images are all supplied by the author.|
|2.1.3 Keyboard (No Exception) (Level AAA)Revised Section 508 – Does not apply|Web: Supports|Web: The web front-end is not a barrier to keyboard only users.|
|2.2.3 No Timing (Level AAA)Revised Section 508 – Does not apply|**Web**: Supports <br />s|Web: There are no timeouts in Drupal Core that would affect people with disabilities.|
|2.2.4 Interruptions (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|2.2.5 Re-authenticating (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|2.3.2 Three Flashes (Level AAA)Revised Section 508 – Does not apply|**Web**: Supports <br />s|Web: There is no flashing content.|
|2.4.8 Location (Level AAA)Revised Section 508 – Does not apply|**Web**: Supports <br />s|Web: Breadcrumbs are available and sitemap modules can be added to provide additional means for navigation.|
|2.4.9 Link Purpose (Link Only) (Level AAA)Revised Section 508 – Does not apply|**Web**: Supports <br />s|Web: Link text is provided with related information for assistive technology.|
|2.4.10 Section Headings (Level AAA)Revised Section 508 – Does not apply|Web: Supports|Web: Drupal provides heading elements at the beginning of each section of content.|
|3.1.3 Unusual Words (Level AAA)Revised Section 508 – Does not apply|**Web:** Not Applicable|Web: Not Applicable|
|3.1.4 Abbreviations (Level AAA)Revised Section 508 – Does not apply|**Web:** Not Applicable|Web: Not Applicable|
|3.1.5 Reading Level (Level AAA)Revised Section 508 – Does not apply|**Web:** Not Applicable|Web: Not Applicable|
|3.1.6 Pronunciation (Level AAA)Revised Section 508 – Does not apply|**Web:** Not Applicable|Web: Not Applicable|
|3.2.5 Change on Request (Level AAA)Revised Section 508 – Does not apply|**Web:** Not Applicable|Web: Not Applicable|
|3.3.5 Help (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|
|3.3.6 Error Prevention (All) (Level AAA)Revised Section 508 – Does not apply|Web: Not Applicable|Web: Not Applicable|




Revised Section 508 Report
--------------------------

**Notes:**

### Chapter 3: [Functional Performance Criteria](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23302-functional-performance-criteria&sa=D&ust=1607973994456000&usg=AOvVaw2KEQJ3FoiGBoF6akb_cG9O) (FPC)

**Notes:**

||||
|--- |--- |--- |
|Criteria|Conformance Level|Remarks and Explanations|
|302.1 Without Vision|Supports|Testing has been done with JAWS, NVDA and VoiceOver|
|302.2 With Limited Vision|Supports|Testing has been done with browser zoom and ZoomText.|
|302.3 Without Perception of Color|Supports|The interface has been reviewed for use of color.|
|302.4 Without Hearing|Not Applicable||
|302.5 With Limited Hearing|Not Applicable||
|302.6 Without Speech|Not Applicable||
|302.7 With Limited Manipulation|Supports|Drupal’s interface does not restrict users with limited manipulation.|
|302.8 With Limited Reach and Strength|Supports|Drupal’s interface does not restrict users with limited reach or strength.|
|302.9 With Limited Language, Cognitive, and Learning Abilities|Not Applicable||


### Chapter 4: [Hardware](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23401-general&sa=D&ust=1607973994470000&usg=AOvVaw3gWN-mMYK_IwO62YbZ-Uwi)

**Notes:** Drupal is a web application. Hardware accessibility criteria is not applicable.

### Chapter 5: [Software](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23501-general&sa=D&ust=1607973994471000&usg=AOvVaw1jeoXrXLFsjD0wbpSeTSNE)

**Notes:** Drupal is a web application.

### Chapter 6: [Support Documentation and Services](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23601-general&sa=D&ust=1607973994472000&usg=AOvVaw2_S_DhLqpLaJuCht7o_Jfn)

**Notes:**

||||
|--- |--- |--- |
|Criteria|Conformance Level|Remarks and Explanations|
|601.1 Scope|Heading cell – no response required|Heading cell – no response required|
|602 Support Documentation|Heading cell – no response required|Heading cell – no response required|
|602.2 Accessibility and Compatibility Features|Supports|Documentation is hosted on Drupal.org which works to support WCAG 2.1 AA compliance.|
|602.3 Electronic Support Documentation|See WCAG 2.0 section|See information in WCAG 2.0 section|
|602.4 Alternate Formats for Non-Electronic Support Documentation|Not Applicable|Not Applicable|
|603 Support Services|Heading cell – no response required|Heading cell – no response required|
|603.2 Information on Accessibility and Compatibility Features|Supports|Drupal.org’s accessibility features are documented.|
|603.3 Accommodation of Communication Needs|Not Applicable|Not Applicable|


Legal Disclaimer (CivicActions)
-------------------------------

The information herein is provided in good faith based on the analysis of the web application at the time of the review and does not represent a legally-binding claim. Please contact us to report any accessibility errors or conformance claim errors for re-evaluation and correction, if necessary.
