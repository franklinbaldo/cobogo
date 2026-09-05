# COBOGÓ — gramática visual brasileira para software

Cobogó é uma **gramática visual brasileira + sistema de conhecimento reutilizável**. Ele ajuda projetos diferentes a compartilhar boas decisões de apresentação preservando a identidade de cada produto.

## Veja o Cobogó funcionando

A home pública em `https://franklinbaldo.github.io/cobogo/` é a demonstração viva do sistema. Ela existe para mostrar, e não apenas descrever, como hierarquia, ritmo, tipografia, espaço, estados, ações e relações podem formar interfaces brasileiras contemporâneas.

O site evolui junto com o sistema: novas decisões podem ser experimentadas ali, observadas em desktop e mobile e incorporadas ao conhecimento compartilhado.

## Comece simples

Para fundações semânticas compartilhadas:

```css
@import "cobogo/core";
```

Para relações visuais reutilizáveis:

```css
@import "cobogo/patterns";
```

O pacote também expõe uma API Svelte curada para comportamentos que se beneficiam de componentes.

`cobogo/styles` continua disponível como camada de compatibilidade para projetos existentes que usam a identidade histórica; não é o ponto de partida recomendado para trabalho novo.

## Princípios

- **Produção primeiro.** A solução deve ajudar produtos a chegar ao ar melhores e mais rápido.
- **Apresentação no Cobogó; domínio no projeto.** O sistema compartilha relações visuais enquanto cada produto preserva seu significado.
- **Patterns antes de wrappers.** HTML semântico + `core` + `patterns` é o caminho simples para relações puramente visuais.
- **Parentesco com identidade.** Projetos podem compartilhar qualidade e linguagem sem parecer clones.
- **Acessibilidade é forma.** Foco, semântica, teclado, contraste e movimento fazem parte da composição.
- **Evolução prática.** Versões permitem simplificar a API e substituir abstrações fracas.
- **Aprendizado contínuo.** Uso real valida, melhora ou substitui recomendações.

## Tecnologia atual

Astro é a recomendação atual para novos sites porque concentra experiência operacional recente. Os componentes comportamentais atuais são Svelte. Essas escolhas evoluem conforme a experiência do portfólio.

## Instalação

```bash
npm install github:franklinbaldo/cobogo#main
# ou
bun add github:franklinbaldo/cobogo#main
```

## Explore

1. [`docs/rfcs/0003-simplify-design-system.md`](./docs/rfcs/0003-simplify-design-system.md) — direção arquitetural;
2. [`knowledge/`](./knowledge/) — gramática, recomendações e aprendizado vivo;
3. [`DESIGN.md`](./DESIGN.md) — mapa do sistema;
4. [`src/styles/core.css`](./src/styles/core.css) e [`src/styles/patterns.css`](./src/styles/patterns.css) — fundações e padrões;
5. [`src/index.ts`](./src/index.ts) — API pública curada;
6. [`docs/consumer-workflow.md`](./docs/consumer-workflow.md) — como soluções dos projetos voltam ao Cobogó.

## Desenvolvimento

```bash
npm test
npx astro check
npm run build
```

Os workflows observam a home em desktop e mobile e verificam acessibilidade. O objetivo é usar essa observação para continuar refinando o produto.

O histórico de mudanças está em [`CHANGELOG.md`](./CHANGELOG.md).