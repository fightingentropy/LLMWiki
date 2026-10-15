---
title: Digital Security
type: topic
domain: dev
sources:
  - snapshots/1790804551519-100cbe63e7fd/bookmarks/Developer Tools.md
  - bookmarks/Reference & Utilities.md
  - bookmarks/AI & Agents.md
  - bookmarks/Developer Tools.md
  - bookmarks/Markets & Crypto.md
  - clippings/bookmark-updates-2026-09-22/Reference & Utilities.md
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
  - clippings/bookmark-updates-2026-09-22/Business & Startups.md
  - clippings/bookmark-updates-2026-09-22/Personal & Life.md
related:
  - Evergreen Lessons from X - September 2026
  - X-Bookmarks
  - Grok Bot
  - AI Agents
  - Developer Resources
  - Technology Critique
  - Quicker
  - Omarchy iCloud Photos
  - Helium Browser
  - Bookmarks - Reference & Utilities
  - Bookmarks - Developer Tools
  - Bookmarks - Business & Startups
  - Bookmarks - Personal & Life
  - Bookmarks - AI & Agents
  - Bookmarks - Markets & Crypto
  - Omarchy
created: 2026-08-29T00:00:00.000Z
updated: '2026-10-15'
tags:
  - security
  - privacy
  - accounts
  - devices
  - least-privilege
  - phishing
  - vpn
  - dns
  - provenance
summary: "A practical baseline for accounts, phones, agent permissions and network privacy, with the saved checklists and tools behind each rule."
---

# Digital Security

A practical security layer connecting account recovery, phone theft, automated phishing, and agent permissions. The wiki holds a short baseline for accounts and phones, a rule set for giving agents access to real accounts, notes on settings that deliberately weaken a boundary, and a layered view of network privacy. Each rule is backed by a saved checklist, vendor document or post listed under Resources.

## Account and phone baseline

