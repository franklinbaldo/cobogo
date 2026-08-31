---
type: ConsumerCard
repo: franklinbaldo/cobogo
site: https://franklinbaldo.github.io/cobogo/
status: active
last_reviewed: 2026-08-30
gap_score: 0
---

# Cobogó

## Identidade local

Cobogó é o sistema de design e conhecimento de superfície do portfólio. Preservar a gramática brasileira como relação operacional — vão, ritmo, materialidade, tipografia, evidência e parentesco sem uniformidade — sem transformar o site de referência numa skin obrigatória. O site pode ter identidade própria de referência; tokens e escolhas concretas dele não viram core por dogfood.

## D1 — no site

A configuração Astro prova uma superfície pública em `https://franklinbaldo.github.io/cobogo/`, sob base `/cobogo`, com documentação, specimens e busca. O próprio projeto consome capacidades estáveis quando aplicáveis e mantém a projeção web separada do corpus canônico de knowledge.

**Gap [fato]:** nenhum gap D1 material comprovado nesta rodada.

## D2 — por trás

O `ProjectProfile` define Cobogó como sistema de design e conhecimento evoluído por evidência real de consumers, no qual relações compartilhadas devem permanecer menores que implementações e preservar identidade local. O README foi reconciliado na #412: agora diz que Cobogó compartilha gramática, padrões e conhecimento aprendidos em uso real sem transformar projetos diferentes em uma única interface, preservando identidade, densidade e hierarquia locais.

**Gap [fato]:** nenhum gap D2 material restante após #412.

## D3 — por conta própria

O repositório publica CSS e componentes consumíveis por instalação Git, além da documentação de entry points (`cobogo/core`, `cobogo/styles`, componentes Svelte) e do site de referência. O README distingue a API atualmente embarcada da API-alvo durante a migração.

**Gap [fato]:** nenhum gap D3 material comprovado nesta rodada.

## Capacidades de superfície

- **Pages/site de referência** — `last_verified: 2026-08-30`. #412 foi mergeada em `9c3aa709135031a68e5e6c562bd53a7b41f13355`; Deploy to GitHub Pages run `33352768862` teve build e deploy verdes no mesmo SHA.
- **Build/CI** — `last_verified: 2026-08-30`. #412 passou CI run `33352690955` no head `b21b80310c3e7db8aa7933d9eb17ef1eb96c0ca2`. A tentativa separada de restaurar Vitest como gate em #407 continua bloqueada por 65 testes falhando em 20 arquivos.
- **Captura visual** — `last_verified: 2026-08-30`. #412 passou Greenfield visual preview run `33352690970`; a mudança é documental e não visualmente material.
- **Smoke/self-conformance** — `last_verified: 2026-08-30`. #407 continua provando que apenas ligar a suíte antiga ao CI ainda não constitui gate utilizável: 87/152 testes passam e 65/152 falham.
- **Preservação** — `last_verified: 2026-08-30`. Nenhum Save Page Now foi verificado nesta rodada.

## O que este consumer faz melhor que o Cobogó

Por ser o próprio projeto de referência, o dogfood torna incompatibilidades entre contrato estável e expectativas legadas observáveis. A suíte reativada mostrou de forma concreta que self-conformance precisa distinguir contratos vigentes de testes fossilizados antes de virar gate obrigatório.

## Padrões do Cobogó em uso

- `Parentesco sem uniformidade` — agora explicitado também no README; o tema local do site não é core.
- Gates de evidência medem contratos relevantes, não detalhes incidentais — ainda não satisfeito pela suíte Vitest legada da #407.
- Configuração ≠ execução ≠ publicação ≠ captura ≠ adoção — distinção preservada no ProjectProfile.

## Histórico

- 2026-08-30 — #412 mergeada em `9c3aa709`: README deixa de prometer interface unificada e passa a explicitar gramática compartilhada com identidade local; Pages verde.
- 2026-08-30 — #407 rebaseada mecanicamente no `main`; `capture` passou, mas `npm test` revelou 65/152 testes vermelhos e bloqueou merge.
- 2026-08-30 — card migrado para `ConsumerCard`; gap D2 registrou o objetivo obsoleto do README, depois fechado pela #412.
- 2026-08-18 — Core Web CSS API registrada como estável após adoções externas independentes em CausaGanha e Ficha.
- 2026-08-18 — evidência de browser e fronteiras `configured gate != observed gate` consolidadas no corpus.
