---
type: OpinionatedRecommendation
slug: feedback-near-action
maturity: validated
problem: feedback distante da ação obriga o leitor a descobrir se algo aconteceu e a que ação o estado pertence
validated_in: [franklinbaldo/intuit]
---

# Feedback deve aparecer perto da causa

## Posição

Resultado, progresso e erro de uma ação devem aparecer no contexto em que a ação foi iniciada, salvo quando o efeito é global e realmente exige feedback global.

## Racional

Proximidade reduz ambiguidade sobre qual ação produziu aquele estado e diminui o movimento de atenção. Toast global não deve ser default para tudo.

## Contrato

Controles refletem pending/disabled quando necessário; mensagem de resultado/erro é associada ao contexto; mudanças globais podem usar região global apropriada sem esconder efeito local. Quando o sistema conhece estados diferentes que exigem decisões diferentes, o feedback deve preservar essa diferença sem inventar causa além do que foi observado.

## Critério observável

Depois de agir ou entrar por um fluxo que produz estado, o leitor consegue perceber o resultado sem procurar em outra região da página e entende a próxima decisão possível quando ela existe.

## Escape hatch

Ações que navegam ou alteram estado global podem comunicar resultado no destino/globalmente quando essa é a relação natural. Estados tecnicamente distintos podem compartilhar mensagem quando a distinção não muda a decisão do leitor.

## Evidência

- `franklinbaldo/intuit` — PR #33, incorporada como `988296675b1384a7c86a7ec4887e0835c2310bb2`: o caminho `?gist=` reutiliza a região de alerta da própria ferramenta e distingue resposta HTTP sem sucesso, Gist válido sem arquivo `.html`, falha ao carregar o arquivo HTML e falha de requisição. Testes Playwright cobrem os estados sem rede real; Test, Visual capture e Pages passaram novamente depois do merge, com captura da página publicada no pacote `9965193464`.

## Falsificação

Se feedback local duplicar informação já inequívoca na mudança de estado, reduzir redundância mantendo a relação perceptível entre causa e resultado. Se distinguir estados técnicos não mudar a decisão possível, preferir texto mais simples em vez de expor detalhe inútil.
