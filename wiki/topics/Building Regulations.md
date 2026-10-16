---
title: Building Regulations
type: topic
domain: electrics
sources:
  - electrics/Resources.md
  - clippings/evidence-review-2026-09-22/Electrics.md
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - Part P
  - BS 7671
  - Electrical Safety
  - RCD Protection
  - EIC and MEIWC
  - Electrics - Resources
  - Electrical Evidence Review - September 2026
  - GN3 Guidance Note 3
  - Electrical Study Map
  - Electrical Evidence Review - October 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - building-regulations
  - legislation
  - compliance
  - part-p
  - structural-limits
  - cable-protection
  - safe-zones
summary: "How building law, BS 7671 and Part P notification apply to electrical work, with the corrected concealed-cable rule and the note's structural limits."
reviewed: '2026-10-16'
review_status: partial
review_notes: "Edition status, Part P scope and notification, the concealed-cable claims and the chase limits were checked against IET, BSI, GOV.UK Approved Documents P and A, legislation.gov.uk and HSE; current A4 clause wording, the 0.125 joist-notch figure, the plaster and one-brick shortcuts and the unnamed guide's page numbers remain unchecked."
review_due: '2027-01-14'
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection
    and Testing Demonstration.md
---

# Building Regulations

Electrical work in a building can involve several distinct requirements: building legislation, technical installation standards, safe working duties and certification. [[Part P]] covers the England-specific building-control question; [[BS 7671]] covers the technical requirements. This page sets out how those fit together, what Erlin's study notes say about cable routes and structural limits, and where those notes were wrong or incomplete. These are study notes, not a design reference: for real work, use the current standard and the official guidance linked below.

## Law, guidance and records

- Approved Documents give guidance on how to comply. They are not the statutory requirements themselves. (from [[Electrical Evidence Review - September 2026]])
- GN3 is published by the IET, not HSE. See [[GN3 Guidance Note 3]].
- A qualification, a test certificate and a building-control notification are separate records. Do not use one in place of another. See [[EIC and MEIWC]] for the certificates.

## Part P and notification in England

The note's one-line version: Part P applies where people permanently reside (dwellings). (from [[Electrics - Resources]])

The official guidance is more specific (from [[Electrical Evidence Review - September 2026]]):

- The statutory Part P requirement and Approved Document P are different things; the Approved Document is guidance.
- England's 2013 guidance covers dwellings and specified associated installations, including some business premises that share the dwelling's electricity meter.
- Notifiable work includes new circuits, consumer-unit replacement, and additions or alterations in defined special locations.
- A kitchen location alone is not a blanket trigger for notification.
- Non-notifiable work still has to comply.
- England's notification categories do not carry over to other UK jurisdictions; check their own rules.

## Standards and editions

- IET states BS 7671:2018+A4:2026 is published. The Brown Book with Amendment 3 remained valid until 15 October 2026, and either edition could be used during the transition.
- IET lists Guidance Note 3: Inspection & Testing, tenth edition, and the On-Site Guide, ninth edition, as aligned with A4.

(from [[Electrical Evidence Review - September 2026]])

## Concealed cable routes

Cables buried in walls are protected by a combination of where they run, additional protection, and the construction around them. Getting this wrong means a screw or drill can hit a live cable, so check every condition in the current standard before chasing a wall.

The note's safe zones (from [[Electrics - Resources]]):

- Directly above or below a switch or socket (vertical runs).
- Horizontal runs to accessories.
- Within 150 mm of the ceiling.
- Within 150 mm of corners.

The note's regulation summaries, as written; they are study shorthand, not verified clause text:

