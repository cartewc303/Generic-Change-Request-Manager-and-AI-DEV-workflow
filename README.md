# Change Request Manager V1.0.0

A lightweight, AI-assisted change request workflow tool built as a single self-contained HTML file. Designed for small business teams managing feature requests, UI changes, configuration updates, and software improvements across any platform or system.

---

## What it does

Guides a change request through a structured 6-step process with two human approval gates and three AI-assisted steps. A persistent document library lets users upload supporting files at any stage — the AI reads all uploaded documents automatically at every assist step.

### The workflow

```
Feature Request → Define (AI) → Gate 1 (Human) → Scope (AI) → Build → Test (AI) → Gate 2 (Human) → Deploy
```

| Step | Type | Description |
|---|---|---|
| 1. Feature Request | Manual | Captures who is asking, what they need, priority, and business reason |
| 2. Define | AI-assisted | AI analyses the request and drafts acceptance criteria from uploaded documents |
| Gate 1 | Human | Approver signs off on definition before any build work begins |
| 3. Scope | AI-assisted | AI suggests implementation approach and flags risks based on docs and criteria |
| 4. Build | Manual | Developer checklist, build notes, and staging URL |
| 5. Test | AI-assisted | AI generates test cases directly from the approved acceptance criteria |
| Gate 2 | Human | Stakeholder verifies the tested build against Gate 1 criteria before go-live |
| 6. Deploy | Manual | Pre and post-deploy checklists with completion sign-off |

---

## Key features

- **Single HTML file** — no server, no database, no install. Open in any browser.
- **Persistent document library** — upload files at any step; all documents feed into every AI assist automatically
- **Real AI via Anthropic API** — live Claude API calls for Define, Scope, and Test steps
- **Markdown rendering** — `.md` files are parsed and rendered with full formatting in the document library
- **Two human gates** — enforced approval checkpoints with named approver, date, and notes fields
- **Step-locked progression** — each step unlocks only after the previous is completed
- **Re-run AI** — regenerate any AI step after adding new documents without losing other progress
- **Fully generic** — no platform-specific references; works for any system, product, or team

---

## Document library

Accepted file types:

| Type | Extensions | How AI uses it |
|---|---|---|
| PDF | `.pdf` | Referenced by name and size in AI context |
| Images | `.png` `.jpg` `.jpeg` `.gif` `.webp` | Sent as base64 image blocks directly to the model |
| Markdown | `.md` `.markdown` | Parsed and rendered; full text sent to AI |
| Word | `.doc` `.docx` | Text extracted and sent to AI |
| Plain text | `.txt` | Full text sent to AI |
| CSV | `.csv` | Full content sent to AI |

Files can be added or removed at any point. Each AI step shows a badge confirming how many documents are currently in context. A "Re-run with latest documents" link appears after each AI step completes.

---

## Technologies used

### Languages
- **HTML5** — single-file structure, semantic layout
- **CSS3** — custom properties (variables), flexbox, CSS grid, keyframe animations, responsive breakpoints
- **Vanilla JavaScript (ES6+)** — no frameworks or build tools required

### APIs
- **Anthropic Messages API** (`/v1/messages`) — powers the three AI assist steps
  - Model: `claude-sonnet-4-20250514`
  - Features used: multi-modal input (text + images), system prompts, structured output

### Fonts
- **Inter** — loaded via Google Fonts CDN (`fonts.googleapis.com`)
  - Weights: 300, 400, 500, 600

### External dependencies
- Google Fonts (Inter) — CDN loaded, display only
- No JavaScript libraries or frameworks
- No npm, no bundler, no build step

---

## Styling approach

### Design system
- CSS custom properties for all colours, spacing, and radii — defined in `:root`
- Light theme only (designed for internal business use)
- Responsive at 700px breakpoint — sidebar stacks below main content on mobile

### Colour palette

| Role | Variable | Value |
|---|---|---|
| Background | `--bg` | `#f5f6f8` |
| Surface | `--white` | `#ffffff` |
| Border | `--border` | `#e2e4e9` |
| Accent (primary) | `--accent` | `#6c47ff` |
| Human gates | `--human` | `#7c3aed` |
| AI assist | `--teal` | `#0d9488` |
| Success / green | `--green` | `#059669` |
| Warning / amber | `--amber` | `#d97706` |
| Danger / red | `--red` | `#dc2626` |

### Component patterns
- **Section cards** — collapsible, locked/unlocked states, border accent per type
- **Radio chips** — pill-style single-select groups
- **Drop zone** — drag-and-drop file upload with hover state
- **AI assist boxes** — teal-bordered panels with loading spinner and re-run link
- **Human gate boxes** — purple-bordered panels with approve/reject actions
- **Progress tracker** — step dots with connector lines, human gate markers
- **Checklists** — interactive tick boxes with strikethrough on completion

---

## AI prompt design

Each AI step uses a separate system prompt optimised for its task:

| Step | System prompt goal | Output format |
|---|---|---|
| Define | Analyse request, draft acceptance criteria | Paragraph + numbered list |
| Scope | Implementation approach + risks | Short sections with bold headers |
| Test | Generate test cases from criteria | Numbered list only (parsed into checkboxes) |

All prompts instruct the model to use uploaded document content where provided. Image files are sent as base64 blocks; text-based files are appended as labelled document sections in the user message.

---

## File structure

```
change_request_manager_v3.html   ← entire application (single file)
README.md                        ← this file
```

---

## Prerequisites

