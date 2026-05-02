# 02 — Geotecnia, hidrología y excavación

## Geología regional

- Valle de San Nicolás sobre **batolito Antioqueño** (granitoide), cubierto por:
  - Saprolitos (suelos residuales) hasta 15–25 m.
  - Depósitos de **cenizas volcánicas** (Holoceno) 1–8 m superficiales — alta succión, sensibles a saturación.
  - Depósitos de vertiente coluviales y aluviales en bajos.
- Roca sana (cuarzodiorita / granodiorita) bajo 20–35 m típico.
- Fallas regionales: Sistema Cauca-Romeral al W, Falla La Mosca al E.

## Programa de exploración geotécnica obligatorio

Antes de ingeniería de detalle, ejecutar:

| Estudio | Cantidad | Objetivo |
|---|---|---|
| Sondeos SPT/CPTu hasta 40 m | 20 | Perfil estratigráfico y resistencia |
| Sondeos en roca con núcleo (RQD) | 6 | Caracterizar macizo a -25/-30 m |
| Ensayos triaxiales CIU/CD | 30 muestras | Parámetros resistentes |
| Permeabilidad in-situ (Lefranc / Lugeon) | 15 puntos | Diseño bombeo y impermeabilización |
| Geofísica (sísmica refracción + MASW + ERT) | 10 km líneas | Mapa de basamento e infiltración |
| Pozos de monitoreo nivel freático | 10 | NF estacional, hidrogeología |
| Trincheras y SPT en talud | 6 | Estabilidad cortes |
| Ensayo presiométrico Ménard | 12 | Cimentación profunda |

## Hidrogeología

- Acuífero libre en saprolitos + cenizas, recarga directa pluvial.
- **Nivel freático estimado:** entre -3 y -8 m según estación → **bajo la cota de fundación de la caverna a -25 m**.
- Caudal de bombeo en obra estimado: 50–200 L/s (depende permeabilidad, requiere ensayos).
- Riesgo: **abatimiento** del NF puede afectar pozos vecinos y humedales → estudio hidrogeológico CORNARE.

## Diseño de excavación

### Etapas

1. **Talado + descapote** (capa orgánica 0,3–0,5 m).
2. **Muros pantalla perimetrales** (diaphragm walls) 1,2 m espesor, hasta 35 m de profundidad, hormigón H40 con W/C ≤ 0,45.
3. **Anclajes activos** post-tensados temporales (20° inclinación) 3 niveles, 80 t/anclaje.
4. **Bombeo well-point + pozos profundos** durante excavación (12–18 meses).
5. **Excavación por etapas** descendentes con monitorización de deformaciones (inclinómetros, extensómetros).
6. **Sub-base drenante** + **losa de fondo masiva** (h=1,5–2,0 m, contraviento subpresión).
7. **Impermeabilización tipo "white tank"** (hormigón estanco) + **lámina externa PVC-P** doble + drenaje perimetral.

### Volúmenes estimados (huella 25.000 m² × 30 m profundidad neta)

| Concepto | Volumen | Notas |
|---|---|---|
| Excavación bruta | ≈ 800.000 m³ | Edificio principal hasta -30 m |
| Excavación adicional cavernas (cogen, BESS, GIS) | ≈ 150.000 m³ | |
| Disposición autorizada | A definir con CORNARE | Posible reutilización terraplenes |
| Hormigón armado total | ≈ 280.000 m³ | Sótanos + cavernas |
| Acero de refuerzo | ≈ 35.000 t | |

## Hidrología superficial y manejo de aguas

- **Quebradas vecinas:** verificar afluentes Río Negro, identificar rondas hídricas (mín 30 m no construible).
- **Pluvial sitio:** 2.000 mm/año × 84.000 m² = **168.000 m³/año** de agua lluvia gestionable.
- **Captación:** drenaje urbano sostenible (SUDS) + tanques subterráneos 5.000 m³ + tratamiento físico-químico.
- **Reuso:** aporta hasta 50% del agua de proceso (cooling adiabático + sanitarios + riego paisajismo).
- **Descargas:** **cero al alcantarillado** público en clima seco (PTAR + reuso). En extremos solo agua tratada.

## Riesgos geotécnicos críticos

1. **Cenizas volcánicas saturadas:** colapso por carga + lluvia. Mitigación: estabilización con cal/cemento y capa de transición.
2. **NF alto + flujo freático intenso:** posibles "boilings" en fondo de excavación. Mitigación: well-points + recarga periférica + cortinas de inyección.
3. **Sismicidad intermedia + estructura subterránea profunda:** riesgo de licuación en arenas finas saturadas. Mitigación: vibroflotación + columnas de grava donde aplique.
4. **Obstáculos enterrados:** verificar paso de redes existentes (eléctricas, fibra, agua) — gestión con utilities.

## Monitorización en obra y operación

- Inclinómetros perimetrales cada 30 m + extensómetros multi-punto.
- Piezómetros de cuerda vibrante.
- Topografía robotizada (estaciones totales automáticas + GNSS-RTK) con dashboard en NOC.
- En operación: monitorización permanente de **deformaciones, niveles, sísmica** integrada al SCADA del campus.
