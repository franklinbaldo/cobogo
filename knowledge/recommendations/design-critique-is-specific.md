---
type: OpinionatedRecommendation
slug: design-critique-is-specific
maturity: opinionated
problem: avaliações como “UI ruim” ou “UX média” não explicam mecanismo do problema nem orientam melhoria
validated_in: []
---

# Crítica de design deve nomear mecanismo

## Posição

Notas agregadas podem resumir, mas toda crítica Cobogó deve explicar o mecanismo observável: hierarquia plana, rótulo ambíguo, foco invisível, estado indistinto, provenance distante, densidade inadequada etc.

## Racional

Adjetivo sem mecanismo vira gosto. O objetivo da avaliação é produzir aprendizado e ação reproduzível.

## Contrato

Cada gap de assessment contém evidência, impacto no leitor e recomendação/critério; evitar “bonito/feio”, “moderno/antigo” como diagnóstico.

## Critério observável

Outra pessoa consegue reproduzir o problema e avaliar uma solução sem depender do gosto do avaliador original.

## Escape hatch

Impressões exploratórias podem ser registradas como hipótese, mas não entram como score/gap formal até ganharem mecanismo observável.

## Evidência

O SurfaceQualityAssessment e o template de issue desta RFC implementam essa exigência.

## Falsificação

Se uma dimensão estética realmente afetar percepção/uso mas o mecanismo ainda não estiver claro, investigar antes de prescrever solução.
