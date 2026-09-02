---
type: SurfaceQualityAssessment
repo: franklinbaldo/intuit
date: 2026-09-02
commit: 34a3102a61d3676e34597d20606ffe3a53bdfe3d
deploy: https://github.com/franklinbaldo/intuit/actions/runs/33593643062
capture: artifact:9832628580
scores:
  clarity: 4
  explainability: 3
  autonomy: 3
  ux: 3
  ui: 3
  trust: 4
total: 20
band: good
blockers: []
trend: flat
---

# Intuit — Surface Quality Assessment

## Veredito

**20/24 — boa.** Intuit é uma superfície pequena e muito legível: a relação editor → ação → preview sobrevive ao desktop e a 390 px sem perder a tarefa. A confiança é especialmente forte porque sandbox, semântica, reduced-motion e captura causal são protegidos por testes. O que impede faixa de referência não é defeito grave, mas profundidade limitada de explicação pública e evidência visual concentrada no estado inicial.

## Clareza / D1

**4/4.** A captura desktop e narrow mostram `HTML Editor`, `Render` e `Preview` na ordem natural, sem navegação intermediária ou CTA concorrente. Em 390×844, as quatro ações reorganizam-se em 2×2 sem truncar rótulos e a tarefa continua reconhecível.

Gap: nenhum material. Recomendação: preservar essa relação direta; não adicionar chrome que concorra com editor/preview.

## Explicabilidade / D2

**3/4.** A própria home se apresenta como `A minimalist HTML renderer & visual testing tool`; README/source explicam `srcdoc`, sandbox estrito por default e scripts opt-in. O leitor entende o que é antes de agir, mas a superfície pública não torna toda a fronteira de segurança/mecânica tão explícita quanto a documentação.

Gap: não material para a tarefa atual. Recomendação: manter explicação progressiva; só trazer detalhes de sandbox para a UI quando ajudarem decisão/risco real.

## Autonomia / D3

**3/4.** `Copy Link` e `Update URL` dão saída transportável diretamente na superfície; README documenta `?data=`, `?b64=` e Gist, além de checkout estático. Não existe release/dataset/API adicional e a superfície não promete isso.

Gap: nenhum material. Recomendação: preservar URL/Gist como handoff primário em vez de inventar canal de distribuição sem necessidade.

## UX

**3/4.** O fluxo principal é curto, sem estado de navegação desnecessário; controles continuam utilizáveis em viewport estreito. Playwright cobre editor→preview, tema, URL/Base64, semântica, foco e reduced-motion. A captura causal atual prova o estado inicial, não toda a família de estados interativos, por isso não recebe 4.

Gap: nenhum acionável nesta rodada. Recomendação: ampliar estados capturados apenas quando uma mudança concreta neles justificar o custo.

## UI

**3/4.** Hierarquia, espaçamento, contraste e composição permanecem legíveis em desktop e 390 px; a paleta local dos botões preserva identidade e o card não sofre overflow aparente. É uma solução coerente e responsiva, mas não há evidência suficiente para tratá-la como referência transversal de composição.

Gap: nenhum material. Recomendação: preservar a composição local; Cobogó não deve uniformizá-la.

## Confiança

**4/4.** O estado avaliado está ligado ao merge `34a3102…`; Pages publicou esse SHA com sucesso e o artifact pós-merge `9832628580` registra rota, SHA e `1440x900,390x844`. O contrato técnico mantém `sandbox=""` por default, scripts opt-in, alert/grupos semânticos, foco e reduced-motion com cobertura de Playwright.

Gap: nenhum material. Recomendação: manter evidência visual proporcional ao risco e ligada ao SHA.

## Blockers

nenhum.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — a aplicação no Intuit converge com a evidência já validada em `franklinbaldo/quem-sao-eles`; esta rodada sustenta promoção a `stable`.
- `responsive-by-contract` — evidência positiva local em narrow; maturidade permanece a do corpus até outras aplicações serem reconciliadas.
- `reduced-motion-respected` — solução local já testada; não inferir maturidade adicional sem reconciliar o corpus correspondente.

## Issues derivadas

nenhuma. O gap acionável desta rodada foi fechado pela PR `franklinbaldo/intuit#28`.

## O que o Cobogó deve aprender deste consumer

Evidência visual não precisa virar uma plataforma pesada: para uma superfície estática pequena, duas capturas determinísticas no mesmo artifact, com SHA/rota/viewports e browser tests separados para comportamento, já formam um contrato causal forte e barato.
