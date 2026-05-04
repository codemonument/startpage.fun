---
# startpage.fun-g3ip
title: Support touch interactions for Dials and Spaces
status: todo
type: feature
tags:
    - ready-for-human
created_at: 2026-05-04T13:17:37Z
updated_at: 2026-05-04T13:17:37Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-pao8
    - startpage.fun-jktm
    - startpage.fun-75co
---

Approved vertical slice 14 for startpage.fun v1.

Goal:
- Implement reliable touch tap, long-press, and drag behavior on the PWA surface

Dependencies:
- Blocked by: Reorder Dials and enforce Add Tile behavior (startpage.fun-pao8)
- Blocked by: Render the Space bar with overflow modes and full Space actions (startpage.fun-jktm)
- Blocked by: Delete to Trash and Restore into the original Space (startpage.fun-75co)

Test expectations:
- [ ] Keep Vitest coverage minimal unless gesture thresholds become isolated pure logic worth testing
- [ ] Add at least one Playwright touch-capable happy-path flow where practical, then validate manually on real devices as needed

Notes:
- This slice is HITL: implementation and validation likely need direct human judgment on real-device behavior.
