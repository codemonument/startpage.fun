---
# startpage.fun-1l0i
title: Add keyboard focus, movement, and menu access
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:30Z
updated_at: 2026-05-04T13:17:30Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-pao8
    - startpage.fun-jktm
    - startpage.fun-hqkr
---

Approved vertical slice 13 for startpage.fun v1.

Goal:
- Implement keyboard-first navigation and reordering across Spaces, Dials, menus, and Trash

Dependencies:
- Blocked by: Reorder Dials and enforce Add Tile behavior (startpage.fun-pao8)
- Blocked by: Render the Space bar with overflow modes and full Space actions (startpage.fun-jktm)
- Blocked by: Search Dials in the Command Box (startpage.fun-hqkr)

Test expectations:
- [ ] Add Vitest coverage for focus-transition rules, keyboard move decision logic, and command/menu shortcut routing guards
- [ ] Add at least one Playwright happy-path E2E covering keyboard navigation, moving a focused item, and opening the relevant menu or command flow without using the pointer

Notes:
- This slice should unify keyboard behavior across the major surfaces after the relevant underlying layout and search features exist.
