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

A home pública agora se apresenta como jornal local de Porto Velho e assume honestamente o estado sem matérias: `O Vigia`, `Notícias da cidade, com a fonte à vista` e `Ainda não há matérias publicadas`. O leitor pode acessar metodologia e correções sem atravessar linguagem de pipeline. A matéria-fixture antiga e seus índices auxiliares foram removidos; a mudança editorial da home entrou por `ovigialocal/ovigialocal.github.io#1`.

**Gap [fato] — `/`:** ainda não existe evidência renderizada do estado populado da capa nem template editorial de matéria para conteúdo real. `ovigialocal/ovigialocal.github.io#2` e `#3` são os trabalhos locais abertos para essas superfícies; não preencher o vazio com notícia inventada.

## D2 — por trás

O Vigia é uma redação de jornalismo cívico hiperlocal verificável. O `ProjectProfile` do workspace continua descrevendo a tese `fonte/lead → produção → gates por digest → article-ready → publication-editor → article-published`, embora o snapshot de estado esteja desatualizado frente à operação corrente e esse drift continue sob `franklinbaldo/workspace#20`.

A face pública passou a explicar o produto primeiro e deixa metodologia, fontes e correções como informação progressiva de confiança. O pipeline editorial continua independente do frontend; GitHub Actions do repositório público servem apenas à validação da superfície, não à decisão editorial nem à publicação de matérias.

**Gap [fato]:** a home deixa claro o compromisso com fontes e correções, mas ainda não demonstra em uma matéria real como proveniência, contexto e correção convivem com leitura jornalística. Esse gap só pode ser avaliado quando o template de matéria for exercitado sem fabricar publicação.

## D3 — por conta própria

A superfície prova HTML estático público e conteúdo licenciado sob CC BY 4.0. Não há, para a edição vazia atual, dataset, API, bundle de evidência ou outro artefato jornalístico independente publicado que deva ser prometido ao leitor.

**Gap [fato]:** nenhum gap material contabilizado nesta dimensão. Não inferir reutilização a partir do corpus privado, drafts, gates intermediários ou capacidades futuras.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-08-30`. `ovigialocal/ovigialocal.github.io#1` foi mergeada; a árvore pública em `main` deixou de conter a matéria-fixture e passou a home editorial. O merge subsequente da captura é `9fb7bcf14c3100f1d8200622b5deae26d5203813`.
- **Deploy/publicação canônica** — `last_verified: 2026-08-30`. A superfície pública e a redação continuam separadas: mudanças de frontend podem evoluir independentemente; matérias só entram pelo boundary editorial governado.
- **Captura visual** — `last_verified: 2026-08-30`. `ovigialocal/ovigialocal.github.io#5` adicionou `scripts/capture-public-surface.sh` + workflow `Visual capture`. O head `262eeeab14c0148fa0be829f27c6a4b1880c2c7a` passou o run `33326948161`, capturando `/` em Chromium 1280×900 e 390×844 e publicando o artifact `public-surface-capture` id `9736511326`, digest `sha256:d4aa189d7e4f4d36b5887b047c8acc551a05cdc2aba3fa08b074fe7ca63604f7`.
- **Smoke tests** — `last_verified: 2026-08-30`. O mesmo script sobe a árvore estática via `python -m http.server`, exige resposta HTTP da home e falha se a captura não for produzida. Isso é validação da face pública, não parte da arquitetura editorial.
- **Preservação/Wayback** — `last_verified: 2026-08-30`. Nenhum checkpoint Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

A nova direção local oferece evidência para três hipóteses de pesquisa já abertas no Cobogó: `#409` (gramática de capa editorial), `#410` (estado vazio editorial) e `#411` (confiança progressiva). Nenhuma foi promovida: ainda falta evidência convergente e capturas antes/depois em outro consumer.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — separação, tipografia e ritmo fazem o trabalho que antes cabia a caixas de dashboard.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — a futura capa deve permitir hierarquia editorial em vez de cards homogêneos.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — a identidade jornalística permanece local.
- [Provenance and freshness](../patterns/provenance-freshness.md) — fonte e metodologia permanecem recuperáveis, mas a apresentação editorial ainda precisa ser testada numa matéria real.

## Histórico

- 2026-08-30 — #5 merge `9fb7bcf`: captura visual reproduzível desktop/mobile passa em Chromium e fecha #4.
- 2026-08-30 — #1 merge `d631a58e`: home passa de dashboard/protótipo para capa editorial de jornal local sem matérias fabricadas.
- 2026-08-30 — matéria-fixture antiga, `articles.json`, item RSS e sitemap correspondente removidos da face pública.
- 2026-08-30 — #409/#410/#411 abertas no Cobogó como pesquisa, sem promoção de pattern.
- 2026-08-30 — ProjectProfile do workspace permanece snapshot de 24/08; drift continua rastreado em workspace#20.
