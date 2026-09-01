---
type: OpinionatedRecommendation
slug: mobile-keeps-primary-task
maturity: opinionated
problem: responsividade pode preservar pixels sem preservar a prioridade e o caminho da tarefa principal
validated_in: []
---

# Mobile preserva a tarefa, não o layout

## Posição

Em viewport estreito, o Cobogó recomenda reorganizar composição quando necessário para manter ação, contexto e resultado principal acessíveis; reproduzir a geometria desktop em miniatura não é objetivo.

## Racional

Responsividade é adaptação de hierarquia. Menus, tabelas, sidebars e controles podem precisar mudar de forma sem mudar significado.

## Contrato

A ação principal permanece alcançável, ordem de leitura continua coerente, informação secundária pode entrar em disclosure e não há dependência de hover.

## Critério observável

A tarefa principal pode ser concluída em viewport estreito sem zoom, hover ou navegação acidentalmente escondida.

## Escape hatch

Ferramentas explicitamente desktop-only devem declarar essa fronteira; não receber crédito de responsividade fictícia.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se reorganização mobile esconder informação essencial, subir essa informação na hierarquia em vez de insistir no pattern de compactação.
