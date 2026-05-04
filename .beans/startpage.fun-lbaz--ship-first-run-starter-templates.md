---
# startpage.fun-lbaz
title: Ship first-run Starter Templates
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:12:13Z
updated_at: 2026-05-04T13:12:13Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-c2pi
---

Approved vertical slice 2 for startpage.fun v1.

Goal:
- Add a first-run chooser for Empty and Example templates
- Keep the Example template lean with no more than 5 links

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [ ] Add Vitest coverage for template shape validation, template-to-library conversion, and first-run selection rules
- [ ] Add at least one Playwright happy-path E2E covering Empty and Example selection on separate runs

Notes:
- The Example template should teach the product quickly without feeling noisy or opinionated.
