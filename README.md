# COBOGÓ — Modernismo brasileiro, traduzido em interface.
A Brazilian modernist design system for public-interest software, built on **[Pico CSS](https://picocss.com/)** with a strict **semantic-only (classless)** authoring model.

Um design system focado em software público e de interesse cívico, inspirado nos princípios do modernismo brasileiro de funcionalidade, geometria e acessibilidade.

> ⚠️ **Migration in progress.** This README describes the target API on top of Pico CSS with semantic-only authoring. The shipped components on `main` still expose the legacy class-based API (`variant` props on `Button`/`Badge`, `.dark-mode` class for theming). Use the legacy API for now; the snippets below describe the API after the migration lands. Track progress on branch [`claude/cobogo-pico-semantic-6rDU2`](https://github.com/franklinbaldo/cobogo/tree/claude/cobogo-pico-semantic-6rDU2).

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

- **Pico CSS classless como base.** Estilo é aplicado a elementos HTML semânticos (`<article>`, `<button>`, `<nav>`, `<header>`, `<main>`, `<aside>`, `<footer>`, `<figure>`, `<dl>`…), não a classes.
- **Sem `class` no markup.** Variantes se expressam via atributos semânticos e `data-*` (`data-theme`, `data-pattern`, `data-intent`, `aria-invalid`).
- **COBOGÓ = Pico + grammar brasileira.** Os tokens (`--papel-*`, `--concreto-*`, `--azul`, `--vermelho`, `--ocre`, `--verde`) são mapeados sobre as variáveis `--pico-*`.

## Install & Use

Instale via GitHub (até existir release no NPM):

```bash
bun add github:franklinbaldo/cobogo#main @picocss/pico
# ou: npm install github:franklinbaldo/cobogo#main @picocss/pico
```

Quando houver release tagueada, use a tag específica (`#v0.1.0` etc).

### Importar CSS

No layout principal, importe Pico (classless) **antes** dos tokens COBOGÓ:

```astro
---
import "@picocss/pico/css/pico.classless.css";
import "cobogo/styles";
---
```

`cobogo/styles` traz a paleta, tipografia, escala, radius e sombras como CSS variables — e sobrescreve as variáveis `--pico-*` correspondentes. Veja a referência completa em [`src/styles/tokens.md`](./src/styles/tokens.md).

### Escrever páginas

Páginas e layouts usam **HTML semântico puro**. Não há classes utilitárias nem variantes via `class`:

```astro
<body data-theme="light">
  <header>
    <nav>
      <a href="/">COBOGÓ</a>
    </nav>
  </header>
  <main>
    <article>
      <header><h1>Manifesto</h1></header>
      <p>...</p>
      <footer>
        <button>Ver manifesto</button>
      </footer>
    </article>
  </main>
  <footer>...</footer>
</body>
```

### Importar componentes Svelte

Os componentes COBOGÓ renderizam elementos semânticos e expõem variantes via `data-*` attributes — não via classes:

```astro
---
import Button from "cobogo/components/Button";
import Card from "cobogo/components/Card";
import Badge from "cobogo/components/Badge";
---

<Button intent="primary">Ver manifesto</Button>
<Card>...</Card>
<Badge intent="info">Novo</Badge>
```

Componentes disponíveis: `Button`, `Card`, `Badge`, `ProfileCard`, `DataTable`, `SearchBar`, e os padrões cobogó (`patterns/CobogoCircular`, `patterns/CobogoHexagonal`, `patterns/CobogoLosango`, `patterns/CobogoCruz`).

### Tema (Dark Mode)

Siga a convenção do Pico:

```html
<html data-theme="light"><!-- ou "dark", ou "auto" --></html>
```

## Objetivo

Compartilhar gramática, padrões e conhecimento de superfície aprendidos em uso real, sem transformar projetos diferentes em uma única interface. Cada consumer preserva sua identidade, densidade e hierarquia próprias. O Cobogó pode propor e implementar uma opinião antes de adoção real; uso em consumers valida, amadurece ou rejeita essa opinião.

Consumers e superfícies que ajudam a testar essa gramática incluem:
- [Verne](https://github.com/franklinbaldo/verne)
- [CausaGanha](https://github.com/franklinbaldo/causaganha)
- [Baliza](https://github.com/franklinbaldo/baliza)
- [FICHA](https://github.com/franklinbaldo/ficha)

