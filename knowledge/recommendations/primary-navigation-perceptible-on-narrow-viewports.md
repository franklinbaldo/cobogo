---
type: OpinionatedRecommendation
slug: primary-navigation-perceptible-on-narrow-viewports
maturity: validated
problem: First-level destinations can remain technically reachable while becoming undiscoverable when narrow layouts hide them behind un-signaled horizontal scrolling.
validated_in: [franklinbaldo/causaganha]
---

# Primary navigation perceptible on narrow viewports

## Posição

Cobogó recomenda como default que destinos de primeiro nível permaneçam perceptíveis em viewports estreitos sem depender de scroll horizontal invisível. A navegação pode reflowar, virar disclosure/menu explícito ou adotar outra solução local, mas o leitor não deve precisar adivinhar que há destinos importantes fora da borda visível.

## Racional

`overflow-x: auto` preserva alcançabilidade técnica, mas não necessariamente discoverability. Em uma superfície pública orientada a tarefas, esconder parte da navegação primária sem affordance lateral reduz a capacidade de entender o que o produto permite fazer, sobretudo para quem chega sem contexto.

## Contrato

- identificar os destinos de primeiro nível da superfície;
- em viewport estreito suportado, tornar perceptível que todos esses destinos existem;
- não depender de gesto horizontal não sinalizado como único mecanismo de descoberta;
- permitir wrap, menu/disclosure explícito, distribuição em mais de uma linha ou solução local equivalente;
- preservar foco, `aria-current`, ordem semântica e identidade local;
- validar em pixels no viewport estreito e verificar que desktop não regrediu.

## Critério observável

Na captura estreita representativa, todos os destinos primários estão visíveis ou existe um controle explícito que comunica e revela os destinos restantes. Nenhum item de primeiro nível fica simplesmente cortado além da borda como consequência acidental de `nowrap`/overflow.

## Escape hatch

Navegações deliberadamente espaciais — por exemplo, canvases, timelines ou carrosséis cujo gesto horizontal é o próprio modelo mental — podem divergir quando a existência de conteúdo lateral é explicitamente comunicada e a navegação principal do produto não se torna dependente de uma pista invisível.

## Evidência

Evidência negativa: `franklinbaldo/causaganha`, rota `/agentes`, artifact pós-merge da #979 `9824255700`, viewport `390×844`. A barra superior exibia `Consultar processo`, `Pesquisar publicações` e apenas o começo do destino seguinte; `SiteNav.astro` usava `overflow-x: auto`, `flex-wrap: nowrap` e `white-space: nowrap` sem affordance de continuação.

Aplicação validada: `franklinbaldo/causaganha#999`, head `15f58991e406df38073a2f045108cfafff016a4a`. O consumer resolveu localmente com wrap no breakpoint estreito, mantendo a identidade e o conteúdo. `CI` run `33622720447` e `Product Surface Visual Capture` run `33622720495` passaram no head; artifact `9843589937` mostra os seis destinos em três linhas no mobile e desktop preservado. A PR foi mergeada no landing `e82f5c00e8093dce1e580d33f4819bf89ac4e9ff`; `Deploy Web` run `33622993677` e a recaptura de `main` `Product Surface Visual Capture` run `33622993648` passaram, produzindo artifact `9843687466` ligado ao landing.

A recomendação portanto está `validated` com um consumer. Um segundo consumer independente que demonstre o mesmo contrato por solução própria pode sustentar promoção a `stable`; não é necessário esperar por isso para recomendar o default.

## Falsificação

Cobogó deve enfraquecer ou retirar esta recomendação se evidência de uso mostrar que, em classes recorrentes de navegação pública, o scroll horizontal não sinalizado aumenta compreensão ou eficiência sem reduzir descoberta de destinos; ou se o contrato se mostrar incompatível com navegações legitimamente espaciais mesmo com o escape hatch acima.
