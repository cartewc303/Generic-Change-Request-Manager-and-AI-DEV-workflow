# SKILL.md — Test

## Purpose
This file guides the AI when generating test cases and helps testers understand what good testing looks like for this project. Upload this file before the Test step so the AI produces relevant, thorough test cases aligned to your environment and standards.

---

## Testing Philosophy
Testing is not about finding every possible bug — it is about confirming the acceptance criteria are met and that nothing existing has been broken. A change request test should be fast, focused, and repeatable.

**The three questions every test must answer:**
1. Does the change do what the acceptance criteria says it should?
2. Does everything that worked before still work?
3. Does it work for the people who will actually use it?

---

## Test Case Format

Each test case should follow this structure:

```
[Number]. [What to do] → Expected result: [What should happen]
```

**Example:**
```
1. Navigate to the portal home page → Expected result: Header background displays in brand blue (#2B4C8C)
2. Click the logo in the header → Expected result: Logo navigates to home page as before
3. Resize browser to 375px width → Expected result: Header remains visible with no layout breaks
4. Open browser console → Expected result: No JavaScript errors on page load
```

---

## Test Categories

### Functional Tests
Confirm the change does what it is supposed to do:
- Does the new element appear where specified?
- Does the new behaviour trigger under the right conditions?
- Does it handle edge cases (empty data, long text, special characters)?

### Regression Tests
Confirm nothing existing has been broken:
- Do all links and buttons on the affected page still work?
- Do related pages still load correctly?
- Are any shared components (navigation, footer, sidebars) unaffected?

### Visual Tests
Confirm the change looks correct:
- Desktop (1280px+), tablet (768px), mobile (375px)
- Chrome, Firefox, Safari, Edge
- 100%, 125%, 150% browser zoom
- With and without browser extensions (especially ad blockers)

### User Acceptance Tests
Confirm the change works for the actual user:
- Can the intended user complete the task the change was designed to support?
- Is the change intuitive without explanation?
- Does it match what the requestor described in their original request?

---

## Environment
- All tests run on **staging** before Gate 2
- Production testing only after Gate 2 approval and deploy
- Use a **test user account** — not an admin or your own account — for user-facing tests
- Clear browser cache before testing (`Ctrl+Shift+Delete`)

---

## Test Result Definitions

| Result | Meaning | Action |
|---|---|---|
| All passed | Every test case met its expected result | Proceed to Gate 2 |
| Minor issues | Cosmetic or edge case failures, core criteria met | Document issues, PM decides if Gate 2 proceeds |
| Failed | One or more core acceptance criteria not met | Return to Build — do not proceed to Gate 2 |

---

## Bug Reporting Format
If a test fails, document it clearly:

```
Test case: [number and description]
Expected: [what should have happened]
Actual: [what actually happened]
Browser/device: [e.g. Chrome 120, Windows 11, 1440px]
Screenshot: [attached or linked]
Severity: Critical / Major / Minor / Cosmetic
```

---

## Context for AI
When generating test cases for this project:
- Generate one test case per acceptance criterion as a minimum
- Always include at least one regression test for the most closely related existing functionality
- Always include a cross-browser test and a mobile layout test for any UI change
- Always include a browser console error check for any JavaScript or CSS change
- Order test cases: functional first, then regression, then visual, then user acceptance
- Keep each test case to one sentence — what to do and what to expect
- If build notes mention specific files or areas changed, generate targeted regression tests for those areas
- Flag if the acceptance criteria are too vague to generate meaningful test cases
