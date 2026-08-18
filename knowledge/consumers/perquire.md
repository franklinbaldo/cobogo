---
type: consumer
title: Perquire
repository: https://github.com/franklinbaldo/perquire
adoption_status: candidate
surface: local FastAPI/Jinja investigation interface for unknown embeddings
interaction_profile: choose manual or file input, configure provider/strategy, run an investigation, inspect result/error, batch work and status/history
runtime: Python 3.12/3.13; Typer CLI; FastAPI/Jinja/Bootstrap web surface; DuckDB persistence; no verified public deployment
constraints:
  - preserve research/developer-tool framing and the investigation workflow
  - provider credentials must remain outside rendered or versioned evidence
  - do not confuse template smoke evidence with browser/runtime or public-deploy proof
  - do not present similarity feedback or generated descriptions as ground truth
capabilities_used: []
operational_capabilities:
  - "perquire serve local human-facing web surface"
  - manual embedding investigation and file upload
  - batch investigation and status/history surfaces
  - CLI investigation, batch, status and export commands
  - persisted investigations through DuckDB
  - JSON, CSV and text export surfaces
  - API documentation
  - Python CI on 3.12 and 3.13
  - rendered Jinja template smoke gate on pull requests and main
  - live Gemini-backed E2E on trusted main/manual runs
local_identity: investigative scientific/developer instrument organized around questioning and similarity feedback
unmet_needs:
  - obtain controlled browser evidence before treating the surface as rendered/pixel proof
  - reconcile the stale GitHub repository description with the current project surface (perquire#22)
last_verified: 2026-08-18
---

# Perquire

Perquire is a candidate consumer because the repository owns a real human-facing investigation surface rather than only a CLI or library. Its current public relation is **unknown embedding → iterative investigation using similarity feedback → generated description or recoverable error → persisted history/export**. The project now frames that result as an approximation and research instrument, not as recovery of a unique original text or as ground truth.

The local surface was tightened in `perquire#15`: tabs and panels expose their control relationships, the navbar disclosure has explicit accessible state, validation failures use the page's inline alert surface instead of browser `alert()`, and unsupported novelty copy was replaced with a factual capability description. The same PR added a secret-free Jinja render/smoke gate and aligned the live Gemini E2E workflow with the package's Python >=3.12 contract.

`perquire#19` subsequently established a truthful executable baseline and closed the prior README/runtime gap tracked by `perquire#14`. The repository now supports Python 3.12/3.13 in CI, exposes one Typer CLI contract, keeps the FastAPI/Jinja surface explicitly local, repairs DuckDB-backed `status`/`export`, and documents direct investigation commands, the machinery behind them and reusable persisted/exported outputs. The merge was gated by a green Python CI run on both supported runtimes.

Project-surface evidence should therefore be read in three dimensions. **Direct use:** a person can investigate embeddings through CLI or the local web surface and inspect status/history. **Behind the surface:** provider-backed questioning/similarity feedback, DuckDB persistence, web rendering, CI and a trusted live provider E2E support that workflow. **Independent reuse:** persisted investigations can be exported as JSON, CSV or text for downstream inspection. None of those facts establishes a public hosted service, a unique semantic inverse, or externally validated scientific performance.

The next research stack (`perquire#24`–`#26`) is intentionally not recorded as shipped capability here. It narrows the claim to approximate semantic inversion, introduces a falsifiable benchmark and makes contrastive probing conditional on evidence; until those PRs land, they remain planning/experiment evidence rather than consumer state.

Evidence strength remains deliberately bounded: **source + CI + rendered-template smoke + workflow history**. There is still no verified public deployment or controlled browser/pixel capture in this review. A Jinja render proves the static semantic surface, not Bootstrap interaction, provider-backed investigation behavior or public reachability. The GitHub repository description also remains stale and is tracked separately in `perquire#22`.

No Cobogó capability or code adoption is inferred. The useful evidence for Cobogó is the narrower relation between input-mode ownership, investigation state, recoverable error feedback, result/history navigation and exportability; it should remain local evidence until another materially different consumer demonstrates a reusable relation.
