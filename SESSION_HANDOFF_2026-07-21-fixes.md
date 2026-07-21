# Session Handoff · 2026-07-21 (fax fixes, full EN/ES, de-duplicated copy)

**What shipped:** every fix requested in this batch.

## Fax and contact fixes

- DME/CRT fax is now (213) 444-7852 (moved from the old "Amanda & David"
  card).
- Removed the "Main line & additional contacts" team-grid card entirely
  (that's where the Amanda & David entry lived).
- Removed the Warehouse fax row (no number on file).
- Removed the Medical Supply email row (no address on file).

## Dial-by-department, made confident

The old bottom section hedged ("let me know if these are used differently").
Replaced with a straightforward "Dial by department" block: call the main
line, then dial extension 1 (Pharmacy), 2 (Office), 3 (Medical Supply), or 4
(Warehouse). No more TBD framing on this since you confirmed it's accurate.

## Full-site Spanish translation

Rebuilt the dictionary in `lib/i18n.tsx` to cover the whole site now, not
just the header/footer/hero. The EN/ES toggle now translates: nav, home
hero, all four division names and descriptions, staff section headings,
the schedule box, the new dial-by-department block, the About page (hero,
all body copy, product category list, accreditation section), the Contact
page and its form, the Referral page and form, and the Get Started page
and form.

**Verified structurally**, not just by eye: I extracted both the English
and Spanish objects and confirmed they have the identical key shape (102
matching keys, nothing missing on either side) before packaging this, so
the TypeScript error from last time can't recur the same way.

**What's still English-only, on purpose:** Terms & Conditions, Privacy
Policy, and the HIPAA Notice. These are long legal drafts that haven't
been reviewed by an attorney yet; translating text that's still likely to
change would be wasted effort; and legal-page translations really deserve
a native Spanish-speaking reviewer rather than my translation alone once
they're finalized. Say the word once the English versions are locked and
I'll translate those too.

## De-duplicated copy

Four places were saying close to the same thing in different words. Gave
each a distinct job:

- **Home hero:** now purely navigational, sets up the directory below
  ("One pharmacy, four ways we help").
- **About hero + body:** now carries the actual narrative, why
  family-owned matters, what that means day to day, rather than
  re-listing the four divisions (which the home page's directory already
  shows).
- **Contact page intro:** now routes people to the right form based on
  what they need (quick question vs. starting service vs. referring a
  patient) instead of just restating the address and phone number.
- **Bottom "summary" section:** now scoped narrowly to the dial-by-department
  directory, not a general restatement of how to reach the pharmacy.

## Still outstanding

Daria/Elie's duplicate extension, Josue in two departments, delivery
service area (still TBD), accreditation body/numbers (still TBD).

---

*Part of the Action Building Cold Start Pack workflow.*