- Reg 522.6.202: cables less than 50 mm deep in safe zones must be 30 mA RCD protected.
- Reg 522.5.204: if cables are in earthed metallic covering, conduit, or trunking, an RCD can be avoided.
- Reg 522.6.203: if a circuit is in a stud wall made mainly of metal, 30 mA RCD is required unless Reg 522.6.204 is followed.
- Correction, 16 October 2026, to the 522.6.203 line: [IET's 2015 Wiring Matters article](https://electrical.theiet.org/media/1445/cables-in-walls.pdf) states the requirement applies, irrespective of depth, to a partition with any metallic parts other than fixings such as nails or screws, not only one that is mainly metal. It is seventeenth-edition guidance, so confirm the current A4 wording.

Correction, 22 September 2026: this page once said a cable outside the prescribed zones could be made acceptable simply by adding a 30 mA RCD. That was wrong. An RCD gives additional protection but does not stop a screw or drill from damaging a cable. Routing and permitted protective construction must both satisfy the applicable standard.

- The [IET's 2015 cable article](https://electrical.theiet.org/media/1445/cables-in-walls.pdf) explains the combination of zones, additional protection and permitted alternative construction methods under the seventeenth edition. It is historical evidence for the correction, not a complete A4 design rule.
- Ordinary plastic conduit is not interchangeable with an earthed metallic method or another specifically permitted protective method.
- The note's "522.5.204" number is a source error. It is not carried forward as a verified current clause.

For how RCDs work and what they cannot do, see [[RCD Protection]]. HSE adds that an RCD cannot protect against every shock, and that work should normally be done dead, secured against re-energisation and checked dead. (from [[Electrical Evidence Review - September 2026]])

## Structural limits need construction context

The note lists limits for notches and chases (from [[Electrics - Resources]]):

- Joist notches: maximum depth is 0.125 x joist depth.
- Wall chases: vertical up to 1/3 of wall thickness; horizontal up to 1/6 of wall thickness.
- If wall thickness is unknown, approximate with one brick (about 100 mm of brick depth).
- Exclude plaster thickness because it is not structural.
- Correction, 16 October 2026: [Approved Document A](https://www.gov.uk/government/publications/structure-approved-document-a), paragraph 2C30, limits vertical chases to 1/3 of the wall thickness, or of the leaf in a cavity wall, and horizontal chases to 1/6 of the thickness of the leaf, not of the whole wall; chases must not impair the wall's stability. It gives no joist-notch depth rule.

These fractions come without the conditions, locations and construction types that make them valid, so treat them as a prompt to look up the real rule, not as universal limits. Guessing wall thickness from one brick is not a reliable design basis. Use the relevant structural guidance and the actual construction details.

## Additions and alterations

Assess whether the existing installation is suitable before extending it. A missing or visible conductor at a light fitting is not, on its own, enough to decide compliance.

Correction, 22 September 2026: a light-fitting example once given here was too abbreviated to support a compliance judgement.

The next study references are [[EIC and MEIWC]], [[Electrical Safety]] and the applicable standard.

## Source gaps

- The summary of Electrics Webinar 4 (inspection and testing demonstration) cannot currently be found, and the original webinar transcripts are unavailable, so detailed historical test procedures are not authenticated.
- The note cites an "Electrics guide to Building Regs" at pages 38 and 168. No link or edition is saved, so the page numbers cannot be checked.

## Resources

- [IET — Cables in walls (2015)](https://electrical.theiet.org/media/1445/cables-in-walls.pdf) — IET article on concealed cables: zones, additional protection and alternative construction methods under the seventeenth edition.
- [GOV.UK — Approved Document P](https://www.gov.uk/government/publications/electrical-safety-approved-document-p) — England's official guidance on electrical safety in dwellings; sections 2–3 of the 2013 document cover scope and notification.
- [IET — BS 7671 edition checker](https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/) — Which edition and amendment of the Wiring Regulations is current.
- [IET — BS 7671 and guidance publications](https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/bs-7671-and-guidance/) — IET's list of A4-aligned publications, including GN3 and the On-Site Guide.
- [HSE — Electrical safety FAQs](https://www.hse.gov.uk/electricity/faq.htm) — HSE on working dead and the limits of RCD protection.
- [GOV.UK — Approved Document A: structure](https://www.gov.uk/government/publications/structure-approved-document-a) — England's structural guidance (2004 edition incorporating 2004, 2010 and 2013 amendments); paragraph 2C30 sets the chase-depth limits for walls in small buildings.

## Related

[[Part P]] · [[BS 7671]] · [[Electrical Safety]] · [[RCD Protection]] · [[EIC and MEIWC]] · [[Electrics - Resources]] · [[Electrical Evidence Review - September 2026]] · [[GN3 Guidance Note 3]] · [[Electrical Study Map]] · [[Electrical Evidence Review - October 2026]]
