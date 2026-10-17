---
title: Electrical Safety
type: topic
domain: electrics
summary: "Working dead, what RCDs, circuit breakers and earthing each do, where RCD protection stops, and what inspection and testing can show."
tags: [electrics]
related: ["Safe Isolation", "Test Equipment Standards", "Building Regulations", "In-Service Testing", "Electrics - Resources"]
aliases: ["RCD Protection"]
sources:
  - electrics/Resources.md
  - clippings/evidence-review-2026-09-22/Electrics.md
  - clippings/evidence-review-2026-10-16/Electrics.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
reviewed: '2026-10-16'
review_status: partial
review_notes: "Working dead, competence and RCD limits were checked against HSE's electrical FAQs, IEC 61008-1 and EAWR 13 and 14; the rest of the merged RCD material is unchecked."
review_due: '2027-01-14'
source_gaps:
  - "raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md"
  - "raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md"
---

# Electrical Safety

Electrical safety starts with knowing the installation, the work and the limits of your competence. No single device makes an installation safe: isolation, cable routing, earthing, overcurrent protection and RCDs each do a different job. This page covers working dead, what each protective measure is for, where an RCD's protection stops, and what inspection and testing can show.

## Working dead

- [HSE](https://www.hse.gov.uk/electricity/faq.htm) says work should normally be done dead: isolated, secured against re-energisation and checked dead. The procedure is on [[Safe Isolation]].
- Maintenance and testing need appropriate competence and suitable equipment. Leads, probes and instruments are on [[Test Equipment Standards]].
- A written isolation sequence does not cover every supply arrangement, and following it does not prove every source is isolated.

## What each measure does

- **RCD:** detects residual current to earth and disconnects, reducing the risk of shock from earth faults.
- **Circuit breaker or fuse:** disconnects on overcurrent and short circuit.
- **Earth (protective) conductor:** gives fault current a low-resistance path if a live part touches metal, so the protective device operates.

The one-line definitions are in [[Electrics - Resources]]. A protective conductor and an overcurrent device do different jobs. Do not reduce every piece of exposed metal to "must be earthed": the protective measure in use and the equipment class decide.

Exposed-conductive-parts belong to equipment and can become live under fault. Extraneous-conductive-parts are not part of the installation but can introduce a potential, usually earth. Whether bonding is needed depends on whether a part really is extraneous.

On the inspection schedule:

- **Basic protection:** insulation of live parts, barriers or enclosures, obstacles, placing out of reach.
- **Additional protection:** an RCD of 30 mA or less, supplementary bonding, or both, depending on the location.

## Where RCD protection stops

- An RCD rated 30 mA or less can reduce harm from some shocks, but it cannot protect against every shock. It never replaces isolation.
- The test button is a functional check. Pressing it does not establish that the installation is safe.
- Rated residual current is not an exact trip point in every condition.
- Trip-time requirements depend on device type, test conditions and the applicable rules.
- A higher-rated upstream RCD is not automatically selective; coordination needs a design.
- An RCD does not make any concealed cable route acceptable. Zones, additional protection and permitted construction methods all apply; see [[Building Regulations]].

Correction, 22 September 2026: earlier notes gave a blanket 100–300 ms trip time, said a 300 mA device lets the 30 mA devices operate first, and treated "metal covering means no RCD" as unconditional. All three were incomplete or misleading.

## Inspection and testing

- Inspection comes first. Many defects, especially on condition reports, are found by looking, not from test results. BS 7671 Appendix 6 and GN3 both give inspection checklists.
- Measurements alone do not make equipment safe; condition, environment and use matter too.
- Some tests can damage what is connected. Insulation resistance testing can harm RCDs, LED lighting and IT equipment, so know what is on the circuit before applying test voltages.
- Record defects and the extent of what was verified. A single reading or a sticker does not prove safety.
- Portable equipment follows a risk-based regime; see [[In-Service Testing]].

## Competence

Qualifications are not the whole picture. Competence means understanding the installation, the equipment connected to it, the instruments, and the requirements of [[BS 7671 and GN3|BS 7671]] and other standards. The Access Training instructor's line: "Every day is a school day." Ask questions, and do not be embarrassed about what you don't know.
