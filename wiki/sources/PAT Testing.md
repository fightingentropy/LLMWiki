---
title: PAT Testing
type: source
domain: electrics
sources: []
related:
  - Electrical Safety
  - In-Service Testing
  - Continuity Testing
  - Inspection and Testing Fundamentals
  - Test Equipment Standards
  - GS38
  - BS EN 61010
  - BS EN 61557
  - RCD Protection
  - Safe Isolation
  - Ohm's Law and Electrical Calculations
  - Electrical Study Map
  - Electrical Evidence Review - September 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - pat
  - in-service-testing
  - portable-appliances
  - inspection
  - testing
  - safety
  - equipment-failure
  - v-forms
  - exam-prep
summary: "Notes from Access Training's PAT webinar: visual inspection and plug fails, the four tests and their pass limits, test kit, V1-V6 forms and exam tips."
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT
    Testing.md
review_status: unverified
review_notes: "Summary of a webinar whose original transcript is missing; its test limits, procedures, appendix, chapter and exam references have not been checked against current material."
---

# PAT Testing

Notes from Electrics Webinar 4, "PAT Testing", by Access Training. The session covers in-service inspection and testing of electrical equipment: what to inspect, the four tests and their pass limits, test equipment, the IET model forms, the business case, and how to revise for the exam. The wider subject lives in [[In-Service Testing]]; the installation-side equivalent is [[Inspection and Testing Fundamentals]].

The original transcript is missing, so treat the limits and references below as study notes and confirm them against the current code of practice before relying on them.

## What PAT testing is

"PAT testing" literally reads as "portable appliance testing testing". The phrasing is redundant, but it is the common industry term for in-service inspection and testing of electrical equipment.

The session sets out three aims:

- Competent inspection and testing, not repair.
- Safe working with equipment that is in use.
- Using the forms and tables properly, for real work and for the exam.

### Three levels of in-service check

1. **User check**: done by unskilled users.
2. **Formal visual inspection**: done by a responsible competent person.
3. **Combined inspection and test**: done by a competent person; a full formal visual inspection plus testing.

## Formal visual inspection

Visual inspection comes first and is the most important part of the job. Check, before any testing:

- Equipment function and operation.
- Environment and housekeeping: is the equipment suitable for where and how it is used?
- Condition of the flex or cable.
- Condition of the plug.
- Condition of the socket outlet the equipment uses.
- Visible damage to the appliance: burning, cracks, damage to the casing or body.

**Critical point**: equipment can be unsafe because of its environment, even when the equipment itself looks in good condition.

### Plug checks and common fail conditions

Plugs are a common weak point and a frequent source of failure. Fail a plug for:

- Physical damage or cracks.
- Signs of burning, outside or inside.
- Flex sheathing not entering the plug properly, so the coloured insulation shows.
- A loose fuse in its holder.
- The wrong fuse arrangement: foil or a screw instead of a proper BS 1362 fuse.
- Loose strands of copper.
- A missing earth on Class 1 equipment.
- Damaged flex, taped flex or poor repairs.
- Two cables in one plug.
- The wrong cable type in the plug, such as twin and earth instead of flex.
- Excessive visible copper where it presents a danger.
- A plug cover that is insecure, or damaged screws that stop you verifying the inside.
- A cardboard insert left on the plug (fire risk).

Other plug points:

- Pre-1984 plugs with unsleeved line and neutral pins do not automatically fail, but replacement may be recommended.
- If you replace a plug because it is unfit, dispose of the old one; do not keep it for reuse.
- Non-rewirable Class 2 plugs may have a plastic earth pin, which only opens the socket shutters.
- Rewirable plugs should have a solid metal earth pin.
- Non-compliant or fake plugs may show the wrong sleeving, such as a sleeved earth pin.

### Fuse sizing

The webinar flags this as an important correction to older teaching: the rule of thumb that sizes the plug fuse from the appliance's wattage is outdated. The plug fuse is now sized to the flex, not the appliance wattage, because the fuse gives overcurrent protection to the cable, so the cable's rating is what matters.

## Inspect, test and report: not repair

