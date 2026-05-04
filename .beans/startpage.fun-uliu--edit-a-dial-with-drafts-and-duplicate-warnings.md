---
# startpage.fun-uliu
title: Edit a Dial with drafts and duplicate warnings
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:13:14Z
updated_at: 2026-05-04T13:13:14Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-kr5p
---

Approved vertical slice 4 for startpage.fun v1.

Goal:
- Implement full Dial Editor flows for edit, draft restore, discard, and duplicate warnings

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)

Test expectations:
- [ ] Add Vitest coverage for duplicate detection, draft-vs-committed state rules, and explicit save/discard behavior
- [ ] Add at least one Playwright happy-path E2E covering editing a Dial, recovering a saved draft, and saving the final committed change

Notes:
- This slice should establish the core committed-vs-draft editing model for later dialogs and settings flows.
