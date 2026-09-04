---
type: SurfaceQualityAssessment
repo: franklinbaldo/quem-sao-eles
date: 2026-09-04
commit: 4e412c8e4ae5b275dc9525dc97c9ecf066c8d384
deploy: https://franklinbaldo.github.io/quem-sao-eles/pep/
capture: artifact:9928944933
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 4
  ui: 3
  trust: 4
total: 23
band: reference
blockers: []
trend: flat
---

# Quem São Eles? — reavaliação após observação da página publicada

## Veredito

**23 de 24 pontos — faixa de referência.** A nota não muda, mas a justificativa de Confiança fica mais forte e um defeito visual concreto foi removido. A PR #25 tornou o rodapé independente de variáveis CSS ausentes e acrescentou uma prova separada da página que o leitor realmente recebe depois do GitHub Pages.

A avaliação aponta para `4e412c8e4ae5b275dc9525dc97c9ecf066c8d384`, o commit que realmente entrou em `main`. O Pages `33851656399` publicou esse mesmo commit. Depois da publicação, a execução `33852287508` abriu diretamente a URL pública em Chromium e produziu o pacote `9928944933`, `pep-published-evidence-4e412c8e4ae5b275dc9525dc97c9ecf066c8d384`.

## Clareza / D1

**4/4.** A rota continua dizendo imediatamente que é um catálogo PEP, explica a busca em dados abertos, apresenta campo e ação claros e mantém retorno para a página inicial. A correção do rodapé não interfere nessa compreensão.

## Explicabilidade / D2

**4/4.** Origem, competência e arquivo exato permanecem adjacentes à consulta. O projeto continua distinguindo a busca PEP da futura superfície editorial de perfis, e a nova prova pós-publicação torna mais explícito o caminho entre commit, deploy e página entregue.

## Autonomia / D3

**4/4.** A pessoa continua podendo consultar no navegador ou levar o snapshot Parquet exato. A correção visual não diminui nem esconde o acesso ao arquivo reutilizável.

## UX

**4/4.** O contrato automatizado continua esperando o runtime de DuckDB ficar pronto e executando consulta real. A observação pós-publicação roda o mesmo script contra a URL pública, em vez de apenas confiar no build servido localmente.

## UI

**3/4 — boa.** O rodapé agora possui contrato visual próprio: fundo, texto e estados do link não dependem mais de variáveis CSS inexistentes. A página publicada passou novamente pelo navegador depois da mudança.

A nota permanece 3 porque a prova profunda ainda cobre principalmente a rota PEP. O catálogo editorial de perfis não tem conteúdo populado suficiente para afirmar que a linguagem visual do projeto inteiro seja referência. Não há defeito concreto remanescente que justifique abrir uma issue genérica só para perseguir 4/4.

## Confiança

**4/4.** A proveniência pública continua clara e agora existe uma cadeia de comprovação mais forte para a própria interface: o commit `4e412c8e...` entrou em `main`, o Pages publicou esse commit e, depois disso, Chromium abriu a URL pública e executou a prova funcional/visual no mesmo commit. O pacote `9928944933` carrega o commit publicado no próprio nome.

Essa distinção evita confundir três coisas diferentes: uma branch que passou nos checks, um commit incorporado em `main` e uma página realmente entregue pelo Pages.

## Recomendação Cobogó relacionada

`visual-evidence-as-quality-gate` permanece `stable`: em português comum, essa recomendação já funcionou de forma convergente em pelo menos dois projetos reais. A #25 acrescenta uma aplicação mais forte no Quem São Eles?: para site público, a prova do build e a prova da URL depois da publicação ficam separadas e verificáveis.

## Dívidas concretas

A antiga #13 foi encerrada porque o problema do separador no endereço do Parquet já havia sido corrigido pela #12. O defeito visual do rodapé foi resolvido pela #25. A UI permanece em 3/4 por limitação de escopo da superfície editorial disponível, não por um novo problema concreto que esta rodada deva fabricar.