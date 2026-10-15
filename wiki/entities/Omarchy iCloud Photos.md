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
updated: '2026-10-15'
tags:
  - icloud
  - photos
  - linux
  - omarchy
  - native-app
summary: "Open-source Quickshell client for browsing a recent slice of an iCloud photo library on Omarchy, with its documented delete, restore and unofficial-API risks."
---

# Omarchy iCloud Photos

A third-party photo-library interface for [[Omarchy]], announced by @jankeesvw. It is an open-source native client for browsing a recent portion of an iCloud photo library, with delete/undo, HDR video and Live Photos described. It is saved in [[Bookmarks - Developer Tools]].

## What it is

- As of 22 September 2026, the repository describes a Quickshell interface over icloudpd and a Python helper.
- It browses a recent window of photos and videos. It does not promise to replace Apple Photos in full.
- The repository includes a demo library, so the interface can be tried without personal photos.

## Data and action boundaries

The README spells out what the tool can do to a library, and the limits of the integration.

- Downloading copies is a different operation from deleting or restoring iCloud assets.
- Deleting from a Shared Library affects the shared library.
- The integration relies on an unofficial API that Apple can change.

These are documented behaviours, not a security audit or a tested recovery path.

## Before connecting a library

Check these first:

- Where sessions and originals live.
- Which operations write to iCloud.
- Whether undo works if an operation is interrupted.
- How authentication and data handling work, and how mature the project is.

For account and credential handling in general, see [[Digital Security]].

## Links

- [Announcement post](https://x.com/jankeesvw/status/2101977870289527284) — @jankeesvw announcing the iCloud photo client for Omarchy.
- [omarchy-icloud-photos repository](https://github.com/jankeesvw/omarchy-icloud-photos) — Source and README: the Quickshell interface, icloudpd and Python helper, the demo library, and the delete, restore and Shared Library notes above.

## Related

[[Omarchy]] · [[Bookmarks - Developer Tools]] · [[Digital Security]] · [[Developer_Resources|Developer Resources]]
