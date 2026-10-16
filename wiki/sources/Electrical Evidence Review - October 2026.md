---
title: Electrical Evidence Review - October 2026
type: source
domain: electrics
sources:
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - BS 7671
  - GN3 Guidance Note 3
  - RCD Protection
  - Part P
  - Building Regulations
  - Electrical Safety
  - Electrical Study Map
  - GS38
  - Safe Isolation
  - Test Equipment Standards
  - BS EN 61010
  - BS EN 61557
  - Continuity Testing
  - Ohm's Law and Electrical Calculations
  - Inspection and Testing Fundamentals
  - EIC and MEIWC
  - EICR
  - In-Service Testing
  - PAT Testing
  - Electrical Evidence Review - September 2026
created: '2026-10-16'
updated: '2026-10-16'
tags:
  - electrics
  - evidence
  - standards
  - corrections
  - gs38
  - eicr
  - landlords
  - part-p
  - pat
summary: "What IET, BSI, HSE, GOV.UK, legislation and IEC sources say on BS 7671 editions, test equipment, isolation, testing, certificates, landlord rules, Part P and PAT, with every correction they force."
reviewed: '2026-10-16'
review_status: archive
review_notes: "Claims on the electrics pages were checked against IET, BSI, HSE, GOV.UK, legislation.gov.uk and IEC sources, with manufacturer and industry guides labelled; BS 7671 and GN3 clause text, the in-service Code of Practice pass limits and the lost webinar material remain unchecked."
---

# Electrical Evidence Review - October 2026

A review of the electrical study pages against free primary sources, made on 16 October 2026: IET and BSI publications and model forms, HSE guidance, GOV.UK Approved Documents, legislation.gov.uk and IEC webstore abstracts. Manufacturer and industry guides are labelled as such; they support a claim but cannot prove what BS 7671 says. It follows [[Electrical Evidence Review - September 2026]], whose edition status it updates and whose test-label attribution it corrects. BS 7671, GN3 and the IET in-service Code of Practice are paywalled, so their clause text stays unchecked.

This is a study aid, not design guidance: for any real installation, work from the current BS 7671 text and the rules of the jurisdiction you are in.

## Edition status

- BSI set 15 October 2026 as the withdrawal date for BS 7671:2018+A2:2022+A3:2024. From 16 October 2026, BS 7671:2018+A4:2026 is the only current edition (see [[BS 7671]]).
- The IET edition checker still carries the transition wording, and its errata section names A2:2022 rather than A3.
- The IET still lists [[GN3 Guidance Note 3]] tenth edition and the On-Site Guide ninth edition as its A4 books.
- The A3 introduction says an installation built to an earlier edition is not necessarily unsafe or in need of upgrading.

## GS38, probes and test equipment standards

- [[GS38]] (fourth edition, 2015) is HSE guidance under the Electricity at Work Regulations 1989.
- Probe tips: 4 mm maximum exposed metal, with 2 mm or less, or retractable screened probes, strongly recommended (para 9). GS38 has no 19 mm figure; Hioki, a manufacturer, says 19 mm was the IEC 61010-031 allowance before its 2011 revision.
- Connectors: shrouded or firmly attached, with no plug size named (para 11).
- GS38 sets no before-every-use check of leads. It asks for maintenance by a competent person with inspection records, and for clamp meters to be examined before use (paras 26, 30). HSE's INDG354 leaves pre-use checks to written safe systems of work.
- There is no "GS38 compliant" marking: leads should meet BS EN 61010-031 and carry their CAT rating and maker's mark. GS38 sets no record-retention period (see [[Test Equipment Standards]]).
- Measurement categories (GS38 footnote to para 8, citing BS EN 61010): CAT IV at the source of the installation, CAT III in the building installation, CAT II on circuits directly connected to it, such as appliances and portable tools. GS38 gives no distances; the 10 m and 20 m examples come from Fluke, a manufacturer (see [[BS EN 61010]]).
- HBM, a manufacturer, says IEC 61010-2-030 replaced CAT I with an "O" marking for inputs not meant for mains.
- HSE's rough shock-hazard threshold is 50 V ac or 120 V ripple-free dc in dry conditions, lower in wet, confined or conductive places.
- IEC 61010-031 covers hand-held probe assemblies, so the 61010 series covers leads as well as instruments.
- IEC 61557-1 states it does not cover functional safety, and Part 12 is titled Power metering and monitoring devices (PMD) (see [[BS EN 61557]]).

