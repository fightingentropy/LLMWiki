---
title: RCD Protection
type: entity
domain: electrics
sources:
  - electrics/Resources.md
  - clippings/evidence-review-2026-09-22/Electrics.md
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - Building Regulations
  - BS 7671
  - GN3 Guidance Note 3
  - Electrical Safety
  - Electrical Evidence Review - September 2026
  - Electrics - Resources
  - Safe Isolation
  - GS38
  - Electrical Evidence Review - October 2026
created: '2026-04-12'
updated: '2026-10-15'
tags:
  - protection
  - rcd
  - residual-current-device
  - earth-fault
  - electrical-safety
  - concealed-cables
summary: "What an RCD does and does not protect against, with corrections to earlier notes on 30 mA protection, trip times, selectivity and concealed cables."
reviewed: '2026-10-16'
review_status: partial
review_notes: "RCD limits, test button, rated versus trip current, trip times and selectivity were checked against HSE's electrical FAQs, IEC 61008-1:2024 and BEAMA's RCD bulletin, and the concealed-cable claims against IET's 2015 Wiring Matters article; current BS 7671:2018+A4:2026 wording of Regulations 522.6.202 to 522.6.204 is paywalled and unchecked."
review_due: '2027-01-14'
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection
    and Testing Demonstration.md
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT
    Testing.md
---

# RCD Protection

An RCD (residual current device) detects residual current and disconnects under specified conditions. It does not protect against every type of electric shock. Device selection, coordination and verification depend on the installation and the applicable standard. This page holds what an RCD is for, where its protection stops, and the corrections made to earlier notes about it.

## Key ideas

- **What it is for.** The Resources note gives the split of roles: "RCD: protects against earth faults and electric shock." A circuit breaker "protects against overcurrent and short circuit", and the earth cable "provides a low-resistance escape route for fault current if live touches metal". (from [[Electrics - Resources]])
- **Protection has limits.** This qualifies the note's "protects against ... electric shock" line: [HSE guidance](https://www.hse.gov.uk/electricity/faq.htm) explains that an RCD rated no more than 30 mA can reduce harm from certain shocks, but it cannot protect against every shock. Secure isolation is still required before work.
- **Work dead.** HSE says work should normally be done with equipment dead, secured against re-energisation and checked dead. See [[Safe Isolation]]. Maintenance and testing need appropriate competence and suitable equipment ([HSE GS38](https://www.hse.gov.uk/pubns/books/gs38.htm); see also [[GS38]]).
- **The test button is a functional check.** Pressing it does not establish every aspect of installation safety.
- **Use the right reference.** [[BS 7671]] gives the current requirements and [[GN3 Guidance Note 3]] covers verification. [[Electrical Evidence Review - September 2026]] records what was checked.

## Concealed cables and RCDs

The Resources note makes three claims about cables in walls (from [[Electrics - Resources]]):

- Reg 522.6.202: cables less than 50 mm deep in safe zones must be 30 mA RCD protected.
- Reg 522.5.204: if cables are in earthed metallic covering, conduit or trunking, an RCD can be avoided.
- Reg 522.6.203: if a circuit is in a stud wall made mainly of metal, a 30 mA RCD is required unless Reg 522.6.204 is followed.

The note defines the safe zones as directly above or below a switch or socket (vertical), horizontal runs to accessories, within 150 mm of the ceiling, and within 150 mm of corners.

The September 2026 evidence review flags 522.5.204 as a source error and does not treat it as a verified current clause. It says nothing about the other clause numbers. For a design decision, use the applicable current [[BS 7671]] text and its conditions. [[Building Regulations]] covers the statutory side.

## Corrections to earlier notes

Corrections made 22 September 2026 against HSE and IET sources.

- **30 mA is not a blanket permission.** A 30 mA RCD does not, by itself, permit concealed wiring outside prescribed zones. IET's 2015 article explains the combination of zones, additional protection and permitted alternative construction methods. That article is historical guidance under the seventeenth edition and cannot establish every current A4 clause detail.
- **Rated current is not an exact trip point.** Rated residual current is not a promise to trip at exactly that current in every condition.
- **Trip times.** Trip-time requirements depend on device type, test conditions and the applicable rules. The earlier blanket "100–300 ms" statement was incomplete.
- **Selectivity.** A higher-rated device is not automatically selective. The earlier claim that a 300 mA device lets upstream 30 mA devices operate first was misleading; coordination needs an actual design.
- **The metal-covering exception.** The note's generic "metal covering means no RCD" exception omitted conditions and other reasons an RCD may be required. Plastic conduit alone is not equivalent to an earthed metallic or other specifically permitted protective method.
- Correction, 16 October 2026, to the note's Reg 522.6.203 line ("a stud wall made mainly of metal"): [IET's 2015 Wiring Matters article](https://electrical.theiet.org/media/1445/cables-in-walls.pdf) states the requirement applies, irrespective of depth, to a partition with any metallic parts other than fixings such as nails or screws, not only one that is mainly metal. It is seventeenth-edition guidance, so confirm the current A4 wording.

## Source gaps

The Electrics Webinar 4 summaries on inspection and testing demonstration and on PAT testing cannot currently be found. Detailed historical test procedures from them have not been authenticated.

## Links

- [HSE electrical FAQs](https://www.hse.gov.uk/electricity/faq.htm) — HSE's answers on electrical safety. The source for the RCD limits above: a 30 mA RCD reduces harm from certain shocks but is not complete protection, and work should be done dead.
- [HSE GS38](https://www.hse.gov.uk/pubns/books/gs38.htm) — HSE's publication page for GS38, its guidance on electrical test equipment. Cited for safe testing practice.
- [IET — Cables in walls (2015)](https://electrical.theiet.org/media/1445/cables-in-walls.pdf) — IET article on how zones, additional protection and permitted alternative construction methods combine for concealed cables. Written for the seventeenth edition.

## Related

[[Building Regulations]] · [[BS 7671]] · [[GN3 Guidance Note 3]] · [[Electrical Safety]] · [[Electrical Evidence Review - September 2026]] · [[Electrics - Resources]] · [[Safe Isolation]] · [[GS38]] · [[Electrical Evidence Review - October 2026]]