This is one of the strongest themes of the session. The inspector or tester is there to inspect, test and report, not to repair. Unless repair is explicitly part of your job or arrangement, do not fix what you find:

- Don't tape repairs.
- Don't fix loose screws.
- Don't replace damaged parts.

Mark a failed item with a red label and report it. The equipment still belongs to the customer, and the customer may choose to ignore the fail label. Your responsibility is to inspect, test and report correctly.

## Working on equipment in service

"In service" means the equipment is in use, and some checks, such as functional checks, need it energised. You cannot, for example, verify a fan's speed controls without powering the fan.

Live working is permitted only when it is unreasonable for the equipment to be dead, reasonable for it to be live, and suitable precautions are taken. See [[Electrical Safety]] and [[Safe Isolation]] for the wider rules.

## The four tests

1. Protective conductor continuity test.
2. Insulation resistance test.
3. Protective conductor current or touch current test (an alternative in some cases).
4. Functional test, sometimes with load testing.

| Test | Applies to | Pass criterion |
| --- | --- | --- |
| Protective conductor continuity | Class 1 only | 0.1 Ω + R (older equipment up to 0.5 Ω + R, by judgement) |
| Insulation resistance at 500 V DC | Class 1 and Class 2 | Class 1 at least 1 MΩ; Class 2 at least 2 MΩ |
| Protective conductor / touch current | Voltage-sensitive equipment, instead of insulation resistance | Measures leakage to earth |
| Functional (and load) | All equipment | The equipment works as intended |

### Test 1: protective conductor continuity (Class 1 only)

The test proves continuity from the plug's earth pin, or the supply earth conductor, to the exposed conductive parts. It applies only to Class 1 equipment, since Class 2 has no protective conductor. A simple continuity beeper is not enough; you must measure the actual resistance. More on the method in [[Continuity Testing]].

**Pass criterion**: maximum **0.1 Ω + R**, where **R** is the resistance of the protective conductor in the supply flex.

To calculate R, use the Appendix 5 table of milliohms per metre by conductor size:

```
R = (milliohms per metre × length in metres) / 1000 = ohms
```

**Example**: 0.75 mm² flex, 1 m long.

- 26 mΩ/m, so R = 0.026 Ω.
- Maximum result = 0.1 + 0.026 = 0.126 Ω.

**Older equipment** may be allowed up to **0.5 Ω + R**. This rests on engineering judgement, and the instructor still stresses practical safety and sensible decisions about failing an item.

### Test 2: insulation resistance (Class 1 and Class 2)

The test proves the insulation is intact, so conductors are not unintentionally touching each other or earth. The instructor's analogy: it is like inflating an inner tube to reveal the punctures.

- **Test voltage**: 500 V DC.
- **Set-up**: line and neutral joined together and tested to earth.
- **Power switches**: on.
- **Covers**: in place.
- **Compatibility**: make sure the equipment can take the applied test voltage.

Minimum acceptable results:

- **Class 1**: 1 MΩ.
- **Class 2**: 2 MΩ.

### Test 3: touch current or protective conductor current

This is the alternative to insulation resistance testing for voltage-sensitive equipment, such as computing and electronic equipment, where a 500 V insulation test can be too aggressive. It measures leakage to earth with suitable test equipment.

### Test 4: functional test and load testing

- The final test, confirming the equipment actually works.
- Verify switches, controls, thermostats and similar.
- **Load testing** is a specialist test, for example on heating or food-warming equipment, to verify the correct load and performance.

### RCD checks

If the equipment is plugged into an RCD socket outlet with a test button, check the RCD's function as well. See [[RCD Protection]].

## Test equipment

### Standards

Test equipment should meet standards for safety and accuracy (see [[Test Equipment Standards]]):

- **61010** ([[BS EN 61010]]): safety of the equipment.
- **61557** ([[BS EN 61557]]): accuracy of the equipment.
- **GS38** ([[GS38]]): HSE guidance on the safe use and condition of leads and probes, with special focus on the leads and probes the tester handles at potentially live points.

### Calibration versus regular accuracy checks

The key practical and legal point: annual calibration alone does not prove ongoing accuracy. Calibration only proves the meter was accurate on the day it was calibrated.

Best practice:

