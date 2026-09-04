---
type: OpinionatedRecommendation
slug: semantic-accessibility-default
maturity: stable
problem: acessibilidade tratada como correção posterior produz interfaces visualmente aceitáveis mas semanticamente frágeis
validated_in:
  - franklinbaldo/cobogo
  - franklinbaldo/sisprev
  - franklinbaldo/astronauta
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

A recomendação está **stable**. Em português comum, isso significa que já funcionou de forma convergente em pelo menos dois projetos reais, sem exigir que eles tenham a mesma aparência ou implementação.

A primeira aplicação bem-sucedida foi o próprio `franklinbaldo/cobogo`. A PR #454 transformou o princípio em verificação reproduzível com navegador real, axe e navegação por `Tab` nas seis rotas públicas principais. Ela foi incorporada como `9d656e45d7a596e4bf4a6b7628583db32882c81e`; a prova foi repetida em `main` e depois da publicação pelo GitHub Pages.

A segunda aplicação foi `franklinbaldo/sisprev#160`. Antes de modificar a interface, a PR fixou o critério: Chromium real nas rotas `/sisprev/` e `/sisprev/relatorio/`; axe com WCAG A/AA sem desligar regras de contraste/estrutura; `Tab` real pelos controles visíveis; foco perceptível; nomes acessíveis; reprovação para violações sérias/críticas ou controles inalcançáveis. A medição encontrou problemas reais — contraste na home, contraste de links, caixas de checklist sem nome e, por fim, três links distinguíveis apenas por cor — e o critério não foi reduzido para acomodar o resultado.

No commit final da branch `6257b5a374ebfa7289fb109465b3f4cd14aaad06`, a verificação terminou verde junto da prova responsiva. A PR foi incorporada como `212d7fd1cde4a4ed5b715d841ac890e987706b7f`. A execução `33808763237` repetiu o teste em `main` e produziu o arquivo `9914070230`. O Pages `33808763273` publicou o mesmo commit e confirmou a correspondência do SHA. Depois disso, a execução `33809125749` abriu novamente a URL pública e produziu `9914175591`. Nesse pacote, `accessibility-evidence.json` registra `phase: published`, HTTP 200 nas duas rotas, zero violações do axe, zero controles inalcançáveis e zero falhas de teclado; a home percorre 40 controles esperados e o relatório, 884.

A terceira aplicação foi `franklinbaldo/astronauta#45`, num produto com natureza diferente: admin SSR local, denso e executado em loopback. Antes da implementação, a rodada congelou a exigência de Chromium real, axe sem violações sérias/críticas, `Tab` em todos os controles visíveis e habilitados, foco perceptível e preservação do diagnóstico completo mesmo quando a execução falhasse.

A primeira execução cumpriu o papel de falsificar a hipótese de que a interface já estava pronta: encontrou contraste insuficiente, um link de rodapé distinguível apenas por cor e uma região horizontal rolável sem caminho de foco. O teclado, por outro lado, já alcançava todos os controles então contados. A solução corrigiu a interface sem desligar regras nem reduzir a régua. O commit final da branch `bc8b17e274cb2766a9204c799423540ba5a370fb` passou auditoria semântica, prova visual, CI, workflows funcionais e GitGuardian. A PR foi incorporada como `2ee08c03e11aa7c9fec104ffe9db1403f4805c89`.

A execução de `main` `33843623459` repetiu a prova no runtime real desse commit e produziu o arquivo `9925739036`: `/types/Note` ficou com axe 0, 25/25 controles alcançados e nenhuma falha de foco; `/concepts/edit/note-01` ficou com axe 0, 13/13 controles alcançados e nenhuma falha de foco. Como o produto não possui Pages, reiniciar o runtime real sobre o commit de `main` é a verificação equivalente à publicação neste caso.

Cobogó, Sisprev e Astronauta preservam identidades locais distintas. O primeiro é uma superfície editorial de design system e conhecimento; o segundo é uma interface administrativa com relatório jurídico formal; o terceiro é um admin local escuro e de alta densidade. A convergência está no contrato observável — semântica, teclado, foco e nomes acessíveis — e não em compartilhar paleta, composição ou componentes.

A terceira aplicação reforça a recomendação, mas não cria um novo degrau além de `stable`: esse estado já significa que a ideia convergiu em pelo menos dois projetos reais. Evidência adicional aumenta confiança e pode revelar novos limites; não serve para inflar a classificação.

## Falsificação

O default pode evoluir conforme padrões de plataforma mudem; requisitos específicos que prejudiquem comportamento nativo devem ser removidos em favor da plataforma. Uma execução automatizada verde também não autoriza afirmar perfeição universal de acessibilidade: a recomendação deve ser revista se observação assistiva real revelar falhas que o contrato atual não detecta.