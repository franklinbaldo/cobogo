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

## Aprendizados validados

### Localidade de payload — `validated`

Uma interface interativa deve carregar no navegador apenas o contexto necessário para o estado que a pessoa está vendo agora. Contratos grandes podem continuar canônicos no build e no arquivo; a superfície pública deve particioná-los pela unidade real de interação quando isso reduz custo sem esconder informação.

Esse princípio foi validado no **CausaGanha** em `/stats`: o explorador por tribunal deixou de serializar para todo visitante o calendário completo de todos os tribunais (cerca de 13,9 MB no caso observado) e passou a buscar somente a partição do tribunal selecionado. A semântica e a cobertura continuaram iguais; o custo inicial da experiência caiu sem transformar uma decisão local de implementação em aparência compartilhada.

### Atalho temporal transparente — `validated`

Quando uma interface permite escolher datas livremente, intervalos recorrentes podem aparecer como atalhos sem criar um segundo modelo de estado. O atalho deve preencher os mesmos campos canônicos que a pessoa poderia editar à mão, manter o intervalo efetivo visível e preservar uma URL compartilhável quando a superfície já usa a URL como estado.

Esse princípio foi validado no **CausaGanha** em `/stats`: os atalhos de 7, 30 e 90 dias recalculam apenas a data inicial a partir da data final escolhida, mantêm os campos `De` e `Até` como fonte visível da consulta e sincronizam o resultado na URL. No mobile, os atalhos permanecem botões nativos com alvos de toque confortáveis, sem substituir a precisão da seleção manual.

A relação compartilhável é **intenção recorrente → estado canônico visível → resultado compartilhável**. Os períodos oferecidos, a linguagem e a presença visual continuam locais ao produto.

### Receita transparente — `validated`

Uma ferramenta avançada pode oferecer caminhos guiados sem esconder o mecanismo que executa o trabalho. A receita deve preencher um artefato compreensível e editável — consulta, comando, filtro ou configuração — e deixar a pessoa inspecioná-lo antes de executar. Também deve existir um caminho explícito para trabalhar sem a receita.

Esse princípio foi validado no **CausaGanha** em `/explorador`: receitas de período, CNJ, agregação e auditoria geram SQL completo no editor, só ficam disponíveis quando o dataset necessário foi validado e nunca executam automaticamente ao serem escolhidas. Quem chega de fora ganha um ponto de partida sem perder a capacidade de entender, alterar ou abandonar a sugestão.

A relação compartilhável é **intenção guiada → mecanismo visível → execução deliberada**. A linguagem da ferramenta, o formato do artefato e a apresentação visual continuam locais.

## Desenvolvimento

```bash
npm install
npm run build
```

## Princípio de evolução

Cobogó cresce quando um projeto real encontra uma decisão que vale compartilhar ou quando uma hipótese de design merece ser testada. A preferência é manter o sistema pequeno, previsível e útil sem transformar personalidade local em padrão global.