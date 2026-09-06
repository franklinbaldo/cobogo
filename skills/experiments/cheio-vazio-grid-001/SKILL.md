# Skill: executar Grid vazado 001

Use esta skill somente para `experiments/cheio-vazio-grid-001`.

## Objetivo

Testar se a relação arquitetônica entre cheio e vazio pode virar composição web responsiva sem copiar formas de cobogó nem sacrificar leitura.

## Antes de mexer no código

Leia, nesta ordem:

1. `knowledge/references/cobogo-cheio-vazio.md`;
2. `knowledge/studies/cheio-vazio-na-web.md`;
3. `knowledge/experiments/cheio-vazio-grid-001.md`.

Não transforme observações da referência em regras. O contrato do experimento é a hipótese e os critérios registrados em `VisualExperiment`.

## Como executar

1. Use o mesmo conteúdo nas variantes para que a comparação seja de composição, não de copy.
2. Faça três variantes deliberadamente diferentes de distribuição de cheios e vazios. Evite diferenças cosméticas pequenas.
3. Preserve a ordem semântica no DOM; use grid placement apenas como apresentação progressiva.
4. Faça a variante mobile colapsar naturalmente para fluxo linear. Não preserve buracos decorativos quando eles deixam de carregar relação útil.
5. Observe cada variante em 390px, 768px e 1440px.
6. Navegue por teclado. Desabilite CSS ou inspecione a ordem do DOM para confirmar que leitura e foco continuam coerentes.
7. Compare cada variante contra todos os `success_signals` e `failure_signals` do experimento.
8. Escolha uma variante somente se ela sobreviver sem a explicação "isso é inspirado em cobogó". A composição precisa funcionar por si.
9. Publique o specimen escolhido em `/laboratorio/` ou preserve evidência do fracasso.
10. Atualize `status` e `outcome` do `VisualExperiment`; se houver specimen publicado, crie ou atualize um `VisualSpecimen` OKF.

## O que não fazer

- desenhar um padrão de bloquinhos para tornar a referência reconhecível;
- usar posição visual para alterar a ordem de leitura;
- declarar princípio ou primitive antes de evidência;
- esconder uma variante ruim: resultados rejeitados também alimentam a Wiki;
- criar uma abstração reutilizável só porque o experimento produziu CSS interessante.

## Evidência mínima

A sessão deve deixar: resultado do build, observação desktop/mobile, verificação de teclado/ordem semântica, decisão sobre a hipótese e link/caminho do specimen quando houver.

## Saída para WikiSkill

Registre o que o experimento ensinou em termos de relação visual, não de implementação acidental. Uma sessão de síntese posterior pode comparar este resultado com outros estudos e decidir se existe um princípio durável ou se a hipótese deve morrer aqui.
