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
|  [Web Content Accessibility Guidelines 2.0](https://www.google.com/url?q=http://www.w3.org/TR/2008/REC-WCAG20-20081211&sa=D&ust=1607973994149000&usg=AOvVaw3-0gHe7v6ATtZlroyhloWx)  | Level A (Yes) 
Level AA (Yes)
Level AAA (No)  |
| [Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines&sa=D&ust=1607973994151000&usg=AOvVaw0XOEd3xy37OohdwzhT1Tpa)   | (Yes) |

Terms
-----

The terms used in the Conformance Level information are defined as follows:

*   Supports: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
*   Partially Supports: Some functionality of the product does not meet the criterion.
*   Does Not Support: The majority of product functionality does not meet the criterion.
*   Not Applicable: The criterion is not relevant to the product.
*   Not Evaluated: The product has not been evaluated against the criterion. This can be used only in WCAG 2.0 Level AAA.

WCAG 2.0 Report
---------------

Tables 1 and 2 also document conformance with Revised Section 508:

*   Chapter 5 – 501.1 Scope, 504.2 Content Creation or Editing
*   Chapter 6 – 602.3 Electronic Support Documentation

Note: When reporting on conformance with the WCAG 2.0 Success Criteria, they are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.0 Conformance Requirements](https://www.google.com/url?q=https://www.w3.org/TR/WCAG20/%23conformance-reqs&sa=D&ust=1607973994155000&usg=AOvVaw28VVkoHXIehwT-QMXfJek5).

* * *

### Table 1: Success Criteria, Level A

Notes:

Criteria

Conformance Level

Remarks and Explanations

[1.1.1 Non-text Content](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23text-equiv-all&sa=D&ust=1607973994160000&usg=AOvVaw1DI3pOOb5IbRhFbyt4MjlA) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)
*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool:  Supports

Web: Drupal 8 requires alt text for images by default.

Electronic Docs: Some non-textual content in the documentation does not provide a textual alternative.

Software: Not Applicable

Authoring Tool: The back end of Drupal Core was built to be  WCAG 2.0 AA compliant and non-text content in the administration interface has a textual equivalent.

