# SKILL.md — Build

## Purpose
This file provides standards and conventions for the build step. Developers should read this before starting work. Upload it to the document library so the AI can reference these standards when reviewing build notes or generating test cases.

---

## Pre-Build Checklist
Before writing a single line of code:
- [ ] Gate 1 approval is on record with a named approver
- [ ] Acceptance criteria are clear and agreed
- [ ] Staging environment is available and up to date
- [ ] You have access to all systems, credentials, and tools needed
- [ ] Estimated effort has been confirmed with the PM/BA

---

## Build Standards

### General Rules
- **Never build directly on production** — staging only until Gate 2 approval
- Keep changes **as small as possible** — only touch what is in scope
- **Document as you go** — notes in the Build step form, not just in your head
- If you discover the scope is larger than estimated — **stop and communicate** before continuing
- Every change must be **reversible** — know how to undo it before you do it

### Code Standards
- Use meaningful variable and function names — no single letters except loop counters
- Comment any non-obvious logic — future you will thank present you
- No hardcoded credentials, API keys, or environment-specific values in code
- Follow existing naming conventions in the codebase — consistency over preference
- Remove all console.log and debug statements before marking build complete

### File Management
- Work in a **feature branch** if using Git — never commit directly to main during build
- Branch naming convention: `feature/CR-[request-title-slug]` e.g. `feature/CR-portal-header-colour`
- Commit messages should reference the change request title
- Keep commits small and focused — one logical change per commit

---

## Staging Verification
Before marking the build complete, verify on staging:

**Visual checks:**
- [ ] Change is visible and looks correct at 100% zoom
- [ ] Change looks correct at 125% and 150% zoom
- [ ] No layout breaks on desktop (1280px+)
- [ ] No layout breaks on tablet (768px)
- [ ] No layout breaks on mobile (375px)

**Functional checks:**
- [ ] All links and buttons on affected pages still work
- [ ] No JavaScript console errors (open browser dev tools → Console tab)
- [ ] No broken images or missing assets
- [ ] Page load speed is not noticeably slower

**Cross-browser checks:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if Mac available)
- [ ] Edge

---

## Evidence Requirements
The reviewer at Gate 2 needs to verify your work. Provide:

1. **Screenshot or screen recording** of the change on staging
2. **Before and after** — show what it looked like before if possible
3. **Staging URL** — direct link to the affected page
4. **Build notes** — brief description of what files/areas were changed and how

---

## Rollback Plan
Document your rollback plan in the build notes:
- What files were changed? (so they can be reverted)
- Is there a backup of any data or config that was modified?
- How long would a rollback take?
- Who needs to be informed if a rollback is required?

---

## Context for AI
When reviewing build notes or generating test cases for this project:
- Flag any build notes that suggest scope creep beyond the original acceptance criteria
- Note if rollback information is missing
- Use the acceptance criteria from the Define step as the basis for test case generation
- Highlight if any of the standard staging verification checks appear to have been skipped
