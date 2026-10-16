---
title: Continuity Testing
type: topic
domain: electrics
sources:
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - Safe Isolation
  - Electrical Safety
  - Ohm's Law and Electrical Calculations
  - GN3 Guidance Note 3
  - Inspection and Testing Fundamentals
  - In-Service Testing
  - PAT Testing
  - EIC and MEIWC
  - Test Equipment Standards
  - Electrical Study Map
  - BS 7671
  - Electrical Evidence Review - October 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - continuity
  - testing
  - protective-conductors
  - bonding
  - resistance
  - dead-tests
  - gn3
  - table-b1
summary: "How to prove protective conductors and bonding are continuous: instrument, expected resistance from GN3 Table B1, lead compensation and pass limits."
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection
    and Testing Demonstration.md
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT
    Testing.md
reviewed: '2026-10-16'
review_status: partial
review_notes: "Test order, the (0.1 + R) appliance limit, conductor resistances, twin-and-earth CPC sizes and every worked sum were checked against IET Wiring Matters, the BS 7671 A4 model forms, HSE GS38 and a BS 6004 cable datasheet; GN3 page and Table B1 references need the paid book and remain unchecked."
---

# Continuity Testing

Continuity testing verifies that protective conductors are continuous: main bonding, supplementary bonding, circuit protective conductors (CPCs) and, for Class 1 equipment, the earth path from plug to appliance. It is the first dead test, carried out before insulation resistance and polarity. This page holds the study notes on what to test, which instrument to use, how to work out the resistance you should expect from GN3 Table B1, how to compensate for test leads and parallel paths, and what counts as a pass.

The figures, procedures and page references on this page come from a webinar summary whose original transcript is no longer available. Check limits and sequence against the current [[GN3 Guidance Note 3]], [[BS 7671]] and the course material before relying on them.

## Purpose

A continuity test proves:

- Protective conductors are intact, not broken
- Connections are secure and complete
- Low-resistance paths exist for fault current
- Cabling has not been damaged

## Place in the dead-testing sequence

Continuity comes first. The dead tests run after [[Safe Isolation]] in this order:

1. Continuity
2. Insulation resistance
3. Polarity

See [[Inspection and Testing Fundamentals]] for the full initial verification process around these tests.

## Instrument

A low-resistance ohmmeter is required. Either:

- A multi-function tester (MFT) on its continuity function, or
- A dedicated low-resistance ohmmeter

A simple continuity beeper is not sufficient. Actual resistance values must be measured and recorded, and pass/fail depends on specific resistance limits. Instrument requirements are covered in [[Test Equipment Standards]].

Reference: GN3 continuity section (page 56).

## What to test

### Protective conductors

- Main protective conductors (earth)
- Circuit protective conductors (CPC)
- Supplementary bonding conductors
- In Class 1 equipment: the earth conductor from plug to appliance

### Test points

- From the plug earth pin to exposed conductive parts
- Along main and supplementary bonding routes
- At connections and terminations
- Complete circuit paths

## Expected resistance

