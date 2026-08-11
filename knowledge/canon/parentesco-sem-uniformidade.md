---
type: canon-rule
title: Parentesco sem uniformidade
status: proposed
review_question: Dois consumidores parecem da mesma família sem serem intercambiáveis após trocar logotipo e conteúdo?
---

# Parentesco sem uniformidade

Consumidores compartilham princípios, foundations e gramática, mas podem possuir temas, densidades, ritmos e ênfases locais.

## Consequência visível

Cobogó deve fornecer relações compositivas e constraints reutilizáveis, não uma skin universal.

## Teste de falha

- Se [Astronauta](../consumers/astronauta.md) e [O Vigia](../consumers/o-vigia.md) parecem clones, o core invadiu identidade local.
- Se não compartilham nenhuma lógica reconhecível de ritmo, contraste, estrutura e acessibilidade, a adoção é nominal.

## Relações

É sustentada por [Módulo sem monotonia](modulo-sem-monotonia.md) e restringe futuras decisões de core, bindings e themes.

## Diferença local precisa pagar seu custo

Parentesco sem uniformidade **não** é um mandato de preservar toda diferença brownfield. Preservar diferença é o padrão quando a diferença carrega identidade, tarefa ou informação. Não é o padrão quando ela é só história de implementação.

Quando existe capacidade compartilhada suficiente, a diferença local precisa justificar o próprio custo de manutenção. A decisão é um delta explícito, não uma preferência:

**Benefícios da padronização** — implementação local removida; consistência entre projetos; acessibilidade compartilhada; manutenção centralizada; correções futuras que se propagam sozinhas; menor custo cognitivo; interoperabilidade; cobertura real maior do core.

**Custos** — refinamento visual perdido; solução local que era melhor; overrides que sobram; dependência a mais; homogeneização de identidade.

Uma regressão estética pequena pode ser aceita de propósito quando o ganho sistêmico paga. Ela **não** pode ser aceita automaticamente quando prejudica acessibilidade, compreensão, a tarefa principal, informação/proveniência, comportamento, ou um elemento realmente essencial da identidade do produto.

### Meça antes de decidir

Adoção se decide por número, não por doutrina:

- quantas linhas/contratos locais somem de verdade;
- quantos overrides permanecem;
- quantos seletores do core encontram algo na superfície real do consumer;
- o resultado visual before/after;
- quais regressões estão sendo aceitas conscientemente.

Se importar o core elimina implementação própria relevante, prefira padronizar mesmo com pequena perda estética. Se importar o core só acrescenta dependência sem substituir nada, adote a relação e deixe a implementação local — e diga isso com os números.

O caso trabalhado está em [The Lab](../consumers/the-lab.md): core adoption recusada porque removeria ~9 linhas de 1598 adicionando 174, com 11 de 24 seletores sem correspondência na superfície real. Recusa por medição, não por princípio.

## Autoridade de design nos consumidores

Identidade local também **não** é escudo para conservar design claramente ruim. O consumer é autoridade sobre domínio, conteúdo, regras de negócio, prioridades do produto e fatos que a interface precisa representar. Cobogó é autoridade sobre a qualidade de design quando a questão é visual, compositiva, semântica ou de interação.

Isso inclui, entre outras coisas:

- hierarquia e arquitetura visual;
- `Vão`, `Ritmo`, `Faixa`, `Inscrição` e densidade;
- legibilidade, comparação e leitura sustentada;
- semântica de HTML quando ela muda a qualidade da experiência;
- foco, teclado, contraste, reduced motion e outros estados de acessibilidade;
- affordances, estados vazios/erro/loading e feedback de interação;
- redundância não cromática;
- coerência entre informação, controle e superfície;
- qualidade de tabelas, filtros, formulários, navegação e provenance.

Quando uma inspeção encontra um defeito claro nesses eixos, a ação preferida é **corrigir o consumer** com issue ou PR pequena, não apenas registrar o defeito como evidência para Cobogó. O corpus deve aprender com o caso, mas o usuário do consumer não deve continuar pagando por um erro conhecido apenas para preservar a pureza do experimento.

### Fronteira de autoridade

Cobogó pode decidir e implementar uma correção de design sem pedir ao consumer para inventar a solução visual. Mas não deve usar autoridade de design para decidir fatos ou semântica de domínio que não conhece.

Quando uma mudança exige escolher, por exemplo, qual estado jurídico existe, qual métrica é correta, qual dado deve ser prioritário para a tarefa ou qual ação de negócio é permitida, essa decisão permanece com o domínio do consumer. Cobogó então projeta a melhor forma de tornar essa decisão perceptível e utilizável.

### Inspeção de consumer deve produzir melhoria

Uma consumer review não termina em diagnóstico quando existe correção segura e localizada. O fluxo esperado é:

`inspecionar → identificar erro de design → classificar autoridade → corrigir no consumer → capturar/medir → alimentar evidência de volta ao Cobogó`

Negative evidence continua valendo: nem toda diferença é defeito, e nem toda solução Cobogó é melhor que a local. Mas um erro conhecido não deve sobreviver só porque nasceu downstream.

## Formas legítimas de adoção

As quatro não são níveis obrigatórios de maturidade. Um consumer pode legitimamente parar em qualquer uma se aquela for a fronteira correta de autoridade.

- **canon/grammar adoption** — o consumer incorpora uma regra/relação comprovada e implementa com os próprios valores;
- **pattern adoption** — aplica um pattern Cobogó preservando expressão própria;
- **core adoption** — consome `cobogo/core` de fato, porque compartilhar implementação tem valor;
- **bindings/adapters adoption** — quando existirem, seguem downstream e opcionais.

Registrar a forma importa: `capabilities_used` deve dizer **como** a capacidade foi adotada, e não marcar `cobogo/core` quando o consumer não o consome.
