---
type: VisualExploration
id: explorations/cheio-vazio-mobile-003
title: "Vazio móvel 003"
study_id: studies/cheio-vazio-na-web
direction: "Explorar pausas de vazio em telas estreitas depois de grupos semanticamente completos, procurando ritmo sem desperdiçar o orçamento vertical."
medium: "Astro + Panda CSS mobile-first editorial stack"
constraints:
  - "Usar o mesmo conteúdo e a mesma ordem DOM nas três variantes."
  - "Observar em 320px, 390px e 768px."
  - "Não esconder conteúdo, mudar a ordem semântica nem usar o vazio como decoração figurativa."
  - "Preservar landmarks, contraste, leitura por teclado e ausência de rolagem horizontal."
  - "O vazio deve aparecer apenas entre grupos semanticamente completos, nunca dentro de título, texto ou ação."
procedure:
  - "Construir três pilhas móveis com os mesmos três blocos editoriais: fluxo contínuo, pausa curta e pausa longa."
  - "Comparar ritmo, continuidade e custo vertical nas três larguras definidas."
  - "Confirmar que o foco e a ordem de leitura permanecem idênticos nas variantes."
  - "Preservar também a variação que pareça falha de carregamento ou torne a próxima informação difícil de encontrar."
  - "Publicar as três variantes juntas no laboratório e registrar a crítica."
qualities_to_seek:
  - "Pausa curta que torne os grupos mais legíveis sem parecer conteúdo ausente."
  - "Continuidade compreensível em 320px e 390px."
  - "Primeira dobra com contexto suficiente para orientar a continuidade da página."
  - "Ritmo obtido sem alteração de DOM ou conteúdo."
tensions_to_watch:
  - "Vazio percebido como desperdício ou erro de carregamento."
  - "Próxima informação distante a ponto de exigir rolagem exploratória sem pista."
  - "Direção que só funcione em tablet."
  - "Pausa que precise de ornamento, seta ou explicação para parecer intencional."
skill_path: skills/explorations/cheio-vazio-mobile-003/SKILL.md
status: concluded
result: selected
result_rationale: "B foi selecionada porque a pausa curta mantém ritmo e continuidade em 320px e 390px sem parecer conteúdo ausente; C dilui a continuidade e A não produz a mesma pausa perceptível."
canonical_status: not_evaluated
canonical_rationale: null
canonical_targets: []
reflection: "A comparação publicada foi observada no artefato cobogo-published-preview-6d485a10bc29d5d571d405ad2e2fb867e0f26040. O gate pós-publicação verificou integridade técnica. B foi selecionada dentro desta exploração; nenhuma adoção canônica foi avaliada."
---

# Exploração: Vazio móvel 003

B foi selecionada dentro da exploração como melhor tradução desta pergunta em tela estreita. O resultado é local e não equivale a uma regra canônica.
