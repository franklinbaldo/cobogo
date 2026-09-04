# Fluxo de evolução entre consumidores e Cobogó

Cobogó evolui a partir de necessidades reais dos projetos que o usam. O objetivo não é impedir customização local; é evitar que cada consumidor resolva de novo o mesmo problema visual.

## Regra padrão

Antes de criar uma abstração visual nova dentro de um consumidor, pergunte:

> Isto é específico do domínio deste projeto ou é uma solução visual que outra interface poderia reutilizar?

Se for reutilizável, implemente primeiro no Cobogó e depois consuma a versão que contém a mudança.

Se for genuinamente específico do domínio, implemente localmente.

## Ordem de decisão

1. **Existe uma solução Cobogó adequada?** Use-a. Não crie uma variante local apenas por conveniência.
2. **Existe uma lacuna visual?** Descreva o problema de apresentação antes de escolher um componente.
3. **A solução é generalizável?** Abra uma PR no Cobogó com a menor abstração que resolve a classe do problema.
4. **A solução é local?** Mantenha-a no consumidor. Local não é erro; duplicação evitável é.
5. **A nova solução sobrepõe algo existente?** Prefira consolidar, substituir ou depreciar. Não acrescente uma segunda forma de fazer quase a mesma coisa sem justificativa forte.

## O que pertence ao Cobogó

Pertence ao Cobogó conhecimento sobre como apresentar informação e interação de forma coerente, acessível e reconhecível dentro da gramática visual do sistema.

Exemplos:

- relações de hierarquia, ritmo, densidade e composição;
- padrões para estados, metadados, provenance, leitura longa, tabelas e formulários;
- componentes ou primitives necessários para realizar esses padrões;
- defaults e decisões técnicas que tornam a implementação visual mais previsível para agentes;
- aprendizados reutilizáveis obtidos em consumidores reais.

## O que pertence ao consumidor

O domínio continua local.

Um projeto pode saber o que é CNPJ, sentença, matéria jornalística, processo, lead ou atleta. Cobogó não precisa conhecer esses conceitos para ensinar como apresentar identidade, atributos, relações, estados e alertas.

Uma abstração também pode permanecer local quando sua forma é inseparável de um fluxo ou conceito específico daquele produto e não existe uma classe útil de problemas análogos.

## Promoção upstream

Uma PR originada em consumidor deve, sempre que aplicável:

- nomear o problema visual que motivou a mudança;
- mostrar por que a abstração não depende do domínio de origem;
- reutilizar canon, foundations e patterns existentes antes de criar vocabulário novo;
- incluir teste ou specimen do comportamento que passa a ser contrato;
- remover ou depreciar abstrações sobrepostas quando a nova solução as torna redundantes.

Não é necessário provar que três consumidores já precisam da mesma coisa. Basta haver uma abstração plausivelmente reutilizável e melhor do que manter cópias locais. A evidência futura pode fortalecer, modificar ou remover a recomendação.

## Stack recomendada

Cobogó pode ser opinionado sobre implementação sem transformar tecnologia em identidade.

No estado atual, **Astro é o caminho recomendado para novos projetos web** porque é a stack em uso e sobre a qual o sistema acumula experiência operacional. Isso não cria obrigação de manter bindings equivalentes para todos os frameworks.

Se a experiência futura mostrar uma alternativa melhor, a recomendação muda. O conhecimento visual deve sobreviver à troca de stack; a experiência recomendada não precisa ser neutra.

## Versionamento e breaking changes

Compatibilidade não tem direito de veto sobre simplificação.

Quando uma abstração histórica é ruim, redundante ou contradiz a gramática atual, Cobogó pode removê-la em nova versão. Consumidores que não puderem migrar imediatamente podem permanecer fixados numa versão anterior.

O custo de migração deve ser documentado, mas não usado para preservar indefinidamente decisões ruins.

## Regra de crescimento

Cobogó não cresce apenas por adição. Ele também consolida e esquece.

Toda adição deve responder a duas perguntas:

1. qual classe de problema visual ela resolve?
2. qual abstração existente ela reutiliza, substitui ou torna desnecessária?

Se a segunda resposta for "nenhuma" repetidamente, a superfície está provavelmente crescendo sem abstração suficiente.
