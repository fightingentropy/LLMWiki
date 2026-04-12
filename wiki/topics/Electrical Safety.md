---
title: Electrical Safety
type: topic
domain: electrics
sources: [raw/electrics/Resources.md, raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md, raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md]
related: [Safe Isolation, RCD Protection, Circuit Protection, Electrical Standards, Protective Conductors, Competence and Training]
created: 2026-04-12
updated: 2026-04-12
tags: [safety, electrical-safety, hazard-protection, risk-assessment, competence]
---

# Electrical Safety

Core principles and practices for ensuring safety in electrical installations, testing, and equipment maintenance.

## Fundamental Safety Principles

### Risk of Electrical Hazards

Electrical work is inherently dangerous if done incorrectly:
- Electric shock hazards
- Fire risk from faults
- Arc flash risk
- Equipment damage

### Competence Requirement

Safety depends on real competence, not just qualifications:
- Sound technical knowledge
- Relevant practical experience
- Understanding of the installation
- Understanding of equipment connected
- Understanding of test instruments being used
- Deep knowledge of standards (BS 7671, GN3, Building Regulations)

### Professional Mindset

- Ask questions and don't be embarrassed about what you don't know
- "Every day is a school day"
- Prioritize safety over speed or convenience
- Never assume; verify

## Protection Devices

### RCD (Residual Current Device)

**Purpose**: Protects against earth faults and electric shock

**Application rules**:
- 30 mA RCD required for cables less than 50 mm deep in safe zones (Regulation 522.6.202)
- 30 mA RCD required for circuits in stud walls made mainly of metal (Regulation 522.6.203)
- RCD may be avoided if cables in earthed metallic covering, conduit, or trunking (Regulation 522.5.204)

### Circuit Breaker

**Purpose**: Protects against overcurrent and short circuit

### Earth Cable (Protective Conductor)

**Purpose**: Provides low-resistance escape route for fault current if live conductor touches metal

**Key requirement**: Continuity must be verified through testing

## Safe Isolation Procedure

[[Safe Isolation]] is critical for all electrical work:

1. Identify what is to be isolated (circuit or whole installation)
2. Inform/agree with client/occupants before turning power off
3. Use approved voltage indicator (AVI) compliant with [[GS38]]
4. Prove voltage indicator works (proving unit or known live source)
5. Isolate at best point (prefer external isolator for whole-DB)
6. Lock off isolator/main switch
7. Remove fuses if necessary
8. Retain key personally
9. Apply warning label/signage
10. Prove dead on load side in consistent sequence (earth-to-line, earth-to-neutral, line-to-neutral)
11. Re-prove voltage indicator
12. Replace covers before leaving (incoming tails may still be live)

## Hazard Recognition

### Exposed-Conductive-Part

A conductive part of equipment that can be touched and is not normally live, but can become live under fault conditions.

**Safety requirement**: Must be connected to protective earth.

### Extraneous-Conductive-Part

A conductive part that can introduce a potential (generally earth potential) and is not part of the electrical installation.

**Safety requirement**: Must be bonded to prevent dangerous voltage differentials.

## Cable Routing Safety

### Safe Zones

Cables routed in safe zones are protected from accidental damage:
- Directly above/below switches or sockets (vertical)
- Horizontal runs to accessories
- Within 150 mm of ceiling
- Within 150 mm of corners

**If cables outside safe zones**: Need protection (conduit, trunking) or other risk mitigation.

## In-Service Equipment Safety

### Visual Inspection Priority

Before any testing, conduct thorough visual inspection:
- Equipment function/operation
- Environment and housekeeping (suitability for location/use)
- Flex/cable condition
- Plug condition
- Socket outlet condition
- Visible appliance damage

**Critical point**: Equipment can be unsafe due to environment even if equipment itself looks fine.

### Common Failure Points

**Plugs are frequent weak points**:
- Physical damage/cracks
- Burning signs (inside or outside)
- Flex not properly entered plug
- Loose or incorrect fuses
- Loose copper strands
- Missing earth on Class 1 equipment
- Taped flex or poor repairs
- Wrong cable type used
- Excessive visible copper
- Insecure covers
- Cardboard insert (fire risk)

### Safe Working with In-Service Equipment

- Some checks require equipment to be energized (e.g., functional tests)
- Live working only when unreasonable to isolate, reasonable to keep live, and suitable precautions taken
- Never repair during inspection unless explicitly part of your role
- Mark failed items and report; equipment belongs to customer

## Testing Safety

### Test Equipment Safety

Test equipment must be safe and accurate:
- Compliant with [[BS EN 61010]] (safety)
- Compliant with [[BS EN 61557]] (accuracy)
- Test leads/probes compliant with [[GS38]]
- Safe leads/probes condition is as important as knowing test steps

### High-Voltage Test Hazards

Some dead tests apply significant voltage:
- Insulation resistance tests use 500 V DC
- Can damage sensitive equipment (RCDs, LED lighting, IT equipment)
- Must understand what is connected before applying test voltages

### Vulnerable Equipment

Know what equipment might be damaged by testing:
- RCDs
- LED lighting
- IT/computer equipment
- Sensitive electronic equipment
- Some heating equipment

## Competence Standards

### Legal Framework

- **Health and Safety at Work Act**: Overall duty of care
- **Management of Health and Safety at Work Regulations**: Risk assessment, competence
- **Electricity at Work Regulations**: Safe systems of work
- **PUWER**: Equipment safety standards
- **Building Regulations**: Installation compliance

### Professional Standards

- **BS 7671**: Wiring Regulations (technical requirements)
- **GN3** (Guidance Note 3): Inspection and testing standards
- **On-Site Guide**: Practical guidance
- **Best Practice Guides**: Industry best practices

## Practical Safety Advice

### Before Starting Work

- Know what is being installed/tested
- Know what equipment is connected
- Know what might be damaged by testing
- Obtain external earth fault loop impedance and prospective fault current data
- Know the earthing arrangement (TN-C-S, TN-S, TT)
- Identify any particularly vulnerable equipment

### During Work

- Never withdraw DNO fuses without authorization
- Perform safe isolation correctly every time
- Use correct instrument for each test
- Eliminate parallel paths that could distort readings
- Take measurements at point of work, not just at distribution board
- Test in correct sequence (dead tests before live)

### After Work

- Record all results for evidence/protection
- Re-test after site visits to catch damage
- Document any defects clearly
- Mark failed equipment appropriately
- Do not repair unless explicitly authorized
- Maintain test equipment accuracy records
