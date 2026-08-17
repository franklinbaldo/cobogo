---
type: consumer
title: Perquire
repository: https://github.com/franklinbaldo/perquire
adoption_status: candidate
surface: local FastAPI/Jinja investigation interface for unknown embeddings
interaction_profile: choose manual or file input, configure provider/strategy, run an investigation, inspect result/error, batch work and status/history
runtime: Python/FastAPI/Jinja/Bootstrap; no verified public deployment
constraints:
  - preserve research/developer-tool framing and the investigation workflow
  - provider credentials must remain outside rendered or versioned evidence
  - do not confuse template smoke evidence with browser/runtime or public-deploy proof
capabilities_used: []
operational_capabilities:
  - `perquire serve` local human-facing web surface
  - manual embedding investigation and file upload
  - batch investigation and status/history surfaces
  - API documentation
  - rendered Jinja template smoke gate on pull requests and main
  - live Gemini-backed E2E on trusted main/manual runs
local_identity: investigative scientific/developer instrument organized around questioning and similarity feedback
unmet_needs:
  - reconcile README/runtime/deployment truthfulness and decide whether the web UI is intentionally local-only or has a supported deployment path (perquire#14)
  - obtain controlled browser evidence before treating the surface as rendered/pixel proof
last_verified: 2026-08-17
---

# Perquire

Perquire is a candidate consumer because the repository owns a real human-facing investigation surface rather than only a CLI or library. Its web UI supports manual vector input, embedding-file upload, batch work, investigation results and status/history around the product relation **unknown embedding → iterative investigation → result or recoverable error → history/status**.

The local surface was tightened in `perquire#15`: tabs and panels now expose their control relationships, the navbar disclosure has explicit accessible state, validation failures use the page's inline alert surface instead of browser `alert()`, and unsupported novelty copy was replaced with a factual capability description. The same PR added a secret-free Jinja render/smoke gate and aligned the live Gemini E2E workflow with the package's Python >=3.12 contract.

Evidence strength remains deliberately bounded: **source + rendered-template smoke + workflow history**. There is no verified public deployment or controlled browser/pixel capture in this review. A Jinja render proves the static semantic surface, not Bootstrap interaction, provider-backed investigation behavior or public reachability.

No Cobogó capability or code adoption is inferred. The useful evidence for Cobogó is the narrower relation between input-mode ownership, investigation state, recoverable error feedback and result/history navigation; it should remain local evidence until another materially different consumer demonstrates a reusable relation.