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
  - obtain controlled browser evidence before treating the surface as rendered/pixel proof; implementation proposed in perquire#86, now blocked because the supported web entrypoint fails before serving `/` (perquire#88)
  - reconcile the stale GitHub repository description with the current project surface (perquire#22)
last_verified: 2026-09-02
---

# Perquire

Perquire is a candidate consumer because the repository owns a real human-facing investigation surface rather than only a CLI or library. Its current public relation is **unknown embedding → iterative investigation using similarity feedback → generated description or recoverable error → persisted history/export**. The project now frames that result as an approximation and research instrument, not as recovery of a unique original text or as ground truth.

The local surface was tightened in `perquire#15`: tabs and panels expose their control relationships, the navbar disclosure has explicit accessible state, validation failures use the page's inline alert surface instead of browser `alert()`, and unsupported novelty copy was replaced with a factual capability description. The same PR added a secret-free Jinja render/smoke gate and aligned the live Gemini E2E workflow with the package's Python >=3.12 contract.

`perquire#19` subsequently established a truthful executable baseline and closed the prior README/runtime gap tracked by `perquire#14`. The repository now supports Python 3.12/3.13 in CI, exposes one Typer CLI contract, keeps the FastAPI/Jinja surface explicitly local, repairs DuckDB-backed `status`/`export`, and documents direct investigation commands, the machinery behind them and reusable persisted/exported outputs. The merge was gated by a green Python CI run on both supported runtimes.

Project-surface evidence should therefore be read in three dimensions. **Direct use:** a person can investigate embeddings through CLI or the local web surface and inspect status/history. **Behind the surface:** provider-backed questioning/similarity feedback, DuckDB persistence, web rendering, CI and a trusted live provider E2E support that workflow. **Independent reuse:** persisted investigations can be exported as JSON, CSV or text for downstream inspection. None of those facts establishes a public hosted service, a unique semantic inverse, or externally validated scientific performance.

The next research stack (`perquire#24`–`#26`) is intentionally not recorded as shipped capability here. It narrows the claim to approximate semantic inversion, introduces a falsifiable benchmark and makes contrastive probing conditional on evidence; until those PRs land, they remain planning/experiment evidence rather than consumer state.

A verificação de 2026-09-02 avançou a fronteira de evidência, mas ainda não produziu pixels. A PR `perquire#86` propõe iniciar a aplicação FastAPI sem credenciais e capturar `/` em Chromium nos tamanhos 1280×900 e 390×844, identificando o commit efetivamente testado. As primeiras tentativas nem chegaram a executar comandos e foram registradas em `perquire#87`. Na retomada do mesmo commit `ab9affb04eac2b84c7676ab884c31c017d685b89`, os runners voltaram a funcionar: o teste de template passou, Python/uv/Node e Chromium foram instalados e o teste de navegador avançou até iniciar a aplicação real.

Nesse ponto surgiu um problema diferente e agora reproduzível: `python -m perquire.web.main` falha ao importar `create_ensemble_investigator` de `perquire`. A issue `perquire#87` foi fechada porque seu critério — jobs realmente executarem — foi satisfeito; `perquire#88` registra o defeito do entrypoint web. Esse defeito pertence ao Perquire, não ao Cobogó, porque impede a própria capacidade operacional de servir a interface. A rotina de qualidade não o corrige fora de sua autoridade.

Portanto, a força da evidência permanece deliberadamente limitada a **source + CI histórico + rendered-template smoke + execução real do workflow até o entrypoint web**. Ainda não existe captura controlada de navegador que possa sustentar nota de UI/UX, e não há implantação pública verificada. A descrição pública do repositório também continua desatualizada e é acompanhada pela `perquire#22`.

No Cobogó, `visual-evidence-as-quality-gate` continua sendo a recomendação aplicada: em linguagem comum, decisões sobre aparência e responsividade precisam se apoiar em imagens reproduzíveis da implementação real. A #86 continua sendo uma tentativa de adoção, não evidência de adoção bem-sucedida; por isso nenhuma nova capacidade é adicionada a `capabilities_used` e a maturidade da recomendação não muda.
