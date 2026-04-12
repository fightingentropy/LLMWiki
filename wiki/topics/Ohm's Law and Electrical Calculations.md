---
title: Ohm's Law and Electrical Calculations
type: topic
domain: electrics
sources: [raw/electrics/Resources.md]
related: [Circuit Protection, Power Calculations, Resistance Calculations, Conductor Properties]
created: 2026-04-12
updated: 2026-04-12
tags: [formulas, calculations, ohm-law, power, electrical-theory]
---

# Ohm's Law and Electrical Calculations

Quick reference for core electrical formulas and calculations used in electrical installation work and testing.

## Ohm's Law

Fundamental relationship between voltage, current, and resistance:

### Formula

```
V = I × R
```

Where:
- **V** = Voltage (measured in volts)
- **I** = Current (measured in amperes or amps)
- **R** = Resistance (measured in ohms, Ω)

### Triangle Method

Visual representation helps remember all three forms:

```
      V
    -----
    I | R
```

**To find any value**:
- Cover the value you want
- Use the remaining formula shown

**Form 1** (voltage):
```
V = I × R
```

**Form 2** (current):
```
I = V ÷ R
```

**Form 3** (resistance):
```
R = V ÷ I
```

### Practical Application

Common scenarios:
- Determining circuit current given voltage and load resistance
- Calculating voltage drop across a conductor
- Finding resistance of a conductor from measurements

## Power Calculation

Electrical power in AC circuits:

### Formula

```
P = I × V
```

Where:
- **P** = Power (measured in watts or kilowatts)
- **I** = Current (measured in amperes)
- **V** = Voltage (measured in volts)

### Relationship to Ohm's Law

Combining with Ohm's law (V = I × R):

```
P = I × V = I × (I × R) = I² × R
```

Also:

```
P = V² ÷ R
```

### Practical Application

Determining:
- Power consumption of circuits
- Kilowatt requirements for installation
- Sizing of protective devices based on load
- Load current given power and voltage

## Rule of Thumb: Current at 230 V

Quick estimate for domestic AC circuits:

### Standard Calculation

At 230 V (single-phase AC supply in UK):

```
1 kW ≈ 4.35 A
```

**Inverse**: 
```
230 W ≈ 1 A
```

### Using the Rule

**Example 1**: 3 kW shower
```
3 × 4.35 = 13.05 A (approximately 13 A)
```

**Example 2**: 6 A circuit in dwelling
```
6 × 230 = 1,380 W ≈ 1.4 kW
```

### Why Useful

- Quick mental calculation without calculator
- Verify if calculated values are reasonable
- Assess if selected circuit breaker/fuse is appropriate
- Rough load estimation for installation design

## Resistance Calculations for Conductors

Used in [[Continuity Testing]] and fault loop impedance calculations:

### Formula

```
R = (ρ × L) / A
```

Or more commonly for standard tables:

```
R = (milliohms per meter × length in meters) / 1000
```

Where:
- **R** = Resistance (ohms)
- **ρ** (rho) = Resistivity of conductor material
- **L** = Length of conductor (meters)
- **A** = Cross-sectional area (mm²)
- **mΩ/m** = Milliohms per meter (from tables)

### Table Approach (GN3 Table B1)

Most practical approach uses standard conductor resistance tables:

1. Identify conductor size (mm²)
2. Find resistance value per meter (milliohms/meter) in table
3. Multiply by conductor length
4. Divide by 1000 to get ohms

**Example**: 10 mm² conductor, 15 m length
```
R = (1.83 mΩ/m × 15 m) / 1000
R = 27.45 / 1000
R = 0.027 Ω
```

### Factors Affecting Resistance

**Conductor type**: Different materials have different resistivity
- Copper: Standard for electrical installations
- Aluminum: Higher resistivity, less common in domestic

**Temperature**: Resistance increases with temperature
- Table values at 20°C
- Actual resistance higher at operating temperature
- May be compensated in circuit design

**Conductor size**: Larger cross-section = lower resistance
- Doubling conductor area halves resistance
- Critical for earth/protective conductors

## Voltage and Current Relationships

### Voltage Drop

Voltage lost in conductor due to resistance:

```
Voltage drop (V) = Current (I) × Conductor resistance (R)
V_drop = I × R
```

**Practical importance**:
- Long cable runs can lose significant voltage
- May need larger conductor to minimize drop
- Building Regulations specify maximum voltage drop

**Example**: 20 A current in 0.15 Ω conductor
```
V_drop = 20 × 0.15 = 3 V
```

### Power Loss

Power dissipated as heat in conductor:

```
P_loss = I² × R
```

**Practical impact**:
- Heating in cables
- Efficiency loss
- Larger conductors reduce loss exponentially
- Important in cable design for long runs

## Common Electrical Values (230 V Single-Phase UK)

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

## Summary

**Key formulas to remember**:
- **Ohm's Law**: V = I × R (with triangle method variants)
- **Power**: P = I × V
- **Resistance**: R = (mΩ/m × length) / 1000
- **Rule of thumb**: 1 kW ≈ 4.35 A at 230 V

**Application areas**:
- Circuit design and protection device selection
- Conductor sizing and voltage drop
- Fault current calculations
- Continuity testing expected values
- Installation load assessment
