---
type: ConsumerCard
repo: franklinbaldo/cobogo
site: https://franklinbaldo.github.io/cobogo/
status: active
last_reviewed: 2026-09-01
gap_score: 0
---

# Cobogó

## Identidade local

Cobogó é o sistema de design e conhecimento de superfície do portfólio. Preservar a gramática brasileira como relação operacional — vão, ritmo, materialidade, tipografia, evidência e parentesco sem uniformidade — sem transformar o site de referência numa skin obrigatória. O site pode ter identidade própria de referência; tokens e escolhas concretas dele não viram core por dogfood.

## D1 — no site

A configuração Astro prova uma superfície pública em `https://franklinbaldo.github.io/cobogo/`, sob base `/cobogo`, com documentação, specimens e busca. O próprio projeto consome capacidades estáveis quando aplicáveis e mantém a projeção web separada do corpus canônico de knowledge.

**Gap [fato]:** nenhum gap D1 material comprovado nesta rodada.

## D2 — por trás

O `ProjectProfile` define Cobogó como sistema de design e conhecimento evoluído por evidência real de consumers, no qual relações compartilhadas devem permanecer menores que implementações e preservar identidade local. A #414 reconciliou a autoridade corrente do corpus após a remoção de repositórios inexistentes: relações tipadas agora usam `ConsumerCard(repo)` e os tipos `Concept`, `ConsumerCard` e `RoundReport` têm specs normativas explícitas.

**Gap [fato]:** nenhum gap D2 material restante. O corpus corrente não depende mais da identidade relacional legada `consumer(title)` para esses vínculos.

## D3 — por conta própria

O repositório publica CSS e componentes consumíveis por instalação Git, além da documentação de entry points (`cobogo/core`, `cobogo/styles`, componentes Svelte) e do site de referência. O README distingue a API atualmente embarcada da API-alvo durante a migração.

**Gap [fato]:** nenhum gap D3 material comprovado nesta rodada.

## Capacidades de superfície

- **Pages/site de referência** — `last_verified: 2026-09-01`. #414 foi mergeada em `0ca302f25d9760f0fd223eefd879b31c0202f2d7`; Deploy to GitHub Pages run `33468305623` concluiu com sucesso no mesmo SHA.
- **Build/CI** — `last_verified: 2026-09-01`. A #414 passou CI run `33468183582` no head exato `36861c12a82da1f4b13021136d2496ce37ef197d`; `Knowledge` run `33468183576` e Greenfield visual preview `33468183598` também ficaram verdes antes do merge.
- **Captura visual** — `last_verified: 2026-09-01`. Greenfield visual preview run `33468183598` passou no head da #414; a mudança da rodada foi semântica/documental e não alterou uma superfície visual de consumer, portanto não gerou par before/after causal novo.
- **Smoke/self-conformance** — `last_verified: 2026-09-01`. O gate normativo do knowledge agora cobre explicitamente `Concept`, `ConsumerCard` e `RoundReport`. A #407 continua dívida independente: segue aberta no head `612f7f247cdbfc40b0cf8e0292fbb50d9f39999e` e não está mergeável.
- **Preservação** — `last_verified: 2026-09-01`. Nenhum Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

Por ser o próprio projeto de referência, o dogfood torna incompatibilidades entre contrato estável e expectativas legadas observáveis. Nesta rodada, a limpeza de consumers inexistentes revelou que membership corrente, schema relacional e specs normativas precisam convergir: remover cards sem remover autoridade derivada ou atualizar tipos sem specs deixa o corpus formalmente inconsistente.

## Padrões do Cobogó em uso

- `Parentesco sem uniformidade` — o tema local do site não é core.
- Membership corrente e evidência de promoção são fail-closed: repositório inexistente não sustenta consumer, pattern ou contagem atual.
- Gates de evidência medem contratos relevantes, não detalhes incidentais.
- Configuração ≠ execução ≠ publicação ≠ captura ≠ adoção — distinção preservada no ProjectProfile.

## Histórico

- 2026-09-01 — #414 mergeada em `0ca302f2`: corpus vivo reconciliado com `ConsumerCard(repo)` e specs normativas para `Concept`, `ConsumerCard` e `RoundReport`; CI, Knowledge, preview e Pages verdes.
- 2026-08-31 — limpeza removeu documentação corrente e patterns sustentados por repositórios confirmados como inexistentes.
- 2026-08-31 — #407 reaplicada sobre `main` no head `612f7f24`; CI fresco reproduziu 65/152 falhas, mantendo o bloqueio sem enfraquecer o gate.
- 2026-08-30 — #412 mergeada em `9c3aa709`: README passa a explicitar gramática compartilhada com identidade local; Pages verde.
- 2026-08-18 — Core Web CSS API registrada como estável após adoções externas independentes em CausaGanha e Ficha.
