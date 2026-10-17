---
title: Continuity Testing
type: topic
domain: electrics
summary: "How to prove protective conductors and bonding are continuous: test order, expected resistance from Table B1, lead nulling, parallel paths and pass criteria."
tags: [electrics]
related: ["Safe Isolation", "Ohm's Law and Electrical Calculations", "Test Equipment Standards", "Electrical Certificates", "In-Service Testing"]
sources:
  - clippings/evidence-review-2026-10-16/Electrics.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
reviewed: '2026-10-16'
review_status: partial
review_notes: "Test order, conductor values, CPC sizes and worked sums were checked against IET Wiring Matters, the A4 model forms and a BS 6004 datasheet; GN3 page and table numbers were not."
source_gaps:
  - "raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md"
  - "raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md"
---

# Continuity Testing

Continuity testing proves that protective conductors are continuous: main and supplementary bonding, circuit protective conductors (CPCs) and, on Class 1 equipment, the earth path from plug to case. It is the first dead test, done after [[Safe Isolation]]. The figures follow the course's GN3 edition; confirm table values in the edition you use.

## Order of tests

Initial verification runs in a fixed order (GN3; On-Site Guide):

- **Dead, before the supply is connected:** continuity, insulation resistance, polarity (by the continuity method and visual checks).
- **Live, after connection:** supply polarity, earth fault loop impedance, prospective fault current, RCD tests.

On a refurb or extension, dead-test after first fix and record the readings, then re-test at second fix. Other trades can damage cables in between, and the first readings show when it happened.

## Instrument

Use a low-resistance ohmmeter or the continuity range of a multifunction tester (MFT). A beeper is not enough: pass or fail depends on measured values, which you record. Instrument standards are on [[Test Equipment Standards]].

## Expected resistance

Work out what you should see before you measure, so an unrealistic reading stands out.

```
R (Ω) = mΩ/m × length (m) / 1000
```

GN3 Table B1 gives milliohms per metre for each conductor size, with single-conductor and combined-pair columns. Read the columns as "conductor one" and "conductor two", not "line" and "protective", and never use the pair value for a single conductor.

|Case|Working|Expected|
|---|---|---|
|10 mm² CPC, 15 m|1.83 × 15 / 1000|0.027 Ω, about 0.03 Ω|
|50 m drum of 10 mm² green/yellow|1.83 × 50 / 1000|0.0915 Ω, about 0.09 Ω|
|1.5 mm² CPC, 10 m|12.1 × 10 / 1000|about 0.12 Ω|
|0.75 mm² flex, 1 m (Code of Practice Appendix 5)|26 × 1 / 1000|0.026 Ω|

Working these out builds a feel for realistic readings. The arithmetic is on [[Ohm's Law and Electrical Calculations]].

### Twin-and-earth CPC sizes

Table B1 marks the CPC in twin-and-earth (T&E) cable with an asterisk:

|T&E (mm²)|1.0|1.5|2.5|4.0|6.0|10|16|
|---|---|---|---|---|---|---|---|
|CPC (mm²)|1.0|1.0|1.5|1.5|2.5|4.0|6.0|

## Test lead compensation

The reading includes the test leads, often 0.5–1.5 Ω. A 1.51 Ω reading with 1.50 Ω leads is really 0.01 Ω; uncompensated, a good conductor looks like a fail.

1. **Subtract:** short the leads together, note their resistance, measure the circuit and subtract.
2. **Null:** short the leads and press the MFT's null or zero button; every later reading is compensated. Faster across many tests.

## Parallel paths

A bonding conductor connected at several points has parallel paths, so its reading comes out falsely low. The course method is to disconnect one end from the main earthing terminal (MET) for the test only, then reconnect.

Correction, 16 October 2026: removing an earthing or bonding conductor can put hazardous touch voltages on exposed- and extraneous-conductive-parts if there is an open PEN fault, and diverted neutral current can come from neighbouring installations; the [IET](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/neutral-current-diversion-ncd-industry-research-update/) describes a clamp-meter check of current in these conductors before and after isolating.

## Pass criteria

- **Circuit protective conductors:** add the measured (R1 + R2) to Ze to get Zs, and compare Zs with the maximum for the protective device from BS 7671 Chapter 41 or the maker's data, reduced for conductor temperature. GN3 Appendix A puts maximum measured values at 80% of the tabulated ones (the IET's ×0.8).
- **Class 1 equipment:** 0.1 Ω + R, where R is the flex protective conductor. For 1 m of 0.75 mm² flex the maximum is 0.126 Ω. Appliance tests are on [[In-Service Testing]].
- **Bonding:** a continuous path with resistance sensible for its size and length, and no corroded or damaged connections. An open circuit is a fail.

Correction, 16 October 2026: there is no general 0.1 Ω pass limit for CPCs; Zs decides ([IET on live testing](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/), [IET on maximum Zs](https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/), [Prysmian 6242Y data](https://datasheet.prysmian.com/pdf/datasheet/en-GB/312416/GB00_6242Y)).

## Procedure

1. Identify the conductor or bonding route.
2. Work out the expected resistance from Table B1.
3. Null the leads or note their resistance.
4. Connect securely at both ends and take the reading.
5. Ask whether it is realistic for the length, then whether it meets the criterion.
6. Record the conductor (for example "CPC ring circuit 1"), the value in ohms and the result on the schedule of test results ([[Electrical Certificates]]).

## Common mistakes

- Reading the wrong Table B1 column, or using the wrong T&E CPC size.
- Not compensating for the leads, so good conductors appear to fail.
- Leaving parallel paths in, so readings are falsely low.
- Using a beeper, or testing only part of the path.
- Not questioning an unrealistic reading.
