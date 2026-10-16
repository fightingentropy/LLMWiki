---
title: In-Service Testing
type: topic
domain: electrics
sources:
  - clippings/evidence-review-2026-09-22/Electrics.md
  - clippings/evidence-review-2026-10-16/Electrics.md
related:
  - Electrical Safety
  - Continuity Testing
  - Inspection and Testing Fundamentals
  - PAT Testing
  - Test Equipment Standards
  - GS38
  - BS EN 61010
  - BS EN 61557
  - RCD Protection
  - Safe Isolation
  - "Ohm's Law and Electrical Calculations"
  - Electrical Study Map
  - Electrical Evidence Review - September 2026
  - Electrical Evidence Review - October 2026
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - in-service-testing
  - pat
  - appliances
  - formal-inspection
  - equipment-testing
  - v-forms
  - hse
source_gaps:
  - 'raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md'
reviewed: '2026-10-16'
review_status: partial
review_notes: "The check levels, visual-inspection points, label and interval rules, Class I/II definitions, live-working conditions, V1-V6 forms, 500 V test voltage and test-kit standards were checked against HSE HSG107, INDG236, the PAT FAQ, GS38, Electricity at Work Regulation 14 and the IET's published forms and 5th-edition articles; the pass limits (0.1 Ω + R, 0.5 Ω + R, 1 MΩ, 2 MΩ), the test hierarchy, appendix numbers and exam advice have only industry-guide support or none, because the Code of Practice text and the webinar transcript are unavailable."
summary: "PAT in practice: three check levels, plug and flex fail points, the four tests and pass limits, inspect-don't-repair, test-kit standards, V1-V6 forms."
---

# In-Service Testing

In-service inspection and testing is the routine checking of electrical equipment while it is in use, usually called PAT (portable appliance testing). The work is mostly competent visual inspection, correct testing and accurate reporting, and it stops short of repair. This page holds the study notes from the Access Training PAT webinar summarised in [[PAT Testing]]: the three levels of check, what a formal visual inspection looks for, the four tests and their pass limits, the rules on live working and test equipment, and the IET V-forms used to record it all. HSE's own position, that test intervals follow risk rather than a blanket annual schedule, comes from [[Electrical Evidence Review - September 2026]].

## Three levels of check

Equipment gets a different depth of check depending on who does it and how much assurance is needed (from [[PAT Testing]]):

- **User check.** Done by unskilled users: a basic look-over and awareness of obvious damage. Low assurance.
- **Formal visual inspection.** Done by a responsible competent person: a systematic visual examination and professional assessment of condition, covering environment, function, damage and safety concerns, with no test instruments.
- **Combined inspection and test.** Done by a competent person: the full formal visual inspection plus complete electrical testing. Highest assurance; appropriate for higher-risk equipment or regular service.

## Formal visual inspection

Visual inspection comes first and matters most. Many equipment safety issues are visible, inspection often shows why an item would fail its electrical tests, and it stops clearly unsafe equipment being tested at all. Complete it before any testing.

### The six core checks

1. **Function and operation.** Turn on if appropriate and safe; verify the controls work; look for obvious operational problems.
2. **Environment and housekeeping.** Is the equipment suitable for its location, and the environment safe for this equipment? Look for temperature extremes, dust, moisture, vibration, overcrowding or interference.
3. **Flex and cable.** Cuts or abrasions, crushing or kinks, deteriorated insulation, excessive wear, evidence of repair or taping.
4. **Plug.** Physical damage or cracks; signs of burning inside or outside; flex entering properly; fuse condition; earth pin present and correct; cover secure and clean.
5. **Socket outlet.** Scorching or burning; loose or damaged; suitable for the equipment; whether an RCD protects it.
6. **Visible appliance damage.** Cracks in the casing, burn or scorch marks, water damage, rust or corrosion, mechanical damage.

Equipment can be unsafe because of its environment even when the item itself looks fine. Adequate equipment in the wrong environment is unsafe, so assess both the equipment and where it is used.

### Plug failure points

Plugs are a frequent weak point. Common fail conditions:

- Physical cracks or breaks
- Burning or melting, inside or outside
- Flex sheathing not entered properly into the plug (coloured insulation visible)
- Loose or missing fuse
- Wrong fuse arrangement: foil or a screw instead of a BS1362 fuse
- Loose copper strands visible
- Missing earth pin on Class 1 equipment
- Damaged flex entering the plug
- Taped or heavily repaired flex
- Two different cables forced into one plug
- Wrong cable type, for example twin-and-earth instead of flex
- Excessive loose copper visible
- Plug cover insecure, screws damaged or missing
- Cardboard insert left inside the plug (fire hazard)

