# COBOGÓ — gramática visual brasileira para software

Cobogó é uma **gramática visual brasileira + sistema de conhecimento reutilizável**. Ele ajuda projetos diferentes a compartilhar boas decisões de apresentação sem transformar todos na mesma interface.

Não é um catálogo de componentes, uma skin única nem uma obrigação de framework.

## Caminho simples

Para fundações semânticas compartilhadas:

```css
@import "cobogo/core";
```

Para relações visuais reutilizáveis que não precisam de comportamento de componente:

```css
@import "cobogo/patterns";
```

O pacote também expõe uma API Svelte curada para comportamentos que justificam um componente.

`cobogo/styles` continua disponível **por compatibilidade com consumers existentes**. Ele carrega decisões visuais históricas e não é a identidade canônica que projetos novos precisam adotar.

## Princípios

- **Produção primeiro.** Um consumer nunca precisa esperar uma abstração upstream para publicar.
- **Apresentação no Cobogó; domínio no consumer.** Cobogó não precisa saber o que significa CNPJ, processo, contrato ou matéria jornalística para apresentar bem essas relações.
- **Patterns antes de wrappers.** HTML semântico + `core` + `patterns` é preferível quando resolve o problema. Componentes sobrevivem quando carregam comportamento, acessibilidade ou interação coordenada de verdade.
- **Parentesco sem uniformidade.** Projetos podem ser reconhecivelmente relacionados sem parecer clones.
- **Acessibilidade é forma.** Foco, semântica, teclado, contraste e reduced motion fazem parte da solução visual.
- **Compatibilidade não é sagrada.** Consumers podem fixar versões antigas; a versão atual pode remover abstrações fracas para ficar menor e mais coerente.
- **O sistema aprende.** Uso real pode validar, limitar, substituir ou aposentar uma recomendação.

## Tecnologia atual

Astro é a recomendação atual para novos sites porque é onde a experiência operacional está se acumulando. Os componentes comportamentais atuais são Svelte. Nenhum dos dois define a identidade do Cobogó para sempre.

O site público Astro é intencionalmente um **blank slate mínimo**. Ele é uma superfície de apresentação e teste, não um template nem fonte normativa do design system.

## Instalação

Enquanto o fluxo de releases amadurece, o pacote pode ser consumido diretamente do GitHub:

```bash
npm install github:franklinbaldo/cobogo#main
# ou
bun add github:franklinbaldo/cobogo#main
```

## Onde está a autoridade

Quando houver dúvida, comece por:

1. [`docs/rfcs/0003-simplify-design-system.md`](./docs/rfcs/0003-simplify-design-system.md) — direção arquitetural atual;
2. [`knowledge/`](./knowledge/) — gramática, recomendações, evidência e aprendizado vivo;
3. [`DESIGN.md`](./DESIGN.md) — mapa curto do sistema;
4. [`src/styles/core.css`](./src/styles/core.css) e [`src/styles/patterns.css`](./src/styles/patterns.css) — contratos CSS atuais;
5. [`src/index.ts`](./src/index.ts) — API de componentes deliberadamente exportada.

O fluxo consumer → aprendizado → Cobogó está em [`docs/consumer-workflow.md`](./docs/consumer-workflow.md).

## Desenvolvimento

```bash
npm test
npx astro check
npm run build
```

O workflow de preview verifica a home real em desktop/mobile, acessibilidade semântica e reduced motion.

O histórico de mudanças está em [`CHANGELOG.md`](./CHANGELOG.md).
