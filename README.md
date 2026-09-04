# COBOGÓ — Modernismo brasileiro, traduzido em interface.

Cobogó é uma **gramática visual brasileira + sistema de conhecimento reutilizável** para software de interesse público. O objetivo é compartilhar relações, defaults e contratos de superfície sem transformar produtos diferentes em uma única skin.

## API pública atual

O contrato compartilhado e estável para consumidores web é `cobogo/core`:

```css
@import "cobogo/core";
```

`cobogo/core` é CSS framework-agnostic. Não depende de Astro, Svelte ou semântica do Pico. Ele fornece papéis semânticos pequenos e overrideáveis para documento, cor, tipografia, espaçamento, geometria, foco, movimento reduzido e alguns atributos estruturais.

A identidade concreta continua no consumer. Um produto pode usar papel e cobalto, outro alto contraste administrativo, outro uma composição editorial própria; todos mapeiam seus valores locais para os mesmos papéis `--cobogo-*` quando isso transfere responsabilidade genérica para o core.

Exemplo mínimo:

```css
@import "cobogo/core";

:root {
  --cobogo-canvas: var(--bg);
  --cobogo-surface: var(--bg-raised);
  --cobogo-text: var(--fg);
  --cobogo-text-muted: var(--fg-muted);
  --cobogo-border: var(--border);
  --cobogo-accent: var(--accent);
  --cobogo-focus: var(--focus);
  --cobogo-focus-contrast: var(--bg);
}
```

O core também possui ownership do foco genérico e de `prefers-reduced-motion`. Consumers não devem duplicar esses contratos localmente quando já consomem o core; devem apenas mapear os papéis necessários e manter layout, identidade e estados de domínio downstream.

A referência normativa completa está em [`knowledge/foundations/core-web-api.md`](./knowledge/foundations/core-web-api.md).

## `cobogo/styles` e a camada legada

`cobogo/styles` continua exportado por compatibilidade e pelo próprio site do Cobogó. Ele contém a paleta histórica papel/concreto, tokens como `--papel-*`, `--concreto-*`, `--azul`, `--vermelho`, além de integração/estilos herdados da fase Pico.

Essa camada **não é o contrato semântico canônico entre consumidores**. Código novo que quer apenas as fundações compartilhadas deve preferir `cobogo/core`. A referência de [`src/styles/tokens.md`](./src/styles/tokens.md) documenta essa camada de identidade/compatibilidade e não substitui a API `--cobogo-*` do core.

Os componentes Svelte e padrões exportados pelo pacote continuam disponíveis onde forem úteis, mas não definem a semântica do core e não devem ser impostos a consumers framework-agnostic.

## Como o Cobogó governa superfícies

Cobogó é **opinionated**. Ele não espera dois produtos resolverem espontaneamente o mesmo problema para então ter uma posição: formula defaults fortes para UI, UX, acessibilidade, navegação, proveniência, estados e explicação pública; aplica essas posições em consumers reais; mede o resultado; e muda de ideia quando a evidência falsifica a tese.

Evidência determina **maturidade**, não permissão para recomendar:

- `opinionated` — recomendação fundamentada por princípio, racional, contrato observável e escape hatch; pode existir antes de adoção real;
- `validated` — aplicação real bem-sucedida em pelo menos um consumer;
- `stable` — convergência bem-sucedida em pelo menos dois consumers, sem apagar suas identidades locais;
- `retired` — evidência mostrou que a recomendação deve ser abandonada.

Dois consumers, portanto, são gate para `stable`, não para o Cobogó pensar, documentar ou implementar uma opinião. O sistema também mantém avaliações versionadas de qualidade pública em seis dimensões — clareza/D1, explicabilidade/D2, autonomia/D3, UX, UI e confiança — para que `gap_score: 0` nunca seja confundido com “superfície resolvida”.

A governança completa está em [`docs/rfcs/0002-opinionated-surface-governance.md`](./docs/rfcs/0002-opinionated-surface-governance.md), e a rotina operacional em [`docs/operations/opinionated-surface-routine.md`](./docs/operations/opinionated-surface-routine.md). O corpus normativo vive em [`knowledge/recommendations/`](./knowledge/recommendations/).

## Princípios

- **Relações antes de componentes.** O core compartilha papéis e contratos semânticos; layout e identidade permanecem locais quando não há razão para promovê-los.
- **Acessibilidade é forma.** Foco visível e movimento reduzido são fundações do core, não acabamento opcional por consumer.
- **Parentesco sem uniformidade.** Consumers devem ser reconhecivelmente relacionados na lógica de ritmo, contraste, estrutura e acessibilidade sem parecer clones.
- **Vão antes de massa.** Espaçamento, alinhamento e tipografia devem resolver relações antes de introduzir containers decorativos.
- **Evidência em pixels.** Decisões materiais de superfície são verificadas em renderizações reais; checks verdes sozinhos não provam qualidade visual.

## Install & Use

Enquanto não houver uma estratégia de release mais estável para todos os consumers, o pacote pode ser instalado diretamente do GitHub:

```bash
bun add github:franklinbaldo/cobogo#main
# ou
npm install github:franklinbaldo/cobogo#main
```

Consumers que precisam de reprodutibilidade forte podem vendorizar um snapshot imutável de `src/styles/core.css`, registrar commit + Git blob SHA e verificar os bytes no CI. CausaGanha, Ficha e O Vigia já exercitam esse modelo em superfícies diferentes.

### Atributos semânticos do core

O core mantém uma superfície propositalmente pequena:

```html
<div data-cobogo-surface>…</div>
<span data-cobogo-inscription>Fonte / metadado</span>
<code data-cobogo-data>RO-2026-001</code>
<div data-cobogo-state="warning">…</div>
<section data-cobogo-inverted>…</section>
<div data-cobogo-stack>…</div>
```

Para tema escuro explícito do core:

```html
<html data-cobogo-theme="dark">
```

`data-cobogo-inverted` não pinta a região: ele apenas rederiva o par de foco para uma região cujo fundo local é invertido em relação ao documento.

## Consumers e evidência

Consumers e superfícies que ajudam a testar a gramática incluem:

- [CausaGanha](https://github.com/franklinbaldo/causaganha)
- [FICHA](https://github.com/franklinbaldo/ficha)
- [O Vigia](https://ovigialocal.github.io/)
- [Verne](https://github.com/franklinbaldo/verne)
- [Baliza](https://github.com/franklinbaldo/baliza)

CausaGanha, Ficha e O Vigia já transferiram responsabilidade genérica real para o mesmo `cobogo/core` sem perder identidade própria. Essa evidência está documentada no corpus canônico.

## Objetivo

Compartilhar gramática, padrões e conhecimento de superfície aprendidos em uso real. O Cobogó pode propor uma opinião antes de adoção; consumidores reais validam, amadurecem, limitam ou rejeitam essa opinião. O core só deve crescer quando a responsabilidade compartilhada é mais clara do que a liberdade que ele retiraria do consumer.
