---
type: SurfaceQualityAssessment
repo: franklinbaldo/astronauta
date: 2026-09-03
commit: 99661b562bedd953a6797fe7b8b7fcd25b8a5dd6
deploy: local-runtime:main
capture: artifact:9920852733
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 4
  ui: 4
  trust: 3
total: 23
band: reference
blockers: []
trend: up
---

# Astronauta — avaliação da interface pública de uso local após correção responsiva

## Veredito

**23 de 24 pontos — faixa de referência.** Clareza, explicabilidade e autonomia permanecem em 4/4. A #44 eliminou a dívida que mantinha UX em 3/4 e UI em 2/4: nas duas rotas observadas em `390×844`, o documento agora mede exatamente a largura da janela, a navegação quebra em linhas dentro do cabeçalho e a tabela densa preserva rolagem horizontal apenas dentro de sua própria região. Em `1280×900`, a composição compacta de admin permanece intacta.

A avaliação aponta para `99661b562bedd953a6797fe7b8b7fcd25b8a5dd6`, o commit que realmente entrou em `main` depois da PR #44. Como o produto é um admin SSR local servido em loopback, não existe publicação Pages. A etapa equivalente depois do merge foi iniciar novamente o runtime real sobre esse commit de `main` e repetir a observação.

A execução `Visual evidence` `33828611787` terminou verde em `main` e produziu o arquivo `9920852733`, `astronauta-rendered-evidence-99661b562bedd953a6797fe7b8b7fcd25b8a5dd6`. Além das quatro imagens, o arquivo agora contém medições de layout feitas no navegador. Em `/types/Note` e `/concepts/edit/note-01`, `documentClientWidth` e `documentScrollWidth` são ambos 390 px; cabeçalho e navegação cabem na janela, e no editor o título e `textarea#body` também ficam integralmente dentro dela.

## Clareza / D1

**4/4.** O projeto deixa claro que transforma um diretório OKF em um admin/editor local. A pessoa encontra tipos, conceitos, editor, importação, Apply, grafo e diagnósticos; a documentação mantém `astronauta PATH [--write]` como contrato de execução e deixa claro quando a escrita está habilitada.

## Explicabilidade / D2

**4/4.** A fronteira de responsabilidade continua explícita: Astronauta possui apresentação e interação, enquanto `okf-parser` possui a semântica e a mutação do filesystem. O browser não consegue conceder a si mesmo autoridade de escrita; o processo precisa nascer com `--write`. Os fluxos preview-first continuam exercitados pelos workflows funcionais.

## Autonomia / D3

**4/4.** O repositório fornece execução reproduzível e o CI continua provando uma wheel instalada em ambiente consumidor fresco. A correção de superfície não alterou esse contrato.

## UX

**4/4 — referência no escopo observado.** A navegação principal permanece imediatamente disponível no desktop e, no celular, passa a quebrar em duas linhas legíveis sem exigir deslocamento lateral da página. A listagem mantém filtro e tabela densa; o editor mantém retorno ao conceito, contexto, orientação de preview e área principal de edição dentro da janela. Os workflows de editor, Apply e importação continuaram verdes no commit da PR e depois do merge.

A nota 4 descreve os fluxos realmente observados e testados; não significa que todo estado futuro do admin esteja automaticamente coberto.

## UI

**4/4 — referência no escopo observado.** O tema escuro, a hierarquia tipográfica, a densidade e os cartões permanecem coerentes em `1280×900`. Em `390×844`, a marca e a navegação agora ocupam duas regiões verticais sem perder identidade; o documento mede 390 px nas duas rotas. A tabela de campos continua horizontalmente rolável dentro do cartão, o que preserva a natureza tabular dos dados sem alargar o documento.

A mudança não converteu tabela em cartões nem importou um layout de outro projeto. Ela preservou a solução administrativa local e corrigiu apenas o comportamento que o leitor percebia como quebrado.

## Confiança

**3/4 — boa.** O workflow agora torna uma regressão de largura um erro verificável, registra o commit real observado e repete a prova no runtime de `main`. A fronteira de escrita também continua forte.

A nota permanece em 3 porque esta rodada não executou uma prova sistemática de navegação por teclado, foco visível e semântica acessível em runtime. Isso não cria automaticamente uma issue genérica; apenas impede chamar Confiança de referência sem prova correspondente.

## Recomendações Cobogó relacionadas

- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos. No Astronauta, a mesma prova primeiro descobriu a regressão e, na #44, passou a medir a largura diretamente para impedir seu retorno.
- `rendered-evidence-manifest` — **validated**, isto é, já funcionou em pelo menos um projeto real. O `evidence.json` local continua registrando commit, rotas, viewports e arquivos; agora também referencia os JSONs com as medições estreitas.

## Dívida concreta

A #43 foi encerrada pela #44. Não resta nesta avaliação outra dívida de UI/UX concreta que justifique issue apenas para perseguir 24/24. Confiança 3 registra uma fronteira de prova, não um defeito inventado.
