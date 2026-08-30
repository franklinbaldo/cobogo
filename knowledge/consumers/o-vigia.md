---
type: ConsumerCard
repo: franklinbaldo/ovigia-redacao
site: https://ovigialocal.github.io/
status: active
last_reviewed: 2026-08-30
gap_score: 0
---

# O Vigia

## Identidade local

Preservar a identidade de jornal local independente de Porto Velho: texto e hierarquia editorial como estrutura principal, ritmo de leitura mais aberto que superfícies administrativas, voz jornalística própria e confiança apresentada em camadas. Cobogó não deve transformar O Vigia em dashboard nem impor uma skin compartilhada.

## D1 — no site

A home pública se apresenta como jornal local de Porto Velho e assume honestamente o estado sem matérias: `O Vigia`, `Notícias da cidade, com a fonte à vista` e `Ainda não há matérias publicadas`. O leitor pode acessar metodologia e correções sem atravessar linguagem de pipeline.

O estado populado da capa é exercitado pelo mesmo renderer em preview exclusivamente localhost (`?preview=populated`). A matéria individual agora também possui uma superfície real em `/article.html`: sem conteúdo publicado, a rota informa explicitamente que não há matéria; em localhost/127.0.0.1, `?preview=article` exercita o mesmo template com conteúdo claramente demonstrativo e não publicado. A PR #10 / merge `a6cbbbbf8b31fc5b7e472813a03817293aedaeae` prova título e linha fina dominantes, corpo de leitura, retorno ao acervo e comportamento responsivo.

**Gap [fato]:** nenhum gap material de D1 atualmente demonstrável pelo repositório sem depender da primeira matéria real publicada. O próximo estado novo deve ser observado a partir de publicação factual, não fabricado para gerar atividade.

## D2 — por trás

O `ProjectProfile` vigente descreve O Vigia como jornalismo cívico hiperlocal verificável, com `article-ready` distinto de `article-published`, gates ligados ao digest e publicação static-first. A superfície pública explica o produto primeiro e mantém metodologia, fontes e correções como confiança progressiva.

O template de matéria mostra como proveniência e correções convivem com leitura longa: no desktop, confiança ocupa coluna secundária; no mobile, volta ao fluxo; a fonte abre por divulgação progressiva e correções continuam visíveis. A RFC pública #8 sobre agente independente de publicação permanece aberta e não é tratada aqui como contrato integrado.

**Gap [fato]:** nenhum gap material de D2 atualmente demonstrável na superfície. Quando existir uma publicação real, será necessário verificar se o vínculo factual entre conteúdo publicado, fontes e correções preserva esta composição.

## D3 — por conta própria

A superfície prova HTML estático público e conteúdo licenciado sob CC BY 4.0. Não há, para a edição vazia atual, dataset, API, bundle de evidência ou outro artefato jornalístico independente publicado que deva ser prometido ao leitor.

**Gap [fato]:** nenhum gap material contabilizado nesta dimensão. Não inferir reutilização a partir do corpus privado, drafts, gates intermediários ou capacidades futuras.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-08-30`. #10 foi mergeada como `a6cbbbbf8b31fc5b7e472813a03817293aedaeae`; `build`, `report-build-status` e `deploy` passaram no merge SHA. A home continua vazia e `/article.html` permanece uma rota pública de estado vazio até existir conteúdo real.
- **Deploy/publicação canônica** — `last_verified: 2026-08-30`. Frontend e redação continuam separados; esta rotina não considera a RFC #8 vigente enquanto ela não for integrada.
- **Captura visual** — `last_verified: 2026-08-30`. O workflow captura seis estados em Chromium, desktop 1280×900 e mobile 390×844: home pública vazia, capa populada localhost-only e matéria localhost-only. Pós-merge #10: run `33330160778`, artifact `public-surface-capture` id `9737404079`, digest `sha256:cbc0dcffcb18fb0f90c4d90020318fe3750c7e11c8f92ff4c2d06dcb84b43586`.
- **Smoke tests** — `last_verified: 2026-08-30`. O script sobe a árvore via `python -m http.server`, exige resposta HTTP da home e exige que as seis capturas sejam produzidas; a validação roda em PR e push para `main`.
- **Preservação/Wayback** — `last_verified: 2026-08-30`. Nenhum checkpoint Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

- [Hierarquia editorial de capa sem fixture pública](../concepts/editorial-cover-hierarchy.md) — o mesmo renderer é exercitado localmente sem preencher a produção com notícia inventada.
- [Leitura primeiro, confiança progressiva](../concepts/reading-first-article-trust.md) — proveniência e correções permanecem alcançáveis sem competir com a leitura longa. Ainda é conceito de um único consumer.
- A direção local continua oferecendo evidência para `#409` (gramática de capa editorial), `#410` (estado vazio editorial) e `#411` (confiança progressiva). Nenhuma foi promovida.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — separação, medida e tipografia estruturam a leitura sem empilhar caixas.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — a capa usa manchete, secundárias e briefs em vez de cards homogêneos.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — a identidade jornalística permanece local.
- [Provenance and freshness](../patterns/provenance-freshness.md) — fonte e correções permanecem recuperáveis na matéria por divulgação progressiva.

## Histórico

- 2026-08-30 — #10 merge `a6cbbbbf`: template de matéria e confiança progressiva comprovados em desktop/mobile, com preview somente local e recaptura pós-merge.
- 2026-08-30 — #7 merge `d2d72648`: capa populada comprovada com preview localhost-only; produção continua vazia.
- 2026-08-30 — #5 merge `9fb7bcf`: captura visual reproduzível desktop/mobile passa em Chromium.
- 2026-08-30 — #1 merge `d631a58e`: home passa de dashboard/protótipo para capa editorial sem matérias fabricadas.
- 2026-08-30 — matéria-fixture antiga e índices auxiliares removidos da face pública.
