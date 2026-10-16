---
title: Inspection and Testing Fundamentals
type: source
domain: electrics
sources:
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - Safe Isolation
  - Continuity Testing
  - Building Regulations
  - PAT Testing
  - EIC and MEIWC
  - GN3 Guidance Note 3
  - BS 7671
  - EICR
  - Part P
  - GS38
  - BS EN 61010
  - Test Equipment Standards
  - RCD Protection
  - Ohm's Law and Electrical Calculations
  - Electrical Study Map
  - Electrical Evidence Review - September 2026
  - Electrical Evidence Review - October 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - inspection
  - testing
  - fundamentals
  - dead-tests
  - documentation
  - safe-isolation
  - continuity
  - initial-verification
  - certification
summary: "Webinar notes on initial verification: certificates, the order of tests, safe isolation step by step and continuity calculations with GN3 Table B1."
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection
    and Testing Demonstration.md
reviewed: '2026-10-16'
review_status: partial
review_notes: "Document status, certificate scope and signatories, supply details, safe isolation steps, the test order, Appendix A's 80% rule, conductor figures and notification routes were checked against the A4 model forms, IET Wiring Matters, HSE HSG85 and HSR25, Approved Document P and City & Guilds; GN3 chapter, table and page references, course details and the lost transcript remain unchecked."
---

# Inspection and Testing Fundamentals

Notes from *Electrics Webinar 4 - Inspection and Testing Demonstration* by Access Training, the first inspection-and-testing fundamentals session on the Level 2/Level 3 qualification pathway. It sets out how the subject is taught across the later webinars and practical training, the documents and forms used for initial verification and condition reporting, the dead-testing sequence, a detailed safe isolation walkthrough and an introductory continuity lesson. The instructor's theme throughout: learn inspection and testing as a practical, technical discipline, not just to pass the exam.

The original transcript is missing, so treat the limits, page numbers and procedures here as study notes and check them against current [[GN3 Guidance Note 3]], [[BS 7671]] and your training.

## Competence and how to learn the subject

### Understanding over exam success

- Learn inspection and testing as a practical, technical subject, not just an exam exercise.
- Use several resources: [[GN3 Guidance Note 3]] for the exam, [[BS 7671]] for the requirements, the On-Site Guide, and the training portal's demos.
- Better technical understanding improves both exam performance and real-world safety.
- "Every day is a school day."

### Dangerous if done incorrectly

- Qualifications alone are not the whole picture; practical skill and understanding are required.
- Real competence means understanding:
  - the installation itself
  - the equipment connected to it
  - the instruments being used
  - the requirements of BS 7671 and other relevant standards
- Do not be embarrassed about not knowing something.

## Statutory and non-statutory documents

| Status | Documents |
|---|---|
| Statutory | Health and Safety at Work Act; Management of Health and Safety at Work Regulations; Electricity at Work Regulations; PUWER; Building Regulations |
| Non-statutory guidance | Approved Documents (Part P, Part M, Part A, Part L); [[BS 7671]]; [[GN3 Guidance Note 3]]; On-Site Guide |

Approved Documents are guidance; they are not themselves statutory law. More in [[Building Regulations]] and [[Part P]].

## GN3: structure and how to use it

### Chapters

- **Chapter 1**: general requirements, safety and competence; relevant to all exams.
- **Chapter 2**: initial verification.
- **Chapter 3**: periodic inspection and testing.
- **Chapter 4**: test instruments; important and often underused.
- **Chapter 5**: model forms; a major exam and practical resource.

### Appendices

- **Appendix A**: maximum permissible measured earth fault loop impedance values (maximum measured = 80% of tabulated values).
- **Appendix B**: resistance calculations and conductor values, used for continuity calculations.
- **Appendices C and D**: more linked to periodic inspection and testing.

### Tables

- **Table B1**: conductor resistance values (milliohms per metre) for continuity calculations.
- **Table 1.1**: category ratings (CAT II, CAT III, CAT IV) for test equipment.

## Test equipment standards and safety

