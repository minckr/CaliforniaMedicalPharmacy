# ARCHITECTURE_ENGINEERING_PLAN.md · ADR-000

**Project:** California Medical Pharmacy website
**Founder:** Minck R.
**Repo:** https://github.com/minckr/CaliforniaMedicalPharmacy
**Date:** 2026-07-17
**Status:** Day 0 draft. Revise as the product's reality changes.

---

## 1. Current state

No prototype exists yet. This is a fresh start. The GitHub repo is created and connected to Vercel with one commit (README placeholder). Day 0 is the first real content.

## 2. What this product is, in one sentence

A public-facing website for California Medical Pharmacy: who the pharmacy is, what it offers, where it is, and how to reach it, with a simple way for customers to request a prescription refill or ask a question without the pharmacy handling any patient health data through the website itself.

## 3. Five design principles

1. **Informational first, transactional later.** V1 answers "who, what, where, when, how do I reach you." No login, no patient portal, no stored health data. If refill requests or account features come later, that is a new architectural phase with its own plan revision, not a Day-0 assumption.
2. **No plumbing to build.** Hosting is Vercel. Email is Resend. Nothing else is needed for V1. Do not add a database or auth provider until a real feature requires one.
3. **No PHI on the website.** A refill-request or contact form sends an email; it does not store patient data in any database this project controls. If prescription-specific data ever needs to persist, that triggers a HIPAA-aware architecture review before it ships, not after.
4. **Two-folder safety, always.** Claude's working folder and the GitHub repo folder stay separate. Every release ships as a ZIP the founder unzips into the repo folder, commits, and pushes.
5. **Plain, human copy.** No filler, no em-dashes, no marketing haze. A visitor should be able to find the phone number and the hours in under five seconds.

## 4. Target architecture

- **Framework:** Next.js (App Router), deployed on Vercel. Matches the pack's default stack and Vercel's zero-config detection.
- **Pages:** Home (hero, services, hours, location), Services, Contact/Refill Request.
- **Contact/refill form:** A Next.js API route (`/api/contact`) that sends an email via Resend. No database. No storage of submitted data beyond the email itself, which lives in the pharmacy's inbox, not in this codebase.
- **Styling:** Plain CSS to start (no component library yet). A real design pass comes once content is confirmed; Day 0 optimizes for correctness and speed to first deploy, not final polish.
- **No auth, no database, no payments** in V1. Added only when a specific feature needs them, each as its own ADR.

## 5. Development phases

**Phase A — Day 0 (this plan).** Static informational site: home, services, contact. Deployed and live on the custom flow (push to `main` → Vercel auto-build).

**Phase B — First real content pass.** Real copy, real hours/location, real service list, a design pass following the pack's frontend-design guidance instead of the plain Day-0 scaffold.

**Phase C — Situational.** Only if the business asks for it: refill-request tracking, appointment booking, or a patient-facing portal. Any of these re-opens this ADR because they introduce PHI, which changes the plumbing (adds Supabase with Row-Level Security from migration 1, likely Clerk for auth) and the compliance posture.

## 6. AI prompt architecture

No AI-facing product surface in V1 (no chatbot, no AI-generated content shown to visitors). Claude's role is entirely as the build pair, governed by `CLAUDE.md`. If an AI-facing feature is added later (e.g., an FAQ assistant), it gets its own design doc and its own entry in this plan.

---

*Revisit this plan before Phase C, or whenever the product's reality stops matching what's written here.*
