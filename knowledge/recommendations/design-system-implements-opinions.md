---
type: OpinionatedRecommendation
slug: design-system-implements-opinions
maturity: opinionated
problem: recomendações podem virar apenas documentação se o design system não fornecer primitivas e patterns para seus defaults recorrentes
validated_in: []
---

# Opinião recorrente deve virar infraestrutura

## Posição

Quando uma recomendação Cobogó descreve comportamento/estrutura transversal que pode ser implementado sem apagar identidade local, o design system deve oferecer primitive, pattern, token, validator ou exemplo de referência que reduza o custo de adoção.

## Racional

Um framework opinionado não pode delegar toda implementação aos consumers. Documentação define direção; infraestrutura torna o default barato e consistente.

## Contrato

A forma compartilhada deve codificar o contrato funcional, não branding rígido. Não é necessário esperar dois consumers para criar implementação `opinionated`; maturidade continua rastreando validação real.

## Critério observável

Para recomendações recorrentes aplicáveis, o consumer consegue adotar uma implementação Cobogó ou um exemplo canônico em vez de reinventar do zero.

## Escape hatch

Recomendações altamente contextuais podem permanecer apenas como princípio/checklist até surgir uma abstração útil.

## Evidência

A RFC 0002 inicia essa transição; implementações concretas serão priorizadas a partir das recomendações iniciais e do baseline.

## Falsificação

Se uma abstração compartilhada exigir exceções constantes ou apagar identidade, rebaixá-la a exemplo/conceito e preservar o princípio sem componente universal.
