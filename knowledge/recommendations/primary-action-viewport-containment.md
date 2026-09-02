---
type: OpinionatedRecommendation
slug: primary-action-viewport-containment
maturity: validated
problem: A primary action can remain semantically present while becoming partially clipped or pushed outside a narrow viewport.
validated_in: [franklinbaldo/ficha]
---

# Primary action viewport containment

## Posição

Cobogó recomenda como default que a ação primária de uma tarefa permaneça integralmente visível, legível e acionável dentro do viewport estreito suportado pela superfície. Responsividade não se resume a ausência de scroll global: o controle que conclui a ação principal não deve depender de conteúdo fora da largura visível.

## Racional

Uma composição pode parecer correta no desktop e ainda degradar a tarefa principal quando `input + CTA`, filtros ou grupos de ação preservam largura rígida em telas estreitas. Quando o rótulo ou o alvo do CTA é cortado, a interface perde clareza operacional mesmo que o DOM continue tecnicamente presente.

## Contrato

- identificar a ação primária da tarefa;
- em viewport estreito suportado, manter rótulo e alvo dessa ação integralmente dentro da área visível;
- permitir reflow local — empilhar, reduzir grow/shrink, mudar distribuição ou outra solução coerente com a identidade do projeto;
- não exigir uma composição visual única nem um breakpoint universal;
- validar o estado estreito com evidência renderizada, não apenas pela leitura do CSS.

## Critério observável

Na captura estreita da rota representativa, a ação primária aparece inteira, sem clipping/overflow horizontal, continua reconhecível e mantém área acionável coerente. A correção não introduz regressão material no viewport largo.

## Escape hatch

Superfícies cujo produto exige canvas horizontal, timeline extensa ou outra navegação espacial deliberadamente maior que o viewport podem divergir, desde que a ação de continuidade/controle permaneça alcançável por um mecanismo explícito e a horizontalidade seja parte comprovada da tarefa, não efeito acidental de sizing.

## Evidência

Evidência negativa inicial: `franklinbaldo/ficha`, arquivo de evidência `9833746642`, rota `/ficha/`, viewport `390×844`. O botão `Buscar` aparecia parcialmente fora da borda direita; a issue `franklinbaldo/ficha#227` registrou o critério de correção.

Primeira aplicação: `franklinbaldo/ficha#229`, commit da branch `b394d98daa33c1d9fb3c86c37e8c3e269030e3c0`. CI e captura visual passaram; o arquivo `9837261361` mostrou o botão inteiro em `390×844` e o desktop `1280×900` sem regressão. A PR entrou em `main` no commit `2e2adfa7c57cc5b80f504d1a9d0aa657abf94317`, com CI e publicação do site bem-sucedidos.

Validação completa: `franklinbaldo/ficha#232` passou a executar a mesma captura automaticamente depois do merge. A execução `33677384208`, no commit de `main` `06665f7610af9d8e493fc03bb5862954bd3e8551`, produziu o arquivo `9864898516`, ligado a esse SHA real. A captura estreita mostra campo e botão `Buscar` integralmente visíveis; a captura desktop permanece estável. Entre o commit publicado pela #229 e esse commit atual não houve alteração em `web/**`, apenas workflows e teste de ETL.

A recomendação passa a **validated**, isto é, já funcionou em pelo menos um projeto real com evidência completa. Um segundo projeto não é exigido para essa existência nem para esta validação; será necessário para `stable`, quando houver convergência bem-sucedida preservando outra identidade local.

## Falsificação

Cobogó deve enfraquecer ou retirar esta recomendação se testes de uso mostrarem contextos recorrentes em que clipping parcial da ação primária melhora a compreensão/descoberta sem prejudicar acionabilidade, ou se o contrato se revelar incompatível com classes legítimas de interfaces horizontais mesmo com escape hatch explícito.
