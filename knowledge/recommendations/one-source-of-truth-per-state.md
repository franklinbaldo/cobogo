---
type: OpinionatedRecommendation
slug: one-source-of-truth-per-state
maturity: opinionated
problem: a mesma freshness, status ou metadata pode ser codificada separadamente em UI, pipeline e documentação e divergir silenciosamente
validated_in: []
---

# Estado público material deve derivar de uma fonte de verdade

## Posição

Metadata material exibida na superfície — competência, arquivo atual, status ou versão — deve ser derivada do artifact/runtime que a determina sempre que possível, não duplicada manualmente em copy.

## Racional

Duplicação transforma freshness em tarefa editorial e cria divergência silenciosa entre sistema e interface.

## Contrato

Preferir derivação em build/runtime a constantes duplicadas; quando duplicação for inevitável, existir gate que detecte inconsistência.

## Critério observável

Atualizar o artifact/estado canônico altera a metadata pública correspondente sem edição manual independente, ou falha explicitamente se houver divergência.

## Escape hatch

Copy editorial não derivável pode permanecer manual; o contrato incide sobre estado factual do sistema.

## Evidência

Casos de freshness no portfólio motivam a posição; baseline registrará adoções reais.

## Falsificação

Se derivação dinâmica aumentar fragilidade sem reduzir risco real, usar geração estática verificável; evitar apenas duplicação sem gate.
