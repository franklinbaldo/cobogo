---
type: specimen
title: Astronauta — revisão densa de conceito OKF
consumer: franklinbaldo/astronauta
purpose: testar Cobogó em interface administrativa de alta densidade sem transformá-la em cópia de superfície editorial
uses_grammar:
  - Vão
  - Ritmo
  - Inscrição
---

# Astronauta — revisão densa de conceito OKF

## Tarefa

Uma pessoa revisa um conceito OKF, seus campos, relações, diagnósticos e diff antes de confirmar uma mutação.

## Composição

1. **Faixa de identidade**: tipo, título, caminho e digest aparecem como inscrições compactas; não como quatro badges independentes.
2. **Plano principal**: dados editáveis e corpo ocupam o centro. A hierarquia textual e uma grade estável fazem o trabalho que uma pilha de cards faria num dashboard genérico.
3. **Plano relacional**: relações entram adjacentes, com direção e tipo previsíveis; links reversos usam o mesmo ritmo, mas podem variar em comprimento.
4. **Faixa de diagnóstico**: erros normativos e avisos são distinguíveis por texto, símbolo e contraste; cor nunca é o único canal.
5. **Zona de ação**: preview e commit são visualmente próximos porque pertencem ao mesmo fluxo, mas o commit destrutivo ou irreversível recebe ruptura explícita.

## Aplicação das regras

### Vão antes de massa

Use espaços pequenos e alinhamento para separar metadados. Contêineres surgem apenas quando existe fronteira funcional — por exemplo, diff/preview ou diagnóstico que precisa ser isolado.

### Texto é arquitetura

Nome do campo, valor, origem e status formam uma unidade tipográfica repetível. A interface não depende de caixas para explicar qual informação pertence a qual conceito.

### Módulo sem monotonia

A grade é estável, mas tipos diferentes de conceito podem ocupar proporções diferentes. Uma referência visual longa e uma canon-rule curta não precisam do mesmo molde.

### Parentesco sem uniformidade

A superfície deve parecer da mesma família do Vigia por ritmo, inscrições, contraste e uso de vãos — não por compartilhar hero, paleta dominante, cards ou padrão decorativo.

## Anti-specimen

Um dashboard glassmorphism com card para cada métrica, chips coloridos para todo metadado e um grafo como peça hero. Ele pode ser funcional, mas não demonstra a gramática Cobogó.

## Critério de sucesso

- a tela suporta muita informação sem depender de chrome excessivo;
- relações permanecem escaneáveis;
- preview/commit e diagnostics têm hierarquia inequívoca;
- remover cores não destrói a estrutura;
- a composição não serviria sem mudanças como homepage editorial do Vigia.
