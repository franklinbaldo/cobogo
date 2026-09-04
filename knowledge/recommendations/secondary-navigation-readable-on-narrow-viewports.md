---
type: OpinionatedRecommendation
slug: secondary-navigation-readable-on-narrow-viewports
maturity: validated
problem: secondary navigation can remain technically present on narrow screens while distinct destinations lose perceptible separation
validated_in: [franklinbaldo/causaganha]
---

# Navegação secundária legível em largura estreita

## Posição

Cobogó recomenda que navegações secundárias, inclusive rodapés e grupos auxiliares de links, preservem separação perceptível entre destinos nas larguras estreitas suportadas.

Ser secundária permite menor ênfase visual; não permite que rótulos distintos pareçam uma única sequência.

## Racional

Em telas estreitas, uma fileira desenhada para desktop pode continuar correta no HTML e clicável, mas comprimir os destinos até a estrutura deixar de ser clara para uma pessoa. A qualidade relevante é perceptiva: cada destino precisa continuar reconhecível como unidade distinta.

## Contrato

- manter cada destino secundário perceptível como unidade distinta;
- permitir quebra em linhas, lista, grade, espaçamento explícito, disclosure ou solução local equivalente;
- não introduzir rolagem horizontal global para acomodar o grupo;
- preservar rótulos, destinos, ordem semântica, foco e identidade local;
- observar ao menos uma largura estreita suportada e uma largura desktop.

## Critério observável

Na largura estreita representativa, uma pessoa consegue distinguir visualmente os destinos mostrados sem inferir separadores ausentes. Em desktop, o grupo continua compatível com a composição local.

## Escape hatch

O projeto pode recolher, omitir ou substituir uma navegação secundária em determinada largura quando a função continuar disponível de modo claro. O Cobogó não exige que todos os links secundários permaneçam simultaneamente visíveis.

## Evidência

No CausaGanha, a observação pública do commit `9661b442a779d215524cf748b95d3b29a5ddd572` mostrou os cinco links do rodapé comprimidos em 390×844. O código tinha links diretos no `nav`, enquanto a regra de quebra mirava uma lista inexistente.

A PR `franklinbaldo/causaganha#1103` restaurou o agrupamento sem alterar rótulos, destinos ou identidade. Ela foi incorporada como `943229226f045821fc44316986a8d2c397e1c74f`. O `Deploy Web` `33905126802` publicou esse mesmo commit e voltou a abrir as rotas públicas em 1280×900 e 390×844. O pacote pós-publicação `9949238460` mostra os links separados em linhas legíveis no celular e a composição centralizada preservada no desktop. A auditoria executada diretamente na URL pública registrou zero violações sérias ou críticas do axe, todos os controles esperados alcançados por teclado e nenhuma falha de foco nas doze combinações de rota e largura.

Isso torna a recomendação `validated`: em português comum, ela já funcionou em pelo menos um projeto real. Ainda não há dois projetos convergentes para chamá-la de `stable`.

## Falsificação

A recomendação deve ser revista ou abandonada se aplicações reais mostrarem de forma recorrente que separar perceptivelmente destinos secundários reduz compreensão ou eficiência, ou se um contrato mais geral explicar os mesmos casos com maior precisão e menos regras.
