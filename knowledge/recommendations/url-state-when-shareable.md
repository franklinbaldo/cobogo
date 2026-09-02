---
type: OpinionatedRecommendation
slug: url-state-when-shareable
maturity: opinionated
problem: buscas, filtros e vistas úteis podem existir apenas em memória local, impedindo compartilhar, voltar ou reproduzir um estado
validated_in: []
---

# Estado que vale compartilhar deve caber na URL

## Posição

Quando consulta, filtro, paginação ou seleção representam um estado público útil e não sensível, o Cobogó recomenda codificá-lo na URL para permitir link, histórico e reprodução.

## Racional

A web já oferece um mecanismo de estado compartilhável. Ignorá-lo reduz autonomia e torna evidência/colaboração mais difíceis.

## Contrato

Estado relevante usa path/query/hash apropriado; back/forward preservam comportamento; dados sensíveis ou excessivamente grandes não entram na URL.

## Critério observável

Copiar a URL e abri-la em outra sessão reproduz o estado público material da vista, quando aplicável.

## Escape hatch

Estado efêmero, sensível, pessoal ou puramente de apresentação pode permanecer local.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se serializar determinado estado gerar URLs frágeis ou vazar informação, reduzir ao subconjunto público estável que realmente precisa ser compartilhável.
