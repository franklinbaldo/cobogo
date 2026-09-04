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

`package.json` publica `./components/*`. Isso significa que a curadoria feita em `src/index.ts` não é uma fronteira real: qualquer componente empacotado pode ser importado diretamente.

### Efeito

- componentes experimentais ou históricos ganham custo de compatibilidade;
- remover ou renomear arquivo interno pode virar quebra pública;
- agentes podem descobrir e usar componentes que o Cobogó não recomenda;
- a quantidade de escolha percebida fica maior do que o sistema quer sustentar.

### Direção

Na próxima versão incompatível, substituir o wildcard por exports explícitos e pequenos. O pacote deve expor apenas abstrações que o Cobogó deliberadamente recomenda.

Classificação: **deprecar**.

## Achado 2 — o root API mistura famílias e detalhes internos

`src/index.ts` publica Button, Card, Badge, ProfileCard, DataTable, SearchBar, Tabs, TabList, Tab, TabPanel, Grid, Column, Tooltip, Combobox, DateRangePicker, TimeRangePicker e tokens.

O problema não é simplesmente a contagem. A lista plana esconde quais símbolos formam uma família e quais são detalhes de composição.

Famílias iniciais a investigar: conteúdo/entidade; tabs; layout; seleção temporal; coleção densa; busca/seleção; feedback/ação. A decisão de consolidar deve comparar uso e semântica, não apenas aparência.

## Achado 3 — `tokens` publica uma paleta fixa como foundation universal

O root export publica cores concretas (`papel`, `azul`, `vermelho`, `ocre`, `verde`). Isso conflita com a gramática já documentada: não existe uma paleta Cobogó universal obrigatória; cor precisa ter função ou memória explicável.

### Direção

Depreciar o objeto root `tokens` como contrato público. Foundations futuras devem distinguir tokens semânticos, temas concretos e referências culturais.

Classificação: **deprecar/substituir**.

## Achado 4 — a distribuição continua Svelte-first

O pacote tem Svelte como peer obrigatório, publica condições Svelte e usa `svelte-package`; Astro é peer opcional. A RFC 0003 permite que a gramática seja independente de framework sem fingir que toda stack tem suporte equivalente.

Isso não decide remover Svelte. Decide que a arquitetura publicada deve ser reavaliada a partir da experiência recomendada hoje para novos consumidores.

Classificação: **investigar como migração de stack pública**.

## Achado 5 — a documentação ainda protege neutralidade tecnológica além do necessário

A semântica do Cobogó não pertence a Astro, Svelte, React ou outro framework. Mas disso não decorre que a experiência recomendada precise ser neutra. A documentação deve distinguir gramática independente, implementação recomendada e suporte histórico/alternativo.

## Princípio de decisão para a poda

Uma abstração pública deve sobreviver quando representa problema recorrente melhor que HTML/CSS direto, carrega comportamento acessível difícil de repetir, implementa decisão de gramática que consumidores não deveriam reinventar ou possui uso real que não cabe em abstração menor sem perda relevante.

É candidata a consolidação/depreciação quando difere de outra principalmente por conteúdo ou cosmética, é caso especial de padrão maior, existe por organização histórica, expõe detalhe interno, não tem uso conhecido nem problema recorrente ou força o consumidor a conhecer a história do Cobogó para escolher corretamente.

## Ordem sugerida

1. fechar a fronteira pública (`./components/*`) e definir exports deliberados para a próxima versão incompatível;
2. remover/depreciar a paleta root `tokens` em favor de foundations semânticas;
3. consolidar famílias de baixo risco e sobreposição clara;
4. revisar componentes interativos preservando acessibilidade;
5. alinhar a experiência do pacote ao caminho Astro recomendado;
6. migrar consumidores conforme adotarem a nova versão.

## Resultado

O primeiro problema estrutural não é um componente específico. O pacote torna pública uma área maior do que a curadoria real. A simplificação deve começar tornando **publicação uma decisão explícita**. Depois disso, cada família pode ser reduzida sem continuar criando compatibilidade acidental.