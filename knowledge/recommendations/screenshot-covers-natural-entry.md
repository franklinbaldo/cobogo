---
type: OpinionatedRecommendation
slug: screenshot-covers-natural-entry
maturity: opinionated
problem: evidência pode capturar apenas a rota corrigida e ignorar se o leitor consegue chegar nela a partir da entrada natural
validated_in: []
---

# Captura deve incluir a entrada natural quando descoberta é parte do critério

## Posição

Se a mudança pretende melhorar descobribilidade, arquitetura de informação ou explicação do projeto, a evidência before/after deve incluir a entrada natural (frequentemente home/nav) além da rota de destino quando necessário.

## Racional

Capturar apenas o destino prova que a página existe, não que o leitor a encontra.

## Contrato

Critério define quais rotas compõem o fluxo; mesma metodologia before/after; captura de destino isolada é suficiente apenas quando o gap está contido nela.

## Critério observável

A evidência mostra tanto o ponto de decisão quanto o destino quando ambos fazem parte do problema.

## Escape hatch

Mudanças locais de componente/estado não exigem captura de home irrelevante.

## Evidência

A recomendação formaliza aprendizados de rodadas anteriores de descobribilidade; baseline validará aplicação.

## Falsificação

Se múltiplas capturas não adicionarem informação ao critério, reduzir ao conjunto mínimo causal.
