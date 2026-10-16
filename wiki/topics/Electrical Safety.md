---
title: Electrical Safety
type: topic
domain: electrics
sources:
  - electrics/Resources.md
  - clippings/evidence-review-2026-09-22/Electrics.md
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - Safe Isolation
  - Test Equipment Standards
  - GS38
  - RCD Protection
  - Building Regulations
  - In-Service Testing
  - Electrical Study Map
  - Electrical Evidence Review - September 2026
  - Electrics - Resources
  - PAT Testing
  - Part P
  - BS 7671
  - Electrical Evidence Review - October 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - safety
  - electrical-safety
  - hazard-protection
  - risk-assessment
  - competence
  - hse
  - working-dead
summary: "How to work dead, why RCDs, earthing and circuit breakers do different jobs, and how inspection and PAT fit in, with the HSE and IET references."
reviewed: '2026-10-16'
review_status: reviewed
review_notes: "Working dead, competence, RCD limits, GS38 scope and PAT frequency were checked against HSE's electrical and PAT FAQs, GS38 (fourth edition) and Electricity at Work Regulations 1989 regulations 13 and 14, and the conductive-part definitions against IET Wiring Matters and IEC 60050; the point that some tests can damage connected equipment rests on industry guidance because the BS 7671 text is paywalled."
review_due: '2027-01-14'
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection
    and Testing Demonstration.md
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT
    Testing.md
---

# Electrical Safety

Electrical safety starts with understanding the installation, the work and the limits of one's competence. This page covers working dead, how the protective measures fit together, and what inspection and testing can and cannot show. [[Safe Isolation]], [[Test Equipment Standards]] and supervised practical training belong together. These are study notes: for real work, follow the current standard, the official guidance below and supervised training.

## Working dead

- [HSE](https://www.hse.gov.uk/electricity/faq.htm) says work should normally be performed dead: equipment securely isolated, secured against re-energisation and checked dead. (from [[Electrical Evidence Review - September 2026]])
- Maintenance and testing need appropriate competence and suitable equipment.
- [[GS38]] is HSE guidance on suitable test equipment: the leads, probes and voltage indicators used to prove dead.
- A written isolation sequence in an old webinar summary does not cover every supply arrangement, and following it does not prove that all sources have been isolated. See [[Safe Isolation]] for the procedure and its limits.

## Protection measures are complementary

No single device makes an installation safe. RCD protection does not replace isolation, correct cable routing, earthing or the other required measures. An RCD cannot protect against every shock, and pressing its test button does not establish every aspect of installation safety. (from [[Electrical Evidence Review - September 2026]])

- [[RCD Protection]] corrects the old trip-time and selectivity statements.
- Correction, 22 September 2026: a 30 mA RCD alone does not permit arbitrary concealed cable routes outside the prescribed zones. [[Building Regulations]] covers the zones, additional protection and the permitted alternative construction methods.

### What each device is for

The Resources note gives one line per device (from [[Electrics - Resources]]):

- **RCD:** "protects against earth faults and electric shock."
- **Circuit breaker:** "protects against overcurrent and short circuit."
- **Earth cable:** "provides a low-resistance escape route for fault current if live touches metal."

The RCD line needs the HSE limit attached: an RCD cannot protect against every shock.

A protective conductor and an overcurrent device perform different roles. Avoid reducing all exposed metal to "must be earthed": the protective measure in use and the equipment class matter.

### Exposed and extraneous parts

The Resources note defines the two kinds of conductive part that can become hazardous under fault conditions (from [[Electrics - Resources]]):

- **Exposed-conductive-part:** "a conductive part of equipment that can be touched and is not normally live, but can become live under fault conditions."
- **Extraneous-conductive-part:** "a conductive part that can introduce a potential (generally earth potential) and is not part of the electrical installation."

Bonding requirements depend on whether a part is actually extraneous and on the applicable installation rules.

## Inspection and testing

Measurements alone do not make equipment safe.

- The condition of equipment, the environment and the intended use matter alongside measurements.
- Some tests can damage connected equipment. The procedure and limits must match the actual installation and instruments.
- Record defects and the scope of verification. Do not treat a single reading or a sticker as proof of safety.

### Portable equipment

- [HSE's PAT FAQ](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm) explains risk-based maintenance rather than blanket annual testing.
- Maintenance arrangements and inspection and testing intervals depend on risk, use and environment.
- Visual checks matter; some faults require testing.
- A test label is not a guarantee that the equipment remains safe.
- Correction, 16 October 2026: the source for this point is HSE's [INDG236](https://www.hse.gov.uk/pubns/indg236.pdf) leaflet, not the [PAT FAQ](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm). INDG236 says a test indicates an appliance's safety only at the time of the test and does not imply it will stay safe, so user checks must continue; the FAQ says labels and records are not legally required but are a useful management tool.
- See [[In-Service Testing]] and [[PAT Testing]].

## Evidence status

- Source gap: the summaries of Electrics Webinar 4 (the inspection and testing demonstration, and PAT testing) cannot currently be found, and the original webinar transcripts are unavailable.
- Detailed legacy test procedures elsewhere in the wiki remain study notes until compared with the course material and the current standard. [[Electrical Study Map]] gives a focused route through those checks.
- The official references behind this page's corrections are set out in [[Electrical Evidence Review - September 2026]].

## Resources

- [HSE — electrical safety FAQs](https://www.hse.gov.uk/electricity/faq.htm) — HSE's answers on electricity at work, the basis for the rule that work is normally done dead, isolated, secured and checked dead.
- [HSE — portable appliance testing FAQs](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm) — why portable equipment needs risk-based maintenance, not blanket annual testing, and why labels and records are a management tool rather than a legal requirement.
- [HSE INDG236: Maintaining portable electric equipment in low-risk environments](https://www.hse.gov.uk/pubns/indg236.pdf) — HSE's short leaflet on user checks, visual inspection and risk-based testing; says a test shows an appliance's safety only at the time of the test.
- [HSE — GS38](https://www.hse.gov.uk/pubns/books/gs38.htm) — HSE's guidance on electrical test equipment for low-voltage systems: leads, probes and voltage indicators.
- [IET — Cables in walls (2015)](https://electrical.theiet.org/media/1445/cables-in-walls.pdf) — IET article on safe zones, additional RCD protection and the permitted alternative methods for concealed cables. Seventeenth-edition guidance, so use the current BS 7671 text for design decisions.

## Related

[[Safe Isolation]] · [[Test Equipment Standards]] · [[GS38]] · [[RCD Protection]] · [[Building Regulations]] · [[In-Service Testing]] · [[PAT Testing]] · [[Part P]] · [[BS 7671]] · [[Electrics - Resources]] · [[Electrical Study Map]] · [[Electrical Evidence Review - September 2026]] · [[Electrical Evidence Review - October 2026]]
