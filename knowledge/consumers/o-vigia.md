---
type: ConsumerCard
repo: franklinbaldo/ovigia-redacao
site: https://ovigialocal.github.io/
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# O Vigia

## Identidade local

Preservar a identidade de jornal local independente de Porto Velho: texto e hierarquia editorial como estrutura principal, ritmo de leitura mais aberto que superfícies administrativas, voz jornalística própria e confiança apresentada em camadas. Cobogó não deve transformar O Vigia em dashboard nem impor uma skin compartilhada.

## D1 — no site

A home pública se apresenta como jornal local de Porto Velho e agora contém a primeira matéria real publicada. A projeção `articles.json` expõe título, resumo, data, fonte oficial e link `Ler matéria`; a matéria canônica está em `article.html?id=porto-velho-sine-vagas-2026-08-19`.

A primeira publicação é a matéria `Sine de Porto Velho tem 32 vagas para auxiliar de serviços gerais; prazo exibido vai até segunda`. O conteúdo publicado explica como se candidatar, liga para a página oficial do Sine e avisa que quantidade, requisitos e prazo devem ser conferidos novamente porque a relação muda. A composição de capa e matéria já havia sido exercitada em preview localhost-only; a publicação real de #14 passou a provar o mesmo renderer com conteúdo factual.

**Gap [fato]:** nenhum gap material de D1 demonstrado nesta rodada. A primeira publicação real torna observável o estado que antes existia apenas como preview, e a superfície deixa título, leitura, fonte e ação recuperáveis sem linguagem de pipeline.

## D2 — por trás

O projeto continua sendo jornalismo cívico hiperlocal verificável, com Redação e Publicação separadas. O contrato público do agente independente de publicação foi mergeado pela PR `ovigialocal/ovigialocal.github.io#11` em `178a467876bc4e09ef58ef5bd110408732a59230`; a primeira execução real foi materializada em `a30154c67c87380b0621807bbc1d99ff9b5f4a9b` e confirmada por evento posterior em `52be0f4cdd18fb73815ab831b6590056c2b52087`.

A matéria preserva confiança progressiva em vez de mostrar o pipeline editorial: fonte oficial é alcançável na capa e na matéria, freshness aparece no próprio texto quando material, e o histórico de publicação permanece no repositório público. O `ProjectProfile` do workspace ainda descreve o estado anterior à primeira publicação; `workspace#29` foi aberto para reconciliar essa fonte factual sem esta rotina escrevê-la diretamente.

**Gap [fato]:** nenhum gap material de D2 demonstrado na superfície. O boundary Redação → publicador independente já foi exercitado por uma publicação confirmada; a dívida restante nesta rodada é reconciliação da memória do workspace, não redesign público.

## D3 — por conta própria

Além do HTML público e do conteúdo sob CC BY 4.0 na superfície, a publicação agora produz artefatos públicos derivados no próprio repositório: Markdown canônico da matéria, `articles.json`, feed e sitemap. O `articles.json` inclui URL da matéria e URL da fonte oficial; o evento de publicação fixa `public_path`, digest do Markdown, commit público e URL confirmada.

**Gap [fato]:** nenhum gap material contabilizado nesta dimensão. Estes artefatos são publicação observável do repositório público; não inferir a partir deles acesso ao corpus privado, drafts ou gates intermediários da Redação.

## Capacidades de superfície

- **Pages/static surface** — `last_verified: 2026-08-31`. A primeira matéria foi materializada em `a30154c67c87380b0621807bbc1d99ff9b5f4a9b`; o evento de publicação foi registrado em `52be0f4cdd18fb73815ab831b6590056c2b52087`. Pages run `33439821909` concluiu `success` nesse último SHA.
- **Deploy/publicação canônica** — `last_verified: 2026-08-31`. O evento `publication/events/porto-velho-sine-vagas-2026-08-19/20260831T210838Z-published.md` registra URL confirmada, `confirmed_at: 2026-08-31T21:07:02Z`, deployment `6189595784` e conclusão `success`.
- **Captura visual** — `last_verified: 2026-08-31`. Visual capture run `33439599714` concluiu `success` no SHA de materialização `a30154c67c87380b0621807bbc1d99ff9b5f4a9b`; artifact `public-surface-capture` id `9775726065`, digest `sha256:8aefa212d11d9bfead91d819b546af2ff011432b3530e29a3a8ebf765efe671a`.
- **Smoke tests** — `last_verified: 2026-08-31`. A captura visual verde acompanha o commit que passou a carregar `articles.json` e renderizar a matéria real; nenhum regressão de superfície foi observada nesta rodada.
- **Preservação/Wayback** — `last_verified: 2026-08-31`. Nenhum checkpoint Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

- [Hierarquia editorial de capa sem fixture pública](../concepts/editorial-cover-hierarchy.md) — o mesmo renderer foi primeiro exercitado localmente e depois recebeu conteúdo governado real sem notícia fictícia em produção.
- [Leitura primeiro, confiança progressiva](../concepts/reading-first-article-trust.md) — proveniência e correções permanecem alcançáveis sem competir com a leitura longa. A primeira publicação real agora adiciona evidência factual ao mesmo conceito, ainda em um único consumer.
- A direção local continua oferecendo evidência para `#409` (gramática de capa editorial), `#410` (estado vazio editorial) e `#411` (confiança progressiva). Nenhuma foi promovida por falta do gate de dois consumers com before/after convergente.

## Padrões do Cobogó em uso

- [Vão antes de massa](../canon/vao-antes-de-massa.md) — separação, medida e tipografia estruturam a leitura sem empilhar caixas.
- [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) — a capa usa manchete, secundárias e briefs em vez de cards homogêneos.
- [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md) — a identidade jornalística permanece local.
- [Provenance and freshness](../patterns/provenance-freshness.md) — fonte oficial e freshness material permanecem recuperáveis na publicação real.

## Histórico

- 2026-08-31 — #14 materializa a primeira matéria real em `a30154c67`; publicação confirmada por evento `52be0f4cdd`, Pages e captura visual verdes.
- 2026-08-31 — #11 merge `178a4678`: contrato do publicador independente integrado ao repo público.
- 2026-08-30 — #10 merge `a6cbbbbf`: template de matéria e confiança progressiva comprovados em desktop/mobile, com preview somente local.
- 2026-08-30 — #7 merge `d2d72648`: capa populada comprovada com preview localhost-only; produção ainda vazia naquele momento.
- 2026-08-30 — #5/#1 estabelecem captura visual reproduzível e capa editorial sem matéria fabricada.