Audio and video can be added to the media library, but Core does not provide tools to manage transcripts and captions/subtitles for local video and audio - [Drupal issue #3002770](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3002770&sa=D&ust=1607973994165000&usg=AOvVaw2UIxd5mca68QoX69igi1B4).

[1.2.1 Audio-only and Video-only (Prerecorded)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-av-only-alt&sa=D&ust=1607973994166000&usg=AOvVaw1ch2_WYYV1pu89qLXnnsR7) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Not Applicable

[1.2.2 Captions (Prerecorded)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-captions&sa=D&ust=1607973994170000&usg=AOvVaw2TtpYpv8QmFIIeElevxkwZ) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool:Not Applicable

[1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-audio-desc&sa=D&ust=1607973994175000&usg=AOvVaw3U1UlQiPTLTZmjEoY5hx2b) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool:Not Applicable

[1.3.1 Info and Relationships](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23content-structure-separation-programmatic&sa=D&ust=1607973994179000&usg=AOvVaw1KZxgGErabPTR79yxiuz2m) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool:  Supports

Web: Information is structured into logical relationships.

Navigational lists are well used to group information.

Forms have a visual and semantic representation for required fields.

Electronic Docs: Information is structured into logical relationships.

Navigational lists are well used to group information.

Software: Not Applicable

Authoring Tool: The authoring environment was constructed to support ATAG 2.0 AA (Part A and B)

[1.3.2 Meaningful Sequence](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23content-structure-separation-sequence&sa=D&ust=1607973994186000&usg=AOvVaw1QNMndxP8nAEk5iJjKeb8g) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Drupal Core has been extensively tested with keyboard only users.

As a proudly multilingual CMS, Drupal provides support for bidirectional navigation.

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: The authoring environment was constructed to support ATAG 2.0 AA (Part A and B)

[1.3.3 Sensory Characteristics](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23content-structure-separation-understanding&sa=D&ust=1607973994192000&usg=AOvVaw3Q1FXddzs0RZBhUy_X4CLV)  (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Where possible Drupal Core uses combinations of text and symbols for the user interface.

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: The authoring interface has been developed to not rely on symbols alone to convey information to the user.

[1.4.1 Use of Color](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23visual-audio-contrast-without-color&sa=D&ust=1607973994198000&usg=AOvVaw0FRbLV2P4tHQaqVwtcLkWF) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Color is not used without text and often symbols to convey meaning.

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: In general, the admin theme is very accessible. The Claro Administration Theme shortcut start needs improvement - [Drupal issue #3171726](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3171726&sa=D&ust=1607973994203000&usg=AOvVaw21ATkw0zenPt_dXlMf0bVt).

[1.4.2 Audio Control](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23visual-audio-contrast-dis-audio&sa=D&ust=1607973994204000&usg=AOvVaw1vp5MDISGxbgbbv7WzYdAy) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Not Applicable

[2.1.1 Keyboard](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23keyboard-operation-keyboard-operable&sa=D&ust=1607973994209000&usg=AOvVaw06gzQaZ5JLHAObSZm_KFve) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Partial Support

Web: Users can interact with Drupal Core with the keyboard and without specific timings for individual keystrokes.

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Authors are largely able to engage with Drupal Core with the keyboard and without specific timings for individual keystrokes.

Tooltips not displayed for keyboard navigation - [Drupal issue #2933984](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/2933984&sa=D&ust=1607973994214000&usg=AOvVaw2T6Fb_LXyU8pX4wC0PJwkY).

There are reported issues with IE11 and JAWS - [Drupal issue #2852702](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/2852702&sa=D&ust=1607973994215000&usg=AOvVaw27hSYtyQ5XNJfn0kSH_vB0).

It is worth noting that Drupal’s admin is powerful and complex, and there are other [accessibility reports in the issue queue](https://www.google.com/url?q=https://www.drupal.org/project/issues/search/drupal?text%3Dkeyboard%26assigned%3D%26submitted%3D%26project_issue_followers%3D%26status%255B%255D%3DOpen%26version%255B%255D%3Dany_10.%26version%255B%255D%3Dany_9.%26version%255B%255D%3Dany_8.%26issue_tags_op%3D%253D%26issue_tags%3Daccessibility&sa=D&ust=1607973994216000&usg=AOvVaw1bd7pSOohTnZHLgg-fulAe).

[2.1.2 No Keyboard Trap](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23keyboard-operation-trapping&sa=D&ust=1607973994217000&usg=AOvVaw1lvoa1BKQousi9W0DyurlJ) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Focus can be moved away from that component using only a keyboard interface.

Electronic Docs: See Web comment above.

Software: Not Applicable

Authoring Tool: See Web comment above.

[2.2.1 Timing Adjustable](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23time-limits-required-behaviors&sa=D&ust=1607973994222000&usg=AOvVaw2ZyYS-KWijjHXaJPBpz1-N) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: The time limit is longer than 20 hours.

Electronic Docs:

Software: Not Applicable

Authoring Tool: See Web comment above.

[2.2.2 Pause, Stop, Hide](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23time-limits-pause&sa=D&ust=1607973994228000&usg=AOvVaw1-qRiVzTSeA5VQIOjINS6L) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Not Applicable

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: There is no moving, blinking, scrolling, or auto-updating information in Drupal Core. There is also no built-in mechanism to support authors in controlling this type of motion. 

[2.3.1 Three Flashes or Below Threshold](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23seizure-does-not-violate&sa=D&ust=1607973994233000&usg=AOvVaw2p4du1lRSA8_cgzhjSEkmb) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

[2.4.1 Bypass Blocks](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-skip&sa=D&ust=1607973994238000&usg=AOvVaw17EtFa7gcS_QZg_KyZURKV) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software) – Does not apply to non-web software
*   504.2 (Authoring Tool)

*   602.3 (Support Docs) – Does not apply to non-web docs

Web: Supports

Electronic Docs: Supports

Authoring Tool: Supports

Web: Skip links are provided.

Electronic Docs: See above comment.

Authoring Tool: See Web comment above.

[2.4.2 Page Titled](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-title&sa=D&ust=1607973994243000&usg=AOvVaw1SLMM2xvMDuRuRytoj5KVf) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Partial Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Pages have titles, but in the case of multi-page events, the page number is not included - [Drupal issue #2509716](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/2509716&sa=D&ust=1607973994247000&usg=AOvVaw12_MUT_TvV8n_sibcdEkd1).

Electronic Docs:

Software: Not Applicable

Authoring Tool: See Web comment above.

[2.4.3 Focus Order](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-focus-order&sa=D&ust=1607973994249000&usg=AOvVaw2Ql4GnNsxoA9B2MCStZSgJ) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Focusable components receive focus in an order that preserves meaning and operability.

Electronic Docs: See above comment.

Software: Not Applicable

Authoring Tool: See Web comment above.

[2.4.4 Link Purpose (In Context)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-refs&sa=D&ust=1607973994255000&usg=AOvVaw3LnTdaaGNOSEfbEWZYjKF0) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Careful attention has been paid to ensure that automated “Read More” links are available in a way that is available with contextual information for screen readers.

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: See Web comment above.

[3.1.1 Language of Page](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23meaning-doc-lang-id&sa=D&ust=1607973994261000&usg=AOvVaw3hDEPKbwUfms7TvR0q_Tqn) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Page language is defined semantically on every page.

Electronic Docs:See Web comment above.

Software: Not Applicable

Authoring Tool: See Web comment above.

[3.2.1 On Focus](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23consistent-behavior-receive-focus&sa=D&ust=1607973994266000&usg=AOvVaw3KAgBAb_VBxn_IY3qKxmj7) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Change in the focus state does not initiate a change of context for the user.

Electronic Docs: See Web comment above.

Software: Not Applicable

Authoring Tool: See Web comment above.

[3.2.2 On Input](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23consistent-behavior-unpredictable-change&sa=D&ust=1607973994272000&usg=AOvVaw1fDbG3rT1mKtYjtm_ovugC) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Supports

Web: Engaging with the interactive sites does not unexpectedly take control from the users.

Electronic Docs: See Web comment above.

Software: Not Applicable

Authoring Tool: See Web comment above.

[3.3.1 Error Identification](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23minimize-error-identified&sa=D&ust=1607973994277000&usg=AOvVaw25BoIyNDUD7bN2Fgu9lBpk) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Supports

Web: The Inline Form Error module was added in Drupal 8. This needs to be enabled site-wide on installation.

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: See Web comment above.

[3.3.2 Labels or Instructions](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23minimize-error-cues&sa=D&ust=1607973994281000&usg=AOvVaw2k7E2111w-Kr1ccd5GmjJN) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Partially Supports

Web: Default forms all include labels.

Electronic Docs: See Web comment above.

Software: Not Applicable

Authoring Tool: There are a few places where there are problems with labels, but these are odd exceptions - [Drupal issue #2766853](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/2766853&sa=D&ust=1607973994286000&usg=AOvVaw2XemmAnUk3LHcDcReibvRj) and [#3015494](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3015494&sa=D&ust=1607973994286000&usg=AOvVaw0wvUc48Ak1xl623dAiUtp-).

[4.1.1 Parsing](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23ensure-compat-parses&sa=D&ust=1607973994288000&usg=AOvVaw2rP5gvsyEtaJQq3MaD2Zi2) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Partially Supports

Web: There are no HTML5 errors or warnings that are known to impact assistive technology users..

Electronic Docs: See Web comment above.

Software: Not Applicable

Authoring Tool: Generally parsing is very well supported, but there are a few places where this needs to be improved - Drupal issue [#1852090](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/1852090&sa=D&ust=1607973994293000&usg=AOvVaw0dCbAR9CSEcnzLphAkxsN9) and [#3144948](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3144948&sa=D&ust=1607973994294000&usg=AOvVaw1uBxNaRYekDjAduov00vyb).

[4.1.2 Name, Role, Value](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23ensure-compat-rsv&sa=D&ust=1607973994295000&usg=AOvVaw3A6VuNZ4y0OtPmA2crvjvN) (Level A)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Partially Supports

Web: Public pages support this criterion.

Electronic Docs: See Web comment above.

Software: Not Applicable

Authoring Tool: This is generally well supported, but there are places where it has been overlooked.  Drupal issue [#3144948](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3144948&sa=D&ust=1607973994300000&usg=AOvVaw3WOmroGsM_aF_eXx74HQrw) and [#3019487](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3019487&sa=D&ust=1607973994301000&usg=AOvVaw0rABC3-7RVZQ1lNdaVjjOh).

### Table 2: Success Criteria, Level AA

Notes:

Criteria

Conformance Level

Remarks and Explanations

[1.2.4 Captions (Live)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-real-time-captions&sa=D&ust=1607973994307000&usg=AOvVaw14goFQiD3vCJDlLoGhDqvN) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool:Not Applicable

[1.2.5 Audio Description (Prerecorded)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-audio-desc-only&sa=D&ust=1607973994312000&usg=AOvVaw01XyBalUohDcl4v82m0t9A) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool:Not Applicable

[1.4.3 Contrast (Minimum)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23visual-audio-contrast-contrast&sa=D&ust=1607973994316000&usg=AOvVaw0g_0t7Yb5-xjr4Mmn1IHTU) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Partially Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Partially Supports

Web: Generally meets. Some contrast failures around grey backgrounds - [Drupal  issue #3040673](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3040673&sa=D&ust=1607973994319000&usg=AOvVaw1Xd0dPll7dqGEa6XL-8DkU).

Electronic Docs: The docs have sufficient contrast.

Software: Not Applicable

Authoring Tool: Generally meets requirements. Some challenges with Core admin themes - [Drupal issue #930508](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/2930508&sa=D&ust=1607973994320000&usg=AOvVaw2g5CEkunStsVzcgPEiR4E4) and [#3080100](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3080100&sa=D&ust=1607973994321000&usg=AOvVaw0arYeM_-fAAAkaIJuMQo5U).

[1.4.4 Resize text](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23visual-audio-contrast-scale&sa=D&ust=1607973994322000&usg=AOvVaw3IuYUe_7Ehs5Ink_gnHZU7) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Partially Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Partially Supports

Web: Generally support with some minor exceptions - [Drupal issue #3129257](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3129257&sa=D&ust=1607973994325000&usg=AOvVaw1a77i9wm7aMPAtWSwxGcIx).

Electronic Docs: The docs are accessible up to 200%

Software: Not Applicable

Authoring Tool: Generally good with some exceptions - [Drupal issue #3164587](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3164587&sa=D&ust=1607973994326000&usg=AOvVaw0Cluj3J3j1D96JzSFLQtHL).

[1.4.5 Images of Text](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23visual-audio-contrast-text-presentation&sa=D&ust=1607973994327000&usg=AOvVaw10Mk3EkKQV03qjC9_gns0F) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Supports

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Text is generally styled with CSS in the authoring tool. Should images of text be uploaded by the user, they will be required to add alternative text.

[2.4.5 Multiple Ways](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-mult-loc&sa=D&ust=1607973994331000&usg=AOvVaw13U2k9hdMyqGIfkENPezhT) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software) – Does not apply to non-web software
*   504.2 (Authoring Tool)

*   602.3 (Support Docs) – Does not apply to non-web docs

Web: Supports

Electronic Docs: Supports

Authoring Tool: Supports

Web: There is more than one way to locate a Web page within the CMS.

Electronic Docs: See Web comment above.

Authoring Tool: See Web comment above.

[2.4.6 Headings and Labels](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-descriptive&sa=D&ust=1607973994336000&usg=AOvVaw3xfgFZbavjP3yl_TcjbHdg) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Partially Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Partially Supports

Web: Generally there is very good support. Some heading levels may be missed in some unique contexts - [Drupal issue #1768732](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/1768732&sa=D&ust=1607973994340000&usg=AOvVaw3LAFTechM9a3WtDohp7f7I). Better support could be provided for threaded comments - [Drupal issue #2290043](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/2290043&sa=D&ust=1607973994340000&usg=AOvVaw0d3MRDTQnBggMhcfF4xiYj).

Electronic Docs:

Software: Not Applicable

Authoring Tool: Generally good, but for dynamic elements like the Layout Builder need a plan for a dynamic heading structure - [Drupal issue #3007978](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3007978&sa=D&ust=1607973994341000&usg=AOvVaw105bnLYLmmXHMjOQE6GvW7).

[2.4.7 Focus Visible](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-focus-visible&sa=D&ust=1607973994343000&usg=AOvVaw14WEf1t44k0Qx9hjUoRjX9) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Supports

Software: Not Applicable

Authoring Tool: Partially Supports

Web: Focus elements are well established for the front-end. [Further enhancements are being developed](https://www.google.com/url?q=https://www.drupal.org/project/issues/search/drupal?text%3Dfocus%26assigned%3D%26submitted%3D%26project_issue_followers%3D%26status%255B%255D%3DOpen%26version%255B%255D%3Dany_10.%26version%255B%255D%3Dany_9.%26version%255B%255D%3Dany_8.%26issue_tags_op%3D%253D%26issue_tags%3Daccessibility&sa=D&ust=1607973994347000&usg=AOvVaw0W2myUE1PCjMGsMj7ZMWEa) to make it more obvious for keyboard only users.

Electronic Docs:

Software: Not Applicable

Authoring Tool: There are places where we are seeking to improve the focus for authors and administrators - [Drupal issue #3048785](https://www.google.com/url?q=https://www.drupal.org/project/drupal/issues/3048785&sa=D&ust=1607973994348000&usg=AOvVaw1Xi3uMcmqV2gpCiUDMbgG4).

[3.1.2 Language of Parts](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23meaning-other-lang-id&sa=D&ust=1607973994350000&usg=AOvVaw3DvIwcMNQFpNu8XguVbwTJ) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Supports

Web: Multilingual sites have language switchers with proper semantics. 

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Drupal has good support for multilingual content and accessibility. To support the Language of Parts for authors, a button can be added to simplify the process of adding language specific phrases.

[3.2.3 Consistent Navigation](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23consistent-behavior-consistent-locations&sa=D&ust=1607973994355000&usg=AOvVaw0LrCTp1DVs6VPY084xzjtr) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software) – Does not apply to non-web software
*   504.2 (Authoring Tool)

*   602.3 (Support Docs) – Does not apply to non-web docs

Web: Supports

Electronic Docs: Supports

Authoring Tool Supports

Web: Drupal’s menu structure allows for consistent navigation across the site.

Electronic Docs: See Web comment above.

Authoring Tool: See Web comment above.

[3.2.4 Consistent Identification](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23consistent-behavior-consistent-functionality&sa=D&ust=1607973994360000&usg=AOvVaw1aG8NeXlbzKh0dGYFnKOEA) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software) – Does not apply to non-web software
*   504.2 (Authoring Tool)

*   602.3 (Support Docs) – Does not apply to non-web docs

Web: Supports

Electronic Docs: Supports

Authoring Tool: Supports

Web: Components in Drupal that have the same functionality are identified consistently.

Electronic Docs: See Web comment above.

Authoring Tool: See Web comment above.

[3.3.3 Error Suggestion](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23minimize-error-suggestions&sa=D&ust=1607973994364000&usg=AOvVaw0oVC_3mxmcVP1g4ku8DDi6) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Supports

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Supports

Web: The Inline Form Error Module is provided in Core and needs to be enabled to allow for this functionality.

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: See Web comment above.

[3.3.4 Error Prevention (Legal, Financial, Data)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23minimize-error-reversible&sa=D&ust=1607973994369000&usg=AOvVaw3WkRaTO5mI2dbIM1NY2DcP) (Level AA)

Also applies to:

Revised Section 508

*   501 (Web)(Software)
*   504.2 (Authoring Tool)

*   602.3 (Support Docs)

Web: Not Applicable

Electronic Docs: Not Applicable

Software: Not Applicable

Authoring Tool: Not Applicable

### Table 3: Success Criteria, Level AAA

Notes:

Criteria

Conformance Level

Remarks and Explanations

[1.2.6 Sign Language (Prerecorded)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-sign&sa=D&ust=1607973994376000&usg=AOvVaw13IlILcxc1Bg10VBl1eaZR) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[1.2.7 Extended Audio Description (Prerecorded)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-extended-ad&sa=D&ust=1607973994379000&usg=AOvVaw1qe5K2TO11yYakQpwORZ_S) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[1.2.8 Media Alternative (Prerecorded)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-text-doc&sa=D&ust=1607973994383000&usg=AOvVaw3mAGbJC2pZGmnBGyQCv1_T) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[1.2.9 Audio-only (Live)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23media-equiv-live-audio-only&sa=D&ust=1607973994387000&usg=AOvVaw3NRc6n_pplhyMHM1Hi6pl0) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[1.4.6 Contrast (Enhanced](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23visual-audio-contrast7&sa=D&ust=1607973994390000&usg=AOvVaw3Lq-mr8moWYgLoMpLtdKre))  (Level AAA)

Revised Section 508 – Does not apply

Web: Supports

Web: A front\-end and back-end theme could be configured to allow this to comply.

[1.4.7 Low or No Background Audio](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23visual-audio-contrast-noaudio&sa=D&ust=1607973994392000&usg=AOvVaw3ZOwVwGnj_HUH-7jgGSVUg) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[1.4.8 Visual Presentation](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23visual-audio-contrast-visual-presentation&sa=D&ust=1607973994396000&usg=AOvVaw1glGHvCbtP8RrGuDQ2VBRS) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[1.4.9 Images of Text (No Exception)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23http://www.w3.org/TR/WCAG20/&sa=D&ust=1607973994399000&usg=AOvVaw3NK7ZO5E0lTi7m13ATMZGd) (Level AAA)

Revised Section 508 – Does not apply

Web: Supports

Web: Text images are all supplied by the author.

[2.1.3 Keyboard (No Exception)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23keyboard-operation-all-funcs&sa=D&ust=1607973994403000&usg=AOvVaw1TB7drCdJx5XjNrx8dex0_) (Level AAA)

Revised Section 508 – Does not apply

Web: Supports

Web: The web front-end is not a barrier to keyboard only users.

[2.2.3 No Timing](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23time-limits-no-exceptions&sa=D&ust=1607973994407000&usg=AOvVaw1prF7_umJmg6vJsWJsT0Vn) (Level AAA)

Revised Section 508 – Does not apply

Web: Supports

Web: There are no timeouts in Drupal Core that would affect people with disabilities.

[2.2.4 Interruptions](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23time-limits-postponed&sa=D&ust=1607973994411000&usg=AOvVaw2IhXi1BRKXRCxXvN22q1vW) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[2.2.5 Re-authenticating](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23time-limits-server-timeout&sa=D&ust=1607973994415000&usg=AOvVaw0qXEV0gEibnfWDoD54RpOB) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[2.3.2 Three Flashes](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23seizure-three-times&sa=D&ust=1607973994419000&usg=AOvVaw2eml4c_S21UsN0lflg9El3) (Level AAA)

Revised Section 508 – Does not apply

Web: Supports

Web: There is no flashing content.

[2.4.8 Location](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-location&sa=D&ust=1607973994422000&usg=AOvVaw1NQLfl6ow75xr1ykbIAzf6) (Level AAA)

Revised Section 508 – Does not apply

Web: Supports

Web: Breadcrumbs are available and sitemap modules can be added to provide additional means for navigation.

[2.4.9 Link Purpose (Link Only)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-link&sa=D&ust=1607973994425000&usg=AOvVaw1gZjY2rjS4IgGrb3SLIulQ) (Level AAA)

Revised Section 508 – Does not apply

Web: Supports

Web: Link text is provided with related information for assistive technology.

[2.4.10 Section Headings](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23navigation-mechanisms-headings&sa=D&ust=1607973994429000&usg=AOvVaw1UvFUBvKDorgitdls52ewf) (Level AAA)

Revised Section 508 – Does not apply

Web: Supports

Web: Drupal provides heading elements at the beginning of each section of content.

[3.1.3 Unusual Words](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23meaning-idioms&sa=D&ust=1607973994433000&usg=AOvVaw32KAI7qqptHdOOzUXMXM50) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[3.1.4 Abbreviations](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23meaning-located&sa=D&ust=1607973994437000&usg=AOvVaw0XD2WhitoMXXqFjHzGp8Gq) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[3.1.5 Reading Level](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23meaning-supplements&sa=D&ust=1607973994440000&usg=AOvVaw0ovcBOI2dC_swFeb_s8aNe) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[3.1.6 Pronunciation](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23meaning-pronunciation&sa=D&ust=1607973994443000&usg=AOvVaw1Tk7_90HxRUSPiKRz3hTFv) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[3.2.5 Change on Request](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23consistent-behavior-no-extreme-changes-context&sa=D&ust=1607973994447000&usg=AOvVaw2Xll1TpIQ0-ffALiyW57a_) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[3.3.5 Help](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23minimize-error-context-help&sa=D&ust=1607973994450000&usg=AOvVaw3Lx85u8iMXJbwgzbD_sHZR) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

[3.3.6 Error Prevention (All)](https://www.google.com/url?q=http://www.w3.org/TR/WCAG20/%23minimize-error-reversible-all&sa=D&ust=1607973994453000&usg=AOvVaw36CcyyYaZGqyNH9b4rSfSQ) (Level AAA)

Revised Section 508 – Does not apply

Web: Not Applicable

Web: Not Applicable

* * *

Revised Section 508 Report
--------------------------

Notes:

### Chapter 3: [Functional Performance Criteria](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23302-functional-performance-criteria&sa=D&ust=1607973994456000&usg=AOvVaw2KEQJ3FoiGBoF6akb_cG9O) (FPC)

Notes:

Criteria

Conformance Level

Remarks and Explanations

302.1 Without Vision

Supports

Testing has been done with JAWS, NVDA and VoiceOver

302.2 With Limited Vision

Supports

Testing has been done with browser zoom and ZoomText.

302.3 Without Perception of Color

Supports

The interface has been reviewed for use of color.

302.4 Without Hearing

Not Applicable

302.5 With Limited Hearing

Not Applicable

302.6 Without Speech

Not Applicable

302.7 With Limited Manipulation

Supports

Drupal’s interface does not restrict users with limited manipulation.

302.8 With Limited Reach and Strength

Supports

Drupal’s interface does not restrict users with limited reach or strength.

302.9 With Limited Language, Cognitive, and Learning Abilities

Not Applicable

### Chapter 4: [Hardware](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23401-general&sa=D&ust=1607973994470000&usg=AOvVaw3gWN-mMYK_IwO62YbZ-Uwi)

Notes: Drupal is a web application. Hardware accessibility criteria is not applicable.

### Chapter 5: [Software](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23501-general&sa=D&ust=1607973994471000&usg=AOvVaw1jeoXrXLFsjD0wbpSeTSNE)

Notes: Drupal is a web application.

### Chapter 6: [Support Documentation and Services](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23601-general&sa=D&ust=1607973994472000&usg=AOvVaw2_S_DhLqpLaJuCht7o_Jfn)

Notes:

Criteria

Conformance Level

Remarks and Explanations

601.1 Scope

Heading cell – no response required

Heading cell – no response required

[602 Support Documentation](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23602-support-documentation&sa=D&ust=1607973994476000&usg=AOvVaw16nSH_ya5yLfiPrr-4HYER)

Heading cell – no response required

Heading cell – no response required

602.2 Accessibility and Compatibility Features

Supports

Documentation is hosted on Drupal.org which works to support WCAG 2.1 AA compliance.

602.3 Electronic Support Documentation

See [WCAG 2.0](#id.ihv636) section

See information in WCAG 2.0 section

602.4 Alternate Formats for Non-Electronic Support Documentation

Not Applicable

Not Applicable

[603 Support Services](https://www.google.com/url?q=https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines%23603-support-services&sa=D&ust=1607973994482000&usg=AOvVaw0xEbjMEZi8cuDvWVw9iwEd)

Heading cell – no response required

Heading cell – no response required

603.2 Information on Accessibility and Compatibility Features

Supports

Drupal.org’s accessibility features are documented.

603.3 Accommodation of Communication Needs

Not Applicable

Not Applicable

Legal Disclaimer (CivicActions)
-------------------------------

The information herein is provided in good faith based on the analysis of the web application at the time of the review and does not represent a legally-binding claim. Please contact us to report any accessibility errors or conformance claim errors for re-evaluation and correction, if necessary.
