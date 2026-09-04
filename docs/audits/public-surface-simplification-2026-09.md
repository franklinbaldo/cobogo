# Auditoria inicial da superfície pública — simplificação 2026-09

Esta auditoria é o primeiro passo executável da RFC 0003. Ela não remove APIs. Seu objetivo é mostrar onde a superfície pública atual dificulta a simplificação e quais famílias devem ser analisadas primeiro.

## Escopo

Foram usados como fonte imediata:

- `package.json`, que define exports e dependências públicas;
- `src/index.ts`, que define o root API explícito;
- `src/components/**`, que contém a implementação de componentes;
- `CLAUDE.md`, que descreve a fronteira atual entre core e consumidores.

Este documento é transitório. Ele deve desaparecer quando a migração estiver concluída; não é uma nova ontologia permanente do Cobogó.

## Achado 1 — o wildcard transforma componentes internos em API pública

`package.json` publica:

```json
"./components/*": {
  "svelte": "./dist/components/*.svelte",
  "default": "./dist/components/*.svelte"
}
```

Isso significa que a curadoria feita em `src/index.ts` não é uma fronteira real: qualquer componente empacotado em `dist/components` pode ser importado diretamente por consumidores.

### Efeito

- componentes experimentais ou históricos ganham custo de compatibilidade;
- remover/renomear um arquivo interno pode virar breaking change público;
- agentes podem descobrir e usar componentes que o Cobogó não recomenda;
- a quantidade de escolha percebida fica maior do que o design system realmente quer sustentar.

### Direção

Na próxima major version, substituir o wildcard por exports explícitos e pequenos. O pacote deve expor apenas abstrações que o Cobogó deliberadamente recomenda.

Classificação: **deprecar**.

## Achado 2 — o root API já mostra famílias que precisam ser tratadas como uma unidade

Hoje `src/index.ts` exporta explicitamente:

- `Button`
- `Card`
- `Badge`
- `ProfileCard`
- `DataTable`
- `SearchBar`
- `Tabs`
- `TabList`
- `Tab`
- `TabPanel`
- `Grid`
- `Column`
- `Tooltip`
- `Combobox`
- `DateRangePicker`
- `TimeRangePicker`
- `tokens`

O problema não é necessariamente haver 17 símbolos. O problema é eles aparecerem como uma lista plana, sem deixar claro qual problema visual cada família resolve nem quais nomes são detalhes internos de composição.

### Famílias iniciais para investigação

| Família | Símbolos atuais | Questão de simplificação | Estado |
| --- | --- | --- | --- |
| conteúdo/entidade | `Card`, `ProfileCard` | `ProfileCard` é uma abstração própria ou um caso de um pattern mais geral de entidade? | investigar/consolidar |
| tabs | `Tabs`, `TabList`, `Tab`, `TabPanel` | quatro exports de baixo nível são necessários para o consumidor ou deveriam aparecer como uma única família/pattern documentado? | investigar |
| layout | `Grid`, `Column` | são primitives mínimas ou carregam decisões históricas que deveriam virar CSS/pattern? | investigar |
| seleção temporal | `DateRangePicker`, `TimeRangePicker` | compartilham um contrato de range que pode reduzir API e implementação? | investigar/consolidar |
| coleção densa | `DataTable` | corresponde a um problema visual claro e recorrente; avaliar manutenção como pattern de dados | manter/investigar |
| busca/seleção | `SearchBar`, `Combobox` | distinguir busca de seleção sem criar variantes redundantes | investigar |
| feedback/ação | `Button`, `Badge`, `Tooltip` | primitives semânticas plausíveis; verificar se APIs estão mínimas | manter/investigar |

A classificação é deliberadamente provisória. Uma família só deve ser consolidada depois de comparar uso real e semântica, não apenas aparência.

## Achado 3 — `tokens` publica uma paleta fixa como se fosse foundation universal

O root export contém:

```ts
export const tokens = {
  colors: {
    papel: "#F5F1E8",
    azul: "#1B2B4B",
    vermelho: "#C8472E",
    ocre: "#D9A441",
    verde: "#2E6B4A"
  }
};
```

