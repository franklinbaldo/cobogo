---
type: consumer
title: Astronauta
context: Interface humana genérica sobre bundles OKF
interaction_profile: high-density administration and exploration
needs: tables, filters, forms, status, relations, editing, review, graph navigation
must_not_become: Gateway obrigatório entre agentes e okf-parser
---

# Astronauta

Astronauta testa o Cobogó em um contexto de alta densidade operacional.

## Necessidades visuais

- hierarquia clara mesmo com muita informação simultânea;
- estados e relações rapidamente escaneáveis;
- tabelas, filtros e formulários sem ornamentação que concorra com tarefa;
- foco e navegação por teclado muito evidentes;
- composição capaz de alternar visão global e detalhe.

## Grammar esperada

Usa [Vão antes de massa](../canon/vao-antes-de-massa.md) para evitar painéis aninhados por reflexo e [Módulo sem monotonia](../canon/modulo-sem-monotonia.md) para recombinar estruturas sem tornar cada tela idêntica.

Deve obedecer [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md): compartilhar família com O Vigia sem herdar sua densidade editorial.

## Papel arquitetural

Astronauta pode explorar, editar, revisar e projetar o corpus para humanos. Agentes trabalham diretamente com `okf-parser`; esta interface nunca é requisito de acesso ao conhecimento.
