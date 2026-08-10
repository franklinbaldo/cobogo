# RFC 0001 — Cobogó como gramática visual brasileira e knowledge system

Status: proposta

## Propósito

Cobogó existe para que qualquer projeto Franklin possa produzir interfaces reconhecivelmente brasileiras, acessíveis e coerentes entre si, sem precisar inventar sua própria linguagem visual nem adotar um framework específico.

Cobogó também existe para acumular, relacionar e tornar reutilizável o conhecimento adquirido sobre design brasileiro aplicado a software.

Em uma frase operacional:

> Cobogó centraliza a gramática que permite identidades próprias dentro da mesma família; não centraliza a aparência dos projetos.

## Problema

O repositório atual possui conhecimento valioso sobre modernismo brasileiro, modularidade, restrição, acessibilidade e evidência visual, mas esse conhecimento está acoplado a decisões contingentes: Pico CSS classless, Svelte 5, Atomic Design, uma paleta específica, uma taxonomia de componentes e uma persona Brad Frost.

Isso cria dois riscos opostos:

1. reduzir Cobogó a uma skin brasileira de uma stack específica;
2. preservar referências culturais como prosa inspiracional sem consequência verificável na interface.

Esta RFC separa conhecimento, gramática, implementação e bindings.

## Arquitetura

```text
Cobogó
  = design knowledge + visual grammar

okf-parser
  = knowledge engine / headless admin

Astronauta
  = human interface / optional projection engine

skills
  = operational reasoning for agents
```

O corpus OKF é canônico. Agentes trabalham diretamente com `okf-parser`. Astronauta não é gateway obrigatório: é uma interface humana e, potencialmente, um projection engine/SSG para bundles OKF quando isso trouxer valor.

```text
knowledge/
   ↓
okf-parser
   ├── agentes
   ├── queries
   ├── validation
   ├── graph
   ├── preview/commit
   └── mutation
          │
          └──────────────┐
                         ▼
                    Astronauta
                 browse / edit / project
```

## O que é normativo

A ordem de autoridade passa a ser:

1. cânone operacional do Cobogó;
2. gramática e regras de acessibilidade;
3. decisões arquiteturais/ADRs vigentes;
4. foundations e contratos públicos do core;
5. bindings e componentes;
6. specimens e vitrine.

`DESIGN.md` deixa de ser a “prescriptive ground-truth” monolítica. Seu conhecimento será migrado gradualmente para a camada correta.

## Cânone inicial

O cânone deve permanecer pequeno. Uma regra só entra se restringir implementação e puder ser revisada contra exemplos concretos.

### 1. Vão antes de massa

**Regra:** antes de adicionar superfície, borda, fundo ou container, pergunte se hierarquia pode ser produzida por espaço, recorte, alinhamento ou permeabilidade.

**Derivação:** o cobogó é primeiro um dispositivo funcional de ventilação, luz e privacidade; sua identidade nasce do vazio que trabalha, não da decoração aplicada ao bloco.

**Consequência visível:** menos caixas fechadas; divisões podem ocorrer por respiro, colunas, recortes, transparência parcial e mudança de ritmo.

**Não usar como desculpa para:** reduzir contraste necessário, eliminar affordances ou deixar densidade administrativa ilegível.

**Critério de revisão:** cada container adicional deve resolver uma necessidade estrutural ou interativa que espaço e alinhamento não resolvem.

### 2. Módulo sem monotonia

**Regra:** repetição deve produzir sistema, mas aceitar variação controlada que mantenha identidade sem duplicar composição.

**Derivação:** painéis de Athos Bulcão combinam poucas peças e orientações em composições que permanecem reconhecíveis sem repetição rígida.

**Consequência visível:** layouts compartilham escala, eixos e ritmos, mas não precisam repetir a mesma card grid ou o mesmo hero.

**Não usar como desculpa para:** randomização, desalinhamento arbitrário ou quebra de previsibilidade em fluxos críticos.

**Critério de revisão:** dois consumidores podem ser reconhecidos como parentes mesmo quando a estrutura de página é diferente.

### 3. Estrutura explícita; gesto localizado

**Regra:** a estrutura principal deve ser legível e previsível; gestos expressivos entram onde carregam significado, atenção ou identidade.

**Derivação:** preserva o conhecimento útil da antiga “Curva & Concreto” sem congelar raio = interação e ângulo = dado.

**Consequência visível:** eixos, hierarquia e leitura permanecem estáveis; cor, curva, ruptura de grade ou materialidade são eventos, não ruído contínuo.

**Não usar como desculpa para:** estética brutalista genérica ou proibição dogmática de curvas aninhadas.

**Critério de revisão:** todo gesto forte deve ter função identificável ou memória cultural documentada.

### 4. Cor tem função ou memória

**Regra:** cor não entra apenas para “parecer brasileira”. Deve codificar estado, contraste, orientação, ênfase ou uma referência cultural explicitamente documentada.

**Consequência visível:** não existe verde-amarelo default nem paleta obrigatória universal.

**Não usar como desculpa para:** remover cor de identidades locais de produto.

