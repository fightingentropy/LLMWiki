---
title: PAT Testing
type: source
domain: electrics
sources: [raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md]
related: [Electrical Safety, In-Service Testing, Class 1 Equipment, Class 2 Equipment, Protective Conductor Continuity, Insulation Resistance Testing, Test Equipment Standards]
created: 2026-04-12
updated: 2026-04-12
tags: [pat, in-service-testing, portable-appliances, inspection, testing, safety, equipment-failure]
---

# PAT Testing

Comprehensive guide to in-service inspection and testing of electrical equipment (portable appliance testing). Covers practical inspection steps, test methods, pass/fail criteria, documentation, and business considerations.

Source: Electrics Webinar 4 - PAT Testing by Access Training

## Overview

**PAT Testing** technically means "portable appliance testing testing" (redundant phrasing), but is the common industry term for in-service inspection and testing of electrical equipment.

This session covers:
- Competent inspection and testing (not repair)
- Safe working with equipment in use
- Understanding how to use forms and tables for real work and exams

## Three Levels of In-Service Checks

1. **User check**: Done by unskilled users
2. **Formal visual inspection**: Done by a responsible competent person
3. **Combined inspection and test**: Done by a competent person; includes full formal visual inspection plus testing

## Formal Visual Inspection

### Visual Inspection Comes First and is Most Important

