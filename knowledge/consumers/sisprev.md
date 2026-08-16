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
last_verified: 2026-08-16
---

# Sisprev

Sisprev is a high-confidence consumer candidate because it projects a living OKF legal-audit corpus into a human-facing Astro site and publishes formal review artifacts. Candidate status does not imply Cobogó code adoption.

It is especially valuable as a bridge between dense administration, public data reading and formal-document output: the surface must expose rules, validation state, evidence and legal reasoning without flattening them into generic cards or dashboard KPIs.

Current document/print evidence is stronger than the earlier source-only classification. The browser report and PDF are deliberately derived from the same built HTML; `scripts/gerar_relatorio_pdf.py` only paginates that semantic document. CSS Paged Media supplies running context, page references and bookmarks needed for a report that can be cited by page. The report carries commit-derived version provenance because printed copies can circulate independently of the live site.

The repository also makes pagination reviewable before publication: site-affecting pull requests build the report, generate the cycle PDFs and upload them as a short-lived review artifact; pushes to `main` generate the full report set before the Pages deploy. This is concrete evidence for the experimental document/print relation: **screen-readable document -> paginated projection -> review -> publication/circulation**.

The implementation remains Sisprev-local. WeasyPrint, its restrained administrative typography, exact page furniture, report-specific provenance wording and legal/audit document structure are not Cobogó APIs.
