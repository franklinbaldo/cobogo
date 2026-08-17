---
type: consumer
title: Letra Bonita
repository: https://github.com/franklinbaldo/letra_bonita
adoption_status: candidate
surface: interactive calligraphy worksheet authoring and print tool
interaction_profile: practice text, typographic and guide controls, live page preview, print/SVG actions
runtime: zero-build client-side GitHub Pages application
constraints:
  - preserve direct manipulation and immediate preview feedback
  - printed/SVG worksheet quality is part of the product job
  - Gemini quote generation is optional and user-keyed in the browser
  - do not treat local visual styling as Cobogó adoption
capabilities_used: []
unmet_needs:
  - obtain reproducible browser capture of authoring, preview and print-relevant states
  - strengthen pre-merge evidence for the zero-build application without introducing a framework
last_verified: 2026-08-17
---

# Letra Bonita

Letra Bonita is a candidate consumer because it owns a real public human-facing authoring surface, not merely a repository concept. GitHub Pages is configured from `main`/root and reports a built public site at `https://franklinbaldo.github.io/letra_bonita/`. The deployed surface exposes practice text, font and guide controls, A4/Letter + portrait/landscape configuration, a generated worksheet preview, and actions to print the current preview or open the SVG for higher-quality printing.

Its core product relation is `configure/write -> inspect generated worksheet -> print/reuse`. That relation materially overlaps the experimental [Editor and preview workspace](../patterns/editor-preview-workspace.md) and [Document and print surface](../patterns/document-print-surface.md), but this pass does **not** count Letra Bonita as new pixel-proof evidence for either pattern: current evidence is deployed-page inspection plus source/workflow evidence, not a controlled screenshot of the relevant states.

The implementation is intentionally small: one `index.html` carries HTML, CSS, JavaScript and dynamic SVG generation. The repository historically relied on legacy branch-based Pages without a versioned pre-merge validation workflow. `letra_bonita#5` / PR `#6` introduce a minimal static-app gate that checks essential product markers and JavaScript syntax without replacing the zero-build architecture; adoption of that gate is operational evidence, not Cobogó code adoption.

A useful future pressure test is to capture the same worksheet at authoring/preview and print/SVG boundaries and compare what survives across screen and paginated output. Keep typography, teaching choices, sheet geometry and local product identity downstream.
