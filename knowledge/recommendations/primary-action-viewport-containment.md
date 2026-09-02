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

Evidência negativa inicial: `franklinbaldo/ficha`, artifact `9833746642`, rota `/ficha/`, viewport `390×844`. O botão `Buscar` da tarefa principal aparece parcialmente fora da borda direita; issue `franklinbaldo/ficha#227` registra o critério de correção. Ainda não há aplicação bem-sucedida, portanto a maturidade permanece `opinionated`.

## Falsificação

Cobogó deve enfraquecer ou retirar esta recomendação se testes de uso mostrarem contextos recorrentes em que clipping parcial da ação primária melhora a compreensão/descoberta sem prejudicar acionabilidade, ou se o contrato se revelar incompatível com classes legítimas de interfaces horizontais mesmo com escape hatch explícito.
