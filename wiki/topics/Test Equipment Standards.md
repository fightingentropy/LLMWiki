---
title: Test Equipment Standards
type: topic
domain: electrics
sources:
  - clippings/evidence-review-2026-09-22/Electrics.md
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - Electrical Safety
  - GS38
  - BS EN 61010
  - BS EN 61557
  - GN3 Guidance Note 3
  - Safe Isolation
  - In-Service Testing
  - PAT Testing
  - Inspection and Testing Fundamentals
  - Continuity Testing
  - Electrical Evidence Review - October 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - test-equipment
  - standards
  - safety
  - accuracy
  - calibration
  - gs38
  - cat-rating
  - mft
  - pat
summary: "Which standards test instruments and leads must meet (BS EN 61010, BS EN 61557, GS38), how to pick a CAT rating, and how to prove a meter stays accurate."
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection
    and Testing Demonstration.md
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT
    Testing.md
reviewed: '2026-10-16'
review_status: partial
review_notes: "Standard scopes, CAT definitions, lead and probe requirements, the ELV threshold and the other cited references were checked against HSE GS38, INDG354, HSG85 and HSR25, IEC webstore abstracts for IEC 61010 and 61557, the IET edition listing and a standards-shop status record for BS 5458; the 500 V in-service test voltage, GN3 Table 1.1, Form V6 and the calibration routine need paid IET texts and remain unchecked."
---

# Test Equipment Standards

Any instrument used to verify a fixed installation or test an appliance has to answer two questions: is it safe to hold against a live circuit, and can its reading be trusted? Three documents cover that. [[BS EN 61010]] sets the safety of the instrument itself, [[BS EN 61557]] sets its accuracy, and [[GS38]] is the HSE guidance on the leads and probes in the tester's hand. This page covers those standards, the CAT ratings that decide where an instrument may be connected, the test voltages that can damage connected equipment, the calibration and accuracy-check routine that makes readings defensible, and what to look for in a multi-function tester or a PAT tester. The material comes from Access Training webinar notes on inspection and testing and on PAT; treat the limits and procedures as study notes, not checked against current editions (see Evidence status).

## Safety and accuracy: what each standard covers

Test equipment must meet standards covering two things: the equipment is safe to use, and it gives accurate measurements.

| Document | What it covers | What to look for |
| --- | --- | --- |
| [[BS EN 61010]] (IEC 61010) | Electrical safety of the test equipment: design and construction safety, protection against hazards, compliance with safety principles | Certification markings on the instrument |
| [[BS EN 61557]] (IEC 61557) | Accuracy: accuracy specifications, measurement reliability, test result validity, performance standards | The equipment specification should reference compliance |
| [[GS38]] (HSE guidance) | Safe design of test leads, probes and connections; insulation and sheathing condition; connector safety | Equipment and leads marked as GS38 compliant |

### BS EN 61010: the instrument is safe

- All test equipment should comply with this standard.
- It governs the instrument body, its internal construction, user protection and the CAT rating printed at the terminals (from [[BS EN 61010]]).
- Assurance comes from certification markings on the equipment.

### BS EN 61557: the reading is accurate

- Test equipment should provide accurate measurements per this standard.
- It is published in parts, one per installation test; 61557-10 covers combined multi-function testers (from [[BS EN 61557]]).
- Assurance comes from the equipment specification referencing compliance.

### GS38: the leads and probes are safe

Test leads and probes are what the tester handles at potentially live points - their condition is critical to personal safety. GS38 turns that risk into design and condition requirements:

- Leads must be properly insulated.
- Connections must be secure and safe.
- Probes must have protective features (shrouded tips and the like).
- Leads must not have cuts, damage or deterioration.
- Regular inspection is required.

Equipment and leads should be marked as GS38 compliant. [[Safe Isolation]] depends on a GS38-compliant approved voltage indicator and leads; a lead set that fails GS38 undermines the whole prove-dead sequence.

Correction, 16 October 2026: GS38 defines no "GS38 compliant" marking, here or in the table above. It asks that probes, clips and leads conform to BS EN 61010-031 (or BS EN 61243-3 for two-pole voltage detectors) and be marked with their CAT II, III or IV rating and the maker's name or mark ([GS38](https://www.hse.gov.uk/pubns/priced/gs38.pdf), para 9).

### Other references sometimes cited

- **HSG85**: general electrical safety guidance from HSE.
- **HSR25**: HSE guidance on the electrical regulations.
- **BS 5458**: an older, withdrawn standard, relevant to older instruments only.

HSE's own position, from its electrical FAQs, is that maintenance and testing require appropriate competence and suitable equipment (from [[Electrical Evidence Review - September 2026]]).

## Overvoltage categories (CAT ratings)

Test equipment is categorised by the overvoltage category of the circuit it is rated to be connected to. A higher category means the instrument is rated for higher transient overvoltages, which matters for safe testing of live circuits.

| Category | Where it applies | Example |
| --- | --- | --- |
| CAT II | Circuits connected to the building installation; local-level distribution | Circuits within the building |
| CAT III | Distribution circuits within the building; fixed installation circuits | Distribution board circuits |
| CAT IV | Supply side of the installation; meter circuits, service entrance | Main supply point |