Work out the resistance you should see before you measure, so an unrealistic reading stands out. The arithmetic is in [[Ohm's Law and Electrical Calculations]].

### Formula

```
R = (milliohms per meter × length in meters) / 1000 = ohms
```

### GN3 Table B1

Table B1 gives resistance values for standard conductors:

- Milliohms per meter for each conductor size
- Columns for different conductor types
- Single-conductor values and combined-pair values

Interpretation note: think of the columns as "conductor one" and "conductor two", not as "line" and "protective", to avoid confusion when using the table.

### Worked example 1: fixed-installation CPC

Scenario: 10 mm² protective conductor, 15 m long.

- Use 1.83 mΩ/m (single-conductor value from Table B1)
- R = (1.83 × 15) / 1000
- R = 27.45 / 1000
- R = 0.027 Ω
- Rounded: about 0.03 Ω

Sense check: a realistic value for a copper conductor of this size and length.

### Worked example 2: flex cable on equipment

Scenario: 0.75 mm² flex, 1 m long.

- Use 26 mΩ/m (from Appendix 5 for flex)
- R = (26 × 1) / 1000
- R = 0.026 Ω

Pass criterion for equipment: 0.1 + R = 0.1 + 0.026 = 0.126 Ω maximum.

### Worked example 3: sense check with a cable drum

Scenario: a 50 m drum of 10 mm² green/yellow cable.

- Use 1.83 mΩ/m
- R = (1.83 × 50) / 1000
- R = 91.5 / 1000
- R = 0.0915 Ω
- Expected reading: around 0.09 Ω

The point of this exercise is to develop a feel for realistic readings so you can spot errors.

## Twin-and-earth CPC sizes

Asterisks in Table B1 mark the CPC sizes used in twin-and-earth (T&E) cable, as a quick reference:

| T&E Size | CPC Size |
|----------|----------|
| 1.0 mm² | 1.0 mm² |
| 1.5 mm² | 1.0 mm² |
| 2.5 mm² | 1.5 mm² |
| 4.0 mm² | 1.5 mm² |
| 6.0 mm² | 2.5 mm² |
| 10.0 mm² | 4.0 mm² |
| 16.0 mm² | 6.0 mm² |

Knowing these sizes helps you understand cable construction and the resistance to expect, for practical work and the exam.

## Test lead compensation

### The problem

Measured resistance = conductor resistance + test lead resistance.

Test leads add significant resistance, typically 0.5-1.5 Ω depending on lead length and quality.

Example without compensation:

- Total measured: 1.51 Ω
- Test leads: 1.50 Ω
- Actual conductor: only 0.01 Ω
- Uncompensated, the conductor appears to fail when it actually passes

### Method 1: measure the leads separately

1. Short-circuit the test leads together, with no cable under test
2. Measure the resistance of the leads alone
3. Note this value
4. Measure the complete circuit (conductor + leads)
5. Subtract the lead resistance from the total

Example:

- Total reading with leads = 1.51 Ω
- Lead resistance alone = 1.50 Ω
- True conductor resistance = 1.51 - 1.50 = 0.01 Ω

### Method 2: zero (null) the leads

1. Use the MFT function that zeros out lead resistance
2. Short-circuit the leads
3. Press the "zero" or "null" button
4. The MFT remembers the lead resistance and subtracts it from all subsequent readings
5. Measure the conductor directly
6. The reading is already compensated

Advantage: faster and more convenient, especially across multiple tests.

## Eliminating parallel paths

### Why it matters

When bonding conductors are connected at multiple points, parallel paths exist:

- There are multiple routes for current
- Resistance readings become artificially low
- The true conductor resistance cannot be determined

Example: a bonding conductor connected to the main earthing terminal (MET) at both ends. Current can flow through the main route and the return paths, so the measured resistance is lower than the actual conductor resistance and the result is distorted.

### Solution

Temporarily disconnect one end of the bonding conductor from the MET during testing:

- This eliminates the parallel paths
- The true conductor resistance can be measured
- Reconnect after testing

The disconnection is temporary, for the duration of the test only, never permanent.

Correction, 16 October 2026: the IET warns that removing an earthing or protective bonding conductor can put hazardous touch voltages on exposed- and extraneous-conductive-parts where an open PEN fault exists, and that diverted neutral current can come from neighbouring installations; it describes a clamp-meter check for current in the earthing and bonding conductors before and after isolating the installation ([IET Wiring Matters — Neutral current diversion (NCD) industry research update](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/neutral-current-diversion-ncd-industry-research-update/)).

## Pass/fail criteria

### Fixed-installation protective conductors

The specific pass criterion depends on the application:

- Typically very low resistance (under 0.1 Ω for short runs)
- A calculated value using the expected-resistance formula above
- The measured value must be reasonable for the length

Correction, 16 October 2026: there is no general 0.1 Ω pass limit for circuit protective conductors. The measured (R1 + R2) is added to Ze, and the resulting Zs is compared with the maximum for the protective device from BS 7671 Chapter 41 or the maker's data, reduced for conductor temperature (×0.8 in the IET's worked example) ([IET Wiring Matters — Minimizing unnecessary live testing for initial verification](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/); [IET Wiring Matters — Why are the values of maximum earth fault loop impedance different](https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/)). A 1.5 mm² CPC alone is about 0.12 Ω over 10 m at 12.1 mΩ/m ([Prysmian 6242Y datasheet](https://datasheet.prysmian.com/pdf/datasheet/en-GB/312416/GB00_6242Y)).

### Class 1 equipment

Pass criterion: 0.1 Ω + R, where R is the resistance of the flex protective conductor.

Example, for 1 m of 0.75 mm² flex:

- R = 0.026 Ω
- Maximum = 0.1 + 0.026 = 0.126 Ω

The appliance side of this test is covered in [[In-Service Testing]] and [[PAT Testing]].

### Bonding conductors

Must show a continuous path with acceptably low resistance:

- No open circuits (infinite resistance = fail)
- Resistance within the expected range for conductor size and length
- No corroded or damaged connections

## Test procedure

1. Identify what to test: which conductor or bonding route
2. Calculate the expected resistance using Table B1 and the formula
3. Compensate the test leads: zero the meter or note the lead resistance
4. Connect the test leads securely at both ends of the conductor
5. Take the reading and record the resistance value
6. Compare to expected: is it realistic for the length?
7. Compare to the pass criteria: does it meet the requirement?
8. Record the result for the certificate or report

## Common mistakes

- Not using Table B1 values correctly: confusing the conductor columns
- Not compensating for lead resistance: results appear to fail when they pass
- Not eliminating parallel paths: low readings that are not the true conductor resistance
- Using the wrong instrument: a simple beeper cannot measure the values needed
- Testing at the wrong points: not testing the complete circuit path
- Not sense-checking results: not questioning unrealistic readings
- Confusing T&E CPC sizes: using the wrong CPC value in calculations

## Recording results

Results must be recorded:

- Conductor tested (for example "CPC Ring Circuit 1")
- Measured resistance value, in Ω
- Pass/fail status
- Any notes about test conditions

The result becomes part of the [[EIC and MEIWC]] certificate or test schedule.

## Links

- [IET Wiring Matters — Neutral current diversion (NCD) industry research update](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/neutral-current-diversion-ncd-industry-research-update/) — IET survey article (May 2025) on diverted neutral current; warns about disconnecting earthing and bonding conductors and describes clamp-meter checks.
- [IET Wiring Matters — Minimizing unnecessary live testing for initial verification](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/) — IET article (May 2025) on the test sequence, working out Zs as Ze + (R1 + R2), and the minimum live testing needed.
- [IET Wiring Matters — Why are the values of maximum earth fault loop impedance different](https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/) — IET article (May 2024) explaining the 0.8 temperature factor and the GN3 and On-Site Guide maximum Zs tables.
- [Prysmian 6242Y datasheet](https://datasheet.prysmian.com/pdf/datasheet/en-GB/312416/GB00_6242Y) — Manufacturer data for twin-and-earth to BS 6004: CPC size and conductor resistance at 20 °C for each size from 1 to 16 mm².

## Related

[[Safe Isolation]] · [[Electrical Safety]] · [[Ohm's Law and Electrical Calculations]] · [[GN3 Guidance Note 3]] · [[Inspection and Testing Fundamentals]] · [[In-Service Testing]] · [[PAT Testing]] · [[EIC and MEIWC]] · [[Test Equipment Standards]] · [[BS 7671]] · [[Electrical Study Map]] · [[Electrical Evidence Review - October 2026]]
