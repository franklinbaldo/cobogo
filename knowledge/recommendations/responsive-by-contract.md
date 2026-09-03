---
type: OpinionatedRecommendation
slug: responsive-by-contract
maturity: stable
problem: uma superfície pode estar correta em desktop e degradar hierarquia, legibilidade ou ação em viewport estreito
validated_in:
  - franklinbaldo/aleph-the-game
  - franklinbaldo/sisprev
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

`stable` significa que esta recomendação já funcionou de forma convergente em pelo menos dois projetos reais sem apagar suas identidades locais.

Em `franklinbaldo/aleph-the-game#9`, a regra foi aplicada sem trocar a identidade narrativa do jogo: em 390×844, `February 15, 1929` permanece inteira, os controles do cabeçalho continuam visíveis e o documento mede exatamente 390 px. O mesmo workflow também verifica desktop e movimento reduzido. A prova foi refeita após o merge no commit de `main` `1c342d875fc52e71ed91c38c7f7b064a8bbb73b8`, execução `33754380206`, arquivo `9892849677`.

A aplicação no Aleph mostrou por que o contrato precisa medir a página em vez de confiar apenas em aparência. A primeira tentativa tornou a data legível, mas o documento ainda media 406 px numa janela de 390 px. O diagnóstico localizou a causa num controle de narração posicionado fora da coluna; a solução final o mantém dentro da coluna apenas no celular e preserva a composição desktop.

Em `franklinbaldo/sisprev#159`, a mesma regra foi aplicada a um contexto completamente diferente: uma home administrativa e um relatório jurídico formal. A primeira observação encontrou o relatório com 703 px numa janela de 390 px; depois de conter tabelas, ele ainda media 611 px por causa de links e texto técnico longos. O critério não foi enfraquecido. A solução final preserva a apresentação de documento, mantém blocos técnicos com comportamento local adequado e elimina a rolagem horizontal global. Depois do merge, a execução `33758666909` no commit de `main` `d976c352d9eaa30cb3e168cafcc36bf7b60b0ae9` produziu o arquivo `9894544179`; o `evidence.json` mede exatamente 390 px na home e no relatório móveis, com texto necessário presente e HTTP 200.

A convergência é importante precisamente porque as soluções não se parecem: Aleph preserva uma interface narrativa/imersiva; Sisprev preserva uma linguagem administrativa e um relatório paginado. O que estabiliza é o contrato — tarefa, informação e ações essenciais permanecem utilizáveis sem alargar a página —, não uma composição visual compartilhada.

## Falsificação

Viewports e estratégias específicas podem evoluir; o contrato permanece preservar a tarefa nos ambientes declaradamente suportados. Se aplicações reais mostrarem que o critério força perda de capacidade necessária ou produz pior usabilidade em classes legítimas de interface, a recomendação deve ser revista ou abandonada, não protegida da evidência.
