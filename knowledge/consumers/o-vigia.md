---
type: ConsumerCard
repo: franklinbaldo/ovigia-redacao
site: https://ovigialocal.github.io/
status: active
last_reviewed: 2026-08-30
gap_score: 2
---

# O Vigia

## Identidade local

Preservar a identidade de jornal local independente de Porto Velho: texto e hierarquia editorial como estrutura principal, ritmo de leitura mais aberto que superfícies administrativas, voz jornalística própria e confiança apresentada em camadas. Cobogó não deve transformar O Vigia em dashboard nem impor uma skin compartilhada.

## D1 — no site

A home pública se apresenta como jornal local de Porto Velho e assume honestamente o estado sem matérias: `O Vigia`, `Notícias da cidade, com a fonte à vista` e `Ainda não há matérias publicadas`. O leitor pode acessar metodologia e correções sem atravessar linguagem de pipeline.

O estado populado da capa agora é exercitado pelo mesmo renderer em um preview **exclusivamente localhost** (`?preview=populated`): PR #7 / merge `d2d72648f75d0c7c22b8ef3f132e7693ba2247ce` define manchete dominante, notícias secundárias e briefs, com editoria/bairro/data subordinados à leitura. A fixture demonstrativa não pode ser ativada no GitHub Pages e `publishedArticles` continua vazio em produção.

**Gap [fato] — matéria individual:** ainda falta o template editorial de matéria para conteúdo real. `ovigialocal/ovigialocal.github.io#2` permanece aberto; não preencher esse gap com notícia publicada fictícia.

## D2 — por trás

O Vigia é uma redação de jornalismo cívico hiperlocal verificável. O `ProjectProfile` do workspace continua descrevendo a tese `fonte/lead → produção → gates por digest → article-ready → publication-editor → article-published`, embora o snapshot de estado esteja desatualizado frente à operação corrente e esse drift continue sob `franklinbaldo/workspace#20`.

A face pública explica o produto primeiro e deixa metodologia, fontes e correções como informação progressiva de confiança. O pipeline editorial continua independente do frontend; GitHub Actions do repositório público servem apenas à validação da superfície, não à decisão editorial nem à publicação de matérias.

**Gap [fato]:** a capa populada demonstra como metadados e fontes podem ficar subordinados à leitura, mas ainda não existe uma matéria renderizada que prove como proveniência, contexto e correção convivem com leitura longa. Esse é o escopo de #2.

## D3 — por conta própria

A superfície prova HTML estático público e conteúdo licenciado sob CC BY 4.0. Não há, para a edição vazia atual, dataset, API, bundle de evidência ou outro artefato jornalístico independente publicado que deva ser prometido ao leitor.

**Gap [fato]:** nenhum gap material contabilizado nesta dimensão. Não inferir reutilização a partir do corpus privado, drafts, gates intermediários ou capacidades futuras.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-08-30`. #7 foi mergeada como `d2d72648f75d0c7c22b8ef3f132e7693ba2247ce`; `build`, `deploy` e `report-build-status` passaram no merge SHA. A rota pública continua no estado vazio real.
- **Deploy/publicação canônica** — `last_verified: 2026-08-30`. Frontend e redação continuam separados: mudanças de superfície evoluem independentemente; matérias só entram pelo boundary editorial governado.
- **Captura visual** — `last_verified: 2026-08-30`. O workflow agora roda em PR e em push para `main`, captura `/` e o preview localhost-only em Chromium, desktop 1280×900 e mobile 390×844. Pós-merge #7: run `33328448256`, artifact `public-surface-capture` id `9736929020`, digest `sha256:5aaccdc2563d1087368d63976de958b76f564511f1a9b387586d64385e495748`.
- **Smoke tests** — `last_verified: 2026-08-30`. O script sobe a árvore estática via `python -m http.server`, exige resposta HTTP da home e falha se as quatro capturas esperadas não forem produzidas. Isso é validação da face pública, não parte da arquitetura editorial.
- **Preservação/Wayback** — `last_verified: 2026-08-30`. Nenhum checkpoint Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

- [Hierarquia editorial de capa sem fixture pública](../concepts/editorial-cover-hierarchy.md) — o consumer exercita o mesmo renderer com fixture somente local, produz evidência visual e mantém produção vazia. Ainda é conceito de um único consumer.
- A direção local continua oferecendo evidência para `#409` (gramática de capa editorial), `#410` (estado vazio editorial) e `#411` (confiança progressiva). Nenhuma foi promovida.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — separação, tipografia e ritmo fazem o trabalho que antes cabia a caixas de dashboard.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — a capa populada usa manchete, secundárias e briefs em vez de cards homogêneos.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — a identidade jornalística permanece local.
- [Provenance and freshness](../patterns/provenance-freshness.md) — fonte e metodologia permanecem recuperáveis; a próxima pressão é testá-las numa matéria individual.

## Histórico

- 2026-08-30 — #7 merge `d2d72648`: capa populada comprovada com preview localhost-only e recaptura desktop/mobile pós-merge; produção continua vazia.
- 2026-08-30 — #5 merge `9fb7bcf`: captura visual reproduzível desktop/mobile passa em Chromium e fecha #4.
- 2026-08-30 — #1 merge `d631a58e`: home passa de dashboard/protótipo para capa editorial de jornal local sem matérias fabricadas.
- 2026-08-30 — matéria-fixture antiga e índices auxiliares removidos da face pública.
- 2026-08-30 — #409/#410/#411 abertas no Cobogó como pesquisa, sem promoção de pattern.
