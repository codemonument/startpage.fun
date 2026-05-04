---
# startpage.fun-pao8
title: Reorder Dials and enforce Add Tile behavior
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:15:00Z
updated_at: 2026-05-04T13:15:00Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-kr5p
---

Approved vertical slice 7 for startpage.fun v1.

Goal:
- Implement manual Dial ordering and Add Tile visibility rules

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)

Test expectations:
- [ ] Add Vitest coverage for persisted Dial ordering, Add Tile visibility rules, and insertion-at-end behavior
- [ ] Add at least one Playwright happy-path E2E covering Dial reordering within a Space and persistence after reload

Notes:
- This slice should establish persisted in-Space Dial layout rules before keyboard and touch variants build on top.
