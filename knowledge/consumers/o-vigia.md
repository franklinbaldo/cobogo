---
type: ConsumerCard
repo: franklinbaldo/ovigia-redacao
site: https://ovigialocal.github.io/
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# O Vigia

## Identidade local

Preservar a identidade de jornal local independente de Porto Velho: texto e hierarquia editorial como estrutura principal, ritmo de leitura mais aberto que superfícies administrativas, voz jornalística própria e confiança apresentada em camadas. Cobogó não deve transformar O Vigia em dashboard nem impor uma skin compartilhada.

## D1 — no site

A home pública se apresenta como jornal local de Porto Velho e organiza notícia principal, destaques, próximos marcos, serviço e editorias sem esconder a ação básica de ler. A captura pós-cutover Astro em `390×844` e desktop mantém busca, manchetes, links `Ver mais` e navegação editorial reconhecíveis.

Em 2 de setembro a superfície já estava operando sobre o novo renderer Astro e publicando novas matérias, inclusive a apuração sobre a prorrogação do Refis. O commit público `8ff2a2b24573820d53cb2da3a0c9dbab75a2130f` foi capturado em desktop/mobile e o commit seguinte `bd70608e7ea359a6163a8fd4dbaf08dcfc6d2d71` apenas acrescentou o evento de confirmação da mesma publicação.

**Gap [fato]:** nenhum gap material de D1 observado. A tarefa editorial principal permanece evidente no desktop e no viewport estreito.

## D2 — por trás

O projeto é jornalismo cívico hiperlocal verificável. A própria superfície explica a proposta editorial (`Notícias da cidade, com a fonte à vista`) e expõe `Como apuramos`, correções e proveniência progressiva. A página de metodologia distingue fato, cálculo/derivação, inferência e incerteza e explica por que fonte oficial não é sinônimo de verdade automática.

A migração pública para Astro foi consolidada pela RFC 0002 no commit `e67929b10852bc32b2255db95976822a38da9665`; o Pages corrente usa workflow e o estado canônico público continua vindo do bundle editorial materializado no repositório de publicação.

**Gap [fato]:** nenhum material. O leitor consegue entender por que o projeto existe e como trata evidência sem precisar conhecer a Redação privada.

## D3 — por conta própria

A superfície oferece RSS, arquivo, editorias e conteúdo sob CC BY 4.0. O repositório público preserva o estado canônico das matérias e projeções estáticas; a metodologia explicita que HTML, feed, sitemap e índices derivam do mesmo bundle público. Isso permite leitura, assinatura e reutilização editorial sem depender do pipeline privado.

**Gap [fato]:** nenhum material para o contrato publicado. O site não promete API/dataset de domínio e não há motivo para inventar um.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-09-02`. `Deploy Astro to GitHub Pages` run `33592038690` concluiu `success` no SHA `bd70608e…`.
- **Deploy/publicação canônica** — `last_verified: 2026-09-02`. A publicação do Refis foi materializada em `8ff2a2b…`; `bd70608e…` adicionou apenas o evento de confirmação, sem alterar a superfície renderizada.
- **Captura visual** — `last_verified: 2026-09-02`. `Visual capture` run `33591874609` produziu artifact `9832060693` no SHA `8ff2a2b…`, com home, matéria, metodologia, arquivo, correções, editorias e territórios em desktop e mobile.
- **Smoke/contract tests** — `last_verified: 2026-09-02`. O repositório mantém `astro-contract.yml` e o deploy Astro corrente está verde.
- **Preservação/Wayback** — `last_verified: 2026-08-31`. Nenhum novo checkpoint Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

- [Hierarquia editorial de capa sem fixture pública](../concepts/editorial-cover-hierarchy.md) — notícia real variável continua cabendo numa capa editorial expressiva sem virar coleção homogênea de cards.
- [Leitura primeiro, confiança progressiva](../concepts/reading-first-article-trust.md) — fonte, proveniência, correções e metodologia permanecem alcançáveis sem competir com a leitura longa.
- A nova captura Astro reforça esses conceitos como evidência local. Pelo modelo opinionado vigente, um consumer já pode sustentar recomendação/experimento; evidência em outros contexts determina maturidade adicional e eventual `stable`, não autorização para formular a opinião.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — separação, medida e tipografia estruturam a leitura sem empilhar caixas.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — manchete, secundárias, briefs, agenda e editorias repetem relações sem repetirem o mesmo módulo visual.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — a identidade jornalística permanece local.

## Histórico

- 2026-09-02 — cutover Astro consolidado; captura multi-rota desktop/mobile do novo renderer e primeiro `SurfaceQualityAssessment` opinionado.
- 2026-09-01 — publicação passa de caso unitário a sequência observável com Pages verde.
- 2026-08-31 — primeira matéria real materializada; publicação confirmada com Pages e captura visual verdes.
- 2026-08-31 — contrato do publicador independente integrado ao repo público.
- 2026-08-30 — template de matéria e confiança progressiva comprovados em desktop/mobile.
