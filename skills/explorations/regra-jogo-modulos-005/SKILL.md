# Skill - regra e jogo 005

## Objetivo

Traduzir a tensao entre regra modular e liberdade de combinacao para uma familia de interface, sem imitar a aparencia da referencia.

## Leitura obrigatoria

Leia, nesta ordem:

1. `knowledge/references/athos-bulcao-regra-jogo.md`;
2. `knowledge/studies/regra-e-jogo-na-web.md`;
3. `knowledge/explorations/regra-jogo-modulos-005.md`.

A referencia alimenta o olhar; nao fornece componentes prontos. O contrato da rodada e o `VisualExploration`.

## Procedimento

1. Escolha quatro blocos editoriais curtos e mantenha conteudo e ordem identicos em A/B/C.
2. Defina uma anatomia comum: rotulo, titulo, texto e pequena acao ou metadado.
3. Em A, repita a anatomia e a composicao sem liberdade interna: este e o controle de monotonia.
4. Em B, mantenha a anatomia e permita uma liberdade localizada por modulo, preferencialmente alinhamento ou proporcao espacial. A liberdade deve parecer parte da gramatica.
5. Em C, combine mais de uma liberdade por modulo para descobrir como a familia reage quando as excecoes deixam de ser locais.
6. Nao presuma que A e controle, B e candidata e C e falha. A/B/C sao instrumentos de critica; qualquer uma pode ser a direcao mais forte depois de observada.
7. Antes de interpretar a comparacao, confira se a variacao implementada corresponde ao que ela diz isolar. Nao chame de "uma liberdade" uma peca que muda simultaneamente geometria, escala tipografica e alinhamento sem registrar essa mistura.
8. Nao use numero de liberdades como proxy para parentesco. Julgue se as diferencas sao coordenadas pela composicao inteira e se anatomia, ritmo, hierarquia e voz continuam compartilhados.
9. Nao use cores ou desenhos de Athos, rotacoes que lembrem azulejos nem mosaico decorativo. Se a referencia ficar reconhecivel pela aparencia, recue.
10. Observe a familia em 1440px e 768px; confirme 390px e 320px. No mobile, prefira preservar uma liberdade pequena a reproduzir a geometria desktop a qualquer custo.
11. Compare com vocabulario de critica: parentesco, ritmo, monotonia, surpresa, hierarquia, massa, contrapeso e ruido.
12. Publique as tres variacoes juntas. Nao esconda alternativas menos convincentes: o contraste forma repertorio.
13. Depois da observacao visual, atualize `reflection` e escolha `selected`, `exploring` ou `abandoned`. `incorporated` exige que a direcao tenha sido absorvida por uma linguagem reutilizavel do Cobogo, nao apenas que uma variacao tenha agradado.
14. Quando existir um artefato `cobogo-published-preview-*`, recupere e observe as capturas publicadas antes de concluir a critica. Checks tecnicos garantem integridade; nao substituem julgamento visual.

## Evidencia minima

- contrato OKF e build verdes;
- A/B/C publicadas;
- observacao desktop e mobile da superficie publicada;
- verificacao de ordem semantica e foco;
- critica explicita sobre parentesco versus monotonia/ruido;
- verificacao de que as variaveis realmente implementadas correspondem a descricao de cada variacao;
- reflection persistida no `VisualExploration`.

## Saida para WikiSkill

Registre relacoes que possam orientar taste de sistema, nao valores CSS acidentais. A primeira rodada mostrou que contar excecoes e uma metrica pobre: uma composicao com varias liberdades coordenadas pode preservar melhor a familia do que uma unica excecao local mal proporcionada. A pergunta util e como a liberdade se relaciona com a voz comum, nao quantas propriedades mudaram.