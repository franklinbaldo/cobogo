# RFC 0001 — Reconciliation report

Este relatório aplica `blank-sheet-redesign` ao Cobogó. A versão ideal foi desenhada a partir do propósito e das restrições, e só depois reconciliada com o estado brownfield.

## Propósito usado no exercício

> Cobogó existe para que projetos Franklin produzam interfaces brasileiras, acessíveis e aparentadas sem compartilhar uma skin ou framework, e para preservar o conhecimento de design que torna isso possível sem cada projeto reaprender tudo.

## Restrições reais

- há consumidores com necessidades radicalmente diferentes de densidade e composição;
- acessibilidade WCAG AA e HTML semântico já são compromissos fortes;
- o pacote atual é consumível como biblioteca Svelte e CSS;
- existe uma vitrine Astro e um histórico extenso de components/tests;
- há legado público que não pode ser quebrado por uma reconstrução conceitual instantânea;
- `okf-parser` já fornece identidade por path, frontmatter extensível, links, grafo, validação, relações tipadas, DuckDB e ferramentas MCP; não há justificativa para um knowledge engine paralelo;
- agentes devem poder operar sem interface web;
- Astronauta pode servir humanos, mas não pode se tornar gateway obrigatório;
- brasilidade precisa ser derivada de referências plurais e resultar em regras verificáveis, não em repertório ornamental.

## V-ideal em resumo

A versão ideal separa quatro coisas que hoje aparecem misturadas:

1. **knowledge** — corpus OKF de fontes, pesquisa, princípios, falhas, specimens e consumidores;
2. **canon + grammar** — regras normativas de composição;
3. **core web** — tokens/CSS/patterns framework-agnostic;
4. **bindings** — Svelte/Astro apenas onde consumidores justificam.

Pico, Svelte, Atomic Design e a vitrine são implementações/taxonomias/projeções, não a definição do sistema.

## Classificação das diferenças

| Elemento existente | Bucket primário | Ação reconciliada | Observação |
| --- | --- | --- | --- |
| **Pico como foundation** | existente preserva decisão superada | rebaixar para implementação substituível e decidir permanência em ADR posterior | A PR histórica que adotou Pico o apresentou explicitamente como nova direção tecnológica. Útil, mas não culturalmente load-bearing. |
| **Svelte como peer obrigatório** | existente está fixado por contrato, por enquanto | preservar compatibilidade no binding atual; retirar do núcleo conceitual | `package.json` expõe biblioteca Svelte e peer dependency. Não quebrar nesta RFC. |
| **Curva & Concreto** | existente contém conhecimento necessário | preservar a intuição como “estrutura explícita; gesto localizado”; abandonar o mapeamento rígido curva=interação/concreto=dado | A distinção estrutura/gesto restringe design; a regra de radius literal é frágil e produz dogma visual. |
| **papel/concreto** | existente contém conhecimento necessário | manter como uma foundation/tema legado a ser estudado, não como paleta canônica universal | Bons neutros e materialidade; ruins se confundidos com brasilidade obrigatória. |
| **modernismo brasileiro** | existente contém conhecimento necessário | ampliar de cânone exclusivo para uma das linhagens relevantes | Niemeyer/Costa/Bulcão/Bo Bardi permanecem, mas não esgotam design brasileiro. |
| **Brad Frost persona** | existente é história | mover autoridade para RFC/canon; logs permanecem arquivo histórico | A persona gerou disciplina útil, mas também ancorou Atomic Design como identidade. |
| **BRASILIANA** | existente contém conhecimento necessário | substituir ritual literário obrigatório por pesquisa persistida no corpus OKF; preservar boas observações ao destilá-las | O requisito de continuidade produziu memória, mas mistura diário de agente com fonte de design. |
| **WCAG AA** | existente contém conhecimento necessário | manter e elevar a “acessibilidade é forma” | É restrição real de consumidores e já possui regras concretas de foco, contraste e motion. |
| **sem classes** | existente preserva decisão superada | deixar de ser cânone; HTML semântico continua first-class | Proibir `class` universalmente é estratégia Pico, não princípio cultural nem de acessibilidade. |
| **Atomic Design** | existente contém conhecimento necessário | manter como taxonomia opcional de componentes depois de grammar | Útil para decomposição e inventário; insuficiente para explicar composição visual brasileira. |
| **vitrine manifesto** | ideal esqueceu restrição real | preservar uma superfície humana de demonstração, mas não obrigar que toda mudança conceitual vire homepage em 1–2 sessões | Visual evidence é valiosa; acoplamento rígido doutrina→vitrine produz trabalho cerimonial. |
| **session logs** | existente é história | preservar arquivo; novas decisões duráveis vão para OKF/RFC/ADR/tests | Logs contêm cicatrizes e achados, mas não devem ser fonte canônica viva. |
| **patterns cobogó/azulejo** | existente contém conhecimento necessário | preservar como specimens/repertório condicionado à função | Não são identidade default nem decoração permitida por simples `data-pattern`. |
| **tokens brasileiros por nome** | existente duplica fonte | separar token técnico de justificativa cultural; conhecimento de origem fica no corpus | Nome em português pode ser legítimo, mas não substitui semântica nem proveniência. |
| **global.css monolítico** | ideal é melhoria genuína | futuramente separar foundations/core/patterns sem big bang | A RFC não refatora CSS. |
| **knowledge fora de estrutura consultável** | ideal é melhoria genuína | introduzir corpus OKF canônico | Evita que pesquisa morra em `DESIGN.md`, logs ou PR body. |
| **Astronauta como admin obrigatório** | ideal seria erro de arquitetura | rejeitar | Agentes usam `okf-parser`; Astronauta é projeção/interface humana opcional. |

