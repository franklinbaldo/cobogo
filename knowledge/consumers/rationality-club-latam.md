---
type: consumer
title: Rationality Club LatAm
repository: https://github.com/franklinbaldo/rationality-club-latam
adoption_status: candidate
surface: community publication and generated diary archive
interaction_profile: chronological reading, archive navigation and community context
runtime: MkDocs site on GitHub Pages generated from automated WhatsApp-derived posts
constraints:
  - chronology and provenance of generated posts remain understandable
  - community identity remains local
  - generated content should remain readable as publication, not pipeline output
capabilities_used: []
unmet_needs:
  - chronology/archive rhythm
  - provenance inscription for generated editorial content
  - freshness derived from published content rather than hard-coded metrics
  - lightweight theming over shared reading foundations
last_verified: 2026-08-16
---

# Rationality Club LatAm

Rationality Club LatAm is a candidate consumer because it is structured as a GitHub Pages publication of community diaries generated from WhatsApp exports through Egregora/Gemini.

Current source evidence is stronger for the intended publication architecture than for current operational freshness. `mkdocs.yml` configures a chronological blog with archives/categories/authors, and the README documents a scheduled generation pipeline. However, the home currently presents hard-coded project metrics (`42` posts, `12` anonymous participants, `127` enriched links and `Última atualização: 2025-01-12`) as if they were current. The latest inspected `Generate Daily Posts` run (`20155290253`, 2025-12-12) failed, so configured daily automation must not be treated as evidence of recent successful generation.

Consumer issue [rationality-club-latam#4](https://github.com/franklinbaldo/rationality-club-latam/issues/4) tracks the smallest surface correction: derive freshness/counts from actually published content where possible and remove or qualify unreconstructible metrics. This is negative evidence for provenance/freshness work: a generated-publication surface needs to distinguish published corpus facts from pipeline capability and from stale seed/demo numbers.

This case supports the experimental [Automation claim and observable freshness](../patterns/automation-observable-freshness.md) relation alongside The Theater and adjacent Hrönir evidence. It does not prove current rendered adoption: until a deployed capture is independently verified, treat this review as source + workflow-history evidence, not as current pixel proof or proof of healthy automation.

It may share chronology/provenance grammar with O Vigia, Quem São Eles? and other publishing surfaces, while its community identity and MkDocs implementation remain local.
