# COBOGÓ — Modernismo brasileiro, traduzido em interface.
A Brazilian modernist design system for public-interest software, built on **[Pico CSS](https://picocss.com/)** with a strict **semantic-only (classless)** authoring model.

Um design system focado em software público e de interesse cívico, inspirado nos princípios do modernismo brasileiro de funcionalidade, geometria e acessibilidade.

> ⚠️ **Migration in progress.** This README describes the target API on top of Pico CSS with semantic-only authoring. The shipped components on `main` still expose the legacy class-based API (`variant` props on `Button`/`Badge`, `.dark-mode` class for theming). Use the legacy API for now; the snippets below describe the API after the migration lands. Track progress on branch [`claude/cobogo-pico-semantic-6rDU2`](https://github.com/franklinbaldo/cobogo/tree/claude/cobogo-pico-semantic-6rDU2).

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

Compartilhar gramática, padrões e conhecimento de superfície aprendidos em uso real, sem transformar projetos diferentes em uma única interface. Cada consumer preserva sua identidade, densidade e hierarquia próprias; o Cobogó sobe apenas relações que se mostram reutilizáveis sem apagar essas diferenças.

Consumers e superfícies que ajudam a testar essa gramática incluem:
- [Verne](https://github.com/franklinbaldo/verne)
- [CausaGanha](https://github.com/franklinbaldo/causaganha)
- [Baliza](https://github.com/franklinbaldo/baliza)
- [FICHA](https://github.com/franklinbaldo/ficha)

