---
title: In-Service Testing
type: topic
domain: electrics
sources: [raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md]
related: [Electrical Safety, Class 1 Equipment, Class 2 Equipment, Protective Conductor Continuity, Insulation Resistance Testing, Test Documentation]
created: 2026-04-12
updated: 2026-04-12
tags: [in-service-testing, pat, appliances, formal-inspection, equipment-testing]
---

# In-Service Testing

Systematic inspection and testing of electrical equipment in use, commonly called PAT (Portable Appliance Testing). Focuses on competent visual inspection, correct testing procedures, and accurate documentation.

## Levels of In-Service Checks

Equipment undergoes different levels of verification depending on competence and requirements:

### 1. User Check

- Performed by unskilled users
- Basic visual look-over
- Awareness of obvious damage
- Low level of assurance

### 2. Formal Visual Inspection

- Performed by responsible competent person
- Systematic visual examination
- Professional assessment of condition
- Covers environment, function, damage, safety concerns
- No testing equipment used

### 3. Combined Inspection and Test

- Performed by competent person
- Full formal visual inspection, PLUS
- Complete electrical testing
- Highest level of assurance
- Appropriate for higher-risk equipment or regular service

## Formal Visual Inspection

### Priority and Importance

**Visual inspection is first and most important**:
- Many equipment safety issues are visible
- Should be completed before any testing
- Often reveals why equipment might fail electrical tests
- Prevents unnecessary testing of clearly unsafe equipment

### Core Inspection Checks

Systematic visual examination of:

1. **Equipment function/operation**
   - Turn on if appropriate and safe
   - Verify controls work
   - Check for obvious operational problems

2. **Environment and housekeeping**
   - Is equipment suitable for its location?
   - Is the environment safe for this equipment?
   - Temperature extremes?
   - Dust/moisture/vibration issues?
   - Overcrowding or interference?

3. **Flex/cable condition**
   - Cuts or abrasions?
   - Crushed or kinked?
   - Deteriorated insulation?
   - Excessive wear?
   - Evidence of repair/taping?

4. **Plug condition**
   - Physical damage or cracks?
   - Burning signs (inside or outside)?
   - Flex entering properly?
   - Fuse condition (below)?
   - Earth pin present and correct?
   - Cover secure and clean?

5. **Socket outlet condition**
   - Scorching or burning?
   - Loose or damaged?
   - Suitable for the equipment?
   - Is an RCD protecting it?

6. **Visible appliance damage**
   - Cracks in casing?
   - Burning or scorch marks?
   - Water damage?
   - Rust or corrosion?
   - Mechanical damage?

### Critical Principle

**Equipment can be unsafe due to environment even if equipment appears fine**:
- Adequate equipment in wrong environment = unsafe
- Must assess both the equipment AND where it is used

### Plug Failure Points

Plugs are a frequent weak point for failures:

**Common failure modes**:
- Physical cracks or breaks
- Burning/melting (inside or outside)
- Flex sheathing not properly entered into plug
- Loose or missing fuse
- Incorrect fuse type (foil, screw instead of BS1362)
- Loose copper strands visible
- Missing earth pin on Class 1 equipment
- Damaged flex entering plug
- Taped or heavily repaired flex
- Two different cables forced into one plug
- Wrong cable type (e.g., twin-and-earth instead of flex)
- Excessive loose copper visible
- Plug cover insecure, damaged screws, missing
- Cardboard insert left inside (fire hazard)

