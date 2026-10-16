---
title: Ohm's Law and Electrical Calculations
type: topic
domain: electrics
sources:
  - electrics/Resources.md
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - RCD Protection
  - Electrics - Resources
  - Electrical Study Map
  - Electrical Safety
  - Continuity Testing
  - Electrical Evidence Review - October 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - formulas
  - calculations
  - ohm-law
  - power
  - electrical-theory
summary: "Worked formulas for Ohm's law, power, conductor resistance, voltage drop and a 230 V amps-to-watts table, with examples for installation and testing."
reviewed: '2026-10-16'
review_status: partial
review_notes: "Formulas, the 230 V figures and every worked sum were checked arithmetically and against the SI Brochure, the ESQCR, IET Wiring Matters and IEC 60228 resistance data; the GN3 Table B1 reference needs the paid book and remains unchecked."
---

# Ohm's Law and Electrical Calculations

Quick reference for the core electrical formulas used in installation work and testing. The notes behind it list three quick relationships: the Ohm's law triangle, the power triangle and the 230 V rule of thumb (from [[Electrics - Resources]]). This page works each one through, then covers conductor resistance, voltage drop and a ready-reckoner of amps against watts.

## Key formulas

| Quantity | Formula | Note |
|----------|---------|------|
| Ohm's law | V = I × R | with triangle method variants |
| Power | P = I × V | |
| Conductor resistance | R = (mΩ/m × length) / 1000 | from table values |
| Rule of thumb | 1 kW ≈ 4.35 A | at 230 V |

The source note gives these as "Ohm's law triangle: V = I x R", "Power triangle: P = I x V" and "Rule of thumb at 230 V: 1 kW is about 4.35 A" (from [[Electrics - Resources]]).

## Ohm's law

The relationship between voltage, current and resistance:

```
V = I × R
```

- **V** = voltage (volts)
- **I** = current (amperes, or amps)
- **R** = resistance (ohms, Ω)

### Triangle method

A triangle helps remember all three forms:

```
      V
    -----
    I | R
```

To find any value, cover the one you want and use the remaining formula shown.

- Voltage: `V = I × R`
- Current: `I = V ÷ R`
- Resistance: `R = V ÷ I`

### Uses

- Determining circuit current from voltage and load resistance
- Calculating voltage drop across a conductor
- Finding the resistance of a conductor from measurements

## Power

Electrical power in AC circuits:

```
P = I × V
```

- **P** = power (watts or kilowatts)
- **I** = current (amperes)
- **V** = voltage (volts)

Correction, 16 October 2026: in AC circuits V × I gives apparent power (VA). Power factor (cos φ, from 0 to 1) is the ratio of active to apparent power, so watts equal V × I only at a power factor of 1; the same limit applies to the amps-to-watts figures below ([IET Wiring Matters — How embedded solar PV can affect the power factor of an installation](https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/how-embedded-solar-pv-can-affect-the-power-factor-of-an-installation/)).

### Combining with Ohm's law

Substituting V = I × R:

```
P = I × V = I × (I × R) = I² × R
```

Also:

```
P = V² ÷ R
```

### Uses

- Power consumption of circuits
- Kilowatt requirements for an installation
- Sizing protective devices based on load
- Load current given power and voltage

## Rule of thumb: current at 230 V

A quick estimate for domestic AC circuits. At 230 V (single-phase AC supply in the UK):

```
1 kW ≈ 4.35 A
```

Inverse:

```
230 W ≈ 1 A
```

**Example 1**, a 3 kW shower:

```
3 × 4.35 = 13.05 A (approximately 13 A)
```

**Example 2**, a 6 A circuit in a dwelling:

```
6 × 230 = 1,380 W ≈ 1.4 kW
```

Why it is useful:

- Quick mental calculation without a calculator
- Checks whether calculated values are reasonable
- Shows whether a selected circuit breaker or fuse is appropriate
- Rough load estimation for installation design

## Common values at 230 V single-phase (UK)

Reference values for quick mental calculation:

| Amps | Watts | Kilowatts |
|------|-------|-----------|
| 1 A | 230 W | 0.23 kW |
| 3 A | 690 W | 0.69 kW |
| 5 A | 1,150 W | 1.15 kW |
| 6 A | 1,380 W | 1.38 kW |
| 10 A | 2,300 W | 2.3 kW |
| 13 A | 2,990 W | 2.99 kW (≈3 kW) |
| 16 A | 3,680 W | 3.68 kW |
| 20 A | 4,600 W | 4.6 kW |
| 32 A | 7,360 W | 7.36 kW |

