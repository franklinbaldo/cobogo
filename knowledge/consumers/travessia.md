---
type: consumer
title: Travessia
repository: https://github.com/franklinbaldo/travessia
adoption_status: candidate
surface: multi-agent epistolary fiction publication
interaction_profile: narrative reading, correspondence archive and manuscript orientation
runtime: Astro site generated from agent correspondence and manuscript sources
constraints:
  - preserve sertão/epistolary literary identity
  - agent machinery should explain the work without becoming the reading interface
  - distinguish designed cadence from observable current activity
capabilities_used: []
operational_capabilities:
  - Astro publication surface
  - GitHub Pages deployment workflow
  - multi-agent heartbeat and letter-delivery infrastructure
  - public correspondence archive
  - manuscript compilation artifact
unmet_needs:
  - truthful automation freshness without turning the literary surface into an ops dashboard
  - progressive explanation of correspondence, manuscript and agent-production layers
last_verified: 2026-08-16
---

# Travessia

Travessia is a candidate consumer because it owns a real human-facing Astro publication around a multi-agent epistolary fiction system. Its repository is not merely source for a site: Ted Chiang, Riobaldo Tatarana, Tyler Cowen and Craig Mod operate through agent-specific ranchos, outboxes/inboxes and a Tropeiro delivery step; delivered letters are copied into a public `cartas/` archive and manuscript material lives separately in `manuscrito/`.

## Project-surface evidence — 2026-08-16

The publication workflow builds `site/` and is triggered by changes to the site, correspondence, manuscript and relevant agent material. The same workflow also compiles the manuscript sources into a `travessia-manuscrito` artifact. This gives Travessia three useful project-surface dimensions: a reader can navigate the literary site; the repository runs an agent/correspondence production machine behind it; and the published correspondence/manuscript artifacts can be read independently of the agent runtime.

A successful `Deploy Site` run exists for 2026-03-18 (run `23228021352`). That is evidence that the Pages publication path has worked, not evidence that the 15-minute production cadence is healthy today.

Freshness is currently **negative evidence**. The README describes agents running in parallel with a heartbeat every 15 minutes and the repository contains a dedicated heartbeat workflow, but the recent Actions inspected on 2026-08-16 were Dependabot activity rather than current heartbeat/publication activity. This does not establish whether production is intentionally paused or broken; it establishes only that configured cadence and observable current execution are different evidence classes.

Consumer issue [travessia#1430](https://github.com/franklinbaldo/travessia/issues/1430) tracks the product-local truthfulness boundary. Preserve the literary identity: if current activity is surfaced, derive it from real published correspondence/artifact/deploy evidence rather than exposing raw CI machinery.

For Cobogó, Travessia is additional evidence for [Automation claim and observable freshness](../patterns/automation-observable-freshness.md), while also offering a useful generated-publication case where source correspondence, compiled manuscript and reader-facing publication are distinct but related artifacts. No shared capability or implementation adoption is inferred from this classification.
