# 01 — Matriz energética: arquitectura de generación y respaldo

## Demanda

| Carga | MW | Notas |
|---|---|---|
| TI continua | 300 | Carga útil computación |
| Cooling + UPS losses (PUE 1,2) | 60 | Free-cooling Rionegro |
| Edificio (+1 a +3, -1 a -2, sec.) | 25 | HVAC, iluminación, hotel |
| Cargas auxiliares y logística -1 | 15 | Cold storage farma, robots |
| **Demanda firme total** | **400 MW** | |
| Margen N+1 generación | +50 MW | |
| **Generación instalada subterránea** | **450 MW** | |

## Topología

```
                ┌─────────────────────────────────────────┐
                │   SIN 230 kV (EPM/ISA)                  │
                │   Punto conexión UPME — Subestación     │
                │   subterránea 230/34,5 kV "GIS"         │
                └──────────────┬──────────────────────────┘
                               │ 2 × líneas redundantes
                ┌──────────────┴──────────────┐
                │   Anillo MT 34,5 kV         │
                │   (subterráneo, dual ring)  │
                └─┬──────┬──────┬──────┬──────┘
                  │      │      │      │
              ┌───┴──┐ ┌─┴───┐ ┌┴────┐ ┌┴────┐
              │COGEN │ │BESS │ │ HVO │ │ PV  │
              │ H₂   │ │1.2  │ │ N+2 │ │5,5  │
              │200MW │ │GWh  │ │450MW│ │ MWp │
              └───┬──┘ └─┬───┘ └┬────┘ └┬────┘
                  │      │      │       │
                  └──────┴──┬───┴───────┘
                            │
                     ┌──────┴──────┐
                     │  UPS 2N+1   │
                     │  rotativo + │
                     │  flywheels  │
                     └──────┬──────┘
                            │
                     ┌──────┴──────┐
                     │  Data halls │
                     │  -3  4×75MW │
                     └─────────────┘
```

## Justificación de cada componente

### A. Conexión SIN (primaria)
- **400 MW firmes** vía 2 líneas 230 kV redundantes desde subestaciones distintas (Guayabal y Rionegro/Llanogrande).
- Subestación GIS (Gas Insulated Switchgear) **enterrada** en bóveda a -15 m, 1.500 m². Footprint 60% menor que AIS y resistente a ceniza/blast.
- Trámite **UPME** (Resolución 0703/2018) — capacidad de transporte STR Oriente puede requerir refuerzos. Documentar en `docs/06-regulacion/04-upme-creg.md`.

### B. PPA renovable dedicado
- Contratos PPA físicos 24/7 con generadores eólicos (La Guajira) y solares (Cesar/Atlántico) por **300 MW promedio**.
- Trazabilidad horaria via certificados I-REC + blockchain (proyecto Granular Certificates de EnergyTag).
- Año 1: ~70% match horario; objetivo año 5: **24/7 carbon-free energy** estilo Google.

### C. Cogeneración subterránea — turbinas H₂/biogás
- **2 × turbinas aeroderivadas** (LM6000 o SGT-A45 modificadas) de 100 MW cada una.
- Combustible inicial: **mezcla 30% H₂ verde + 70% biogás** (de relleno La Pradera u otros).
- Ruta a **100% H₂ verde** producido on-site con electrolizadores PEM alimentados por excedentes PV+PPA.
- Emplazamiento: **caverna excavada a -25 m**, 80 × 40 × 15 m, accesos por pozos verticales.
- **Penacho:** chimeneas de 25 m sobre rasante (limitadas por Aerocivil). Si no se autoriza, alternativa: **fuel cells SOFC** (200 MW agregado, sin chimenea, eficiencia 60%).
- **Recuperación de calor:** ciclo combinado con vapor → climatización +1/+3, hot water spa +3, snow-melt vialidad.

> **Alternativa A si Aerocivil rechaza chimeneas:** sustituir turbinas por **bancos de fuel cells de óxido sólido (SOFC)** Bloom Energy / Ceres Power, modulares 1–10 MW, sin emisiones locales y silenciosos. CAPEX mayor (~2x), pero compatible con servidumbre aeronáutica.

