---
type: OpinionatedRecommendation
slug: primary-navigation-perceptible-on-narrow-viewports
maturity: stable
problem: First-level destinations can remain technically reachable while becoming undiscoverable when narrow layouts hide them behind un-signaled horizontal scrolling.
validated_in: [franklinbaldo/causaganha, franklinbaldo/ovigia-redacao]
---

# Primary navigation perceptible on narrow viewports

## Posição

Cobogó recomenda como default que destinos de primeiro nível permaneçam perceptíveis em viewports estreitos sem depender de scroll horizontal invisível. A navegação pode reflowar, virar disclosure/menu explícito, reduzir atalhos secundários ou manter rolagem horizontal com uma affordance inequívoca de continuação, mas o leitor não deve precisar adivinhar que há destinos importantes fora da borda visível.

## Racional

`overflow-x: auto` preserva alcançabilidade técnica, mas não necessariamente discoverability. Em uma superfície pública orientada a tarefas, esconder parte da navegação primária sem affordance lateral reduz a capacidade de entender o que o produto permite fazer, sobretudo para quem chega sem contexto.

A evidência de dois consumers mostra também que o problema não exige uma solução visual única. CausaGanha resolveu por reflow/wrap; O Vigia reduziu a competição entre destinos primários e atalhos de módulo e manteve rolagem apenas com sinalização visual de continuação. O contrato compartilhado é perceptibilidade, não um componente de menu específico.

## Contrato

- identificar os destinos de primeiro nível da superfície e distingui-los de atalhos contextuais/secundários;
- em viewport estreito suportado, tornar perceptível que os destinos primários existem;
- não depender de gesto horizontal **não sinalizado** como único mecanismo de descoberta;
- permitir wrap, menu/disclosure explícito, priorização semântica, affordance de continuação ou solução local equivalente;
- preservar foco, `aria-current`, ordem semântica e identidade local;
- validar em pixels no viewport estreito e verificar que desktop não regrediu.

## Critério observável

Na captura estreita representativa, todos os destinos primários estão visíveis **ou** a interface comunica de forma perceptível que a navegação continua/revela destinos restantes. Itens de primeiro nível não podem ficar simplesmente cortados além da borda como consequência acidental de `nowrap`/overflow sem pista visual ou controle correspondente.

## Escape hatch

Navegações deliberadamente espaciais — por exemplo, canvases, timelines ou carrosséis cujo gesto horizontal é o próprio modelo mental — podem divergir quando a existência de conteúdo lateral é explicitamente comunicada e a navegação principal do produto não se torna dependente de uma pista invisível.

## Evidência

### CausaGanha — reflow

Evidência negativa: `franklinbaldo/causaganha`, rota `/agentes`, artifact pós-merge da #979 `9824255700`, viewport `390×844`. A barra superior exibia `Consultar processo`, `Pesquisar publicações` e apenas o começo do destino seguinte; `SiteNav.astro` usava `overflow-x: auto`, `flex-wrap: nowrap` e `white-space: nowrap` sem affordance de continuação.

Aplicação validada: `franklinbaldo/causaganha#999`, head `15f58991e406df38073a2f045108cfafff016a4a`. O consumer resolveu localmente com wrap no breakpoint estreito, mantendo identidade e conteúdo. `CI` run `33622720447` e `Product Surface Visual Capture` run `33622720495` passaram no head; artifact `9843589937` mostra os seis destinos em três linhas no mobile e desktop preservado. A PR foi mergeada no landing `e82f5c00e8093dce1e580d33f4819bf89ac4e9ff`; `Deploy Web` run `33622993677` e a recaptura de `main` `Product Surface Visual Capture` run `33622993648` passaram.

### O Vigia — priorização + continuação sinalizada

Em `ovigialocal/ovigialocal.github.io#124`, o consumer resolveu a mesma relação por outra composição. Atalhos internos de módulo passaram a carregar `data-nav="modulo"` e deixam a barra em `≤480px`; editorias e `Arquivo` continuam como navegação editorial. A fileira restante preserva scroll horizontal, mas acrescenta `mask-image` na borda para sinalizar visualmente que a barra continua, além de scroll snap. A tagline do masthead também sai no telefone para devolver espaço à manchete, sem alterar a hierarquia desktop.

O head `bba32d37923c62ec3b5a9ebdd71fde5b6455db4f` passou `Astro contract` e `Visual capture`; o workflow visual renderizou dezesseis vistas desktop/mobile e a PR foi mergeada em `e699767c6b295c725c56ea8659c995f82ee1e9eb`.

Os dois consumers preservam informação e identidade por estratégias diferentes. Isso satisfaz o gate de convergência independente e promove a recomendação a `stable`.

## Falsificação

Cobogó deve enfraquecer ou retirar esta recomendação se evidência de uso mostrar que, em classes recorrentes de navegação pública, o scroll horizontal não sinalizado aumenta compreensão ou eficiência sem reduzir descoberta de destinos; ou se o contrato se mostrar incompatível com navegações legitimamente espaciais mesmo com o escape hatch acima.
