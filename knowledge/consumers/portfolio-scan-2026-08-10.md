---
type: consumer-discovery
title: Franklin repository consumer scan — 2026-08-10
status: first-round-complete
related_issue: https://github.com/franklinbaldo/cobogo/issues/273
last_verified: 2026-08-16
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
- `the-lab` — candidate; public research-lab publication.
- `sites_prefeituras` — candidate; large municipal audit/comparison dashboard.
- `intuit` — candidate; interactive editor/visual-preview tool.
- `formatolegal` — candidate; legal editor/A4 preview/print tool.
- `rationality-club-latam` — candidate; community diary/archive publication.
- `aleph-the-game` — candidate; React/Vite interactive AI-assisted game.
- `leizilla` — candidate; public Brazilian legislation search, evidence, coverage and dataset surface; promoted after verifying the Astro/Svelte web application and operational workflows on 2026-08-14.
- `ecos-do-pampa` — candidate; AI-persona editorial publication with long-form reading, chronological archive, tags, RSS and a persistent reading mode. Source plus current Pages build/deploy evidence was verified on 2026-08-16; rendered browser evidence remains pending.
- `tembiu` — candidate; static Brazilian digital-menu/order/PWA product. Current source contains a real menu/search/cart/address/order-history surface and GitHub Pages has successful deployment history; public documentation still mixes current behavior with template URLs and simulated/aspirational capabilities, tracked by `franklinbaldo/tembiu#16`. Rendered browser evidence remains pending.
- `autonovel` — candidate generated-publication producer. The reusable pipeline explicitly targets print-ready PDF, ePub, audiobook and a reader-facing landing page, and the completed `autonovel/bells` branch contains a real landing surface for *The Second Son of the House of Bells*. Current evidence is source/branch-only: GitHub Pages is not configured, and every primary landing CTA (`Download PDF`, `ePub`, `Audiobook`, Hermes Agent and repository) still points to `about:empty`. Treat this as evidence of a real human-facing output with an unfinished artifact→publication boundary, not as a deployed consumer. The repository has Issues disabled, so the gap is preserved here rather than mirrored into a nonexistent downstream tracker.

## Strong UI/product candidates requiring surface verification

Repository name/history/structure suggests a human-facing product or site, but this scan has not yet confirmed current deployment/role strongly enough to register adoption needs:

- `hronir`
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

Each remaining candidate needs one evidence pass: actual human-facing surface, deployment, product job and whether shared visual grammar would reduce real duplication or improve task quality.

## Screened adjacent / currently not direct Cobogó consumers

These were inspected enough to avoid treating a web-related word, product vision or public dataset as proof of a Cobogó consumer:

- `todos` — **not a direct consumer** in its current product form. It is an MCP/CLI server for SEI; “web-first” describes the scraper/backend transport against SEI's existing frontend, not a user-facing UI owned by this repository.
- `papers` — **not a current direct consumer**. It is a Markdown/OKF research corpus. A future Astronauta/static projection may consume Cobogó, but the corpus itself does not currently own a human visual surface.
- `minha-receita` — **not currently a Franklin Cobogó consumer on present evidence**. The repo is an API/data service with external documentation/status surfaces; no Franklin-owned product UI was identified in this scan.
- `egregora-v3` — **adjacent producer, not necessarily a direct consumer**. It generates MkDocs publication sites. Cobogó integration would make more sense as an optional output/theme capability for generated sites than by treating the generator engine itself as a visual consumer.
- `portfolio` — **README-only portfolio index, not a current direct Cobogó consumer on 2026-08-16 evidence**. The repository tree contains only `README.md`; no owned web/app build, deploy surface or runtime was found. The README is a human-facing GitHub artifact and is visibly stale (`Última atualização: Janeiro 2025` plus historical project/status claims), but that is documentation/identity maintenance rather than evidence of a Cobogó application surface. Reconsider only if this repository acquires a real rendered portfolio product or generated site.
- `textura` — **adjacent knowledge-output producer, not a current direct Cobogó consumer on 2026-08-16 evidence**. Textura is a Python CLI/metacognitive agent that ingests document collections and produces an Obsidian-native Markdown knowledge garden (`Narrative.md`, temporal notes, atomic notes, mysteries and `_Meta/`). The repository has CI but no owned web/app UI or deploy surface was found. Its generated vault is a plausible future input to a human-facing knowledge reader, but that reader would be the visual consumer; do not infer Cobogó adoption from the Obsidian-ready output itself.
- `hilda` — **adjacent research/artifact repository, not a current direct Cobogó consumer on 2026-08-16 evidence**. Despite the repository description still calling it a “Hilda Hilst persona agent”, the current tree is a semantic-identifier research project: evaluation/project plans, Python benchmark code, TeX papers and a generated PDF. The repository has no Pages deployment or owned web/app surface. Its plan describes a future HILDA/SUID system with codebook, semantic UUIDs, APIs, artifact registry and production pilot, but those roadmap items are planning evidence rather than current operational capability. Reconsider if a human-facing explorer, benchmark/report viewer or semantic-ID tool is actually built; that surface, not the research corpus itself, would be the Cobogó consumer.
- `Exploreon` — **not a current direct consumer on 2026-08-16 evidence**. The repository contains a detailed product/game-development document plus Python modules for QR and World ID flows, but no owned web/app surface, frontend build or deployment surface was found. Reconsider only when the experience-verification product acquires a real human-facing interface.
- `caixaaberta` — **adjacent public-data producer, not a current direct Cobogó consumer on 2026-08-16 evidence**. The repository owns ingestion/transformation/geocoding/publication machinery for Caixa real-estate data and publishes artifacts, but its current tree exposes pipeline/data assets rather than a Franklin-owned human-facing application. A future search/map/data-reading surface could become a consumer; the dataset itself is useful cross-project input without implying UI adoption.

