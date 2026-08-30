---
type: Concept
status: concept
observed_in: [ovigialocal/ovigialocal.github.io]
provenance:
  - repo: ovigialocal/ovigialocal.github.io
    commit: a6cbbbbf8b31fc5b7e472813a03817293aedaeae
    route: /article.html?preview=article
    capture: github-actions:33330160778/artifact:9737404079
---

# Leitura primeiro, confiança progressiva

## Problema que resolve

Uma matéria longa precisa manter fonte, proveniência e correções ao alcance sem transformar o topo da página em painel técnico nem deslocar a manchete e o texto do centro da experiência.

## Solução observada

Em O Vigia, o template de matéria usa título e linha fina como arquitetura principal, corpo em medida estreita de leitura e metadados de editoria/bairro/data como inscrições subordinadas. No desktop, a camada de confiança ocupa uma coluna secundária; no mobile, ela retorna ao fluxo normal. A proveniência é aberta por `details`, enquanto correções e retorno ao acervo permanecem caminhos visíveis.

O estado foi validado sem publicar conteúdo fictício: a rota pública sem conteúdo é explicitamente vazia e o conteúdo demonstrativo só ativa em localhost/127.0.0.1 com `?preview=article`.

## Por que funciona

A informação de confiança continua recuperável no momento em que o leitor precisa dela, mas não concorre permanentemente com a leitura. A composição usa vão, medida tipográfica e divulgação progressiva em vez de uma coleção de cards de metadados.

## O que impediria promoção

Ainda existe somente uma observação independente. Para virar candidato a pattern compartilhado, outro consumer precisa demonstrar o mesmo problema e convergir para a mesma relação — conteúdo principal dominante, confiança alcançável e secundária — com captura antes/depois própria. Uma apresentação visual diferente que preserve apenas o princípio pode confirmar o conceito sem justificar um componente compartilhado.

## Observações

- 2026-08-30 — observado em `ovigialocal/ovigialocal.github.io`, merge `a6cbbbbf8b31fc5b7e472813a03817293aedaeae`, com recaptura pós-merge no artifact `9737404079`.
