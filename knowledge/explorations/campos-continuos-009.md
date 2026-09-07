---
type: VisualExploration
id: explorations/campos-continuos-009
title: "Campos contínuos 009"
study_id: studies/campos-interligados-na-web
direction_id: directions/burle-marx-campos-continuos
cobogo_baseline_id: baselines/cobogo-relation-collection-2026-09-07
practice_baseline_ids:
  - baselines/govuk-summary-list-2026-09-07
  - baselines/carbon-structured-list-2026-09-07
  - baselines/uswds-collection-card-2026-09-07
baseline_question: "A coleção de relações pode parecer um único campo relacionado, reduzindo a sensação de quatro cards isolados, sem perder foco, estado ativo e acionabilidade de cada item?"
direction: "Testar limites compartilhados entre as quatro relações da RelationCollection, traduzindo continuidade entre massas sem importar curvas ou identidade visual de Burle Marx."
medium: "Astro + Panda CSS, navegação responsiva com quatro destinos"
constraints:
  - "Usar as mesmas quatro relações, mesma ordem DOM e mesmos destinos em A0 e traduções."
  - "Preservar aria-current, foco visível, contraste e alvo clicável integral."
  - "Não usar curvas, blobs ou ornamento paisagístico como atalho para a referência."
  - "A0 deve reproduzir a RelationCollection vigente, inclusive gaps e molduras completas."
procedure:
  - "Materializar A0 como quatro cards separados."
  - "Materializar A como ledger contínuo: uma superfície, linhas separadas por divisores e estado ativo por faixa."
  - "Materializar B como mosaico conectado: células em contato dentro de uma moldura compartilhada, com divisões internas."
  - "Materializar C como campo editorial: uma superfície contínua em que largura e peso mudam por item, mantendo separadores e ordem."
  - "Publicar A0+A+B+C juntas e registrar racional de tradução; não escolher vencedora nesta rodada."
qualities_to_seek:
  - "Sensação de coleção única sem perda de individualidade."
  - "Estado ativo imediatamente reconhecível."
  - "Boa varredura visual em desktop e reflow claro em 320–390px."
  - "Menos ruído de molduras sem enfraquecer limites úteis."
tensions_to_watch:
  - "Continuidade virar tabela genérica sem voz."
  - "Contato entre campos tornar os alvos ambíguos."
  - "Variação editorial quebrar equivalência entre relações."
  - "Remover bordas úteis em nome de minimalismo."
skill_path: skills/explorations/campos-continuos-009/SKILL.md
status: exploring
result: null
result_rationale: null
baseline_comparison: null
canonical_status: not_evaluated
canonical_rationale: null
canonical_targets: []
reflection: "Primeira exploração criada sob o contrato de TranslationDirection + baseline de dois prongs. A superfície real escolhida foi RelationCollection: quatro links semanticamente irmãos que hoje usam gap e moldura completa individual. GOV.UK, Carbon e USWDS convergem em uma ideia útil sem prescrever a mesma aparência: itens relacionados podem compartilhar estrutura, divisores ou camada; cards completos fazem mais sentido quando a modularidade autônoma é parte do significado. A rodada materializa alternativas, portanto não avalia resultado."
---

# Exploração: Campos contínuos 009

A exploração testa uma consequência específica da referência de Burle Marx em uma superfície real do Cobogó: a coleção navegável de relações. Esta rodada estabelece A0, estado da prática e três traduções, mas termina deliberadamente em `exploring`.