- **[[GS38]]**: HSE guidance on test leads and probes; critical for safety.
- **HSG85**: general guidance.
- **HSR25**: guidance on regulations.
- **[[BS EN 61010]]**: safety requirements for test instruments.
- **BS 5458**: older, withdrawn standard relevant to older instruments.

Some dead tests apply significant voltage, insulation resistance testing for example. More on instruments in [[Test Equipment Standards]].

## Certificates and reports

### Who the client is

The client is the person ordering the work and receiving the certificate or report.

### Initial verification and condition reporting

- **Initial verification**: certifies that new work, or work treated as new, is safe and complies with BS 7671.
- **Condition reporting ([[EICR]])**: reports on existing installations in use; the webinar likens it to an MOT.

### Electrical Installation Certificate (EIC)

Used for new work: consumer unit replacement, new circuits, rewires and partial rewires, and any new circuit leaving the distribution board or consumer unit.

Structure:

- Front page: installation details and scope.
- Second page: supply characteristics, earthing, bonding, signatory details, inspection schedule.
- Schedule of circuit details.
- Schedule of test results.

The three EIC signatories, from the Chapter 5 model forms:

1. Designer
2. Constructor/installer
3. Inspector (inspection and testing)

The client is not one of the EIC signatories.

### Minor Electrical Installation Works Certificate (MEIWC)

Used for additions and alterations to existing circuits, not new circuits:

- adding sockets to an existing circuit
- adding lighting points to an existing circuit
- relocating a switch
- replacing accessories or luminaires (not always mandatory for like-for-like replacement unless the contract requires it)

An MEIWC covers work on one circuit only; it must not cover multiple circuits. More in [[EIC and MEIWC]].

### "Don't add to bad" (Regulation 132.16)

- Additions and alterations must not be made to an installation unless the existing part is adequate and safe.
- Teaching phrase: "We add to good, we don't add to bad."
- Example: a lighting circuit with no CPC cannot have a Class 1 luminaire fitted without first addressing the missing CPC.
- Options if a defect is found: reinstall a Class 2 fitting, advise the client, or rewire the circuit (the work then moves to an EIC).

### Signing certificates

With the relevant qualifications and genuine competence and experience, a person can sign:

- an EIC
- an MEIWC
- an EICR

Strong advice from the webinar: always have appropriate insurance, including for work done for family and friends.

### Notifiable domestic work and Competent Person Schemes

- Certain domestic work is notifiable, consumer unit changes for example.
- Qualifications allow you to issue electrical documentation, but not to self-notify unless you are registered with a Competent Person Scheme (CPS).
- Options:
  - join a CPS (NICEIC, NAPIT) and self-notify
  - use third-party notification with appropriate inspection
  - notify the Local Building Authority directly

Notification rules are not uniform across the UK; see [[Part P]] and [[Electrical Evidence Review - September 2026]].

## Before testing

### Supply information for initial verification

Before starting testing, obtain:

- maximum demand (the work must not overload the installation)
- number and type of live conductors (single-phase two-wire, three-phase four-wire, etc.)
- earthing arrangement (TN-C-S, TN-S, TT)
- nominal voltage (the U / Uo concept)
- nature of current and frequency (50 Hz)
- prospective short-circuit current at the origin
- external earth fault loop impedance
- type and rating of the overcurrent device at the origin (typically the DNO fuse)

Safety: do not withdraw the DNO fuse; you are not authorised to.

Correction, 16 October 2026: whether an electrician may withdraw the cut-out fuse depends on the DNO. Some DNOs, such as SSEN, let electricians who belong to trade associations withdraw and reinstate it; others do not, and the IET advises checking the DNO's procedure or using a Safe Isolation Provider ([IET Wiring Matters — Removing the distributor's cut-out fuse](https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/removing-the-distributors-cut-out-fuse/)).

### What testing might damage

Know what is connected and what might be damaged by test voltages, especially insulation resistance testing:

- RCDs
- LED lighting
- IT and computer equipment
- sensitive electronic equipment

The broader point: understand the installation before applying test voltages.

## Inspection comes first

