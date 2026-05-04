---
# startpage.fun-kr5p
title: Create and Launch a Dial from the active Space
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:12:41Z
updated_at: 2026-05-04T13:12:41Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-c2pi
---

Approved vertical slice 3 for startpage.fun v1.

Goal:
- Create a Dial manually from the active Space
- Launch it with the default launch behavior

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [ ] Add Vitest coverage for URL normalization, default title derivation, Dial creation rules, and launch-preference decision logic
- [ ] Add at least one Playwright happy-path E2E covering Dial creation from the active Space and successful launch

Notes:
- This slice should establish the first end-to-end Dial flow without pulling in broader editing or organizational features yet.
