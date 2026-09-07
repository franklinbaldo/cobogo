# Skill — vazio móvel 003

## Objetivo

Testar se o vazio pode continuar sendo estrutura útil em uma pilha móvel, sem virar espaço desperdiçado nem esconder a continuidade da leitura.

## Leitura obrigatória

Antes de alterar a superfície, leia:

- `knowledge/references/cobogo-cheio-vazio.md`;
- `knowledge/studies/cheio-vazio-na-web.md`;
- `knowledge/experiments/cheio-vazio-grid-001.md`;
- `knowledge/experiments/cheio-vazio-mapa-002.md`;
- `knowledge/experiments/cheio-vazio-mobile-003.md`.

Não transforme observações da referência em regra. O contrato deste teste é a hipótese e os sinais do `VisualExperiment`.

## Procedimento operacional

1. Use exatamente os mesmos três blocos editoriais e a mesma ordem DOM nas três variantes.
2. Variante A é controle: fluxo contínuo com o espaçamento normal do sistema.
3. Variante B adiciona uma pausa curta, equivalente a aproximadamente um bloco de ritmo, somente depois de um grupo semanticamente completo.
4. Variante C adiciona uma pausa longa suficiente para testar o limite e revelar quando ausência passa a parecer desperdício ou quebra.
5. Observe primeiro em 320×800 e 390×844; use 768px como transição, não como alvo principal.
6. Verifique rolagem horizontal, legibilidade, primeira dobra, landmarks e ordem de foco.
7. Não adicione setas, linhas, ícones ou texto explicando o vazio dentro da composição: ele precisa funcionar pela relação espacial.
8. Preserve a variante que falhar; resultado ruim é evidência.
9. Publique a comparação em `/laboratorio/mobile-003/`.
10. Depois da publicação verificada, atualize `VisualExperiment.outcome` e o `VisualSpecimen`.

## Critério de interpretação

A hipótese só sobrevive se uma pausa curta for percebida como ritmo sem tornar a continuidade ambígua nas larguras estreitas. Se apenas o controle funcionar, registre que o vazio deve colapsar no mobile. Se a pausa longa também funcionar sem custo perceptível, a hipótese está subespecificada e precisa de novo experimento antes de qualquer promoção.

## Evidência mínima

A sessão deve deixar build, contrato OKF, verificação de acessibilidade/superfície, observação em 320px e 390px, decisão sobre a hipótese e specimen publicado.

## Saída para WikiSkill

Registre o achado como relação entre densidade vertical, continuidade e ausência. Não promova diretamente para primitive, token ou recipe sem evidência fora deste experimento.
