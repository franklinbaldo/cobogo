# Depreciação e mudanças incompatíveis

Esta política materializa a RFC 0003 sem criar um processo de aprovação para projetos consumidores.

A regra central é simples: **compatibilidade é útil, mas não é superior à coerência da versão atual**. Um projeto que não puder migrar agora pode continuar fixado numa versão anterior do Cobogó. Isso permite remover abstrações ruins em versões novas sem carregar wrappers indefinidamente.

## Classifique a mudança em uma frase

Toda PR que altera API pública deve dizer uma destas duas coisas:

- **Compatível:** projetos que já usam a API continuam funcionando sem alteração obrigatória.
- **Incompatível:** adotar esta versão exige mudar o uso de uma API pública removida, renomeada ou semanticamente alterada.

Não crie categorias intermediárias apenas para evitar dizer que uma mudança é incompatível.

## Quando depreciar

Deprecie quando ainda houver utilidade concreta em oferecer um período de transição, por exemplo porque existe projeto conhecido usando a API e a troca pode ser feita gradualmente.

Uma depreciação deve registrar, de forma curta:

1. **por que** a API deixou de ser recomendada;
2. **o que usar no lugar**, quando houver substituto;
3. **quem ainda usa**, quando houver projeto conhecido;
4. **quando pode sair** — uma condição objetiva, não uma promessa de permanência.

Exemplo:

> `OldPanel` está depreciado porque duplica o pattern `panel`. Projetos novos devem usar HTML semântico + `cobogo/patterns`. O wrapper pode ser removido na próxima versão incompatível depois que os usos conhecidos estiverem documentados com orientação de migração.

## Quando remover sem wrapper

Remova diretamente numa versão incompatível quando manter a API antiga não entrega benefício proporcional, especialmente quando:

- não existe projeto conhecido usando a API;
- a abstração duplica HTML/CSS ou outra API já recomendada;
- a API ocupa a fronteira errada e decide significado que pertence ao domínio do projeto;
- o wrapper preservaria exatamente a duplicação que a mudança pretende eliminar;
- manter as duas opções continuaria impondo escolha histórica a quem começa hoje.

Ausência de consumidor conhecido não prova que ninguém usa a API fora do portfólio. Ela significa apenas que o Cobogó não assume um custo permanente de compatibilidade sem evidência concreta desse benefício.

## Quando manter um wrapper temporário

Wrapper de compatibilidade é ferramenta de migração, não estado final padrão.

Mantenha-o apenas quando houver utilidade concreta registrada, como:

- um projeto ativo conhecido precisa de janela de migração;
- a substituição exige mudança coordenada que não cabe na mesma entrega;
- a remoção imediata criaria custo alto sem simplificar de fato a implementação atual.

Ao adicionar ou preservar um wrapper, registre a condição de remoção na mesma PR ou issue. Se a condição deixar de existir, a próxima consolidação adequada deve removê-lo.

## Orientação para projetos conhecidos

Quando um projeto conhecido usa a API removida ou depreciada, a migração deve responder apenas ao necessário:

- qual uso antigo existe;
- qual é o caminho recomendado agora;
- se a migração é obrigatória para adotar a versão nova;
- qual comportamento ou identidade continua local ao projeto.

O Cobogó não precisa incorporar a migração de todos os projetos antes de remover a API numa versão nova. Um projeto pode permanecer numa versão anterior até estar pronto.

## Produção continua primeiro

Esta política organiza a manutenção do Cobogó; **não é um portão para entregar um projeto**.

Se um projeto precisa de uma solução local para publicar, ele pode implementá-la. A discussão sobre consolidar, depreciar ou remover uma abstração compartilhada acontece no Cobogó sem bloquear essa entrega local.

Da mesma forma, uma mudança local não precisa esperar uma release nova do Cobogó quando a solução local é a forma mais simples e correta de seguir.

## Checklist curto para PRs de consolidação

Antes de incorporar uma mudança que remove ou substitui API pública, a PR deve conseguir responder:

- É compatível ou incompatível?
- Qual duplicação ou abstração ruim está sendo eliminada?
- Há projeto conhecido usando a API antiga?
- Existe substituto recomendado? Se sim, qual?
- Se houver depreciação ou wrapper, qual é a condição objetiva de remoção?
- A documentação corrente deixou de ensinar o caminho antigo?
- Os testes verificam o contrato público recomendado quando isso for automatizável?

Nada nesta lista exige preservar API antiga por tempo arbitrário.

## Relação com a RFC 0003

A RFC 0003 continua sendo a decisão arquitetural. Este documento é apenas a tradução operacional da seção sobre depreciação e mudanças incompatíveis.

A regra de fundo permanece: o compromisso principal é com uma versão atual menor, coerente e fácil de usar; versionamento é o mecanismo que permite essa evolução sem obrigar todos os projetos a migrarem ao mesmo tempo.
