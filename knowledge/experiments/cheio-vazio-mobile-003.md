---
type: VisualExploration
id: experiments/cheio-vazio-mobile-003
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
skill_path: skills/experiments/cheio-vazio-mobile-003/SKILL.md
status: selected
reflection: "A comparação publicada foi observada no artefato `cobogo-published-preview-6d485a10bc29d5d571d405ad2e2fb867e0f26040`. Em 320×800 e 390×844, B preserva continuidade e cria uma pausa perceptível depois de um grupo semanticamente completo; C cria uma ruptura vertical forte demais. O gate pós-publicação verificou integridade técnica nas duas larguras. A crítica seleciona B como direção mais convincente para esta exploração: em tela estreita, o orçamento de vazio parece menor."
---

# Exploração: Vazio móvel 003

A ausência não precisa desaparecer quando a grade colapsa. Nesta exploração, a pausa curta mantém ritmo em 320px e 390px; a pausa longa dilui a continuidade. O resultado registra taste informado por comparação e restrições reais, não uma hipótese aceita ou rejeitada.
