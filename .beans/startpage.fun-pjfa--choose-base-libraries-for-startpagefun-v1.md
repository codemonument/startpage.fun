---
# startpage.fun-pjfa
title: Choose base libraries for startpage.fun v1
status: completed
type: task
priority: normal
created_at: 2026-05-04T11:08:10Z
updated_at: 2026-05-04T12:44:40Z
parent: startpage.fun-r7qz
---

Select the base library stack for startpage.fun v1.

- [x] Confirm styling system
- [x] Confirm app shell/build baseline
- [x] Confirm core supporting libraries
- [x] Record decisions in docs/agents/implementation-details.md

## Working Notes

- Styling: Tailwind CSS
- App shell: Vite + vite-plugin-solid + vite-plugin-pwa
- Headless UI primitives: Kobalte

- Search / command matching: fuzzysort

- Asset storage split: Dial icons in IndexedDB; background image in OPFS with original and compressed variants

- IndexedDB structured data layer: Dexie

## Summary of Changes

- Confirmed Tailwind CSS as the primary styling system
- Confirmed Vite + vite-plugin-solid + vite-plugin-pwa as the app shell baseline
- Confirmed Kobalte for headless UI primitives
- Confirmed fuzzysort for Dial Search and Command Box matching
- Confirmed Dexie for IndexedDB-backed structured local data
- Confirmed background image storage in OPFS with original and compressed variants
- Confirmed Valibot for schema validation
