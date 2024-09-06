---
layout: guide
title: Accessibility bug classification
description: Guidance for prioritizing accessibility bugs based on degree of user impact on top tasks 
excerpt: 
sidenav: docs
categories:
  - Accessibility
roles:
  - Developer
  - Product manager
  - Project manager
  - UX designer
---
 
CivicActions teams use this guidance to prioritize accessibility issues based on the degree of content interference caused by a WCAG success criterion failure. We [treat accessibility issues as bugs](https://github.com/readme/guides/fix-accessibility-bugs), and have adapted priority definitions from [Deque's issue impact classification](https://github.com/dequelabs/axe-core/blob/develop/doc/issue_impact.md).

Note that:
* The list is illustrative, not exhaustive, and
* A failure can belong to more than one level depending on how severely it impacts content access.

Teams may evaluate an issue further with respect to its impact on specific content, functionality, or usability. Reasons for adjustment should be included in the ticket description, and when new patterns or examples are identified they should be considered for inclusion in the table.

<table>
  <thead>
    <tr>
      <th>Access failure</th>
      <th>Issue priority</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><a href="https://www.w3.org/TR/WCAG22/#cc5">Page-level interference (Single A criteria)</a></strong>
        <ul>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#audio-control">no audio control (1.4.2)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap">keyboard trap (2.1.2)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide">no pause, stop, hide (2.2.2)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG22/quickref/#three-flashes-or-below-threshold">four flashes or above threshold (2.3.1)</a></li>
        </ul>
      </td>
     <td><strong>Highest user impact</strong>
  <ul>
    <li>Dire, resolve immediately</li>
    <li>Forces user to abandon essential workflow</li>
    <li>Users with disabilities fundamentally blocked</li>
    <li>Creates immediate organizational risk</li>
    <li>Everything else can wait for this</li>
  </ul>
</td>
      </td>
      <td><strong>Do now</strong><br />
        Bypass release cycle
      </td>
    </tr>
    <tr>
      <td><strong>Primary component failure</strong>
        <ul>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-content">images missing alt attributes (1.1.1)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded">audio lacks captions (1.2.2)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded">video lacks audio descriptions (1.2.5)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">content meaning wrong without CSS (1.3.2 F1)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">text less than 4.5:1 contrast ratio (1.4.3)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard">an interaction is not keyboard navigable (2.1.1)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap">keyboard trap in one direction only (2.1.2)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#timeouts">user not warned of timeout (2.2.6)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">form inputs missing a label (3.3.2)</a></li>
        </ul>
      </td>
      <td><strong>High user impact</strong>
        <ul>
          <li>Significantly degrades essential workflow</li>
          <li>Users with disabilities substantially blocked</li>
          <li>Significant frustration for AT users</li>
          <li>The issue has been around a long time</li>
          <li>Other work can wait for this</li>
        </ul>
      </td>
      <td><strong>Do next</strong><br />
        Address in next release
      </td>
    </tr>
    <tr>
      <td><strong>Component interference</strong>
        <ul>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">headings missing/out of order (1.3.1)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#identify-purpose">content/component not in a landmark (1.3.6)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">table is not well-formed (1.3.2)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">content sequence wrong without CSS (1.3.2 F1)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks">skip to content link missing or broken (2.4.1)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">tab order is non-sequential (2.4.3)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels">table is missing headings (2.4.6)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">keyboard focus disappears/not visible (2.4.7)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">instructions not with inputs (3.3.2 ARIA17)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">form label missing but inferrable (3.3.2 G167)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">custom control lacks full API support (4.1.2)</a></li>
        </ul>
      </td>
      <td><strong>Medium user impact</strong>
        <ul>
          <li>Degrades non-critical workflows for AT users</li>
          <li>Users with disabilities are slowed down</li>
          <li>Some frustration for AT users is likely</li>
          <li>Acceptable short-term workaround exists</li>
          <li>Low priority issue that has been around a while</li>
        </ul>
      </td>
      <td><strong>Do soon</strong><br />
        Address this quarter
      </td>
    </tr>
    <tr>
      <td><strong>Page or component degradation</strong>
        <ul>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks">iframe is missing title attribute (2.4.1 H64)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#page-titled">page titles duped/lack adequate detail (2.4.2)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only">link text lacks adequate context (2.4.9)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#language-of-page">language not set at page level (3.1.1)</a></li>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification">inconsistent labeling of same function (3.2.4)</a></li>
        </ul>
      </td>
      <td><strong>Low user impact</strong>
        <ul>
          <li>Does not substantially degrade a workflow</li>
          <li>Has a simple workaround</li>
          <li>Hinders compliance</li>
          <li>Annoyance bug</li>
          <li>If the affected component is not actively used</li>
        </ul>
      </td>
      <td><strong>Do later</strong><br />
        Address when doing related work
      </td>
    </tr>
    <tr>
      <td><strong>Missing best practices</strong></td>
      <td><strong>Lowest user impact</strong>
        <ul>
          <li>No significant user value to fix</li>
          <li>Only in unsupported browser or component</li>
        </ul>
      </td>
      <td><strong>Do as time allows</strong></td>
    </tr>
  </tbody>
</table>


