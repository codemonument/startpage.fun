---
# startpage.fun-5wl3
title: Run Command Mode actions and direct settings changes
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:10Z
updated_at: 2026-05-04T13:17:10Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-hqkr
---

Approved vertical slice 10 for startpage.fun v1.

Goal:
- Implement command execution, disabled-with-reason behavior, and direct settings actions

Dependencies:
- Blocked by: Search Dials in the Command Box (startpage.fun-hqkr)

Test expectations:
- [ ] Add Vitest coverage for command availability rules, disabled reason generation, and success/failure close behavior
- [ ] Add at least one Playwright happy-path E2E covering Command Mode, a successful command, and the expected UI/state result

Notes:
- This slice should establish the command-mode half of the unified Command Box after Dial search is in place.