**Pre-1984 plugs**:
- Unsleeved live/neutral pins: Not automatic failure, but replacement often recommended
- If replacing, dispose of old plug (don't reuse)

**Class 2 equipment plugs**:
- May have plastic earth pin (for opening socket shutters only)
- Not a conductive earth pin

**Rewirable plugs**:
- Should have solid metal earth pin
- Non-rewirable Class 2 may have plastic pin

**Counterfeit/non-compliant plugs**:
- May show incorrect sleeving arrangements
- Check for authenticity and compliance

## Four Main Tests

Equipment testing involves four main test types:

### 1. Protective Conductor Continuity (Class 1 Only)

**Purpose**: Prove continuous earth path from plug to exposed conductive parts

**Applicable to**: Class 1 equipment only (Class 2 has no earth)

**Key point**: Simple beeper is insufficient; must measure actual resistance

**Pass criterion**: Maximum 0.1 Ω + R
- Where R = flex protective conductor resistance
- Example: 1 m of 0.75 mm² flex → R = 0.026 Ω → max = 0.126 Ω

**Calculation of R**:
```
R = (milliohms per meter × length in meters) / 1000 = ohms
```

Use Appendix 5 table for flexible cable resistance values.

**Engineering judgment for older equipment**:
- May allow 0.5 Ω + R (decision based on practical safety and condition)

### 2. Insulation Resistance (Class 1 and Class 2)

**Purpose**: Prove insulation is intact (no unintended contact between conductors/earth)

**Method concept**: Similar to inflating inner tube to reveal punctures

**Test voltage**: 500 V DC

**Setup**:
- Line and neutral joined together
- Test against earth
- Power switches should be ON
- Covers should be in place
- Equipment must be suitable for test voltage

**Minimum acceptable results**:
- Class 1 equipment: Minimum 1 megaohm (1 MΩ)
- Class 2 equipment: Minimum 2 megaohms (2 MΩ)

**Sensitivity note**: 500 V can damage sensitive equipment (computing, LED lighting). Use protective conductor current test as alternative for sensitive gear.

### 3. Protective Conductor Current Test (Alternative)

**When to use**: For voltage-sensitive equipment

**Examples**: 
- Computer equipment
- LED lighting
- Electronic equipment sensitive to 500 V

**Method**: Measures actual leakage current to earth instead of applying high voltage

**Advantage**: Less likely to damage sensitive equipment

### 4. Functional Test

**Purpose**: Confirm equipment actually works

**Checks**:
- Controls operate
- Switches function
- Thermostats work
- Display/feedback systems function
- Movement (fans, motors) operates

**Load testing** (specialist):
- Sometimes required for heating/cooking equipment
- Verifies equipment delivers correct power/heat
- Not routine, but may be required for specific applications

## RCD Testing

If equipment is plugged into RCD-protected socket outlet:
- RCD test button should be checked
- RCD function verified
- Ensures protection device is functional

## The Inspect/Test vs Repair Distinction

### Critical Professional Boundary

Your role during inspection and testing:
- **Inspect**: Look and assess condition
- **Test**: Apply testing procedures
- **Report**: Document findings and communicate results

Your role does NOT include:
- Taping or repairing damaged flex
- Tightening loose screws
- Replacing damaged parts
- Fixing visible issues

### Why This Matters

1. **Scope clarity**: You're there to assess, not fix
2. **Legal protection**: You're not responsible for repairs you didn't authorize
3. **Customer responsibility**: Equipment belongs to customer; they decide on repairs
4. **Documentation**: Red label on failed item is your responsibility; fixing is theirs

### What to Do With Failed Items

1. Mark clearly with red fail label
2. Document the failure in detail
3. Explain to customer what failed and why
4. Remove from service or restrict use
5. Report in your documentation
6. Customer decides on repair/replacement

**Customer may ignore your fail label** - that's their choice. Your responsibility is to inspect, test, and report accurately.

## Safe Working With In-Service Equipment

### "In Service" Definition

Equipment is actively in use and may need to remain energized for:
- Functional testing
- Control verification
- Safe operation checks

### Live Working Conditions

Live working is permitted when:
- It is unreasonable to isolate (e.g., continuous operation needed)
- It is reasonable to work with it live (proper safeguards in place)
- Suitable precautions are taken (safety-conscious working)

### Example: Fan Control Test

Cannot verify fan speed controls without powering the fan:
- Must work on live equipment
- Use safe practices
- Suitable precautions (proper positioning, no contact with dangerous parts)

## Test Equipment Requirements

### Safety Standards

Test equipment must comply with:
- **BS EN 61010**: Safety of the test equipment itself
- **BS EN 61557**: Accuracy of measurements
- **GS38**: Safe condition of test leads and probes

### Lead and Probe Safety

GS38 emphasis on:
- Lead/probe condition
- Insulation integrity
- Flexibility and strength
- Safe connection methods

Test leads are what you handle at potentially live points - their condition is critical.

### Calibration and Accuracy

**Not sufficient**: Annual calibration alone

**Best practice**:
- Regular accuracy checks using calibration card/standard
- Record these checks systematically
- Calibration proves accuracy on calibration date only
- Regular checks prove ongoing accuracy
- Accuracy records defend against later challenges

## PAT Test Equipment Types

### Equipment Options Available

**Basic PAT testers**:
- Simple pass/fail indication
- Lower cost
- Limited flexibility

**Mid-range testers**:
- Displays actual test values
- More test options
- Better for varied work

**High-end/industrial testers**:
- Memory storage
- Printing capabilities
- Multiple test mode options
- Data management

### Cost-Effectiveness

- Normal installation test meter can perform PAT tests
- PAT adapters convert standard meters to PAT function
- Dedicated PAT tester worthwhile if doing regular PAT work (saves time)
- Decent payback for equipment investment if using regularly

### Commercial Viability

- PAT pricing per item lower than earlier years
- Still profitable as day-rate service with efficient execution
- Low overhead (meter + knowledge)
- Good employability skill
- Useful add-on to electrical services business

## Documentation Forms (V-Forms)

### The V-Form System

IET model forms for PAT documentation (V1-V6):

**Form V1**: Equipment Register / Asset Register
- Equipment list
- Locations and IDs
- Planned inspection intervals

**Form V2**: Inspection and Test Record
- Details of equipment tested
- Visual inspection findings
- Test results
- Date and tester signature

**Form V3**: Labels
- Pass/fail labels for equipment
- Color-coded (green pass, red fail, yellow for attention)

**Form V4**: Repair Register
- Equipment repaired
- What was done
- Outcome

**Form V5**: Faulty Equipment Register
- Failed items
- Reason for failure
- Status (awaiting repair, withdrawn, etc.)

**Form V6**: Test Equipment Accuracy Record
- Meter calibration dates
- Accuracy check dates
- Results/verification
- Tester name and signature

### Labeling Practices

Important principle:
- **Do NOT include "next inspection date" on label**
- Reason: Equipment may move, changing risk assessment and inspection frequency
- Fixed future dates can be misleading or inappropriate
- Risk assessment drives inspection interval, not label date

### Exam Tips

Instructor strongly recommends:
- Make Post-it note summary of V1-V6 and their purposes
- Fifth edition book can be confusing/inconsistent about form naming
- Reference forms directly rather than relying on textual descriptions
- Knowing form purposes is exam-critical

## Appendices for Revision

Key appendices to emphasize in study:

- **Appendix 2**: IP ratings table (likely exam topic; important for equipment assessment)
- **Appendix 5**: Flexible cable resistance values (used for continuity pass criterion calculation)
- **Appendix 6**: Condition of plugs and equipment (visual inspection reference; detailed fail conditions)
- **Appendix 7**: IT equipment racks (specific application guidance)
- **Appendix 8**: Basic electrical calculations (formulas and concepts)

### Study Approach

- Use Post-it notes (where exam rules allow)
- Repeatedly review tables and appendices
- Improve recall through repetition
- Develop sense of realistic values

## Key Takeaways

- PAT is mostly competent visual inspection + correct testing + accurate reporting
- Do not repair; mark and report
- Class 1 and Class 2 paths are different (continuity test Class 1 only)
- Know pass criteria: 0.1 + R for continuity, 1 MΩ (Class 1) and 2 MΩ (Class 2) for insulation
- Fuse size follows cable size, not appliance wattage
- Test lead/probe condition (GS38) matters as much as test procedure
- V-forms knowledge is exam-critical
- PAT is viable skill with good employability value
