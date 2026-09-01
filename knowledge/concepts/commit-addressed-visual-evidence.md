---
type: Concept
status: concept
observed_in: [franklinbaldo/franklinbaldo.github.io]
provenance:
  - repo: franklinbaldo/franklinbaldo.github.io
    commit: eebbe97af4e3aaf71b8a45b5752056dcf158122d
    route: /
    capture: https://api.github.com/repos/franklinbaldo/franklinbaldo.github.io/actions/artifacts/9811726761
---

# Evidência visual endereçada por commit

## Problema que resolve

Mudanças de superfície precisam de comparação antes/depois que continue verificável mesmo quando a máquina que conduz a revisão não consegue executar o consumer localmente. Uma captura solta ou desvinculada do SHA não prova qual versão foi observada.

## Solução observada

O consumer mantém o harness `scripts/screenshots.mjs` no próprio repositório e o executa em GitHub Actions tanto em pull request quanto em push para `main`. O workflow publica as mesmas rotas e viewports como artifact nomeado com `${{ github.sha }}`. Assim, o `before` pode ser materializado num head que ainda não contém a mudança visual e o `after` no head final/merge SHA, pelo mesmo método.

Observação em 2026-09-01:

- before: head `6503538c187bd6cb860252dd1865ef7bdb2199f5`, artifact `9806697863`;
- after de PR: head `a03c3670ca95100ae9bc638e7633a0efa13f7088`, artifact `9811464972`;
- after em `main`: `eebbe97af4e3aaf71b8a45b5752056dcf158122d`, artifact `9811726761`.

## Por que funciona

A evidência herda identidade causal do commit e usa o mesmo código de captura em todas as etapas. O workflow também transforma uma capacidade local de screenshots em infraestrutura repetível de revisão, sem tornar o Cobogó dependente do runtime do consumer.

## O que impediria promoção

Há evidência fechada em apenas um consumer. O gate do Cobogó exige a mesma solução, ou convergência espontânea equivalente, em pelo menos dois consumers com before/after em cada um. Até lá isto permanece conceito, não pattern compartilhado.
