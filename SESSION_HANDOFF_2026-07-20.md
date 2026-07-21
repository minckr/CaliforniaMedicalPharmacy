# Session Handoff · 2026-07-20

**What shipped:** Phase B production build for California Medical Pharmacy.

**Update (same day):** added real fax numbers.
- Pharmacy fax: (213) 484-9455
- Formula Department fax: (213) 413-1354 (added as a line under the Pharmacy division, since it's a pharmacy sub-department)
- Medical Supply fax: (213) 413-2341
- DME/CRT fax: (213) 444-7852
- Warehouse & Delivery fax: still TBD, no number provided yet

## In this ZIP

- Full production home page with a "directory board" hero linking to four division sections: Pharmacy, Medical Supply, DME/CRT, Warehouse & Delivery, each with real background copy.
- New icon: the four-petal pinwheel mark (representing the four divisions), wired in as both the header logo and the browser favicon (`app/icon.svg`, auto-detected by Next.js).
- New design system: Libre Caslon Text (display) + IBM Plex Sans (body) + IBM Plex Mono (labels/eyebrows), teal and gold palette.
- `/terms` and `/privacy` pages, live routes rendering the drafted Terms & Conditions and Privacy Policy, each with a visible "this is a draft" notice until you confirm legal review is done.
- Partner tags in the footer: Medsender, Darby, Niko Health, Waystar, Availity, Nymbl, with a "VGM Partner" tag on VGM.
- Scheduling callout on the DME/CRT section: shows a "Schedule online" button IF `NEXT_PUBLIC_CALENDLY_URL` is set in your environment variables, otherwise falls back to a call-to-book button. No code changes needed once you have the Calendly link, just add the env var.
- Contact form, still wired to Resend, with the `reply_to` field name fixed (this was the bug from the earlier failed deploy).
- Real info now in the site: address (2201 W Temple St, Los Angeles, CA 90026), main phone ((213) 413-2343).

## What's marked TBD, on purpose, per Rule 007

- Warehouse & Delivery fax number
- Medical Supply email
- Individual staff/team member names, roles, extensions, and emails (three placeholder cards on the home page ready to be filled in)
- Legal page "Contact us" sections (currently point to the main line)

These show as visibly styled placeholders ("To be added," in gold italic), not fake data, per governance Rule 007.

## Before this goes fully live

1. Get the Terms & Conditions and Privacy Policy reviewed by an attorney, particularly the Privacy Policy's relationship to your existing HIPAA Notice of Privacy Practices. Remove the draft notice once cleared.
2. Set up Calendly, create the DME/CRT Evaluation event type, connect it to your admin calendar, and send me (or add directly to Vercel) the event URL as `NEXT_PUBLIC_CALENDLY_URL`.
3. Send over staff names/roles/extensions/emails, and fax numbers, whenever you have them, and I'll drop them into the team grid and division fact lists.
4. Sign up for Resend and add `RESEND_API_KEY` + `CONTACT_TO_EMAIL` so the contact form actually sends.

---

*Part of the Action Building Cold Start Pack workflow.*
