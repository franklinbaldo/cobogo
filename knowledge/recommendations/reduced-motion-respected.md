---
type: OpinionatedRecommendation
slug: reduced-motion-respected
maturity: validated
problem: animação pode ser adicionada como polimento sem considerar preferência do usuário ou valor funcional
validated_in: [franklinbaldo/aleph-the-game]
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

- `franklinbaldo/aleph-the-game`, merge `de80a6023e05751982a0d8dc6949b59145b91ca8`: `ChoiceButton`, `TypingText` e `ToastNotification` tratam redução de movimento sem esconder narrativa ou ação. O workflow `Visual evidence` executou novamente em `main` e produziu desktop/celular em movimento normal e reduzido no artifact `9873996084`.

Essa é a primeira aplicação real bem-sucedida reconciliada sob o modelo atual, portanto a recomendação passa a `validated`: já funcionou em pelo menos um projeto real. Ainda é cedo para chamá-la de `stable`, que exige convergência em pelo menos dois projetos preservando suas identidades locais.

## Falsificação

Motion que provar melhora funcional clara pode permanecer, desde que preferência/acessibilidade continuem atendidas.
