---
type: ConsumerCard
repo: franklinbaldo/causaganha
site: https://franklinbaldo.github.io/causaganha/
status: active
last_reviewed: 2026-09-01
gap_score: 1
---

# CausaGanha

## Identidade local

Preservar a identidade verde/dourada, a finalidade de leitura de dados judiciais, a entrega Astro static-first, a tipografia/densidade próprias e a separação entre superfícies editoriais/explicativas e páginas funcionais de dados. Cobogó pode fornecer fundações sem transformar o produto em skin compartilhada ou dashboard genérico. O core compartilhado continua pinado por bytes, enquanto valores visuais e apresentação de domínio permanecem autoridade local.

## D1 — no site

O leitor pode consultar um processo por número CNJ, pesquisar publicações por texto/OAB/parte e explorar cobertura. A navegação global organiza essas ações por jobs reais. A home multi-fonte entrou por `franklinbaldo/causaganha#901`, merge `1e608dcbd7f8c5a3d4c25bd323d42df5bab66262`, e o deploy desse SHA foi verificado verde: a composição passa a apresentar DJEN, DataJud, TJRO JURIS e STJ sob os papéis Arquivo / Estado / Teor, mantendo métricas DJEN como evidência da camada de preservação e não como definição do produto inteiro.

**Gap [fato] — `/`:** nenhum gap material contabilizado nesta dimensão após #901. Não inferir cobertura completa nem igualdade de maturidade entre fontes. As melhorias de fluxo atualmente em PR permanecem trabalho futuro até merge e publicação verificáveis.

## D2 — por trás

O `ProjectProfile` define CausaGanha como camada cívica verificável sobre rastros judiciais públicos, separando arquivo, estado, teor, significado, proveniência, freshness e limites de cobertura. A PR `franklinbaldo/causaganha#902`, mergeada em `d8c5102e6de42f8391cdedbf3fa83306b41c8142`, transforma `/sobre` em explicação progressiva: tese do produto primeiro, Arquivo / Estado / Teor como modelo mental, uma fronteira explícita de “o que sustenta / limite” para cada fonte, fluxo fonte → artefato → índice → superfície, acesso reproduzível aos dados e interfaces site/dados/MCP.

**Gap [fato] — `/sobre`:** nenhum gap material contabilizado após a segunda tentativa do `Deploy Web` run `33338217183`. No mesmo SHA `d8c5102e...`, `Setup Python`, geração estrita dos contratos, build Astro e upload do artifact passaram; o artifact contém `sobre.html`; o job `deploy` concluiu com sucesso para o ambiente GitHub Pages. A issue `franklinbaldo/causaganha#941` foi encerrada como concluída. Em 2026-09-01, `main` avançou para `f661614562709665ca4e354a273536df6762756e` apenas com canário/SLO, documentação e testes; não houve mudança de superfície que reabra este gap.

## D3 — por conta própria

O repo e a superfície explicativa provam artefatos públicos reutilizáveis: ZIPs preservados no Internet Archive, `sync-manifest.parquet`, `catalog.sql` e Parquets por fonte conforme disponibilidade. Existe receita reproduzível para materializar o catálogo em DuckDB e consultar as views localmente. O README também registra `indice_processual.parquet` como índice fino entre CNJs e fontes de origem. O repositório ainda prova um MCP read-only local, com entrypoint canônico `uv run causaganha-mcp` e tools `processo_consultar`, `publicacoes_buscar`, `processo_estado` e `decisoes_buscar`.

**Gap [fato] — superfície pública:** a capacidade MCP local existe no repo, mas ainda não há rota publicada de autoatendimento que a apresente a um leitor que chega só ao site. A PR #979 propõe `/agentes`, jobs Arquivo / Estado / Teor, configuração stdio local e estado remoto explicitamente indisponível; como o gate visual dedicado está vermelho no head `ce11e1f2...`, a PR não foi mergeada e o gap permanece material.

## Capacidades de superfície

- **GitHub Pages / deploy** — `last_verified: 2026-08-30`. #902 (`d8c5102e...`) foi implantada com sucesso na tentativa 2 do `Deploy Web` run `33338217183`: `build=success`, `deploy=success`, environment URL `https://franklinbaldo.github.io/causaganha/`. A primeira falha em `Setup Python` foi transitória no mesmo SHA; `causaganha#941` foi fechada sem mudança de pipeline.
- **Captura visual determinística** — `last_verified: 2026-09-01`. O workflow compartilhado `Product Surface Visual Capture` continua verde no head de #979. A rodada também adicionou um capture dedicado para `/agentes`; ele ainda não constitui capacidade validada porque o run `33564601095` falha ao servir a clean URL, produzindo before/after idênticos.
- **Recaptura pós-merge** — `last_verified: 2026-08-30`. O workflow geral roda em `push` para `main`; `/agentes` ainda não tem recaptura pós-merge porque #979 permanece aberta.
- **Smoke/build de frontend** — `last_verified: 2026-09-01`. No head `ce11e1f2...`, os builds base/head do capture dedicado concluíram com fixtures idênticas: o base gera 110 páginas sem `agentes.html`; o head gera 111 páginas incluindo `agentes.html`.
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

- 2026-09-01 — #979 permanece aberta: D3 MCP local identificado; capture dedicado chega a construir base/head, mas falha na clean URL; `gap_score` passa a 1 sem antecipar a superfície não publicada.
- 2026-09-01 — inspeção sem intervenção: `main` avançou para `f6616145` apenas em canário/SLO; D1/D2/D3 permaneciam sem gap material registrado e PRs abertas não foram antecipadas como capacidade publicada.
- 2026-08-30 — retry do `Deploy Web` no próprio `d8c5102e` passa build + Pages; #941 encerrada e `gap_score` vai a 0.
- 2026-08-30 — #902 merge `d8c5102e`: `/sobre` passa a explicar Arquivo / Estado / Teor e limites por fonte; recaptura pós-merge verde.
- 2026-08-30 — #901 merge `1e608dcb`: home passa a representar o produto multi-fonte real; deploy verificado verde.
