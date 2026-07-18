# Session Handoff · 2026-07-17

**What shipped:** Day 0 for California Medical Pharmacy website.

## In this ZIP

- `ARCHITECTURE_ENGINEERING_PLAN.md` (ADR-000): five design principles, target architecture, three-phase roadmap.
- `CLAUDE.md`: six numbered governance rules for this project.
- `.env.example`: the two env vars this project needs (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`).
- `.gitignore`: excludes `node_modules`, `.next`, and all `.env*` files except `.env.example`.
- `package.json` / `tsconfig.json`: minimal Next.js 14 App Router setup.
- `app/layout.tsx`, `app/globals.css`: shared layout and styling.
- `app/page.tsx`: home page with services and hours (placeholder content, marked as such).
- `app/contact/page.tsx`, `app/contact/contact-form.tsx`: contact page and client form.
- `app/api/contact/route.ts`: server route that emails form submissions via Resend. No database. No stored data beyond the email itself.

## What to verify after this ships

1. Site builds and deploys on Vercel without errors.
2. Home page and Contact page render.
3. Contact form does not need to actually send mail yet to consider Day 0 done — that requires the Resend account and API key, which is Phase B, not Day 0.

## What is intentionally NOT in this ZIP

- Real business copy (hours, address, phone number, service list). All placeholder text, called out in the page itself.
- A visual design pass. This is a plain, functional scaffold, not the final look. A real design pass comes once content is confirmed, per Phase B in the architecture plan.
- Resend account setup and API key. The code path exists; the account does not yet.
- Any database, auth, or payments. Not needed for V1 per the architecture plan.

## Next session should

1. Confirm real business details (phone, address, hours, service list) and swap them in.
2. Sign up for Resend, get an API key, add it to `.env.local` and Vercel's dashboard (never the chat).
3. Optionally: a real design pass on the site's look, once copy is locked.

---

*Part of the Action Building Cold Start Pack Day-0 workflow.*
