---
title: In-Service Testing
type: topic
domain: electrics
summary: "PAT in practice: three check levels, plug fail points, the four tests and pass limits, inspect-don't-repair, test kit and the IET V-forms."
tags: [electrics]
related: ["Electrical Safety", "Continuity Testing", "Test Equipment Standards", "Safe Isolation", "Electrical Study Map"]
aliases: ["PAT Testing"]
sources:
  - clippings/evidence-review-2026-09-22/Electrics.md
  - clippings/evidence-review-2026-10-16/Electrics.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
reviewed: '2026-10-16'
review_status: partial
review_notes: "Check levels, labels, Class I and II, live working and the V-forms were checked against HSE HSG107, INDG236 and the IET's published forms; the pass limits have only industry-guide support."
source_gaps:
  - "raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md"
---

# In-Service Testing

In-service inspection and testing, usually called PAT (portable appliance testing), is the routine checking of electrical equipment in use: competent visual inspection, correct testing and accurate reporting, stopping short of repair. The Access Training course's pass limits follow the IET Code of Practice for In-service Inspection and Testing (fifth edition, 2020, separate from GN3); confirm them in the edition you use.

HSE sets no fixed frequency: intervals depend on risk, use and environment ([HSE PAT FAQ](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm), [HSG107](https://www.hse.gov.uk/pubns/priced/hsg107.pdf)).

Correction, 22 September 2026: HSE does not require blanket annual PAT testing.

## Three levels of check

|Level|Who|What|
|---|---|---|
|User check|Any user|Look for obvious damage|
|Formal visual inspection|Competent person|Systematic examination, no instruments|
|Combined inspection and test|Competent person|Formal visual inspection plus tests|

## Formal visual inspection

Do it first; it finds most faults and keeps unsafe items from being tested. Check function, the environment (adequate equipment in the wrong place is unsafe), flex, plug, socket outlet and casing.

**Fail a plug for:** cracks or burning; coloured insulation showing where the sheath should enter; a loose fuse, or foil or a screw instead of a BS 1362 fuse; loose copper strands; a missing earth on Class 1; taped flex; two cables in one plug; twin-and-earth instead of flex; an insecure cover; a cardboard insert left in. Pre-1984 plugs with unsleeved pins are not an automatic fail. Non-rewirable Class 2 plugs may have a plastic earth pin that only opens the shutters. A sleeved earth pin suggests a fake plug.

**Fuse rating.** The course teaches that the fuse protects the flex, so it is sized to the flex, not the appliance wattage. This conflicts with [Greater Manchester Fire and Rescue Service](https://www.manchesterfire.gov.uk/your-safety/fire-safety/electrical/sockets), which sizes by wattage (3 A up to about 700 W, 13 A up to 3 kW); HSG107 asks only for the correct fuse.

## The four tests

|Test|Applies to|Pass|
|---|---|---|
|Protective conductor continuity|Class 1 only|≤ 0.1 Ω + R; older items up to 0.5 Ω + R by judgement|
|Insulation resistance at 500 V DC|Class 1 and 2|≥ 1 MΩ Class 1; ≥ 2 MΩ Class 2|
|Protective conductor or touch current|Voltage-sensitive items, instead of insulation resistance|Measures leakage|
|Functional, sometimes load|All|Works as intended|

- **Continuity:** earth pin to exposed metal, measured, not beeped. R comes from Appendix 5: 1 m of 0.75 mm² flex at 26 mΩ/m is 0.026 Ω, so the maximum is 0.126 Ω. See [[Continuity Testing]].
- **Insulation resistance:** line and neutral joined, switches on, covers in place. 500 V can damage computers and LED lighting, so use the leakage test for those.
- **Functional:** switches, controls, thermostats. Load testing is a specialist check on heating or cooking equipment.
- **RCD:** if the item plugs into an RCD socket, check the RCD with its test button.

Correction, 16 October 2026: Class II equipment has no earth (HSG107 para 14), so its insulation test goes to the enclosure's accessible conductive parts, as [Seaward](https://seaward.com/gb/support/download/770) describes.

## Inspect, test, report; do not repair

Do not tape flex, tighten screws or replace parts unless repair is part of the job. Fit a red fail label, record the failure, tell the customer why, and withdraw the item. The customer decides on repair, and may ignore the label.

## Live working

Some checks need power: you cannot check a fan's speed control with the fan dead. Work live only when it is unreasonable for the equipment to be dead, reasonable to work live, and suitable precautions are taken; otherwise follow [[Safe Isolation]].

## Test kit

Instruments should meet BS EN 61010 and BS EN 61557, with leads to GS38 ([[Test Equipment Standards]]). Calibration proves accuracy on the calibration day only, so check the meter regularly and record it on Form V.6. An installation tester with an adapter can do PAT; a dedicated tester saves time.

## IET model forms

|Form|Title|Records|
|---|---|---|
|V.1|Equipment register|Items, locations, IDs, intervals|
|V.2|Inspection and test record|Findings and results per item|
|V.3|Labels|Green PASS, red FAIL ("DANGER DO NOT USE")|
|V.4|Repair register|Repairs|
|V.5|Faulty equipment register|Failed items and status|
|V.6|Test instrument record|Check readings at 0.5, 1 and 10 Ω and MΩ, deviation %, last calibration|

Labels carry no next-test date (HSG107 para 54): items move, and the risk assessment sets the interval. A pass shows the item was safe when tested, not that it will stay safe.

Correction, 16 October 2026: V.3 has only green PASS and red FAIL labels, with no yellow "attention" label, and V.6 is the "Test instrument record", not a "test equipment accuracy record".

Correction, 16 October 2026: that last point comes from HSE's [INDG236](https://www.hse.gov.uk/pubns/indg236.pdf), not the PAT FAQ.

## Revision

Priority appendices: 2 (IP ratings), 5 (flex resistances), 6 (plugs and equipment), 7 (IT racks), 8 (calculations; see [[Ohm's Law and Electrical Calculations]]). Make a Post-it summary of V.1 to V.6; the fifth-edition book names them inconsistently.
