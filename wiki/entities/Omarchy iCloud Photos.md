---
title: Omarchy iCloud Photos
type: entity
domain: dev
sources:
  - clippings/bookmark-updates-2026-09-22/Developer Tools.md
related:
  - Bookmarks - Developer Tools
  - Omarchy
  - Digital Security
  - Developer Resources
created: '2026-09-22'
updated: '2026-09-22'
tags:
  - icloud
  - photos
  - linux
  - omarchy
  - native-app
---

# Omarchy iCloud Photos

A third-party photo-library interface for [[Omarchy]]. The [project repository](https://github.com/jankeesvw/omarchy-icloud-photos), checked 2026-09-22, describes a Quickshell interface over icloudpd and a Python helper. It browses a recent window of photos and videos rather than promising a complete Apple Photos replacement.

## Data and action boundaries

The README distinguishes downloading copies from deleting or restoring iCloud assets. Shared Library deletions affect the shared library. It also says the integration relies on an unofficial API that Apple can change. These are documented behaviours, not a completed security audit or a tested recovery path.

Before adoption, establish where sessions and originals live, which operations write to iCloud, and whether undo works under interruption. The repository provides a demo library for interface evaluation without using personal photos.

The [retained announcement](https://x.com/jankeesvw/status/2101977870289527284) remains in [[Bookmarks - Developer Tools]]. No installation or library connection was performed for this ingest.

Related: [[Bookmarks - Developer Tools]] · [[Omarchy]] · [[Digital Security]] · [[Developer_Resources]]
