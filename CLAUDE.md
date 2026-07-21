# CLAUDE.md · Project Governance Doc

**Project:** California Medical Pharmacy website
**Founder:** Minck R.
**Stack:** Next.js + Vercel + Resend (+ Calendly, pending connection)
**Last updated:** 2026-07-20

This file is the rulebook your AI pair (Claude Code, Cowork, or equivalent) reads before writing any code in this project. Rules are numbered. When Claude proposes something that violates a rule, cite the rule number and push back.

---

## Rules

### Rule 001. Informational site, no stored patient data

This site does not store patient health information in any database. The contact form sends an email via Resend and does not persist submissions anywhere else. The DME/CRT evaluation scheduler is a Calendly link, not a custom booking system. If a future feature needs to store health-related data, that requires a written architecture revision (see `ARCHITECTURE_ENGINEERING_PLAN.md`, Phase C) before any code is written, not after.

### Rule 002. Buy the plumbing, don't build it

Managed services for this project: **Vercel** for hosting, **Resend** for outbound email, **Calendly** for scheduling. Nothing else is needed for the current phase. Building a custom mail sender, calendar system, or database is a stop-and-ask moment for Claude.

### Rule 003. Secrets live in environment variables

No API keys in code, ever. Local: `.env.local`, gitignored. Production: Vercel's Environment Variables dashboard. The Calendly URL is public and safe to expose as `NEXT_PUBLIC_CALENDLY_URL`; the Resend key is not and stays server-side only.

### Rule 004. Two-folder safety

Claude's working folder and the GitHub repo folder (`/Users/minckr/Desktop/Cal Med Website`) are never the same folder. Claude produces ZIPs; the founder unzips them into the repo folder, commits via GitHub Desktop, and pushes.

### Rule 005. Plain copy, no em-dashes

Written content on the site does not use the em-dash character. Grep for `—` before any content ships.

### Rule 006. AI-output is a draft, not a release

Every ZIP Claude produces gets a quick read-through before commit, including a check that nothing marked TBD accidentally reads as a real phone number, email, or fax.

### Rule 007. No invented business facts

Claude does not fabricate phone numbers, extensions, emails, fax numbers, staff names, certifications, or claims about the business. Where real information hasn't been provided, the site shows a clearly marked placeholder (styled distinctly, e.g. "To be added") rather than a plausible-looking fake. This applies with extra weight here because the site is patient-facing for a real pharmacy.

### Rule 008. Legal pages need real review

The Terms and Conditions and Privacy Policy pages were drafted to satisfy Niko Health's Twilio/TCR SMS compliance requirement. They are marked as drafts on the page itself and must be reviewed by an attorney or compliance professional, with attention to how the Privacy Policy interacts with the pharmacy's existing HIPAA Notice of Privacy Practices, before the "draft" notice is removed.

---

*Retired or added rules stay numbered in order. Don't reuse a number. Part of the Action Building Cold Start Pack workflow.*
