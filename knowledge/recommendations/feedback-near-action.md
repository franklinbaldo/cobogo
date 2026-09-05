---
type: OpinionatedRecommendation
slug: feedback-near-action
maturity: stable
problem: feedback distante da ação obriga o leitor a descobrir se algo aconteceu e a que ação o estado pertence
validated_in: [franklinbaldo/intuit, franklinbaldo/aleph-the-game]
---

# Feedback deve aparecer perto da causa

## Posição

Resultado, progresso e erro de uma ação devem aparecer no contexto em que a ação foi iniciada, salvo quando o efeito é global e realmente exige feedback global.

## Racional

Proximidade reduz ambiguidade sobre qual ação produziu aquele estado e diminui o movimento de atenção. Toast global não deve ser default para tudo.

## Contrato

Controles refletem pending/disabled quando necessário; mensagem de resultado/erro é associada ao contexto; mudanças globais podem usar região global apropriada sem esconder efeito local. Quando o sistema conhece estados diferentes que exigem decisões diferentes, o feedback deve preservar essa diferença sem inventar causa além do que foi observado. Recuperação técnica deve preservar a intenção que falhou e não deve se apresentar como uma nova ação de domínio.

## Critério observável

Depois de agir ou entrar por um fluxo que produz estado, o leitor consegue perceber o resultado sem procurar em outra região da página e entende a próxima decisão possível quando ela existe. Tentar novamente uma operação mantém a intenção original reconhecível e não fabrica um novo evento do domínio apenas para representar o retry.

## Escape hatch

Ações que navegam ou alteram estado global podem comunicar resultado no destino/globalmente quando essa é a relação natural. Estados tecnicamente distintos podem compartilhar mensagem quando a distinção não muda a decisão do leitor.

## Evidência

- `franklinbaldo/intuit` — PR #33, incorporada como `988296675b1384a7c86a7ec4887e0835c2310bb2`: o caminho `?gist=` reutiliza a região de alerta da própria ferramenta e distingue resposta HTTP sem sucesso, Gist válido sem arquivo `.html`, falha ao carregar o arquivo HTML e falha de requisição. Testes Playwright cobrem os estados sem rede real; Test, Visual capture e Pages passaram novamente depois do merge, com captura da página publicada no pacote `9965193464`.
- `franklinbaldo/aleph-the-game` — PR #11, incorporada como `802ffdf7f472491311dddc4effa028d676879584`: o estado antigo transformava falha técnica em narrativa `SYSTEM` e oferecia `Attempt to reconnect` como se fosse escolha da história. Depois da mudança, `Timeline interrupted` aparece separado da narrativa, `Retry last action` reutiliza a intenção anterior e a ação do jogador continua exatamente uma vez no histórico. O print anterior está no pacote `9966232370`; a verificação posterior ao merge está no pacote `9966270802`.

## Estado da recomendação

`stable` significa que a mesma direção já funcionou de forma convergente em pelo menos dois projetos reais distintos. Intuit e Aleph chegam ao mesmo princípio por apresentações locais muito diferentes — ferramenta de edição/compartilhamento no primeiro, experiência narrativa no segundo — sem exigir aparência compartilhada. Essa convergência é suficiente para tratar a recomendação como estável, não como regra infalível.

## Falsificação

Se feedback local duplicar informação já inequívoca na mudança de estado, reduzir redundância mantendo a relação perceptível entre causa e resultado. Se distinguir estados técnicos não mudar a decisão possível, preferir texto mais simples em vez de expor detalhe inútil. Se um retry tecnicamente correto precisar criar um novo evento de domínio para preservar consistência real do produto, documentar esse caso como exceção em vez de forçar este contrato.