## Conductor resistance

Used in [[Continuity Testing]] and fault loop impedance calculations. The notes describe the earth cable as providing "a low-resistance escape route for fault current if live touches metal" (from [[Electrics - Resources]]), which is why conductor resistance is critical for earth and protective conductors.

### Formula

```
R = (ρ × L) / A
```

- **R** = resistance (ohms)
- **ρ** (rho) = resistivity of the conductor material
- **L** = length of conductor (metres)
- **A** = cross-sectional area (mm²)

For standard tables, the more common form is:

```
R = (milliohms per metre × length in metres) / 1000
```

- **mΩ/m** = milliohms per metre (from tables)

### Table approach (GN3 Table B1)

The most practical method uses standard conductor resistance tables:

1. Identify the conductor size (mm²).
2. Find the resistance per metre (milliohms/metre) in the table.
3. Multiply by the conductor length.
4. Divide by 1000 to get ohms.

**Example**, 10 mm² conductor, 15 m length:

```
R = (1.83 mΩ/m × 15 m) / 1000
R = 27.45 / 1000
R = 0.027 Ω
```

### What affects resistance

- **Conductor type:** different materials have different resistivity.
  - Copper is the standard for electrical installations.
  - Aluminium has higher resistivity and is less common in domestic work.
- **Temperature:** resistance increases with temperature.
  - Table values are at 20°C.
  - Actual resistance is higher at operating temperature.
  - This may be compensated for in circuit design.
- **Conductor size:** a larger cross-section means lower resistance.
  - Doubling the conductor area halves the resistance.
  - Critical for earth and protective conductors.

## Voltage drop and power loss

### Voltage drop

Voltage lost in a conductor because of its resistance:

```
V_drop = I × R
```

That is, voltage drop (V) = current (I) × conductor resistance (R).

- Long cable runs can lose significant voltage.
- A larger conductor may be needed to minimise the drop.
- Building Regulations specify a maximum voltage drop.

Correction, 16 October 2026: voltage drop limits come from BS 7671, not the Building Regulations. Regulation 525 applies, and Appendix 4 (Table 4Ab) recommends maxima of 3% for lighting and 5% for other uses on a public low-voltage supply; these values are informative, as the real limit depends on the connected equipment ([IET Wiring Matters — How voltage drop can affect EV charging point open PEN detection devices](https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/); [IET Wiring Matters, July 2020 — Amps per Pound](https://electrical.theiet.org/media/2466/wiring-matters-issue-81-july-2020.pdf)).

**Example**, 20 A through a 0.15 Ω conductor:

```
V_drop = 20 × 0.15 = 3 V
```

### Power loss

Power dissipated as heat in the conductor:

```
P_loss = I² × R
```

- Causes heating in cables
- Causes efficiency loss
- Larger conductors reduce the loss
- Matters in cable design for long runs

## Where the calculations apply

- Circuit design and protection device selection
- Conductor sizing and voltage drop
- Fault current calculations
- Continuity testing expected values
- Installation load assessment

## Links

- [IET Wiring Matters — How embedded solar PV can affect the power factor of an installation](https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/how-embedded-solar-pv-can-affect-the-power-factor-of-an-installation/) — IET article (September 2025) defining apparent, active and reactive power and power factor as cos φ.
- [IET Wiring Matters — How voltage drop can affect EV charging point open PEN detection devices](https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/) — IET article (July 2023) on where BS 7671 puts voltage drop (Regulation 525, Appendix 4 Table 4Ab) and why 3% may be needed for EV charge points.
- [IET Wiring Matters, July 2020 — Amps per Pound](https://electrical.theiet.org/media/2466/wiring-matters-issue-81-july-2020.pdf) — IET article on cable sizing for energy loss (I²R) and the history of voltage drop limits, ending at 3% for lighting and 5% for other uses.

## Related

[[Electrics - Resources]] · [[Electrical Study Map]] · [[Electrical Safety]] · [[Continuity Testing]] · [[RCD Protection]] · [[Electrical Evidence Review - October 2026]]
