---
layout: post
title: "Helping disabled Veterans Check-In: Designing an Accessibility Map"
date: 2023-4-6 08:00:00 -0800
author: nira-datta
---
_A note on language: We're using both people-first language ("a person with a
disability") and identity-first language ("disabled person"). We recognize
both are valid and advocated for within the disability community._

"We lost our vision due to our service…my vision gets blurry," says a Veteran
over Zoom during a user research session.

We were testing new designs for a web-based app helping Veterans check into a
medical appointment.

This Veteran's experience is not uncommon: about 30% of Veterans live with a
disability (but that number is likely much higher due to military culture).
Almost 7,000 Veterans become newly blind or visually impaired every year. And
disabilities can vary in type and severity — the most common of which include
hearing loss, post-traumatic stress disorder (PTSD), scars, back and neck
pain, and migraines.

![Summary of check-in process on day of appointment: 1\) A poster titled 'Have
an appointment? Check in with your smartphone' is placed in the facility. The
Veteran scans the QR code or texts '5309' to check into their appointment
using their phone 2\) A page titled 'Check-in'. 3\) A page titled ' You've
checked-in for your 1pmET appointment'. 4\) An icon of the Medical Support
Assistant \(MSA\) who receives the check-in notification. 5\) An icon of the
Veteran waiting to be seen.](https://cdn-
images-1.medium.com/max/1024/1*3DFURXlCIC3EfrBXczqkEQ.png) _Figure 1: A few
days before an appointment, a Veteran receives an SMS text with a link to
start pre-check-in. After selecting the link, the Veteran sees the login page
(first image). When they complete pre-check-in, they see the submission page
(second image)._![Example pages of pre-check-in app: 1\) A login page titled
Start pre-check-in for the Veteran to enter their last name and last 4 digits
of their social security number. 2\) A page titled Your pre-check-in is
complete appears, which includes a summary of the upcoming appointment \(date,
time and location\).](https://cdn-
images-1.medium.com/max/524/1*mhjC0hkWfTbpQso6YVuNZg.png) _Figure 2: When the
Veteran arrives on the day of their appointment, a poster with instructions to
check-in is placed in the facility. The Veteran scans the QR code or texts
'5309' to check into their appointment using their phone. The Medical Support
Assistant (MSA) receives a notification that the Veteran has checked-in to
their appointment. The Veteran waits until called in._

### Checking into a medical appointment with a smartphone has barriers

For example, it requires a Veteran to:

  * Own a phone (or have access to one)
  * See the check-in poster at the facility
  * Have reasonable tech-savviness to use SMS or a QR code
  * Understand the steps within a reasonably short time-frame (which can be difficult for some Veterans with cognitive disability or PTSD)

> We wanted to design digital and non-digital solutions that helped make it
> more usable for disabled Veterans to check into medical appointments.

But we had a lot of questions.

  * Are we able to design for the range of types and severity of disabilities?
  * Would some solutions only benefit some Veterans, while introducing barriers to others?
  * How do we decide on those trade-offs?

### We created an Accessibility Use Case Map

An accessibility use case map is a framework to evaluate proposed solutions
across multiple different types of disabilities affecting Veterans. We
considered both digital and non-digital solutions for each phase of the check-
in process.

#### A spreadsheet makes it accessible

As we note later in the article, we worked with an accessibility specialist
who uses a screen-reader. We chose to design the map in a spreadsheet. This
made it easy for our colleague to offer feedback.

![Example of accessibility use case map in a spreadsheet. Solutions are listed
along the x-axis: Receives email notification with link to check-in and Uses a
large-print poster with instructions to get the SMS link on how to check-in.
All nine disabilities are listed on the y-axis: blind, low vision, hard of
hearing, deaf, cognitive disabilities, post-traumatic stress disorder, motor
disabilities, military sexual trauma. Each solution is assessed for degree of
impact, which we discuss later.](https://cdn-
images-1.medium.com/max/1024/1*xmkO7Ni9XiAQx7kzofTTVw.png) _Figure 3: Example
of accessibility use case map. Solutions are indicated on the x-axis. All nine
disabilities are listed on the y-axis. Each solution is assessed for degree of
impact: impactful, helpful, it depends, not relevant, and inaccessible. This
criteria is discussed later in this article._

> We wanted our map to help prioritize solutions that maximized benefits for
> Veterans living with a variety of disabilities, while minimizing the chances
> of introducing barriers.

Here's how we created the accessibility use case map.

### Step 1: Developed proto-personas for each type of disability

We chose nine of the most common types of disabilities reported by Veterans:

  * Blindness
  * Low vision
  * Hard of hearing/deafness
  * Cognitive disability
  * PTSD
  * Motor disabilities
  * Military Sexual Trauma (MST)
  * Deafblindness

