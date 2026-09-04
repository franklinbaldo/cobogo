---
type: SurfaceQualityAssessment
repo: franklinbaldo/ficha
date: 2026-09-04
commit: 73c4696479dcc39dab7c3afe5c9e74b05dc4808d
deploy: https://github.com/franklinbaldo/ficha/actions/runs/33861297403
capture: artifact:9932248070
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 4
  trust: 4
total: 23
band: reference
blockers: []
trend: up
---

# Ficha — avaliação de qualidade da interface pública

## Veredito

**23 de 24 pontos — faixa de referência.** Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 4 e Confiança 4.

A mudança desta rodada não altera a aparência da Ficha. Ela fecha uma pergunta factual que mantinha Confiança em 3: o mesmo contrato de acessibilidade que já passava no build agora também é executado contra a URL realmente publicada depois do GitHub Pages terminar o deploy.

## Clareza / D1

**4/4.** A página continua deixando evidente que a ação principal é consultar uma empresa brasileira e abrir sua ficha pública. Problema material observado: nenhum.

## Explicabilidade / D2

**4/4.** Origem, competência, preservação e estado continuam próximos do conteúdo que explicam. Problema material observado: nenhum.

## Autonomia / D3

**4/4.** `manifest.json` e os arquivos públicos continuam oferecendo caminho reutilizável fora da interface. Problema material observado: nenhum.

## UX

**3/4.** A primeira dobra e o estado de indisponibilidade continuam coerentes em desktop e celular. A nota não sobe porque a observação automatizada ainda não percorre uma jornada completa de consulta, resultado e exploração de vínculos; esta rodada não produziu prova nova sobre esse fluxo.

## UI

**4/4.** A composição continua sendo uma referência útil de identidade local construída por título, ordem, linhas, inscrições e espaço. Não houve mudança visual nesta rodada.

## Confiança

**4/4.** A #241 foi incorporada como `73c4696479dcc39dab7c3afe5c9e74b05dc4808d` depois de todos os checks do commit atual da branch ficarem verdes, incluindo GitGuardian. A publicação `33861297403` terminou com sucesso no mesmo commit.

Depois do deploy, Chromium abriu `https://franklinbaldo.github.io/ficha/` e executou o mesmo verificador usado no build. O arquivo `ficha-public-accessibility-73c4696479dcc39dab7c3afe5c9e74b05dc4808d` (artifact `9932248070`) registra o próprio commit publicado e a URL pública. O resultado foi: zero violações sérias ou críticas do axe; sete de sete controles interativos visíveis alcançados por teclado; nenhum controle esperado ficou de fora; zero passos sem indicador perceptível de foco.

A #240 foi encerrada porque seu critério verificável foi cumprido. A nota 4 descreve o escopo observado e reproduzível; não é afirmação de perfeição universal de acessibilidade.

## Impedimentos objetivos

Nenhum para o problema escolhido nesta rodada.

## Recomendações Cobogó

- `semantic-accessibility-default` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais. A Ficha passa a ser mais uma aplicação real, agora comprovada também na página publicada.
- `visual-evidence-as-quality-gate` — **stable**. Esta rodada reforça a distinção entre provar o build e provar o estado que o leitor realmente recebe.
- `primary-action-viewport-containment` — **validated**, isto é, já funcionou em pelo menos um projeto real.
- `recoverable-error-states` — **validated**.
- `content-hierarchy-before-decoration` — **validated**.

## Issues derivadas

- #228 — encerrada pela #239: os arquivos da mesma observação passaram a concordar sobre o commit real avaliado.
- #240 — encerrada pela #241: axe, teclado e foco agora são repetidos contra a URL pública depois do deploy.

## O que o Cobogó deve aprender deste projeto

Em projetos publicados, acessibilidade comprovada no build e acessibilidade comprovada na URL entregue ao leitor são fatos diferentes. Quando o custo é baixo e o contrato já existe, executar o mesmo verificador depois do deploy elimina essa diferença sem impor aparência ou implementação compartilhada.