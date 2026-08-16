---
type: consumer
title: Intuit
repository: https://github.com/franklinbaldo/intuit
adoption_status: candidate
surface: interactive visual testing tool
interaction_profile: editor, preview, sandbox controls and shareable state
runtime: zero-backend client-side GitHub Pages application
constraints:
  - preserve fast direct manipulation
  - sandbox/security controls remain explicit
  - dark/light theme and tool chrome serve an interactive task
capabilities_used: []
unmet_needs:
  - pressure-test editor-preview workspace grammar on a third authoring consumer before stabilization
  - theme override contract for a strong local aesthetic
last_verified: 2026-08-16
---

# Intuit

Intuit is a candidate consumer because it is a live interactive visual-testing tool rather than a reading surface. Its editor/preview relationship, sandbox controls and theme switching broaden Cobogó beyond data dashboards and publications.

The current surface names the HTML editor and rendered preview explicitly, keeps `sandbox=""` as the strict default, and lets the person opt into script-capable preview behavior. Its Playwright suite now exercises the real editor → rendered preview consequence before merge, including theme behavior and shareable Base64 state. This is evidence for the experimental editor/preview relation, not evidence that Intuit has adopted Cobogó code.

Its Apple-inspired local aesthetic is useful evidence for `Parentesco sem uniformidade`: shared foundations must not erase intentionally different product chrome.
