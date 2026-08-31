---
type: ConsumerCard
repo: franklinbaldo/causaganha
site: https://franklinbaldo.github.io/causaganha/
status: active
last_reviewed: 2026-08-30
gap_score: 0
---

# CausaGanha

## Identidade local

Preservar a identidade verde/dourada, a finalidade de leitura de dados judiciais, a entrega Astro static-first, a tipografia/densidade próprias e a separação entre superfícies editoriais/explicativas e páginas funcionais de dados. Cobogó pode fornecer fundações sem transformar o produto em skin compartilhada ou dashboard genérico. O core compartilhado continua pinado por bytes, enquanto valores visuais e apresentação de domínio permanecem autoridade local.

## D1 — no site

O leitor pode consultar um processo por número CNJ, pesquisar publicações por texto/OAB/parte e explorar cobertura. A navegação global organiza essas ações por jobs reais. A home multi-fonte entrou por `franklinbaldo/causaganha#901`, merge `1e608dcbd7f8c5a3d4c25bd323d42df5bab66262`, e o deploy desse SHA foi verificado verde: a composição passa a apresentar DJEN, DataJud, TJRO JURIS e STJ sob os papéis Arquivo / Estado / Teor, mantendo métricas DJEN como evidência da camada de preservação e não como definição do produto inteiro.

**Gap [fato] — `/`:** nenhum gap material contabilizado nesta dimensão após #901. Não inferir cobertura completa nem igualdade de maturidade entre fontes.

## D2 — por trás

O `ProjectProfile` define CausaGanha como camada cívica verificável sobre rastros judiciais públicos, separando arquivo, estado, teor, significado, proveniência, freshness e limites de cobertura. A PR `franklinbaldo/causaganha#902`, mergeada em `d8c5102e6de42f8391cdedbf3fa83306b41c8142`, transforma `/sobre` em explicação progressiva: tese do produto primeiro, Arquivo / Estado / Teor como modelo mental, uma fronteira explícita de “o que sustenta / limite” para cada fonte, fluxo fonte → artefato → índice → superfície, acesso reproduzível aos dados e interfaces site/dados/MCP.

**Gap [fato] — `/sobre`:** nenhum gap material contabilizado após a segunda tentativa do `Deploy Web` run `33338217183`. No mesmo SHA `d8c5102e...`, `Setup Python`, geração estrita dos contratos, build Astro e upload do artifact passaram; o artifact contém `sobre.html`; o job `deploy` concluiu com sucesso para o ambiente GitHub Pages. A issue `franklinbaldo/causaganha#941` foi encerrada como concluída. A verificação desta rodada é pela cadeia de build/artifact/deployment do GitHub Pages; não houve probe HTTP independente da rota.

## D3 — por conta própria

O repo e a superfície explicativa provam artefatos públicos reutilizáveis: ZIPs preservados no Internet Archive, `sync-manifest.parquet`, `catalog.sql` e Parquets por fonte conforme disponibilidade. Existe receita reproduzível para materializar o catálogo em DuckDB e consultar as views localmente. O README também registra `indice_processual.parquet` como índice fino entre CNJs e fontes de origem.

**Gap [fato]:** nenhum gap material contabilizado nesta dimensão. Não prometer igualdade de cobertura entre fontes nem artefatos que ainda não estejam publicados.

## Capacidades de superfície

- **GitHub Pages / deploy** — `last_verified: 2026-08-30`. #902 (`d8c5102e...`) foi implantada com sucesso na tentativa 2 do `Deploy Web` run `33338217183`: `build=success`, `deploy=success`, environment URL `https://franklinbaldo.github.io/causaganha/`. A primeira falha em `Setup Python` foi transitória no mesmo SHA; `causaganha#941` foi fechada sem mudança de pipeline.
- **Captura visual determinística** — `last_verified: 2026-08-30`. #902 incorporou `Product Surface Visual Capture`, que usa fixtures idênticas e captura home desktop/mobile, `/sobre` desktop/mobile e `/stats` desktop. No head `2dba1070...`, run `33338105717`, artifact `9739678514`, somente `/sobre` mudou; home e `/stats` ficaram pixel-idênticos.
- **Recaptura pós-merge** — `last_verified: 2026-08-30`. O workflow roda em `push` para `main`. No merge SHA `d8c5102e...`, run `33338217168` concluiu com sucesso e publicou artifact `9739713589`, digest `sha256:fa5d9f3b3b8dab2bfaada171d1a447e09f610998608f03711537a49f3e54d670`. Não existe `workflow_dispatch`; como nenhuma byte de superfície mudou no retry de deploy, não foi criado commit artificial só para recapturar.
- **Smoke/build de frontend** — `last_verified: 2026-08-30`. Além dos gates verdes do head de #902, a tentativa 2 do deploy no merge SHA construiu 118 rotas Astro, incluindo `/sobre.html`, e publicou o artifact Pages.
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

- 2026-08-30 — retry do `Deploy Web` no próprio `d8c5102e` passa build + Pages; #941 encerrada e `gap_score` vai a 0.
- 2026-08-30 — #902 merge `d8c5102e`: `/sobre` passa a explicar Arquivo / Estado / Teor e limites por fonte; recaptura pós-merge verde.
- 2026-08-30 — #901 merge `1e608dcb`: home passa a representar o produto multi-fonte real; deploy verificado verde.
- 2026-08-30 — #900 merge `a76ef9a0`: navegação global passa a organizar o site por jobs reais.
- 2026-08-30 — #899 merge `4d25935c`: README reposicionado em arquivo / estado / teor, quatro fontes e três interfaces.