Other plug notes:

- **Pre-1984 plugs** have unsleeved live and neutral pins. Not an automatic fail, but replacement is often recommended. If you replace a plug, dispose of the old one rather than keeping it for reuse.
- **Class 2 equipment** may have a plastic earth pin, there only to open the socket shutters; it is not a conductive earth pin.
- **Rewirable plugs** should have a solid metal earth pin. Non-rewirable Class 2 plugs may have a plastic pin.
- **Counterfeit or non-compliant plugs** may show incorrect sleeving arrangements, for example a sleeved earth pin (from [[PAT Testing]]). Check for authenticity and compliance.

### Fuse size follows the flex

The old rule of thumb that sized the plug fuse from the appliance wattage is outdated. The fuse protects the cable against overcurrent, so the fuse size is set by the flex size, not the appliance rating. (from [[PAT Testing]]) This conflicts with current consumer guidance: [Greater Manchester Fire and Rescue Service](https://www.manchesterfire.gov.uk/your-safety/fire-safety/electrical/sockets) still sizes the plug fuse by appliance wattage (3 A up to about 700 W, 13 A from about 700 W to 3,000 W), and [HSG107](https://www.hse.gov.uk/pubns/priced/hsg107.pdf) asks only that the correct fuse is fitted.

## The four tests

### Protective conductor continuity (Class 1 only)

- **Purpose:** prove a continuous earth path from the plug to the exposed conductive parts.
- **Applies to:** Class 1 only. Class 2 has no earth.
- A simple beeper is insufficient; measure the actual resistance.
- **Pass criterion:** maximum 0.1 Ω + R, where R is the resistance of the protective conductor in the flex.
- **Example:** 1 m of 0.75 mm² flex at 26 mΩ/m gives R = 0.026 Ω, so the maximum reading is 0.126 Ω.

```
R = (milliohms per meter × length in meters) / 1000 = ohms
```

Flexible cable resistance values come from Appendix 5. The same milliohm-per-metre method is worked through in [[Ohm's Law and Electrical Calculations]], and the installation-side test is covered in [[Continuity Testing]].

- **Older equipment:** engineering judgment may allow up to 0.5 Ω + R, decided on practical safety and the item's condition.

### Insulation resistance (Class 1 and Class 2)

- **Purpose:** prove the insulation is intact, with no unintended contact between conductors or to earth. The webinar's picture: like inflating an inner tube to reveal the punctures.
- **Test voltage:** 500 V DC.
- **Setup:** line and neutral joined together and tested against earth; power switches on; covers in place; the equipment must be suitable for the test voltage.
- Correction, 16 October 2026: Class II equipment has no earth connection ([HSG107](https://www.hse.gov.uk/pubns/priced/hsg107.pdf), paragraph 14), so on Class II the joined line and neutral are tested against the accessible conductive parts of the enclosure with a probe, as test-instrument maker [Seaward's Class I and Class II test sheets](https://seaward.com/gb/support/download/770) describe; "against earth" applies to Class I only.
- **Minimum results:** 1 MΩ for Class 1, 2 MΩ for Class 2.
- 500 V can damage sensitive equipment such as computing and LED lighting. Use the protective conductor current test instead for that gear.

### Protective conductor current (the alternative for sensitive equipment)

- **When:** voltage-sensitive equipment: computers, LED lighting, electronic equipment that will not tolerate 500 V.
- **Method:** measures the actual leakage current to earth instead of applying a high voltage.
- **Advantage:** less likely to damage sensitive equipment.

### Functional test, and load testing

- **Purpose:** confirm the equipment actually works.
- **Checks:** controls operate, switches function, thermostats work, displays and feedback systems respond, fans and motors move.
- **Load testing** is a specialist test, sometimes required for heating or cooking equipment, to verify the item delivers the correct power or heat. Not routine, but may be required for specific applications.

### RCD check

If the equipment plugs into an RCD-protected socket outlet, check the RCD test button and verify the RCD functions, so the protection device in front of the equipment is known to work. [[RCD Protection]] covers what an RCD does and does not prove.

## Inspect, test and report; do not repair

The job during inspection and testing is to inspect (look and assess condition), test (apply the testing procedures) and report (document the findings and communicate the results). It does not include taping or repairing damaged flex, tightening loose screws, replacing damaged parts or fixing visible issues. (from [[PAT Testing]])

Why the boundary matters:

1. **Scope clarity.** You are there to assess, not fix.
2. **Legal protection.** You are not responsible for repairs you did not authorise.
3. **Customer responsibility.** The equipment belongs to the customer; they decide on repairs.
4. **Documentation.** The red label on a failed item is your responsibility; fixing it is theirs.

What to do with a failed item:

1. Mark it clearly with a red fail label.
2. Document the failure in detail.
3. Explain to the customer what failed and why.
4. Remove it from service or restrict its use.
5. Report it in your documentation.
6. The customer decides on repair or replacement.

The customer may ignore your fail label. That is their choice; your responsibility is to inspect, test and report accurately.

## Working on live in-service equipment

"In service" means the equipment is actively in use and may need to stay energised for functional testing, control verification and safe-operation checks. Live working is permitted only when it is unreasonable to isolate (for example, continuous operation is needed), it is reasonable to work live with proper safeguards in place, and suitable precautions are taken (safety-conscious working).

The webinar's example: you cannot verify a fan's speed controls without powering the fan, so the check is done live, with safe practices and suitable precautions: proper positioning and no contact with dangerous parts. (from [[PAT Testing]]) The procedure for everything that can be made dead is in [[Safe Isolation]].

## Test equipment

### Standards

- **[[BS EN 61010]]:** safety of the test equipment itself.
- **[[BS EN 61557]]:** accuracy of measurements.
- **[[GS38]]:** HSE guidance on the safe condition of test leads and probes.

[[Test Equipment Standards]] covers all three in more depth.

### Leads and probes

GS38's emphasis is on lead and probe condition: insulation integrity, flexibility and strength, and safe connection methods. Test leads are what you handle at potentially live points, so their condition is critical.

### Calibration and accuracy checks

Annual calibration alone is not sufficient. Calibration proves the meter was accurate on the calibration date only. Best practice:

- Run regular accuracy checks against a calibration card or standard.
- Record those checks systematically (Form V6, below).
- Regular checks prove ongoing accuracy, and the records defend your results against later challenges.

### Tester types and cost

- **Basic PAT testers:** simple pass/fail indication, lower cost, limited flexibility.
- **Mid-range testers:** display actual test values, more test options, better for varied work.
- **High-end and industrial testers:** memory storage, printing, multiple test modes, data management.

A normal installation test meter can perform the PAT tests, and PAT adapters convert a standard meter to PAT use. A dedicated PAT tester is worthwhile for regular PAT work because it saves time, with a decent payback on the investment if used regularly.

### Commercial viability

- Per-item PAT pricing is lower than in earlier years.
- Still profitable as a day-rate service with efficient execution.
- Low overhead: a meter and the knowledge.
- A good employability skill and a useful add-on to an electrical services business.

## Documentation: the IET V-forms

The IET model forms for PAT documentation run V1 to V6 (from [[PAT Testing]]):

| Form | Name | Contents |
| --- | --- | --- |
| V1 | Equipment register / asset register | Equipment list, locations and IDs, planned inspection intervals |
| V2 | Inspection and test record | Details of equipment tested, visual inspection findings, test results, date and tester signature |
| V3 | Labels | Pass/fail labels for equipment, colour-coded: green pass, red fail, yellow for attention |
| V4 | Repair register | Equipment repaired, what was done, outcome |
| V5 | Faulty equipment register | Failed items, reason for failure, status (awaiting repair, withdrawn, etc.) |
| V6 | Test equipment accuracy record | Meter calibration dates, accuracy check dates, results and verification, tester name and signature |

Correction, 16 October 2026: the IET's published [model forms for in-service inspection and testing](https://electrical.theiet.org/courses-resources-career/forms-and-downloads/) give Form V.3 only two labels, a green PASS and a red FAIL ("DANGER DO NOT USE"), each with date of check, initials and appliance number; there is no yellow "attention" label.

Correction, 16 October 2026: the IET titles Form V.6 "Test instrument record", not "test equipment accuracy record"; it logs check readings at fixed low-resistance points (0.5, 1.0 and 10.0 Ω) and high-resistance points (0.5, 1.0 and 10.0 MΩ) with the deviation in per cent, and the date of last calibration ([IET model forms](https://electrical.theiet.org/courses-resources-career/forms-and-downloads/)).

### Labels carry no "next inspection date"

- Do not put a next-inspection date on the label.
- Equipment may move, and a new location changes the risk assessment and the inspection frequency. A fixed future date can be misleading or inappropriate.
- Risk assessment drives the interval, not the label date.

HSE's FAQ says the same from the regulator's side: it does not prescribe blanket annual PAT testing; maintenance arrangements and inspection and testing intervals depend on risk, use and environment; visual checks matter and some faults need a test; and a test label is not a guarantee that the equipment remains safe. (from [[Electrical Evidence Review - September 2026]])

Correction, 16 October 2026: the source for this point is HSE's [INDG236](https://www.hse.gov.uk/pubns/indg236.pdf) leaflet, not the [PAT FAQ](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm). INDG236 says a test indicates an appliance's safety only at the time of the test and does not imply it will stay safe, so user checks must continue; the FAQ says labels and records are not legally required but are a useful management tool.

### Exam tips

The webinar instructor strongly recommends:

- Make a Post-it note summary of V1 to V6 and their purposes.
- The fifth edition book can be confusing and inconsistent about form naming, so refer to the forms directly rather than relying on the text descriptions.
- Knowing the form purposes is exam-critical.

## Appendices for revision

The instructor's priority appendices:

- **Appendix 2:** IP ratings table. Likely exam topic and important for equipment assessment.
- **Appendix 5:** flexible cable resistance values, used for the continuity pass-criterion calculation.
- **Appendix 6:** condition of plugs and equipment; the visual-inspection reference with detailed fail conditions.
- **Appendix 7:** IT equipment racks; specific application guidance.
- **Appendix 8:** basic electrical calculations, formulas and concepts.

Study approach: use Post-it notes where exam rules allow, review the tables and appendices repeatedly, improve recall through repetition, and develop a sense of realistic values. [[Electrical Study Map]] places this topic in the wider revision route.

## Key takeaways

- PAT is mostly competent visual inspection plus correct testing plus accurate reporting.
- Do not repair; mark and report.
- Class 1 and Class 2 follow different test paths: continuity is Class 1 only.
- Know the pass criteria: 0.1 Ω + R for continuity, 1 MΩ (Class 1) and 2 MΩ (Class 2) for insulation.
- Fuse size follows cable size, not appliance wattage.
- Test lead and probe condition (GS38) matters as much as the test procedure.
- V-form knowledge is exam-critical.
- PAT is a viable skill with good employability value.

## Source gap

The PAT webinar summary behind these notes (`Summary - Electrics Webinar 4 PAT Testing.md`) is missing. The check levels, visual-inspection points, label and interval rules, equipment classes and V-form names above match HSE and IET sources, with the corrections shown; the pass limits, test order, appendix numbers and exam advice remain unconfirmed study notes, so check them against current course material before relying on them. [[Electrical Evidence Review - October 2026]] records what the official sources confirm. [[Electrical Safety]] and [[Inspection and Testing Fundamentals]] give the surrounding installation-side material.

## Resources

- [HSE portable appliance testing FAQs](https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm) — the regulator's FAQ on maintaining portable equipment: intervals depend on risk, use and environment rather than a blanket annual test; labels and records are not legally required but help manage the scheme, and testing alone cannot find every defect. (from [[Electrical Evidence Review - September 2026]])
- [HSE INDG236: Maintaining portable electric equipment in low-risk environments](https://www.hse.gov.uk/pubns/indg236.pdf) — HSE's short leaflet on user checks, visual inspection and risk-based testing; says a test shows an appliance's safety only at the time of the test.
- [HSE HSG107: Maintaining portable electrical equipment](https://www.hse.gov.uk/pubns/priced/hsg107.pdf) — HSE's free guidance (third edition, 2013) on user checks, formal visual inspection and combined inspection and test, Class I and Class II construction, suggested initial intervals, and why a label should carry no next-test date.
- [IET model forms for in-service inspection and testing](https://electrical.theiet.org/courses-resources-career/forms-and-downloads/) — free downloads of Forms V.1 to V.6 from the IET Code of Practice, plus the user-checks poster; the source for the form names and label designs.
- [Seaward: testing Class I and Class II appliances](https://seaward.com/gb/support/download/770) — two-page manufacturer sheet on the order of tests and the probe connections, quoting pass limits from an earlier edition of the Code of Practice; industry guidance, not the Code itself.
- [Greater Manchester Fire and Rescue Service: sockets, plugs and fuses](https://www.manchesterfire.gov.uk/your-safety/fire-safety/electrical/sockets) — consumer fire-safety page that sizes plug fuses by appliance wattage; the counterpoint to the flex-based fuse rule.

## Related

[[PAT Testing]] · [[Electrical Safety]] · [[Continuity Testing]] · [[Inspection and Testing Fundamentals]] · [[Test Equipment Standards]] · [[GS38]] · [[BS EN 61010]] · [[BS EN 61557]] · [[RCD Protection]] · [[Safe Isolation]] · [[Ohm's Law and Electrical Calculations]] · [[Electrical Study Map]] · [[Electrical Evidence Review - September 2026]] · [[Electrical Evidence Review - October 2026]]
