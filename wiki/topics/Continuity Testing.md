---
title: Continuity Testing
type: topic
domain: electrics
sources: [raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md, raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md]
related: [Dead Testing, Protective Conductors, Resistance Calculations, Test Lead Compensation, Conductor Properties]
created: 2026-04-12
updated: 2026-04-12
tags: [continuity, testing, protective-conductors, bonding, resistance, dead-tests]
---

# Continuity Testing

Testing to verify continuity of protective conductors, including main bonding, supplementary bonding, and earth conductors. Essential dead test performed before any other testing.

## Purpose

Continuity testing proves:
- Protective conductors are intact (not broken)
- Connections are secure and complete
- Low resistance paths exist for fault current
- Cabling has not been damaged

## Test Sequence Position

**First in dead-testing sequence**:
1. Continuity (first - you are here)
2. Insulation resistance
3. Polarity

## Instrument Selection

**Low-resistance ohmmeter required**:
- Multi-function tester (MFT) continuity function, OR
- Low-resistance ohmmeter
- Simple continuity beeper is NOT sufficient
  - Reason: Actual resistance values must be measured and recorded
  - Pass/fail depends on specific resistance limits

**Reference**: GN3 continuity section (page 56)

## What to Test

### Protective Conductors

- Main protective conductors (earth)
- Circuit protective conductors (CPC)
- Supplementary bonding conductors
- In Class 1 equipment: Earth conductor from plug to appliance

### Test Points

- From plug earth pin to exposed conductive parts
- Along main and supplementary bonding routes
- At connections and terminations
- Complete circuit paths

## Expected Resistance Calculations

### Formula

```
R = (milliohms per meter × length in meters) / 1000 = ohms
```

### Source Data: GN3 Table B1

Contains resistance values for standard conductors:
- Milliohms per meter for each conductor size
- Columns for different conductor types
- Single conductor values and combined pair values

**Important interpretation note**: Think of columns as "conductor one" and "conductor two", not as "line" and "protective" to avoid confusion when using table.

### Example Calculation 1: Fixed Installation CPC

**Scenario**: 10 mm² protective conductor, 15 m length

**Calculation**:
- Use 1.83 mΩ/m (single conductor value from Table B1)
- R = (1.83 × 15) / 1000
- R = 27.45 / 1000
- R = 0.027 Ω
- Rounded: ~0.03 Ω

**Sense check**: Realistic value for copper conductor of this size and length.

### Example Calculation 2: Flex Cable (Equipment)

**Scenario**: 0.75 mm² flex cable, 1 m length

**Calculation**:
- Use 26 mΩ/m (from Appendix 5 for flex)
- R = (26 × 1) / 1000
- R = 0.026 Ω

**Pass criteria for equipment**: 0.1 + R = 0.1 + 0.026 = 0.126 Ω maximum

### Example Calculation 3: Sense Check with Drum

**Scenario**: 50 m drum of 10 mm² G/Y cable

**Calculation**:
- Use 1.83 mΩ/m
- R = (1.83 × 50) / 1000
- R = 91.5 / 1000
- R = 0.0915 Ω
- Expected: Around 0.09 Ω

**Purpose**: Develop sense of realistic readings so you can spot errors.

## Twin-and-Earth CPC Sizes

### Table B1 Star/Asterisk Markings

Asterisks identify T&E cable CPC sizes (quick reference):

| T&E Size | CPC Size |
|----------|----------|
| 1.0 mm² | 1.0 mm² |
| 1.5 mm² | 1.0 mm² |
| 2.5 mm² | 1.5 mm² |
| 4.0 mm² | 1.5 mm² |
| 6.0 mm² | 2.5 mm² |
| 10.0 mm² | 4.0 mm² |
| 16.0 mm² | 6.0 mm² |

**Use**: Understand cable construction and expected resistance values for practical work and exam.

## Test Lead Resistance Compensation

### The Problem

Measured resistance = Conductor resistance + Test lead resistance

Test leads add significant resistance (typically 0.5-1.5 Ω depending on lead length and quality).

**Example without compensation**:
- Total measured: 1.51 Ω
- Test leads: 1.50 Ω
- Actual conductor: Only 0.01 Ω
- If not compensated, appears to fail when actually passes

### Method 1: Separate Lead Measurement

1. Short-circuit the test leads together (no cable under test)
2. Measure resistance of leads only
3. Note this value
4. Measure complete circuit (conductor + leads)
5. Subtract lead resistance from total

**Example**:
- Total reading with leads = 1.51 Ω
- Lead resistance alone = 1.50 Ω
- True conductor resistance = 1.51 - 1.50 = 0.01 Ω

### Method 2: Zero/Null the Leads

1. Use MFT function that zeros out lead resistance
2. Short-circuit the leads
3. Press "zero" or "null" button
4. MFT remembers and subtracts lead resistance from all subsequent readings
5. Measure conductor directly
6. Reading is already compensated

**Advantage**: Faster and more convenient, especially for multiple tests.

## Eliminating Parallel Paths

### Why It Matters

When bonding conductors are connected at multiple points, parallel paths exist:
- Multiple routes for current
- Resistance readings become artificially low
- True conductor resistance cannot be determined

**Example**: Bonding conductor connected to MET at both ends
- Current can flow through the main route AND return paths
- Measured resistance is lower than actual conductor resistance
- Distorts test results

### Solution

Temporarily disconnect one end of bonding conductor from MET during testing:
- Eliminates parallel paths
- Allows true conductor resistance measurement
- Reconnect after testing

**Important**: This is temporary during testing only, not permanent.

## Pass/Fail Criteria

### Fixed Installation Protective Conductors

Specific pass criteria depend on application:
- Typically very low resistance (under 0.1 Ω for short runs)
- Calculated value using expected resistance (formula above)
- Actual measured value must be reasonable for the length

### Equipment (Class 1)

**Pass criterion**: 0.1 Ω + R (where R is flex protective conductor resistance)

**Example**: For 1 m of 0.75 mm² flex
- R = 0.026 Ω
- Maximum = 0.1 + 0.026 = 0.126 Ω

### Bonding Conductors

Must show continuous path with acceptably low resistance:
- No open circuits (infinite resistance = fail)
- Resistance within expected range for conductor size and length
- No corroded or damaged connections

## Test Procedure

1. **Identify what to test**: Which conductor or bonding route
2. **Calculate expected resistance**: Use Table B1 and formula
3. **Compensate test leads**: Zero the meter or note lead resistance
4. **Connect test leads**: Secure connection at both ends of conductor
5. **Take reading**: Record resistance value
6. **Compare to expected**: Is it realistic for the length?
7. **Compare to pass criteria**: Does it meet the requirement?
8. **Record result**: Document for certification/report

## Common Mistakes

- **Not using Table B1 values correctly**: Confusing conductor columns
- **Not compensating for lead resistance**: Results appear to fail when they pass
- **Not eliminating parallel paths**: Low readings that aren't true conductor resistance
- **Using incorrect test instrument**: Simple beeper cannot measure values needed
- **Testing at wrong points**: Not testing complete circuit path
- **Not sense-checking results**: Not questioning unrealistic readings
- **Confusing T&E CPC sizes**: Using wrong CPC value in calculations

## Documentation

Results must be recorded:
- Conductor tested (e.g., "CPC Ring Circuit 1")
- Measured resistance value (in Ω)
- Pass/Fail status
- Any notes about test conditions
- Result becomes part of [[EIC and MEIWC]] certificate or test schedule
