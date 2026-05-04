# startpage.fun

startpage.fun is a browser landing page product for fast access to a user's saved destinations. In v1, it is a web-first product served from `startpage.fun`, not a browser extension.

## Language

**Start Page**:
The web page a user sets as their browser startup page or homepage.
_Avoid_: New tab page, extension page

**New Tab Page**:
The browser-controlled page opened for each new tab.
_Avoid_: Start page, homepage

**Library**:
A user's saved collection of spaces, tiles, and layout preferences in startpage.fun.
_Avoid_: Bookmarks bar, database

**Local Library**:
A **Library** stored on a single browser/device and available offline without an account.
_Avoid_: Cloud account, synced profile

**Cloud Sync**:
An optional future capability that replicates a **Library** across devices.
_Avoid_: Local save, offline cache

**Tile**:
An abstract item that can appear in a Space grid.
_Avoid_: Card, widget

**Dial**:
A URL-backed **Tile** in startpage.fun that belongs to exactly one Space.
_Avoid_: App, bookmark, widget

**Add Tile**:
A Tile that triggers creation of a new Dial within its Space.
_Avoid_: Placeholder only, external button

**Space**:
A named top-level view in the Library with its own grid of Tiles.
_Avoid_: Browser tab, folder, page category

**Dial Icon**:
The visual mark shown for a **Dial**, sourced from the destination favicon or a generated text fallback.
_Avoid_: Preview image, screenshot

**Fallback Icon**:
A generated text-based Dial Icon stored when the preferred favicon is not immediately available.
_Avoid_: Broken image, temporary placeholder

**Icon Refresh**:
A background retry that attempts to replace a text-only Fallback Icon with a favicon on a later page load.
_Avoid_: Blocking startup fetch, manual reload step

**Custom Icon**:
A user-provided Dial Icon chosen instead of the favicon or generated fallback.
_Avoid_: Favicon, screenshot

**Launch**:
The primary action of opening a Dial's destination URL.
_Avoid_: Edit, manage, configure

**Launch Preference**:
The global setting that determines whether a primary Launch opens in the current tab or a new tab.
_Avoid_: Per-Dial behavior, browser default only

**Dial Menu**:
A custom context menu for a Dial that exposes non-primary actions.
_Avoid_: Browser context menu, edit mode

**Dial Editor**:
A dialog for changing the details of a Dial.
_Avoid_: Inline edit, launch action

**Space Assignment**:
The Space a Dial belongs to.
_Avoid_: Shared membership, multi-space reference

**Dial Order**:
The user-defined position of a Dial within a Space grid.
_Avoid_: Automatic ranking, cross-space order

**Manual Add**:
The act of creating a Dial by entering its URL and optional title directly.
_Avoid_: Import, auto-discovery

**Default Title**:
The hostname, including subdomains, used as a Dial title when the user does not provide one.
_Avoid_: Page title, full URL, root domain only

**Starter Template**:
A predefined initial Library configuration a new user can choose on first run.
_Avoid_: Import

**Search**:
The default fuzzy-finding mode for locating saved Dials across the Library.
_Avoid_: Web search, omnibox

**Command Box**:
A unified fuzzy surface that can search Dials or switch into command-finding mode.
_Avoid_: Browser address bar, web search

**Command Mode**:
The Command Box state for finding logical app actions instead of Dials.
_Avoid_: Dial search, omnibox

**Focus**:
The current keyboard-targeted Space or Dial that determines which context-sensitive actions are available.
_Avoid_: Hover, selection only

**Trash Space**:
A special Space that holds deleted Dials until they are permanently removed or restored.
_Avoid_: Permanent delete, archive

**Restore**:
The act of moving a trashed Dial back out of the Trash Space into its original Space identity when that Space still exists.
_Avoid_: Duplicate, import

**Empty Template**:
A Starter Template that creates a Library with one empty Space and no Tiles.
_Avoid_: Placeholder content, seeded examples, zero-space library

**Example Template**:
A Starter Template that creates one Space containing real saved example Dials.
_Avoid_: Import, tutorial placeholder, user-specific data

## Relationships

