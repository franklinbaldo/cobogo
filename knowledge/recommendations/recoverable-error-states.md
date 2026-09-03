---
type: OpinionatedRecommendation
slug: recoverable-error-states
maturity: stable
problem: mensagens de erro podem informar falha sem permitir que o leitor entenda o próximo passo
validated_in:
  - franklinbaldo/ficha
  - franklinbaldo/leizilla
---

# Erro deve preservar agência e verdade

## Posição

Quando uma tarefa pública falha de forma recuperável, a interface deve dizer o que aconteceu no nível útil ao leitor e oferecer próximo passo possível, sem despejar detalhe interno desnecessário. A mensagem também deve respeitar o limite do que o sistema realmente sabe: indisponibilidade de acesso não autoriza afirmar ausência de publicação, inexistência de dado ou outra causa específica sem prova própria.

## Racional

Feedback que apenas declara “erro” encerra a agência do usuário. UX robusta trata falha como estado do fluxo. Mas simplificar a linguagem não pode trocar diagnóstico técnico por explicação falsa: uma mensagem curta só aumenta confiança quando descreve um estado que a informação disponível sustenta.

## Contrato

Erro material é distinguível de vazio/loading, possui mensagem compreensível e, quando existe ação segura, oferece retry, alternativa ou caminho de retorno. A causa apresentada ao leitor não pode ser mais específica do que aquilo que o sistema realmente comprovou naquele estado.

## Critério observável

Após uma falha recuperável, um leitor consegue decidir o que fazer em seguida sem abrir console ou recarregar às cegas, e a explicação pública continua verdadeira mesmo quando a causa técnica exata não é conhecida.

## Escape hatch

Falhas não recuperáveis podem apenas explicar o estado e preservar navegação segura; não inventar retry quando ele não existe. Quando várias causas técnicas são indistinguíveis na interface, prefira descrever a indisponibilidade observada a escolher uma causa por conveniência.

## Evidência

`stable` significa aqui que a recomendação já funcionou de forma convergente em pelo menos dois projetos reais, preservando identidades locais diferentes.

### Ficha

A primeira aplicação bem-sucedida foi `franklinbaldo/ficha#234`. Antes, o estado de indisponibilidade expunha `NetworkError`, `XMLHttpRequest`, nome de arquivo e URL de transporte sem próximo passo útil. A #234 preservou a identidade da Ficha e passou a dizer `A consulta está temporariamente indisponível.`, oferecendo `manifest.json` como alternativa pública já existente. Depois do merge, o commit `2824bf6107bcd622570dd6beb27f820980fe5dc5` teve deploy `33710502906`, CI `33710502829` e verificação visual `33710502919` concluídos com sucesso.

### Leizilla

O Leizilla primeiro forneceu uma prova negativa importante. No commit `dc761b8936a51ade164bcfaf0dcfc04756b7eea6`, uma falha de rede ao buscar o Parquet público já existente fazia a interface afirmar que Rondônia v0 “ainda não foi publicado”. Isso refinou a regra: linguagem amigável não basta; o estado precisa continuar verdadeiro.

A PR `franklinbaldo/leizilla#163` aplicou essa versão mais forte. O texto principal passou a dizer `Não foi possível acessar o acervo agora`, sem inferir ausência ou falta de publicação. O projeto oferece caminhos próprios — Parquet direto, Cobertura e roadmap — e mantém detalhe técnico recolhido em uma seção secundária. A home também distingue falha de acesso de consulta concluída com zero registros.

No commit atual da branch da PR, `7cab1cb9b5c7be087be850c40f9010b38575cb48`, GitGuardian, build e a verificação visual passaram; a execução visual `33770546164` produziu o arquivo `9899463951`. O workflow força uma falha do Internet Archive em desktop e celular e reprova se reaparecer linguagem de “não publicado”.

Depois do merge, o commit que realmente entrou em `main` foi `b5afe794073fc5645c3fb4edacc8146bf75976df`. O GitHub Pages publicou esse commit na execução `33770975164`. A verificação visual de `main` `33770975121` também passou e produziu o arquivo `9899626172`, ligado ao mesmo commit, com os quatro estados esperados.

A convergência é relevante porque as soluções não são cópias: a Ficha oferece `manifest.json`; o Leizilla oferece dataset, cobertura e roadmap. O que se repete é o contrato — dizer apenas o que se sabe e preservar uma ação verdadeira para o leitor.

## Falsificação

A quantidade de detalhe deve diminuir quando mensagens técnicas confundirem mais do que ajudarem; ação e significado vêm antes de diagnóstico interno. A recomendação deve ser revista ou aposentada se aplicações reais mostrarem que ocultar detalhe do texto principal impede uma tarefa legítima do leitor ou se a alternativa oferecida for menos segura do que simplesmente explicar a indisponibilidade.