# Session Handoff · 2026-07-20 (extensions update)

**What shipped:** Full staff directory by department, from `IN_OFFICE_EXTS.pdf`.

## What changed

- Every division section (Pharmacy, Medical Supply, DME/CRT, Warehouse) now has a "staff" list showing each person's name and extension.
- Pharmacy: Tom, Alan, Ana, Elie, Daria, plus a separate Formula line for Araceli.
- Medical Supply: Kristal, Josue, April, Evelyn, Julie, Valerie, Gabbie, Liza, Rebecca, plus a Billing line for Martha (Medical Supply billing).
- DME/CRT: Nelson, David, Monica, plus a Billing line for Mariana (DME billing).
- Warehouse: Carlos, Jorge, Josue, Mauricio.
- Bottom section now explains the four department dial codes (Pharmacy 1, Office 2, Medical Supply 3, Warehouse 4) and lists Margaret and Jenny under "Office," since they weren't in the department breakdown provided.
- Amanda & David's fax entry is unchanged from the prior commit (still no department assigned).

## Flagged for confirmation, not silently resolved

1. **Daria and Elie both show extension 231** in the source PDF. Listed as-is. Worth checking against the actual phone system.
2. **Valerie appeared twice** in the Medical Supply list you sent; shown once.
3. **Josue appears in both Medical Supply and Warehouse.** Kept in both, since that's what was specified.
4. **Margaret and Jenny** were not assigned to a department, so they're shown under "Office" (inferred from the unused OFFICE=2 zone code). Confirm or correct.
5. **David** appears individually (DME/CRT, ext. 235) and jointly with Amanda on a shared fax line. Both are shown; not a conflict, just worth knowing they're two separate entries.

---

*Part of the Action Building Cold Start Pack workflow.*
