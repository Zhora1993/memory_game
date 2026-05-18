# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the project

No build tools or package manager. Open `index.html` directly in a browser, or use the VS Code Live Server extension (configured on port 5501).

All JS files use ES modules (`type="module"`), so the page must be served via HTTP — opening `index.html` as a `file://` URL will fail due to CORS restrictions on module imports.

## Architecture

Vanilla JS memory game. Single HTML entry point (`index.html`) loads `js/index.js` as an ES module. All other JS files are imported as needed.

**Game flow (sequential screens, each replacing the previous):**
1. Start screen → `startbtnhandle.js` removes it, calls `cartenCount.js`
2. Player name input + card count selection (8/16/24) → `cardChoose.js`
3. Category selection (Natur / Tiere / Autos) → `itemCategore.js`
4. Card grid + game logic → `createItem.js` / `itemcompare.js` / `delateItems.js` / `closeItems.js`
5. Win screen → `winnContainer.js`

**Shared DOM state (`js/element.js`):**  
All modules import the `elemeents` object (note the typo — two `e`s at the end) and attach DOM references to it as properties. This single mutable object is the only cross-module state for DOM nodes.

**localStorage keys used at runtime:**
| Key | Purpose |
|-----|---------|
| `user` | Player name |
| `doubleatr` | `data-doubleattr` of the first clicked card |
| `timeStart` | `Date.now()` when the game started |
| `recordeTimeSave8/16/24` | Best time per difficulty |
| `recorduser8/16/24` | Player name who holds the record |

**Card matching logic (`createItem.js`):**  
A module-level counter tracks first vs. second click. First click stores the card's `data-doubleattr` in localStorage; second click calls `itemCompare()`. On match → `delateItems()` hides the pair and checks if all cards are hidden to trigger the win screen. On mismatch → `closeItems()` hides both cards after 500 ms.

**Images:**  
Located at `img/{categorie}/bild{n}.svg` (0–11). The `natur` and `cars` categories have images; `tiere` folder appears to be missing — clicking Tiere will load broken images.

**Unused stubs:** `js/addPlaye.js`, `js/itemCount.js`, and `js/itemArr.js` exist but are not wired into the game flow.
