---
# startpage.fun-pao8
title: Reorder Dials and enforce Add Tile behavior
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:15:00Z
updated_at: 2026-05-05T19:39:56Z
parent: startpage.fun-r7qz
---

Approved vertical slice 7 for startpage.fun v1.

Goal:
- Implement manual Dial ordering and Add Tile visibility rules

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)

Test expectations:
- [x] Add Vitest coverage for persisted Dial ordering, Add Tile visibility rules, and insertion-at-end behavior
- [x] Add at least one Playwright happy-path E2E covering Dial reordering within a Space and persistence after reload

Notes:
- This slice should establish persisted in-Space Dial layout rules before keyboard and touch variants build on top.

## Summary of Changes

- Added Dial layout helpers for persisted in-Space reordering and Add Tile visibility rules
- Extended Dial insertion tests to lock in append-at-end behavior for new Dials
- Added per-Dial reorder actions and persisted the updated order through reloads
- Rendered an Add Tile affordance that follows the configured visibility rule and jumps to the add form
- Added Vitest coverage for ordering behavior, Add Tile visibility rules, and insertion-at-end semantics
- Added a Playwright happy path covering Dial reordering within a Space and persistence after reload

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
