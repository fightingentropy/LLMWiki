---
title: EICR
type: topic
domain: electrics
sources:
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - EIC and MEIWC
  - Building Regulations
  - Part P
  - Electrical Safety
  - BS 7671
  - GN3 Guidance Note 3
  - In-Service Testing
  - Inspection and Testing Fundamentals
  - Electrical Study Map
  - BS EN 61557
  - Electrical Evidence Review - October 2026
created: 2026-04-18T00:00:00.000Z
updated: '2026-10-15'
tags:
  - uk-regs
  - standards
  - electrical-safety
  - eicr
  - condition-report
  - periodic-inspection
  - landlord
summary: "What an Electrical Installation Condition Report is, how C1, C2, C3 and FI codes decide Satisfactory or Unsatisfactory, and what landlords must do."
source_gaps:
  - >-
    raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection
    and Testing Demonstration.md
reviewed: '2026-10-16'
review_status: partial
review_notes: "Report contents and observation codes were checked against the IET BS 7671:2018+A4:2026 and A2:2022 model EICRs and Wiring Matters, and landlord duties against SI 2020/312 as amended, GOV.UK guidance and Scottish and Welsh sources; GN3 chapter numbers and the BS 7671 test-instrument clause need the paid texts and remain unchecked."
---

# EICR

The **Electrical Installation Condition Report** (EICR) is the formal document produced by a periodic inspection and test of an existing fixed electrical installation. It reports on the condition of an installation in use. It does not certify new work. The notes use the "MOT analogy" for it: like an MOT, it is a check of something already in service.

This page covers what an EICR is for, how it differs from the certificates for new work, the observation codes that decide the outcome, the landlord rules in England, what a compliant report contains, and who can sign one.

Safety caveat: check the current regulations and [[BS 7671]] before relying on the landlord duties or report contents below.

## EICR, EIC and MEIWC

- **EIC**: certifies a new circuit or new installation (see [[EIC and MEIWC]]).
- **MEIWC**: covers alterations or additions to one existing circuit.
- **EICR**: a condition report on an existing installation. No new work is involved.

The split comes from the source notes: *"Initial verification: Certification of new work... Condition reporting/EICR: Reporting on existing installations in use (like MOT analogy)"* (from [[Inspection and Testing Fundamentals]]).

## What an EICR answers

An EICR answers one question: is this existing installation safe for continued use?

It records:

- General installation characteristics: supply, earthing, bonding, distribution.
- Visual inspection results against the schedule of conditions.
- Dead and live test results.
- Observations and their classification codes.
- The overall assessment: **Satisfactory** or **Unsatisfactory**.
- The recommended date for the next inspection.

## Observation codes

Each defect or deviation found gets a code.

| Code | Meaning | Action | Effect on the report |
| --- | --- | --- | --- |
| **C1** | Danger present. Risk of injury. | Immediate remedial action required. | Any C1 makes the report Unsatisfactory. |
| **C2** | Potentially dangerous. | Urgent remedial action required. | Any C2 makes the report Unsatisfactory. |
| **C3** | Improvement recommended. Not dangerous, but worth fixing, for example because it brings the installation closer to current [[BS 7671]]. | Recommended. | C3s do not by themselves make a report Unsatisfactory. |
| **FI** | Further investigation required, without delay. Something could not be fully assessed and needs following up. | Investigate. | FI makes the report Unsatisfactory. |

A report is **Satisfactory** only when there are no C1, C2 or FI observations.

