# SKILL.md — Scope

## Purpose
This file gives the AI technical context about your systems, stack, and conventions so it can produce accurate, relevant scoping advice. Upload this file — along with any technical specs or architecture docs — before the Scope step runs.

---

## Technical Environment
<!-- UPDATE THIS SECTION with your actual stack -->

**Primary platform:** Business management / ERP system
**Frontend:** HTML, CSS, JavaScript
**Version control:** GitHub
**Deployment:** GitHub Pages (static) + Cloudflare Workers (API proxy)
**Browser targets:** Chrome, Firefox, Safari, Edge — desktop and mobile
**Staging environment:** Separate instance from production — all builds must be tested here first

---

## Implementation Approach by Change Type

### UI / CSS Changes
- Prefer a **custom stylesheet** or override file rather than editing core system files
- Use CSS custom properties (variables) for colour and spacing where possible
- Test in all target browsers — flexbox and grid behave differently across versions
- Check both light and dark mode if the system supports it
- Minify CSS before deploying to production

### Configuration Changes
- Document the before and after state of every setting changed
- Take a screenshot of the configuration screen before making changes
- Check if the change affects other users, teams, or modules — not just the requestor
- Some config changes require a cache clear or system restart — note this in build notes

### Feature Additions
- Build the smallest possible version first — validate with the requestor before adding complexity
- New features must not modify existing data structures without a migration plan
- Any new UI elements must match the existing design system
- Consider what happens when the feature has no data — empty states matter

### Integrations
- Always use a sandbox/test account for the third-party system during development
- Map the data fields on both sides before writing any code
- Plan for authentication token expiry and renewal
- Document the rate limits of any external API being called

---

## Effort Estimation Guide

| Size | Hours | What fits |
|---|---|---|
| XS | < 2h | Single CSS change, label update, toggle a setting |
| S | Half day | Multi-element UI change, simple config workflow |
| M | 1–2 days | New view or screen, multi-step config, simple integration |
| L | 3–5 days | New feature with UI + logic, complex integration |
| XL | 1 week+ | Major feature, multi-system integration, data migration |

**Always add 20% buffer** for testing, review cycles, and unexpected issues.

---

## Risk Assessment Checklist

When scoping, flag any of these as risks:

- [ ] Change touches core navigation or global layout
- [ ] Change affects more than one module or system
- [ ] Change involves third-party API with rate limits or costs
- [ ] Change requires a data migration or schema update
- [ ] Change has never been done on this platform version before
- [ ] Rollback would require manual data restoration
- [ ] Change is time-sensitive (e.g. tied to a client deadline or launch)

---

## Dependencies to Check
- Does this change depend on another in-progress change?
- Does another team member need to provide access, credentials, or approval?
- Does the change require a specific system version or plugin?
- Is there a maintenance window required for deployment?

---

## Context for AI
When producing scope advice for this project:
- Default to the least invasive implementation — preserve existing behaviour
- Always recommend staging testing before production
- If a technical spec or architecture document is uploaded, reference it directly
- Flag if the effort estimate is likely to be L or XL — these need extra scrutiny at Gate 1
- Note any risks that should be added to the risk register
- Suggest specific files or areas to change where possible based on the change type
