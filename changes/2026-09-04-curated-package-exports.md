---
title: Cobogó fecha export curinga de componentes

date: 2026-09-04
type: changed
---

Remove o entrypoint público `cobogo/components/*`. Componentes passam a ser consumidos apenas pelos entrypoints deliberadamente mantidos pelo pacote, evitando que arquivos internos virem API pública por acidente e abrindo espaço para consolidação e depreciação sem preservar cada implementação histórica.
