# Changelog

## v2.1.1 — Revisión integral (mayo 2026)

Rama: `claude/review-code-integration-IA00x` · PR [#2](https://github.com/kandamochoco-star/CLAUDE-CODE-MAS/pull/2)

### Bugs corregidos

| # | Bug | Severidad |
|---|---|---|
| 1 | `saveData()` dependía del global `event.target` y reventaba al llamarse programáticamente (`clearExp → saveAll → saveData`). Ahora acepta el evento como parámetro y degrada con seguridad. | Alta |
| 2 | `localStorage.setItem('fiic_users', …)` se ejecutaba dos veces seguidas en `saveData`. | Baja |
| 3 | `APP.activeTab` declarado dos veces en el objeto literal. | Baja |
| 4 | Doble asterisco `**` en 9 etiquetas de campos requeridos (literal `*` en el texto + `<span class="req">*</span>` añadido por `fld`/`fldSelect`/`fldMoney`). | UX |
| 5 | `tabC_Unidades` envolvía `<div class="tab-content">` dos veces; `renderConsultorTab` ya añade el wrap. | DOM |
| 6 | `tabD_Comparativo` calculaba `1/(vPac\|\|1)` cuando `valor_pactado=0` y siempre marcaba 🔴. Ahora muestra `—` cuando no hay valor pactado. | Cálculo |
| 7 | `generatePDF` y `exportJSON` leían `APP.data.no_exp`, pero el id real del campo es `no_expediente`. | Funcional |
| 8 | Filtros del panel admin (`_fC`, `_adminSelReg`) se guardaban dentro del expediente (`APP.data`) y se exportaban en el JSON. Movidos a `APP.ui` (no persistido). | Datos |
| 9 | `generatePDF` interpolaba el contenido del meta sin escapar HTML — riesgo de XSS si el expediente venía con valores manipulados. | Seguridad |

### Optimización

- **Logos del FIIC deduplicados**: el HTML embebía dos veces el mismo JPEG en base64 (~330 KB cada uno; verificado por MD5 idéntico al decodificar). El logo del portal ahora se rellena en runtime desde el del encabezado de impresión.
  - Tamaño del archivo: **793 KB → 477 KB** (≈ −40 %).

### Funcionales

- `COMUNAS_MAP` ampliado de 3 a 26 ciudades colombianas (Medellín, Bogotá, Cali, Barranquilla, Bucaramanga, Cartagena, Pereira, Manizales, Ibagué, Villavicencio, Neiva, Cúcuta, Montería, Pasto, Santa Marta, Valledupar, Armenia, Popayán, Tunja, Floridablanca, Soledad, Bello, Itagüí, Envigado, Buenaventura, Palmira).
- Eliminado el campo `localidad` redundante en `tabC_Inmueble` (ya cubierto por los `localidad_comuna`/`localidad_texto`/`localidad_otro` que genera `deptoSelect()`).
- Carga de `localStorage`: ahora también restaura `fiic_regiones`.

### Limpieza de código muerto (~150 líneas)

`PASSWORDS`, `openPwModal`, `goPortal`, `saveUsers`, `addNewUser`, `toggleUser`, `changeUserPw`, `adminAddUser`, `adminChangePw`, `adminClearExp`, `adminExportJSON`, `toggleEstadoPiso`, `showPDFModal` + `closePdfModal` + `executePDF`.

### Tooling

- Nuevo `tools/smoke-test.js`: valida sintaxis del JS, comprueba que cada handler `onclick`/`oninput`/`onchange` referencia una función definida y detecta regresiones conocidas (asteriscos duplicados, persistencia de UI, lectura de campos con id incorrecto).

### Verificación

- `node --check` del JS embebido: sin errores de sintaxis.
- `node tools/smoke-test.js`: todas las aserciones pasan.

## v2.1 — Versión base

Estado inicial recibido. Single-file HTML/CSS/JS (3054 líneas), 818 KB.
