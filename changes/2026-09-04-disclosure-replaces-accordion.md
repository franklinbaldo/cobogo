---
title: Disclosure absorve o caso de uso de Accordion
date: 2026-09-04
type: changed
---

Remove o wrapper `Accordion` e sua página própria. Grupos mutuamente exclusivos passam a usar diretamente `Disclosure` com o mesmo atributo `name`, apoiando-se em `<details name="...">` nativo. `Disclosure` passa a integrar o root export curado do pacote.
