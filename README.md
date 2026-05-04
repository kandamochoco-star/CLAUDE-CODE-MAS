# Proyecto El Tablazo — Data Center + Autogeneración Subterránea

Plan maestro técnico-conceptual para un complejo de **Data Center grado militar de 300 MW** con sistema de **autogeneración energética subterránea** y edificio mixto de 6 plantas (-3 a +3) en Vía El Tablazo, Rionegro, Antioquia (Colombia).

- **Ubicación:** Vía El Tablazo (JMC ↔ Rionegro), 2.092–2.100 msnm
- **Lote total:** 84.000 m² | **Construible disponible:** 20.000 m²
- **Programa por planta:** 25.000 m² (huella + sótanos extendidos bajo el lote)
- **Capacidad TI objetivo:** 300 MW IT load continuos (PUE ≤ 1.20)

## Estructura de la documentación

| Carpeta | Contenido |
|---|---|
| [`docs/00-master/`](docs/00-master/) | Resumen ejecutivo, premisas, matriz de riesgos |
| [`docs/01-energia/`](docs/01-energia/) | Matriz energética, autogeneración subterránea, respaldos, BESS |
| [`docs/02-sitio/`](docs/02-sitio/) | Análisis de sitio, geotecnia, servidumbre aeronáutica, ambiental |
| [`docs/03-arquitectura/`](docs/03-arquitectura/) | Arquitectura, estructura, MEP, cerramientos grado militar |
| [`docs/04-pisos/`](docs/04-pisos/) | Diseño detallado planta por planta (-3 a +3 y techo) |
| [`docs/05-seguridad/`](docs/05-seguridad/) | Security House (-2): SOC, NOC, control de accesos, perímetro |
| [`docs/06-regulacion/`](docs/06-regulacion/) | POT Rionegro, ANLA, UPME/CREG, Aerocivil, ITAR/grado militar |
| [`docs/07-capex-cronograma/`](docs/07-capex-cronograma/) | Estimación CAPEX/OPEX, fases, cronograma |

## Advertencias críticas

1. **Servidumbre aeronáutica JMC (José María Córdova):** el lote está bajo conos de aproximación; la altura total del edificio (≈ +3 plantas + cubierta técnica) requiere concepto técnico de **Aerocivil** y posiblemente afectará chimeneas, torres de enfriamiento y antenas.
2. **Matriz "100% limpia subterránea baseload":** hoy en Colombia, la única ruta técnicamente realista a 300 MW limpios 24/7 sin SMR es **híbrida** (red EPM + PPA renovable + cogeneración H₂/biogás + BESS masivo). Detalle y trade-offs en `docs/01-energia/`.
3. **Licenciamiento:** proyecto sujeto a **licencia ambiental ANLA** (>100 MW de generación), conexión al SIN vía **UPME** y POT Rionegro (uso del suelo, retiros a quebradas, rondas hídricas).
4. **Grado militar:** se adopta TIA-942 Rated-4 + Uptime Tier IV + ISO/IEC 27001 + lineamientos NIST 800-53 high + criterios físicos UFC 4-010-01 (DoD anti-terrorism) como referencia. No implica certificación militar formal sin acuerdo gubernamental.

## Estado del proyecto

Fase **conceptual / prefactibilidad**. Las cifras de CAPEX, MW y áreas son estimaciones de orden de magnitud (clase 5 AACE) para alimentar estudios de prefactibilidad y due diligence inicial.

## ⭐ Documentos autoritativos finales (v5)

Tras varias iteraciones con el cliente, los documentos vigentes son:

- **[`docs/00-master/05-glosario.md`](docs/00-master/05-glosario.md)** — glosario de terminología
- **[`docs/01-energia/08-sistema-energetico-simplificado.md`](docs/01-energia/08-sistema-energetico-simplificado.md)** — sistema energético lean
- **[`docs/01-energia/09-capex-equipo-importacion-puesta-marcha.md`](docs/01-energia/09-capex-equipo-importacion-puesta-marcha.md)** — CAPEX eléctrico (equipo + import + commissioning)
- **[`docs/01-energia/10-pv-cubierta-3-y-grado.md`](docs/01-energia/10-pv-cubierta-3-y-grado.md)** — sistema fotovoltaico híbrido (cubierta +3 + grado)
- **[`docs/04-pisos/00-overview-pisos-v2.md`](docs/04-pisos/00-overview-pisos-v2.md)** — programa Edif #1 (6 pisos)
- **[`docs/04-pisos/09-edificio-2-bunker-sur.md`](docs/04-pisos/09-edificio-2-bunker-sur.md)** — Edificio #2 búnker sur
- **[`docs/06-regulacion/02-zona-franca-y-deducciones.md`](docs/06-regulacion/02-zona-franca-y-deducciones.md)** — ⭐ ZFPE + FNCER + autogeneración + CTeI + carbono + municipales + bonos verdes
- **[`docs/07-capex-cronograma/06-precios-colombia-real-final.md`](docs/07-capex-cronograma/06-precios-colombia-real-final.md)** — precios construcción Colombia reales
- **[`docs/07-capex-cronograma/07-modelo-financiero-con-beneficios-fiscales.md`](docs/07-capex-cronograma/07-modelo-financiero-con-beneficios-fiscales.md)** — ⭐ modelo financiero con estructura fiscal completa

Los documentos previos quedan como referencia histórica del proceso de iteración.
