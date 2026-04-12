---
title: Test Equipment Standards
type: topic
domain: electrics
sources: [raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md, raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md]
related: [Electrical Safety, GS38, Calibration and Accuracy, Test Leads and Probes, Multi-Function Testers]
created: 2026-04-12
updated: 2026-04-12
tags: [test-equipment, standards, safety, accuracy, calibration, gs38]
---

# Test Equipment Standards

Standards and guidance for selecting, maintaining, and using electrical test equipment. Covers safety standards, accuracy requirements, lead/probe condition, and calibration practices.

## Purpose of Standards

Test equipment must meet standards covering two critical areas:

1. **Safety**: The test equipment itself is safe to use
2. **Accuracy**: The test equipment provides accurate measurements

## Key Standards and Guidance

### BS EN 61010: Test Equipment Safety

**Standard**: BS EN 61010 (IEC 61010)

**Covers**:
- Electrical safety of test equipment
- Design and construction safety
- Protection against hazards
- Compliance with safety principles

**Requirement**: All test equipment should comply with this standard

**Assurance**: Look for certification markings on equipment

### BS EN 61557: Test Equipment Accuracy

**Standard**: BS EN 61557 (IEC 61557)

**Covers**:
- Accuracy specifications
- Measurement reliability
- Test result validity
- Performance standards

**Requirement**: Test equipment should provide accurate measurements per this standard

**Assurance**: Equipment specification should reference compliance

### GS38: Test Leads and Probes Guidance

**Standard**: GS38 (Health and Safety Executive guidance)

**Covers**:
- Safe design of test leads
- Safe design of probes and connections
- Insulation and sheathing condition
- Connector safety

**Why important**: Test leads and probes are what the tester handles at potentially live points - their condition is critical to personal safety

**Key elements**:
- Leads must be properly insulated
- Connections must be secure and safe
- Probes must have protective features (shrouded tips, etc.)
- Leads must not have cuts, damage, or deterioration
- Regular inspection required

**Compliance**: Equipment and leads should be marked as GS38 compliant

### HSE Guidance References

Additional HSE guidance sometimes referenced:
- **HSG85**: General electrical safety guidance
- **HSR25**: Guidance on electrical regulations
- **BS 5458**: Older withdrawn standard (relevant to older instruments only)

## Category Ratings for Test Equipment

### CAT Ratings

Test equipment is categorized by overvoltage category:

**CAT II** (Category II):
- Circuits connected to building installation
- Local level distribution
- Example: Circuits within building

**CAT III** (Category III):
- Distribution circuits within building
- Fixed installation circuits
- Example: Distribution board circuits

**CAT IV** (Category IV):
- Supply side of installation
- Meter circuits, service entrance
- Example: Main supply point

### GN3 Table 1.1

GN3 lists category ratings for test equipment:
- Helps select appropriate equipment for the circuit you're testing
- Higher category = equipment rated for higher transient overvoltages
- Important for safe testing of live circuits

### Practical Selection

Match equipment category to circuit:
- Using CAT II equipment on CAT IV circuit = potential hazard
- Using CAT IV equipment on CAT II circuit = overkill but safe
- Know what you're testing before selecting equipment

## Test Lead and Probe Condition

### GS38 Requirements

Test leads and probes must be:
- Properly insulated with no cuts or damage
- Flexible and able to bend safely
- Securely connected to equipment
- Appropriate for intended use
- Regularly inspected for wear

### Common Failures

Test leads fail due to:
- Cuts in insulation (exposure to sharp edges)
- Crushing or kinking
- Poor storage (coiling too tightly)
- Age and deterioration
- Rough handling

### Inspection Points

Before using test equipment:
- Visually inspect entire length of leads
- Check connections at both ends
- Verify probe tips are intact
- Check for any loose strands or damage
- Ensure leads are not coiled excessively tight
- Test continuity of leads if doubt exists

### Replacement

- Replace damaged leads immediately
- Do not attempt field repairs with tape
- Use equipment-specific lead replacements
- Ensure replacements are GS38 compliant

