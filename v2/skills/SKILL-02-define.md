# SKILL.md — Define

## Purpose
This file guides the AI when drafting requirements and acceptance criteria during the Define step. Upload this alongside any briefs, screenshots, or brand documents to give the AI the full context it needs to produce accurate, testable criteria.

---

## How to Write Good Acceptance Criteria

Acceptance criteria must be:
- **Specific** — no vague language like "should look better" or "should be faster"
- **Testable** — a human can check pass or fail with a clear yes/no
- **Scoped** — covers only this change, not future changes
- **Agreed** — signed off by both the requestor and the developer before build starts

### Good example:
> The portal header background colour matches the brand primary colour (#2B4C8C) on all pages including Home, Dashboard, and Settings.

### Bad example:
> The header should look more on-brand.

---

## Acceptance Criteria Template

Use this structure when drafting criteria:

```
1. [What the change does] is visible on [where] when [condition].
2. All existing [related functionality] continues to work correctly.
3. The change displays correctly on [browsers/devices].
4. No [errors/broken layouts/console errors] are introduced.
5. The change matches [brand guideline / spec / screenshot provided].
```

---

## Brand & Style Guidelines
<!-- UPDATE THIS SECTION with your brand details -->

**Primary colour:** #2B4C8C
**Secondary colour:** #F5A623
**Font:** Inter (web), Arial (fallback)
**Logo usage:** Always on white or light backgrounds, minimum 120px wide
**Button style:** Rounded corners (8px radius), primary colour fill, white text

**Do not change:**
- Navigation structure or menu order
- Any functionality behind a visible UI change
- System-generated content areas
- Mobile breakpoints unless explicitly in scope

---

## Definition of Ready
A request is ready to proceed to Gate 1 when:
- [ ] Acceptance criteria are written in plain, testable language
- [ ] The affected component / module is clearly identified
- [ ] Any brand or style references are attached as documents
- [ ] The requestor has confirmed the criteria match their expectation
- [ ] Edge cases and exclusions are noted

---

## Common Pitfalls at Define
- **Too broad** — "update the whole dashboard" is not a definition, it's a project
- **Missing browser scope** — always specify Chrome, Firefox, Safari, mobile if relevant
- **No negative criteria** — always include at least one "must not break X"
- **Assuming dev knowledge** — write criteria as if the reader has never seen the system

---

## Context for AI
When drafting acceptance criteria for this project:
- Default to including a cross-browser check unless the request is back-end only
- Always include a "no regressions" criterion for any UI change
- If a brand guideline document is uploaded, reference specific values from it
- Keep criteria numbered and each on its own line for easy conversion to test cases
- Flag any ambiguity in the request rather than assuming — add a note like "Note: requestor should confirm whether mobile is in scope"
