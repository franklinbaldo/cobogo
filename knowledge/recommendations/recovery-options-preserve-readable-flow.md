---
type: OpinionatedRecommendation
slug: recovery-options-preserve-readable-flow
maturity: opinionated
problem: estados de erro ou ausência podem herdar composição de chrome e comprimir opções editoriais até perderem legibilidade em viewports estreitos
validated_in: []
---

# Opções de recuperação preservam fluxo legível

## Posição

Quando uma superfície de erro, ausência ou rota inexistente oferece conteúdo alternativo para recuperar o leitor, essas opções devem permanecer perceptíveis, legíveis e acionáveis em ordem de leitura no viewport estreito. Conteúdo editorial longo não deve ser comprimido como se fosse chrome curto de navegação.

## Racional

Um estado de recuperação tem um trabalho específico: devolver orientação e oferecer saídas úteis. Se títulos, descrições ou metadados são espremidos em faixas estreitas, a semântica continua no DOM mas a recuperação falha visualmente. A composição deve respeitar a natureza textual das opções, não apenas o elemento HTML que as contém.

## Contrato

- heading da seção de recuperação permanece legível como unidade textual;
- opções alternativas mantêm ordem de leitura previsível;
- labels/títulos e metadados não dependem de clipping ou scroll horizontal implícito para serem compreendidos;
- ações principais de recuperação continuam perceptíveis;
- a solução estreita não precisa reproduzir a composição desktop.

## Critério observável

Em um viewport estreito representativo (~390 px), uma pessoa consegue ler o heading e cada opção de recuperação sem palavras fragmentadas por compressão de colunas, sem conteúdo cortado e sem descobrir conteúdo apenas por gesto horizontal não sinalizado.

## Escape hatch

Lista vertical é apenas uma solução possível. Grid responsivo, stack, disclosure, agrupamento editorial ou outra composição local equivalente/superior é válida. Um carrossel/scroll horizontal também pode ser adequado quando houver affordance clara e o conteúdo continuar legível em cada item.

## Evidência

A hipótese nasceu da captura causal da 404 de `franklinbaldo/franklinbaldo.github.io` em `main` `17995efe13904d56e58d63686d3cca49dea23093`, artifact visual `9849063746`: o bloco `Recently published` comprime heading e cinco títulos editoriais em colunas estreitas no mobile, embora busca e demais caminhos permaneçam funcionais.

## Falsificação

Se uma implementação estreita preservar leitura, orientação e acionabilidade usando composição horizontal densa sem compressão ou descoberta oculta, a recomendação não exige empilhamento. Se conteúdo alternativo não fizer parte do trabalho de recuperação daquele estado, a regra não se aplica.