Isso conflita com a direção já documentada na gramática, segundo a qual não existe paleta Cobogó universal obrigatória e cor deve ter função ou memória explicável.

Uma paleta nomeada por cores concretas também torna mais difícil separar:

- semântica (`danger`, `surface`, `accent`, `muted` etc.);
- tema do consumidor;
- referência cultural;
- valores físicos de cor.

### Direção

Depreciar o objeto root `tokens` como contrato público. Foundations futuras devem distinguir tokens semânticos de temas concretos e não transformar uma paleta histórica em identidade obrigatória.

Classificação: **deprecar/substituir**.

## Achado 4 — a experiência publicada é Svelte-first, apesar do uso atual de Astro

O pacote atualmente:

- tem `svelte` como peer dependency obrigatório;
- publica condições `svelte` no root e em componentes;
- usa `svelte-package` para construir a biblioteca;
- trata `astro` como peer opcional.

Ao mesmo tempo, o próprio repositório usa Astro e a direção da RFC 0003 é permitir que Cobogó recomende explicitamente a stack que funciona melhor para os consumidores atuais.

Isso não significa remover Svelte imediatamente. Significa que a arquitetura publicada precisa ser reavaliada a partir da experiência desejada para um novo consumidor Astro, em vez de preservar a forma atual por inércia.

Classificação: **investigar como migração de stack pública**.

## Achado 5 — documentação atual ainda protege neutralidade de framework mais do que o necessário

`CLAUDE.md` afirma que Cobogó não é "one framework" e orienta a não transformar Astro, Svelte, React, Tailwind ou outra implementação em semântica do Cobogó.

A parte sobre semântica continua correta. O que muda com a RFC 0003 é a conclusão operacional: uma gramática independente de framework pode coexistir com **um caminho de implementação recomendado**.

Portanto a documentação precisará distinguir:

- semântica/gramática: não pertence ao framework;
- implementação recomendada hoje: pode ser Astro;
- suporte histórico/alternativo: não é obrigação do core.

Classificação: **atualizar após aceitação da RFC**.

## Princípio de decisão para a poda

Uma abstração pública deve sobreviver quando pelo menos uma destas condições for verdadeira:

1. representa um problema visual recorrente de forma melhor que HTML/CSS direto;
2. carrega comportamento acessível ou interação suficientemente difícil para justificar compartilhamento;
3. implementa uma decisão de gramática que consumidores não deveriam repetir;
4. possui uso real que não pode ser expresso com abstração menor sem perda relevante.

Uma abstração é candidata a consolidação/depreciação quando:

1. difere de outra principalmente por conteúdo ou cosmética;
2. é um caso especial de um pattern mais geral;
3. existe apenas por organização histórica de arquivos;
4. expõe detalhe interno que o consumidor não precisa escolher;
5. não tem consumidor conhecido e não corresponde a um problema recorrente;
6. força consumidores a conhecer a história do Cobogó para escolher corretamente.

## Ordem sugerida para PRs de consolidação

1. fechar a fronteira pública (`./components/*`) e definir exports deliberados para a próxima major;
2. remover/depreciar a paleta root `tokens` em favor de foundations semânticas;
3. consolidar primeiro famílias de baixo risco e sobreposição clara;
4. revisar composites interativos (`Tabs`, pickers, combobox) preservando acessibilidade;
5. alinhar a experiência do pacote ao caminho Astro recomendado;
6. migrar consumidores conforme adotarem a nova major.

## O que esta auditoria ainda não decide

- quais componentes serão efetivamente removidos;
- se `ProfileCard` será substituído por `Card` ou por um novo pattern de entidade;
- se subcomponentes de tabs continuarão públicos;
- se Svelte continuará como implementação interna, binding opcional ou será removido numa major futura;
- a forma final dos tokens semânticos.

Essas decisões devem aparecer em PRs pequenas, cada uma demonstrando qual duplicação ou custo de escolha elimina.

## Resultado

O primeiro problema estrutural não é um componente específico: é que o pacote torna pública uma superfície maior do que a curadoria real. A simplificação deve começar tornando **publicação uma decisão explícita**. Depois disso, cada família pode ser reduzida sem continuar criando compatibilidade acidental.