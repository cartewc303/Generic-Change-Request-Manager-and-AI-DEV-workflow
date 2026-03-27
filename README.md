# Change Request Manager v2.0.0

A lightweight, AI-assisted change request workflow tool built as a single self-contained HTML file. Designed for small business teams managing feature requests, UI changes, configuration updates, and software improvements across any platform or system.

> **Live app (v2):** [cartewc303.github.io/.../v2/change_request_manager_v2.0.0.html](https://cartewc303.github.io/Generic-Change-Request-Manager-and-AI-DEV-workflow/v2/change_request_manager_v2.0.0.html)
>
> **Archived (v1):** [cartewc303.github.io/.../v1/change_request_manager_v3.html](https://cartewc303.github.io/Generic-Change-Request-Manager-and-AI-DEV-workflow/v1/change_request_manager_v3.html)

---

## What it does

Guides a change request through a structured 6-step process with two human approval gates and three AI-assisted steps. A Global Project Profile and per-step Skill editors give the AI deep context about your specific platform, stack, and standards — no coding required to customise.

### The workflow

```
Feature Request → Define (AI) → Gate 1 (Human) → Scope (AI) → Build → Test (AI) → Gate 2 (Human) → Deploy
```

| Step | Type | Description |
|---|---|---|
| 1. Feature Request | Manual | Captures who is asking, what they need, priority, and business reason |
| 2. Define | AI-assisted | AI drafts acceptance criteria using your Profile, Step Skill, and uploaded documents |
| Gate 1 | Human | Approver signs off on definition before any build work begins |
| 3. Scope | AI-assisted | AI suggests implementation approach and flags risks |
| 4. Build | Manual | Developer checklist, build notes, and staging URL |
| 5. Test | AI-assisted | AI generates test cases from the approved acceptance criteria |
| Gate 2 | Human | Stakeholder verifies the tested build before go-live |
| 6. Deploy | Manual | Pre and post-deploy checklists with completion sign-off |

---

## Key features

- **Single HTML file** — no server, no database, no install. Open in any browser.
- **Global Project Profile** — define your platform, stack, team and standards once. Feeds into every AI step automatically.
- **Per-step Skill editors** — each step has its own editable skill document the AI reads. Customise for any platform with no coding.
- **Four profile templates** — Generic, Odoo ERP, Python/Web, React/JS. Load and customise in seconds.
- **localStorage persistence** — Profile and Skills survive page refresh. Request data clears on New Request.
- **Document library** — upload briefs, specs, screenshots, brand guidelines. AI reads all uploads at every step.
- **Real AI via Cloudflare Worker proxy** — API key stored securely in Cloudflare, never in the HTML or repo.
- **Two human gates** — enforced approval checkpoints with named approver, date, and notes.
- **Fully generic** — works for any system, product, platform, or team.

---

## AI context hierarchy

Every AI step receives context in this order:

```
1. Global Project Profile  (persists across all requests)
         +
2. Step Skill              (specific to that step)
         +
3. Uploaded Documents      (session — cleared on refresh)
         +
4. Form data               (current request details)
```

The more you fill in the Profile and Skills, the more accurate and platform-specific the AI outputs become.

---

## Project Profile templates

| Template | Best for |
|---|---|
| Generic | Any project type — fill in your own details |
| Odoo ERP | Odoo customisation, module development, portal changes |
| Python / Web | Django, Flask, FastAPI, or any Python web app |
| React / JS | React, Next.js, Vite, or any JS frontend app |

---

## Document library

| Type | Extensions | How AI uses it |
|---|---|---|
| PDF | `.pdf` | Referenced by name and size in AI context |
| Images | `.png` `.jpg` `.jpeg` `.gif` `.webp` | Sent as base64 image blocks to the model |
| Markdown | `.md` `.markdown` | Parsed, rendered, full text sent to AI |
| Word | `.doc` `.docx` | Text extracted and sent to AI |
| Plain text | `.txt` | Full content sent to AI |
| CSV | `.csv` | Full content sent to AI |

---

## Technologies

| Category | Detail |
|---|---|
| Languages | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| AI API | Anthropic Messages API via Cloudflare Worker proxy |
| Model | `claude-sonnet-4-20250514` |
| Fonts | Inter via Google Fonts CDN |
| Storage | Browser localStorage (Profile + Skills only) |
| Dependencies | None — no npm, no bundler, no build step |

---

## Deployment

### Prerequisites

| Requirement | Detail |
|---|---|
| Modern browser | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |
| Cloudflare account | Free tier — for the Worker proxy |
| Anthropic API key | Get one free at [console.anthropic.com](https://console.anthropic.com) |
| Internet connection | Required for AI calls and Google Fonts |

### Cloudflare Worker setup

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → Create Worker
2. Paste the contents of `worker.js` from this repo → Deploy
3. Settings → Variables and Secrets → Add variable:
   - Name: `ANTHROPIC_API_KEY` · Value: your key · Type: **Secret** → Save
4. Copy your Worker URL (e.g. `https://cr-proxy.yourname.workers.dev`)

### HTML file setup

Open `change_request_manager_v2.0.0.html` in any text editor, find:
```javascript
const PROXY_URL = 'YOUR_WORKER_URL_HERE';
```
Replace with your Worker URL → save → push to GitHub.

### GitHub Pages

Settings → Pages → Deploy from a branch → main / root → Save.

Live at: `https://yourusername.github.io/your-repo/change_request_manager_v2.0.0.html`

---

## Repository structure

```
repo root/
├── README.md                             ← this file (always points to latest)
├── RELEASE.md                            ← full version history
├── worker.js                             ← Cloudflare Worker proxy (shared)
│
├── v2/                                   ← current version
│   ├── change_request_manager_v2.0.0.html
│   └── skills/
│       ├── SKILL-01-feature-request.md
│       ├── SKILL-02-define.md
│       ├── SKILL-03-scope.md
│       ├── SKILL-04-build.md
│       ├── SKILL-05-test.md
│       └── SKILL-06-deploy.md
│
└── v1/                                   ← archived
    └── change_request_manager_v3.html
```

---

## Customising without coding

1. Open the app → edit the **Project Profile** at the top
2. Expand any step card → click **Step Skill ✦** to edit that step's AI guidance
3. Click **Save** — stored in browser localStorage automatically
4. AI uses your updated content on the next run

---

## Version history

| Version | Date | Status | Highlights |
|---|---|---|---|
| **v2.0.0** | 2026-03-26 | ✅ Current | Global Project Profile, per-step Skills, localStorage, 4 platform templates |
| v1.1.0 | 2026-03-26 | Archived | Cloudflare Worker proxy, Settings modal, secure API key handling |
| v1.0.0 | 2026-03-26 | Archived | Initial release — 6-step workflow, 2 human gates, AI assist, document library |

Full release notes in [RELEASE.md](./RELEASE.md).

### v2.0.0 — Current
- Global Project Profile card with Generic, Odoo ERP, Python/Web, and React/JS templates
- Per-step Skill editors — edit AI guidance per step directly in the browser
- All Profile and Skill content persists in localStorage across sessions
- AI context hierarchy: Profile → Step Skill → Uploaded Documents → Form data
- Complete code rebuild — cleaner, faster, more maintainable
- Skills folder added to repo with default content for all 6 steps

### v1.1.0 — Archived
- Cloudflare Worker proxy (`worker.js`) added — API key never in the HTML
- Settings modal (⚙) with Cloudflare setup instructions
- Improved error handling for missing proxy URL and invalid API keys

### v1.0.0 — Archived
- 6-step change request workflow with 2 human approval gates
- AI-assisted Define, Scope, and Test steps via Anthropic API
- Document library supporting PDF, images, markdown, Word, TXT, CSV
- Markdown rendering and preview
- Single HTML file, zero dependencies

---

## Roadmap

- [ ] PDF export of completed request
- [ ] Multi-request dashboard / history view
- [ ] Odoo Project integration
- [ ] GitHub Issues integration
- [ ] Email notification at gate steps
- [ ] Team skill sharing from repo

---

## Licence

MIT — free to use, adapt, and redistribute.

*Change Request Manager · Built with Claude (Anthropic) · v2.0.0*
