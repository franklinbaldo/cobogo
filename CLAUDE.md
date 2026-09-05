# COBOGÓ — Agent & Development Guide

Cobogó é uma **gramática visual brasileira + sistema vivo de conhecimento reutilizável de design**.

## Regra principal: entregue qualidade pública

Comece pelo que uma pessoa vê, entende e consegue fazer. Quando houver uma melhoria clara, implemente-a. Use documentação, skills, avaliações, issues e evidências para aumentar a qualidade da decisão — nunca como cerimônia que adia uma melhoria segura.

O site público `https://franklinbaldo.github.io/cobogo/` é um **produto e uma demonstração viva do Cobogó**. Ele deve ser bonito, expressivo, útil, navegável, acessível e convincente. A home deve mostrar a gramática funcionando, explicar o sistema e oferecer caminhos claros para começar, explorar padrões e chegar ao código.

## Onde buscar direção

1. `docs/rfcs/0003-simplify-design-system.md` — direção arquitetural atual;
2. `knowledge/` — gramática, recomendações e aprendizado vivo;
3. `DESIGN.md` — mapa curto do sistema;
4. `src/styles/core.css` e `src/styles/patterns.css` — contratos CSS compartilhados;
5. `src/index.ts` — API pública curada;
6. experiência real dos projetos — quando um projeto encontra solução melhor, o Cobogó aprende com ela.

## Produção primeiro

Em um projeto consumidor, escolha a solução que entrega a melhor experiência com simplicidade. Reuse Cobogó quando encaixar; crie localmente quando a solução ainda estiver nascendo; promova ao Cobogó quando houver conhecimento visual reutilizável. Mantenha significado de domínio e fluxo de produto no projeto. Consolide relações de apresentação recorrentes no Cobogó.

Cobogó cuida de hierarquia, ritmo, relações tipográficas, estados visuais, densidade, padrões de leitura, apresentação de interação, acessibilidade e outras relações reutilizáveis. Os projetos cuidam do significado de seus dados e ações.

Prefira HTML semântico + `cobogo/core` + `cobogo/patterns` quando isso expressar a relação com clareza. Use componentes públicos para comportamento, acessibilidade mecânica ou interação coordenada que realmente se beneficie da abstração.

## Implementação atual

- `cobogo/core` — fundações semânticas independentes de framework;
- `cobogo/patterns` — relações visuais reutilizáveis;
- raiz do pacote — componentes comportamentais Svelte curados;
- `cobogo/styles` — camada histórica disponível para projetos existentes;
- Astro — host web recomendado pela experiência atual;
- Svelte — implementação atual dos componentes comportamentais.

Essas escolhas evoluem com a experiência.

## Skills e rotinas

As skills em `.claude/skills/` e `franklinbaldo/skills` são ferramentas para acelerar trabalho. Use as que ajudarem a tarefa concreta e siga avançando.

Rotinas especializadas ficam disponíveis conforme a necessidade:
- `docs/consumer-workflow.md` — fluxo projeto → aprendizado → Cobogó;
- `docs/operations/opinionated-surface-routine.md` — melhoria contínua das superfícies públicas;
- `docs/operations/deprecation-and-breaking-changes.md` — evolução da API;
- `docs/rfcs/` — decisões arquiteturais;
- `knowledge/` — recomendações e experiência acumulada.

## Trabalho visual

Olhe a página como produto. Faça composição, hierarquia, tipografia, ritmo, espaço, cor, navegação, estados e responsividade trabalharem juntos. Use a gramática brasileira como estrutura contemporânea, com identidade própria de cada projeto.

Screenshots, comparação visual, navegador e testes servem para enxergar melhor e iterar. Para mudanças visuais, observe o resultado publicado em desktop e mobile e refine enquanto houver problema perceptível relevante.

## Verificação

Use os checks adequados à mudança. A base normal do repositório é:

```bash
npm test
npx astro check
npm run build
```

Leve PRs corretas até os checks verdes, merge e publicação. Quando algo mecânico falhar, corrija e continue.

## Compatibilidade

Compatibilidade é uma ferramenta de migração. Projetos podem fixar versões anteriores; a versão atual pode remover ou substituir abstrações fracas para ficar menor, mais clara e mais útil. Documente a migração de forma prática em `docs/operations/deprecation-and-breaking-changes.md`.

## Postura contínua

Sempre procure o próximo ganho público: tornar uma página mais clara, mais bonita, mais útil, mais confiável ou mais fácil de usar; simplificar uma abstração; transformar uma solução local boa em conhecimento compartilhado; ou experimentar uma nova tese visual. O Cobogó melhora fazendo.