## Test Equipment Voltage Considerations

### High-Voltage Tests

Some testing applies significant voltages:

**Insulation resistance test**: 500 V DC
- Standard for in-service equipment testing
- Can damage sensitive equipment (LED, RCD, computing)
- Must ensure equipment suitable before testing

**Test voltages above 50 V**: Special safety considerations
- Requires use of appropriate test equipment
- Proper training in safe application
- Awareness of hazards

### Vulnerable Equipment

Know what might be damaged:
- RCDs (can trip or be damaged by test voltage)
- LED lighting (may be damaged)
- IT/computer equipment (sensitive electronics)
- Sensitive control systems
- Electronic thermostats

## Calibration vs Accuracy Checking

### Annual Calibration

**What calibration provides**:
- Verification that equipment was accurate on calibration date
- Certificate showing calibration history
- Adjustment if required

**What calibration does NOT provide**:
- Proof of ongoing accuracy between calibrations
- Evidence that meter stayed accurate throughout the year
- Protection if meter was damaged after calibration

**Limitation**: Calibration is a point-in-time verification

### Regular Accuracy Checks

**Best practice**: Perform accuracy checks between calibrations

**Method**:
- Use calibration card/standard (0 Ω, 230 V, etc.)
- Check meter against known standard regularly
- Record results systematically
- Keep log of accuracy checks

**How often**:
- Before important tests (high-risk work)
- Monthly or quarterly for regular use
- After potential shock/damage to equipment

**Documentation**:
- Create accuracy check record (like Form V6 in PAT)
- Record date, test point, expected value, actual value
- Tester name and signature
- Meter/equipment identifier

### Why This Matters

**Legal/defensibility perspective**:
- If test results are questioned later, you have evidence
- Shows you were maintaining equipment to standard
- Demonstrates professional practice
- Supports competence if disputes arise

**Practical perspective**:
- Catches equipment drift between calibrations
- Prevents invalid test results from undetected meter error
- Ensures readings can be trusted
- Early warning of equipment failure

## Multi-Function Test Meters (MFTs)

### Types of Test Functions

Typical MFT includes:
- Continuity (low-resistance ohmmeter)
- Insulation resistance (high-voltage testing)
- Earth fault loop impedance
- RCD testing
- Polarity testing
- Voltage measurement
- Current measurement (clamp or in-circuit)

### Instrument Category

MFTs typically come in:
- Basic models (essential functions)
- Mid-range models (more tests, display values)
- High-end models (data logging, printing, analysis)

### Lead Selection for Different Tests

- **Low-resistance (continuity)**: Heavy-duty leads with good connectivity
- **High-voltage (insulation resistance)**: Heavily insulated leads rated for 500+ V
- **Live testing**: Shrouded probes for safe contact

## PAT-Specific Test Equipment

### PAT Tester Options

Dedicated PAT testers:
- Basic PAT testers (simple pass/fail)
- Mid-range PAT testers (actual values displayed)
- High-end PAT testers (data management, printing)

### Alternative Approach

Standard MFT can perform PAT tests:
- Can do continuity, insulation resistance, functional testing
- Requires manual operation and value recording
- May need PAT adapter for touch current test

### When to Use Dedicated Tester

Dedicated PAT tester worthwhile if:
- Performing PAT work regularly/frequently
- Want time savings and automation
- Need data logging and reporting
- Do enough work to justify investment

## Record Keeping for Test Equipment

### Documentation Required

**Calibration records**:
- Date of calibration
- Calibration service provider
- Certificate number
- Next calibration due date
- Equipment model and serial number

**Accuracy check records**:
- Date of check
- Test point (e.g., 0 Ω, 230 V, etc.)
- Expected value
- Actual reading
- Pass/Fail status
- Tester name

**Maintenance records**:
- Any repairs performed
- Lead replacements
- Environmental damage (water exposure, drops, etc.)
- Any incidents affecting equipment reliability

### Retention Period

- Keep records for same period as electrical certificates/reports
- Typical: 5-10 years minimum
- Support defensibility of work done with that equipment
