# Cobogó

Cobogó é uma **gramática visual brasileira** para compartilhar relações de design entre produtos sem apagar a identidade de cada um.

O objetivo é simples: um projeto que usa Cobogó pode reaproveitar decisões que merecem sobreviver — hierarquia, estado, ritmo, leitura, foco e ação — enquanto tipografia, cor, proporção e acabamento continuam locais quando carregam a voz do produto.

Cobogó **não é um tema** e não exige que projetos diferentes pareçam da mesma família.

## Stack

- **Panda CSS** é o motor do design system;
- **Astro** é o host de referência para sites estáticos;
- **Cobogó** é um preset Panda opinionado com tokens e recipes.

## Primeiro uso em um projeto Astro

Instale o Cobogó e o Panda:

```bash
npm install github:franklinbaldo/cobogo#main
npm install -D @pandacss/dev
```

Configure o preset:

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

Então comece por uma relação real, não por uma aparência. Por exemplo, uma ação principal com um caminho secundário:

```astro
---
import { button } from '../styled-system/recipes'
---

<div>
  <button class={button({ visual: 'solid' })}>Continuar</button>
  <a href="/detalhes">Ver detalhes</a>
</div>
```

A relação compartilhável é **principal → secundária**. O produto continua livre para decidir a voz visual que faz sentido para seu contexto.

No SSG do Astro, o Panda extrai os estilos no build. A aparência não exige uma aplicação React no navegador.

## O que o preset entrega agora

Tokens de cor, tipografia, espaço, tamanhos, breakpoints, radii e sombras, além das recipes `button`, `card`, `badge`, `input`, `alert`, `article`, `table` e `navLink`.

O repositório também é a demonstração: `src/pages/index.astro` usa o próprio preset Cobogó para explicar e mostrar a gramática.

## Desenvolvimento

```bash
npm install
npm run build
```

## Princípio de evolução

Cobogó cresce quando um projeto real encontra uma decisão que vale compartilhar ou quando uma hipótese de design merece ser testada. A preferência é manter o sistema pequeno, previsível e útil sem transformar personalidade local em padrão global.
