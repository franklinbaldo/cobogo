---
type: OpinionatedRecommendation
slug: semantic-accessibility-default
maturity: stable
problem: acessibilidade tratada como correção posterior produz interfaces visualmente aceitáveis mas semanticamente frágeis
validated_in:
  - franklinbaldo/cobogo
  - franklinbaldo/sisprev
  - franklinbaldo/astronauta
  - franklinbaldo/ficha
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

Quando o projeto possui uma página publicada e já dispõe de verificação reproduzível, o Cobogó prefere repetir o mesmo contrato contra a URL realmente entregue depois do deploy. Isso não substitui a prova do build; separa os dois fatos.

## Escape hatch

Widgets complexos podem exigir ARIA e comportamento especializado. O escape é técnico, não autorização para abandonar o contrato de acessibilidade. Projetos sem publicação pública podem comprovar o estado equivalente reiniciando o runtime real no commit incorporado.

## Evidência

A recomendação está **stable**. Em português comum, isso significa que já funcionou de forma convergente em pelo menos dois projetos reais, sem exigir que eles tenham a mesma aparência ou implementação.

A primeira aplicação bem-sucedida foi o próprio `franklinbaldo/cobogo`. A #454 transformou o princípio em verificação reproduzível com navegador real, axe e navegação por `Tab` nas seis rotas públicas principais; a prova foi repetida em `main` e depois da publicação pelo GitHub Pages.

A segunda aplicação foi `franklinbaldo/sisprev#160`. A medição encontrou problemas reais e o critério não foi reduzido para acomodar o resultado. Depois da correção, a prova passou na branch, em `main` e novamente na URL pública, preservando a identidade administrativa e documental do Sisprev.

A terceira aplicação foi `franklinbaldo/astronauta#45`, num admin SSR local, escuro e denso. A primeira execução reprovou por contraste, distinção de link e uma região horizontal sem caminho de foco. A solução corrigiu a interface sem desligar regras; a prova foi repetida no runtime real do commit incorporado.

A quarta aplicação é `franklinbaldo/ficha#241`. A Ficha já tinha axe, teclado e foco verdes no build, mas ainda não repetia o contrato na página entregue pelo GitHub Pages. A #241 entrou em `main` como `73c4696479dcc39dab7c3afe5c9e74b05dc4808d`. A publicação `33861297403` terminou verde nesse commit e, depois do deploy, Chromium abriu `https://franklinbaldo.github.io/ficha/`. O artifact `9932248070` registrou zero violações sérias ou críticas do axe, sete de sete controles visíveis alcançados por teclado, nenhum controle ausente e zero passos sem indicador perceptível de foco. Assim, a #240 foi encerrada e a avaliação de Confiança da Ficha passou a ter comprovação também no estado publicado.

Cobogó, Sisprev, Astronauta e Ficha preservam identidades locais distintas. A convergência está no contrato observável — semântica, teclado, foco e nomes acessíveis — e não em compartilhar paleta, composição ou componentes.

Aplicações adicionais reforçam a recomendação, mas não criam um degrau acima de `stable`: esse estado já significa convergência em pelo menos dois projetos reais. Evidência nova aumenta confiança e pode revelar limites; não serve para inflar a classificação.

## Falsificação

O default pode evoluir conforme padrões de plataforma mudem; requisitos específicos que prejudiquem comportamento nativo devem ser removidos em favor da plataforma. Uma execução automatizada verde também não autoriza afirmar perfeição universal de acessibilidade: a recomendação deve ser revista se observação assistiva real revelar falhas que o contrato atual não detecta.