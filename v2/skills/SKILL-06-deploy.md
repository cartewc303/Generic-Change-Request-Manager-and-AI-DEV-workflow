# SKILL.md — Deploy

## Purpose
This file provides deployment standards and procedures for this project. Upload it to the document library so the AI can reference deployment requirements when generating checklists or reviewing deploy notes.

---

## Deployment Principles
1. **Never deploy without Gate 2 approval** — a named stakeholder must have verified the build on staging
2. **Always have a rollback plan** — know how to undo the change before you start
3. **Deploy during low-traffic windows** — avoid peak business hours
4. **One change at a time** — never bundle multiple unrelated changes into one deploy
5. **Verify immediately after deploy** — don't walk away until you've confirmed it's working on production

---

## Deployment Windows
<!-- UPDATE with your actual preferred windows -->

| Day | Preferred window | Notes |
|---|---|---|
| Monday–Thursday | After 6pm local time | Avoid Monday mornings |
| Friday | Not recommended | No deploys before weekends unless critical |
| Saturday–Sunday | Emergency only | Requires manager approval |
| Public holidays | Not permitted | |

---

## Pre-Deploy Checklist

### Backup
- [ ] Database backup taken and verified (know where it is and how to restore)
- [ ] Current production files backed up if overwriting
- [ ] Backup timestamp recorded in deploy notes

### Approvals
- [ ] Gate 2 signed off with named verifier and date
- [ ] PM / BA notified deploy is starting
- [ ] Requestor notified — expected go-live time communicated

### Readiness
- [ ] Staging version matches exactly what will be deployed to production
- [ ] No uncommitted changes in the build
- [ ] All test cases passed on staging
- [ ] Rollback procedure documented and tested if possible

---

## Deployment Steps
<!-- UPDATE with your specific deployment process -->

**For GitHub Pages deployments:**
1. Merge feature branch to main (or commit directly if working solo)
2. Push to GitHub — Pages redeploys automatically within 60 seconds
3. Hard refresh production URL (`Ctrl+Shift+R`) to clear cache
4. Verify change is live and correct

**For other system deployments:**
1. Log the deploy start time
2. Apply the change using your standard deployment method
3. Clear any application or CDN cache
4. Verify on production immediately
5. Log the deploy end time and result

---

## Post-Deploy Verification
Within 10 minutes of deploying, confirm:

- [ ] Change is visible and correct on production
- [ ] Affected page loads without errors
- [ ] Navigation and related pages still work
- [ ] No spike in error logs or monitoring alerts
- [ ] Change looks correct on mobile as well as desktop

---

## Notification Protocol
After a successful deploy:

1. **Notify the requestor** — tell them what was deployed and ask them to verify
2. **Update the change log** — record what changed, when, and who deployed
3. **Close the change request** — mark as complete in your tracking system
4. **Archive any supporting documents** — keep the record clean

---

## Rollback Procedure
If something goes wrong after deploy:

1. **Don't panic** — most changes are reversible
2. Assess severity — is it cosmetic or is it breaking core functionality?
3. If breaking: roll back immediately, then investigate
4. If cosmetic: document and schedule a fix — no need to roll back
5. Notify PM / BA immediately if a rollback is needed
6. Document what happened in the deploy notes

**Rollback for GitHub Pages:**
- Open GitHub Desktop → History tab
- Find the previous commit → right-click → Revert
- Push the revert → Pages redeploys within 60 seconds

---

## Change Log Entry Format
Add an entry to your team change log after every deploy:

```
Date: DD/MM/YYYY
Time: HH:MM
Deployed by: [Name]
Change: [Brief description matching the request title]
Request ID / Reference: [If applicable]
Systems affected: [List]
Verified by: [Name] at [Time]
Notes: [Any issues encountered or observations]
```

---

## Context for AI
When reviewing deploy notes or generating deploy checklists for this project:
- Flag if Gate 2 approval is not recorded before deploy steps are marked complete
- Flag if no rollback procedure is documented
- Flag if the deploy is noted as happening on a Friday or outside the preferred window
- Remind the user to notify the requestor and update the change log after deploy
- If the deploy notes mention any issues, suggest whether they warrant a rollback or a follow-up fix
