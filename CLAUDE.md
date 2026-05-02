# CLAUDE.md

## Información del proyecto

- **Nombre del repositorio:** CLAUDE-CODE-MAS
- **Propietario:** kandamochoco-star

## Reglas

### Selección de modelo y subagentes

Delega el trabajo al subagente correcto según el coste y la complejidad. No uses Opus por defecto.

- **Haiku → `fast-search`**: búsquedas, lecturas puntuales, `grep`/`glob`, localizar dónde está definido X o quién referencia Y, y cualquier tarea read-only rápida.
- **Sonnet → `code-writer`**: escribir código, editar archivos, refactors normales, fixes de bugs, ejecutar tests. Es el agente por defecto para cambios de código.
- **Opus → `architect-reviewer`**: SOLO para revisar arquitectura, decisiones críticas o difíciles de revertir, auditorías de seguridad, y trade-offs de diseño con impacto a largo plazo.

Reglas de uso:
1. Empieza siempre por el agente más barato que pueda resolver la tarea.
2. No invoques `architect-reviewer` para tareas rutinarias. Si lo invocas y la tarea resulta trivial, devuélvela a `code-writer`.
3. Para tareas independientes, lanza varios subagentes en paralelo en un solo mensaje.
4. Si una sola pregunta puede responderse con `Read` o `Grep` directos, hazlo sin delegar.
