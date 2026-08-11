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

## Formas legítimas de adoção

As quatro não são níveis obrigatórios de maturidade. Um consumer pode legitimamente parar em qualquer uma se aquela for a fronteira correta de autoridade.

- **canon/grammar adoption** — o consumer incorpora uma regra/relação comprovada e implementa com os próprios valores;
- **pattern adoption** — aplica um pattern Cobogó preservando expressão própria;
- **core adoption** — consome `cobogo/core` de fato, porque compartilhar implementação tem valor;
- **bindings/adapters adoption** — quando existirem, seguem downstream e opcionais.

Registrar a forma importa: `capabilities_used` deve dizer **como** a capacidade foi adotada, e não marcar `cobogo/core` quando o consumer não o consome.

