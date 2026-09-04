---
type: OpinionatedRecommendation
slug: one-primary-navigation-per-layer
maturity: opinionated
problem: Duas estruturas na mesma camada pública podem repetir os mesmos destinos e mecanismos sem função distinta, obrigando o leitor a inferir qual delas orienta o produto.
validated_in: []
---

# Uma navegação principal por camada pública

## Posição

Cobogó recomenda como default que uma mesma camada pública tenha **uma navegação principal inequívoca**. Cabeçalhos de página, barras contextuais e navegações locais podem coexistir com ela quando representam um escopo menor e diferente; não devem reconstruir os mesmos destinos, estado ativo e mecanismo de menu da navegação principal sem uma função própria perceptível.

## Racional

Repetir navegação não é o mesmo que reforçar orientação. Quando duas estruturas oferecem essencialmente os mesmos caminhos, ambas disputam hierarquia, aumentam a quantidade de controles e fazem a pessoa decidir qual delas é a referência. Em telas estreitas, essa duplicação também consome espaço que deveria pertencer ao título, à inscrição de contexto ou à tarefa.

O default não prescreve onde a navegação fica nem qual componente a implementa. Ele separa responsabilidades: a navegação principal explica a arquitetura de primeiro nível; uma navegação local, quando necessária, explica uma subárvore, etapa ou contexto diferente.

## Contrato

- identificar qual estrutura representa os destinos de primeiro nível da camada pública;
- evitar uma segunda estrutura que repita substancialmente esses mesmos destinos e o mesmo estado de página ativa;
- permitir cabeçalho contextual com título, inscrição, ações locais, tema, voltar ou metadados sem promovê-lo automaticamente a segunda navegação principal;
- quando houver navegação local, deixar seu escopo subordinado perceptível pelo conteúdo, rótulo, localização ou relação com a tarefa;
- preservar todos os destinos reais ao remover duplicação;
- verificar o resultado em largura ampla e estreita, incluindo foco, ordem semântica e ausência de compressão/overflow acidental.

## Critério observável

Ao entrar numa rota pública, uma pessoa deve conseguir apontar qual estrutura oferece a navegação de primeiro nível sem escolher entre dois conjuntos substancialmente equivalentes. Se existir uma segunda navegação, seus destinos ou sua apresentação devem tornar perceptível que ela pertence a um escopo local diferente.

## Escape hatch

Aplicativos com shell e painel local, documentação com subárvore própria, etapas de fluxo, abas de uma entidade, leitores com índice local ou outras interfaces hierárquicas podem e devem manter mais de uma navegação quando cada uma possui escopo distinto. A recomendação deve ser rejeitada para qualquer caso em que remover a camada local apague uma relação real que a navegação global não representa.

## Evidência em teste

### CausaGanha

Na página publicada de `franklinbaldo/causaganha` no commit `7c83e82847b44f101ec3474007addbdcbc4389c7`, `SiteNav` já apresenta seis destinos públicos de primeiro nível. Em `/processo`, `PageHeader` acrescenta logo abaixo outra faixa com `Consultar processo`, `Publicações`, `Metodologia`, `Dados e ferramentas` e, no celular, outro menu. A imagem em 1280×900 mostra rótulos da segunda faixa comprimidos/encostados; em 390×844, o segundo menu compete com a inscrição da página.

A aplicação está sendo testada na PR `franklinbaldo/causaganha#1097`. Enquanto merge, publicação e nova observação não estiverem concluídos, esta recomendação permanece `opinionated`: é uma posição que o Cobogó considera correta e quer testar, não uma aplicação já comprovada.

## Falsificação

Cobogó deve enfraquecer ou retirar esta recomendação se aplicações reais mostrarem que a duplicação de uma mesma navegação principal melhora orientação de forma consistente sem gerar ambiguidade, excesso de controles, compressão ou perda de espaço útil; ou se o contrato não conseguir distinguir de modo confiável duplicação de navegação hierárquica legítima.