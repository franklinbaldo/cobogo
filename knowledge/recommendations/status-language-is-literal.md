---
type: OpinionatedRecommendation
slug: status-language-is-literal
maturity: opinionated
problem: labels de status podem usar linguagem otimista ou vaga que esconde o estado operacional real
validated_in: []
---

# Estado deve ser nomeado literalmente

## Posição

Labels de estado público devem descrever o que o sistema sabe, não a interpretação mais favorável. “Carregando”, “sem resultados”, “dados de julho”, “falha ao consultar” são preferíveis a linguagem vaga como “quase pronto” ou “atualizado” sem prova.

## Racional

Linguagem de estado é parte da confiança. Eufemismo e marketing tornam falhas e freshness difíceis de interpretar.

## Contrato

Status deriva de condição observável e evita absolutos não sustentados. Quando incerteza é real, ela aparece como tal.

## Critério observável

O texto do estado pode ser reconciliado com condição do runtime/artifact sem inferência promocional.

## Escape hatch

Tom editorial pode variar; literalidade factual permanece.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se linguagem técnica literal for incompreensível ao leitor, traduzir o significado sem aumentar a certeza factual.
