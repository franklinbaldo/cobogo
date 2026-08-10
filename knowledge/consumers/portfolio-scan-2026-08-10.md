---
type: consumer-discovery
title: Franklin repository consumer scan — 2026-08-10
status: in-progress
related_issue: https://github.com/franklinbaldo/cobogo/issues/273
last_verified: 2026-08-10
---

# Franklin repository consumer scan — 2026-08-10

This file records the broad repository inventory used to discover potential Cobogó consumers. It is a screening artifact, not a declaration that every listed repository is a consumer.

## Already registered / actively evaluated

- `causaganha` — evaluating; public analytical/data-reading site.
- `astronauta` — candidate; dense OKF admin/review surface.
- `ovigia-redacao` — candidate; editorial/provenance surface.
- `ficha` — candidate; public company lookup/analysis site.
- `sisprev` — candidate; legal audit/review site.
- `baliza-site` — candidate; public-contract analysis site.
- `quem-sao-eles` — candidate; editorial political profile catalog.

## Confirmed Pages/site surfaces — next individual consumer review

Evidence of GitHub Pages or dedicated deploy workflow was found for:

- `franklinbaldo.github.io`
- `adibaldo.github.io`
- `the-theater`
- `sites_prefeituras`
- `ecos-do-pampa`
- `intuit`
- `formatolegal`
- `rationality-club-latam`

These should be inspected individually before receiving a durable consumer concept. A deploy workflow proves a human-facing surface exists; it does not prove Cobogó should serve it.

## Strong UI/product candidates requiring surface verification

Repository name/history/structure suggests a human-facing product or site, but this scan has not yet confirmed current deployment/role strongly enough to register adoption needs:

- `portfolio`
- `Exploreon`
- `textura`
- `hronir`
- `minha-receita`
- `egregora-v3`
- `the-lab`
- `papers`
- `tembiu`
- `aleph-the-game`
- `hilda`
- `autonovel`
- `nanochat`
- `mind-fragments`
- `life-of-menard`
- `travessia`
- `baye`
- `undogmatic`
- `letra_bonita`
- `tambaqui`
- `patricia-amick`
- `events-all-the-way-down`
- `rosencrantz-coin`
- `manifold-football`
- `querido-diario-cobertura`
- `ppi`
- `todos`
- `caixaaberta`

Each needs one evidence pass: actual human-facing surface, deployment, product job and whether shared visual grammar would reduce real duplication or improve task quality.

## Technical / service / agent repositories — screen before excluding

Current inventory suggests these are primarily CLI, MCP, infrastructure, data, agent, orchestration or library repos. They are **not yet classified `not-a-consumer`** because some may still expose human-facing admin/docs/report surfaces:

- `baliza`
- `leizilla`
- `sei-mcp`
- `verne`
- `dinossauro`
- `skills`
- `canivete`
- `iperon`
- `franklin-avatar`
- `workspace`
- `pontifex`
- `tailbox`
- `pareceres`
- `persona`
- `precatorios`
- `scripts`
- `jules-turbo`
- `cobogo`
- `autoresearch`
- `jai`
- `blog-suno-auto-publish`
- `claudio-funes`
- `tapion`
- `dotfiles`
- `funes-memories`
- `repopacker`
- `ralph-claw`
- `pareto`
- `aparicio-funes`
- `ireneo-funes`
- `quizseal`
- `sigad-mcp`
- `claw-memory`
- `private`
- `AutoResearchClaw`
- `pge-ro`
- `sandbox`
- `jules-proxy`
- `ireneo-funes-docker`
- `dreamer`
- `pieter-levels`
- `craigmod`
- `pink`
- `scott-alexander`
- `neil-patel`
- `jules-manager`
- `perquire`
- `aleph`
- `lagrange-mandelbrot`
- `okf-parser`
- `bob-woodward`
- `intuit` (site confirmed; kept here only if a non-site service layer also exists — review should resolve)
- `riobaldo`
- `craig-mod`
- `openclaw-config`
- `rats`
- `leiloes`

## Archived / historical

- `egregora` — archived.
- `claw-memory` — archived; only reconsider if a historical visual pattern is useful evidence.

## Repositories from inventory that need purpose confirmation

These are neither safely technical nor clearly UI from current evidence and should receive a lightweight README/workflow pass:

- `naval-ravikant`
- `tim-ferriss`
- `pieter-levels`
- `simon-willison`
- `bob-woodward`
- `craig-mod`
- `doido`
- `jules_scheduler`
- `bot-court`
- `AutoResearchClaw`
- `cookiecutter-openclaw-agent`
- `humanscale`
- `livro-panorama`
- `judicial`
- `locus`
- `rationality-club-latam` (site confirmed; deeper product fit still needed)
- `formatolegal` (site confirmed; deeper product fit still needed)

## Current synergy clusters

### Public analytical / data-reading

CausaGanha, Ficha and Baliza Site are already strong evidence for shared table/filter/status/provenance/freshness semantics. Other likely additions: Minha Receita, Caixa Aberta and Querido Diário Cobertura after inspection.

### Dense review / audit

Astronauta and Sisprev are proven candidates for dense state/evidence/relation reading. Possible additions: Todos, IPERON/PPI and other internal review tools if they expose human-facing surfaces.

### Editorial / provenance

O Vigia and Quem São Eles? are the first strong pair. Possible additions: `franklinbaldo.github.io`, The Theater, Mind Fragments and other publishing surfaces after identity/context review.

### Public/institutional information

Sites Prefeituras, Ecos do Pampa, Rationality Club LATAM and Formato Legal may exercise navigation, public-information hierarchy, documentation and local identity patterns that are not well-covered by the initial data/editorial/admin trio.

## Screening rule

Do not promote a repository from this scan into the canonical consumer registry merely because it has Pages. Promote it when inspection identifies a real human task and at least one plausible Cobogó relation/capability that could serve it while preserving local identity.
