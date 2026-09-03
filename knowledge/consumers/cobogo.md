---
type: ConsumerCard
repo: franklinbaldo/cobogo
site: https://franklinbaldo.github.io/cobogo/
status: active
last_reviewed: 2026-09-03
gap_score: 0
---

# Cobogó

## Identidade local

Cobogó é o sistema de design e conhecimento de superfície do portfólio. Preservar a gramática brasileira como relação operacional — vão, ritmo, materialidade, tipografia, evidência e parentesco sem uniformidade — sem transformar o site de referência numa skin obrigatória. O site pode ter identidade própria de referência; tokens e escolhas concretas dele não viram core por dogfood.

## D1 — no site

A superfície pública em `https://franklinbaldo.github.io/cobogo/` oferece home, Grammar, Core, Patterns, Consumers e Knowledge como caminhos complementares para compreender e usar o sistema. A #452 passou a observar todas essas rotas em desktop e `390×844` e a repetir a observação depois do deploy.

**Problema material D1:** nenhum comprovado na avaliação de 2026-09-03.

## D2 — por trás

README, corpus OKF, documentação operacional e as divisões públicas entre Grammar/Core/Patterns/Consumers explicam a tese de gramática compartilhada sem aparência uniforme e permitem reconstruir por que uma regra existe. A projeção web continua separada do corpus canônico de knowledge.

**Problema material D2:** nenhum comprovado na avaliação de 2026-09-03.

## D3 — por conta própria

O repositório publica CSS, entry points, componentes, exemplos e corpus reutilizáveis diretamente. A página Knowledge expõe comandos reais para consultar o corpus com `okf-parser`, e o README distingue a API atualmente embarcada da API-alvo durante a migração.

**Problema material D3:** nenhum comprovado na avaliação de 2026-09-03.

## Avaliação de qualidade

- **2026-09-03: 24/24 — faixa de referência.** Clareza 4, Explicabilidade 4, Autonomia 4, UX 4, UI 4 e Confiança 4.
- Confiança sobe de 3 para 4 porque a #454 transformou a lacuna anterior em prova reproduzível: as seis rotas principais passam por axe, navegação real com `Tab` e verificação de foco perceptível, e o mesmo contrato foi repetido em `main` no commit realmente incorporado. A nota descreve as rotas e estados observados; não afirma perfeição universal de acessibilidade.

## Capacidades de superfície

- **Pages/site de referência** — `last_verified: 2026-09-03`. A #454 foi incorporada como `9d656e45d7a596e4bf4a6b7628583db32882c81e`; Deploy to GitHub Pages run `33799935642` concluiu com sucesso no mesmo commit.
- **Build/CI** — `last_verified: 2026-09-03`. Antes do merge da #454, CI, Knowledge, Greenfield visual preview e `GitGuardian Security Checks` ficaram verdes no commit atual da branch `8910488990415d0c4c0d78517b9b83a876a1bf3b`; depois do merge, CI e Knowledge repetiram a validação em `main`.
- **Observação visual publicada** — `last_verified: 2026-09-03`. O job `verify-published-surface` do run `33799935642` abriu a URL pública depois do deploy e produziu o arquivo `9910703829`, ligado a `9d656e45...`.
- **Acessibilidade semântica e teclado** — `last_verified: 2026-09-03`. A #454 adicionou Playwright + axe e navegação real por `Tab` nas seis rotas principais. O arquivo da branch `9908482256` e o arquivo de `main` `9910687966` registram HTTP 200, nenhuma violação séria/crítica do axe e nenhuma falha de teclado/foco. O teste reprova quando um controle esperado não é alcançado ou quando o foco não tem indicador perceptível.
- **Responsividade** — `last_verified: 2026-09-03`. A correção da #452 permanece verde; as seis rotas móveis não alargam a página além de 390 px.
- **Movimento reduzido** — `last_verified: 2026-09-03`. A verificação de `prefers-reduced-motion` continua verde junto da capacidade visual.
- **Smoke/self-conformance** — `last_verified: 2026-09-03`. O corpus continua passando pelo workflow Knowledge/OKF. A #407 permanece dívida independente e não é reinterpretada como problema desta superfície publicada.
- **Preservação** — `last_verified: 2026-09-03`. Nenhum Save Page Now novo foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

Por ser o próprio projeto de referência, o dogfood consegue testar uma recomendação contra o lugar em que ela é formulada. A #454 reforça esse papel: o Cobogó não apenas escreveu que semântica, teclado e foco deveriam ser defaults; implementou uma referência executável, encontrou e corrigiu dois defeitos do próprio instrumento de medição e só promoveu a recomendação depois de uma execução válida em branch e `main`.

## Padrões do Cobogó em uso

- `Parentesco sem uniformidade` — o tema local do site não é core.
- `visual-evidence-as-quality-gate` — **stable**; build verde não substitui observação no navegador ligada ao commit real e, quando a mudança é publicada, à página realmente publicada.
- `responsive-by-contract` — **stable**; conteúdo técnico longo pode rolar dentro da própria região sem alargar o documento inteiro.
- `semantic-accessibility-default` — **validated**; isto é, já funcionou em pelo menos um projeto real. Ainda precisa convergir em um segundo projeto para se tornar `stable`.
- Membership corrente e evidência de promoção são fail-closed: repositório inexistente não sustenta consumer, pattern ou contagem atual.
- Configuração ≠ execução ≠ publicação ≠ observação ≠ adoção — distinção preservada no ProjectProfile e exercitada pelo próprio site.

## Histórico

- 2026-09-03 — #454 mergeada em `9d656e45`: seis rotas passam por contrato de acessibilidade com axe, `Tab` real e foco perceptível; a prova se repete em `main`, Pages publica o mesmo commit e Confiança sobe para 4/4, fechando avaliação em 24/24.
- 2026-09-03 — #452 mergeada em `62c0a6d7`: seis rotas passam a ser observadas em desktop e celular; `/knowledge/` deixa de alargar a página; Pages e observação posterior à publicação verdes; primeira avaliação completa fecha em 23/24.
- 2026-09-01 — #414 mergeada em `0ca302f2`: corpus vivo reconciliado com `ConsumerCard(repo)` e specs normativas para `Concept`, `ConsumerCard` e `RoundReport`; CI, Knowledge, preview e Pages verdes.
- 2026-08-31 — limpeza removeu documentação corrente e patterns sustentados por repositórios confirmados como inexistentes.
- 2026-08-31 — #407 reaplicada sobre `main` no head `612f7f24`; CI fresco reproduziu 65/152 falhas, mantendo o bloqueio sem enfraquecer o gate.
- 2026-08-30 — #412 mergeada em `9c3aa709`: README passa a explicitar gramática compartilhada com identidade local; Pages verde.
- 2026-08-18 — Core Web CSS API registrada como estável após adoções externas independentes em CausaGanha e Ficha.
