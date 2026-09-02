---
type: OpinionatedRecommendation
slug: public-artifact-preservation
maturity: validated
problem: artifacts públicos e fontes externas podem desaparecer ou mudar, quebrando reprodutibilidade e provenance da superfície
validated_in: [franklinbaldo/quem-sao-eles]
---

# Artifact público importante deve ter estratégia de preservação

## Posição

Quando um consumer depende de snapshot ou artifact público cuja permanência importa para auditabilidade/reuso, o Cobogó recomenda uma estratégia explícita de preservação independente da UI publicada.

## Racional

Pages e fontes externas são superfícies mutáveis. Preservação permite reconstruir o estado que sustentou uma afirmação ou experiência.

## Contrato

A estratégia registra identificador estável, competência/versão, checksum ou provenance suficiente e não depende de segredo para leitura pública. Internet Archive é uma implementação possível, não requisito universal.

## Critério observável

O artifact usado por uma superfície pode ser recuperado por referência pública estável e reconciliado com o artifact do repo/deploy.

## Escape hatch

Artifacts efêmeros sem valor de reprodutibilidade, conteúdo proibido de redistribuir ou fontes já imutáveis podem não exigir cópia adicional.

## Evidência

`franklinbaldo/quem-sao-eles`: snapshots PEP são publicados por competência no Internet Archive com provenance e hashes, mantendo correspondência com `public/data`.

## Falsificação

Se uma estratégia de preservação introduzir risco legal, de privacidade ou inconsistência maior que o benefício, usar referência/provenance sem republicação ou outro mecanismo apropriado.
