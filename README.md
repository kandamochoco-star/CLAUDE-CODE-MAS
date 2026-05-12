# FIIC — Sistema de Gestión Inmobiliaria

Aplicación web de un solo archivo (`FIIC_Sistema_v2_1.html`) para el flujo de evaluación inmobiliaria de FIIC S.A.: Consultor → Evaluadores → Decisor, con panel de Administración.

Todo corre en el navegador. No requiere servidor; el estado se persiste en `localStorage`.

## Modos de uso

| Modo | Acceso | Función |
|---|---|---|
| Consultor | usuario + contraseña | Registro completo del inmueble (12 pestañas: operación, ubicación, unidades, áreas, valores, legal, propietarios, física, POT, rentas, media, observaciones). |
| Evaluador 1 / 2 | usuario + contraseña | Análisis técnico independiente. E2 no ve el concepto de E1 hasta emitir el suyo. |
| Decisor | usuario + contraseña | Panel ejecutivo: dashboard, modelo de préstamo (PMT + amortización), proyección de inversión, comparativo de valores, viabilidad urbanística, dictamen final. |
| Administración | contraseña de admin | Alta/baja de usuarios por rol y región, gestión de regiones/ciudades, configuración. |

## Credenciales por defecto

> Cambia estas credenciales en producción desde el panel de **Administración**.

| Rol | Usuario | Contraseña |
|---|---|---|
| Admin | `—` | `ADMIN2024` |
| Consultor | `consultor` | `CONSULTOR2024` |
| Evaluador 1 | `evaluador1` | `EVAL1-2024` |
| Evaluador 2 | `evaluador2` | `EVAL2-2024` |
| Decisor | `decisor` | `DECISION2024` |

## Cómo abrirlo

Abre `FIIC_Sistema_v2_1.html` directamente en cualquier navegador moderno (Chrome / Edge / Firefox / Safari). No hay build; no hay dependencias externas (excepto Google Fonts).

## Almacenamiento

Todo el estado se guarda en `localStorage` del navegador:

| Clave | Contenido |
|---|---|
| `gi_data` | Expediente activo: `data`, `units`, `predios`, referencias de media, timestamp. |
| `fiic_users` | Lista de usuarios. |
| `fiic_admin_pw` | Contraseña del administrador. |
| `fiic_regiones` | Regiones / ciudades configuradas por el admin. |
| `fiic_subadmins` | Sub-administradores (extensión futura). |

> Las imágenes/videos cargados desde la pestaña **Media** sólo viven en memoria de la sesión activa (no se persisten en `localStorage` por límites de tamaño).

## Smoke-test

```bash
node tools/smoke-test.js
```

Valida sintaxis del JS embebido, handlers inline (`onclick`/`oninput`/`onchange`) que apunten a funciones existentes, ausencia de regresiones conocidas y consistencia básica del HTML.

## Cambios

Ver [CHANGELOG.md](./CHANGELOG.md).
