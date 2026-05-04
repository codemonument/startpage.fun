---
# startpage.fun-ro5t
title: Store and render the global background image through OPFS
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:42Z
updated_at: 2026-05-04T13:17:42Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-c2pi
---

Approved vertical slice 15 for startpage.fun v1.

Goal:
- Implement ingest, storage, processing, and rendering for the global background image

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [ ] Add Vitest coverage for background metadata rules, variant-selection logic, and removal/reset behavior
- [ ] Add at least one Playwright happy-path E2E covering adding a background image through the UI, reloading, and confirming persisted rendering behavior

Notes:
- This slice should establish the OPFS-backed background pipeline independently of Dial icon assets.
