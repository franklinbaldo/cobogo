---
type: ConsumerCard
repo: franklinbaldo/causaganha
site: https://franklinbaldo.github.io/causaganha/
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# CausaGanha

## Identidade local

Preservar a identidade verde/dourada, a finalidade de leitura de dados judiciais, a entrega Astro static-first, a tipografia/densidade próprias e a separação entre superfícies editoriais/explicativas e páginas funcionais de dados. Cobogó pode fornecer fundações sem transformar o produto em skin compartilhada ou dashboard genérico. O core compartilhado continua pinado por bytes, enquanto valores visuais e apresentação de domínio permanecem autoridade local.

## D1 — no site

O leitor pode consultar um processo por número CNJ, pesquisar publicações por texto/OAB/parte, explorar cobertura, usar a superfície com agente e acessar projeto/dados. A navegação global organiza essas ações por jobs reais. A home multi-fonte entrou por `franklinbaldo/causaganha#901`, merge `1e608dcbd7f8c5a3d4c25bd323d42df5bab66262`, e apresenta DJEN, DataJud, TJRO JURIS e STJ sob os papéis Arquivo / Estado / Teor, mantendo métricas DJEN como evidência da camada de preservação e não como definição do produto inteiro.

**Gap [fato] — `/`:** nenhum gap material contabilizado. A recaptura do landing #999 mantém todos os destinos de primeiro nível perceptíveis em `390×844`.

## D2 — por trás

O `ProjectProfile` define CausaGanha como camada cívica verificável sobre rastros judiciais públicos, separando arquivo, estado, teor, significado, proveniência, freshness e limites de cobertura. A PR `franklinbaldo/causaganha#902`, mergeada em `d8c5102e6de42f8391cdedbf3fa83306b41c8142`, transforma `/sobre` em explicação progressiva: tese do produto primeiro, Arquivo / Estado / Teor como modelo mental, uma fronteira explícita de “o que sustenta / limite” para cada fonte, fluxo fonte → artefato → índice → superfície, acesso reproduzível aos dados e interfaces site/dados/MCP.

**Gap [fato] — `/sobre`:** nenhum gap material contabilizado. A superfície continua distinguindo prova, limite e ausência sem prometer cobertura que o repo não sustenta.

## D3 — por conta própria

O repo e a superfície explicativa provam artefatos públicos reutilizáveis: ZIPs preservados no Internet Archive, `sync-manifest.parquet`, `catalog.sql` e Parquets por fonte conforme disponibilidade. Existe receita reproduzível para materializar o catálogo em DuckDB e consultar as views localmente. O README também registra `indice_processual.parquet` como índice fino entre CNJs e fontes de origem. O repositório prova ainda um MCP read-only local, com entrypoint canônico e tools de produto/diagnóstico; `/agentes` documenta a configuração stdio e deixa explícito que transporte HTTP público ainda não está disponível.

**Gap [fato] — `/agentes`:** nenhum gap material contabilizado. O landing da correção de navegação #999 é `e82f5c00e8093dce1e580d33f4819bf89ac4e9ff`; `Deploy Web` run `33622993677` e `Product Surface Visual Capture` run `33622993648` passaram, com artifact pós-merge `9843687466`.

## Capacidades de superfície

- **GitHub Pages / deploy** — `last_verified: 2026-09-02`. Landing #999 `e82f5c00...`, `Deploy Web` run `33622993677`, build e deploy `success`.
- **Captura visual determinística** — `last_verified: 2026-09-02`. `Product Surface Visual Capture` cobre múltiplas rotas em desktop/mobile; no head #999 run `33622720495`, artifact `9843589937`.
- **Recaptura pós-merge** — `last_verified: 2026-09-02`. Push de `main` no landing #999 disparou run `33622993648`, `success`, artifact `9843687466` ligado ao SHA do landing.
- **Smoke/build de frontend** — `last_verified: 2026-09-02`. CI da #999 run `33622720447` concluiu `success`; o deploy do landing também recompilou o site com sucesso.
- **Preservação / artefatos públicos** — `last_verified: 2026-09-02`. Internet Archive + contratos textuais/Parquet continuam evidência de reuso; publicação de artefato, surface build e deploy seguem classes separadas de evidência.

## O que este consumer faz melhor que o Cobogó

- [Brownfield core adoption workflow](../foundations/brownfield-core-adoption.md) — evidência externa forte de adoção pinada por bytes com identidade preservada.
- [Fronteiras de prova por fonte](../concepts/source-proof-boundaries.md) — `/sobre` torna explícito o que cada fonte sustenta e o que não sustenta, subordinado ao modelo Arquivo / Estado / Teor.
- O handoff de artefato público via `catalog.sql` + dados preservados continua uma referência de reuso reproduzível sem tornar DuckDB exigência universal do Cobogó.

## Padrões do Cobogó em uso

- [Brownfield core adoption workflow](../foundations/brownfield-core-adoption.md) — snapshot imutável do core + mapping/tema local + CI que impede fork silencioso.
- Provenance/freshness — timestamps, cobertura e estados de fonte permanecem explícitos nas superfícies de dados.
- `visual-evidence-as-quality-gate` — comparação antes/depois e recaptura do landing ligadas a SHA.
- `primary-navigation-perceptible-on-narrow-viewports` — validada pela #999; o consumer usa wrap local em vez de impor um componente Cobogó.
- Parentesco sem uniformidade — fundações compartilhadas sem substituição da identidade verde/dourada e da gramática de dados local.

## Histórico

- 2026-09-02 — baseline opinionado 23/24; #999 fecha discoverability da navegação mobile e valida `primary-navigation-perceptible-on-narrow-viewports` com captura pós-merge.
- 2026-09-01 — #979 fecha D3: `/agentes` mergeada, deploy e recaptura pós-merge verdes; `gap_score` volta a 0.
- 2026-09-01 — D3 MCP local identificado; captura dedicada corrigida para provar a clean URL antes do merge.
- 2026-08-30 — retry do `Deploy Web` no próprio `d8c5102e` passa build + Pages; #941 encerrada e `gap_score` vai a 0.
- 2026-08-30 — #902 merge `d8c5102e`: `/sobre` passa a explicar Arquivo / Estado / Teor e limites por fonte; recaptura pós-merge verde.
