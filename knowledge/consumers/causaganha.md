---
type: ConsumerCard
repo: franklinbaldo/causaganha
site: https://franklinbaldo.github.io/causaganha/
status: active
last_reviewed: 2026-09-01
gap_score: 0
---

# CausaGanha

## Identidade local

Preservar a identidade verde/dourada, a finalidade de leitura de dados judiciais, a entrega Astro static-first, a tipografia/densidade próprias e a separação entre superfícies editoriais/explicativas e páginas funcionais de dados. Cobogó pode fornecer fundações sem transformar o produto em skin compartilhada ou dashboard genérico. O core compartilhado continua pinado por bytes, enquanto valores visuais e apresentação de domínio permanecem autoridade local.

## D1 — no site

O leitor pode consultar um processo por número CNJ, pesquisar publicações por texto/OAB/parte e explorar cobertura. A navegação global organiza essas ações por jobs reais. A home multi-fonte entrou por `franklinbaldo/causaganha#901`, merge `1e608dcbd7f8c5a3d4c25bd323d42df5bab66262`, e o deploy desse SHA foi verificado verde: a composição apresenta DJEN, DataJud, TJRO JURIS e STJ sob os papéis Arquivo / Estado / Teor, mantendo métricas DJEN como evidência da camada de preservação e não como definição do produto inteiro.

**Gap [fato] — `/`:** nenhum gap material contabilizado nesta dimensão após #901. Não inferir cobertura completa nem igualdade de maturidade entre fontes.

## D2 — por trás

O `ProjectProfile` define CausaGanha como camada cívica verificável sobre rastros judiciais públicos, separando arquivo, estado, teor, significado, proveniência, freshness e limites de cobertura. A PR `franklinbaldo/causaganha#902`, mergeada em `d8c5102e6de42f8391cdedbf3fa83306b41c8142`, transforma `/sobre` em explicação progressiva: tese do produto primeiro, Arquivo / Estado / Teor como modelo mental, uma fronteira explícita de “o que sustenta / limite” para cada fonte, fluxo fonte → artefato → índice → superfície, acesso reproduzível aos dados e interfaces site/dados/MCP.

**Gap [fato] — `/sobre`:** nenhum gap material contabilizado após a segunda tentativa do `Deploy Web` run `33338217183`. No mesmo SHA `d8c5102e...`, `Setup Python`, geração estrita dos contratos, build Astro e upload do artifact passaram; o artifact contém `sobre.html`; o job `deploy` concluiu com sucesso para o ambiente GitHub Pages. A issue `franklinbaldo/causaganha#941` foi encerrada como concluída.

## D3 — por conta própria

O repo e a superfície explicativa provam artefatos públicos reutilizáveis: ZIPs preservados no Internet Archive, `sync-manifest.parquet`, `catalog.sql` e Parquets por fonte conforme disponibilidade. Existe receita reproduzível para materializar o catálogo em DuckDB e consultar as views localmente. O README também registra `indice_processual.parquet` como índice fino entre CNJs e fontes de origem. O repositório prova ainda um MCP read-only local, com entrypoint canônico `uv run causaganha-mcp` e tools `processo_consultar`, `publicacoes_buscar`, `processo_estado` e `decisoes_buscar`.

A PR `franklinbaldo/causaganha#979`, mergeada no landing `333308303bcabf681a6513960fa6d53299ffc65b`, publica `/agentes` e a expõe na navegação. A página organiza o uso do MCP pelos jobs Arquivo / Estado / Teor, fornece a configuração stdio local com `uv run causaganha-mcp` e explicita que o transporte remoto ainda está indisponível, sem inventar endpoint público.

**Gap [fato] — `/agentes`:** nenhum gap material contabilizado após #979. O `Deploy Web` run `33568994734` concluiu `success` no landing SHA e a recaptura pós-merge `Agents Surface Visual Capture` run `33568994835` também concluiu `success`, produzindo o artifact `9824255700`; no mesmo harness, o before é 404 e o after mostra a rota completa em desktop e mobile.

## Capacidades de superfície

- **GitHub Pages / deploy** — `last_verified: 2026-09-01`. #979 (`333308303...`) foi implantada com sucesso pelo `Deploy Web` run `33568994734`.
- **Captura visual determinística** — `last_verified: 2026-09-01`. O workflow dedicado `Agents Surface Visual Capture` passou no push de `main` do landing #979, run `33568994835`, artifact `9824255700`; before/after usam builds adjacentes, fixtures idênticas e a mesma rota clean `/causaganha/agentes` em desktop e mobile.
- **Recaptura pós-merge** — `last_verified: 2026-09-01`. A recaptura do landing `333308303...` concluiu verde no run `33568994835`; before mostra 404 e after mostra a nova superfície.
- **Smoke/build de frontend** — `last_verified: 2026-09-01`. CI do landing #979, run `33568994932`, concluiu `success`.
- **Preservação / artefatos públicos** — `last_verified: 2026-08-30`. Internet Archive + contratos textuais/Parquet continuam evidência de reuso; publicação de artefato, surface build e deploy seguem classes separadas de evidência.

## O que este consumer faz melhor que o Cobogó

- [Brownfield core adoption workflow](../foundations/brownfield-core-adoption.md) — evidência externa forte de adoção pinada por bytes com identidade preservada.
- [Fronteiras de prova por fonte](../concepts/source-proof-boundaries.md) — `/sobre` torna explícito o que cada fonte sustenta e o que não sustenta, subordinado ao modelo Arquivo / Estado / Teor; conceito ainda abaixo do gate de promoção.
- O handoff de artefato público via `catalog.sql` + dados preservados continua uma referência de reuso reproduzível sem tornar DuckDB exigência universal do Cobogó.

## Padrões do Cobogó em uso

- [Brownfield core adoption workflow](../foundations/brownfield-core-adoption.md) — snapshot imutável do core + mapping/tema local + CI que impede fork silencioso.
- Provenance/freshness — timestamps, cobertura e estados de fonte permanecem explícitos nas superfícies de dados.
- Parentesco sem uniformidade — fundações compartilhadas sem substituição da identidade verde/dourada e da gramática de dados local.

## Histórico

- 2026-09-01 — #979 fecha D3: `/agentes` mergeada em `333308303...`, deploy e recaptura pós-merge verdes; `gap_score` volta a 0.
- 2026-09-01 — D3 MCP local identificado; captura dedicada corrigida para provar a clean URL antes do merge.
- 2026-09-01 — inspeção sem intervenção: `main` avançou apenas em canário/SLO; D1/D2/D3 sem novo gap material à época.
- 2026-08-30 — retry do `Deploy Web` no próprio `d8c5102e` passa build + Pages; #941 encerrada e `gap_score` vai a 0.
- 2026-08-30 — #902 merge `d8c5102e`: `/sobre` passa a explicar Arquivo / Estado / Teor e limites por fonte; recaptura pós-merge verde.