Inspection genuinely comes before testing, not just in the phrase "inspection and testing". Many installation issues, especially in condition reporting, are found by looking rather than from test results.

Checklists to use:

- **BS 7671** example checklist: Appendix 6, page 515.
- **GN3** inspection checklist: page 46.

The high-level schedule items take real knowledge to understand:

- **Basic protection**: insulation of live parts, barriers or enclosures, obstacles, placing out of reach.
- **Additional protection**: RCD ≤ 30 mA and/or supplementary bonding, depending on context. See [[RCD Protection]].

## Order of tests

Tests for initial verification must be carried out in the correct order.

**Dead tests**, before the supply is connected:

1. Continuity
2. Insulation resistance
3. Polarity (by the continuity method and visual checks)

**Live tests**, after the supply is connected:

1. Supply polarity
2. Earth fault loop impedance
3. Prospective fault current
4. RCD testing

References: GN3 (sequence of tests); On-Site Guide ("before supply connected" and "after supply connected" lists).

### Testing during construction

Practical workflow for a refurb or extension:

- After first fix and cable installation, carry out dead testing before leaving site and record the results.
- At second fix, re-test and compare with the earlier readings.
- Why: the site may be damaged after first fix (screws, nails, cables damaged by other trades).
- Benefit: the earlier readings are evidence and protect the electrician if damage happens later.

## Safe isolation

Really important, and critical for the exam and the practical. The procedure is not clearly highlighted in GN3. References:

- Electrician's Guide to the Building Regulations, Chapter 7 (7.5)
- Best Practice Guide 2 (in the course materials)

The full topic is on [[Safe Isolation]].

### Procedure

1. Identify what is to be isolated (a circuit or the whole installation).
2. Inform and agree with the client or occupants before turning the power off.
3. Use an approved voltage indicator (AVI) compliant with GS38.
4. Prove the voltage indicator works (proving unit or known live source).
5. Isolate at the best point (prefer an external isolator for whole-DB isolation).
6. Lock off the isolator or main switch.
7. Remove fuses if necessary.
8. Retain the key personally.
9. Apply a warning label or sign.
10. Prove dead on the correct side (load side), in a consistent sequence.
11. Re-prove the voltage indicator.
12. Replace covers before leaving (incoming tails may still be live).

### Practical notes

- The main switch is an on-load switch; turning the outgoing circuits off first is better practice.
- Incoming tails stay live unless isolated upstream.
- Prove dead at the load side of the main switch.
- Use a consistent proving sequence: earth-to-line, earth-to-neutral, line-to-neutral.
- Start from the least dangerous point first (e.g. the MET).
- Prove dead at the point of work, not just at the DB.
- Use the correct lock-off device and fit it correctly; incorrect fitting is a common error.

## Continuity testing

Continuity is the first of the dead tests. The full topic is on [[Continuity Testing]].

### Purpose

Test the continuity of protective conductors, including main and supplementary bonding.

### Instrument

A low-resistance ohmmeter or the MFT continuity function, needed for low-value resistance readings. Reference: GN3 continuity section (page 56).

### Expected resistance from GN3 Table B1

```
R = (milliohms per meter × length in meters) / 1000
```

Worked examples:

- 10 mm² protective conductor, 15 m long: use 1.83 mΩ/m (the single-conductor value, not the combined one). Result: 0.027 Ω, rounded to about 0.03 Ω.
- A 50 m drum of 10 mm² green/yellow cable: expected total resistance around 0.09 Ω. Working these out builds a sense of what a realistic reading looks like.

### Reading Table B1

Common trap: misreading the "line conductor" and "protective conductor" columns.

- Think of them as "conductor one" and "conductor two" when using the values.
- For a single protective conductor, do not use the combined pair value by mistake.
- If the combined value is used, divide appropriately.

### Twin-and-earth CPC sizes

Asterisk (star) markings identify the CPC size in twin-and-earth cable:

