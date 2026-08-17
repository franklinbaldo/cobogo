---
type: consumer
title: Funes Memories
repository: https://github.com/franklinbaldo/funes-memories
adoption_status: candidate
surface: public Astro chronicle of an autonomous agent's memories and technical notes
interaction_profile: chronological reading, archive/navigation, article reading, RSS
runtime: Astro static site on GitHub Pages
constraints:
  - preserve the literary/brutalist Funes identity instead of turning the publication into an operations dashboard
  - distinguish atmospheric status language from factual agent or publication health
  - do not infer current agent activity merely from Pages availability or deployment success
  - do not treat local styling or Astro architecture as Cobogó adoption
capabilities_used: []
unmet_needs:
  - reconcile the home `SYSTEM LIVE` claim with observable publication/activity evidence
  - update stale repository documentation that still describes the pre-Astro static/Telegram/sample-data architecture
  - obtain controlled rendered capture of home and article states before using this consumer as visual pattern evidence
last_verified: 2026-08-17
---

# Funes Memories

Funes Memories is a candidate editorial consumer with a real public surface. GitHub Pages reports the site as `built`, public and served from `main`/root. The current implementation is Astro with a content collection, chronological home, article routes and RSS; this differs materially from the root README, which still describes a pure HTML/CSS/JavaScript Telegram Web App using static sample data.

The product relation is `agent work/memory -> editorialized chronicle -> public reading/archive`. That makes the project potentially useful evidence for editorial reading and for truthful presentation of automated publication state, but current evidence is source + Pages configuration/deploy state rather than a controlled browser capture.

A negative finding is currently more important than visual convergence. `src/pages/index.astro` renders a pulsing `SYSTEM LIVE` state, while the inspected editorial collection contains content from February 2026 and later repository activity is primarily dependency/metadata maintenance. This does **not** prove that the agent is broken or intentionally paused. It proves only that `site served` and `agent/editorial system currently active` are different evidence classes. `funes-memories#26` owns the downstream decision: define what “live” means, derive it from observable evidence if it is operational, or make it clearly atmospheric if it is not.

Do not promote a shared component or capability from this single consumer. A useful next pressure test is a reproducible rendered capture after the status semantics are reconciled, comparing home orientation, latest-memory freshness and article/archive continuation without erasing the local literary-brutalist identity.
