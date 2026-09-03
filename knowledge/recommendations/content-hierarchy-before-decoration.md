---
type: OpinionatedRecommendation
slug: content-hierarchy-before-decoration
maturity: validated
problem: ornamentação, cards e padrões visuais podem criar aparência de produto sem esclarecer relações de importância no conteúdo
validated_in: [franklinbaldo/ficha]
---

# Hierarquia de conteúdo vem antes da decoração

## Posição

Elementos visuais Cobogó devem reforçar estrutura e significado existentes; não criar hierarquia fictícia. Heading, ordem, agrupamento e semântica vêm antes de cards, bordas, padrões ou cor.

## Racional

Uma interface pode parecer refinada e continuar cognitivamente plana. Decoração não corrige arquitetura de informação.

## Contrato

A página deve permanecer estruturalmente compreensível com estilo reduzido. Componentes decorativos não substituem headings, landmarks ou agrupamentos semânticos.

## Critério observável

O leitor consegue identificar título, seções, prioridade e relações principais pela estrutura, com o estilo ampliando — não inventando — essa leitura.

## Escape hatch

Expressão visual forte é bem-vinda quando não destrói a estrutura e faz parte da identidade local.

## Evidência

- `franklinbaldo/ficha#237`, incorporada a `main` como `3cefc459f1709b57ab4ca8c1d3e0a2bb4521fb3c`: a home deixou de depender de um cartão central e passou a organizar título, proposta, consulta e acesso aos dados por tipografia, ordem, linhas e espaço. O deploy `33714054369` e a captura `33714054334` passaram depois do merge; o arquivo `9877891254` confirma desktop e celular. A avaliação de 2026-09-03 atribui UI 4/4 sem exigir que a identidade local seja copiada por outros projetos.

Esta aplicação torna a recomendação `validated`: já funcionou em pelo menos um projeto real. Ainda não é `stable`; falta convergência bem-sucedida em um segundo projeto com outra identidade local.

## Falsificação

Se um recurso visual carregar significado funcional que semântica textual não expressa bem, ele pode integrar o contrato desde que acessível e consistente.
