# Baselines do laboratório

Este diretório recebe observações `PracticeBaseline` usadas pelas explorações visuais.

Não crie arquivos para preencher catálogo. Um baseline só existe depois que uma superfície foi realmente observada e há evidência reproduzível.

Para cada nova `VisualExploration`, registre dois prongs antes de materializar variantes:

1. **Cobogó atual** — exatamente um `PracticeBaseline` com `kind: cobogo_current`, correspondente à superfície que a exploração pretende melhorar. Ele vira **A0** no specimen.
2. **Estado da prática** — um ou mais `PracticeBaseline` com `kind: design_system`, escolhidos pela relevância à pergunta e apoiados em fontes/superfícies primárias.

Os arquivos devem seguir `knowledge/okf.schema.sql`. A arquitetura, critérios de avaliação, ordem narrativa pública e regras de canonização estão em `knowledge/rfcs/0001-laboratorio-visual.md`.

Baselines podem ser reutilizados enquanto a observação continuar atual e pertinente. Quando uma superfície mudar materialmente, preserve o registro anterior como `superseded` e faça uma nova observação; não reescreva retrospectivamente o que foi visto.
