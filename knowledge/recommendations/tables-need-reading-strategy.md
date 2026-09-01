---
type: OpinionatedRecommendation
slug: tables-need-reading-strategy
maturity: opinionated
problem: tabelas de dados podem simplesmente despejar colunas, tornando comparação, responsividade e significado difíceis
validated_in: []
---

# Tabela precisa de estratégia de leitura

## Posição

Tabela é apropriada quando comparação entre linhas/colunas é parte da tarefa. O Cobogó recomenda priorizar colunas, alinhar dados conforme semântica e definir comportamento deliberado em viewport estreito, em vez de converter tudo automaticamente em cards.

## Racional

Cards frequentemente destroem comparabilidade; tabelas sem estratégia criam scroll e ruído. A escolha deve seguir a tarefa.

## Contrato

Headers claros, escopo semântico, alinhamento consistente, coluna-chave preservada e solução responsiva explícita (scroll contextual, priorização, disclosure ou outra apropriada). Ordenação/filtro só quando reais.

## Critério observável

O leitor consegue comparar a informação principal e entender relações de coluna sem depender de layout desktop amplo.

## Escape hatch

Conteúdo que não exige comparação tabular deve usar estrutura mais adequada; não usar tabela por conveniência de implementação.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se uma solução responsiva compartilhada prejudicar uma tabela específica, preservar o contrato de comparação com solução local melhor.