**Critério de revisão:** deve ser possível responder por que aquela cor está ali e o que se perde sem ela.

### 5. Ornamento deve trabalhar

**Regra:** padrão, textura, ilustração ou signo só entra se executar ao menos uma função: orientar, modular, separar, criar ritmo, preservar memória, indicar estado ou produzir legibilidade espacial.

**Consequência visível:** azulejo, xilogravura, lambe-lambe, carimbo e padrões geométricos não são skins automáticas.

**Não usar como desculpa para:** esterilizar interfaces editoriais ou culturais que legitimamente precisam de expressão.

**Critério de revisão:** se remover o ornamento não muda compreensão, orientação, ritmo ou memória intencional, ele é candidato a corte.

### 6. Texto é arquitetura

**Regra:** tipografia, comprimento de linha, hierarquia editorial, densidade e ritmo textual são estrutura de interface.

**Derivação:** tradição editorial, cordel, cartazes, capas e design gráfico brasileiro tratam texto como forma espacial, não mero conteúdo preenchendo componentes.

**Consequência visível:** O Vigia pode ser tipograficamente mais aberto e narrativo; Astronauta pode ser mais compacto e informacional sem abandonar a mesma gramática.

**Critério de revisão:** a hierarquia deve continuar compreensível sem depender de cards e cor.

### 7. Densidade responde ao contexto

**Regra:** não existe densidade Cobogó única. A gramática define relações; o consumidor define intensidade.

**Consequência visível:** administração, edição, leitura longa, consulta e publicação podem usar escalas de densidade diferentes.

**Critério de revisão:** densidade deve ser explicável pelo trabalho do usuário, não por preferência estética global.

### 8. Acessibilidade é forma

**Regra:** WCAG e semântica não são gates pós-design; contraste, foco, leitura, movimento, alvo e estrutura semântica moldam a solução desde o início.

**Consequência visível:** uma decisão cultural ou estética que exclui uso real deve ser redesenhada, não “corrigida” depois.

**Critério de revisão:** specimens devem mostrar teclado, foco, estados, contraste e reduced motion quando aplicável.

### 9. Parentesco sem uniformidade

**Regra:** consumidores compartilham princípios, foundations e gramática, mas podem possuir temas, densidades, ritmos, tipografia de ênfase e padrões locais próprios.

**Consequência visível:** Astronauta e O Vigia devem parecer da mesma família, mas não clones.

**Critério de revisão:** se trocar apenas o logotipo torna dois produtos indistinguíveis, o core invadiu identidade local; se nenhuma decisão é reconhecivelmente compartilhada, a adoção é nominal.

## Conhecimento como corpus OKF

O corpus deve começar pequeno e crescer por evidência. A hierarquia de diretórios não é ontologia.

Tipos iniciais propostos:

- `canon-rule`
- `design-principle`
- `design-grammar`
- `visual-reference`
- `research-note`
- `specimen`
- `design-decision`
- `consumer`
- `consumer-theme`
- `accessibility-rule`
- `failure-mode`
- `counterexample`

Esses tipos podem ser reduzidos quando conceitos concretos mostrarem sobreposição. Não criar tipo apenas para simetria.

Relações semânticas desejadas incluem `inspires`, `constrains`, `demonstrated-by`, `justified-by`, `uses`, `violates` e `tested-by`. A representação deve reutilizar capacidades atuais do OKF/okf-parser; onde o parser só possuir links genéricos, a semântica adicional deve permanecer em metadado extensível ou na declaração tipada, não em um grafo paralelo.

Cada referência cultural relevante deve registrar:

1. fonte;
2. contexto;
3. fenômeno observado;
4. regra derivada;
5. aplicação possível em software;
6. quando não usar;
7. risco de estereótipo ou decoração superficial;
8. specimens relacionados.

Negative evidence é conhecimento: tentativas que produzem clichê, clone, baixa legibilidade ou falso vínculo cultural devem virar `counterexample` ou `failure-mode`.

## Administração por agentes

Agentes devem preferir `okf-parser` diretamente para:

- carregar o bundle;
- inventariar e validar;
- consultar conceitos e links;
- navegar o grafo;
- consultar relações tipadas e DuckDB quando disponíveis;
- localizar referências reversas e impacto;
- usar preview antes de mutações;
- cometer alterações apenas por operações explícitas;
- trabalhar com digests/conflitos quando suportados pelo engine.

Não criar wrapper Cobogó enquanto não existir um requisito que o parser não possa representar.

## Astronauta

Astronauta é uma interface humana genérica sobre OKF. Pode explorar conceitos, relações, tipos, specimens e diffs; pode editar e revisar preview/commit quando as capacidades existirem.

Hipótese adicional a investigar separadamente: `astronauta build ./knowledge --output ./dist` como projeção estática de bundles OKF. Isso pode servir documentação, explorers e publicações simples. Não é requisito desta RFC e não substitui publishers específicos como O Vigia.

## Camadas do design system

### Canon

Regras normativas acima.

### Foundations

Valores e escalas compartilháveis: cor semântica, tipografia, espaçamento, ritmo, geometria, contraste, sombra/materialidade, motion e estados. Foundations devem poder existir sem Pico, Svelte ou Astro.

