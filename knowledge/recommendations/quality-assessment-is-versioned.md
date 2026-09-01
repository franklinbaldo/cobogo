---
type: OpinionatedRecommendation
slug: quality-assessment-is-versioned
maturity: opinionated
problem: nota de UI/UX sem commit, deploy, captura e data vira opinião impossível de auditar ou comparar no tempo
validated_in: []
---

# Avaliação de qualidade é artifact versionado

## Posição

Toda nota/ranking Cobogó deve pertencer a um estado identificável da superfície e ser armazenada como artifact versionado no knowledge.

## Racional

UI muda. Sem estado e evidência, “bom” ou “ruim” vira reputação persistente em vez de observação corrigível.

## Contrato

Assessment registra data, commit/deploy, captura, seis notas e evidência por dimensão. Reavaliação não apaga histórico; ranking usa a avaliação mais recente válida.

## Critério observável

É possível explicar por que uma nota mudou comparando assessments e estados públicos correspondentes.

## Escape hatch

Nenhum para ranking formal; comentários exploratórios podem existir fora do ranking até serem avaliados.

## Evidência

O schema `SurfaceQualityAssessment` introduzido pela RFC 0002 implementa este contrato.

## Falsificação

Se granularidade por commit for excessiva para mudanças sem impacto, manter assessment no último estado materialmente avaliado em vez de atualizar mecanicamente a cada commit.
