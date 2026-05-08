---
# startpage.fun-jktm
title: Render the Space bar with overflow modes and full Space actions
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:15:19Z
updated_at: 2026-05-05T19:23:36Z
parent: startpage.fun-r7qz
---

Approved vertical slice 8 for startpage.fun v1.

Goal:
- Implement Space switching, overflow handling, overflow menu behavior, and Space actions from the Space bar

Dependencies:
- Blocked by: Create, rename, delete, and default a Space (startpage.fun-312w)

Test expectations:
- [x] Add Vitest coverage for overflow-mode decision rules, row-cap behavior, and visible-vs-overflow partition logic
- [x] Add at least one Playwright happy-path E2E covering overflowed Spaces, switching, and a Space action from overflow UI

Notes:
- This slice should establish the full Space bar behavior before keyboard and touch refinements build on top.

## Summary of Changes

- Added a dedicated Space-bar layout module for overflow-mode row-cap rules and visible-vs-overflow partitioning
- Added configurable overflow settings for multi-row, scroll, and menu modes plus a persisted row-cap setting
- Rendered overflowed Spaces in a dedicated overflow panel with switch and set-default actions available directly from the Space bar UI
- Added Vitest coverage for overflow-mode behavior, row-cap handling, and visible-vs-overflow partition logic
- Added a Playwright happy path covering an overflowed Space, switching from overflow, and running a Space-bar action from overflow UI

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
