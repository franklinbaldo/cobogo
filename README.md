# Cobogó

Cobogó é o design system compartilhado dos projetos de Franklin Baldo.

O objetivo é simples: **um projeto que usa Cobogó já começa com a aparência da família** — tipografia, cores, espaço, estados, superfícies e recipes — sem exigir React e sem sacrificar SSG.

## Stack

- **Panda CSS** é o motor do design system;
- **Astro** é o host de referência para sites estáticos;
- **Cobogó** é um preset Panda opinionado com tokens e recipes.

## Usar em um projeto Astro

```bash
npm install github:franklinbaldo/cobogo#main
npm install -D @pandacss/dev
```

```ts
// panda.config.ts
import { defineConfig } from '@pandacss/dev'
import cobogo from 'cobogo/preset'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  presets: [cobogo],
  outdir: 'styled-system',
})
```

No CSS de entrada:

```css
@layer reset, base, tokens, recipes, utilities;
```

E então use as APIs geradas pelo Panda:

```astro
---
import { css } from '../styled-system/css'
import { button, card } from '../styled-system/recipes'
---

<article class={card()}>
  <h1 class={css({ textStyle: 'title' })}>Meu projeto</h1>
  <a class={button({ visual: 'solid' })}>Continuar</a>
</article>
```

No SSG do Astro, o Panda extrai os estilos no build. A aparência não exige uma aplicação React no navegador.

## O que o preset entrega agora

Tokens de cor, tipografia, espaço, tamanhos, breakpoints, radii e sombras, além das recipes `button`, `card`, `badge`, `input`, `alert`, `article`, `table` e `navLink`.

O repositório também é a demonstração: a página em `src/pages/index.astro` usa o próprio preset Cobogó.

## Desenvolvimento

```bash
npm install
npm run build
```

## Princípio de evolução

Cobogó cresce quando um projeto real precisa de uma decisão visual compartilhável. A preferência é manter o preset pequeno e previsível.