## Conhecimento preservado do legado

O redesenho não apaga estes achados:

- “modularity that breathes”;
- “never the same wall twice”;
- estrutura e contenção como pré-condição para expressão;
- HTML semântico e acessibilidade como parte da forma;
- necessidade de specimens e evidência visual;
- o reconhecimento explícito de que “generic component catalog with Brazilian colors” é failure mode;
- a intuição registrada no trabalho do `Grid`: o sistema deve restringir inteligentemente, não maximizar props.

## Conhecimento abandonado ou rebaixado

- Pico como identidade;
- `class=` como pecado arquitetural;
- Svelte 5 como lei do Cobogó;
- Atomic Design como ontologia;
- Brad Frost como autoridade do sistema;
- verde/azul/ocre/vermelho ou papel/concreto como prova de brasilidade;
- ornamento/pattern aplicado por nome como tradução cultural suficiente;
- “Curva & Concreto” como algoritmo universal de border-radius;
- obrigação de atualizar vitrine e diário de sessão para cada afiação doutrinária.

## Teste contra consumidores

### Astronauta

A v3 permite uma interface densa porque “densidade responde ao contexto”. A gramática comum aparece em eixos claros, separação por vão antes de caixas, sinais fortes para estado, repetição controlada e acessibilidade. Não exige os mesmos tipos, whitespace ou composição editorial do Vigia.

### O Vigia

A v3 permite texto ser arquitetura: hierarquia tipográfica, ritmo de leitura, arquivo, imagens e espaços mais abertos. O parentesco com Astronauta vem de regras de ritmo, estrutura, contraste, gesto localizado e uso justificado de cor/ornamento — não de copiar Card/Badge/Panel.

### Falha se clones

Se ambos usam a mesma grade, mesmos cards, mesmos raios e mesma densidade apenas porque o core exporta isso, Cobogó invadiu identidade local.

### Falha se estranhos

Se cada projeto recria spacing, estados, contraste, semântica e lógica de composição sem consultar o corpus/canon, Cobogó virou marca sem efeito.

## Próximas diferenças que ainda precisam de evidência

- quais tokens atuais merecem promoção a foundations realmente compartilhadas;
- quais patterns atuais têm uso estrutural e quais são decoração histórica;
- se Pico ainda reduz custo no core depois da separação conceitual;
- qual representação de relações semânticas é mais natural no OKF atual sem criar grafo paralelo;
- que specimens mínimos capturam parentesco entre Astronauta e O Vigia;
- quais decisões dos logs antigos merecem destilação para o corpus.

Esses pontos ficam deliberadamente fora da RFC 0001: são próximos passos experimentais, não premissas a congelar agora.
