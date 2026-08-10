---
type: consumer
title: Formato Legal
repository: https://github.com/franklinbaldo/formatolegal
adoption_status: candidate
surface: legal document editor and print preview
interaction_profile: live editing, A4 preview, theme switching, export and print
runtime: Astro client-side web application on GitHub Pages
constraints:
  - print/A4 output is a first-class surface
  - legal-document readability outranks decorative theme expression
  - all processing remains local in browser
capabilities_used: []
unmet_needs:
  - editor-preview composition
  - document/print typography roles
  - theme contract separating semantics from expressive presets
  - form/control and export states
last_verified: 2026-08-10
---

# Formato Legal

Formato Legal is a strong candidate consumer because it combines a live editor with a legal-document preview, printing/export and many intentionally divergent visual themes.

It is especially useful for testing the difference between Cobogó semantic foundations and consumer themes: the same legal-document semantics should survive classic, ABNT, brutalist or playful presentation without promoting every visual preset into shared core.
