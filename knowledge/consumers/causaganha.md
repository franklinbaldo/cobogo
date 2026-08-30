---
type: ConsumerCard
repo: franklinbaldo/causaganha
site: https://franklinbaldo.github.io/causaganha/
status: active
last_reviewed: 2026-08-30
gap_score: 2
---

# CausaGanha

## Identidade local

Preservar a identidade verde/dourada, a finalidade de leitura de dados judiciais, a entrega Astro static-first, a tipografia/densidade próprias e a separação entre superfícies editoriais/explicativas e páginas funcionais de dados. Cobogó pode fornecer fundações sem transformar o produto em skin compartilhada ou dashboard genérico. O core compartilhado continua pinado por bytes, enquanto valores visuais e apresentação de domínio permanecem autoridade local.

## D1 — no site

O leitor pode consultar um processo por número CNJ, pesquisar publicações por texto/OAB/parte e explorar cobertura. A PR `franklinbaldo/causaganha#900`, mergeada em `a76ef9a0ba44373d8e3e892c8fa2f5fdef0a6e03`, adicionou navegação global orientada a jobs e tornou consultar, buscar, explorar cobertura e entender/reutilizar alcançáveis por links normais em toda a superfície.

**Gap [fato] — `/`:** o corpo da home em `main` ainda concentra grande parte do orçamento visual no arquivo DJEN e mantém um calendário explicitamente demonstrativo. Embora o hero já encaminhe CNJ ao dossiê multi-fonte, a composição abaixo ainda não torna o modelo arquivo / estado / teor e as quatro fontes tão legíveis quanto o README incorporado pela #899. `franklinbaldo/causaganha#901` é o trabalho aberto que endereça esse gap; não tratar sua proposta como fato publicado antes do merge.

## D2 — por trás

O `ProjectProfile` define CausaGanha como camada cívica verificável sobre rastros judiciais públicos, separando arquivo, estado, teor, significado, proveniência, freshness e limites de cobertura. O README em `main` agora explicita quatro fontes — DJEN, TJRO JURIS, STJ e DataJud — e três interfaces: site, dados públicos e MCP read-only. A navegação global torna a rota de projeto/dados recuperável sem expor nomes de pipeline como arquitetura principal.

**Gap [fato] — `/sobre`:** a página publicada ainda abre com uma formulação institucional genérica e organiza a explicação como projeto → metodologia → fontes → dados → licença/governança. Ela contém fatos corretos e uma receita DuckDB reproduzível, mas ainda não ensina primeiro o modelo mental arquivo / estado / teor que o repo passou a assumir. `franklinbaldo/causaganha#902` permanece trabalho aberto para essa explicação progressiva.

## D3 — por conta própria

O repo e a superfície `/sobre` provam artefatos públicos reutilizáveis: ZIPs preservados no Internet Archive, `sync-manifest.parquet`, `catalog.sql` e Parquets por fonte conforme disponibilidade. Existe uma receita reproduzível para materializar o catálogo em DuckDB e consultar as views localmente. O README também registra `indice_processual.parquet` como índice fino entre CNJs e fontes de origem.

**Gap [fato]:** nenhum gap material contabilizado nesta dimensão nesta rodada. A navegabilidade para projeto/dados melhorou com #900; não prometer igualdade de cobertura entre fontes nem artefatos que ainda não estejam publicados.

## Capacidades de superfície

- **GitHub Pages / deploy** — `last_verified: 2026-08-30`. O merge `a76ef9a0...` disparou `Deploy Web` run `33332421721`; jobs `build` e `deploy` concluíram com sucesso no mesmo SHA.
- **Captura visual determinística** — `last_verified: 2026-08-30`. O workflow `Cobogo Core Adoption Capture` constrói base/head com fixtures idênticas e captura `/stats` em Chromium 1280×900. Para #900, run `32532893041`, artifact `9464477484`, digest `sha256:31c4911fdcdfcefa06379969f7260c396277f57ec2c6166d209c8c34a71624a8`.
- **Limite da recaptura** — `last_verified: 2026-08-30`. O workflow de captura atual só tem trigger `pull_request` e não oferece `workflow_dispatch` nem trigger `push`; portanto a rotina não conseguiu produzir uma nova captura do merge SHA `a76ef9a0...` sem alterar a infraestrutura do consumer em outro PR. O loop desta rodada permanece parcial por esse motivo.
- **Smoke/build de frontend** — `last_verified: 2026-08-30`. A PR #900 teve `lint`, `tests (tjro)`, `compare-stats` e GitGuardian verdes no head `f8ebb148...`; o deploy pós-merge também construiu o site com sucesso.
- **Preservação / artefatos públicos** — `last_verified: 2026-08-30`. O card continua tratando Internet Archive + contratos textuais/Parquet como evidência de reuso; publicação de um artefato e smoke independente permanecem classes separadas de evidência.

## O que este consumer faz melhor que o Cobogó

- [Brownfield core adoption workflow](../foundations/brownfield-core-adoption.md) — CausaGanha continua sendo a evidência externa mais forte de adoção pinada por bytes com redução real de duplicação local e identidade preservada.
- A comparação judicial em `/stats` continua fornecendo evidência concreta para semântica de tabelas, provenance/freshness e redundância de estado sem depender apenas de cor.
- O handoff de artefato público via `catalog.sql` + dados preservados continua uma referência de reuso reproduzível sem tornar DuckDB uma exigência universal do Cobogó.

## Padrões do Cobogó em uso

- [Brownfield core adoption workflow](../foundations/brownfield-core-adoption.md) — snapshot imutável do core + mapping/tema local + CI que impede fork silencioso.
- Provenance/freshness — timestamps, cobertura e estados de fonte permanecem explícitos nas superfícies de dados.
- Parentesco sem uniformidade — fundações compartilhadas sem substituição da identidade verde/dourada e da gramática de dados local.

## Histórico

- 2026-08-30 — #900 merge `a76ef9a0`: navegação global passa a organizar o site por jobs; deploy pós-merge verde, recaptura bloqueada pelo trigger PR-only do workflow visual.
- 2026-08-30 — #899 merge `4d25935c`: README reposicionado em arquivo / estado / teor, quatro fontes e três interfaces.
- 2026-08-30 — card migrado do schema legado para `ConsumerCard`; `gap_score` recalculado em 2 (home + explicação do sistema).
- 2026-08-18 — #878 consolidou adoção brownfield do core com snapshot pinado e redução de fundações duplicadas.
- 2026-08-18 — `/stats` verificado como superfície de comparação com semântica temporal, tabela acessível e redundância não cromática.
