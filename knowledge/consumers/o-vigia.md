---
type: ConsumerCard
repo: franklinbaldo/ovigia-redacao
site: https://ovigialocal.github.io/
status: active
last_reviewed: 2026-09-01
gap_score: 0
---

# O Vigia

## Identidade local

Preservar a identidade de jornal local independente de Porto Velho: texto e hierarquia editorial como estrutura principal, ritmo de leitura mais aberto que superfícies administrativas, voz jornalística própria e confiança apresentada em camadas. Cobogó não deve transformar O Vigia em dashboard nem impor uma skin compartilhada.

## D1 — no site

A home pública se apresenta como jornal local de Porto Velho e já contém uma sequência de matérias reais publicadas. A projeção `articles.json` expõe título, resumo, data, fonte oficial e link `Ler matéria`; em 1º de setembro a superfície passou a incluir, entre outras, matérias de serviço sobre ITR 2026, saque calamidade do FGTS e uma nova apuração das vagas do Sine Municipal.

A publicação mais recente observada nesta rodada é `Sine de Porto Velho exibe 17 vagas com prazo até 8 e 10 de setembro`, materializada no commit público `683bfa54505d11aa79d9cd761744bc857a5cffd1` e seguida pelo evento de confirmação `a6eda5067b4c05cceb757d9c3f062eb5d3d75166`. O conteúdo explica como concorrer e distingue vagas com prazo futuro de anúncios vencidos ainda visíveis na fonte oficial.

**Gap [fato]:** nenhum gap material de D1 demonstrado nesta rodada. A superfície deixa leitura, fonte, prazo e ação recuperáveis sem linguagem de pipeline; a passagem de uma matéria isolada para uma publicação recorrente não exige nova gramática visual por si só.

## D2 — por trás

O projeto continua sendo jornalismo cívico hiperlocal verificável, com Redação e Publicação separadas. O contrato público do agente independente de publicação foi mergeado pela PR `ovigialocal/ovigialocal.github.io#11` em `178a467876bc4e09ef58ef5bd110408732a59230`; a fronteira já foi exercitada repetidamente por publicações confirmadas no repositório público.

As matérias preservam confiança progressiva em vez de mostrar o pipeline editorial: fonte oficial é alcançável na capa e na matéria, freshness aparece no próprio texto quando material, e o histórico de publicação permanece no repositório público. O `ProjectProfile` do workspace ainda descreve o estado anterior à primeira publicação; `workspace#29` permanece o destino correto dessa reconciliação e recebeu nesta rodada evidência das publicações de 1º de setembro.

**Gap [fato]:** nenhum gap material de D2 demonstrado na superfície. O boundary Redação → publicador independente já deixou de ser demonstração unitária e passou a ter repetição observável; a dívida restante é memória factual do workspace, não redesign público.

## D3 — por conta própria

Além do HTML público e do conteúdo sob CC BY 4.0 na superfície, a publicação produz artefatos públicos derivados no próprio repositório: Markdown canônico das matérias, `articles.json`, feed e sitemap. O `articles.json` inclui URL da matéria e URL da fonte oficial; eventos de publicação fixam identidade do artefato, commit público e confirmação de deploy quando concluído.

**Gap [fato]:** nenhum gap material contabilizado nesta dimensão. Estes artefatos são publicação observável do repositório público; não inferir a partir deles acesso ao corpus privado, drafts ou gates intermediários da Redação.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-09-01`. O commit `a6eda5067b4c05cceb757d9c3f062eb5d3d75166` registra a confirmação da nova publicação do Sine; Pages run `33488142623` concluiu `success` nesse mesmo SHA.
- **Deploy/publicação canônica** — `last_verified: 2026-09-01`. O repositório público materializou em 1º de setembro matérias de ITR, saque calamidade e nova apuração do Sine; a publicação do Sine foi seguida por commit explícito de confirmação de deployment.
- **Captura visual** — `last_verified: 2026-08-31`. Visual capture run `33439599714` concluiu `success` no SHA de materialização da primeira matéria real; nenhuma nova mudança de composição foi identificada nesta rodada que justificasse tratar conteúdo novo como nova evidência de pattern visual.
- **Smoke tests** — `last_verified: 2026-09-01`. Pages está verde no head público corrente; nenhuma regressão de superfície foi observada a partir dos sinais de deploy desta rodada.
- **Preservação/Wayback** — `last_verified: 2026-08-31`. Nenhum checkpoint Save Page Now adicional foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

- [Hierarquia editorial de capa sem fixture pública](../concepts/editorial-cover-hierarchy.md) — o mesmo renderer foi primeiro exercitado localmente e depois recebeu conteúdo governado real sem notícia fictícia em produção; a sequência de novas matérias mostra que a composição continua útil sob conteúdo factual variável.
- [Leitura primeiro, confiança progressiva](../concepts/reading-first-article-trust.md) — proveniência e correções permanecem alcançáveis sem competir com a leitura longa. A repetição de publicações reais reforça a solução local, ainda sem satisfazer sozinha o gate de promoção compartilhada.
- A direção local continua oferecendo evidência para `#409` (gramática de capa editorial), `#410` (estado vazio editorial) e `#411` (confiança progressiva). Nenhuma foi promovida por falta do gate de dois consumers com before/after convergente.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — separação, medida e tipografia estruturam a leitura sem empilhar caixas.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — a capa usa manchete, secundárias e briefs em vez de cards homogêneos.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — a identidade jornalística permanece local.

## Histórico

- 2026-09-01 — publicação passa de caso unitário a sequência observável; ITR, saque calamidade e nova apuração do Sine entram no repositório público, com Pages verde em `a6eda506`.
- 2026-08-31 — #14 materializa a primeira matéria real em `a30154c67`; publicação confirmada por evento `52be0f4cdd`, Pages e captura visual verdes.
- 2026-08-31 — #11 merge `178a4678`: contrato do publicador independente integrado ao repo público.
- 2026-08-30 — #10 merge `a6cbbbbf`: template de matéria e confiança progressiva comprovados em desktop/mobile, com preview somente local.
- 2026-08-30 — #7/#5/#1 estabelecem capa, captura visual reproduzível e publicação sem fixture factual em produção.
