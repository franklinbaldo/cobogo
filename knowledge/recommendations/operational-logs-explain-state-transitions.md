---
type: OpinionatedRecommendation
slug: operational-logs-explain-state-transitions
maturity: opinionated
problem: relatórios operacionais podem acumular jargão interno e deixar de explicar ao leitor comum o que mudou, o que foi comprovado e por que o trabalho será ou não retomado
validated_in: []
---

# Logs operacionais explicam mudanças em linguagem comum

## Posição

Um relatório de rodada deve ser compreensível sem exigir que o leitor conheça o vocabulário interno da automação. Termos técnicos podem existir, mas a relação entre problema, ação, prova, pendência e próximo passo precisa ser escrita primeiro em linguagem comum.

## Racional

Logs são parte da superfície pública de governança do Cobogó. Quando o relatório usa abreviações como `head`, `landing`, `blocker`, `gap`, `artifact` ou expressões como “mudança causal” sem explicar a consequência concreta, ele preserva informação técnica mas reduz a capacidade de auditoria por uma pessoa que não acompanhou as rodadas anteriores.

A função do relatório não é apenas provar que a automação fez algo. Ele deve permitir reconstruir o estado do trabalho e entender por que a próxima decisão é razoável.

## Contrato

Todo RoundReport novo deve responder explicitamente, em seções separadas e com conteúdo substantivo:

1. **O que estava errado ou faltando** — qual problema concreto justificou a rodada;
2. **O que foi feito** — qual alteração, inspeção ou decisão ocorreu;
3. **O que ficou comprovado** — qual evidência permite afirmar o resultado;
4. **O que ainda falta** — qual parte permanece aberta, se houver;
5. **Por que a próxima rodada deve ou não voltar ao mesmo projeto** — qual fato novo permitiria avançar ou por que outro projeto deve receber prioridade.

Quando um termo técnico for necessário, prefira a explicação comum antes do termo. Exemplo: “o commit atual da branch da PR (head SHA)” em vez de apenas “head”.

## Critério observável

Uma pessoa que leia apenas o RoundReport atual, sem conhecer as rodadas anteriores, consegue responder às cinco perguntas acima e identificar o estado do trabalho, o impedimento restante e a condição objetiva de retomada.

O validator de referência `scripts/validate-round-report-clarity.mjs` verifica a presença dessas cinco seções e exige conteúdo substantivo em cada uma. Ele não tenta decidir automaticamente se a prosa é boa; essa parte continua sendo julgamento de revisão.

## Escape hatch

Os títulos podem ganhar contexto adicional e relatórios especializados podem ter outras seções. Uma solução local equivalente ou superior é válida desde que as cinco perguntas continuem respondidas de modo inequívoco. O contrato não proíbe termos técnicos; proíbe depender deles como única explicação.

## Evidência

A recomendação nasce de uso repetido dos RoundReports do próprio Cobogó e de feedback direto sobre a dificuldade de entender expressões internas como “mudar causalmente”. O corpus recente já convergiu informalmente para seções como `O que estava errado ou faltando`, `O que foi feito`, `O que ficou comprovado`, `O que ainda falta` e `Por que a próxima rodada deve ou não voltar`, mostrando que o contrato pode ser formalizado sem impor aparência ou decisão de produto aos consumers.

## Falsificação

Se relatórios compactos sem essas seções demonstrarem repetidamente igual ou melhor reconstrução do estado por leitores externos, o contrato deve ser reduzido. Se o validator produzir escrita artificial ou incentivar preenchimento burocrático sem informação, ele deve ser revisto ou retirado em vez de virar gate ornamental.
