# CLAUDE.md · Project Governance Doc

**Project:** California Medical Pharmacy website
**Founder:** Minck R.
**Stack:** Next.js + Vercel + Resend
**Last updated:** 2026-07-17

This file is the rulebook your AI pair (Claude Code, Cowork, or equivalent) reads before writing any code in this project. Rules are numbered. When Claude proposes something that violates a rule, cite the rule number and push back.

---

## Rules

### Rule 001. Informational site, no stored patient data

This site does not store patient health information in any database. The contact/refill form sends an email via Resend and does not persist submissions anywhere else. If a future feature needs to store health-related data, that requires a written architecture revision (see `ARCHITECTURE_ENGINEERING_PLAN.md`, Phase C) before any code is written, not after.

**Enforcement:** any new database, table, or persistent store is a stop-and-ask moment for Claude.

### Rule 002. Buy the plumbing, don't build it

Managed services for this project: **Vercel** for hosting, **Resend** for outbound email. Nothing else is needed for V1. When Claude suggests writing a custom mail sender, a custom database, or a custom auth system, the default answer is no.

**Enforcement:** every new dependency gets a one-line justification in `ARCHITECTURE_ENGINEERING_PLAN.md`.

### Rule 003. Secrets live in environment variables

No API keys in code, ever. Local: `.env.local`, gitignored. Production: Vercel's Environment Variables dashboard. Never in the chat, never in a screenshot, never in a commit.

**Enforcement:** `.env.local` is in `.gitignore` from the first commit. `.env.example` documents key names only, no real values.

### Rule 004. Two-folder safety

Claude's working folder and the GitHub repo folder (`/Users/minckr/Desktop/Cal Med Website`) are never the same folder. Claude produces ZIPs; the founder unzips them into the repo folder, commits via GitHub Desktop, and pushes. Claude never writes directly into the repo folder.

**Enforcement:** if Claude proposes writing directly to the repo folder, stop and re-point Claude at this rule.

### Rule 005. Plain copy, no em-dashes

Written content on the site (and in this repo's docs) does not use the em-dash character. Use a period, comma, colon, or a rewrite instead. This is a cheap habit that keeps the writing from reading as AI-generated filler.

**Enforcement:** grep for `—` before any content ships.

### Rule 006. AI-output is a draft, not a release

Every ZIP Claude produces gets a quick read-through before commit. Skimming the diff in GitHub Desktop before clicking Commit is the checkpoint, not a formality.

**Enforcement:** founder reviews the diff before every commit.

---

*Retired or added rules stay numbered in order. Don't reuse a number. Part of the Action Building Cold Start Pack workflow.*