Core checks before any testing:
- Equipment function/operation
- Environment and housekeeping (suitability for where/how it's used)
- Condition of the flex/cable
- Condition of the plug
- Condition of the socket outlet used by the equipment
- Visible appliance damage (burning, cracks, damage to casing/body)

**Critical point**: Equipment can be unsafe because of the environment, even if the equipment itself appears in good condition.

### Plug Checks and Common Fail Conditions

Plugs are a common weak point and frequent source of failure.

**Plug-related failures**:
- Physical damage/cracks
- Signs of burning (outside or inside)
- Flex sheathing not entering the plug properly (colored insulation visible)
- Loose fuse in holder
- Incorrect fuse arrangement (foil/screw instead of proper BS1362 fuse)
- Loose strands of copper
- Missing earth on Class 1 equipment
- Damaged flex / taped flex / poor repairs
- Two cables in one plug
- Incorrect cable type used in plug (e.g., twin and earth instead of flex)
- Excessive visible copper where it presents danger
- Plug cover insecure or damaged screws preventing proper verification
- Cardboard insert left on plug (fire risk)

**Additional plug notes**:
- Pre-1984 unsleeved live/neutral pins: Don't automatically require failure, but replacement may be recommended
- If replacing a plug because it is unfit, dispose of the old one (don't keep for reuse)
- Non-rewirable Class 2 plugs: May have plastic earth pin (used to open socket shutters only)
- Rewirable plugs: Should have solid metal earth pin
- Non-compliant/fake plugs: May show incorrect sleeving arrangements (e.g., sleeved earth pin)

## Fuse Sizing Guidance Update

**Important correction**: Older rule-of-thumb based on appliance wattage is outdated.

**Current guidance**: Plug fuse size is determined by flex size, not appliance wattage.

**Reason**: Fuse protects the cable (overcurrent protection), so cable rating matters.

## Inspect, Test vs Repair

**One of the strongest themes**: The inspector/tester is there to inspect, test, and report - not to repair.

Do not take it upon yourself to fix issues during inspection/testing unless that is explicitly part of your job/arrangement:
- Don't tape repairs
- Don't fix loose screws
- Don't replace damaged parts

Mark failed items with red label and report. The equipment still belongs to the customer. Customer may choose to ignore the fail label; the inspector's responsibility is to inspect, test, report correctly.

## Safe Working With In-Service Equipment

**"In service" means equipment is in use** and may need to be energized.

Some checks require equipment to be energized (e.g., functional checks).

**Live working permitted** only under conditions: when unreasonable to be dead, reasonable to be live, and suitable precautions are taken.

Example: Cannot verify fan speed controls without powering the fan.

## The Four Main Tests

1. Protective conductor continuity test
2. Insulation resistance test
3. Protective conductor / touch current test (alternative in some cases)
4. Functional test (and sometimes load testing)

## Test 1: Protective Conductor Continuity (Class 1 Only)

### Purpose
Prove continuity from plug earth pin / supply earth conductor to exposed conductive parts.

### Key Points
- Only for Class 1 equipment (Class 2 has no protective conductor)
- Simple continuity beeper is not sufficient; actual resistance values must be measured

### Pass Criteria

Maximum allowed = **0.1 ohm + R**

Where **R** = resistance of the protective conductor in the supply flex

### Calculating R

Use Appendix 5 table (milliohms per meter by conductor size):

```
R = (milli-ohms per meter × length in meters) / 1000 = ohms
```

**Example**: 0.75 mm² flex at 1 m
- 26 mOhm/m
- R = 0.026 ohm
- Therefore max result = 0.1 + 0.026 = 0.126 ohm

### Older Equipment Allowance

Older equipment may be allowed up to **0.5 ohm + R** (engineering judgment-based), but still stress practical safety and sensible failure decisions.

## Test 2: Insulation Resistance (Class 1 and Class 2)

### Purpose
Prove insulation is intact (conductors are not unintentionally contacting each other/earth).

### Method
Think of it like inflating an inner tube to reveal punctures.

### Test Details
- **Test voltage**: 500 V DC
- **Setup**: Line and neutral are joined together and tested to earth
- **Power switches**: Should be on
- **Covers**: Should be in place
- **Equipment compatibility**: Ensure equipment is suitable for applied test voltage

### Minimum Acceptable Results
- **Class 1**: Minimum 1 megaohm
- **Class 2**: Minimum 2 megaohms

## Test 3: Touch Current / Protective Conductor Current Test

**Alternative** to insulation resistance testing for voltage-sensitive equipment (e.g., computing/electronic equipment).

500 V insulation test can be too aggressive for sensitive gear.

This alternative measures leakage to earth using appropriate test equipment.

## Test 4: Functional Test (and Load Testing)

- Final test to confirm equipment actually works
- Verify switches, controls, thermostats, etc.
- **Load testing**: Specialist test (e.g., heating equipment / food warming) to verify correct load/performance

## RCD-Related Checks

If equipment is plugged into an RCD socket outlet (with test button), the RCD function should also be checked.

## Test Equipment and Safety Guidance

### Test Equipment Standards

Test equipment should meet standards covering safety and accuracy:
- **61010**: Safety of the equipment
- **61557**: Accuracy of the equipment
- **GS38**: HSE guidance on safe use and condition of leads and probes
  - Special focus on lead/probe condition (what the tester handles at potentially live points)

### Calibration vs Regular Accuracy Checks

**Key practical/legal takeaway**: Annual calibration alone is not enough to prove ongoing accuracy.

**Best practice**:
- Regular accuracy checks (e.g., using a calibration card)
- Record them systematically
- Reason: Calibration only proves meter was accurate on calibration date
- Keeping accuracy records supports defensibility if results questioned later

## PAT Test Equipment Types

### Equipment Options

- **Basic PAT testers**: Simple pass/fail, lower cost
- **Mid-range testers**: More tests, displays actual values, more features
- **High-end/industrial testers**: Memory, printing, result storage, more automation

### Cost-Benefit Notes

- Normal installation test meter can be used for PAT-related tests
- PAT adapters available to convert standard meters for PAT use
- Dedicated PAT testers worthwhile when doing PAT work frequently (save time)

### Commercial Perspective

- PAT pricing per item has fallen vs earlier years
- Still profitable when priced as day rate and run efficiently
- Useful add-on skill with low overheads
- Strong employability value

## Documentation (Critical for Exams and Practice)

### IET Model Forms (V-Forms)

The current book is not very helpful on form naming; instructor strongly stresses memorizing these.

**Forms and their functions**:

- **Form V1**: Equipment register / asset register
  - Equipment list, locations, IDs, planned inspection/test intervals

- **Form V2**: Inspection and test record
  - Details and results for items tested/inspected
  - Includes visual checks and test results

- **Form V3**: Labels
  - Example pass/fail labeling

- **Form V4**: Repair register

- **Form V5**: Faulty equipment register

- **Form V6**: Test equipment accuracy record
  - Critical for recording regular accuracy checks

### Exam Tip

Make a Post-it note mapping V1-V6 to their functions. Fifth edition book can be confusing/inconsistent about these forms.

### Labeling Note: No "Next Inspection Date"

Example labels do not show a next inspection date.

**Reason**: Equipment can move environments, changing the risk assessment and inspection frequency. Fixed future inspection dates on labels can be misleading/inappropriate.

## Appendices for Revision

Instructor specifically emphasizes these for exam preparation:

- **Appendix 2**: IP ratings table (strongly recommended for revision; likely to feature in inspection/testing questions)
- **Appendix 5**: Flexible cable resistance values (used for continuity calculations)
- **Appendix 6**: Condition of plugs and equipment (visual inspection reference)
- **Appendix 7**: IT equipment racks (for specific questions)
- **Appendix 8**: Basic electrical calculations and supporting concepts

### Revision Approach

- Use Post-it notes / quick reference aids in the book (where exam rules permit)
- Repeatedly review key tables and appendices to improve recall

## Key Takeaways

- PAT/in-service inspection and testing is mostly competent visual inspection, correct testing, and accurate reporting
- Do not repair during inspection/testing unless explicitly part of your role
- Class 1 and Class 2 equipment follow different test paths (continuity test is Class 1 only)
- Know pass/fail thresholds: **0.1 + R** for protective conductor continuity, minimum insulation resistance values (1 MΩ Class 1, 2 MΩ Class 2)
- Fuse size follows flex size, not appliance wattage
- Safety of test leads/probes (GS38) and meter accuracy checks matter as much as knowing test steps
- Learn V1-V6 forms and their functions (exam-critical, not well-supported by book alone)
- PAT remains useful, employable skill and can be commercially viable

## Additional Resources

- Portal video: PAT testing demonstration (about 1 hour 3 minutes) recommended for seeing tests and documentation completed in practice
- If already passed PAT exam previously: Do not need to retake solely because of fifth edition book update
