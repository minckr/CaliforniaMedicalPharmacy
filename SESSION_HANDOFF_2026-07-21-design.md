# Session Handoff · 2026-07-21 (design pass, no stock photos)

**What shipped:** visual/personality pass, researched against other pharmacy
and DME site examples.

## What I found in research

Real photos of the storefront and staff, a map embed, trust signals
(accreditation, insurance badges), and clear CTAs came up repeatedly as
what actually moves the needle on independent pharmacy sites, more than
generic stock photography, which several sources specifically warned
against as looking fake.

## What I built

- **Custom icon set** (`components/icons.tsx`): original line-art icons
  for each division (capsule for Pharmacy, supply box for Medical Supply,
  wheelchair for DME/CRT, delivery truck for Warehouse), plus a small set
  for the new trust strip. Deliberately different style from the header
  logo so they read as wayfinding icons, not a second brand mark.
- **Two-column hero** with an original decorative graphic
  (`components/hero-graphic.tsx`) that echoes the four-petal logo motif,
  so the brand mark isn't only in the header.
- **Trust strip** below the hero: family owned, bilingual staff, Medicare/
  Medi-Cal/private insurance, one team across all four services. All four
  pulled directly from what you already confirmed, nothing new invented.
- **Photo placeholders**, not stock photos. A styled, clearly-labeled
  placeholder block ("Photo of our downtown LA location, coming soon" /
  "Photo of our team, coming soon") on the home page and About page,
  ready to swap for a real `<img>` tag the moment you send photos. This
  was the deliberate choice over generic stock imagery, which the
  research flagged as actively hurting trust on healthcare sites.
- **Real Google Maps embed** on the Contact page, using your actual
  address, no API key required.
- **Pull-quote treatment** for the About page's opening line, breaks up
  the wall of paragraphs.
- **Division icons** next to each of the four section headers on the home
  page, for faster scanning.

All of the above is translated for the EN/ES toggle, dictionary parity
re-verified (112 matching keys both languages) before packaging.

## Suggestions not built, from the research

- **Testimonials.** Came up as a strong trust signal on comparable sites,
  but needs real, consented patient testimonials given the HIPAA context,
  not something to fabricate or add casually.
- **Short educational or virtual-tour video.** A few sources mentioned
  this working well; would need you to actually film something.
- **Prominent single CTA button in the header** (e.g. "Refill" or "Get
  Started") rather than it living only in the nav list. Worth considering
  once the site's core content is locked, since it's a small change.
- **Professional bios/photos for key staff** once you have them ready,
  same reasoning as the storefront photo, real over generic.

---

*Part of the Action Building Cold Start Pack workflow.*
