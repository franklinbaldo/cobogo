# RFC 0003 — Simplificar o Cobogó como design system vivo

Status: proposta

## Resumo

Cobogó deve ser menor, mais coerente e mais útil para agentes.

Seu produto principal não é um catálogo crescente de componentes. É a **gramática visual + conhecimento operacional** que permite a projetos diferentes manterem uma identidade reconhecível, brasileira e consistente sem cada consumidor precisar reaprender design.

A implementação deve seguir uma regra simples:

> O domínio pertence ao consumidor. A apresentação visual é território do Cobogó sempre que puder ser abstraída de forma reutilizável.

Esta RFC transforma essa ideia em política de evolução: reduzir componentes sobrepostos, promover soluções locais generalizáveis para o core, permitir exceções locais legítimas, manter um caminho tecnológico recomendado em vez de tentar suportar todo framework e usar versionamento para liberar mudanças incompatíveis quando elas simplificarem o sistema.

## Motivação

O Cobogó cresceu historicamente por adição. Componentes foram introduzidos em momentos diferentes para resolver necessidades próximas, nem sempre com abstração suficiente. O resultado é uma superfície maior do que deveria, com peças parecidas que não necessariamente compartilham uma linguagem comum.

Isso tem três custos:

1. agentes precisam escolher entre alternativas que parecem equivalentes;
2. consumidores tendem a criar novas variações locais em vez de reutilizar uma abstração comum;
3. manutenção preserva decisões antigas mesmo quando a experiência posterior mostra um caminho melhor.

A RFC 0001 já definiu Cobogó como gramática visual antes de componentes. Esta RFC torna essa orientação operacional e aceita que simplificar pode exigir remover APIs e componentes antigos.

## Objetivo do Cobogó

Cobogó existe para que projetos diferentes sejam reconhecivelmente da mesma família visual e para que seus consumidores não precisem decidir novamente tudo que já foi aprendido sobre apresentação, legibilidade, brasilidade, acessibilidade e composição.

Um agente iniciando um projeto novo deve poder receber a instrução "aqui usamos Cobogó" e então encontrar:

- princípios visuais claros;
- padrões recomendados para problemas recorrentes de interface;
- exemplos concretos;
- componentes e estilos que implementam esses padrões;
- uma stack atualmente recomendada;
- critérios para decidir quando algo deve ser local ou promovido ao Cobogó.

O agente não deveria precisar ter bom gosto próprio para produzir uma interface coerente. O sistema deve carregar boa parte dessas decisões por ele.

## Cobogó é opinionado e aprende

Cobogó não busca neutralidade tecnológica nem suporte universal.

Ele registra o melhor caminho que a experiência dos projetos consumidores conhece **agora**. No momento, Astro é a escolha recomendada para novos consumidores porque é a stack em uso e conhecida pelo projeto. Isso não cria obrigação de manter implementações equivalentes para React, Vue, Svelte puro ou qualquer outro framework.

Se a experiência futura mostrar um caminho melhor, a recomendação pode mudar.

A gramática visual pode permanecer independente da tecnologia, mas a experiência recomendada de desenvolvimento não precisa fingir que todas as stacks são igualmente suportadas.

Consequências:

- uma stack recomendada pode ser substituída;
- bindings antigos podem ser depreciados;
- não se cria binding novo sem consumidor real que justifique seu custo;
- "framework-agnostic" não significa "manter suporte para todos os frameworks".

## Fronteira de responsabilidade

O consumidor conhece seu domínio. Cobogó conhece apresentação visual reutilizável.

Exemplo:

- Ficha sabe o que é CNPJ, onde consultar dados da Receita e como persistir esses dados;
- Cobogó deve saber como apresentar identidade, atributos, relações, alertas, estados e metadados de uma entidade de forma coerente.

Cobogó não deve absorver regras de negócio específicas para conseguir oferecer um padrão visual.

### Regra de promoção

Ao criar UI nova num consumidor, o agente deve perguntar primeiro:

> Isto é específico deste produto ou revela uma lacuna visual reutilizável do Cobogó?

Se a solução puder atender situações semelhantes em outros consumidores, ela deve preferencialmente nascer no Cobogó por meio de PR e depois ser consumida pelo projeto original.

Se for genuinamente específica do produto, pode permanecer local.

Customização local não é proibida. Reuso compartilhado é apenas o caminho preferido porque é assim que Cobogó acumula aprendizado.

## Padrões antes de componentes

O ponto de entrada mental do Cobogó deve ser o **problema visual**, não o nome do componente.

Um agente deveria procurar algo como:

- como apresentar uma entidade e seus atributos;
- como mostrar estado e alertas;
- como estruturar leitura longa;
- como organizar ações primárias e secundárias;
- como mostrar relações entre objetos;
- como apresentar uma coleção densa;
- como separar contexto, conteúdo e metadados.

O padrão recomendado então aponta para as primitivas, componentes, tokens e exemplos necessários.

Componentes são instrumentos da gramática. Não são a ontologia do sistema.

## Política de simplicidade

Cobogó não deve crescer monotonamente.

Adicionar uma abstração cria custo permanente de escolha, documentação, teste, compatibilidade e manutenção. Portanto, cada nova abstração deve justificar sua existência diante das abstrações já disponíveis.

Quando múltiplos componentes resolvem essencialmente o mesmo problema visual, a direção padrão é **consolidar**, não preservar variedade histórica.

Critérios para consolidação:

