---
title: Electrics - Resources
type: source
domain: electrics
sources:
  - electrics/Resources.md
  - clippings/evidence-review-2026-09-22/Electrics.md
  - snapshots/1790109058909-4d616a72b2e3/electrics/Resources.md
related:
  - Electrical Safety
  - Building Regulations
  - RCD Protection
  - BS 7671
  - Part P
  - Ohm's Law and Electrical Calculations
  - Electrical Study Map
  - Electrical Evidence Review - September 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - electrics
  - formulas
  - building-regulations
  - protection-devices
  - cable-routing
  - structural-limits
  - tools
  - training
summary: "Core electrical formulas, definitions, RCD and cable-zone rules, chase limits, and Hilti tool and training links, with corrections to incomplete rules."
reviewed: '2026-09-22'
review_status: partial
review_notes: "Edition, scope and the stated corrections were checked against IET, GOV.UK and HSE references; the book page numbers and detailed historical procedures were not."
review_due: '2026-10-15'
---

# Electrics - Resources

Erlin's quick-reference note for electrical study: core formulas, two definitions, what each protection device does, cable-route regulations, structural limits for notches and chases, and page references in a Building Regs guide. It also keeps a shortlist of Hilti cutting tools, a commercial lighting site and a training provider. Several rules in the note are incomplete; each correction sits with the rule it affects. These are study notes, not design rules: check the current [[BS 7671]] text and its conditions before applying any of them.

## Core formulas

The note's quick relationships for basic calculations:

| Relationship | Formula | Note |
|---|---|---|
| Ohm's law triangle | V = I x R | Voltage, current and resistance for the applicable circuit model. |
| Power triangle | P = I x V | Real power for DC or unity power factor. |
| Rule of thumb at 230 V | 1 kW is about 4.35 A | Follows from P = I x V at 230 V. |

