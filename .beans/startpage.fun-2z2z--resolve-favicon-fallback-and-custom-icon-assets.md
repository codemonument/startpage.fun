---
# startpage.fun-2z2z
title: Resolve favicon, fallback, and Custom Icon assets
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:14:01Z
updated_at: 2026-05-04T13:14:01Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-kr5p
---

Approved vertical slice 5 for startpage.fun v1.

Goal:
- Implement favicon-first icon resolution, fallback generation, custom icon ingest, and icon persistence

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)

Test expectations:
- [ ] Add Vitest coverage for icon source selection rules, fallback eligibility, retry eligibility, and custom-icon metadata rules
- [ ] Add at least one Playwright happy-path E2E covering a visible Dial icon and verifying that a custom icon survives switching away and back

Notes:
- This slice should establish the persistent icon model used by the Dial Editor and runtime Dial rendering.