### Grammar

Relações de composição antes de componentes. Vocabulário inicial a investigar: plano, vão, faixa, moldura, grade, pilha, eixo, ritmo, sinal, inscrição, contraste, repetição e ruptura.

### Core web

Preferencialmente framework-agnostic. Direção candidata, não contrato imediato:

```text
@cobogo/tokens
@cobogo/css
@cobogo/patterns
```

HTML semântico é consumidor de primeira classe.

### Bindings

Bindings só existem quando consumidores reais justificam manutenção, por exemplo `@cobogo/svelte` e `@cobogo/astro`. Eles não definem a identidade do Cobogó.

## Pico CSS

Pico é reclassificado de foundation identitária para implementação conveniente de primitives. Pode continuar enquanto entregar valor e compatibilidade, mas:

- o cânone não depende de sua API;
- tokens/grammar não podem ser definidos como aliases `--pico-*`;
- remover Pico no futuro não deve exigir redefinir o que Cobogó é.

Uma ADR futura decidirá permanência, escopo e estratégia de compatibilidade. Esta RFC não inicia migração de CSS.

## Atomic Design

Atomic Design continua útil como taxonomia de componentes e decomposição de bindings, não como ontologia da linguagem visual.

```text
design grammar
   ↓
composition
   ↓
components
   ↓
atomic taxonomy (opcional)
```

A persona Brad Frost deixa de ser autoridade canônica. Conhecimento de design-system engineering registrado em logs permanece evidência histórica e deve ser destilado quando reutilizável.

## Consumidores de referência

### Astronauta

Teste de alta densidade: tabelas, filtros, relações, forms, status, edição e revisão. Deve demonstrar eixo, sinal, ritmo, contraste e densidade compacta.

### O Vigia

Teste editorial: leitura longa, matéria, arquivo, imagem, ritmo aberto e tipografia como arquitetura.

Critério conjunto: parentesco sem uniformidade.

Nenhuma migração ampla é parte desta RFC. Primeiro serão criados specimens comparativos.

## Skills

Primeira skill: `brazilian-web-design`.

Objetivo: pesquisar design brasileiro, consultar o corpus existente, traduzir referência em regra operacional, registrar conhecimento novo e rejeitar clichê/mera imitação. `brazilian-modernist-web-design` é estreito demais porque o corpus explicitamente inclui gráfica popular, vernacular, editorial, urbana, afro-brasileira, indígena e contemporânea quando relevantes e bem documentadas.

Depois:

- `cobogo-design-review` — revisão contra canon, grammar, a11y, brasilidade, excesso ornamental, duplicação local e parentesco sem uniformidade;
- `cobogo-consumer-integration` — separar core, tema local, contexto do produto e exceções legítimas.

## Regra de persistência

Conhecimento reutilizável adquirido durante pesquisa, implementação ou revisão não deve morrer em conversa, issue ou PR.

- referência visual → Cobogó OKF;
- princípio derivado → canon/grammar;
- método reutilizável → skill;
- decisão tecnológica → ADR/RFC;
- regra verificável → teste/spec.

Evitar duplicação: a skill ensina o método; o corpus contém o conhecimento; a RFC contém decisões; testes contêm invariantes executáveis.

## Estratégia incremental

1. aprovar esta RFC e reconciliation report;
2. introduzir bundle OKF mínimo e validar com `okf-parser`;
3. criar primeira skill baseada nesse corpus;
4. extrair foundations do CSS atual sem redesenhar componentes;
5. modelar grammar e criar specimens Astronauta/O Vigia;
6. somente então redefinir core CSS e contratos públicos;
7. decidir Pico por ADR;
8. decidir bindings por consumidores concretos;
9. explorar Astronauta como human explorer e, separadamente, SSG/projection engine.

## Não objetivos

Esta RFC não:

- migra componentes;
- troca framework;
- remove Pico;
- redesenha a vitrine;
- cria design tokens definitivos;
- obriga Astronauta a publicar sites;
- cria ontologia completa;
- faz O Vigia ou Astronauta adotarem Cobogó em produção.

## Fontes iniciais para o corpus

As fontes abaixo entram como pesquisa, não como autoridade normativa automática:

- Câmara dos Deputados, série Brasilidade — Cobogó: origem pernambucana, modularidade, luz, ventilação e adaptação climática.
- Fundação Athos Bulcão — painéis de azulejos: repetição, orientação variada e possibilidades combinatórias.
- MAM Rio — neoconcretismo: crítica à exacerbação racionalista e obra entendida na relação com o público.
- Itaú Cultural, Cidade Gráfica — design no espaço urbano, heterogeneidade, processo e circulação.
- Instituto Bardi — produção de Lina Bo Bardi: simplicidade, materiais locais e diálogo com produção popular sem transformá-la em ornamento importado.
- IMS — cordel e xilogravura como tradição editorial popular em que texto, imagem e suporte formam uma unidade.

Cada fonte só altera o sistema depois que um conceito OKF explicitar fenômeno, regra derivada, aplicação, limites e risco de estereótipo.
