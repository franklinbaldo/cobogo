---
type: OpinionatedRecommendation
slug: responsive-by-contract
maturity: validated
problem: uma superfície pode estar correta em desktop e degradar hierarquia, legibilidade ou ação em viewport estreito
validated_in:
  - franklinbaldo/aleph-the-game
---

# Responsividade é parte do contrato de qualidade

## Posição

Uma superfície pública deve preservar tarefa, hierarquia, legibilidade e acesso à navegação em viewport estreito; mobile não é uma versão decorativamente comprimida do desktop.

## Racional

A experiência pública não pode depender de uma classe específica de dispositivo. Problemas responsivos também expõem hierarquias frágeis que desktop espaçoso mascara.

## Contrato

Capturas/validação visual material devem incluir pelo menos um viewport estreito quando a superfície é destinada a browser geral. Tabelas, navegação e ações precisam de comportamento deliberado.

## Critério observável

No viewport estreito, a tarefa principal continua utilizável, conteúdo não exige scroll horizontal acidental e controles essenciais permanecem alcançáveis.

## Escape hatch

Ferramentas explicitamente destinadas a telas grandes por requisito de domínio devem declarar essa limitação em vez de fingir suporte responsivo.

## Evidência

`validated` significa que esta recomendação já funcionou em pelo menos um projeto real. Em `franklinbaldo/aleph-the-game#9`, a regra foi aplicada sem trocar a identidade narrativa do jogo: em 390×844, `February 15, 1929` permanece inteira, os controles do cabeçalho continuam visíveis e o documento mede exatamente 390 px. O mesmo workflow também verifica desktop e movimento reduzido. A prova foi refeita após o merge no commit de `main` `1c342d875fc52e71ed91c38c7f7b064a8bbb73b8`, execução `33754380206`, arquivo `9892849677`.

A aplicação também mostrou por que o contrato precisa medir a página em vez de confiar apenas em aparência. A primeira tentativa tornou a data legível, mas o documento ainda media 406 px numa janela de 390 px. O diagnóstico localizou a causa num controle de narração posicionado fora da coluna; a solução final o mantém dentro da coluna apenas no celular e preserva a composição desktop.

Ainda não é `stable`: isso exigiria convergência bem-sucedida em pelo menos outro projeto real com identidade local própria.

## Falsificação

Viewports e estratégias específicas podem evoluir; o contrato permanece preservar a tarefa nos ambientes declaradamente suportados. Se aplicações reais mostrarem que o critério força perda de capacidade necessária ou produz pior usabilidade em classes legítimas de interface, a recomendação deve ser revista ou abandonada, não protegida da evidência.
