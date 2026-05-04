---
# startpage.fun-jktm
title: Render the Space bar with overflow modes and full Space actions
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:15:19Z
updated_at: 2026-05-04T13:15:19Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-312w
---

Approved vertical slice 8 for startpage.fun v1.

Goal:
- Implement Space switching, overflow handling, overflow menu behavior, and Space actions from the Space bar

Dependencies:
- Blocked by: Create, rename, delete, and default a Space (startpage.fun-312w)

Test expectations:
- [ ] Add Vitest coverage for overflow-mode decision rules, row-cap behavior, and visible-vs-overflow partition logic
- [ ] Add at least one Playwright happy-path E2E covering overflowed Spaces, switching, and a Space action from overflow UI

Notes:
- This slice should establish the full Space bar behavior before keyboard and touch refinements build on top.