Negative classification is evidence. Do not create consumer concepts merely to make the registry exhaustive.

## Technical / service / agent repositories — screen before excluding

Current inventory suggests these are primarily CLI, MCP, infrastructure, data, agent, orchestration or library repos. They are **not yet classified `not-a-consumer`** because some may still expose human-facing admin/docs/report surfaces:

- `baliza`
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

CausaGanha, Ficha, Baliza Site, Sites Prefeituras and Leizilla provide independent evidence for shared table/filter/status/provenance/comparison semantics at different scales. Leizilla additionally pressures source→capture→parse→release provenance and explicit coverage states; treat those as evidence to compare, not automatically promoted patterns. Caixa Aberta is adjacent here as a public-data producer: its artifacts may feed future data-reading surfaces, but the pipeline repository itself is not currently UI evidence.

### Dense review / audit

Astronauta and Sisprev provide independent evidence for dense state/evidence/relation reading. Possible additions: PPI/IPERON or other internal review tools only if they own real human-facing surfaces.

### Editorial / provenance / archive

O Vigia, Quem São Eles?, Franklin blog, The Theater, The Lab, Rationality Club LatAm, Adi blog and Ecos do Pampa provide a broad publication family. Ecos do Pampa adds a persona-led regional publication with archive/RSS/reading-mode behavior, but currently only source + build/deploy evidence; it must not be counted as independent rendered evidence until captured in-browser. This family generated Cobogó #278 rather than forcing editorial needs into the data-reading issue.

### Document / print

Formato Legal + Sisprev generated Cobogó #276: screen-to-paginated-document grammar is a separate shared capability candidate.

### Authoring / preview workspace

Intuit + Formato Legal generated Cobogó #277: source/editor ↔ rendered preview is a reusable relation independent of either product's aesthetic.

### Generated publication / artifact reachability

Autonovel provides a first pressure case where one pipeline produces several reader-facing outputs (print PDF, ePub, audiobook and landing page) but the generated landing does not yet connect readers to those outputs. The reusable relation to watch is **generated artifact → truthful availability → reachable publication action**. One source-only consumer is not enough to promote a Cobogó pattern; first repair/verify a real publication boundary and compare against another artifact-producing publication.

### Knowledge-output producers

Textura currently belongs adjacent to Cobogó rather than inside the visual consumer registry: its primary product is a transparent, Obsidian-native Markdown knowledge garden generated from a document corpus. Hilda is adjacent for a different reason: its present product is a semantic-identifier research corpus (plans, benchmark code, papers and PDF), while its richer service/artifact system remains roadmap material. If either project acquires a Franklin-owned reader/explorer/tool, evaluate that human-facing surface as the consumer and preserve the distinction between producer/research capability and rendered interface.

### Commerce / ordering

Tembiu provides a first direct consumer pressure case for a Brazilian menu/order workflow: discover items → filter/search → compose cart → provide delivery details → choose/share payment/order state. Its identity and restaurant/payment semantics remain consumer-local. Current evidence is source + Pages deployment history, not rendered-browser proof; documentation truthfulness is tracked downstream before any shared Cobogó relation is promoted from this single consumer.

### Immersive / game interaction

Aleph the Game provides a first consumer pressure case for purposeful motion, game state and expressive interactive identity. One consumer is enough for experimental evidence, but not enough yet for a stable new Cobogó pattern.

## Screening rule

Do not promote a repository from this scan into the canonical consumer registry merely because it has Pages, a product brief, or a public dataset. Promote it when inspection identifies a real human task and at least one plausible Cobogó relation/capability that could serve it while preserving local identity.

`first-round-complete` means every accessible repository found in the broad inventory has a screening destination in this artifact; it does **not** mean every unresolved repo has received a deep product review. Those follow-up reviews remain tracked by #273.
