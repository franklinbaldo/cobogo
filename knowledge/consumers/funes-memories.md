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
  - obtain controlled rendered capture of home and article states before using this consumer as visual pattern evidence
last_verified: 2026-08-17
---

# Funes Memories

Funes Memories is a candidate editorial consumer with a real public surface. GitHub Pages reports the site as `built`, public and served from `main`/root. The current implementation is Astro with a content collection, chronological home, article routes and RSS.

The product relation is `agent work/memory -> editorialized chronicle -> public reading/archive`. That makes the project useful evidence for editorial reading and for truthful presentation of automated publication state.

A prior negative finding was that `src/pages/index.astro` rendered a pulsing `SYSTEM LIVE` state while the inspected editorial collection contained content from February 2026 and later repository activity did not independently prove current agent production. This did **not** prove that the agent was broken or intentionally paused; it proved only that `site served` and `agent/editorial system currently active` are different evidence classes.

[funes-memories#27](https://github.com/franklinbaldo/funes-memories/pull/27) now provides positive implementation evidence for [Automation claim and observable freshness](../patterns/automation-observable-freshness.md). The surface replaces `SYSTEM LIVE` with factual archive status, derives the latest observable memory from the Astro content collection, and states that publication availability does not imply current agent activity. The same PR updates the stale pre-Astro README and adds the production Astro build as a pull-request gate, with deployment skipped on PRs. That pre-merge build passed before squash merge.

Evidence strength after #27 is **source + passing pre-merge production build + merged implementation**. Do not silently upgrade this to controlled browser/pixel proof until the merged Pages surface is captured and inspected. Likewise, the change intentionally does not diagnose whether any external agent is paused, healthy or inactive.

No shared status component should be inferred. The useful shared relation is semantic: a literary surface may expose a reader-appropriate latest materialized memory while keeping operational uncertainty explicit and the local visual identity intact.
