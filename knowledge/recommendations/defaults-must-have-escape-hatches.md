---
type: OpinionatedRecommendation
slug: defaults-must-have-escape-hatches
maturity: opinionated
problem: defaults fortes podem virar dogma e forçar soluções inadequadas a domínios diferentes
validated_in: []
---

# Default forte exige escape hatch explícito

## Posição

Toda recomendação opinionated do Cobogó deve dizer quando não se aplica e que resultado equivalente uma solução local precisa preservar.

## Racional

Ser opinionado é escolher um default, não negar contexto. Escape hatch explícito torna divergência deliberada e evita tanto uniformização quanto exceção arbitrária.

## Contrato

Cada OpinionatedRecommendation possui seção `Escape hatch`; assessments não penalizam divergência que satisfaz o critério por solução local melhor/adequada.

## Critério observável

Uma divergência pode ser explicada em termos de contexto e resultado, não apenas “não quis usar Cobogó”.

## Escape hatch

A própria recomendação é meta-regra; não há dispensa de documentar aplicabilidade de defaults normativos.

## Evidência

O schema de OpinionatedRecommendation desta RFC torna o campo obrigatório.

## Falsificação

Se algum default for universal por definição (por exemplo, não inventar fatos), sua seção pode declarar que não existe escape factual, preservando transparência do contrato.
