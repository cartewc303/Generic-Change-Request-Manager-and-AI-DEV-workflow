# SKILL.md — Feature Request

## Purpose
This file provides the AI with context about how to interpret and classify incoming feature requests for this project. Upload this file to the Document Library before submitting a request so the AI can reference it during the Define step.

---

## About This Project
<!-- UPDATE THIS SECTION with your specific project details -->
This is a software change request workflow tool used by a small business team to manage UI changes, configuration updates, feature additions, and integrations across internal systems.

**Primary systems affected:**
- Internal web applications
- Business management platforms (e.g. ERP, CRM)
- Customer-facing portals
- Reporting and dashboard tools

**Team structure:**
- Product Manager / Business Analyst — owns the request process
- Developer — implements changes
- Stakeholders — management, customers, internal staff who submit requests

---

## Request Classification Guide

When reading a feature request, classify it using these categories:

| Change Type | Description | Typical Effort |
|---|---|---|
| UI / UX | Visual changes, layout, colours, fonts, branding | XS–S |
| Configuration | System settings, permissions, workflows | XS–M |
| Feature | New functionality, new screens, new integrations | M–L |
| Fix | Correcting broken or incorrect behaviour | XS–S |
| Integration | Connecting two systems or APIs | M–XL |
| Content | Text, labels, copy changes | XS |

---

## Priority Definitions

| Priority | Meaning | Expected Response |
|---|---|---|
| High | Blocking business operations or customer-facing issue | Same day triage |
| Medium | Important but not blocking | Within current sprint |
| Low | Nice to have, no urgency | Backlog |

---

## Requestor Context

**Management requests** typically involve:
- Branding and presentation changes
- Reporting and visibility improvements
- Process efficiency changes

**Customer requests** typically involve:
- Portal usability issues
- Missing features they need to do their job
- Data they can't access or export

**Internal staff requests** typically involve:
- Workflow friction points
- Missing shortcuts or automations
- Data entry improvements

---

## What Makes a Good Request
A well-formed request should answer:
1. What is broken or missing?
2. Who is affected and how many people?
3. What does success look like?
4. Is there a workaround currently?
5. What is the business impact if not done?

---

## Things to Watch For
- Requests that are actually multiple separate changes — flag these for splitting
- Requests with no clear success criteria — push back for more detail at Define
- Requests that touch core system functionality — escalate effort estimate
- Requests from customers that may have contractual implications — flag for review
