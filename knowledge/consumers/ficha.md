---
type: ConsumerCard
repo: franklinbaldo/ficha
site: https://franklinbaldo.github.io/ficha/
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# Ficha

## Identidade local

Ficha é um fichário público, histórico e reutilizável de dados de CNPJ da Receita Federal. Preserve o nome FICHA, a metáfora de fichário/arquivo datado, a composição compacta da home, o cabeçalho escuro, a paleta e a linguagem de competência/proveniência. A adoção do Cobogó é em camadas (`core` compartilhado → mapeamento semântico local → CSS de produto), não uma pele visual comum.

## D1 — no site

O leitor pode consultar a competência publicada diretamente no navegador. A home apresenta a tarefa como `Entenda uma empresa e suas conexões públicas`, com busca por CNPJ/Razão Social e caminhos explícitos de uso.

Gap: nenhum gap material de clareza factual. A dívida de viewport estreito está registrada em UI/UX, não em D1.

## D2 — por trás

O projeto preserva snapshots mensais verificáveis dos dados públicos de CNPJ da Receita Federal, publica manifest multi-competência e usa Internet Archive como camada durável. A superfície expõe origem, competência, preservação, verificação e estado.

Gap: nenhum material observado.

## D3 — por conta própria

O leitor pode abrir `manifest.json` e reutilizar fora do site os artefatos indicados pelo contrato público. `Levar a base` torna esse caminho explícito na própria home.

Gap: nenhum material observado.

## Capacidades de superfície

- GitHub Pages/deploy — `last_verified: 2026-09-02`; landing `2e2adfa7c57cc5b80f504d1a9d0aa657abf94317`; Deploy site run `33606723991` concluiu `success` após #229.
- Captura visual — `last_verified: 2026-09-02`; #226 adicionou desktop `1280×900` + narrow `390×844`. O artifact do head da #229 (`9837261361`) mostra o CTA `Buscar` contido em 390 px e desktop sem regressão, mas o workflow atual não recaptura `main` automaticamente após merge; issue #230 registra esse gap causal. #228 continua aberta para registrar o head SHA real em eventos de PR.
- Smoke tests — `last_verified: 2026-09-02`; CI do head da #229 e CI de push do landing concluíram `success`.
- Preservação — `last_verified: 2026-09-02`; snapshots/datasets continuam usando Internet Archive e manifest público como contrato verificável.

## O que este consumer faz melhor que o Cobogó

- Expõe proveniência, competência e integridade como parte do próprio ato de consultar dados.
- Mantém dois caminhos igualmente legítimos — interface e artefato público — sob o mesmo contrato factual.

## Padrões do Cobogó em uso

- Core web foundation pinado desde 2026-08-18 (#222).
- `visual-evidence-as-quality-gate` — `stable`; #226 tornou viewport estreito evidência de primeira classe.
- `primary-action-viewport-containment` — `opinionated`; #229 aplicou a posição com evidência verde no head e deploy verde no landing, mas a maturidade não sobe para `validated` até existir recaptura pós-merge ligada ao SHA de `main`.

## Histórico

- 2026-09-02 — #229 mergeada; head capture corrigiu o clipping do `Buscar`, landing/deploy verdes; loop visual permanece parcial por ausência de recaptura automática de `main` (#230).
- 2026-09-02 — #226 mergeada; captura desktop+narrow revelou overflow do CTA `Buscar`; assessment 18/24 com `UI: 1/4`; issue #227 aberta.
- 2026-09-01 — `main` e contrato público revalidados sem mudança de superfície; `gap_score: 0` preservado.
- 2026-08-31 — card reconciliado ao schema `ConsumerCard`; D1/D2/D3 reavaliados; `gap_score: 0`.
- 2026-08-30 — `main` avançou para #225 sem mudança de composição pública; snapshot 2026-07 permaneceu publicado.
