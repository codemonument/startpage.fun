---
# startpage.fun-r7qz
title: 'PRD: Build startpage.fun v1'
status: todo
type: epic
tags:
    - needs-triage
created_at: 2026-05-04T10:55:31Z
updated_at: 2026-05-04T10:55:31Z
---

## Problem Statement

People who rely on speed-dial browser extensions want a fast, personal launch surface for their saved destinations, but the extension model adds installation friction, browser-specific maintenance, and dependence on extension APIs. The user wants `startpage.fun` to replace that experience with a web-first, offline-capable **Start Page** that loads quickly, works without an extension, and supports a richer organizational model built around **Spaces**, **Dials**, keyboard workflows, and recoverable deletion.

## Solution

Build `startpage.fun` v1 as an offline-capable PWA whose source of truth is a per-device **Local Library**. The app presents named **Spaces** containing ordered **Dial** tiles plus a system-generated **Add Tile**. Users can create and manage Dials manually, search and command the app through a unified **Command Box**, reorder both Dials and Spaces with pointer, touch, and keyboard interactions, and recover deleted Dials from a dedicated **Trash Space**. The product remains a true **Start Page**, not a **New Tab Page** replacement, and keeps one strong default visual system with an optional global custom background image.

## User Stories

1. As a person replacing a browser extension, I want `startpage.fun` to be a **Start Page**, so that I can use it without installing an extension.
2. As a person who values speed, I want the app to work offline from a **Local Library**, so that the page opens quickly even without network access.
3. As a new user, I want to choose a **Starter Template**, so that I can begin from either a blank setup or a guided example.
4. As a new user, I want an **Empty Template** with one empty **Space**, so that I can start from a clean slate.
5. As a new user, I want an **Example Template** with real example **Dials**, so that I can understand the product immediately.
6. As a user, I want my **Library** to contain multiple named **Spaces**, so that I can organize destinations by context.
7. As a user, I want **Space** names to be unique, so that I can find and reference them without ambiguity.
8. As a user, I want to create a new **Space** and name it immediately, so that my organization stays intentional.
9. As a user, I want to rename a **Space**, so that my organization can evolve over time.
10. As a user, I want to reorder **Spaces**, so that the most important ones are easiest to reach.
11. As a user, I want to delete a non-empty **Space** with explicit safeguards, so that I do not accidentally lose content.
12. As a user, I want to move a deleted **Space**'s **Dials** into another **Space**, so that I can consolidate without re-creating everything manually.
13. As a user, I want the last remaining **Space** to be protected, so that my **Library** always has at least one working context.
14. As a user, I want a **Dial** to represent one saved destination URL, so that each launch target is explicit.
15. As a user, I want to create a **Dial** by entering only a URL, so that adding links is fast.
16. As a user, I want a **Default Title** based on hostname including subdomains, so that Dials stay concise and predictable.
17. As a user, I want to override a **Dial** title, so that I can give destinations personal labels.
18. As a user, I want the same URL to be allowed in multiple **Dials**, so that I can place it in different contexts without shared side effects.
19. As a user, I want a warning when another active **Dial** already uses the same URL, so that I notice accidental duplication without being blocked.
20. As a user, I want each **Space** to show an **Add Tile**, so that creating a new **Dial** is always one action away.
21. As a user, I want an option to show the **Add Tile** only on empty **Spaces**, so that I can keep fuller layouts cleaner.
22. As a user, I want a space-level add control and a command for creating Dials, so that I can still add content when the **Add Tile** is hidden.
23. As a user, I want **Dial Icons** to prefer favicons, so that my Dials are recognizable at a glance.
24. As a user, I want a generated text fallback when a favicon is unavailable, so that every **Dial** still renders cleanly.
25. As a user, I want favicon retry behavior only for Dials still using a text fallback, so that the app avoids wasteful background refreshes.
26. As a user, I want to supply a **Custom Icon**, so that I can personalize Dials when site icons are poor or missing.
27. As a user, I want **Custom Icons** to come from local upload, pasted image URL, or pasted image data, so that I can provide icons from different sources.
28. As a user, I want stored **Custom Icons** to survive switching temporarily back to favicon mode, so that I do not lose my upload accidentally.
29. As a user, I want left click and tap to **Launch** a **Dial** immediately, so that the page behaves like a fast launcher.
30. As a user, I want a global **Launch Preference**, so that I can choose whether normal launch opens in the current tab or a new tab.
31. As a user, I want middle click to always open a new tab, so that common browser expectations still work.
32. As a desktop user, I want a **Dial Menu** on context menu, so that I can reach secondary actions without changing the primary click behavior.
33. As a touch user, I want long press to open the **Dial Menu**, so that touch devices still expose secondary actions.
34. As a user, I want a **Dial Editor** for URL, title, icon, and **Space Assignment**, so that I can manage each Dial completely.
35. As a user, I want dialog drafts saved separately from committed data, so that interrupted edits are recoverable without silently changing live data.
36. As a user, I want a **Restore draft** action when reopening a dialog, so that I can recover interrupted work intentionally.
37. As a user, I want explicit discard to remove the saved draft, so that I can truly abandon abandoned changes.
38. As a user, I want to reorder **Dials** within a **Space** by drag and drop, so that the layout matches my habits.
39. As a keyboard user, I want `Shift` + arrow keys to move focused Dials and Spaces, so that reordering does not require a pointer.
40. As a keyboard user, I want clear **Focus** rules across **Spaces**, Dials, menus, Trash, and the top-right toolbar, so that the app feels navigable without guesswork.
41. As a user, I want a unified **Command Box**, so that I can quickly find Dials and run logical app commands.
42. As a keyboard-heavy user, I want `Cmd/Ctrl+P` to open Dial **Search**, so that the app feels like a launcher.
43. As a keyboard-heavy user, I want `Cmd/Ctrl+Shift+P` or `>` to switch into **Command Mode**, so that I can run management and settings actions quickly.
44. As a user, I want Dial **Search** to search the whole **Library**, so that I do not need to remember which **Space** contains a Dial.
45. As a user, I want Dial **Search** to match title, hostname, and full URL, so that I can find Dials from the information I remember.
46. As a user, I want search results to show title, **Space**, and hostname, so that I can disambiguate similar Dials quickly.
47. As a user, I want command results and menu items to stay visible when invalid, so that I can learn what the app can do and why an action is unavailable.
48. As a user, I want inline explanations for disabled actions, so that the interface works consistently on desktop and mobile.
49. As a user, I want direct settings actions in **Command Mode**, so that I can change configuration without digging through a settings UI.
50. As a user, I want successful commands to close the **Command Box** and failed commands to keep it open with an explanation, so that command execution feels predictable.
51. As a user, I want deleted **Dials** to move into a **Trash Space**, so that deletion is reversible.
52. As a user, I want the **Trash Space** to be accessible from a trash-can control and a command, so that deleted content is easy to reach.
53. As a user, I want trashed Dials to remain launchable, so that I can verify whether a deleted destination still works before restoring or purging it.
54. As a user, I want to **Restore** trashed Dials into their original **Space** identity, so that rename operations do not break recovery.
55. As a user, I want `Cmd/Ctrl+Z` inside a **Space** to restore recently deleted Dials from that **Space**, so that undo stays contextual.
56. As a user, I want repeated `Cmd/Ctrl+Z` to restore multiple Dials in reverse deletion order, so that I can recover from a bulk cleanup mistake.
57. As a user, I want the **Trash Space** to show original **Space** and deletion time, so that I understand what I am restoring.
58. As a user, I want bulk purge and per-Dial permanent delete in Trash, so that I can either clean everything out or remove one unwanted item.
59. As a user, I want purge confirmation but no extra confirmation for per-Dial permanent delete in Trash, so that destructive actions match their seriousness.
60. As a user, I want configurable Trash retention, so that I can choose how aggressively old deleted Dials are cleaned up.
61. As a user, I want the normal **Space** tabs to remain visible while Trash is open, so that I retain orientation in the app.
62. As a user, I want selecting a normal **Space** while Trash is open to exit Trash immediately, so that returning to work is obvious.
63. As a user, I want the app to remember the last active **Space** by default, so that I reopen where I left off.
64. As a user, I want a setting to use a default **Space** instead of the last active one, so that startup behavior matches my routine.
65. As a user, I want a small top-right toolbar for global controls, so that operational actions like Trash do not compete with my **Spaces**.
66. As a user, I want responsive grid density automatically, so that the app works across desktop, tablet, and mobile without manual tuning.
67. As a user, I want a single strong visual system plus an optional global custom background image, so that the app feels cohesive but still personal.
68. As a user, I want custom backgrounds to be stored locally and processed for performance, so that personalization does not hurt startup speed.
69. As a touch user, I want tap, long press, and drag to coexist cleanly, so that the PWA remains usable without desktop-only assumptions.
70. As an iPad keyboard user, I want the **Command Box** and keyboard workflows to continue working, so that the app remains productive on hybrid devices.