Correction, 16 October 2026: GS38, citing BS EN 61010, calls these measurement categories and defines CAT II as measurements on circuits directly connected to the low voltage installation, such as appliances and portable tools, not circuits within the building. CAT III is the building installation (distribution boards, socket outlets, permanently connected equipment) and CAT IV the source of the installation (meters, primary overcurrent devices) ([GS38](https://www.hse.gov.uk/pubns/priced/gs38.pdf), footnote to para 8).

- The webinar notes point to GN3 Table 1.1 as the listing of category ratings for test equipment, used to select the right instrument for the circuit under test. The table number has not been checked against the current edition of [[GN3 Guidance Note 3]].
- A CAT rating is always paired with a voltage, such as CAT III 600 V or CAT IV 1000 V; check both the category and the voltage before connecting (from [[BS EN 61010]]).

Match the equipment category to the circuit:

- Using CAT II equipment on CAT IV circuit = potential hazard
- Using CAT IV equipment on CAT II circuit = overkill but safe
- Know what you're testing before selecting equipment

## Lead and probe condition

Lead condition is critical to personal safety, so leads are inspected before every use and replaced, never patched.

### What GS38 expects of leads and probes

- Properly insulated, with no cuts or damage
- Flexible and able to bend safely
- Securely connected to the instrument
- Appropriate for the intended use
- Regularly inspected for wear

### Why leads fail

- Cuts in the insulation from sharp edges
- Crushing or kinking
- Poor storage, especially coiling too tightly
- Age and deterioration
- Rough handling

### Checks before use

- Visually inspect the entire length of the leads
- Check the connections at both ends
- Verify the probe tips are intact
- Look for loose strands or damage
- Make sure the leads are not coiled excessively tight
- Test the continuity of the leads if there is any doubt

### Replacement

- Replace damaged leads immediately
- Do not attempt field repairs with tape
- Use equipment-specific lead replacements
- Make sure replacements are GS38 compliant

## Test voltages and vulnerable equipment

Some tests apply significant voltages, and the instrument can damage what it is connected to.

- **Insulation resistance test: 500 V DC.** The standard test voltage for in-service equipment testing. It can damage sensitive equipment (LED, RCD, computing), so confirm the equipment is suitable before testing. [[In-Service Testing]] gives the protective conductor current test as the alternative for voltage-sensitive gear.
- **Test voltages above 50 V** carry special safety considerations: appropriate test equipment, proper training in safe application, and awareness of the hazards.
  Correction, 16 October 2026: HSE gives the rough shock-hazard threshold as 50 V ac or 120 V ripple-free dc in dry conditions, lower in wet, confined or conductive locations ([INDG354](https://www.hse.gov.uk/pubns/indg354.pdf); [GS38](https://www.hse.gov.uk/pubns/priced/gs38.pdf), para 5).

Equipment that may be damaged by a test voltage:

- RCDs (can trip or be damaged; see [[RCD Protection]])
- LED lighting
- IT and computer equipment (sensitive electronics)
- Sensitive control systems
- Electronic thermostats

## Calibration versus accuracy checks

Calibration is a point-in-time verification. [[BS EN 61557]] defines how accurate an instrument must be when in spec; it does not prove the instrument is still in spec on any given day. Two practices cover that gap.

### What annual calibration gives you

- Verification that the equipment was accurate on the calibration date
- A certificate showing the calibration history
- Adjustment if required

### What it does not give you

- Proof of ongoing accuracy between calibrations
- Evidence that the meter stayed accurate throughout the year
- Protection if the meter was damaged after calibration

### Accuracy checks between calibrations

Best practice is to check the meter against a known standard between calibrations.

- **Method**: use a calibration card or standard (0 Ω, 230 V and so on), check the meter against it regularly, record the results systematically and keep a log.
- **How often**: before important tests (high-risk work); monthly or quarterly for regular use; after any potential shock or damage to the equipment.
- **Documentation**: create an accuracy check record, like Form V6 in the PAT model forms (see [[In-Service Testing]]), recording the date, test point, expected value, actual value, tester name and signature, and the meter or equipment identifier.

### Why it matters

Legal and defensibility:

- If test results are questioned later, you have evidence
- Shows you were maintaining equipment to standard
- Demonstrates professional practice
- Supports competence if disputes arise

Practical:

- Catches equipment drift between calibrations
- Prevents invalid test results from an undetected meter error
- Ensures readings can be trusted
- Gives early warning of equipment failure

## Multi-function testers (MFTs)

A typical MFT combines the installation tests needed to complete the schedule of test results on an [[EIC and MEIWC|EIC]] or [[EICR]]:

- Continuity (low-resistance ohmmeter; see [[Continuity Testing]])
- Insulation resistance (high-voltage testing)
- Earth fault loop impedance
- RCD testing
- Polarity testing
- Voltage measurement
- Current measurement (clamp or in-circuit)

Instruments come in three tiers:

- Basic models: essential functions
- Mid-range models: more tests, displayed values
- High-end models: data logging, printing, analysis

Choose leads for the test:

- **Low-resistance (continuity)**: heavy-duty leads with good connectivity
- **High-voltage (insulation resistance)**: heavily insulated leads rated for 500+ V
- **Live testing**: shrouded probes for safe contact

## PAT test equipment

Dedicated PAT testers also come in three tiers:

- Basic PAT testers: simple pass/fail
- Mid-range PAT testers: actual values displayed
- High-end PAT testers: data management, printing

A standard MFT can perform the PAT tests instead. It can do continuity, insulation resistance and functional testing, but needs manual operation and value recording, and may need a PAT adapter for the touch current test.

A dedicated PAT tester is worthwhile if you:

- Perform PAT work regularly or frequently
- Want time savings and automation
- Need data logging and reporting
- Do enough work to justify the investment

The test procedures, pass criteria and the IET model forms are on [[In-Service Testing]] and [[PAT Testing]].

## Records for test equipment

Three kinds of record support the equipment and the work done with it.

**Calibration records**

- Date of calibration
- Calibration service provider
- Certificate number
- Next calibration due date
- Equipment model and serial number

**Accuracy check records**

- Date of check
- Test point (0 Ω, 230 V and so on)
- Expected value
- Actual reading
- Pass/fail status
- Tester name

**Maintenance records**

- Any repairs performed
- Lead replacements
- Environmental damage (water exposure, drops and the like)
- Any incident affecting equipment reliability

Keep these records for the same period as electrical certificates and reports, typically 5-10 years minimum, so they can support the defensibility of work done with that equipment. HSE adds that a test label is not a guarantee that equipment remains safe (from [[Electrical Evidence Review - September 2026]]).

Correction, 16 October 2026: GS38 sets no retention period. It asks that records of inspection and testing of test equipment be kept, particularly where faults are found, to help decide how often equipment is inspected ([GS38](https://www.hse.gov.uk/pubns/priced/gs38.pdf), para 30).

Correction, 16 October 2026: the source for this point is HSE's [INDG236](https://www.hse.gov.uk/pubns/indg236.pdf) leaflet, not the [PAT FAQ](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm). INDG236 says a test indicates an appliance's safety only at the time of the test and does not imply it will stay safe, so user checks must continue; the FAQ says labels and records are not legally required but are a useful management tool.

## Evidence status

- The two Access Training webinar summaries this page draws on (Webinar 4 Inspection and Testing Demonstration; Webinar 4 PAT Testing) cannot currently be found, and the original transcripts are unavailable. The test limits, procedures and the GN3 table reference above have not been authenticated against current material.
- Correction, 22 September 2026: [[GN3 Guidance Note 3]] is an IET publication whose current listing is the tenth edition; the earlier wiki mixed it with fifth-edition in-service equipment material, so chapter, table and form references taken from that material, including the GN3 Table 1.1 reference above, are unreliable until checked against the edition in use.
- [[Electrical Safety]], [[GS38]], [[In-Service Testing]] and [[Inspection and Testing Fundamentals]] carry the same gap. [[Electrical Study Map]] gives a study route through the unverified checks, and [[Electrical Evidence Review - September 2026]] records what was checked.

## Resources

- [HSE GS38: Electrical test equipment for use on low voltage electrical systems](https://www.hse.gov.uk/pubns/books/gs38.htm) — the HSE page for the guidance note itself; the primary reference for lead and probe design and condition.
- [HSE electrical safety FAQs](https://www.hse.gov.uk/electricity/faq.htm) — HSE's position that work should normally be done dead, checked dead, and that maintenance and testing require appropriate competence and suitable equipment.
- [HSE portable appliance testing FAQs](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm) — risk-based maintenance intervals rather than blanket annual PAT testing; labels and records are not legally required but are a useful management tool.
- [HSE INDG236: Maintaining portable electric equipment in low-risk environments](https://www.hse.gov.uk/pubns/indg236.pdf) — HSE's short leaflet on user checks, visual inspection and risk-based testing; says a test shows an appliance's safety only at the time of the test.
- [HSE GS38, fourth edition (PDF)](https://www.hse.gov.uk/pubns/priced/gs38.pdf) — the 2015 guidance itself: probe, lead and fuse requirements, CAT definitions, and keeping inspection records for test equipment.
- [HSE INDG354 (PDF)](https://www.hse.gov.uk/pubns/indg354.pdf) — HSE leaflet on safety in electrical testing at work; gives the 50 V ac / 120 V dc hazard threshold and covers test areas and risk assessment.

## Related

[[Electrical Safety]] · [[GS38]] · [[BS EN 61010]] · [[BS EN 61557]] · [[GN3 Guidance Note 3]] · [[Safe Isolation]] · [[In-Service Testing]] · [[PAT Testing]] · [[Inspection and Testing Fundamentals]] · [[Continuity Testing]] · [[RCD Protection]] · [[BS 7671]] · [[Electrical Study Map]] · [[Electrical Evidence Review - September 2026]] · [[Electrical Evidence Review - October 2026]]
