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
status: concluded
result: selected
result_rationale: "A — ledger contínuo — respondeu melhor à pergunta da 009. Na superfície publicada, A transforma as quatro relações em uma coleção perceptivelmente única sem apagar os alvos: divisores compartilhados mantêm fronteiras, o item atual continua imediato e a ordem permanece escaneável. A0 é inequívoco, mas o gap e quatro molduras completas reforçam autonomia demais. B melhora A0 no desktop, porém ainda lê como células/caixas e, no mobile, a moldura acumulada volta a enfatizar compartimentos. C compra continuidade ao custo de uma hierarquia editorial que não corresponde à equivalência funcional das quatro relações; o destaque de Ação domina a composição sem justificativa semântica. A preserva a equivalência melhor que B e C e continua coerente em 390px e 320px."
baseline_comparison: "Contra A0, A reduz quatro perímetros independentes a uma estrutura compartilhada com divisores. O ganho não é simplesmente menos borda: a coleção passa a ser percebida como uma relação contínua enquanto cada linha segue clicável e separável. O custo é perder parte da presença modular dos cards, aceitável nesta superfície porque as quatro relações são irmãs e não módulos autônomos. Isso também converge com o estado da prática observado: GOV.UK e Carbon usam divisores em informação relacionada, e USWDS reserva cards para modularidade mais forte."
canonical_status: not_evaluated
canonical_rationale: null
canonical_targets: []
reflection: "A segunda rodada observou a superfície publicada do SHA 8ad82aa8daf802cb2f33949ef624281c5402552b no artefato cobogo-published-preview do Deploy Pages #508. O gate publicado registrou HTTP 200, largura documental igual ao viewport e nenhuma ação sem nome em 1600px, 390px e 320px. Visualmente, A0 preserva modularidade com ruído de quatro perímetros; A cria uma coleção única por divisores e funciona igualmente bem nos três viewports; B encontra um meio-termo útil no desktop, mas no mobile volta a parecer uma pilha de caixas; C quebra equivalência ao transformar uma das relações em massa dominante. O aprendizado local é que continuidade entre itens semanticamente irmãos funciona melhor quando a fronteira vira relação compartilhada — divisores e ritmo — sem introduzir hierarquia que o conteúdo não possui."
---

# Exploração: Campos contínuos 009

A exploração foi concluída numa rodada posterior à materialização. **A — ledger contínuo** foi selecionada porque supera o A0 na pergunta específica da coleção: comunica unidade sem dissolver os quatro destinos. A seleção é local à exploração e ainda não constitui adoção canônica.
