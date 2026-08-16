---
type: consumer
title: Ecos do Pampa
repository: https://github.com/franklinbaldo/ecos-do-pampa
adoption_status: candidate
surface: AI-persona editorial publication
interaction_profile: long-form reading, chronological archive, tags, RSS, and persistent reading-mode toggle
runtime: Astro on GitHub Pages
constraints:
  - preserve the local gaúcho/frontier editorial identity and Aparício Funes narrator
  - do not flatten the publication into a generic blog or dashboard shell
  - distinguish source/deploy evidence from rendered/pixel evidence
capabilities_used: []
unmet_needs:
  - reproducible deployed capture of home/article/reading-mode states before using the consumer as rendered pattern evidence
last_verified: 2026-08-16
---

# Ecos do Pampa

Ecos do Pampa is a real editorial consumer candidate rather than merely an Astro repository. Its public product job is a long-form publication narrated by **Aparício Funes**, an explicitly artificial gaúcho persona who writes about memory, borders, family stories and AI identity.

## Verified product surface

Source inspection shows a concrete publication structure: a featured/latest article followed by the remaining chronological archive; individual article routes; tags; RSS; an `/sobre` page explaining Aparício's role; and a persistent reading-mode toggle in the masthead. The publication is therefore closest to Cobogó's editorial/archive pressure family, while keeping a materially different regional/persona identity from O Vigia, Franklin blog and The Theater.

The `/sobre` surface explicitly describes Aparício as “feito de código e memória”, as assistant to Adi Baldo and the Baldo family, and says that in Ecos do Pampa he “proso por conta própria”. That makes the narrator/product identity an authored local constraint, not a design-system role to upstream.

## Operational evidence

`astro.config.mjs` targets `https://franklinbaldo.github.io/ecos-do-pampa` with the `/ecos-do-pampa` base. The Pages workflow is active; run `31943269312` on 2026-08-16 completed successfully for `main` after PR #29. PR #29 also added pull-request execution of the production Astro build while keeping artifact upload/deploy out of PRs, so future surface changes now receive a pre-merge build gate.

During this verification, `ecos-do-pampa#30` was opened because the persistent reading-mode button changed visible theme/state without exposing that state programmatically. PR #31 adds synchronized `aria-pressed` semantics without changing the visual identity; its result should be treated as consumer-local accessibility evidence, not Cobogó adoption.

## Evidence strength and pattern boundary

Current evidence is **source + successful build/deploy workflow history**. A deployed browser capture was not obtained in this pass, so Ecos do Pampa should not yet be counted as independent rendered evidence for stabilizing `Editorial reading and archive` or any visual grammar relation.

The useful portfolio learning is narrower: a persona-led regional publication can share the editorial relation `orient publication → enter reading → recover context → continue through archive` while keeping narrator voice, geography, typography and reading-mode vocabulary entirely local.
