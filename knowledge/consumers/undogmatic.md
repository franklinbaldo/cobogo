---
type: consumer
title: Undogmatic
repository: https://github.com/franklinbaldo/undogmatic
adoption_status: candidate
surface: local Gradio research-inspection tool plus research reports
interaction_profile: paste legal text, tune vector weights/clipping, inspect token heatmap
runtime: Python/Gradio local application; no verified public deploy
constraints:
  - preserve research/POC framing and human legal review
  - do not present experimental token similarity as the canonical LLM-first ShameScore
  - model/provider credentials must remain outside rendered or versioned evidence
capabilities_used: []
unmet_needs:
  - reconcile the legacy ShameFeeling token-heatmap surface with the current LLM-first ShameScore contract (undogmatic#20)
  - add a smoke/import gate if the Gradio surface remains an active product surface
last_verified: 2026-08-16
---

# Undogmatic

Undogmatic is a candidate research-tool consumer because the repository owns a real human-facing Gradio application under `apps/shame_heatmap/`, rather than only a CLI or documentation corpus. The app accepts text, language and weighting/clipping controls and renders a token-level heatmap.

The current evidence boundary is deliberately weak: **source inspection only**. The repository has CI but no verified public deployment for the Gradio UI, so this card must not be read as rendered/browser proof or Cobogó adoption.

There is also material negative evidence. The root README now defines the project as an **LLM-first** ShameScore POC and names `undogmatic.llm_scorer` as the source of truth. The Gradio app instead constructs a vector direction with `xlm-roberta-base`, curated style/value banks and α/δ weights; its README says the versioned banks are tiny placeholders. Therefore `token heatmap == current ShameScore` is not a valid inference. The product-local reconciliation is tracked in https://github.com/franklinbaldo/undogmatic/issues/20.

This is useful Cobogó evidence for research/evaluation surfaces that need to distinguish **canonical measure → experimental diagnostic → explanation/confidence**, but one source-only consumer is not enough to promote a shared pattern or capability.