- **startpage.fun** delivers a **Start Page** in v1
- A **New Tab Page** is distinct from a **Start Page** and is out of v1 scope
- In v1, startpage.fun stores one **Local Library** per browser/device
- A **Local Library** contains **Spaces**
- Each **Space** has a user-visible name
- **Space** names are unique within a **Library**
- A **Space** contains **Tiles**
- In v1, a **Space** contains **Dial** Tiles and one **Add Tile**
- Each **Dial** belongs to exactly one **Space**
- The same URL may appear in multiple **Dials**, but those **Dials** remain independent
- Each **Dial** is rendered with one **Dial Icon** in v1
- If a favicon cannot be resolved during Manual Add, the Dial stores a **Fallback Icon**
- A later page load may perform an **Icon Refresh** in the background, but only for Dials still using a text-only **Fallback Icon**
- In normal use, activating a **Dial** performs a **Launch**
- In v1, the default **Launch Preference** opens in the current tab
- A user may reverse the **Launch Preference** globally to open in a new tab instead
- Middle click opens a Dial in a new tab regardless of the current **Launch Preference**
- A **Dial Menu** exposes non-primary actions for a **Dial**
- The **Dial Menu** is opened through the browser contextmenu interaction in v1
- The **Dial Menu** includes at least Open in new tab and Edit
- The **Dial Editor** changes a Dial's URL, title, icon, and **Space Assignment**
- In v1, a Dial's icon may use a favicon, a text-only **Fallback Icon**, or a **Custom Icon**
- A **Dial** has a **Dial Order** within its **Space**
- In v1, users can change **Dial Order** by dragging and dropping Dials within a Space
- In v1, a new user begins by choosing a **Starter Template**
- The initial Starter Templates are **Empty Template** and **Example Template**
- A **Library** always contains at least one **Space**
- An **Empty Template** creates one empty **Space** and no **Tiles**
- An **Example Template** creates one **Space** containing real saved example **Dials**
- In v1, new **Dials** enter the **Library** through **Manual Add**
- A **Dial** without a user-provided title uses a **Default Title**
- In v1, **Search** finds **Dials** across the whole **Library**
- In v1, the **Command Box** defaults to **Search** and may switch into **Command Mode**
- In v1, **Focus** may rest on a **Space** or a **Dial**
- Context-sensitive commands depend on the current **Focus**
- Deleting a **Dial** moves it to the **Trash Space** instead of removing it immediately
- A trashed **Dial** may be **Restored**
- **Cloud Sync** is out of v1 scope

## Example dialogue

> **Dev:** "Should startpage.fun open on every new tab?"
> **Domain expert:** "No — v1 owns the **Start Page** users set for browser startup or home, not the **New Tab Page**."
>
> **Dev:** "If I save a destination on my laptop, does it appear on my phone?"
> **Domain expert:** "Not in v1 — each device has its own **Local Library** until **Cloud Sync** exists."
>
> **Dev:** "What exactly am I saving to the page?"
> **Domain expert:** "A **Dial** — a URL-backed **Tile** in the current **Space**."
>
> **Dev:** "Is the add card in the grid just decorative?"
> **Domain expert:** "No — the **Add Tile** is a real **Tile** type that creates a new Dial in its Space."
>
> **Dev:** "Are those top controls browser tabs?"
> **Domain expert:** "No — they are a UI for switching **Spaces**, which are named top-level grids inside the **Library**."
>
> **Dev:** "If the same URL appears in two Spaces, is that one shared object?"
> **Domain expert:** "No — those are two separate **Dials** that happen to point at the same URL."
>
> **Dev:** "Do Dials need screenshots to look good?"
> **Domain expert:** "No — v1 is icon-first, so every **Dial** is expected to work with a **Dial Icon** alone."
>
> **Dev:** "What if the favicon is unavailable when I add a Dial?"
> **Domain expert:** "Store a **Fallback Icon** for fast rendering, then attempt an **Icon Refresh** in the background on a later load — but only while the Dial still has a text-only fallback."
>
> **Dev:** "When I click a Dial, do I edit it or open it?"
> **Domain expert:** "In normal use, a click performs a **Launch**."
>
> **Dev:** "Does Launch replace the current page or open a new tab?"
> **Domain expert:** "By default, **Launch** opens in the current tab, but a global **Launch Preference** can reverse that; middle click always opens a new tab."
>
> **Dev:** "How do I edit a Dial without hijacking left click?"
> **Domain expert:** "Use the **Dial Menu** on the contextmenu gesture, then open a **Dial Editor** dialog when the user chooses edit."
>
> **Dev:** "What can I edit on a Dial in v1?"
> **Domain expert:** "Its URL, title, icon, and **Space Assignment**."
>
> **Dev:** "What icon choices exist in the Dial Editor?"
> **Domain expert:** "A Dial can use its favicon, a text-only fallback, or a **Custom Icon**; when favicon is selected, the editor can trigger **Icon Refresh**."
>
> **Dev:** "How do users rearrange Dials?"
> **Domain expert:** "By dragging Dials to change their **Dial Order** within the current **Space**."
>
> **Dev:** "How do users create Dials in v1?"
> **Domain expert:** "Through **Manual Add** — they enter the URL directly, and may optionally provide a title."
>
> **Dev:** "What title does a Dial get if the user leaves it blank?"
> **Domain expert:** "Use the **Default Title**: the hostname including subdomains, not the fetched page title."
>
> **Dev:** "Does startpage.fun search the web in v1?"
> **Domain expert:** "No — **Search** only finds saved **Dials** in the **Library**."
>
> **Dev:** "Does Search stay inside the current Space?"
> **Domain expert:** "No — **Search** finds **Dials** across the whole **Library**."
>
> **Dev:** "How does the keyboard launcher work?"
> **Domain expert:** "The **Command Box** opens as Dial **Search** by default and can switch into **Command Mode** to fuzzy-find logical app actions."
>
> **Dev:** "How do context-sensitive commands know what they apply to?"
> **Domain expert:** "They use the current **Focus**, which may be a **Space** or a **Dial**."
>
> **Dev:** "Does deleting a Dial remove it forever?"
> **Domain expert:** "No — deleting a Dial moves it to the **Trash Space**, where it can later be **Restored**."
>
> **Dev:** "What does a brand-new user see first?"
> **Domain expert:** "A chooser of **Starter Templates** that initializes the first **Library** layout."
>
> **Dev:** "Which Starter Templates exist in v1?"
> **Domain expert:** "Two: **Empty Template**, which creates one empty Space with no Tiles, and **Example Template**, which creates one Space of real saved example Dials."

