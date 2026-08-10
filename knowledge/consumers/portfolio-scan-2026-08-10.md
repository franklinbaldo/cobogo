---
type: consumer-discovery
title: Franklin repository consumer scan — 2026-08-10
status: in-progress
related_issue: https://github.com/franklinbaldo/cobogo/issues/273
last_verified: 2026-08-10
---

# Franklin repository consumer scan — 2026-08-10

This file records the broad repository inventory used to discover potential Cobogó consumers. It is a screening artifact, not a declaration that every listed repository is a consumer.

## Registered / actively evaluated

- `causaganha` — evaluating; public analytical/data-reading site.
- `astronauta` — candidate; dense OKF admin/review surface.
- `ovigia-redacao` — candidate; editorial/provenance surface.
- `ficha` — candidate; public company lookup/analysis site.
- `sisprev` — candidate; legal audit/review site.
- `baliza-site` — candidate; public-contract analysis site.
- `quem-sao-eles` — candidate; editorial political profile catalog.
- `franklinbaldo.github.io` — candidate; personal blog/digital garden.
- `adibaldo.github.io` — candidate; small personal Astro blog.
- `the-theater` — candidate; collaborative fiction/narrative publication.
- `sites_prefeituras` — candidate; large municipal audit/comparison dashboard.
- `intuit` — candidate; interactive editor/visual-preview tool.
- `formatolegal` — candidate; legal editor/A4 preview/print tool.
- `rationality-club-latam` — candidate; community diary/archive publication.

## Confirmed Pages/site surface still awaiting product-purpose classification

- `ecos-do-pampa` — GitHub Pages deploy and Astro build are confirmed, but current package metadata appears inherited/ambiguous; inspect actual pages/content before assigning a durable consumer identity.

## Strong UI/product candidates requiring surface verification

Repository name/history/structure suggests a human-facing product or site, but this scan has not yet confirmed current deployment/role strongly enough to register adoption needs:

- `portfolio`
- `Exploreon`
- `textura`
- `hronir`
- `the-lab`
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
- `caixaaberta`

Each needs one evidence pass: actual human-facing surface, deployment, product job and whether shared visual grammar would reduce real duplication or improve task quality.

## Screened adjacent / currently not direct Cobogó consumers

These were inspected enough to avoid treating a web-related word as proof of a Cobogó consumer:

- `todos` — **not a direct consumer** in its current product form. It is an MCP/CLI server for SEI; “web-first” describes the scraper/backend transport against SEI's existing frontend, not a user-facing UI owned by this repository.
- `papers` — **not a current direct consumer**. It is a Markdown/OKF research corpus. A future Astronauta/static projection may consume Cobogó, but the corpus itself does not currently own a human visual surface.
- `minha-receita` — **not currently a Franklin Cobogó consumer on present evidence**. The repo is an API/data service with external documentation/status surfaces; no Franklin-owned product UI was identified in this scan.
- `egregora-v3` — **adjacent producer, not necessarily a direct consumer**. It generates MkDocs publication sites. Cobogó integration would make more sense as an optional output/theme capability for generated sites than by treating the generator engine itself as a visual consumer.
- `portfolio` — README describes a portfolio of projects, but no current deploy/product surface was confirmed; keep as weak candidate until actual site evidence appears.

Negative classification is evidence. Do not create consumer concepts merely to make the registry exhaustive.

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

## Current synergy clusters

### Public analytical / data-reading

CausaGanha, Ficha, Baliza Site and Sites Prefeituras now provide independent evidence for shared table/filter/status/provenance/comparison semantics at different scales.

### Dense review / audit

Astronauta and Sisprev are proven candidates for dense state/evidence/relation reading. Possible additions: PPI/IPERON or other internal review tools only if they own real human-facing surfaces.

### Editorial / provenance / archive

O Vigia, Quem São Eles?, Franklin blog, The Theater, Rationality Club LatAm and Adi blog provide a much broader publication family. This generated Cobogó #278 rather than forcing editorial needs into the data-reading issue.

### Document / print

Formato Legal + Sisprev generated Cobogó #276: screen-to-paginated-document grammar is now a separate shared capability candidate.

### Authoring / preview workspace

Intuit + Formato Legal generated Cobogó #277: source/editor ↔ rendered preview is a reusable relation independent of either product's aesthetic.

## Screening rule

Do not promote a repository from this scan into the canonical consumer registry merely because it has Pages. Promote it when inspection identifies a real human task and at least one plausible Cobogó relation/capability that could serve it while preserving local identity.
