---
type: OpinionatedRecommendation
slug: semantic-accessibility-default
maturity: validated
problem: acessibilidade tratada como correção posterior produz interfaces visualmente aceitáveis mas semanticamente frágeis
validated_in:
  - franklinbaldo/cobogo
---

# Semântica e acessibilidade são defaults, não acabamento

## Posição

O Cobogó recomenda HTML semântico, navegação por teclado, foco perceptível, nomes acessíveis e estados comunicados semanticamente como parte do contrato básico de qualquer superfície interativa.

## Racional

Esses requisitos melhoram uso assistivo, teclado, automação, manutenção e clareza estrutural. Corrigi-los depois é mais caro e tende a gerar exceções locais.

## Contrato

Preferir elementos nativos adequados antes de ARIA; controles precisam de nome; foco não pode desaparecer; loading/erro/sucesso relevantes precisam ser perceptíveis sem depender apenas de cor ou posição visual.

## Critério observável

O fluxo principal pode ser percorrido por teclado, possui foco visível e sua estrutura/estados fundamentais permanecem compreensíveis por semântica do documento.

## Escape hatch

Widgets complexos podem exigir ARIA e comportamento especializado. O escape é técnico, não autorização para abandonar o contrato de acessibilidade.

## Evidência

A recomendação está **validated**: isso significa que já funcionou em pelo menos um projeto real. No próprio `franklinbaldo/cobogo`, a PR #454 transformou o princípio em verificação reproduzível com navegador real, axe e navegação por `Tab` nas seis rotas públicas principais.

No commit da branch `8910488990415d0c4c0d78517b9b83a876a1bf3b`, CI, Knowledge, Greenfield visual preview e GitGuardian ficaram verdes. A verificação de acessibilidade produziu o arquivo `9908482256` e registrou HTTP 200, nenhuma violação séria/crítica do axe e nenhum controle esperado sem foco perceptível por teclado nas seis rotas.

A PR foi incorporada como `9d656e45d7a596e4bf4a6b7628583db32882c81e`. A mesma verificação rodou novamente em `main` e produziu o arquivo `9910687966`, com o mesmo resultado verde. O GitHub Pages publicou esse commit na execução `33799935642`; o job posterior à publicação também passou e produziu `9910703829`, ligado ao mesmo commit.

Essa aplicação valida a recomendação, mas não a torna `stable`: para isso ainda é necessária convergência bem-sucedida em pelo menos um segundo projeto real, preservando sua identidade e implementação locais.

## Falsificação

O default pode evoluir conforme padrões de plataforma mudem; requisitos específicos que prejudiquem comportamento nativo devem ser removidos em favor da plataforma. Uma execução automatizada verde também não autoriza afirmar perfeição universal de acessibilidade: a recomendação deve ser revista se observação assistiva real revelar falhas que o contrato atual não detecta.
