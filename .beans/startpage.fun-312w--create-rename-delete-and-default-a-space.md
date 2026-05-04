---
# startpage.fun-312w
title: Create, rename, delete, and default a Space
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:14:27Z
updated_at: 2026-05-04T13:14:27Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-c2pi
---

Approved vertical slice 6 for startpage.fun v1.

Goal:
- Implement the full Space lifecycle except advanced overflow behavior

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [ ] Add Vitest coverage for unique-name enforcement, delete safeguards, and default-space fallback logic
- [ ] Add at least one Playwright happy-path E2E covering Space creation, rename, default selection, and reopening to the expected Space

Notes:
- This slice should establish the core persistent Space model before advanced layout and overflow behaviors build on top of it.
