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

## Skills, plugins y MCP instalados (nivel usuario)

Todo vive en `~/.claude/` (no se commitea). Para actualizar todo a la vez:
```bash
bash scripts/update-skills.sh
```

### Inventario actual

| Origen | Tipo | Ubicación | Cómo se actualiza |
|--------|------|-----------|-------------------|
| `nextlevelbuilder/ui-ux-pro-max-skill` | 7 skills (UI/UX, design, brand, slides…) | `~/.claude/skills/` | re-clone (sin `.git`) |
| `obra/superpowers` | plugin: 14 skills + 1 agente + 3 comandos | `~/.claude/plugins/superpowers` (symlinks) | `git pull` |
| `affaan-m/everything-claude-code` | plugin: 182 skills + 48 agentes + 68 comandos | `~/.claude/plugins/everything-cc` (symlinks) | `git pull` |
| `thedotmack/claude-mem` | tool npm + plugin (memoria persistente) | global npm + plugin marketplace | `npm update -g claude-mem` |
| `czlonkowski/n8n-mcp` | servidor MCP (workflows n8n) | `~/.claude.json` (user scope) | `npx -y n8n-mcp` |

### Convenciones de nombrado (colisiones)

- Si una skill/agent/comando ya existía con el mismo nombre, las copias de **everything-cc** se enlazan con prefijo `ecc-` (ej: `ecc-design-system`, `ecc-code-reviewer`).
- Las copias de **superpowers** mantienen su nombre original (no había colisiones).

### n8n-mcp: pasar de modo doc a modo conectado

Hoy n8n-mcp corre en modo solo-documentación. Cuando montes n8n local o en cloud:
```bash
claude mcp remove n8n-mcp --scope user
claude mcp add --scope user n8n-mcp \
  -e MCP_MODE=stdio \
  -e LOG_LEVEL=error \
  -e DISABLE_CONSOLE_OUTPUT=true \
  -e N8N_API_URL=https://tu-n8n.com \
  -e N8N_API_KEY=tu-api-key \
  -- npx -y n8n-mcp
```

### Aviso sobre carga de contexto

Hay 204 skills activas. Si las sesiones se ralentizan, podemos podar borrando symlinks de `~/.claude/skills/` (el plugin clonado se conserva, así que recuperarlas es re-ejecutar `update-skills.sh`).
