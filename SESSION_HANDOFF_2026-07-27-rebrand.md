# Session Handoff · 2026-07-27 (real logo, green palette)

**What shipped:** full color rebrand to match the real CalMed logo, and the
actual logo artwork wired into the header.

## What changed

- **Real logo in the header**, replacing the placeholder four-petal
  pinwheel SVG. Uses a cropped, transparent-background version of the
  logo you sent (wordmark + rule + mortar-and-pestle mark, without the
  phone/address line, since that doesn't belong in a nav bar).
- **Color palette rebuilt around the logo's actual green**
  (`#1A4B28`, sampled directly from the artwork, not eyeballed), replacing
  the old placeholder teal (`#1f6f5c`) everywhere it appeared: nav hover
  states, buttons, staff extension numbers, links, division icons, the
  schedule box accent, form buttons, all of it.
- **Gold accent kept, slightly warmed** (`#a4791f`) to sit better next to
  the deeper green, still used the same way as before: TBD markers,
  division index numbers, the pull-quote border, the "VGM Partner" tag.
  The logo itself is single-color, so this stays a deliberate design
  choice on top of it, not something pulled from the artwork.
- **New favicon**, a simplified mortar-and-pestle Rx mark in the new
  green, replacing the old pinwheel favicon.
- Three logo crops now live in `public/brand/`: `logo-compact.png`
  (wordmark + Rx mark, used in the header), `logo-wordmark.png` (adds the
  tagline back, in case you want it somewhere with more room), and
  `logo-full.png` (everything, including the address line, for anywhere
  you might want the full letterhead treatment).

## What I did not touch

- Fonts (Libre Caslon Text / IBM Plex Sans / IBM Plex Mono) are unchanged.
  You said you like the current design, this was a color-and-logo swap,
  not a redesign.
- Layout, copy, and every other component are unchanged.

## One thing worth checking on your end

I built this from the ZIP snapshot in this session's memory (v0.7.0), not
a fresh export from your actual repo, since I don't have live access to
your GitHub repo. If you've made any local edits since that snapshot that
aren't reflected here, this ZIP won't have them, worth a quick diff
before you overwrite.

---

*Part of the Action Building Cold Start Pack workflow.*
