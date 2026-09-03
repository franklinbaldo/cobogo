---
type: SurfaceQualityAssessment
repo: franklinbaldo/quem-sao-eles
date: 2026-09-03
commit: f9d662964abdecfad1b329f3a65856b47cfcc32b
deploy: https://franklinbaldo.github.io/quem-sao-eles/pep/
capture: artifact:9886155918
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
trend: baseline
---

# Quem São Eles? — primeira avaliação completa da superfície PEP

## Veredito

**23 de 24 pontos — faixa de referência.** Esta é a primeira avaliação completa que serve de referência para comparações futuras. A rota pública de PEP é muito forte em clareza, explicação da origem, reutilização do dado e confiança. UI fica em 3/4 porque a rota é limpa e responsiva, mas a avaliação não transforma uma composição deliberadamente sóbria e ainda estreita em “referência visual” para o portfólio inteiro sem evidência equivalente da futura superfície editorial de perfis.

A avaliação aponta para `f9d662964abdecfad1b329f3a65856b47cfcc32b`, o commit que realmente entrou em `main` depois da PR #24. O workflow `PEP visual capture` execução `33737031729` concluiu com sucesso nesse commit e produziu o arquivo `9886155918`, `pep-rendered-evidence-f9d662964abdecfad1b329f3a65856b47cfcc32b`. O mesmo conjunto contém a rota em `1280×900` e `390×844`, além de estado legível por máquina.

## Clareza / D1

**4/4.** A rota diz imediatamente `CATÁLOGO PEP` e explica que é uma busca em dados abertos de Pessoas Expostas Politicamente. O campo `Nome ou CPF`, a ação `Buscar` e o retorno para a página inicial tornam a tarefa evidente sem exigir conhecimento do pipeline.

## Explicabilidade / D2

**4/4.** A própria página mostra a origem `Portal da Transparência / CGU`, a competência `julho de 2026` e o arquivo exato usado. O README e o registro do projeto distinguem essa consulta pública do catálogo editorial de perfis. A pessoa consegue entender de onde vem a informação e por que essa superfície existe.

## Autonomia / D3

**4/4.** O arquivo `202607_pep.parquet` aparece como link público na mesma região que apresenta origem e competência. A pessoa pode usar a consulta no navegador ou levar o snapshot exato sem depender de API, login ou interface proprietária.

## UX

**4/4.** A verificação automatizada espera o DuckDB-WASM ficar pronto e executa uma consulta real. No estado observado, a busca por `zzzxxy` termina corretamente como ausência de resultado, em vez de parar no shell ou no carregamento. Em desktop e celular, origem, competência, arquivo, campo, botão e feedback permanecem perceptíveis. A tela estreita não cria rolagem horizontal escondida.

## UI

**3/4 — boa.** Em `390×844`, a hierarquia permanece íntegra: título, explicação, origem/competência/arquivo, campo e ação aparecem em ordem natural; o botão ocupa largura confortável; nenhum conteúdo é espremido ou cortado. No desktop, a mesma relação permanece limpa e legível.

A nota não sobe para 4 porque esta avaliação prova com profundidade a rota PEP, não uma linguagem visual de referência para todas as superfícies prometidas pelo projeto. O catálogo editorial de perfis ainda não tem conteúdo suficiente para uma avaliação equivalente. Isso não é defeito da rota PEP nem motivo para inventar uma issue de aparência.

## Confiança

**4/4.** Proveniência e frescor são visíveis no próprio fluxo: autoridade, competência e snapshot exato ficam juntos. O arquivo produzido pelo workflow identifica o commit real avaliado, e em PR também separa esse commit do commit sintético usado pelo GitHub apenas para testar a combinação com `main`. No estado de `main`, `evaluated_sha` e a execução visual apontam para `f9d662...`.

O estado registrado ainda comprova `search-ready`, consulta concluída com sucesso, ausência de erro de runtime, largura de documento igual ao viewport e ausência de estouro horizontal nos dois tamanhos.

## Recomendação Cobogó relacionada

`visual-evidence-as-quality-gate` permanece `stable`: em português comum, essa recomendação já funcionou de forma convergente em pelo menos dois projetos reais. A #24 completa a aplicação no Quem São Eles? ao provar também tela estreita e identidade do commit sem impor aparência compartilhada.

## Dívidas concretas

A issue #23 foi fechada pela #24. Não foi encontrado outro problema material na rota PEP que justifique abrir backlog apenas para aumentar a nota. A ausência atual de perfis editoriais populados é falta de conteúdo publicado, não uma falha de UI que esta rotina deva fabricar.