---
type: OpinionatedRecommendation
slug: score-does-not-hide-blockers
maturity: opinionated
problem: soma alta pode mascarar uma dimensão quebrada que impede uso ou torna a superfície enganosa
validated_in: []
---

# Nota total não mascara blocker

## Posição

Um consumer com qualquer dimensão `0` não pode ser tratado como superfície “boa” ou “referência” apenas pela soma. Blockers de uso/confiança têm precedência sobre média.

## Racional

Score agregado é compressão. Uma falha crítica de confiança ou tarefa principal não é compensada por estética excelente.

## Contrato

Ranking mantém breakdown e destaca dimensões 0/1; priorização resolve blockers primeiro. A RFC deve evoluir a derivação de `band` para incorporar esse guardrail antes do baseline final.

## Critério observável

Nenhum consumer com dimensão quebrada aparece como saudável sem alerta explícito no ranking.

## Escape hatch

Dimensão genuinamente não aplicável não deve ser confundida com zero; schema futuro deve representar N/A explicitamente.

## Evidência

Princípio normativo para impedir Goodhart antes do primeiro baseline.

## Falsificação

Thresholds podem ser calibrados após baseline, mas blocker material nunca deve desaparecer dentro da soma.
