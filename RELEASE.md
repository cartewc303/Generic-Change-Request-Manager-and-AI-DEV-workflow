# Release Notes

---

## v2.0.0 — 2026-03-26

### Major release — Global Project Profile + Per-step Skills

This release introduces a no-code AI context system that makes the tool significantly more powerful and platform-specific without requiring any developer involvement.

### What's new

**Global Project Profile**
- New card at the top of the page — define your platform, stack, team, and standards once
- Four built-in quick-start templates: Generic, Odoo ERP, Python/Web, React/JS
- Free-text markdown editor — edit anything directly in the browser
- Profile is automatically injected into every AI step (Define, Scope, Test)
- Persists in browser localStorage — survives page refresh
- Custom/Default status badge shows at a glance whether you've personalised it
- Reset to any template at any time without losing step skills

**Per-step Skill editors**
- Every step card now includes a collapsible Step Skill panel
- Pre-loaded with practical default guidance for each step
- Edit directly in the browser — no files, no coding, no GitHub needed
- Each step's skill is injected alongside the Profile for that step's AI call
- Independent save and reset per step
- Persists in localStorage — survives page refresh

**AI context hierarchy**
- AI now receives: Project Profile + Step Skill + Uploaded Documents + Form data
- Context badges in each AI step confirm Profile and Skill are active
- Re-run buttons updated to "Re-run with latest context"

**Skill files in repo**
- Six default SKILL markdown files added to `/skills` directory
- Serve as the starting content for each step's in-browser editor
- Can be edited in GitHub and shared across teams

**New reset behaviour**
- "New Request" clears only the current request form data
- Project Profile and Step Skills are always preserved across requests

**Complete code rebuild**
- Cleaner, more compressed CSS throughout
- Shorter, more consistent JavaScript variable and function names
- Header updated to show v2.0.0
- Full Cloudflare Worker proxy support carried forward from v1.x

### Files changed

| File | Change |
|---|---|
| `change_request_manager_v2.0.0.html` | Full rebuild — new file |
| `README.md` | Fully updated for v2.0.0 |
| `RELEASE.md` | New file |
| `skills/SKILL-01-feature-request.md` | New file |
| `skills/SKILL-02-define.md` | New file |
| `skills/SKILL-03-scope.md` | New file |
| `skills/SKILL-04-build.md` | New file |
| `skills/SKILL-05-test.md` | New file |
| `skills/SKILL-06-deploy.md` | New file |
| `worker.js` | Unchanged |

### Upgrade from v1.x

No breaking changes to the Cloudflare Worker — `worker.js` is unchanged. Simply replace the HTML file and update the live URL in README if needed. Your Worker URL is already baked into the new file.

---

## v1.1.0 — 2026-03-26

### Cloudflare Worker proxy + Settings modal

- Added Cloudflare Worker proxy (`worker.js`) to route AI calls securely
- API key stored as encrypted secret in Cloudflare — never in HTML or repo
- Settings modal (⚙ icon) with setup instructions and link to Anthropic console
- Improved error handling for missing proxy URL and invalid API key responses
- README updated with full deployment and prerequisites documentation

---

## v1.0.0 — 2026-03-26

### Initial release

- 6-step change request workflow
- Two human approval gates (Gate 1 — Definition, Gate 2 — Build Verification)
- AI-assisted Define, Scope, and Test steps via Anthropic API
- Persistent document library (PDF, images, markdown, Word, TXT, CSV)
- Markdown parsing and preview in document library
- Step-locked progression — each step unlocks after the previous completes
- Re-run AI with latest documents
- New Request clears all form data
- Single HTML file, no dependencies, no install required
- Deployed on GitHub Pages
