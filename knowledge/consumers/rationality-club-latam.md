---
type: consumer
title: Rationality Club LatAm
repository: https://github.com/franklinbaldo/rationality-club-latam
adoption_status: candidate
surface: community publication and generated diary archive
interaction_profile: chronological reading, archive navigation and community context
runtime: MkDocs publication configured for GitHub Pages from automated WhatsApp-derived posts
constraints:
  - chronology and provenance of generated posts remain understandable
  - community identity remains local
  - generated content should remain readable as publication, not pipeline output
capabilities_used: []
integration_evidence:
  - https://github.com/franklinbaldo/rationality-club-latam/issues/4
  - https://github.com/franklinbaldo/rationality-club-latam/pull/5
  - https://github.com/franklinbaldo/rationality-club-latam/issues/6
operational_capabilities:
  - strict-mkdocs-pr-build
  - scheduled-diary-generation-configured
  - github-pages-workflow-configured-deploy-blocked
unmet_needs:
  - chronology/archive rhythm
  - provenance inscription for generated editorial content
  - restore or explicitly retire the configured GitHub Pages publication path
  - lightweight theming over shared reading foundations
last_verified: 2026-08-17
---

# Rationality Club LatAm

Rationality Club LatAm is a candidate consumer because it is structured as a publication of community diaries generated from WhatsApp exports through Egregora/Gemini.

Its current source evidence is stronger for the publication architecture than for current generation health. `mkdocs.yml` configures the publication surface and the repository contains a scheduled generation workflow, but capability/configuration is not treated as proof of recent successful generation.

## Freshness correction — 2026-08-17

The 2026-08-16 review found a concrete truthfulness gap: the home presented hard-coded project metrics (`42` posts, `12` anonymous participants, `127` enriched links and `Última atualização: 2025-01-12`) as if they were current, while the inspected public tree under `docs/daily/` contained only the archive index and the later inspected generation history included failures.

Consumer issue [rationality-club-latam#4](https://github.com/franklinbaldo/rationality-club-latam/issues/4) tracked the correction. [PR #5](https://github.com/franklinbaldo/rationality-club-latam/pull/5) removes unreconstructible current metrics from the public home and rewrites the automation language so that the **published archive is the public source of truth** for what actually exists. The README now preserves the same boundary: scheduled workflow configuration describes a capability; published content proves publication; workflow history is the appropriate place to assess operational health.

The PR also turns the existing strict MkDocs build into a pull-request gate while leaving Pages artifact upload/deploy restricted to `main`. The PR build passed before merge and #5 was merged as `91010aff44ff582a093b1602bd0e488596dd226c`.

## Deployment boundary — verified 2026-08-17

The first post-merge run (`32048635258`) produced a successful strict MkDocs build and a `github-pages` artifact, but the deploy job failed at `actions/deploy-pages@v4` with HTTP 404 while creating the Pages deployment. The action itself reported `Ensure GitHub Pages has been enabled`. [rationality-club-latam#6](https://github.com/franklinbaldo/rationality-club-latam/issues/6) owns that settings/publication boundary.

Therefore the current evidence classes remain deliberately separate:

```text
source correction -> PR build -> main build/artifact -> Pages deployment -> rendered public surface
       proven          proven          proven                blocked                 unproven
```

Do not describe the corrected home as deployed until #6 produces a successful Pages deployment or the project explicitly retires Pages as its publication surface.

This is **positive implementation evidence** for the experimental [Automation claim and observable freshness](../patterns/automation-observable-freshness.md) relation: a generated publication can preserve editorial language while explicitly making `configured automation != successful recent execution != published corpus`. It is still not browser/pixel evidence of a deployed correction.

The case does not imply a shared status widget, GitHub Actions badge or universal freshness component. Its community identity, MkDocs implementation and editorial presentation remain local.

It may share chronology/provenance grammar with O Vigia, Quem São Eles? and other publishing surfaces, while its community identity and MkDocs implementation remain local.