### To run with AI features enabled
| Requirement | Detail |
|---|---|
| **Anthropic API key** | Required for the Define, Scope, and Test AI steps. Get one at [console.anthropic.com](https://console.anthropic.com) |
| **API key in scope** | The key must be accessible to the page — see deployment options below |
| **Internet connection** | Required for Anthropic API calls and Google Fonts (Inter) |
| **Modern browser** | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ — any browser supporting ES6, FileReader API, and CSS variables |

### To run without AI (manual mode)
- Any browser, no internet required beyond initial page load for fonts
- All AI steps can be completed manually — the form fields remain editable regardless
- No API key needed

> **Browser compatibility note:** File drag-and-drop and the FileReader API are required for the document library. These are supported in all modern browsers but not in Internet Explorer.

---

## Deployment

This is a single HTML file with no build step, no server-side code, and no database. Deployment is as simple as making the file accessible.

### Option 1 — Local file (simplest, no AI)
```
1. Download change_request_manager_v3.html
2. Open it directly in your browser (File → Open, or double-click)
```
No server needed. AI steps will show a connection error unless you add your API key (see Option 3).

---

### Option 2 — GitHub Pages (free, public or private)
```
1. Push the file to a GitHub repository
2. Go to Settings → Pages
3. Set source to: Deploy from a branch → main → / (root)
4. GitHub will publish it at: https://yourusername.github.io/your-repo/
```
> ⚠️ Do not embed your Anthropic API key directly in the HTML if the repository is public — anyone can view source and steal the key. Use Option 4 (proxy) for public deployments.

---

### Option 3 — Internal / local network hosting (recommended for teams)
Serve the file from any basic web server on your internal network. No configuration required beyond placing the file in the web root.

**Using Python (built-in, no install):**
```bash
# Python 3
python -m http.server 8080

# Then open: http://localhost:8080/change_request_manager_v3.html
```

**Using Node.js (if installed):**
```bash
npx serve .
# Then open the URL shown in the terminal
```

**Using VS Code:**
Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click the file, and select "Open with Live Server".

For team access, host on any internal server (IIS, Apache, Nginx) or a shared network drive opened via a local web server. All team members access the same URL — each person runs their own session in their browser.

---

### Option 4 — Enter your API key at runtime (recommended for GitHub Pages)

The tool includes a built-in **Settings panel** — click the ⚙ icon in the top-right corner of the page. Enter your Anthropic API key there. The key lives only in your browser tab's memory and is cleared when you close or refresh the page.

This is the safest approach for a public GitHub Pages deployment — no key ever touches the repository or the HTML file. Each user enters their own key.

**To use:**
1. Open the deployed page
2. Click ⚙ in the top-right header
3. Paste your Anthropic API key (`sk-ant-api03-...`)
4. Click Save Key — the icon turns green confirming it's set
5. Proceed through the workflow — AI steps will now work

If an AI step is triggered without a key set, the settings modal opens automatically with a prompt to add the key.

> Get a free API key at [console.anthropic.com](https://console.anthropic.com) → API Keys → Create Key.

---

### Option 5 — Cloudflare Pages (free tier, public URL)
```
1. Push repo to GitHub
2. Log in to dash.cloudflare.com → Workers & Pages → Create
3. Connect your GitHub repo
4. Build command: (leave blank)
5. Output directory: / (root)
6. Deploy
```
Cloudflare Pages serves the file globally with HTTPS. Use a Cloudflare Worker as a proxy to keep your API key out of the HTML for public deployments.

---

### Option 6 — Netlify drop (fastest public deploy, no account needed)
```
1. Go to app.netlify.com/drop
2. Drag and drop your HTML file (or the folder containing it)
3. Netlify gives you an instant public HTTPS URL
```
Free, no signup required for a basic drop. Upgrade to a Netlify account to get a custom subdomain and redeploy on update.

---

## Security notes

| Concern | Recommendation |
|---|---|
| API key exposure | Never embed in HTML for public repos. Use a server-side proxy. |
| Sensitive documents | Uploaded files exist only in browser memory — nothing is sent to any server except the Anthropic API during AI steps |
| Access control | The tool has no authentication. For sensitive requests, host on an internal network or add HTTP basic auth at the server level |
| Data persistence | No data is stored between sessions. Refresh or close = data lost. A future version will add optional LocalStorage. |

---

## How to use

1. Open `change_request_manager_v3.html` in any modern browser
2. Upload any supporting documents to the library on the right (optional but recommended before starting)
3. Complete Step 1 — Feature Request and click Submit
4. Review and edit the AI-drafted acceptance criteria in Step 2
5. Have the relevant approver complete Gate 1
6. Continue through Scope → Build → Test → Gate 2 → Deploy
7. Click "New Request" to start a fresh request (clears all data)

> **Note:** The AI assist steps make live calls to the Anthropic API. The API key must be configured in the hosting environment for these steps to return results. If no key is present, a connection error is shown and the step can be completed manually.

---

## Intended use cases

- UI / UX change requests
- Configuration or settings changes
- New feature requests from management, customers, or staff
- Integration or module additions
- Any change that needs a documented approval trail before going to production

---

## Roadmap / potential extensions

- [ ] LocalStorage persistence so progress survives a page refresh
- [ ] PDF export of completed request as a signed-off record
- [ ] Odoo Project integration — map steps to task stages + Studio custom fields
- [ ] GitHub Issues integration — create issue from request, sync stage via Actions
- [ ] Multi-request dashboard / history view
- [ ] Email notification at gate steps via mailto or API

---

## Licence

MIT — free to use, adapt, and redistribute. No warranty implied.

Version numbering going forward — keep it simple:
ChangeVersion bumpSmall fix or tweakv1.0.1
New feature addedv1.1.0
Major rebuildv2.0.0

*Built with Claude (Anthropic) · Change Request Manager v3*