| T&E size (mm²) | CPC size (mm²) |
|---|---|
| 1.0 | 1.0 |
| 1.5 | 1.0 |
| 2.5 | 1.5 |
| 4.0 | 1.5 |
| 6.0 | 2.5 |
| 10.0 | 4.0 |
| 16.0 | 6.0 |

### Lead resistance compensation

Critical for continuity tests: the reading includes the test lead resistance unless it is compensated. Two methods:

1. Measure the lead resistance separately and subtract it from the total reading.
2. Zero (null) the leads using the MFT function.

Example: total reading 1.51 Ω, lead resistance 1.50 Ω, so the true conductor resistance is 0.01 Ω.

### Parallel paths

When testing bonding conductors, disconnect them from the MET to eliminate parallel paths that could distort the readings.

Correction, 16 October 2026: the IET warns that removing an earthing or protective bonding conductor can put hazardous touch voltages on exposed- and extraneous-conductive-parts where an open PEN fault exists, and that diverted neutral current can come from neighbouring installations; it describes a clamp-meter check for current in the earthing and bonding conductors before and after isolating the installation ([IET Wiring Matters — Neutral current diversion (NCD) industry research update](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/neutral-current-diversion-ncd-industry-research-update/)).

## Training pathway and instructor advice

### Training structure

- Several theory exams come before booking practical training.
- Practical training: 10 days, as a weekday block or over weekends.
- The practical assessment is a real competence assessment, not an automatic pass for attending.
- Extra training days are worthwhile if needed, especially for confidence in testing.
- Level 2 fundamental inspection and testing exam: 60 minutes, open book, multiple choice (30 questions), using GN3 only.

This conflicts with at least one current format. The webinar does not name the awarding body, and City & Guilds' Level 2 Certificate in Fundamental Inspection, Testing and Initial Verification (2392-10) uses a closed-book online multiple-choice test of 50 questions in 100 minutes ([City & Guilds 2392-10 qualification handbook](https://www.cityandguilds.com/-/media/productdocuments/building_services_engineering/electrical_installation/2392/2392_level_2/centre_documents/2392-10-l2-qhb-fundamental-inspection-initial-testing-ventilation-v1,-d-,6-pdf.pdf)); confirm the format with your own awarding body.

### Advice

- Ask questions; do not be embarrassed about what you don't know.
- Practical skill and understanding matter more than qualifications alone.
- Getting into the industry: be honest with employers and keep pushing for the first opportunity.
- Plenty of testing resources are available: portal demos and masterclass clips, and Google Drive materials.

## Source gap

The webinar summary behind this page, `electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md`, cannot be found, and neither can the original transcript.

## Links

- [IET Wiring Matters — Removing the distributor's cut-out fuse](https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/removing-the-distributors-cut-out-fuse/) — IET article (July 2025) on who may withdraw the DNO cut-out fuse, DNO permission schemes and Safe Isolation Providers.
- [IET Wiring Matters — Neutral current diversion (NCD) industry research update](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/neutral-current-diversion-ncd-industry-research-update/) — IET survey article (May 2025) on diverted neutral current; warns about disconnecting earthing and bonding conductors and describes clamp-meter checks.
- [City & Guilds 2392-10 qualification handbook](https://www.cityandguilds.com/-/media/productdocuments/building_services_engineering/electrical_installation/2392/2392_level_2/centre_documents/2392-10-l2-qhb-fundamental-inspection-initial-testing-ventilation-v1,-d-,6-pdf.pdf) — Handbook (version 1.6, April 2026) for the Level 2 fundamental inspection and testing certificate; sets out the multiple-choice test and practical assessment.

## Related

[[Safe Isolation]] · [[Continuity Testing]] · [[EIC and MEIWC]] · [[EICR]] · [[Building Regulations]] · [[Part P]] · [[GN3 Guidance Note 3]] · [[BS 7671]] · [[GS38]] · [[BS EN 61010]] · [[Test Equipment Standards]] · [[RCD Protection]] · [[Ohm's Law and Electrical Calculations]] · [[PAT Testing]] · [[Electrical Study Map]] · [[Electrical Evidence Review - September 2026]] · [[Electrical Evidence Review - October 2026]]
