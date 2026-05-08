---
# startpage.fun-ro5t
title: Store and render the global background image through OPFS
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:42Z
updated_at: 2026-05-05T19:29:38Z
parent: startpage.fun-r7qz
---

Approved vertical slice 15 for startpage.fun v1.

Goal:
- Implement ingest, storage, processing, and rendering for the global background image

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [x] Add Vitest coverage for background metadata rules, variant-selection logic, and removal/reset behavior
- [x] Add at least one Playwright happy-path E2E covering adding a background image through the UI, reloading, and confirming persisted rendering behavior

Notes:
- This slice should establish the OPFS-backed background pipeline independently of Dial icon assets.

## Summary of Changes

- Added background-image metadata helpers for variant paths, compressed-vs-original selection, and reset behavior
- Added OPFS-backed background storage using a dedicated backgrounds directory plus metadata persisted through the app database
- Added UI controls for uploading, applying, previewing, persisting, and removing a global background image
- Applied persisted background rendering during shell hydration and kept retention-aware Trash cleanup intact
- Added Vitest coverage for background metadata and variant selection rules
- Added a Playwright happy path covering background upload, reload, and persisted rendering confirmation

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
