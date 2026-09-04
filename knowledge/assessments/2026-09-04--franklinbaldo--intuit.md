---
type: SurfaceQualityAssessment
repo: franklinbaldo/intuit
date: 2026-09-04
commit: 495e54b9841ba2e18fcd5f980e995a6072e92963
deploy: https://github.com/franklinbaldo/intuit/actions/runs/33835991124
capture: artifact:9923434999
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

**Avaliação de qualidade: 20 de 24 pontos — faixa boa.** Clareza 4/4, Explicabilidade 3/4, Autonomia 3/4, UX 3/4, UI 3/4 e Confiança 4/4. A nota total não mudou, mas a base de Confiança ficou mais forte: o modo que reduz isolamento agora explica a consequência antes da decisão, e a mesma composição foi observada na página já publicada em desktop e 390 px.

## Clareza / D1

**4/4.** Editor, ações e preview continuam formando uma sequência direta. A explicação nova não compete com a tarefa principal; em 390 px aparece como texto de apoio sob `Allow Scripts` e preserva a hierarquia.

Problema material restante: nenhum.

## Explicabilidade / D2

**3/4.** A home continua dizendo o que o produto é e agora torna explícita uma fronteira de segurança que antes exigia conhecer implementação: `Allow Scripts` deve ser usado apenas com HTML confiável porque reduz o isolamento do preview. Isso melhora a explicação pública, mas ainda não transforma toda a mecânica do Intuit em referência transversal; URL/Gist, `srcdoc` e demais detalhes continuam principalmente documentados no repositório.

Problema material restante: nenhum para a tarefa atual.

## Autonomia / D3

**3/4.** URL, Base64 e Gist continuam oferecendo estados transportáveis e o source checkout permanece executável como aplicação estática. A rodada não adicionou novo formato reutilizável nem removeu capacidade existente.

Problema material restante: nenhum.

## UX

**3/4.** A decisão de habilitar scripts ganhou informação no próprio ponto de ação, antes do clique, sem criar modal ou fluxo extra. Playwright verifica a associação semântica e o comportamento técnico. A prova visual continua concentrada na home e não cobre uma família suficientemente ampla de estados interativos para justificar 4/4.

Problema material restante: nenhum acionável nesta rodada.

## UI

**3/4.** As imagens publicadas em `1440×900` e `390×844` mostram a explicação sem truncamento, sobreposição ou rolagem horizontal global aparente. No celular, o texto quebra naturalmente em linhas e `Dark Mode` permanece separado abaixo. Gradientes, espaçamento e composição local do Intuit foram preservados.

Problema material restante: nenhum.

## Confiança

**4/4.** O estado padrão permanece `sandbox=""`; scripts continuam opt-in. Antes da ativação, a interface agora informa que o HTML precisa ser confiável e que o isolamento será reduzido, com `aria-describedby` associando a explicação ao checkbox. O teste novo confirma sandbox estrito antes da escolha e `allow-scripts` + `allow-same-origin` depois dela.

A prova está ligada ao que o leitor recebeu: a #30 foi incorporada como `495e54b9841ba2e18fcd5f980e995a6072e92963`; o workflow Pages `33835991124` publicou esse commit e depois abriu novamente a URL pública em Chromium. O arquivo `9923434999` registra `phase=published`, o mesmo commit, a rota `https://franklinbaldo.github.io/intuit/`, as duas larguras e horário `2026-09-04T04:21:05Z`.

Problema material restante: nenhum identificado no escopo observado.

## Impedimentos objetivos

Nenhum.

## Recomendações Cobogó

- `risk-changing-controls-explain-consequence` — passa a `validated`: em linguagem comum, já funcionou em pelo menos um projeto real. Ainda precisa de uma segunda aplicação independente para chegar a `stable`, quando terá funcionado de forma convergente em pelo menos dois projetos.
- `visual-evidence-as-quality-gate` — permanece aplicável; #30 fortalece a prova ao capturar também a URL realmente publicada.

## Issues derivadas

A dívida concreta desta rodada foi `franklinbaldo/intuit#29` e foi fechada pela #30. Nenhuma nova issue genérica foi aberta.

## O que o Cobogó deve aprender deste projeto

Quando um controle muda o modelo de proteção, uma frase pequena e semanticamente associada pode ser melhor do que esconder a consequência em documentação ou criar uma confirmação pesada. O teste deve verificar tanto a comunicação quanto o comportamento técnico. A mesma infraestrutura de screenshot também pode apontar para a URL pública após o deploy, reduzindo a diferença entre o que o repositório contém e o que a pessoa realmente recebe.