- Run regular accuracy checks, for example with a calibration card.
- Record them systematically.
- Keep the records: they make your results defensible if they are questioned later.

### Types of PAT tester

- **Basic testers**: simple pass/fail, lower cost.
- **Mid-range testers**: more tests, actual values displayed, more features.
- **High-end or industrial testers**: memory, printing, result storage and more automation.

Cost-benefit:

- A normal installation test meter can carry out the PAT-related tests.
- PAT adapters convert standard meters for PAT use.
- A dedicated PAT tester is worth it if you do PAT work often, because it saves time.

## The commercial case

- The price per item for PAT has fallen compared with earlier years.
- It is still profitable when priced as a day rate and run efficiently.
- It is a useful add-on skill with low overheads.
- It has strong value for employability.

## Documentation: the IET model forms

The instructor stresses memorising the V-forms; the current (fifth edition) book is not much help on how they are named and can be confusing or inconsistent about them.

| Form | Name | What it records |
| --- | --- | --- |
| V1 | Equipment register / asset register | Equipment list, locations, IDs and planned inspection and test intervals |
| V2 | Inspection and test record | Details and results for each item, including visual checks and test results |
| V3 | Labels | Example pass and fail labels |
| V4 | Repair register | Repairs |
| V5 | Faulty equipment register | Faulty equipment |
| V6 | Test equipment accuracy record | The regular accuracy checks on your meter; critical to keep |

**Exam tip**: make a Post-it note mapping V1 to V6 to their functions.

### Labels carry no "next inspection" date

The example labels do not show a next inspection date. Equipment can move to a different environment, which changes the risk assessment and so the inspection frequency, so a fixed future date on a label can mislead. This fits HSE's position that there is no blanket annual PAT requirement and that intervals depend on risk (from [[Electrical Evidence Review - September 2026]]).

## Revision

The instructor singles out these appendices of the book for exam preparation:

- **Appendix 2**: IP ratings table. Strongly recommended; likely to feature in inspection and testing questions.
- **Appendix 5**: resistance values of flexible cables, used for continuity calculations.
- **Appendix 6**: condition of plugs and equipment, a visual inspection reference.
- **Appendix 7**: IT equipment racks, for specific questions.
- **Appendix 8**: basic electrical calculations and supporting concepts (see [[Ohm's Law and Electrical Calculations]]).

How to revise:

- Put Post-it notes and quick-reference aids in the book, where the exam rules permit.
- Review the key tables and appendices repeatedly to improve recall.
- Watch the PAT testing demonstration video on the course portal (about 1 hour 3 minutes) to see the tests and documentation done in practice.
- If you have already passed the PAT exam, you do not need to retake it just because the fifth edition book has come out.

The [[Electrical Study Map]] places this material alongside the rest of the electrical study pages.

## Key takeaways

- PAT, or in-service inspection and testing, is mostly competent visual inspection, correct testing and accurate reporting.
- Do not repair during inspection and testing unless that is explicitly part of your role.
- Class 1 and Class 2 equipment follow different test paths; the continuity test is Class 1 only.
- Know the pass limits: **0.1 + R** for protective conductor continuity; insulation resistance of at least 1 MΩ for Class 1 and 2 MΩ for Class 2.
- Fuse size follows flex size, not appliance wattage.
- The safety of leads and probes (GS38) and regular meter accuracy checks matter as much as knowing the test steps.
- Learn the V1 to V6 forms and what each does; the book alone does not support this well, and it is exam-critical.
- PAT remains a useful, employable skill and can be commercially viable.

## Source gap

The original webinar transcript is missing. The test limits, procedures, appendix, chapter and exam references above have not been authenticated against current material; [[Electrical Evidence Review - September 2026]] records the gap.

## Related

[[In-Service Testing]] · [[Inspection and Testing Fundamentals]] · [[Electrical Safety]] · [[Continuity Testing]] · [[Test Equipment Standards]] · [[GS38]] · [[BS EN 61010]] · [[BS EN 61557]] · [[RCD Protection]] · [[Safe Isolation]] · [[Ohm's Law and Electrical Calculations]] · [[Electrical Study Map]] · [[Electrical Evidence Review - September 2026]]
