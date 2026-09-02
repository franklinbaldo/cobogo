---
type: OpinionatedRecommendation
slug: design-defaults-are-testable
maturity: opinionated
problem: princípios de design vagos podem ser impossíveis de verificar e virar retórica sem efeito na implementação
validated_in: []
---

# Default de design deve ser testável

## Posição

Toda recomendação normativa Cobogó deve possuir critério observável suficientemente concreto para avaliar adoção, divergência e falsificação.

## Racional

“Seja intuitivo”, “seja moderno” ou “melhore UX” não orientam implementação nem review. Opinião útil precisa produzir diferença verificável.

## Contrato

OpinionatedRecommendation exige `Critério observável`; issues derivadas traduzem o princípio para rota/fluxo específico; evidência after avalia o mesmo critério.

## Critério observável

Uma terceira pessoa consegue dizer se uma implementação satisfaz a recomendação sem depender de concordar com o gosto do autor.

## Escape hatch

Princípios exploratórios ainda não testáveis permanecem como conceito/pergunta e não como recomendação normativa.

## Evidência

O schema de recommendation da RFC 0002 torna o critério obrigatório.

## Falsificação

Se critérios repetidamente permitirem interpretações contraditórias, a recomendação precisa ser refinada antes de ganhar maturidade maior.
