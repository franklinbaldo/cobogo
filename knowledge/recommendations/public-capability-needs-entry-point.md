---
type: OpinionatedRecommendation
slug: public-capability-needs-entry-point
maturity: opinionated
problem: capacidade pública pode ter rota válida e ainda ser órfã da arquitetura de informação do site
validated_in: []
---

# Rota pública útil precisa de ponto de entrada

## Posição

Uma capacidade que o projeto considera pública e útil deve ter ao menos um ponto de entrada contextual na superfície natural do produto; URL conhecida por mantenedores não conta como descoberta.

## Racional

Isso operacionaliza `capability-discoverability`: arquitetura de informação precisa incorporar capacidades, não apenas hospedá-las.

## Contrato

O entry point pode estar em nav, home, seção relacionada, footer ou conteúdo contextual conforme importância. Não exige CTA primário.

## Critério observável

Um leitor partindo da entrada natural consegue encontrar a rota sem busca externa ou conhecimento prévio da URL.

## Escape hatch

Rotas públicas apenas por requisito técnico, deep links especializados ou superfícies deliberadamente não promovidas podem ficar fora, desde que essa seja decisão explícita do consumer.

## Evidência

Casos históricos de descobribilidade do portfólio motivam o default; baseline reconciliará evidência formal.

## Falsificação

Se adicionar entry point criar ruído desproporcional, mover para agrupamento secundário mais adequado — não necessariamente remover toda descoberta.
