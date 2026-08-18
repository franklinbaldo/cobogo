# Iconografia brasileira — bundle experimental

Cada ícone é um conceito OKF em Markdown com `type: oficina-icon`.

O contrato detalhado do tipo está em [`../types/oficina-icon.md`](../types/oficina-icon.md). O Markdown é a autoridade semântica; SVG, PNG e previews são recursos visuais associados ao conceito.

## Estados

`status` usa a sequência:

- `proposed` — objeto/ideia identificado, ainda sem pesquisa cultural suficiente;
- `researched` — contexto e referências culturais registradas;
- `drawn` — família visual e assets produzidos;
- `pressure-tested` — usado ou testado em contexto real de consumer;
- `adopted` — adoção downstream comprovada, ainda sem implicar core/canon;
- `rejected` — hipótese descartada com razão registrada.

Não saltar de `proposed` para `adopted` apenas porque o desenho é atraente.

## Contrato de `oficina-icon`

Campos de frontmatter recomendados:

- `type: oficina-icon`
- `name` — nome humano em português;
- `slug` — identificador estável kebab-case;
- `status` — estado experimental;
- `category` — casa, rua, comida, infraestrutura, fauna, flora, instituições, cultura etc.;
- `cultural_relevance` — resumo curto do motivo pelo qual o objeto interessa à iconografia brasileira;
- `cultural_scope` — recorte geográfico/social/histórico; evitar declarar como “brasileiro universal” o que é regional ou situacional;
- `stereotype_risk` — risco de caricatura, exotização ou uso como adereço;
- `semantic_candidates` — possíveis metáforas de interface a testar, não significados universais;
- `avoid_semantics` — significados que não devem ser inferidos sem evidência;
- `research_status` — `needs-research`, `partial` ou `sourced`;
- `visual_family` — família/gride visual quando houver desenho;
- `license` — licença dos assets próprios quando publicada;
- `svg`, `png_1x`, `png_2x`, `preview` — caminhos/URLs **somente quando os arquivos existirem**;
- `source_links` — fontes culturais/visuais quando a pesquisa estiver documentada.

Campos de asset não são obrigatórios em `proposed`/`researched`. A partir de `drawn`, `svg` e pelo menos um preview raster devem existir e resolver.

## Corpo do Markdown

Cada registro deve explicar:

1. **Por que este objeto?** — relevância cultural sem transformar familiaridade em universalidade;
2. **O que estamos observando?** — forma, uso, presença cotidiana, materialidade ou relação social;
3. **Hipóteses semânticas** — usos de interface que valem experimentar;
4. **Onde não usar** — limites e risco de metáfora confusa;
5. **Pesquisa pendente** — o que falta sustentar antes do desenho ou adoção;
6. **Evidência downstream** — consumers/testes reais quando existirem;
7. **Assets** — links apenas para versões realmente publicadas.

## Grid visual

O bundle não define ainda a gramática final dos desenhos. Antes de produzir uma coleção grande, os primeiros 12–20 ícones devem testar e documentar ao menos:

- grid-base e optical box;
- espessura e comportamento de stroke/fill;
- terminais e cantos;
- nível máximo de detalhe em 16/20/24/32 px;
- reconhecimento monocromático;
- comportamento em dark/light;
- consistência entre objetos muito geométricos e orgânicos.

A gramática visual só deve virar contrato depois de specimens comparáveis existirem.
