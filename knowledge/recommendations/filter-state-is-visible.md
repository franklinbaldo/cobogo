---
type: OpinionatedRecommendation
slug: filter-state-is-visible
maturity: opinionated
problem: filtros podem alterar radicalmente o conjunto mostrado sem deixar claro ao leitor por que itens sumiram ou como voltar ao estado amplo
validated_in: []
---

# Filtro ativo deve ser perceptível e reversível

## Posição

Quando filtros mudam materialmente o conteúdo visível, o estado filtrado deve ser perceptível e possuir caminho claro para revisão/remoção.

## Racional

Resultado filtrado sem estado aparente parece dataset completo. Isso é especialmente perigoso em interfaces cívicas e de dados.

## Contrato

Controles refletem valor ativo; filtros aplicados permanecem identificáveis; limpar/reverter não exige reconstruir manualmente defaults. URL persistente é recomendada quando compartilhamento/reprodução da consulta importa.

## Critério observável

Um leitor consegue dizer que está vendo subconjunto e retornar ao conjunto não filtrado sem adivinhar estado anterior.

## Escape hatch

Filtros triviais cujo estado já é inequívoco no controle podem dispensar chips/resumos adicionais.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se duplicar estado ativo em múltiplos lugares aumentar ruído, manter uma única representação clara e reversível.
