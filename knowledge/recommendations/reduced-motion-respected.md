---
type: OpinionatedRecommendation
slug: reduced-motion-respected
maturity: opinionated
problem: animação pode ser adicionada como polimento sem considerar preferência do usuário ou valor funcional
validated_in: []
---

# Movimento precisa justificar-se e respeitar preferência

## Posição

Animação deve comunicar relação, mudança ou feedback; não ser requisito para compreender conteúdo. Superfícies devem respeitar `prefers-reduced-motion` quando houver movimento não essencial.

## Racional

Movimento decorativo pode distrair ou causar desconforto. Um design system público deve ter default conservador em motion, não em opinião.

## Contrato

Transições curtas e funcionais quando úteis; conteúdo não depende de animação; reduced motion remove/reduz movimento não essencial sem esconder estado.

## Critério observável

Com preferência de movimento reduzido, a tarefa e feedback continuam íntegros sem animação desnecessária.

## Escape hatch

Visualizações cujo movimento é o próprio dado podem exigir tratamento específico e alternativa equivalente quando possível.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Motion que provar melhora funcional clara pode permanecer, desde que preferência/acessibilidade continuem atendidas.
