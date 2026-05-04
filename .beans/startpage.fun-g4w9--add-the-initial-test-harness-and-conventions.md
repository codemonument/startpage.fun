---
# startpage.fun-g4w9
title: Add the initial test harness and conventions
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:48Z
updated_at: 2026-05-04T13:17:48Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-c2pi
---

Approved vertical slice 16 for startpage.fun v1.

Goal:
- Establish the project test scripts, layout, and conventions for Vitest and Playwright

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [ ] Prove one pure logic Vitest path runs cleanly
- [ ] Prove one browser Playwright E2E path runs cleanly against the app

Notes:
- This slice should define the testing baseline that later slices extend rather than each slice inventing its own setup.