- Use a password manager with unique credentials; prefer passkeys or hardware security keys where supported. Karpathy's [digital-hygiene checklist](https://karpathy.bearblog.dev/digital-hygiene/) adds multiple hardware keys for critical accounts, random stored answers to security questions, full-disk encryption, fewer IoT devices, encrypted messaging, tracker controls, and keeping personal activity off monitored work devices.
- Use authenticator-based MFA rather than SMS when practical. (from [[Bookmarks - Reference & Utilities]])
- Keep software current and verify unexpected recovery, payment, and login requests through an independent channel, even when voice or video appears familiar. This is the core of the [family account-security checklist for automated phishing](https://x.com/EzraJNewman/status/2085348692593115306); the post's loss totals and forecast of an imminent attack wave are unsourced.
- On iPhone, use a strong non-obvious passcode, Find My, Send Last Location, a trusted recovery contact, carrier number-transfer protection, and Stolen Device Protection (consider "Always"). Review what is reachable from the locked screen. Apple's current guidance should override social-media checklists because feature dependencies can change. (from [[X-Bookmarks]])
- Contradiction: the [original iPhone theft thread](https://x.com/jaxoncoder/status/2085158362162057638) advises disabling Significant Locations, but [Apple's guidance](https://support.apple.com/120340) requires it. Follow Apple and the carrier. The thread is useful on shoulder-surfing; its minute-by-minute attack claims are anecdotal.
- Never put a disposable phone number on an account whose recovery, privacy or security matters. (from [[Bookmarks - Reference & Utilities]])
- Password-manager alternatives: Proton Pass and Bitwarden are pitched as cheaper, open-source-client alternatives to 1Password. Compare family sharing, passkeys, emergency access, SSH keys, export, recovery and audits on current plans before migrating.

## Agents and connected accounts

A connector's product label does not define its authority. The Public brokerage MCP example exposes both market-data tools and order placement/cancellation; connecting it is not inherently read-only. The safe sequence is to enumerate callable tools, disable mutation where possible, scope credentials, and require separate approval for trades. (from [[X-Bookmarks]] and [[Bookmarks - Markets & Crypto]])

The same rule applies to [[Grok Bot]], relationship graphs, and cross-device agent controllers: narrow role, minimum data, explicit approval for consequential actions, complete logs, and tested revocation.

- A personal relationship graph built from meeting transcripts, email, LinkedIn and Slack can suggest introductions and recall commitments, but ingesting that corpus carries consent, confidentiality and retention risk. (from [[Bookmarks - AI & Agents]])
- Cross-device agent controllers such as Zeron need their authentication, remote-execution boundary, update path and secret handling inspected before they get access to machines or repositories.
- Codex permission profiles show what least privilege looks like in practice: inheritable filesystem rules, per-domain network access, Unix-socket policy, and fail-closed administrative allowlists. (from [[Bookmarks - Developer Tools]])
- WhatsApp accounts linked to OpenClaw-style agents can be fingerprinted, per a posted security finding.
- A chatbot can feel like a closed confessional and invite disclosures people would never type into search. Interface warmth does not guarantee confidentiality or retention limits.

See [[AI Agents]] for the wider agent picture.

## Deliberately weakened boundaries

The macOS `ComputerUseAllowForbiddenTargets` preference relaxes a safety boundary. It belongs in troubleshooting notes, not default setup: enable only for an understood target and delete the preference afterward.

```sh
defaults write -g ComputerUseAllowForbiddenTargets -bool YES
defaults delete -g ComputerUseAllowForbiddenTargets
```

Experimental censorship-bypass features such as TLS ClientHello splitting can also make traffic fail or stand out; suitability depends on the network and personal risk. Helium's developer asked users in censored networks to test splitting paired with secure DNS. [[Helium Browser]] gathers the browser's privacy-feature references; TLS fragmentation and debugging-warning changes remain version-specific.

## Where your data goes

- [[Quicker]] raises the distinction between storing messages locally and processing, syncing, or backing them up elsewhere. Check platform authorisation, encryption, model access and retention before connecting private messages.
- [[Omarchy iCloud Photos]] separates downloading copies from operations that change iCloud, including Shared Library assets. Audit authentication and deletion behaviour before granting library access. See also [[Omarchy]].
- An account-console bookmark is a navigation reference. It is not evidence that a service is connected, installed, or activated. The saved consoles (HMRC Developer Hub, Enable Banking, Tailscale, Twilio, Cerebras and others) are listed in [[Bookmarks - Personal & Life]].
- Some TVs collect viewing data. Samsung's optional automatic content recognition runs under "Viewing Information Services" and can be turned off in the TV's Terms or Privacy settings; menus vary by model and region.
- Apple Intelligence's Writing Assistance can be disabled through Screen Time restrictions in iOS 27; check the menus against the installed build.

## Identity and provenance

Content credentials, reverse-image search, account-recovery services, and disposable phone numbers involve different provenance and recovery boundaries; a missing marker or search result does not itself establish authorship or identity.

- Content-credential metadata on AI-generated files can be stripped by a tool or lost through ordinary file transforms. Authentication systems should not assume it survives, and removing it to misrepresent authorship is off-limits.
- A widely shared image can stay unidentified even with reverse-image search available. Use provenance tools while respecting the subject's privacy.
- KYC misuse is kept only as a fraud and privacy-risk reference: a post offering alleged identity details and images for bypassing KYC, saved without any of its personal data. Never use it for impersonation or account verification. (from [[Bookmarks - Reference & Utilities]])
- Private-account graph inference (a project advertised as inferring interactions involving private Instagram accounts) is catalogued as a privacy-risk claim, not a workflow to perform. (from [[Bookmarks - Developer Tools]])

## Privacy has separate layers

A VPN exit address is only one signal. Account activity, browser configuration and locale can remain identifying. MDN documents possible address exposure through WebRTC ICE candidates and a relay-only application policy; the actual exposure depends on configuration. Encrypted DNS protects DNS exchanges, not every traffic or identity signal. Check the actual device and browser rather than relying on universal bypass or anonymity claims. (from [[Bookmarks - Developer Tools]])

- A VPN is an encrypted-routing technique, not just a product. It can be self-hosted with WireGuard or OpenVPN on an ordinary server, so blocking named commercial providers is different from blocking the technique.
- Commercial VPN no-log and no-KYC promises are vendor claims.
- Cloudflare's `1.1.1.2` and `1.0.0.2` resolvers block domains classified as malicious. That is a useful router-level layer, not antivirus: it cannot inspect files, IP connections or newly uncategorised domains, and misclassification happens.
- Remote access has two separate controls: private-network reachability (for example Tailscale) and SSH or remote-desktop authentication. Tailscale's documentation confirms ordinary SSH authentication stays separate from network access. Test recovery for when the connection drops.

The complete evergreen selection is [[Evergreen Lessons from X - September 2026]].

## Resources

### Accounts, passwords and phones

- [Karpathy's digital-hygiene checklist](https://karpathy.bearblog.dev/digital-hygiene/) — Andrej Karpathy's layered personal-security list: password manager, multiple hardware keys, random security-question answers, disk encryption, IoT reduction, encrypted messaging, tracker controls and work/personal separation. Build around your own threat model and recovery plan; recheck its named products and claimed 1,000-fold risk reduction. _(@karpathy)_
- [Family account-security checklist for automated phishing](https://x.com/EzraJNewman/status/2085348692593115306) — Password manager, passkeys or hardware keys, authenticator MFA over SMS, prompt updates, and out-of-band checks on unexpected calls, payment requests and recovery prompts even when the voice or video seems familiar. _(@EzraJNewman)_
- [iPhone theft-hardening checklist (Apple Support)](https://support.apple.com/120340) — Apple's support page behind the iPhone baseline above: Stolen Device Protection and the settings around it. Follow it over social-media checklists.
- [iPhone theft-hardening thread](https://x.com/jaxoncoder/status/2085158362162057638) — The thread behind the iPhone checklist. Good on shoulder-surfing risk; its advice to disable Significant Locations conflicts with Apple's requirement for Stolen Device Protection. _(@jaxoncoder)_
- [Proton Pass and Bitwarden as 1Password alternatives](https://x.com/uwukko/status/2095452240639074312) — Comparison lead stressing free tiers, open-source clients and lower prices; feature parity is not guaranteed. _(@uwukko)_
- [Temp Number](https://temp-number.com/) — Disposable phone-number service. Never use it for accounts whose recovery, privacy or security matters.

### Agents and connectors

- [Public brokerage MCP server](https://github.com/PublicDotCom/publicdotcom-mcp-server) — Public's official MCP server. It documents read tools for quotes, option chains, Greeks and multi-leg quotes, and also order-placement and cancellation tools, so connecting it is not read-only. Keep credentials in secure configuration and require separate approval for trades.
- [Grok Bot walkthrough of the Public MCP](https://x.com/JasonL_Capital/status/2093130738371539046) — Jason Luongo connects a Public brokerage account to [[Grok Bot]] for quotes, option chains and strategy quotes. The free-access claim may not apply to every account. _(@JasonL_Capital)_
- [Public quote endpoint docs](https://public.com/api/docs/resources/market-data/get-quotes) — Public's API reference for live quotes; check account eligibility, entitlements, timestamps and market hours.
- [Codex reusable least-privilege permission profiles](https://x.com/thsottiaux/status/2071636285807059315) — Inheritable filesystem rules, per-domain network access, Unix-socket policy and fail-closed admin allowlists for a coding agent. A concrete model of scoped agent permissions. _(@thsottiaux)_
- [Zeron cross-device agent control plane](https://zeron.sh) — Native Rust and GPUI interface for controlling agents across devices. An open-source interface direction, not a security endorsement. [Original post](https://x.com/winglee/status/2088325135422173226). _(@winglee)_
- [AI-assisted relationship graph](https://x.com/edleonklinger/status/2090106932916883750) — Ed Leon Klinger on combining transcripts, email, LinkedIn and Slack to suggest introductions and recall commitments. Anecdotal; the data it ingests creates consent, confidentiality and retention risks. _(@edleonklinger)_
- [WhatsApp fingerprinting risk for agents](https://x.com/TalBeerySec/status/2018797533196324891) — Security finding that WhatsApp accounts linked to OpenClaw-style agents can be fingerprinted. _(@TalBeerySec)_
- [Private-feeling AI interfaces invite intimate disclosure](https://x.com/signulll/status/1920160261383528782) — A chatbot feels like a confessional, not a search box, so people share more. Warmth does not mean confidentiality or retention limits. _(@signulll)_
- [Portable Codex identity across personal and work](https://x.com/Jaytel/status/2071701444126806315) — Product model for one user-owned AI account with employer-funded work usage, hard privacy boundaries between the two, organisation-specific IP retention, and portable general preferences or memory. _(@Jaytel)_
- [Cybersecurity skills library for coding agents](https://x.com/Dinosn/status/2032887843802984488) — Open-source collection of agent skills covering DFIR, threat hunting and cloud security. _(@Dinosn)_

### Weakened boundaries and browsers

- [Allow macOS Computer Use to target normally forbidden UI](https://x.com/steipete/status/2074795172295291224) — Peter Steinberger's global `ComputerUseAllowForbiddenTargets` preference. A troubleshooting reference only; revert it with `defaults delete` when finished. _(@steipete)_
- [Helium Browser TLS ClientHello splitting](https://x.com/uwukko/status/2088882137877663921) — Helium's developer asks users in censored networks to test ClientHello splitting with secure DNS. It may bypass some simple filtering but can also fail or make traffic conspicuous. _(@uwukko)_
- [Helium debugging-warning update](https://x.com/uwukko/status/2095077590994149563) — Development update on making the compact debugging warning clearer in the latest build. Such warnings need to stay understandable and hard for malicious pages to normalise. _(@uwukko)_
- [Helium Browser 0.17.2 release discussion](https://x.com/cyyynthia_/status/2101259480981758225) — CNAME uncloaking in built-in uBlock Origin, keychain safeguards, GPC, optional ClientHello splitting and lazy restore. _(@cyyynthia_)_
- [Helium Browser](https://helium.computer/) — Helium's official site and current release, the reference for checking the privacy features above.

### Data boundaries

- [Quicker unified messaging inbox](https://x.com/tomaldertweets/status/2102005817507479969) — Announcement of an app claiming to merge LinkedIn, Slack, WhatsApp, X and iMessage with local storage, search, tags, reminders and suggested replies. _(@tomaldertweets)_
- [Quicker](https://quicker.chat/) — Product site for the unified inbox.
- [Omarchy iCloud Photos announcement](https://x.com/jankeesvw/status/2101977870289527284) — Native client for browsing a recent slice of an iCloud photo library under Omarchy, with delete/undo, HDR video and Live Photos. _(@jankeesvw)_
- [Omarchy iCloud Photos repository](https://github.com/jankeesvw/omarchy-icloud-photos) — Open-source code for the client; the place to audit authentication, data handling and deletion semantics.
- [Samsung Smart TV automatic-content-recognition control](https://www.samsung.com/us/support/answer/ANS10010616/) — Samsung's page on its optional ACR feature, which generates signatures of viewed content under "Viewing Information Services", and how to withdraw consent. _(found via @heynavtoor)_
- [Disabling Apple Intelligence in iOS 27](https://x.com/mysk_co/status/2099460590649446549) — Privacy-focused steps using Screen Time restrictions to disable Writing Assistance. Version-sensitive. _(@mysk_co)_

### Identity and provenance

- [Removing Claude content-credential metadata](https://x.com/guillaumemeyer/status/2095207287392501986) — Demonstrates a tool claimed to strip content credentials from Claude-generated files. Shows why provenance systems cannot rely on metadata surviving; not for misrepresenting authorship. _(@guillaumemeyer)_
- [Reverse-image-search story](https://x.com/zoomerfemales/status/2097459473136664865) — A widely circulated image whose subject stayed unidentified despite reverse-image search. A reminder to use provenance tools while respecting the subject's privacy. _(@zoomerfemales)_

### Network privacy

- [Treat privacy as several separate layers](https://x.com/cyber_razz/status/2103807409395233170) — VPN exit IP, WebRTC candidates, encrypted DNS and account or locale signals are separate layers; test the actual device and browser. _(@cyber_razz)_
- [Additional privacy-layers post](https://x.com/schmidt1024/status/2103300207857353043) — A second X source for the privacy-layers lesson above. _(@schmidt1024)_
- [MDN: RTCIceCandidate.address](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/address) — MDN reference on WebRTC candidate addresses, the privacy exposure they can carry, and relay-only ICE as an application control.
- [Cloudflare: DNS over TLS](https://www.cloudflare.com/learning/dns/dns-over-tls/) — Cloudflare's explainer on encrypted DNS: it protects DNS exchanges, not all traffic.
- [Why VPNs are encrypted tunnels, not merely products](https://x.com/brivael/status/2066598980335890939) — A VPN can be self-hosted with WireGuard or OpenVPN, so banning providers is not banning the technique. _(@brivael)_
- [nadanada VPN and eSIM](https://nadanada.me/) — Pay-as-you-go VPN and travel eSIM; its no-log and no-KYC statements are vendor claims.
- [Cloudflare malware-filtering DNS for a home router](https://x.com/lucataco/status/2094063782628577631) — Setting `1.1.1.2` and `1.0.0.2` on a router to block domains Cloudflare classifies as malicious. A network layer, not antivirus. _(@lucataco)_
- [Use a travel device as a frontend to home compute](https://x.com/ashen_one/status/2103757218621653040) — Run heavy jobs on a home workstation and use the laptop as the interface; network reachability and SSH authentication are separate controls. A workflow anecdote. _(@ashen_one)_
- [Tailscale: SSH over a private network](https://tailscale.com/docs/reference/ssh-over-tailscale) — Tailscale's documentation confirming ordinary SSH authentication remains separate from network access.

## Related

[[AI Agents]] · [[Developer_Resources|Developer Resources]] · [[Technology_Critique|Technology Critique]] · [[Grok Bot]] · [[Helium Browser]] · [[Quicker]] · [[Omarchy iCloud Photos]] · [[Omarchy]] · [[X-Bookmarks]] · [[Bookmarks - Reference & Utilities]] · [[Bookmarks - Developer Tools]] · [[Bookmarks - AI & Agents]] · [[Bookmarks - Markets & Crypto]] · [[Bookmarks - Business & Startups]] · [[Bookmarks - Personal & Life]] · [[Evergreen Lessons from X - September 2026]]
