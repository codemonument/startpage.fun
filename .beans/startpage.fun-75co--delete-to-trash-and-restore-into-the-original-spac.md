---
# startpage.fun-75co
title: Delete to Trash and Restore into the original Space
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:17Z
updated_at: 2026-05-04T13:17:17Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-kr5p
    - startpage.fun-312w
---

Approved vertical slice 11 for startpage.fun v1.

Goal:
- Implement reversible delete, Trash access, restore, and per-Space undo

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)
- Blocked by: Create, rename, delete, and default a Space (startpage.fun-312w)

Test expectations:
- [ ] Add Vitest coverage for delete-to-trash transforms, restore targeting, undo-window rules, and original-position restoration rules
- [ ] Add at least one Playwright happy-path E2E covering delete, Trash access, restore, and returning the Dial to the original Space correctly

Notes:
- This slice should establish the reversible deletion model that later Trash management and keyboard/touch flows depend on.