## Implementation Decisions

- Build the product as a web-first PWA backed by a per-device **Local Library**; no extension wrapper is in v1.
- Use the domain model from `startpage.fun`: **Library**, **Space**, **Tile**, **Dial**, **Add Tile**, **Trash Space**, **Dial Menu**, **Dial Editor**, **Command Box**, **Command Mode**, **Focus**, and **Restore**.
- Keep the primary persistent domain centered on a local **Library** model with unique Space names, ordered Dials per Space, a special Trash Space, and configuration/settings stored alongside user data.
- Treat **Add Tile** as a real Tile type in the UI/domain, but as a system-generated invariant rather than ordinary user-managed content.
- Separate committed data from draft dialog state. Drafts should live in a dedicated draft store, be restorable intentionally, and be cleared on successful explicit save or explicit discard.
- Use a deep **local library repository** module responsible for persistence, migrations, retention policies, draft separation, and restoring committed domain objects.
- Use a deep **search and command engine** module that indexes active Dials and commands, ranks results by title/hostname/URL, supports disabled-with-reason entries, and closes or persists the Command Box according to outcome rules.
- Use a deep **trash and restore service** module that tracks deletion metadata, per-Space undo windows, restore targeting, retention, purge behavior, and permanent deletion semantics.
- Use a deep **icon and image asset pipeline** module that resolves favicons, creates text fallbacks, stores custom images locally, normalizes image assets, and supports background image ingest using the same storage strategy.
- Use a deep **ordering and movement engine** module that owns Dial order, Space order, pointer drag/reorder, touch drag/reorder, keyboard movement semantics, and overflow-boundary reorder behavior.
- Use a dedicated **space bar layout** module to resolve overflow strategy, multi-row capping, overflow menus, and full-fidelity interaction for overflowed Spaces.
- Use a dedicated **interaction coordinator** for focus movement, menu invocation, touch-vs-pointer gesture behavior, toolbar/Trash interactions, and keyboard shortcut routing outside text inputs.
- Treat **Search** and **Command Mode** as one surface with two modes: Dial search by default, command search when explicitly invoked.
- Keep trashed Dials out of default Dial search results, even when Trash is open.
- Use inline reason text for disabled actions in both commands and menus instead of tooltip-only patterns.
- Maintain command and menu parity wherever possible: visible disabled entries, context-sensitive availability, keyboard accessibility, and equivalent focus outcomes to direct interaction.
- Respect the decision that Trash is special: separately accessed, immutable as a Space, no Add Tile, but still capable of launch, restore, and permanent deletion behaviors.
- Use one global visual system for v1, but allow a single global custom background image stored locally and processed for performance.
- Keep several capabilities explicitly out of the main v1 flow even if the data model leaves room for them later: Cloud Sync, folders, nested folders, browser-extension-only features, bookmark import, and cross-Space drag of Dials.