1. mesmo problema visual com diferenças cosméticas;
2. APIs diferentes que poderiam ser expressas por uma estrutura comum;
3. variações que deveriam ser propriedades, slots ou composição;
4. componentes sem consumidor atual conhecido;
5. abstrações que duplicam comportamento já coberto por HTML/CSS ou por outra primitive;
6. componentes que exigem conhecer detalhes históricos do Cobogó para escolher corretamente.

A meta não é atingir um número arbitrário de componentes. É minimizar a superfície necessária para cobrir bem os problemas reais dos consumidores.

## Depreciação e mudanças incompatíveis

Compatibilidade retroativa não é um objetivo superior à simplicidade.

Cobogó usa versionamento. Um consumidor que não puder migrar imediatamente pode continuar fixado numa versão anterior. Isso permite ao projeto corrigir abstrações ruins em versões novas sem carregar indefinidamente decisões históricas.

Política proposta:

- mudanças incompatíveis são aceitáveis quando reduzem duplicação ou melhoram significativamente a abstração;
- componentes substituídos devem apontar para o padrão ou API recomendada;
- depreciações devem ter motivo claro e caminho de migração quando houver consumidor conhecido;
- consumidores antigos não bloqueiam indefinidamente a evolução do core;
- o compromisso principal é com a coerência da versão atual.

## Aprendizado vindo dos consumidores

Todo consumidor é também campo de descoberta.

Quando uma solução nova surge em O Vigia, Ficha ou outro projeto, o trabalho não termina quando a página fica bonita. O agente deve avaliar se houve aprendizado reutilizável.

Possíveis destinos:

- regra visual → canon/grammar;
- solução recorrente → pattern;
- primitive reutilizável → core;
- componente necessário para executar um pattern → implementação compartilhada;
- solução verdadeiramente específica → permanece local;
- tentativa ruim → failure-mode / negative evidence.

Não é necessário provar reutilização em vários consumidores antes de promover uma solução. A barra inicial é haver uma abstração razoável para situações semelhantes, e não apenas para o caso concreto que a originou.

## Experiência desejada para agentes

Quando um agente recebe a instrução "este projeto usa Cobogó", o caminho esperado é:

1. identificar o problema de apresentação;
2. consultar a recomendação/pattern correspondente no Cobogó;
3. usar os instrumentos compartilhados existentes;
4. se eles não forem suficientes, avaliar se a necessidade é generalizável;
5. quando generalizável, implementar primeiro no Cobogó via PR;
6. consumir a nova abstração no projeto;
7. manter local apenas o que for realmente específico.

Cobogó deve explicar o caminho recomendado de forma curta e prática. Um agente não deve precisar ler toda a história do projeto para construir uma tela correta.

## Relação com a RFC 0001

Esta RFC preserva da RFC 0001:

- gramática antes de componentes;
- brasilidade como estrutura e não skin;
- conhecimento reutilizável como parte do sistema;
- acessibilidade como forma;
- parentesco visual entre consumidores sem exigir páginas idênticas.

Ela modifica a interpretação anterior em dois pontos:

1. **Universalidade tecnológica:** Cobogó pode recomendar e otimizar explicitamente para a stack que seus consumidores usam hoje. Framework independence da gramática não obriga neutralidade da experiência de desenvolvimento.
2. **Superfície existente:** componentes e bindings atuais não recebem presunção de permanência. Eles devem ser auditados e consolidados com base nos problemas visuais que resolvem.

## Plano de implementação em pilha

### PR 1 — RFC

Esta RFC. Define direção e critérios.

### PR 2 — Inventário da superfície pública

Inventariar componentes, styles, patterns, layouts e exports atuais. Para cada item registrar:

- problema visual que resolve;
- consumidores conhecidos;
- sobreposição com outros itens;
- classificação provisória: manter, consolidar, deprecar ou investigar.

O inventário não cria uma nova ontologia permanente; é instrumento de migração.

### PR 3 — Guia operacional para consumidores e agentes

Atualizar a documentação de contribuição/integração para tornar explícita a regra de promoção upstream, o escape local e o caminho recomendado para Astro.

### PR 4+ — Consolidação por famílias

Reduzir a superfície em pequenas famílias revisáveis. Cada PR deve:

- declarar qual duplicação elimina;
- preservar ou melhorar acessibilidade;
- atualizar specimens/examples;
- incluir caminho de migração quando necessário;
- remover a API antiga quando o versionamento permitir, em vez de manter wrappers indefinidamente.

A ordem concreta será decidida pelo inventário da PR 2.

## Critérios de sucesso

A mudança está funcionando quando:

- um agente consegue encontrar a solução recomendada pelo problema visual, não por tentativa de nomes de componentes;
- existem menos abstrações concorrentes para a mesma função;
- consumidores novos precisam escrever menos CSS/estrutura visual local;
- necessidades reutilizáveis originadas nos consumidores voltam ao Cobogó;
- novas versões podem remover decisões antigas sem medo de quebrar todos os consumidores de uma vez;
- projetos diferentes continuam reconhecíveis como parentes, ainda que seus domínios e composições sejam diferentes.

## Não objetivos

Esta RFC não:

- define imediatamente a lista final de primitives/componentes;
- remove componentes nesta PR;
- exige migração imediata dos consumidores;
- proíbe componentes locais;
- promete suporte a múltiplos frameworks;
- troca Astro agora;
- transforma regras de negócio dos consumidores em abstrações do Cobogó.

## Decisão curta

> Cobogó deve ser a menor gramática visual operacional capaz de carregar a identidade e o aprendizado dos nossos projetos. Quando um consumidor precisar inventar UI, primeiro deve procurar uma abstração reutilizável no Cobogó; quando a superfície compartilhada crescer por duplicação, devemos consolidar e remover, não apenas adicionar mais uma peça.