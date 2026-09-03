---
type: consumer
title: Sisprev
repository: https://github.com/franklinbaldo/sisprev
adoption_status: candidate
surface: legal audit, review and paginated report site
interaction_profile: rule review, legal evidence, status, comparison, simulation and formal report review
runtime: Astro site with generated OKF-backed content, WeasyPrint report pagination and GitHub Pages deployment
constraints:
  - preserve auditability and legal provenance
  - published artifacts must remain reviewable
  - dense rule information cannot sacrifice reading order
  - paginated output can circulate outside the browser and must remain identifiable
capabilities_used: []
unmet_needs:
  - dense review patterns
  - provenance and validation-state semantics
  - legal document and rule comparison rhythm
last_verified: 2026-09-03
last_reviewed: 2026-09-03
gap_score: 0
---

# Sisprev

Sisprev is a high-confidence consumer candidate because it projects a living OKF legal-audit corpus into a human-facing Astro site and publishes formal review artifacts. Candidate status does not imply Cobogó code adoption.

It is especially valuable as a bridge between dense administration, public data reading and formal-document output: the surface must expose rules, validation state, evidence and legal reasoning without flattening them into generic cards or dashboard KPIs.

Current document/print evidence is stronger than the earlier source-only classification. The browser report and PDF are deliberately derived from the same built HTML; `scripts/gerar_relatorio_pdf.py` only paginates that semantic document. CSS Paged Media supplies running context, page references and bookmarks needed for a report that can be cited by page. The report carries commit-derived version provenance because printed copies can circulate independently of the live site.

The repository also makes pagination reviewable before publication: site-affecting pull requests build the report, generate the cycle PDFs and upload them as a short-lived review artifact; pushes to `main` generate the full report set before the Pages deploy. This is concrete evidence for the experimental document/print relation: **screen-readable document -> paginated projection -> review -> publication/circulation**.

Rendered-browser evidence is explicit, responsive and separate from build/deploy evidence. `sisprev#159` preserves the existing desktop observations and adds home plus `/relatorio/` at 390×844, records the real evaluated commit in `evidence.json`, measures document width and fails on global horizontal overflow. The first runs exposed a real defect in the mobile report: it measured 703 px in a 390 px viewport; after table containment it still measured 611 px because long links and technical text remained wider than the page. The criterion was not weakened. The final implementation contains tables, allows appropriate technical text wrapping/local scrolling and keeps the PDF/print CSS separate.

After merge, `main` commit `d976c352d9eaa30cb3e168cafcc36bf7b60b0ae9` was observed again by run `33758666909`; artifact `9894544179` is named `sisprev-rendered-surfaces-d976c352d9eaa30cb3e168cafcc36bf7b60b0ae9`. Its `evidence.json` reports `phase: main`, no synthetic PR merge reference, HTTP 200 for both routes and document width exactly equal to the viewport in desktop and mobile. The four screenshots were inspected.

`Sisprev#160` extends that observability to semantic accessibility without replacing the project’s local design. The fixed contract uses Chromium real, axe with WCAG A/AA, `Tab` through normal visible controls, perceptible focus and accessible names. The first valid run found low-contrast text, link contrast problems and task-list checkboxes without names; after those fixes, three generated links still depended only on color. They were underlined for screen reading while print/PDF remained untouched. The contract was not weakened after any failure.

The PR was incorporated as `212d7fd1cde4a4ed5b715d841ac890e987706b7f`. Run `33808763237` repeated both responsive and accessibility checks in `main` and produced `9914070230`. Run `33808763273` then published that commit and confirmed that the served page matched the expected SHA. Finally, run `33809125749` opened the already-published URLs and produced `9914175591`. Its `accessibility-evidence.json` records `phase: published`, HTTP 200, zero axe violations, zero unreachable controls and zero keyboard failures on home and report; its `evidence.json` keeps both mobile documents at 390 px with no global horizontal overflow.

The capture campaign also preserves earlier negative evidence about review infrastructure: attempting a full-page rasterization of the exceptionally long report pinned Chromium until workflow timeout even though build and navigation were healthy. Sisprev therefore uses a controlled viewport for browser evidence while leaving whole-document review to the existing paginated PDF artifact. **More pixels are not automatically stronger evidence.**

Evidence boundaries remain deliberate: a successful build is not a browser capture; a browser capture is not proof that the Pages deploy succeeded; and none of those gates asserts legal correctness or institutional validation. The semantic-accessibility check also does not claim universal certification: it proves the observed routes and states against its explicit contract. The implementation remains Sisprev-local. WeasyPrint, its restrained administrative typography, exact page furniture, report-specific provenance wording, HAST transformation and legal/audit document structure are not Cobogó APIs.

## Histórico

- 2026-09-03 — avaliação sobe para 22/24, faixa de referência. A #160 transforma semântica, teclado, foco e nomes acessíveis em prova reproduzível, corrige os defeitos que a própria medição encontrou, repete o teste em `main` e depois contra a página já publicada; Confiança sobe de 3 para 4.
- 2026-09-03 — primeira avaliação completa: 21/24, faixa boa. `sisprev#159` prova home e relatório em desktop/celular, corrige o overflow móvel encontrado pela própria verificação e repete a prova no commit efetivamente incorporado a `main`.