## Testing Decisions

- Good tests should verify externally observable behavior and stable interfaces, not implementation details such as component internals, CSS class names, or incidental storage shape.
- The most valuable tests are for deep modules with clear contracts: local library persistence and migrations, search/command ranking and state rules, trash/restore workflows, icon/background asset processing, Dial/Space ordering, and overflow layout behavior.
- Test the **local library repository** for committed-vs-draft separation, restore behavior, Trash retention, unique Space names, and reorder persistence.
- Test the **trash and restore service** for delete-to-trash, restore to original Space identity, restore ordering, per-Space undo window behavior, and purge/permanent delete behavior.
- Test the **search and command engine** for mode switching, result ranking, disabled-with-reason behavior, direct settings actions, and close/keep-open execution rules.
- Test the **icon and image asset pipeline** for favicon resolution, fallback generation, retry eligibility, custom icon persistence, and background ingest/normalization.
- Test the **ordering and movement engine** for drag/drop and keyboard movement semantics of both Dials and Spaces, including overflow-boundary Space reordering.
- Test the **space bar layout** for configurable overflow modes, capped multi-row behavior, overflow menu membership, and full-featured overflow entries.
- Add focused interaction tests for the PWA shell covering Dial launch behavior, Trash opening/closing, touch long-press menus, and keyboard focus transitions.
- There is effectively no prior implementation test suite in this repository yet, so this PRD should establish the first strong behavioral testing patterns rather than mirror existing prior art.

## Out of Scope

- A Chrome extension or true **New Tab Page** replacement.
- **Cloud Sync**, accounts, or multi-device synchronization.
- Bookmark import, browser history/top-sites discovery, or automatic suggestion systems.
- Folders, nested folders, macOS-launcher-style folder overlays, or any recursive content structure.
- Cross-Space drag-and-drop for Dials.
- Multiple visual themes or per-Space visual customization.
- Web search, omnibox behavior, or search results that query anything outside the active local data set.
- Per-Space background images.
- Bulk selection UI for selectively permanently deleting some Trash items.
- User-controlled background fit/position overrides in v1.

## Further Notes

- The planning context already captures a strong product language in `CONTEXT.md` and detailed implementation constraints in `docs/agents/implementation-details.md`; implementation should continue to respect both.
- No ADR has been created yet. If a later implementation decision introduces deeper lock-in or a surprising trade-off, that decision should be documented then.
- The highest leverage architectural opportunity is to keep persistence, search/command behavior, restore semantics, and ordering as deep isolated modules rather than leaking them into UI components.
