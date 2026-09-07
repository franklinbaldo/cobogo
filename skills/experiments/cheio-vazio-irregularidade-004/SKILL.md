# Skill — irregularidade 004

## Objetivo

Encontrar o limite em que uma composição editorial deixa de ganhar ritmo com irregularidade e começa a perder hierarquia.

## Leitura obrigatória

Antes de alterar a superfície, leia:

- `knowledge/references/cobogo-cheio-vazio.md`;
- `knowledge/studies/cheio-vazio-na-web.md`;
- `knowledge/experiments/cheio-vazio-grid-001.md`;
- `knowledge/experiments/cheio-vazio-mapa-002.md`;
- `knowledge/experiments/cheio-vazio-mobile-003.md`;
- `knowledge/experiments/cheio-vazio-irregularidade-004.md`.

O contrato do teste é o `VisualExperiment`. Não transforme a referência arquitetônica em decoração.

## Procedimento operacional

1. Use os mesmos quatro blocos editoriais nas três variantes, na mesma ordem DOM: título, explicação, evidência e ação.
2. Variante A é controle: grid regular, alinhamentos previsíveis e spans equilibrados.
3. Variante B introduz irregularidade moderada: um deslocamento e diferenças de span suficientes para criar contrapeso, sem inverter a sequência percebida.
4. Variante C aumenta deliberadamente deslocamentos e alternância de spans até testar o limite de variação tolerável.
5. Não mude conteúdo, tipografia, cor ou semântica entre variantes. A única variável é geometria.
6. Observe 1440×900 e 768×900 para hierarquia; confirme 390×844 e 320×800 para relinearização.
7. Verifique rolagem horizontal, landmarks, ordem de foco e legibilidade.
8. Preserve a variante que falhar; o contraste entre B e C é evidência central.
9. Publique em `/laboratorio/irregularidade-004/`.
10. Depois do deploy verificado, registre outcome e estado do specimen.

## Critério de interpretação

A hipótese sobrevive se B for mais expressiva que A sem aumentar esforço de leitura, enquanto C mostrar perda clara de hierarquia ou continuidade. Se B e C forem igualmente legíveis, o experimento não encontrou o limiar e deve terminar `partial`. Se B já prejudicar a sequência, registre `rejected`.

## Evidência mínima

Build, contrato OKF, verificação de acessibilidade/superfície, observação em desktop/tablet/mobile, comparação A/B/C e decisão explícita sobre o limiar.

## Saída para WikiSkill

Registre o achado como relação entre irregularidade, hierarquia e ordem percebida. Não promova diretamente para token, recipe ou primitive sem repetição em outro contexto real.