## Safe isolation and the DNO cut-out

- HSE's HSG85 (paras 46–55) confirms the sequence on [[Safe Isolation]]: identify, disconnect, lock off, keep removed fuses, post notices, and prove dead at the point of work with a detector proved before and after use, not a multimeter or non-contact stick.
- Neither HSG85 nor GS38 sets an order of conductor pairs. HSG85 para 53 asks that all supply conductors be proved dead; Electrical Safety First's Best Practice Guide 2, an industry guide, asks the same of line, neutral and protective conductors.
- The IET says the cut-out fuse may be withdrawn by the DNO, the supplier's meter operator, Safe Isolation Providers under the Retail Energy Code, and anyone the DNO expressly permits. Some DNOs, such as SSEN, allow trade-association electricians. Check the local DNO's rules first.

## Continuity, calculations and test limits

- There is no general 0.1 Ω limit for circuit protective conductors. Zs is worked out as Ze + (R1 + R2) and compared with the Chapter 41 maximum or the maker's data, corrected for temperature (×0.8 in the IET's example). A 1.5 mm² CPC alone is about 0.12 Ω over 10 m (see [[Continuity Testing]]).
- The IET warns that removing an earthing or bonding conductor can put hazardous touch voltages on conductive parts where an open PEN fault exists, and describes clamp-meter checks before and after isolation (see [[Continuity Testing]] and [[Inspection and Testing Fundamentals]]).
- Prysmian, a manufacturer, confirms the twin-and-earth CPC sizes and 1.83 mΩ/m for 10 mm². Every worked sum checked is correct.
- In AC circuits V × I is apparent power, equal to watts only at unity power factor (see [[Ohm's Law and Electrical Calculations]]).
- Voltage drop limits come from BS 7671 Regulation 525 and Appendix 4, not the Building Regulations: 3% for lighting and 5% for other uses on a public supply, as informative values.

## Certificates and the EICR

- The IET's A4 model forms call for a separate MEIWC for each existing circuit worked on, or one EIC in place of several MEIWCs. An EIC is needed once a new circuit is introduced, not one per circuit (see [[EIC and MEIWC]]).
- The A4 EIC has no qualifications field, adds a second designer signature where design is shared, and allows a single-signature version.
- The A4 model EICR words FI as "Further investigation is advised" and treats C3 and FI as advisory, so only C1 or C2 makes a report Unsatisfactory. The superseded A2:2022 form made FI unsatisfactory; the IET's July 2026 Wiring Matters article explains the change (see [[EICR]]).
- The A4 Schedule of Inspection records a tick, C1/C2, C3, FI, N/V, LIM or N/A, with "X" only for inadequate intake equipment. The declaration has no qualifications field.
- In England, regulation 3 of SI 2020/312 confirms the five-year interval and 28-day deadlines, and requires written confirmation from a qualified person that the standards are met or further work is needed.
- S.I. 2025/1043 extended the England regulations to social landlords. HMOs fall within them.
- Contradiction: GOV.UK guidance (1 November 2025) still treats FI as needing work within 28 days, while the A4 form treats FI as advisory.
- Scotland's Repairing Standard guidance and Wales' 2022 fitness regulations each require inspection at least every five years.

## Part P, Building Regulations and concealed cables

- Approved Document P (2013) is still the current England edition (see [[Part P]]).
- Paragraph 2.2 extends Part P beyond homes to outbuildings, common areas of flats and business premises on a dwelling's meter.
- Regulation 12(6A) of the Building Regulations 2010 makes every new circuit and consumer unit replacement notifiable wherever it is. Location matters only for work on existing circuits, which is notifiable inside a special location.
- Paragraph 3.13 says non-notifiable work, including replacements, should still be inspected, tested and certificated to BS 7671; the A4 MEIWC says inspection and testing should always be carried out.
- The IET's 2015 Wiring Matters article applies the metallic-partition rule, irrespective of depth, to any partition with metallic parts other than fixings such as nails or screws, not only one mainly of metal (see [[RCD Protection]] and [[Building Regulations]]). It is seventeenth-edition guidance and places the rules in Regulation Group 522.6, consistent with the note's "522.5.204" being a misnumbering.
- Approved Document A, paragraph 2C30, limits vertical chases to 1/3 of the wall thickness, or of the leaf in a cavity wall, and horizontal chases to 1/6 of the leaf. It gives no joist-notch rule.

## Portable equipment and in-service testing

- HSE's PAT FAQ says labelling and records are not legally required but are a useful management tool, and that testing alone cannot find every defect. The point that a test label is no guarantee of continued safety comes from HSE's INDG236 leaflet, which says a test indicates safety only at the time of the test (see [[Electrical Safety]] and [[In-Service Testing]]).
- HSE's HSG107 confirms the three levels of check (user checks, formal visual inspection, combined inspection and test) and that a label should carry no next-test date (para 54).
- Class II equipment has no earth (HSG107 para 14), so its insulation test is made to accessible conductive parts, as Seaward, a manufacturer, describes (see [[PAT Testing]]).
- The IET's published forms give V.3 only green PASS and red FAIL labels and title V.6 "Test instrument record".
- The in-service Code of Practice is in its fifth edition (2020), separate from GN3.
- Contradiction: the "fuse follows the flex" rule conflicts with Greater Manchester Fire and Rescue Service guidance, which sizes the plug fuse by appliance wattage; HSG107 asks only for the correct fuse.

## Still unchecked

- Current BS 7671:2018+A4:2026 clause text, including Regulations 522.6.202–204 and 132.16 and the Part 6 instrument rules.
- GN3 tenth edition chapter, table and page references, such as Table B1 and Table 1.1.
- In-service Code of Practice pass limits: (0.1 + R) Ω, 1 MΩ and 2 MΩ have only industry support from Seaward and Test Meter; 0.5 Ω + R, the test hierarchy and the appendix numbers have none.
- Whether the voltage paired with a CAT rating is to earth or line to neutral, and calibration intervals.
- The lost webinar transcripts behind [[Inspection and Testing Fundamentals]] and [[PAT Testing]], and course details. City & Guilds' 2392-10 handbook gives a closed-book online test of 50 questions in 100 minutes, which conflicts with the webinar's 60-minute, open-book, 30-question format; the webinar names no awarding body.
- The 0.125 joist-notch figure and the one-brick and plaster shortcuts on [[Building Regulations]].

## Corrections

- Correction, 16 October 2026: the A3 transition has ended. BSI set 15 October 2026 as the withdrawal date for BS 7671:2018+A2:2022+A3:2024, so BS 7671:2018+A4:2026 is the only current edition; the IET edition checker still carries the transition wording ([[BS 7671]], [[Electrical Study Map]]).
- Correction, 16 October 2026: the test-label point comes from HSE's INDG236 leaflet, not the PAT FAQ. INDG236 says a test indicates an appliance's safety only at the time of the test; the FAQ says labels and records are not legally required but are a useful management tool ([[Electrical Safety]], [[Electrical Study Map]], [[Test Equipment Standards]], [[In-Service Testing]], [[Electrical Evidence Review - September 2026]]).
- Correction, 16 October 2026: the note's Reg 522.6.203 line ("a stud wall made mainly of metal") is too narrow. The IET's 2015 article applies the requirement, irrespective of depth, to a partition with any metallic parts other than fixings such as nails or screws; confirm the current A4 wording ([[RCD Protection]], [[Building Regulations]]).
- Correction, 16 October 2026: Approved Document A, paragraph 2C30, limits horizontal chases to 1/6 of the thickness of the leaf, not of the whole wall, and vertical chases to 1/3 of the wall or, in a cavity wall, of the leaf; chases must not impair stability, and it gives no joist-notch rule ([[Building Regulations]]).
- Correction, 16 October 2026: GS38 caps the exposed probe tip at 4 mm and strongly recommends 2 mm or less, or retractable screened probes. It gives no 19 mm figure; 19 mm was the IEC 61010-031 allowance before 2011, according to Hioki, a manufacturer ([[GS38]]).
- Correction, 16 October 2026: GS38 asks for shrouded or firmly attached connectors and test sockets shrouded to suit the measurement category; it names no plug size ([[GS38]]).
- Correction, 16 October 2026: GS38 sets no before-every-use check of leads and probes. It asks for maintenance by a competent person with inspection records, for users to know the common defects, and for clamp meters to be examined before use; INDG354 leaves pre-use checks to written safe systems of work ([[GS38]]).
- Correction, 16 October 2026: GS38 and HSG85 set no conductor-pair order for proving dead. HSG85 asks that all supply conductors be proved dead on three-phase or multi-supply equipment, and Best Practice Guide 2, an industry guide, that all line, neutral and protective conductors be proved dead ([[GS38]], [[Safe Isolation]]).
- Correction, 16 October 2026: withdrawing the DNO cut-out fuse has authorised routes. The DNO, the supplier's meter operator, Safe Isolation Providers and anyone the DNO expressly permits may withdraw it, and some DNOs, such as SSEN, allow trade-association electricians; check the local DNO's procedure ([[Safe Isolation]], [[Inspection and Testing Fundamentals]]).
- Correction, 16 October 2026: GS38 defines no "GS38 compliant" marking. Probes, clips and leads should conform to BS EN 61010-031 (or BS EN 61243-3 for two-pole voltage detectors) and be marked with their CAT rating and the maker's name or mark ([[Test Equipment Standards]]).
- Correction, 16 October 2026: GS38, citing BS EN 61010, calls these measurement categories and defines CAT II as measurements on circuits directly connected to the low voltage installation, such as appliances and portable tools, not circuits within the building ([[Test Equipment Standards]]).
- Correction, 16 October 2026: HSE gives the rough shock-hazard threshold as 50 V ac or 120 V ripple-free dc in dry conditions, lower in wet, confined or conductive locations ([[Test Equipment Standards]]).
- Correction, 16 October 2026: GS38 sets no record-retention period. It asks that inspection and test records for test equipment be kept, particularly where faults are found, to help decide how often equipment is inspected ([[Test Equipment Standards]]).
- Correction, 16 October 2026: the 61010 series also covers leads. IEC 61010-031 sets safety requirements for hand-held probe assemblies, and GS38 asks that probes, clips and leads conform to it ([[BS EN 61010]]).
- Correction, 16 October 2026: IEC 61010-2-030 (2010 onward) has no CAT I; inputs not meant for mains connection carry no measurement category and are marked O, according to HBM, a manufacturer ([[BS EN 61010]]).
- Correction, 16 October 2026: the 10 m and 20 m CAT II distances come from Fluke, a manufacturer. GS38, citing BS EN 61010, defines CAT II without distances ([[BS EN 61010]]).
- Correction, 16 October 2026: IEC 61557 Part 12 is titled Power metering and monitoring devices (PMD), not performance measuring; its current edition is 2018 with Amendment 1:2021 ([[BS EN 61557]]).
- Correction, 16 October 2026: IEC 61557-1 states that it does not cover functional safety or cybersecurity ([[BS EN 61557]]).
- Correction, 16 October 2026: removing an earthing or protective bonding conductor can put hazardous touch voltages on exposed- and extraneous-conductive-parts where an open PEN fault exists, and diverted neutral current can come from neighbouring installations; the IET describes clamp-meter checks before and after isolation ([[Continuity Testing]], [[Inspection and Testing Fundamentals]]).
- Correction, 16 October 2026: there is no general 0.1 Ω pass limit for circuit protective conductors. The measured (R1 + R2) is added to Ze and the resulting Zs compared with the maximum for the protective device, reduced for conductor temperature ([[Continuity Testing]]).
- Correction, 16 October 2026: in AC circuits V × I gives apparent power (VA); watts equal V × I only at a power factor of 1, which also limits the amps-to-watts figures ([[Ohm's Law and Electrical Calculations]]).
- Correction, 16 October 2026: voltage drop limits come from BS 7671, not the Building Regulations. Regulation 525 applies, and Appendix 4 recommends 3% for lighting and 5% for other uses on a public supply as informative values ([[Ohm's Law and Electrical Calculations]]).
- Correction, 16 October 2026: the A4 model EICR words FI as "Further investigation is advised" and treats C3 and FI as advisory, so only C1 or C2 makes a report Unsatisfactory; the earlier FI wording ("required without delay", making a report Unsatisfactory) follows the superseded A2:2022 form ([[EICR]]).
- Correction, 16 October 2026: regulation 3 requires written confirmation from a qualified person that the standards are met or that further work is needed, sent with the report to each existing tenant and the local housing authority within 28 days of completing the work. GOV.UK guidance still treats FI as needing investigative work within 28 days, unlike the A4 form ([[EICR]]).
- Correction, 16 October 2026: in England, HMOs fall within the same regulations, which S.I. 2025/1043 extended to social landlords and renamed. Scotland and Wales set their own rules, each requiring inspection at least every five years ([[EICR]]).
- Correction, 16 October 2026: the A4 model EICR's Schedule of Inspection records each item as a tick, C1 or C2, C3, FI, N/V, LIM or N/A, with "X" only for inadequate intake equipment ([[EICR]]).
- Correction, 16 October 2026: the A4 model EICR declaration asks for name, signature, organisation, position, address and date, in blocks for the inspector and the person authorising the report; it has no qualifications field ([[EICR]]).
- Correction, 16 October 2026: the A4 model forms call for a separate MEIWC for each existing circuit worked on, or one EIC in place of several MEIWCs. Work on several existing circuits does not rule out MEIWCs, and the forms do not call for an EIC for each circuit; an EIC is needed once a new circuit is introduced ([[EIC and MEIWC]]).
- Correction, 16 October 2026: the A4 model EIC has no qualifications field. Its declarations and signatures sit on the first page, and a 14-item schedule of inspections is part of the certificate ([[EIC and MEIWC]]).
- Correction, 16 October 2026: the A4 model EIC also has a second designer signature where design responsibility is shared, and its notes allow a single-signature EIC signed by one person authorised for all three roles ([[EIC and MEIWC]]).
- Correction, 16 October 2026: Approved Document P paragraph 3.13 says non-notifiable work, which includes replacements, should still be inspected, tested and certificated to BS 7671, and the A4 MEIWC says appropriate inspection and testing should always be carried out ([[EIC and MEIWC]]).
- Correction, 16 October 2026: under regulation 12(6A) of the Building Regulations 2010 (England), every new circuit and every consumer unit replacement is notifiable wherever it is; location matters only for additions or alterations to existing circuits in a special location ([[EIC and MEIWC]]).
- Correction, 16 October 2026: Approved Document P paragraph 2.2 also applies Part P to installations outside the dwelling and in outbuildings, to common areas of blocks of flats, and to business premises on the same meter as a dwelling ([[EIC and MEIWC]]).
- Correction, 16 October 2026: Class II equipment has no earth connection, so its insulation test is made between the joined line and neutral and the enclosure's accessible conductive parts; "to earth" applies to Class I only ([[In-Service Testing]], [[PAT Testing]]).
- Correction, 16 October 2026: IET Form V.3 has only two labels, a green PASS and a red FAIL; there is no yellow "attention" label ([[In-Service Testing]]).
- Correction, 16 October 2026: IET Form V.6 is titled "Test instrument record", not "test equipment accuracy record"; it logs check readings at fixed resistance points, the deviation in per cent and the date of last calibration ([[In-Service Testing]], [[PAT Testing]]).

## Links

- [BSI — BS 7671:2018+A4:2026, the latest amendment](https://knowledge.bsigroup.com/articles/bs-7671-2018-a4-2026-get-the-latest-amendment-to-the-uks-wiring-regulations) — BSI article on Amendment 4: the withdrawal of the A3 version on 15 October 2026 and the main new content (batteries, ICT bonding, Power over Ethernet, medical locations).
- [IET edition checker](https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/) — IET page on BS 7671 edition status and errata; still carries the A3 transition wording.
- [IET guidance publications](https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/bs-7671-and-guidance/) — IET's list of A4-aligned books, including GN3 tenth edition and the On-Site Guide ninth edition.
- [IET Shop — GN3, 10th Edition](https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition) — IET shop listing for Guidance Note 3 tenth edition (2026), updated to A4; shows it is an IET book, not an HSE one.
- [BS 7671:2018 Amendment 3:2024 (PDF)](https://bsigroup.com/siteassets/pdf/en/insights-and-media/insights/brochures/bs-7671-2018-amendment-3-2024.pdf) — BSI-hosted A3 material whose introduction says an installation built to an earlier edition is not necessarily unsafe or in need of upgrading.
- [HSE GS38, fourth edition (PDF)](https://www.hse.gov.uk/pubns/priced/gs38.pdf) — the 2015 guidance itself: probe tips, connectors, fused leads, measurement categories, proving detectors and records for test equipment.
- [HSE INDG354 (PDF)](https://www.hse.gov.uk/pubns/indg354.pdf) — HSE leaflet on safety in electrical testing at work: the 50 V ac / 120 V dc hazard threshold, test areas and written safe systems of work.
- [Hioki — New standard for test probes](https://www.hioki.com/in-en/support/faq/detail/id_127) — manufacturer note on the 2011 IEC 61010-031 revision that cut exposed tips on CAT III and CAT IV probes from 19 mm to 4 mm.
- [Fluke — Guide to digital multimeter safety](https://www.fluke.com/en-gb/learn/blog/safety/multimeter-guide) — manufacturer guide with a CAT II to CAT IV table and the 10 m and 20 m outlet examples.
- [HBM — GN610/GN611 isolation and type testing](https://www.hbm.com/fileadmin/mediapool/files/GN610_GN611_Isolation_and_type_testing.pdf) — manufacturer note on IEC 61010-2-030 measurement categories and the O marking that replaced CAT I.
- [IEC 61010-031:2022](https://webstore.iec.ch/publication/70272) — IEC webstore abstract for the probe-assembly part: hand-held probes and their accessories.
- [IEC 61557-1:2019+AMD1:2024](https://webstore.iec.ch/en/publication/102414) — IEC webstore abstract for the general part: scope up to 1,000 V AC and 1,500 V DC, uncertainty per the GUM, and the exclusion of functional safety.
- [IEC 61557-12:2018+AMD1:2021](https://webstore.iec.ch/en/publication/30065) — IEC webstore abstract for power metering and monitoring devices (PMD).
- [HSE HSG85 (PDF)](https://www.hse.gov.uk/pubns/priced/hsg85.pdf) — HSE's safe working practices guidance (third edition, 2013); paras 46–55 set out identification, locking off, notices and proving dead.
- [Electrical Safety First — Best Practice Guide 2 (PDF)](https://select.org.uk/common/Uploaded%20files/Technical/FreeDownloads/Best_Practice_Guide_2.pdf) — industry guide to safe isolation on low voltage installations (Issue 4.2), hosted by SELECT; covers lock-off kit, proving dead and service-fuse withdrawal.
- [IET Wiring Matters — Removing the distributor's cut-out fuse](https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/removing-the-distributors-cut-out-fuse/) — IET article (July 2025) on who may withdraw a DNO cut-out fuse, DNO permission schemes and Safe Isolation Providers.
- [IET Wiring Matters — Minimizing unnecessary live testing](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/) — IET article (May 2025) on the test sequence, working out Zs as Ze + (R1 + R2), and the minimum live testing needed.
- [IET Wiring Matters — Neutral current diversion update](https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/neutral-current-diversion-ncd-industry-research-update/) — IET article (May 2025) on diverted neutral current; warns about disconnecting earthing and bonding conductors and describes clamp-meter checks.
- [IET Wiring Matters — Maximum earth fault loop impedance values](https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/) — IET article (May 2024) explaining the 0.8 temperature factor and the GN3 and On-Site Guide maximum Zs tables.
- [Prysmian 6242Y datasheet](https://datasheet.prysmian.com/pdf/datasheet/en-GB/312416/GB00_6242Y) — manufacturer data for twin-and-earth to BS 6004: CPC sizes and conductor resistance at 20 °C from 1 to 16 mm².
- [IET Wiring Matters — Power factor](https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/how-embedded-solar-pv-can-affect-the-power-factor-of-an-installation/) — IET article (September 2025) defining apparent, active and reactive power and power factor.
- [IET Wiring Matters — Voltage drop and EV charge points](https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/) — IET article (July 2023) placing voltage drop in BS 7671 Regulation 525 and Appendix 4, Table 4Ab.
- [IET Wiring Matters — Amps per Pound (2020)](https://electrical.theiet.org/media/2466/wiring-matters-issue-81-july-2020.pdf) — IET article on cable sizing for I²R energy loss and the history of voltage drop limits, ending at 3% for lighting and 5% for other uses.
- [IET model forms](https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/) — the IET's free blank EIC, MEIWC and EICR downloads for A4:2026 and earlier editions.
- [IET model EIC, A4:2026](https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf) — the current Electrical Installation Certificate with its schedules; its notes say when an EIC is used and who signs it.
- [IET model MEIWC, A4:2026](https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf) — the current minor works certificate, for work that adds no new circuit, one per existing circuit.
- [IET model EICR, A4:2026](https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf) — the current condition report with its code definitions; C3 and FI do not affect the overall assessment.
- [IET model EICR, A2:2022](https://electrical.theiet.org/media/2819/bs7671-eicr.pdf) — the superseded form, showing the earlier FI wording and its link to an unsatisfactory result.
- [IET Wiring Matters — Implications of A4 on EICRs](https://electrical.theiet.org/wiring-matters/years/2026/110-july-2026/further-investigation/) — IET article (July 2026) on why FI was decoupled from C1 and C2 and when FI is misused.
- [SI 2020/312, regulation 3](https://www.legislation.gov.uk/uksi/2020/312/regulation/3) — landlord duties in England as amended: five-year interval, report deadlines, 28-day remedial work and written confirmation.
- [S.I. 2025/1043](https://www.legislation.gov.uk/uksi/2025/1043/contents) — the 2025 amendment that extends the England regulations to social landlords.
- [GOV.UK — Rented sectors electrical safety guidance](https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance) — England guidance (1 November 2025) on who is covered, what each code requires, deadlines and penalties.
- [Repairing Standard guidance, Annex D3](https://www.gov.scot/publications/repairing-standard-statutory-guidance-private-landlords/pages/16/) — Scotland's electrical inspection rules for private landlords: EICR and appliance testing at least every five years.
- [Welsh fitness regulations 2022, regulation 6](https://www.legislation.gov.uk/wsi/2022/6/regulation/6) — Wales: landlords must hold a valid electrical condition report, at most five years old, and give a copy to the contract-holder within 14 days.
- [GOV.UK Approved Document P](https://www.gov.uk/government/publications/electrical-safety-approved-document-p) — England's electrical safety guidance for dwellings; the 2013 edition is still the only one listed.
- [Approved Document P, 2013 (PDF)](https://assets.publishing.service.gov.uk/media/5a802da7ed915d74e622ceed/BR_PDF_AD_P_2013.pdf) — the guidance text: Part P scope (2.2), notifiable work (2.5–2.7), certification routes (section 3) and non-notifiable work (3.13).
- [Building Regulations 2010, regulation 12](https://www.legislation.gov.uk/uksi/2010/2214/regulation/12) — the legal list of notifiable electrical work in England, paragraph (6A), with the special-location definition.
- [IET — Cables in walls (2015)](https://electrical.theiet.org/media/1445/cables-in-walls.pdf) — IET article on safe zones, additional protection and the metallic-partition rule for concealed cables; seventeenth-edition guidance.
- [GOV.UK Approved Document A](https://www.gov.uk/government/publications/structure-approved-document-a) — England's structural guidance; paragraph 2C30 sets chase-depth limits for walls in small buildings.
- [HSE portable appliance testing FAQs](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm) — HSE answers on PAT: no set frequency, labels and records not legally required, and testing alone cannot find every defect.
- [HSE HSG107 (PDF)](https://www.hse.gov.uk/pubns/priced/hsg107.pdf) — HSE guidance (third edition, 2013) on user checks, formal visual inspection, combined inspection and test, Class I and Class II, and labels without next-test dates.
- [HSE INDG236 (PDF)](https://www.hse.gov.uk/pubns/indg236.pdf) — HSE leaflet on maintaining portable equipment in low-risk environments; says a test shows safety only at the time it is done.
- [IET in-service model forms](https://electrical.theiet.org/courses-resources-career/forms-and-downloads/) — free downloads of Forms V.1 to V.6 from the IET Code of Practice, plus the user-checks poster.
- [Seaward — Testing Class I and Class II appliances](https://seaward.com/gb/support/download/770) — manufacturer sheet on test order and probe connections, quoting pass limits from an earlier edition of the Code of Practice.
- [IET Wiring Matters — 5th Edition in-service Code of Practice (2020)](https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment) — IET article on the fifth edition: revised limits, test hierarchy and insulation test voltage, and a preferred lower-current earth continuity test, without figures.
- [Greater Manchester Fire and Rescue Service — Sockets, plugs and fuses](https://www.manchesterfire.gov.uk/your-safety/fire-safety/electrical/sockets) — consumer fire-safety page that sizes plug fuses by appliance wattage; the counterpoint to the flex-based fuse rule.
- [City & Guilds 2392-10 qualification handbook](https://www.cityandguilds.com/-/media/productdocuments/building_services_engineering/electrical_installation/2392/2392_level_2/centre_documents/2392-10-l2-qhb-fundamental-inspection-initial-testing-ventilation-v1,-d-,6-pdf.pdf) — handbook (version 1.6, April 2026) for the Level 2 fundamental inspection and testing certificate; sets out the multiple-choice test and practical assessment.
- [Test Meter — The 5th Edition](https://tester.co.uk/advice/what-do-you-need-to-know-about-the-5th-edition) — industry summary of the fifth-edition Code of Practice, giving 1 MΩ and 2 MΩ insulation minimums.

## Related

[[BS 7671]] · [[GN3 Guidance Note 3]] · [[RCD Protection]] · [[Part P]] · [[Building Regulations]] · [[Electrical Safety]] · [[Electrical Study Map]] · [[GS38]] · [[Safe Isolation]] · [[Test Equipment Standards]] · [[BS EN 61010]] · [[BS EN 61557]] · [[Continuity Testing]] · [[Ohm's Law and Electrical Calculations]] · [[Inspection and Testing Fundamentals]] · [[EIC and MEIWC]] · [[EICR]] · [[In-Service Testing]] · [[PAT Testing]] · [[Electrical Evidence Review - September 2026]]