Correction, 16 October 2026: the [IET model EICR for BS 7671:2018+A4:2026](https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf) words FI as "Further investigation is advised" and states that C3 and FI observations are advisory and do not affect the overall assessment, so only a C1 or C2 makes the report Unsatisfactory. The FI row above follows the superseded [A2:2022 model EICR](https://electrical.theiet.org/media/2819/bs7671-eicr.pdf), which used "required without delay" and marked FI as unsatisfactory. [Wiring Matters, July 2026](https://electrical.theiet.org/wiring-matters/years/2026/110-july-2026/further-investigation/) explains the change.

## Landlord requirements (private rented sector)

The **Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020** require private landlords to:

- Have the fixed electrical installation inspected and tested by a qualified person **at least every 5 years**, or more often if the previous EICR recommends sooner.
- Obtain an EICR and supply a copy to:
  - each new tenant before occupation;
  - existing tenants within 28 days of inspection;
  - the local authority within 7 days on request.
- Carry out any remedial work for C1, C2 or FI observations within **28 days** (or sooner if specified), and obtain written confirmation that the installation is now safe.
- Correction, 16 October 2026: [regulation 3](https://www.legislation.gov.uk/uksi/2020/312/regulation/3) requires written confirmation from a qualified person that the standards are met or that further work is needed, sent with the report to each existing tenant and the local housing authority within 28 days of the work being completed. [GOV.UK guidance](https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance) (1 November 2025) still treats FI as needing investigative work within 28 days, while the A4:2026 model EICR treats FI as advisory; the two sources now differ.
- Retain the EICR and provide it to the next inspector.

Similar (but not identical) regimes apply in Scotland, Wales, and for HMOs.

Correction, 16 October 2026: in England, HMOs fall within these same regulations. [S.I. 2025/1043](https://www.legislation.gov.uk/uksi/2025/1043/contents) extended them to social landlords and renamed them the Electrical Safety Standards in the Private Rented Sector and Social Rented Sector (England) Regulations 2020; the GOV.UK guidance applies them to new social tenancies from 1 December 2025 and to existing social tenancies from 1 May 2026. Scotland ([Repairing Standard guidance](https://www.gov.scot/publications/repairing-standard-statutory-guidance-private-landlords/pages/16/)) and Wales ([2022 fitness regulations, regulation 6](https://www.legislation.gov.uk/wsi/2022/6/regulation/6)) set their own rules, each requiring inspection at least every five years.

The EICR duty runs in parallel to the Part P notification regime. It is a separate statutory requirement for landlords (see [[Building Regulations]] and [[Part P]]).

## Format and content

A compliant EICR includes, at minimum:

- Client, installation address, and purpose of the report.
- Extent and limitations of the inspection, agreed with the client in advance.
- Installation characteristics: supply type, earthing arrangement (TN-C-S, TN-S, TT), number of live conductors, nominal voltage, prospective fault current, external earth fault loop impedance (Ze), and maximum demand.
- Schedule of inspections (visual) with ticks, crosses and N/A, plus codes.
- Correction, 16 October 2026: on the A4:2026 model EICR this is the Schedule of Inspection; each item is recorded as a tick, C1 or C2, C3, FI, N/V (not verified), LIM (limitation) or N/A, and an "X" is used only for inadequate intake equipment.
- Schedule of test results per circuit. Instruments that meet [[BS EN 61557]] are the ones used to fill it in.
- Summary of the condition of the installation.
- Observations and recommendations with C1/C2/C3/FI codes.
- Declaration by the inspector: name, signature, qualifications.
- Correction, 16 October 2026: the A4:2026 model EICR declaration asks for name, signature, organisation, position, address and date, in one block for the inspector and one for the person authorising the report for issue; it has no field for qualifications.
- Date of inspection and recommended date of next inspection.

See the model forms in [[GN3 Guidance Note 3]] Chapter 5.

## Who can produce an EICR

From the source notes: *"With relevant qualifications and genuine competence/experience, a person can sign: EIC, MEIWC, EICR."* (from [[Inspection and Testing Fundamentals]])

Competence, not just a certificate, is the real requirement. See [[Electrical Safety]] on the competence framework.

## Where EICR sits in this wiki

- [[EIC and MEIWC]] contrasts EICR with new-work certification.
- [[Building Regulations]] and [[Part P]] cover the notification regime that EICR runs alongside.
- [[In-Service Testing]] is related but distinct: portable equipment, not the fixed installation.
- [[Electrical Study Map]] sets EICR against EIC and MEIWC as a study exercise.

## References

- Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020.
- [[BS 7671]] Chapter 65 (periodic inspection and testing).
- [[GN3 Guidance Note 3]] Chapter 3 (periodic inspection) and Chapter 5 (model forms).
- [IET model forms for BS 7671](https://electrical.theiet.org/bs-7671/model-forms/) — the IET's free blank EIC, MEIWC and EICR downloads for A4:2026 and earlier editions.
- [IET model EICR, BS 7671:2018+A4:2026](https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf) — the current condition report with its schedules, code definitions and guidance for recipients; C3 and FI do not affect the overall assessment.
- [IET model EICR, BS 7671:2018+A2:2022](https://electrical.theiet.org/media/2819/bs7671-eicr.pdf) — the superseded form; shows the earlier FI wording and its link to an unsatisfactory result.
- [Wiring Matters: Implications of BS 7671:2018+A4:2026 on EICRs](https://electrical.theiet.org/wiring-matters/years/2026/110-july-2026/further-investigation/) — IET article (July 2026) on why FI was decoupled from C1 and C2 and when FI is misused.
- [Electrical Safety Standards Regulations 2020, regulation 3](https://www.legislation.gov.uk/uksi/2020/312/regulation/3) — the landlord duties as amended: five-year interval, report deadlines, 28-day remedial work and written confirmation.
- [S.I. 2025/1043](https://www.legislation.gov.uk/uksi/2025/1043/contents) — the 2025 amendment that extends the England regulations to social landlords.
- [GOV.UK: Electrical safety standards in the private and social rented sectors](https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance) — England guidance (1 November 2025) on who is covered, what each code requires, deadlines and penalties.
- [Repairing Standard statutory guidance, Annex D3](https://www.gov.scot/publications/repairing-standard-statutory-guidance-private-landlords/pages/16/) — Scotland's electrical inspection rules for private landlords: EICR and appliance testing at least every five years.
- [Renting Homes (Fitness for Human Habitation) (Wales) Regulations 2022, regulation 6](https://www.legislation.gov.uk/wsi/2022/6/regulation/6) — Wales: landlords must hold a valid electrical condition report, at most five years old, and give a copy to the contract-holder within 14 days.

Source gap: this page draws on a webinar summary, "Summary - Electrics Webinar 4 Inspection and Testing Demonstration", which can no longer be found; its chapter references and test details have not been checked against current material.

## Related

[[EIC and MEIWC]] · [[Building Regulations]] · [[Part P]] · [[Electrical Safety]] · [[BS 7671]] · [[GN3 Guidance Note 3]] · [[In-Service Testing]] · [[Inspection and Testing Fundamentals]] · [[Electrical Study Map]] · [[BS EN 61557]] · [[Electrical Evidence Review - October 2026]]
