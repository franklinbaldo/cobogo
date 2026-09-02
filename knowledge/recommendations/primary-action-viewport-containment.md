---
type: OpinionatedRecommendation
slug: primary-action-viewport-containment
maturity: opinionated
problem: A primary action can remain semantically present while becoming partially clipped or pushed outside a narrow viewport.
validated_in: []
---

# Primary action viewport containment

## Posição

Cobogó recomenda como default que a ação primária de uma tarefa permaneça integralmente visível, legível e acionável dentro do viewport estreito suportado pela superfície. Responsividade não se resume a ausência de scroll global: o controle que conclui a ação principal não deve depender de conteúdo fora da largura visível.

## Racional

Uma composição pode parecer correta no desktop e ainda degradar a tarefa principal quando `input + CTA`, filtros ou grupos de ação preservam largura rígida em telas estreitas. Quando o rótulo ou o alvo do CTA é cortado, a interface perde clareza operacional mesmo que o DOM continue tecnicamente presente.

## Contrato

- identificar a ação primária da tarefa;
- em viewport estreito suportado, manter rótulo e alvo dessa ação integralmente dentro da área visível;
- permitir reflow local — empilhar, reduzir grow/shrink, mudar distribuição ou outra solução coerente com a identidade do consumer;
- não exigir uma composição visual única nem um breakpoint universal;
- validar o estado estreito com evidência renderizada, não apenas pela leitura do CSS.

## Critério observável

Na captura estreita da rota representativa, a ação primária aparece inteira, sem clipping/overflow horizontal, continua reconhecível e mantém área acionável coerente. A correção não introduz regressão material no viewport largo.

## Escape hatch

Superfícies cujo produto exige canvas horizontal, timeline extensa ou outra navegação espacial deliberadamente maior que o viewport podem divergir, desde que a ação de continuidade/controle permaneça alcançável por um mecanismo explícito e a horizontalidade seja parte comprovada da tarefa, não efeito acidental de sizing.

## Evidência

Evidência negativa inicial: `franklinbaldo/ficha`, artifact `9833746642`, rota `/ficha/`, viewport `390×844`. O botão `Buscar` da tarefa principal aparece parcialmente fora da borda direita; issue `franklinbaldo/ficha#227` registrou o critério de correção.

Primeira aplicação: `franklinbaldo/ficha#229`, head `b394d98daa33c1d9fb3c86c37e8c3e269030e3c0`. CI e Visual Capture ficaram verdes; artifact `9837261361` mostra o CTA integralmente contido em `390×844` e o desktop `1280×900` sem regressão. A PR foi mergeada como landing `2e2adfa7c57cc5b80f504d1a9d0aa657abf94317`, cujo CI e deploy também ficaram verdes.

A maturidade permanece `opinionated`, não por falta de segundo consumer, mas porque a rotina exige recaptura pós-merge para fechar uma mudança visualmente material e o workflow atual não captura `main` automaticamente. `franklinbaldo/ficha#230` registra essa condição. Assim que o landing for recapturado pelo mesmo método e satisfizer o critério, Ficha pode entrar em `validated_in` e a recomendação sobe para `validated`.

## Falsificação

Cobogó deve enfraquecer ou retirar esta recomendação se testes de uso mostrarem contextos recorrentes em que clipping parcial da ação primária melhora a compreensão/descoberta sem prejudicar acionabilidade, ou se o contrato se revelar incompatível com classes legítimas de interfaces horizontais mesmo com escape hatch explícito.
