---
title: Helium Browser
type: entity
domain: dev
sources:
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
related:
  - Bookmarks - Developer Tools
  - Digital Security
  - Developer Resources
  - Technology Critique
created: '2026-09-22'
updated: '2026-10-15'
tags:
  - browser
  - privacy
  - chromium
  - open-source
summary: "Chromium-based privacy browser: its documented gaps (no sync, mobile, Widevine or password manager), 0.17.2 changes, and ClientHello splitting tests."
---

# Helium Browser

Helium is a Chromium-based desktop browser. The project describes default ad and tracker blocking, reduced dependence on Google services, and consent-based browser services (from [[Bookmarks - Developer Tools]]).

## Documented limits

The official FAQ, as of 22 September 2026, says:

- Data sync and mobile support are not yet available.
- Widevine-protected media is unsupported.
- There is no built-in password manager.

The 0.17.2 discussion lists sync and mobile work as upcoming.

## Release 0.17.2

The [0.17.2 release discussion](https://x.com/cyyynthia_/status/2101259480981758225) highlights:

- CNAME uncloaking in the built-in uBlock Origin.
- Keychain safeguards.
- Global Privacy Control (GPC).
- Optional TLS ClientHello splitting.
- Lazy tab restoration.
- Interface work.

## ClientHello splitting and debugging warnings

wukko (@uwukko), Helium's developer, asked users on censored networks to test splitting the TLS ClientHello and pairing it with secure DNS. A later update discusses making the compact debugging warning clearer in the latest build.

Fragmenting the ClientHello may bypass some simple filtering, but it can also fail or make traffic conspicuous. A debugging warning needs to stay understandable and hard for malicious pages to normalise.

For browser privacy, extension trust and update behaviour more broadly, see [[Digital Security]].

## Links

- [Helium official site](https://helium.computer/) — The project's site and FAQ; the source for the documented limits above.
- [Helium Browser 0.17.2 release discussion](https://x.com/cyyynthia_/status/2101259480981758225) — @cyyynthia_ quoting @heliumbrowser on the 0.17.2 changes.
- [Experimental TLS and developer-mode work](https://x.com/uwukko/status/2088882137877663921) — @uwukko's request that users on censored networks test ClientHello splitting with secure DNS.
- [Development update](https://x.com/uwukko/status/2095077590994149563) — @uwukko on making the compact debugging warning clearer in the latest build.

## Related

[[Bookmarks - Developer Tools]] · [[Digital Security]] · [[Developer_Resources|Developer Resources]] · [[Technology_Critique|Technology Critique]]
