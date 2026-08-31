---
type: ConsumerCard
repo: franklinbaldo/cobogo
site: https://franklinbaldo.github.io/cobogo/
status: active
last_reviewed: 2026-08-30
gap_score: 1
---

# Cobogó

## Identidade local

Cobogó é o sistema de design e conhecimento de superfície do portfólio. Preservar a gramática brasileira como relação operacional — vão, ritmo, materialidade, tipografia, evidência e parentesco sem uniformidade — sem transformar o site de referência numa skin obrigatória. O site pode ter identidade própria de referência; tokens e escolhas concretas dele não viram core por dogfood.

## D1 — no site

A configuração Astro prova uma superfície pública em `https://franklinbaldo.github.io/cobogo/`, sob base `/cobogo`, com documentação, specimens e busca. O próprio projeto consome capacidades estáveis quando aplicáveis e mantém a projeção web separada do corpus canônico de knowledge.

**Gap [fato]:** nenhum gap D1 novo comprovado nesta rodada. A captura do head da #407 passou e a PR não altera superfície visual.

## D2 — por trás

O `ProjectProfile` define Cobogó como sistema de design e conhecimento evoluído por evidência real de consumers, no qual relações compartilhadas devem permanecer menores que implementações e preservar identidade local. O core estável já tem adoções externas independentes; configuração, execução, publicação, deploy, captura e adoção são classes de evidência distintas.

**Gap [fato] — `README.md`:** o README ainda encerra seu objetivo como `Unificar a interface dos projetos`, formulação incompatível com a tese atual de parentesco sem uniformidade. O aviso de migração qualifica corretamente que boa parte da API semântica descrita é alvo futuro, mas o objetivo final continua editorialmente obsoleto.

## D3 — por conta própria

O repositório publica CSS e componentes consumíveis por instalação Git, além da documentação de entry points (`cobogo/core`, `cobogo/styles`, componentes Svelte) e do site de referência. O README distingue a API atualmente embarcada da API-alvo durante a migração.

**Gap [fato]:** nenhum gap D3 material novo comprovado nesta rodada.

## Capacidades de superfície

- **Pages/site de referência** — `last_verified: 2026-08-30`. `astro.config.mjs` fixa `site: https://franklinbaldo.github.io` e `base: /cobogo`; nenhuma mudança de deploy foi feita nesta rodada.
- **Build/CI** — `last_verified: 2026-08-30`. O `main` continua construível pelo gate existente, mas a tentativa de restaurar Vitest como gate em #407 revelou 65 testes falhando em 20 arquivos no head `32b3897335df837e0b49035ecce77d4d59fa3738`; a PR não foi mergeada.
- **Captura visual** — `last_verified: 2026-08-30`. O check `capture` da #407 passou no mesmo head; a mudança é não visual.
- **Smoke/self-conformance** — `last_verified: 2026-08-30`. #407 prova que apenas ligar a suíte antiga ao CI ainda não constitui um gate utilizável: `87/152` testes passam e `65/152` falham, concentrados em contratos legados de classes, estados de formulário e alguns comportamentos de interação.
- **Preservação** — `last_verified: 2026-08-30`. Nenhum Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

Por ser o próprio projeto de referência, o dogfood torna incompatibilidades entre contrato estável e expectativas legadas observáveis. Nesta rodada, a suíte reativada mostrou de forma concreta que self-conformance precisa distinguir contratos vigentes de testes fossilizados antes de virar gate obrigatório.

## Padrões do Cobogó em uso

- `Parentesco sem uniformidade` — o tema local do site não é core.
- Gates de evidência medem contratos relevantes, não detalhes incidentais — ainda não satisfeito pela suíte Vitest legada da #407.
- Configuração ≠ execução ≠ publicação ≠ captura ≠ adoção — distinção preservada no ProjectProfile.

## Histórico

- 2026-08-30 — #407 rebaseada mecanicamente no `main`; `capture` passou, mas `npm test` revelou 65/152 testes vermelhos e bloqueou merge.
- 2026-08-30 — card migrado para `ConsumerCard`; gap D2 registra o objetivo obsoleto `Unificar a interface dos projetos` no README.
- 2026-08-18 — Core Web CSS API registrada como estável após adoções externas independentes em CausaGanha e Ficha.
- 2026-08-18 — evidência de browser e fronteiras `configured gate != observed gate` consolidadas no corpus.
- 2026-08-10 — estado anterior do self-consumer registrado como `adopting`.