> **Alternativa B (largo plazo):** reservar **bóveda de SMR** (NuScale 77 MWe, BWRX-300, etc.) construida pero no equipada. Activar cuando Colombia adopte marco regulatorio nuclear.

### D. BESS — almacenamiento masivo
- **1.200 MWh / 300 MW** baterías LFP (LiFePO₄) tipo Tesla Megapack 2 XL o CATL EnerC.
- 4 horas autonomía a plena carga TI.
- **Ubicación: bóvedas subterráneas compartimentadas** a -10 m, en celdas de hormigón resistentes al fuego F240 con supresión por agua nebulizada + N₂ inerte (riesgo thermal runaway).
- Funciones: peak shaving, black-start, arbitraje energía, soporte de frecuencia (servicios complementarios CREG 080).
- Reposición de celdas cada 12–15 años.

### E. Diesel HVO renovable (respaldo crítico)
- **15 generadores de 30 MW** (= 450 MW total, N+2 sobre 400 MW).
- Combustible **HVO100** (Hydrotreated Vegetable Oil) — reducción 90% CO₂ vs diesel fósil.
- **Búnker subterráneo a -20 m**, compartimentado en 5 salas (3 generadores c/u), refrigerados por radiadores remotos en cubierta o intercambio geotérmico.
- Tanques: **6 × 500 m³ = 3.000 m³ HVO** → 168 horas (7 días) a plena carga.
- Escapes: chimeneas dedicadas con SCR (selective catalytic reduction) para NOx + filtros de partículas.

### F. Volantes de inercia (flywheels)
- **20 unidades de 3 MW × 30 s** (Beacon Power / Amber Kinetics).
- Cubren transitorio entre falla red y arranque generadores HVO (típicamente 8–12 s).
- Sin químicos, vida útil 20 años, mantenimiento mínimo.

### G. Fotovoltaica cubierta +3 (25.000 m²)
- Detalle en `docs/01-energia/03-fotovoltaica-cubierta.md`.
- 5,5 MWp, 9 GWh/año.
- Conectado al anillo MT 34,5 kV vía inversores centrales.

### H. UPS y distribución crítica
- **UPS rotativo dinámico** (Hitec / Piller) en paralelo 2N+1, 30 × 12 MW.
- Tiempo de transferencia: **0 ms** (la inercia mecánica + supercondensadores cubren los 8 s al motor diesel).
- Distribución: 2 caminos A/B totalmente físicamente separados (galerías técnicas distintas), tableros 480V con barras tipo Powerbar.

## Eficiencia global

| Indicador | Valor |
|---|---|
| Heat rate cogeneración H₂/biogás (CCGT) | ≈ 6.300 BTU/kWh (54% LHV) |
| Eficiencia con cogeneración térmica | hasta 80% (ERE > 0,2) |
| Eficiencia BESS round-trip | 92% |
| Eficiencia electrolizador → fuel cell (loop H₂) | ≈ 35% (penalización a aceptar) |
| PUE total esperado | 1,15–1,20 |

## Resiliencia: matriz de fallos

| Evento | Detección | Respuesta | Tiempo |
|---|---|---|---|
| Falla 1 línea SIN | 50 ms relé diferencial | Conmuta a línea 2 | 0 ms al TI |
| Falla 2 líneas SIN | <100 ms | BESS + cogen asume | 0 ms al TI |
| Falla cogen + SIN | <500 ms | BESS 4 h + arranque HVO | 0 ms (fly+BESS), HVO en 8 s |
| Falla parcial BESS (>20% celdas) | sensor por celda | Re-balance + reduce no-críticos | 0 ms |
| Sismo de diseño | acelerómetros | Apaga cogen, BESS+HVO+aislamiento | 5 s |
| Apagón nacional > 72 h | manual + auto | HVO 168 h + cogen H₂ in-situ | continuo |

## Trazabilidad de carbono

- Año 1: ~150 kt CO₂e (mezcla SIN + biogás + arranques HVO).
- Año 5: < 50 kt (PPA 24/7, H₂ verde 60%).
- Año 10: **net-zero operacional** + offsets de captura DAC/biochar para residual.