P = V × I is not a universal AC load rule. The 1 kW ≈ 4.35 A rule of thumb assumes the DC or unity-power-factor context. [[Ohm's Law and Electrical Calculations]] works through these formulas in more depth.

## Key definitions

These terms describe parts that can become hazardous under fault conditions.

- **Exposed-conductive-part**: a conductive part of equipment that can be touched and is not normally live, but can become live under fault conditions.
- **Extraneous-conductive-part**: a conductive part that can introduce a potential (generally earth potential) and is not part of the electrical installation.

The two definitions raise different questions about protection. [[Electrical Safety]] explains why equipment class and installation context matter.

## Protection devices and earthing

What the note says each protection measure is intended to handle:

- **RCD**: protects against earth faults and electric shock.
- **Circuit breaker**: protects against overcurrent and short circuit.
- **Earth cable**: provides a low-resistance escape route for fault current if live touches metal.

HSE says an RCD cannot protect against every shock, and pressing its test button does not establish every aspect of installation safety ([HSE electrical FAQs](https://www.hse.gov.uk/electricity/faq.htm), from [[Electrical Evidence Review - September 2026]]). [[RCD Protection]] covers the device's limits.

## Regulations and scope

The note's list of where specific regulations and protections apply:

- **Part P**: applies where people permanently reside (dwellings).
- **Reg 522.6.202**: cables less than 50 mm deep in safe zones must be 30 mA RCD protected.
- **Reg 522.5.204**: if cables are in earthed metallic covering, conduit, or trunking, an RCD can be avoided.
- **Reg 522.6.203**: if a circuit is in a stud wall made mainly of metal, 30 mA RCD is required unless Reg 522.6.204 is followed.

Correction, 22 September 2026: the RCD and cable-zone statements need their full conditions. The note's "522.5.204" reference is unverified and should not be copied as a current clause. Its "metal covering means no RCD" exception also omits conditions, and plastic conduit alone is not equivalent to an earthed metallic or other specifically permitted protective method.

On scope, England's Approved Document P is guidance on the statutory Part P requirement. Its 2013 edition covers dwellings and specified associated installations, including some business premises that share the dwelling's electricity meter ([GOV.UK Approved Document P](https://www.gov.uk/government/publications/electrical-safety-approved-document-p)). See [[Part P]].

## Cable routes and safe zones

Guidance for routing to avoid damage and ensure compliance:

- **Safe zones**: directly above/below a switch or socket (vertical), horizontal runs to accessories, within 150 mm of the ceiling, and within 150 mm of corners.

Correction, 22 September 2026: a 30 mA RCD alone does not permit an arbitrary concealed route outside the prescribed zones. The [IET article on cables in walls (2015)](https://electrical.theiet.org/media/1445/cables-in-walls.pdf) explains how zones, additional protection and permitted alternative construction methods combine; it was written under the seventeenth edition, so it cannot settle current clause details. [[Building Regulations]] and [[RCD Protection]] carry the full correction.

## Structural limits for notches and chases

The note's limits for notches and chases to maintain structural integrity:

- **Joist notches**: maximum depth is 0.125 x joist depth.
- **Wall chases**: vertical up to 1/3 of wall thickness; horizontal up to 1/6 of wall thickness.
- If wall thickness is unknown, approximate with one brick (about 100 mm of brick depth).
- Exclude plaster thickness because it is not structural.

Correction, 22 September 2026: these fractions omit the construction and location conditions they depend on. Guessing structural wall thickness from one brick is not a reliable design method; use the relevant structural guidance and the actual construction. See [[Building Regulations]].

## Book references

- Electrics guide to Building Regs: pages 38 and 168. The note gives no edition, so the page numbers cannot be checked.
- Floors and ceilings notes (placeholder topic for expansion).

IET states BS 7671:2018+A4:2026 is published, with the Amendment 3 edition valid until 15 October 2026 (from [[Electrical Evidence Review - September 2026]]). See [[BS 7671]] for editions and [[Part P]] for scope.

## Equipment and training links

A shortlist of research leads, not yet evaluated: check product suitability, specifications and training accreditation before buying or enrolling.

### Lighting

- [Lutron commercial lighting](https://commercial.lutron.com/uk/en/home) — Lutron's UK commercial site; a reference for commercial lighting and controls.

### Hilti cutting tools

- [Hilti SC 6ML-22 metal circular saw](https://www.hilti.co.uk/c/CLS_POWER_TOOLS_7125/CLS_SAWS_7125/r17484560?itemCode=2315446&activeTab=mini-configurator-tab) — Hilti UK product page for a metal-cutting circular saw; the note marks it to evaluate alongside the other Hilti tools.
- [Hilti SC 4MR-22 circular saw](https://www.hilti.co.uk/c/CLS_POWER_TOOLS_7125/CLS_SAWS_7125/r17654785?itemCode=2351363&activeTab=mini-configurator-tab) — Hilti UK product page for a circular saw.
- [Hilti SB 6-22 deep-cut band saw](https://www.hilti.co.uk/c/CLS_POWER_TOOLS_7125/CLS_SAWS_7125/r17416897?itemCode=2326050&activeTab=mini-configurator-tab) — Hilti UK product page for a deep-cut band saw.
- [Hilti SB 4-22 portable band saw](https://www.hilti.co.uk/c/CLS_POWER_TOOLS_7125/CLS_SAWS_7125/r13250376?itemCode=2240543&activeTab=mini-configurator-tab) — Hilti UK product page for a portable band saw.
- [Hilti AG 6D-22 angle grinder](https://www.hilti.co.uk/c/CLS_POWER_TOOLS_7125/CLS_GRINDERS_SANDERS_7125/r13009534?itemCode=2215454&activeTab=mini-configurator-tab) — Hilti UK product page for an angle grinder.

### Training

- [ElectricianTraining.co.uk](https://electriciantraining.co.uk/) — Electrical training site, saved as a training reference.

Use [[Electrical Study Map]] to connect a training choice to the knowledge and assessment it needs to cover.

## Related

[[Electrical Safety]] · [[Building Regulations]] · [[RCD Protection]] · [[BS 7671]] · [[Part P]] · [[Ohm's Law and Electrical Calculations]] · [[Electrical Study Map]] · [[Electrical Evidence Review - September 2026]]
