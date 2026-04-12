---
title: RCD Protection
type: entity
domain: electrics
sources: [raw/electrics/Resources.md, raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 Inspection and Testing Demonstration.md, raw/electrics/transcripts/summaries/Summary - Electrics Webinar 4 PAT Testing.md]
related: [Circuit Protection, Building Regulations, Safe Zones, Electrical Safety, Cable Routing]
created: 2026-04-12
updated: 2026-04-12
tags: [protection, rcd, residual-current-device, earth-fault, electrical-safety]
---

# RCD Protection

Residual Current Device (RCD) - a critical protective device that detects earth faults and leakage currents, providing automatic disconnection to prevent electric shock and fire hazards.

## Purpose

RCD (Residual Current Device) protects against:
- **Earth faults**: Direct contact between live conductor and earth/metal
- **Electric shock**: Personal contact with live parts through damp conditions
- **Fire hazards**: Leakage currents that could cause ignition

## Operating Principle

### How It Works

RCD detects imbalance between live and neutral currents:
- In normal operation: Current flowing out on live = current returning on neutral
- In fault: Some current flows to earth instead (leakage)
- RCD detects this imbalance
- Automatic trip disconnects circuit

### Sensitivity

RCD sensitivity measured in milliamps (mA):

**30 mA RCD** (most common domestic):
- Trips at 30 mA leakage current
- Personal protection application
- Provides shock protection
- Faster trip (100-300 ms typical)

**300 mA RCD**:
- Trips at 300 mA leakage current
- Fault protection application
- Less sensitive
- Selective (allows 30 mA devices upstream to operate first)

### Trip Time

Trip must occur quickly:
- Typically 100-300 milliseconds for 30 mA devices
- Fast disconnection minimizes shock duration
- Critical for preventing electrocution

## Building Regulations Requirements

### Regulation 522.6.202: Cables in Safe Zones

**Requirement**: Cables less than 50 mm deep in safe zones must be 30 mA RCD protected

**Applies when**:
- Cable depth from surface less than 50 mm
- Routed in standard (non-safe) zones
- Risk of damage from drilling, nailing, etc.

**Purpose**: Mitigate risk of cable damage causing earth fault

**Exception**: Regulation 522.5.204 - if cables are in earthed metallic covering, conduit, or trunking, RCD may be avoided

### Regulation 522.5.204: Metallic Covering Alternative

**Requirement**: Cables in earthed metallic covering, conduit, or trunking may avoid RCD requirement

**Conditions**:
- Metallic covering must be properly earthed
- Continuity assured throughout route
- Proper connections at terminations
- Mechanical protection from damage

**Advantage**: Metallic conduit/trunking provides both mechanical and electrical protection

### Regulation 522.6.203: Metal Stud Walls

**Requirement**: Circuits in stud walls made mainly of metal require 30 mA RCD unless Regulation 522.6.204 is followed

**Applies to**:
- Modern metal stud partition systems
- Increasingly common in construction
- Risk: Metal studs could create fault path

**Solution**:
- 30 mA RCD protection, OR
- Follow Regulation 522.6.204 alternative (metallic covering)

## Types of RCD Protection

### Fixed RCD in Consumer Unit

**Installation**: Integral to distribution board
- Type A, Type AC RCD devices
- Protects all downstream circuits or specific circuits
- Installed by qualified installer
- Part of installation design

**Advantages**:
- Permanent protection
- Covers multiple circuits
- Part of coordinated protection scheme

### Socket Outlet RCD

**Installation**: RCD socket outlet
- Integrated RCD in socket
- Protects equipment plugged in
- Manual test button
- Can replace standard socket

**Advantages**:
- Selective protection for specific equipment
- Can add protection to existing installations
- Portable/can be moved
- Manual reset after trip

### Portable RCD Adapter

**Installation**: Between plug and socket
- Adapter with integrated RCD
- Plugs between appliance plug and socket
- Test button on adapter
- Portable

**Limitations**:
- May not be reliable long-term
- Can be left disconnected
- Not suitable for permanent installations
- Backup option only

## Testing RCD Function

### Manual Test Button

Every 30 mA RCD has manual test button:
- Simulates leakage current
- Should trip RCD immediately
- Confirms mechanical function
- Should be tested monthly (best practice)

**How to test**:
- Press test button
- RCD should trip (power off)
- Reset by moving main switch or pressing reset button
- Device now ready for use

**If doesn't trip**:
- Device may be faulty
- DO NOT use
- Replace RCD
- Have tested by qualified person if integrated RCD

### Electrical Testing

Professional RCD testing (live testing):
- Measures actual trip current
- Verifies trip time
- Part of initial verification
- Required for certification

**Test procedure** (outline):
- Use appropriate RCD test meter
- Apply leakage current gradually
- Measure actual trip point
- Record trip time
- Compare to standard (typically 30 mA, 100-300 ms)

## RCD Limitations

### Not 100% Safe

RCD has limitations:
- Does not prevent all hazards
- Requires proper installation
- Requires regular testing
- May not protect against all shock scenarios

### Some Leakage Tolerated

RCD tolerance:
- Typically trips at 30 mA
- But may tolerate minor leakage
- High-frequency leakage (some electronic equipment) may not be detected
- AC RCD (Type AC) may not detect DC leakage

### Nuisance Tripping

RCD can trip when not needed:
- Normal leakage from some equipment may cause trips
- IT equipment may have steady leakage
- Wet environments may cause phantom tripping
- Coordination with selective RCDs helps

## Coordination with Other Protection

### Selective RCD Arrangement

**Concept**: Use RCDs with different sensitivities in series

**Example**:
- 300 mA RCD at distribution board (main protection)
- 30 mA RCD on individual circuits or outlets (personal protection)
- If fault on one circuit: 30 mA device trips first
- Only that circuit loses power
- Other circuits remain operational

**Advantage**: Fault on one circuit doesn't black out entire installation

## Practical Considerations

### RCD and Sensitive Equipment

Some equipment may cause problems with RCDs:
- LED lighting may have leakage triggering RCD
- IT equipment may have continuous leakage
- Some heating equipment may have leakage
- May need selective arrangement or touch current test instead

### Regular Testing

**Best practice**:
- Monthly manual test button operation
- Annual professional testing
- Record results
- Part of ongoing maintenance

### Documentation

RCD details should be recorded:
- Type and sensitivity (30 mA, 300 mA, etc.)
- Location in installation
- What circuits it protects
- Test results and dates

## Summary

**What RCD does**:
- Detects earth faults
- Protects against electric shock
- Automatic disconnection if leakage detected

**When required**:
- Cables less than 50 mm deep in certain zones
- Metal stud wall circuits
- Personal protection circuits
- Specified in design

**How to verify**:
- Monthly manual test (test button)
- Annual/professional electrical testing
- Record keeping

**Limitations to know**:
- Not 100% protection
- Some equipment tolerates minor leakage
- Requires proper installation and maintenance
- Not substitute for other protective measures
