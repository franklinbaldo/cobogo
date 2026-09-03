---
type: SurfaceQualityAssessment
repo: franklinbaldo/leizilla
date: 2026-09-03
commit: dc761b8936a51ade164bcfaf0dcfc04756b7eea6
deploy: https://franklinbaldo.github.io/leizilla/
capture: artifact:9882181048
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 2
  trust: 2
total: 19
band: good
blockers: []
trend: baseline
---

# Leizilla — primeira avaliação completa da superfície

## Veredito

**19 de 24 pontos — faixa boa.** Esta é a primeira avaliação completa que serve de referência para comparações futuras. O Leizilla é muito forte em clareza, explicação pública do método e autonomia sobre os dados. As duas dívidas materiais estão em tela estreita e no modo como a interface descreve uma falha ao carregar o dataset.

A avaliação aponta para o commit `dc761b8936a51ade164bcfaf0dcfc04756b7eea6`, que realmente entrou em `main` depois da PR #160. O workflow `Visual capture — web` `33726499150` concluiu com sucesso nesse commit e produziu o arquivo `9882181048`, identificado como `leizilla-web-visual-dc761b8936a51ade164bcfaf0dcfc04756b7eea6`. Ele contém a home em `1280×900` e `390×844` e um `capture-state.json` com HTTP 200 e nenhum erro de página nos dois tamanhos.

A #160 não alterou arquivos da interface; acrescentou apenas a capacidade de observar o build real em navegador. Por isso a página pública continua sendo a mesma versão web já publicada antes da PR, e a captura do novo commit recompila exatamente essa árvore `web/**` sem introduzir mudança visual.

## Clareza / D1

**4/4.** A primeira dobra apresenta uma tarefa e uma razão de existir de forma direta: `Leis públicas não deveriam desaparecer em PDFs.`. A pessoa encontra logo abaixo a busca textual, os filtros e caminhos para Cobertura e Dados. Não é necessário conhecer o pipeline para entender o que pode fazer.

## Explicabilidade / D2

**4/4.** O texto explica que o produto preserva o original, estrutura o conteúdo por dispositivo e mantém trilha de evidência auditável. A navegação para Cobertura e Dados permite aprofundar como o acervo é produzido e quais partes estão cobertas sem transformar estado de pipeline em promessa jurídica.

A nota permanece 4 apesar do problema de indisponibilidade descrito em Confiança: a explicação estrutural do produto é clara e correta; o defeito é uma causa específica atribuída a um erro de transporte.

## Autonomia / D3

**4/4.** O mesmo acervo que alimenta o portal é exposto como `versoes.parquet`, com `dataset_meta.json`, item no Internet Archive e exemplo DuckDB. O leitor consegue reutilizar o dado sem depender do frontend nem de uma API inventada.

## UX

**3/4 — boa.** Busca, filtros, navegação e caminhos de aprofundamento têm fluxo simples. O campo principal permanece inteiro em `390×844`, a página não cria rolagem horizontal e a ausência de dados remotos não remove os links de Cobertura, Internet Archive e GitHub.

A nota não sobe para 4 porque a captura desta rodada exercitou o estado de falha de rede, não uma busca bem-sucedida com abertura de uma lei e retorno aos resultados. Além disso, a mensagem incorreta de indisponibilidade prejudica a orientação em um estado real do fluxo, embora a maior consequência seja de confiança factual.

## UI

**2/4 — adequada com problema material.** No desktop, a composição é limpa, legível e mantém hierarquia clara entre título, busca, filtros e conteúdo. Em `390×844`, a busca principal continua utilizável, mas os três filtros permanecem lado a lado. Os dois `<select>` ficam estreitos a ponto de mostrar apenas o começo de `Todos os entes` e `Todos os tipos de norma`, tornando-os visualmente quase indistinguíveis.

A navegação superior também quebra `GitHub` para uma linha isolada no celular, mas isso é uma irregularidade menor. O problema acionável que sustenta a nota 2 é a perda de informação dos filtros essenciais. A issue `leizilla#162` registra o critério de correção sem prescrever uma aparência uniforme.

## Confiança

**2/4 — adequada com problema material.** O projeto é forte em provenance e reutilização: preservação no Internet Archive, cobertura explícita e metadados de publicação são partes reais da superfície. Porém o estado de erro observado faz uma afirmação que a própria evidência do projeto contradiz.

Quando o Parquet do Internet Archive falha ao carregar, `HomePanel.svelte` agrupa `failed || empty` e diz que `Rondônia v0` ainda não foi publicado. `DatasetUnavailable.svelte` vai além e afirma que a coleção ainda não foi publicada no Internet Archive. Na captura desta rodada, o `capture-state.json` registra precisamente uma falha de rede ao carregar o Parquet público já existente. Portanto a interface converte uma causa desconhecida de transporte em uma conclusão factual sobre publicação.

A issue `leizilla#161` registra a correção: falha de acesso deve ser distinguida de ausência comprovada de acervo. Enquanto esse estado puder fazer uma afirmação falsa, Confiança não pode receber 3 ou 4.

## Recomendações Cobogó relacionadas

- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos. A #160 traz o Leizilla para o mesmo contrato de evidência sem copiar implementação visual de outro produto.
- `recoverable-error-states` — **validated**, isto é, já funcionou em pelo menos um projeto real, mas o Leizilla acrescenta evidência negativa útil: uma mensagem simples ainda é ruim se atribuir uma causa que o sistema não conhece. A recomendação deve exigir verdade causal do estado, não apenas linguagem amigável.

## Dívidas concretas

- `leizilla#161` — não confundir falha de transporte com dataset não publicado; mantém Confiança em 2/4.
- `leizilla#162` — preservar informação suficiente nos filtros em `390×844`; mantém UI em 2/4.

Nenhuma outra issue foi aberta apenas para aumentar a nota. A primeira avaliação já é suficiente para priorizar essas duas diferenças concretas.