# Skill — Campos contínuos 009

## Intenção

Investigar `directions/burle-marx-campos-continuos` numa superfície real do Cobogó sem reduzir a referência a curvas ou decoração. A pergunta é estrutural: quando itens semanticamente irmãos devem compartilhar um campo em vez de se comportar como quatro objetos autônomos?

## Leia antes

- `knowledge/references/burle-marx-campos-interligados.md`
- `knowledge/directions/burle-marx-campos-continuos.md`
- `knowledge/studies/campos-interligados-na-web.md`
- `knowledge/explorations/campos-continuos-009.md`
- os quatro `PracticeBaseline` vinculados à exploração
- `knowledge/wikiskill/run-specs/visual-exploration.md`

## Procedimento

1. Preserve conteúdo, ordem DOM, links, foco e `aria-current` entre todas as versões.
2. Trate A0 como controle literal da `RelationCollection` vigente: cards independentes, gap e moldura completa.
3. Em A, teste continuidade por linhas e divisores numa única superfície.
4. Em B, teste contato direto entre células dentro de uma moldura comum.
5. Em C, teste continuidade editorial com proporções distintas, sem perder equivalência funcional.
6. Explique ao lado de cada versão como ela traduz a direção e qual risco assume.
7. Observe desktop e mobile; continuidade não pode depender de composição que quebra no reflow.
8. Na rodada de construção, não escolha vencedora. Publique e deixe `exploring`.
9. Numa rodada posterior, use somente a superfície já publicada, compare cada política contra A0 e separe três perguntas: a coleção parece mais una? os alvos continuam inequívocos? a tradução introduziu hierarquia que o conteúdo não possui?

## Evidência mínima

Contrato OKF e build verdes; superfície pública acessível; A0+A+B+C no mesmo specimen; foco e ordem preservados; observação responsiva em pelo menos desktop, 390px e 320px antes de qualquer resultado.

## Aprendizado da segunda rodada

Na superfície publicada do SHA `8ad82aa8daf802cb2f33949ef624281c5402552b`, **A — ledger contínuo** foi a tradução mais forte. O ganho não veio de apagar bordas, mas de converter quatro perímetros em divisores compartilhados. Isso preservou equivalência e leitura em desktop e mobile.

B mostrou um limite importante: uma moldura comum não basta para produzir continuidade se cada célula ainda lê como caixa, especialmente quando a grade vira pilha no mobile. C mostrou o limite oposto: continuidade por massas distintas fica inadequada quando cria hierarquia semântica inexistente — a relação “Ação” ganhou dominância visual sem ser funcionalmente superior às demais.

Portanto, em coleções de itens irmãos, prefira investigar **fronteiras relacionais** antes de hierarquia ou redução indiscriminada de estrutura.

## Saída para WikiSkill

Registre se estrutura compartilhada reduz isolamento sem apagar fronteiras úteis. Diferencie ganho de continuidade de mero minimalismo: menos borda só é aprendizado se a coleção continuar mais clara como relação. Preserve também os limites negativos: contato pode continuar parecendo compartimento, e variação de massa não deve inventar prioridade.
