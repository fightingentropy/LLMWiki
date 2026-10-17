---
title: Ohm's Law and Electrical Calculations
type: topic
domain: electrics
summary: "Ohm's law, power, the 230 V amps-to-watts ready-reckoner, conductor resistance and voltage drop, with worked examples for installation and testing."
tags: [electrics]
related: ["Continuity Testing", "Electrics - Resources", "Electrical Study Map", "Electrical Safety"]
sources:
  - electrics/Resources.md
  - clippings/evidence-review-2026-10-16/Electrics.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
reviewed: '2026-10-16'
review_status: partial
review_notes: "Formulas and worked sums were checked arithmetically and against IET Wiring Matters and IEC 60228 data; the GN3 Table B1 reference was not."
---

# Ohm's Law and Electrical Calculations

The core formulas for installation work and testing: Ohm's law, power, the 230 V rule of thumb, conductor resistance and voltage drop. The three quick relationships in [[Electrics - Resources]] are worked through here.

## Ohm's law

V = I × R, with V in volts, I in amps and R in ohms. Cover the quantity you want in the triangle:

```
    V
  -----
  I | R
```

- V = I × R
- I = V ÷ R
- R = V ÷ I

Uses: circuit current from voltage and load resistance, voltage drop along a conductor, and conductor resistance from a measurement.

## Power

P = V × I. Substituting Ohm's law gives P = I² × R and P = V² ÷ R. Uses: load current, kilowatt demand, and sizing protective devices.

In AC circuits V × I is apparent power in volt-amperes (VA). Power factor (cos φ, from 0 to 1) is active power divided by apparent power, so watts equal V × I only at a power factor of 1. The same limit applies to the 230 V figures below.

Correction, 16 October 2026: P = I × V was given as AC power in watts without the power-factor condition ([IET Wiring Matters on power factor](https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/how-embedded-solar-pv-can-affect-the-power-factor-of-an-installation/)).

## Current at 230 V

Rule of thumb for UK single-phase: 1 kW ≈ 4.35 A, or 230 W ≈ 1 A.

- 3 kW shower: 3 × 4.35 = 13.05 A, about 13 A.
- 6 A circuit: 6 × 230 = 1,380 W, about 1.4 kW.

Use it for quick mental checks on loads, and on whether a breaker or fuse is a sensible size.

|Amps|1|3|5|6|10|13|16|20|32|
|---|---|---|---|---|---|---|---|---|---|
|Watts|230|690|1,150|1,380|2,300|2,990|3,680|4,600|7,360|

## Conductor resistance

R = ρ × L ÷ A: resistivity times length over cross-sectional area. With table values (GN3 Table B1, milliohms per metre at 20 °C):

```
R (Ω) = mΩ/m × length (m) ÷ 1000
```

Example: 10 mm² at 1.83 mΩ/m over 15 m gives 1.83 × 15 ÷ 1000 = 0.027 Ω. More worked cases are on [[Continuity Testing]].

- Copper is the standard; aluminium has higher resistivity.
- Resistance rises with temperature, so running values exceed the 20 °C table figures.
- Doubling the area halves the resistance. This matters most for earth and protective conductors, which must give fault current a low-resistance path.

## Voltage drop and power loss

V_drop = I × R. Example: 20 A through 0.15 Ω loses 3 V. Long runs may need a larger conductor.

Limits come from BS 7671 Regulation 525. Appendix 4 (Table 4Ab) recommends at most 3% for lighting and 5% for other uses on a public low-voltage supply. These values are informative: the real limit depends on the connected equipment, and EV charge points may need 3% ([IET on EV charging](https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/), [IET Amps per Pound](https://electrical.theiet.org/media/2466/wiring-matters-issue-81-july-2020.pdf)).

Correction, 16 October 2026: voltage drop limits were attributed to the Building Regulations; they come from BS 7671.

P_loss = I² × R is the heat lost in a cable. Larger conductors cut it, which matters on long runs.
