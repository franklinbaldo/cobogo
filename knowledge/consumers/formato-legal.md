---
type: consumer
title: Formato Legal
repository: https://github.com/franklinbaldo/formatolegal
adoption_status: candidate
surface: legal document editor and print preview
interaction_profile: live editing, A4 preview, theme switching, export and print
runtime: Astro client-side web application on GitHub Pages with local PDF generation
constraints:
  - print/A4 output is a first-class surface
  - legal-document readability outranks decorative theme expression
  - all processing remains local in browser/runtime
capabilities_used: []
unmet_needs:
  - theme contract separating semantics from expressive presets
  - form/control and export states
last_verified: 2026-08-16
---

# Formato Legal

Formato Legal is a strong candidate consumer because it combines a live editor with a legal-document preview, printing/export and many intentionally divergent visual themes.

Its current implementation provides independent editor and preview panes on wide layouts and semantic `role="tab"` editor/preview switching on narrow layouts. Print explicitly waits for the latest asynchronous Markdown render before invoking the browser print surface. These are independent evidence for the experimental editor/preview relation: preserving source -> rendered consequence does not require a permanent split pane, and output actions must not silently operate on stale rendered state.

The project now also supplies independent evidence for the experimental document/print relation. Its screen surface treats the rendered document as A4-oriented output, print CSS removes editor chrome while preserving the document flow, and the local PDF path paginates the same rendered HTML semantics using PyMuPDF Story rather than creating a separate prose model. Theme-specific margins and typography remain downstream presentation choices.

This does not imply Cobogó code adoption. A4/document semantics, local-only processing, legal themes, export behavior, PDF engine and the product's playful legal voice remain Formato Legal authority.

It is especially useful for testing the difference between Cobogó semantic foundations and consumer themes: the same legal-document semantics should survive classic, ABNT, brutalist or playful presentation without promoting every visual preset into shared core.