## Flagged ambiguities

- "start page" was initially used loosely for both **Start Page** and **New Tab Page** — resolved: v1 means **Start Page** only.
- "offline-capable" could have implied cloud-backed sync with caching — resolved: v1 uses a **Local Library** as the source of truth.
- "icon" could have implied rich preview thumbnails — resolved: v1 uses a **Dial Icon**, preferably from the destination favicon, with generated text fallback.
- icon loading could have implied blocking startup fetches — resolved: v1 stores a **Fallback Icon** immediately and performs **Icon Refresh** later in the background.
- background icon retries could have implied refreshing every Dial repeatedly — resolved: **Icon Refresh** only targets Dials still using a text-only **Fallback Icon**.
- editable icons could have implied favicon-only behavior — resolved: v1 supports favicon, text-only fallback, and **Custom Icon**, with a manual refresh action for favicon-based icons.
- "tab" conflicted with browser vocabulary — resolved: the domain concept is **Space**; tabs are only one possible switching UI.
- space switching could have implied unnamed pages — resolved: every **Space** has a required user-visible name.
- space naming could have implied duplicates — resolved: **Space** names are unique within a **Library**.
- repeated destinations could have implied shared references — resolved: each **Dial** is unique even when two **Dials** use the same URL.
- the grid add affordance could have implied a non-domain UI control — resolved: the **Add Tile** is a real **Tile** type.
- clicking a Dial could have implied inline editing controls — resolved: v1 keeps click for **Launch** and uses the **Dial Menu** for secondary actions.
- launch behavior could have implied a fixed tab target — resolved: v1 defaults **Launch** to the current tab, with a global **Launch Preference** to reverse it, while middle click always opens a new tab.
- secondary Dial actions could have implied a full-page management workflow — resolved: v1 uses a **Dial Menu** and a **Dial Editor** dialog for per-Dial changes.
- Dial rearrangement could have implied automatic sorting — resolved: users set **Dial Order** manually through drag and drop within a **Space**.
- onboarding could have implied bookmark import or browser integration — resolved: v1 creates Dials through **Manual Add** only.
- dial titles could have implied fetched page titles or root domains — resolved: the **Default Title** is the hostname including subdomains.
- search could have implied web search or omnibox behavior — resolved: v1 **Search** only finds saved **Dials** in the **Library**.
- command entry could have implied a separate palette from search — resolved: v1 uses one **Command Box** that defaults to **Search** and switches into **Command Mode**.
- context-sensitive commands could have implied hidden app state — resolved: they depend on explicit keyboard **Focus** on a **Space** or **Dial**.
- deleting a Dial could have implied permanent removal — resolved: v1 deletes Dials into a **Trash Space** first.
- restoring a trashed Dial after a Space rename could have implied name-based recreation — resolved: restore targets the original **Space** identity if it still exists.
- first-run setup could have implied a blank page or fixed sample data — resolved: v1 starts with a **Starter Template** chooser.
- an empty library could have implied zero Spaces — resolved: a **Library** always has at least one **Space**.
- template design could have implied either structure-only or seeded examples — resolved: v1 ships both **Empty Template** and **Example Template**.
- example Dials could have implied temporary onboarding placeholders — resolved: the **Example Template** creates real saved **Dials**.
- "Speed Dial 2" was initially used as the product name — resolved: the product being designed here is **startpage.fun**; **Speed Dial 2** is only a reference product.
