---
type: OpinionatedRecommendation
slug: url-state-when-shareable
maturity: validated
problem: buscas, filtros e vistas úteis podem existir apenas em memória local, impedindo compartilhar, voltar ou reproduzir um estado
validated_in: [franklinbaldo/intuit]
---

# Estado que vale compartilhar deve caber na URL

## Posição

Quando consulta, filtro, paginação ou seleção representam um estado público útil e não sensível, o Cobogó recomenda codificá-lo na URL para permitir link, histórico e reprodução.

## Racional

A web já oferece um mecanismo de estado compartilhável. Ignorá-lo reduz autonomia e torna evidência/colaboração mais difíceis. Mas “usar URL” não significa serializar qualquer volume: um endereço que ultrapassa o orçamento de confiabilidade escolhido pelo produto deixa de cumprir a promessa de compartilhamento robusto.

## Contrato

Estado relevante usa path/query/hash apropriado; back/forward preservam comportamento; dados sensíveis ou excessivamente grandes não entram na URL. Quando o estado projetado ultrapassa o limite que o produto considera confiável, a ação deve ser recusada antes de confirmar sucesso e deve indicar uma alternativa real quando existir.

O Cobogó não fixa um limite numérico universal. O produto pode escolher seu orçamento conforme navegadores, canais de compartilhamento e infraestrutura que realmente precisa suportar.

## Critério observável

Copiar a URL e abri-la em outra sessão reproduz o estado público material da vista, quando aplicável. Para um estado deliberadamente acima do orçamento adotado, a interface não afirma que criou um link compartilhável e preserva o trabalho da pessoa.

## Escape hatch

Estado efêmero, sensível, pessoal, puramente de apresentação ou excessivamente grande pode permanecer local ou usar outro mecanismo explícito de transporte.

## Evidência

`franklinbaldo/intuit#31` é a primeira aplicação real reconciliada. O Intuit continua usando `?data=` para HTML pequeno, mas recusa `Copy Link` e `Update URL` quando o endereço projetado excede seu orçamento conservador de 8.000 caracteres. A recusa preserva editor, área de transferência ou URL conforme a ação e sugere Gist, capacidade já existente no produto. Testes específicos passaram na branch e em `main`; o commit `20f96cfbbd41715bb270f6eecaa71e7bb4d91f67` foi publicado e observado novamente na URL pública.

Por isso a recomendação está `validated`: em português comum, já funcionou em pelo menos um projeto real. Ainda precisa convergir com sucesso em um segundo projeto, preservando a solução local, antes de ser `stable` — isto é, antes de podermos dizer que funcionou de forma convergente em pelo menos dois projetos.

## Falsificação

Se serializar determinado estado gerar URLs frágeis, vazar informação ou criar uma experiência pior que a alternativa disponível, reduzir ao subconjunto público estável que realmente precisa ser compartilhável. Se uma aplicação real demonstrar que a recusa por tamanho reduz autonomia sem ganho de confiabilidade, revisar o contrato ou abandonar a recomendação para esse caso.