Time and resources were limited. So we used secondary sources and "best
estimates" to develop light-weight personas of each disability type ( [proto-
personas](https://www.nngroup.com/articles/persona-
types/#:~:text=Proto%20personas%20are%20a%20lightweight,are%20and%20what%20they%20want.)).
Each described the behavior, symptoms, needs, and tools used to manage the
condition. This allows for quicker, iterative research.

![A proto-persona example: Olivia, who lives with low vision for several
years. She is in her early 40s. She lives in a rural area and spends time
planning. She relies on screen readers, magnifier, voice apps, and large
prints. She is concerned about keeping her costs low, so she prefers to attend
all of her appointments in one day. Examples of Olivia's behaviors and needs
and challenges are provided in post-it notes, but are purposely not
legible.](https://cdn-
images-1.medium.com/max/799/1*GXQWKpmeWZWcyamh308OuA.png) _Figure 4: Example
of a proto-persona for a Veteran living with low-vision. We used secondary
research sources to validate our assumptions on behaviors, needs and
challenges. Details of the post-it notes are intentionally not-visible, and
are shown for example purposes only._

### Step 2: Created user journey maps to identify pain points and possible
solutions

Based on the proto-personas, we created user journey maps across the medical
appointment experience:

  * Before checking into an appointment
  * During the appointment, and;
  * After the appointment

We proposed solutions to help address pain points across the journey for each
type of disability.

![Example of user journey map for a Veteran with a low-vision disability. The
X axis lists user behaviors: actions, thoughts, pain points, touchpoints,
feelings, opportunities. The Y axis lists phases of the check-in experience:
before visit, before arrival, check-in on day of appointment, during the
appointment, the following appointment, after visit. Purple, green and blue
post-it notes appear along the map. The text is intentionally not visible as
this is for example purposes only.](https://cdn-
images-1.medium.com/max/1024/1*q1pVA7nHUfRTp1gd5oTWlA.png) _Figure 5: Example
of user journey map for a Veteran living with low vision and may need
caregiver support to prepare for the medical appointment. Details of the post-
it notes are intentionally not-visible, and are shown for example purposes
only._

### Step 3: Mapped each solution across multiple disability types, creating
our accessibility use case map

But what might benefit someone with one type of disability, might be a barrier
for others. For instance, text-to-speech software is helpful for a blind
Veteran trying to access their appointments. But it may be inaccessible to a
Veteran who is hard of hearing.

Due to this challenge, we decided to map each proposed solution across the 9
most common disabilities affecting Veterans.

We listed recommendations along the x-axis. We then listed the nine
disabilities along the y-axis.

For each type of disability, we assessed if the solution was:

  * Impactful (positive and we believe will enhance the experience for this disability)
  * Helpful (positive and it's not specific to this disability)
  * It Depends (it may depend on the degree or type of disability, or the recommendation is too complex for us to weigh in at this point)
  * Not Relevant
  * Inaccessible (it's a barrier for a person with this disability)

### Step 4: Iterated with various accessibility experts

Time constraints didn't allow us to validate with users (which would've been
ideal). Instead, we iterated on our map with various accessibility
specialists:

  * Josh Kim (Accessibility Designer)
  * Martha Wilkes ( Accessibility Strategist at the VA Office of the Chief Technology Office)
  * Melissa Manak (Senior User Experience Mobile Designer)
  * Angela Fowler (Senior A11Y Specialist and Designer)
  * Vanessa Luxen (an IAAP certified professional and former Audiologist at CivicActions)

Some of the experts we consulted also lived with a disability. This helped
ensure we were including the lived experiences of the very people we were
designing for.

### Step 5: Developed an "Accessibility Impact Score" for each recommendation.

Working with our accessibility experts, we assigned a value depending on how
helpful or unhelpful the solution was for each type of disability. We called
this our "Accessibility Impact Score."

  * 3 for Impactful (positive and we believe will enhance the experience for this disability)
  * 2 for Helpful (positive and it is not specific to this disability)
  * 1 for It Depends (it may depend on the degree of type of disability, or the recommendation is too complex for us to weigh in at this point)
  * 0 for Not Relevant
  * -2 for Inaccessible (it is a barrier for a person with this disability)

We then tallied the number of scores for each solution to calculate the final
"Accessibility Impact Score."

This helped us assign a numerical value to evaluate the impact each
recommendation would have across multiple disabilities. For instance,
improvements like "sending an SMS notification with a link to pre-check-in"
was one of our highest impact solutions. This meant it was impactful for the
greatest number of disabilities.

### Step 6: Prioritized recommendations based on the Accessibility Impact
Score

Using a prioritization matrix, we prioritized each recommendation based on its
total Accessibility Impact Score.

We refined it further with our product team based on scope and feasibility, so
we could eventually choose the recommendations we wanted on our roadmap.

### We took some risks and made many assumptions

There are many caveats with our framework, for instance:

  * It favors specific solutions that are impactful for a few disabilities and may end up with a lower score vs. general solutions that help a variety of disabilities.
  * We did not capture the complexity within each disability type. For example, cognitive disabilities can include a range of disabilities that vary in severity, symptoms and more. We recognize disabilities are not a monolith and the experiences are complex and varied.
  * It doesn't take user preferences or familiarity with the technology into account
  * It's not intersectional — it doesn't consider people who live with more than one disability
  * We didn't test it with users living with disabilities.

#### Ideally, disabled Veterans would be part of our process

> This is our first attempt at designing for disabled Veterans when resources
> are limited, time-frames are tight, and priorities conflict.

What would we have done differently without those constraints? We would have
included disabled Veterans throughout all six steps of the process. This way
we'd design _with_ (not _for_ ) the disabled Veteran community.

### What's next?

This framework is dynamic. We plan to continue to iterate as we address our
many assumptions. We hope to start conducting user research sessions with
Veterans living with disabilities to validate (and invalidate) our proposed
improvements.

 _Authors: Nira Datta, Senior Content Designer at CivicActions; Ya-ching Tsao,
Product Designer at CivicActions_

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=8a1dff130b37)

* * *

[Helping disabled Veterans Check-In: Designing an Accessibility
Map](https://medium.com/civicactions/helping-disabled-veterans-check-in-
designing-an-accessibility-map-8a1dff130b37) was originally published in
[CivicActions](https://medium.com/civicactions) on Medium, where people are
continuing the conversation by highlighting and responding to this story.

