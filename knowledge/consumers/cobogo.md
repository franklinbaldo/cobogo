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

- **2026-09-03: 23/24 — faixa de referência.** Clareza 4, Explicabilidade 4, Autonomia 4, UX 4, UI 4 e Confiança 3.
- A principal razão para Confiança permanecer 3 é ausência de comprovação ampla de navegação por teclado, foco visível, contraste e semântica de leitor de tela em todos os estados. Não foi observado um defeito concreto que justificasse issue genérica apenas para perseguir 24/24.

## Capacidades de superfície

- **Pages/site de referência** — `last_verified: 2026-09-03`. A #452 foi incorporada como `62c0a6d7de65b9f36e08026577863f835ef3f518`; Deploy to GitHub Pages run `33782326908` concluiu com sucesso no mesmo commit.
- **Build/CI** — `last_verified: 2026-09-03`. Antes do merge da #452, CI, Knowledge, Greenfield visual preview e `GitGuardian Security Checks` ficaram verdes no commit atual da branch `e13434d3731d508c0a3400d0ac510b056cd9846f`.
- **Observação visual publicada** — `last_verified: 2026-09-03`. O job `verify-published-surface` do run `33782326908` abriu a URL pública depois do deploy e produziu o arquivo `9904110705`, ligado a `62c0a6d7...`. O `evidence.json` registra `phase: published`, HTTP 200 e largura igual ao viewport nas seis rotas tanto em 1600 px quanto em 390 px.
- **Responsividade** — `last_verified: 2026-09-03`. A primeira execução da #452 encontrou `/knowledge/` com 1036 px em uma janela de 390 px. A correção contém o bloco técnico localmente; depois da publicação, todas as seis rotas móveis medem exatamente 390 px.
- **Movimento reduzido** — `last_verified: 2026-09-03`. A verificação de `prefers-reduced-motion` continua verde na capacidade visual da #452.
- **Smoke/self-conformance** — `last_verified: 2026-09-03`. O corpus continua passando pelo workflow Knowledge/OKF. A #407 permanece dívida independente e não é reinterpretada como problema desta superfície publicada.
- **Preservação** — `last_verified: 2026-09-03`. Nenhum Save Page Now novo foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

Por ser o próprio projeto de referência, o dogfood consegue testar uma recomendação contra o lugar em que ela é formulada. A #452 mostrou um caso útil: a regra de evidência visual não ficou só como cobrança downstream; aplicada ao próprio site, encontrou um defeito responsivo real em `/knowledge/` e obrigou a rotina a distinguir build local de página efetivamente publicada.

## Padrões do Cobogó em uso

- `Parentesco sem uniformidade` — o tema local do site não é core.
- `visual-evidence-as-quality-gate` — **stable**; build verde não substitui observação no navegador ligada ao commit real e, quando a mudança é publicada, à página realmente publicada.
- `responsive-by-contract` — **stable**; conteúdo técnico longo pode rolar dentro da própria região sem alargar o documento inteiro.
- Membership corrente e evidência de promoção são fail-closed: repositório inexistente não sustenta consumer, pattern ou contagem atual.
- Configuração ≠ execução ≠ publicação ≠ observação ≠ adoção — distinção preservada no ProjectProfile e agora exercitada pelo próprio site.

## Histórico

- 2026-09-03 — #452 mergeada em `62c0a6d7`: seis rotas passam a ser observadas em desktop e celular; `/knowledge/` deixa de alargar a página; Pages e observação posterior à publicação verdes; primeira avaliação completa fecha em 23/24.
- 2026-09-01 — #414 mergeada em `0ca302f2`: corpus vivo reconciliado com `ConsumerCard(repo)` e specs normativas para `Concept`, `ConsumerCard` e `RoundReport`; CI, Knowledge, preview e Pages verdes.
- 2026-08-31 — limpeza removeu documentação corrente e patterns sustentados por repositórios confirmados como inexistentes.
- 2026-08-31 — #407 reaplicada sobre `main` no head `612f7f24`; CI fresco reproduziu 65/152 falhas, mantendo o bloqueio sem enfraquecer o gate.
- 2026-08-30 — #412 mergeada em `9c3aa709`: README passa a explicitar gramática compartilhada com identidade local; Pages verde.
- 2026-08-18 — Core Web CSS API registrada como estável após adoções externas independentes em CausaGanha e Ficha.
