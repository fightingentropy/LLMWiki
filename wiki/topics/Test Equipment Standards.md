---
title: Test Equipment Standards
type: topic
domain: electrics
summary: "BS EN 61010 for instrument safety, BS EN 61557 for accuracy and GS38 for leads and probes, with CAT ratings, accuracy checks and records."
tags: [electrics, regulations]
related: ["Safe Isolation", "Continuity Testing", "In-Service Testing", "Electrical Safety", "BS 7671 and GN3"]
aliases: ["BS EN 61010", "BS EN 61557", "GS38"]
sources:
  - clippings/evidence-review-2026-09-22/Electrics.md
  - clippings/evidence-review-2026-10-16/Electrics.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
reviewed: '2026-10-16'
review_status: partial
review_notes: "Scopes, part titles, CAT definitions and lead requirements were checked against HSE GS38, INDG354 and IEC webstore abstracts; GN3 Table 1.1 and the calibration routine were not."
source_gaps:
  - "raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md"
  - "raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md"
---

# Test Equipment Standards

A test instrument must be safe to hold against a live circuit, and its reading must be trustworthy. BS EN 61010 covers the instrument's safety, BS EN 61557 its accuracy, and HSE's GS38 the leads and probes in your hand. A multifunction tester (MFT) needs all three.

## BS EN 61010: safety

"Safety requirements for electrical equipment for measurement, control, and laboratory use": shock and fire protection, insulation clearances, input protection and fusing, markings, and the measurement category. Parts: [61010-1](https://webstore.iec.ch/en/publication/59769) general; [61010-2-030](https://webstore.iec.ch/publication/75915) testing and measuring circuits, where categories sit; [61010-031](https://webstore.iec.ch/publication/70272) hand-held probe assemblies; [61010-2-033](https://knowledge.bsigroup.com/products/safety-requirements-for-electrical-equipment-for-measurement-control-and-laboratory-use-part-2-033-particular-requirements-for-hand-held-multimeters-and-other-meters-for-domestic-and-professional-use-capable-of-measuring-mains-voltage) hand-held multimeters, excluding clamp meters and 61557 equipment. Instruments show the category and voltage at each input, plus CE or UKCA and the maker's mark.

|CAT|Where (GS38, citing BS EN 61010)|
|---|---|
|IV|Source of the installation: meters, primary overcurrent devices|
|III|Building installation: distribution boards, fixed wiring, sockets, fixed equipment|
|II|Circuits directly connected to the installation: appliances, portable tools|

- A category always comes with a voltage (CAT III 600 V, CAT IV 1000 V). A CAT III 300 V meter is wrong for a 400 V three-phase board.
- CAT II kit on a CAT IV circuit is a hazard; CAT IV kit on a CAT II circuit is safe overkill.
- The course's GN3 lists categories in Table 1.1.

Correction, 16 October 2026: CAT II was described as "circuits within the building"; GS38 defines it as circuits directly connected to the installation, and the 10 m and 20 m distances come from [Fluke](https://www.fluke.com/en-gb/learn/blog/safety/multimeter-guide), not GS38.

Correction, 16 October 2026: IEC 61010-2-030 has no CAT I since 2010; non-mains inputs are marked "O", per [HBM](https://www.hbm.com/fileadmin/mediapool/files/GN610_GN611_Isolation_and_type_testing.pdf). The series also covers leads, through 61010-031.

## BS EN 61557: accuracy

"Equipment for testing, measuring or monitoring of protective measures" in systems up to 1000 V AC and 1500 V DC. It sets each instrument's operating range, permitted uncertainty and tolerance to temperature, battery and supply changes. BS 7671 pass or fail decisions are only defensible with instruments that meet it.

|Part|Covers|
|---|---|
|[1](https://webstore.iec.ch/en/publication/102414)|General requirements|
|2|Insulation resistance|
|[3](https://webstore.iec.ch/publication/60893)|Loop impedance|
|4|Earth and bonding resistance (continuity)|
|5|Earth electrode resistance|
|[6](https://webstore.iec.ch/publication/60896)|RCD testers|
|7|Phase sequence|
|8, 9|Insulation monitoring and fault location, IT systems|
|[10](https://www.boutique.afnor.org/en-gb/standard/iec-61557102024/electrical-safety-in-low-voltage-distribution-systems-up-to-1-000-v-ac-and-/xs300790/431080)|Multifunction testers (2024 edition)|
|[11](https://webstore.iec.ch/en/publication/62125)|Testers for installed residual current monitors|
|[12](https://webstore.iec.ch/en/publication/30065)|Power metering and monitoring devices|
|[13](https://webstore.iec.ch/en/publication/69004)|Clamps and sensors for leakage current|
|[14](https://webstore.iec.ch/en/publication/68893)|Machinery safety testers (IEC 60204-1)|
|[15](https://webstore.iec.ch/en/publication/5574)|Functional safety of IT-system insulation monitors|
|[16](https://webstore.iec.ch/en/publication/69005)|Testers for electrical and medical equipment (IEC 62353)|
|[17](https://webstore.iec.ch/en/publication/64462)|Non-contact voltage indicators; not for proving dead|

Correction, 16 October 2026: Part 12 is power metering and monitoring, not performance measuring (2018 with Amendment 1:2021), and Part 1 excludes functional safety and cybersecurity.

## GS38: leads and probes

HSE guidance (fourth edition, 2015) under the Electricity at Work Regulations; [free PDF](https://www.hse.gov.uk/pubns/priced/gs38.pdf).

- **Probes:** finger guards; at most 4 mm exposed tip, ideally 2 mm or less or retractable screened tips (para 9).
- **Leads:** well insulated, flexible, securely terminated, not too long; fused or current-limited where the design needs it. Replace damaged leads; never tape them.
- **Connectors:** shrouded or firmly attached; test sockets shrouded to suit the category.
- **Conformity:** probes, clips and leads to BS EN 61010-031 (or BS EN 61243-3 for two-pole detectors), marked with CAT rating and maker.
- **Maintenance:** by a competent person, with inspection records, especially of faults. Users should know the common defects; clamp meters are examined before use.
- **Hazard threshold:** roughly 50 V ac or 120 V ripple-free dc in dry conditions, lower in wet, confined or conductive places ([INDG354](https://www.hse.gov.uk/pubns/indg354.pdf)).

Correction, 16 October 2026: GS38 gives no 19 mm tip figure (the pre-2011 IEC allowance, per [Hioki](https://www.hioki.com/in-en/support/faq/detail/id_127)), names no 4 mm plug size, and defines no "GS38 compliant" marking.

Correction, 16 October 2026: GS38 sets no before-every-use lead check, leaving that to written safe systems of work, and no record-retention period.

## Test voltages, accuracy checks and records

- Insulation resistance at 500 V DC can damage RCDs, LED lighting, IT equipment, electronic controls and thermostats. Know what is connected first.
- Calibration shows the meter was accurate on its calibration date only. In between, check it against a known reference (check box, 0 Ω link, known resistor, mains voltage) before high-risk work, monthly or quarterly, and after any knock.
- Record each check (date, test point, expected and actual values, tester), calibrations and repairs. The records make results defensible. PAT uses Form V.6 ([[In-Service Testing]]).
- Older references: HSE's HSG85 and HSR25, and the withdrawn BS 5458 for older instruments.
