# Sistema híbrido v2 — Cogeneración subterránea LM6000 + ciclo combinado + H₂ + BYD BESS

> **Reemplaza** `04-sistema-hibrido-vision-integral.md`. Incorpora:
> - Restricción Aerocivil cota 2.119 msnm.
> - **Sin chimeneas verticales**: descarga horizontal **al sur**.
> - **Sin PV en cubierta**: PV integrado al grado sobre galerías.
> - **Gas natural por gasoducto TGI** que cruza Rionegro.
> - **5× GE LM6000 (60 MW c/u) + ciclo combinado**.
> - **H₂ blending hasta 20%** (ramp progresivo).
> - **BESS BYD MC Cube T (14,5 MWh por unidad)**.
> - **Recuperación integral del calor residual** para edificio.
> - **Objetivo CAPEX: 500–600 M USD** (sólo equipos, sin obra civil).

## 1. Demanda recalculada

| Carga | MW | Notas |
|---|---|---|
| TI continua (4 halls × 75 MW) | 300 | Líquido dieléctrico + RDHX + CRAH |
| Cooling + UPS + losses (PUE 1,18) | 54 | Free-cooling Rionegro |
| Edificio +1/+2/+3 + amenities | 22 | HVAC, hotel, F&B |
| Logística -1 + cold pharma | 14 | |
| Security House -2 + redundancias | 6 | |
| Auxiliares cogen + electrolizadores | 4 | |
| **Demanda firme total** | **400 MW** | |

## 2. Topología híbrida v2

```
        ┌──────────────────────────────────────────┐
        │     GASODUCTO TGI (cruza Rionegro)       │
        │     Gas natural — alta presión           │
        │     City gate dedicado nuevo (acuerdo)   │
        └──────────────┬───────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────────────────────┐
        │   ERM (Estación de Regulación) +         │
        │   Mezclador H₂ (5–20% blend gradual)     │
        │   Subterráneo, ATEX zona 1               │
        └──┬───────────────────────────────┬───────┘
           │                                │
           ▼                                ▼
    ┌─────────────┐                ┌──────────────────┐
    │ELECTROLIZADOR│               │   COGEN HALL      │
    │ PEM 20 MW    │               │  (caverna -25 m)  │
    │ → H₂ verde   │               │  5 × LM6000 PF    │
    │ → tanques    │               │  + 5 × HRSG       │
    │   700 bar    │               │  + 2 × ST 60 MW   │
    │   buried     │◄──────────────│  Recup. calor:    │
    └─────────────┘     calor      │  150-180 MW térm. │
                       residual     └──────┬────────────┘
                                           │
                                  ┌────────┴────────┐
                                  │  Heat manifold  │
                                  │ HP/MP/LP loops  │
                                  └────────┬────────┘
                                           │
        ┌────────────┬─────────────┬───────┴──────┬─────────────┐
        ▼            ▼             ▼              ▼             ▼
  ┌──────────┐ ┌──────────┐ ┌────────────┐ ┌──────────┐ ┌──────────┐
  │ Edificio │ │ Hotel +3 │ │Adsorption  │ │ Electro- │ │ District │
  │ heating  │ │ ACS+spa  │ │chiller (DC │ │ lyzer    │ │ heat     │
  │ +1 +2 +3 │ │ +piscina │ │complement) │ │preheat   │ │exporta-  │
  │ 8 MW pk  │ │ 5 MW pk  │ │ 30 MW frío │ │ 2 MW     │ │ ble fut. │
  └──────────┘ └──────────┘ └────────────┘ └──────────┘ └──────────┘

  Eléctrico:
        ┌─────────────────────────────────────────────┐
        │      ANILLO MT 34,5 kV (subterráneo dual)    │
        └─┬──────┬───────────────┬───────────┬────────┘
          │      │               │           │
          ▼      ▼               ▼           ▼
     ┌────────┐ ┌──────────┐ ┌─────────┐ ┌──────────┐
     │ COGEN  │ │ BESS BYD │ │ HVO     │ │ PV grado │
     │ 425 MW │ │MC Cube T │ │ N+1     │ │integrado │
     │ CC     │ │21×14,5MWh│ │5×30=150 │ │ 10 MWp   │
     │        │ │= 304 MWh │ │ MW      │ │          │
     └───┬────┘ │= 1 h res.│ │ búnker  │ │          │
         │      └────┬─────┘ └────┬────┘ └────┬─────┘
         │           │            │           │
         │           ▼            │           │
         │      ┌─────────┐       │           │
         │      │ SIN GIS │       │           │
         │      │ 230/34,5│◄──────┴───────────┘
         │      │ 100 MW  │       Conexión EPM/ISA
         │      │ firmes  │       (backup + balance)
         │      └────┬────┘
         │           │
         └───────────┴──────► UPS rotativo 2N+1 ──► Halls -3
```

**Cambio clave vs. v1:**
- La conexión SIN se reduce de 400 MW firmes a **100 MW** (sólo backup + balance) — el grueso lo genera la cogen on-site. Esto **simplifica drásticamente la conexión UPME** (no requiere refuerzos de 400 MW).
- Las **chimeneas son horizontales hacia el sur**, después de máxima recuperación de calor.

## 3. Despacho de la cogeneración (caso base)

| Equipo | N° | MW unidad gas | MW unidad vapor | Subtotal |
|---|---|---|---|---|
| GE LM6000 PF Sprint | 5 | 60 | — | 300 (gas) |
| HRSG (caldera recup.) | 5 | — | — | 165 MW térm. |
| Turbina vapor (común, 2 trenes) | 2 | — | 60 | 120 (vapor) |
| Auxiliares (consumo) | — | — | — | -10 |
| **Total neto eléctrico** | | | | **410 MW** |

Operación nominal: **N+1 redundancia** (4 LM6000 + 1 reserva). Carga normal 75–85% para máxima eficiencia y vida útil.

**Eficiencia:**
- Heat rate ciclo combinado @ 85% load: **≈ 6.300 BTU/kWh net (54% LHV)**.
- Eficiencia con cogeneración térmica útil: **hasta 80% LHV**.

## 4. Ciclo de combustible y H₂

### Año 1 (start-up)
- 100% gas natural (TGI Rionegro).
- ~2.080 MMBtu/h de fuel input @ 85% load (ver `06-balance-termico-cogeneracion.md`).

### Año 2–3 (rampa H₂)
- Electrolizador PEM 20 MW operativo.
- Producción H₂ verde: ~8 t/día (≈ 2,5% del energético del fuel).
- Blend en mezclador previo a las turbinas (LM6000 actuales aceptan hasta 25% H₂ en volumen sin recombustión, certificadas).

### Año 5
- Electrolizador ampliado a 50 MW.
- Producción H₂: ~20 t/día (~6–7% energético).

### Año 7+
- Electrolizador 100 MW (si excedente PV/SIN renovable lo permite).
- **20% H₂ blend objetivo** — para llegar aquí honestamente, complementar con compra externa de H₂ verde (~$3/kg target 2030).

> **Realidad:** producir el 20% del fuel como H₂ verde on-site requiere ~600 MW continuos de electrólisis (no factibles en el campus). El target 20% es razonable como **mezcla blue+green H₂ comprada**, no exclusivamente verde on-site.

## 5. BESS BYD — dimensionamiento

**Producto:** BYD MC Cube T — gabinete contenedorizado, 14,5 MWh por unidad, batería LFP refrigeración líquida.

**Cuántos hacen falta:**

| Función | Tiempo objetivo | MWh requeridos |
|---|---|---|
| Transitorio falla red → arranque LM6000 caliente | 30 s | 4 MWh |
| Pico de carga (peak shaving + arbitraje) | 30 min | 150 MWh |
| Black-start completo del campus | 2 h | 600 MWh |
| **Sizing práctico (compromiso costo/función)** | **1 h @ 300 MW** | **300 MWh** |

**Configuración elegida:** **21 unidades BYD MC Cube T = 304,5 MWh / 300 MW**.

- 1 hora de autonomía a plena carga TI (suficiente porque cogen es baseload y siempre activo).
- Inversores grid-forming (GFM) con capacidad de operación isla.
- Bóvedas subterráneas a -10 m, compartimentadas F240, supresión water mist + N₂.

**¿Por qué 1 hora y no 4 h como en v1?**
- v1 asumía red como fuente principal y BESS como respaldo masivo (necesitaba 4 h).
- v2: cogen on-site nunca cae completa (5 unidades, N+1, además gas TGI muy fiable). BESS solo cubre transitorios + balance horario. **1 h es suficiente y reduce CAPEX ~$240 M.**
- Reserva profunda la da la HVO (168 h) si se pierde gas y red simultáneamente.

## 6. HVO de respaldo

- **5 generadores × 30 MW = 150 MW** (N+1 sobre 100 MW de demanda mínima crítica reducida en emergencia).
- Mucho menos que los 450 MW de v1, porque ya no son la "única salvación": cogen + red son redundantes entre sí.
- Tanques HVO: 2 × 500 m³ = **1.000 m³ → 100 h** a 80% load crítico.
- En operación normal: solo arranque mensual de prueba, sin emisiones reales.

## 7. PV integrado al grado (10 MWp)

> Eliminado el techo del edificio como soporte de PV. Reubicado al **grado del lote**, sobre cubiertas verdes y técnicas de las galerías subterráneas.

| Parámetro | Valor |
|---|---|
| Área disponible | ≈ 50.000 m² (84.000 lote – 25.200 huella – 8.800 paisajismo/seguridad/accesos) |
| Densidad efectiva (orientado al N, mod. bifacial 600 Wp) | 200 Wp/m² útil |
| **Potencia instalada** | **≈ 10 MWp** |
| Generación anual | ≈ 17 GWh/año |
| Inversores | Subterráneos en cuartos enterrados con ventilación natural |
| Cubierta del consumo | ~0,5% del DC, pero 100% de la iluminación exterior + parte de auxiliares |
| Visibilidad | Baja: paneles a 30–50 cm sobre tierra, integrados a paisaje (modelo "solar carpet") |

## 8. Chimeneas hacia el sur (sin emisión vertical)

### Diseño

```
                              VIENTO DOMINANTE →
   Edificio principal
   ┌──────────┐
   │          │
   │   Cogen  │
   │   -25 m  │              ── Galerías técnicas ──
   │          │     ┌──────────────────────────┐
   │   HRSG   │     │  Ducto de exhausto        │
   │          │     │  enterrado descendente    │
   │  ~150°C  │────►│  → recuperador adicional  │────► Sur
   │  flue    │     │  → ~80°C residual         │      ┌─────────┐
   │  gas     │     │  → sopladores (≥20 m/s)   │      │ Pantalla│
   │          │     └──────────────────────────┘      │ louvers │
   └──────────┘                                        │ orient. │
                                                       │   sur   │
                                          Talud verde  │ 1117msnm│
                                          paisajístico └─────────┘
                                                       Desc. horiz.
```

### Justificación
- Los gases de escape, tras el HRSG (recuperación) y un **economizador adicional**, salen a ~80–100 °C — densidad similar al aire ambiente, sin penacho boyante visible.
- Velocidad de salida 20–25 m/s asegura dispersión rápida sin acumulación local.
- Salida orientada al **sur** (lejos del edificio, JMC, hotel +3) y hacia área no construida.
- **CFD obligatorio** (Fluent / OpenFOAM) para verificar:
  - Concentraciones NOx, CO, SO₂ a 100 m del punto de descarga < límites Resolución 909/2008.
  - No reingreso al edificio (HVAC).
  - Sin afectación a aproximación JMC (mezcla a < 5 m altura aerodinámica).
- Tratamiento: **SCR-NOx + CO catalyst + filtro PM** antes del ducto de descarga.
- Monitoreo continuo CEMS (Continuous Emissions Monitoring) reportado a CORNARE.

### Ventajas
- **Cero impacto visual** — no se ven chimeneas.
- **Compatible con cota máxima 2.119 msnm** (la descarga sale a ~2.094–2.097 msnm, muy bajo).
- **Mejor recuperación de calor** porque el ducto largo permite economizadores adicionales.

## 9. Recuperación de calor residual (resumen)

Detalle completo en `docs/01-energia/06-balance-termico-cogeneracion.md`. Resumen:

| Fuente | MW térm. | Calidad | Uso |
|---|---|---|---|
| Exhaust LM6000 → HRSG | 165 | 530 °C / vapor 80 bar | Turbina vapor (120 MW eléctrico) |
| Condensador turbina vapor | 110 | 50–70 °C | **Heating edificio + ACS hotel + spa** |
| Camisas + intercoolers turbina | 25 | 80–95 °C | Adsorption chiller / pre-heat electrolizador |
| Calor residual servidores DC (LDF) | 240 | 50–65 °C | **Heating edificio + ACS + adsorption** |
| Calor de cubo BESS (perdidas) | 5 | 35 °C | Disipación (no aprovechable) |
| **Total recuperable** | **~415** | | |
| Demanda térmica edificio | **15-25** | | Cubre 100% con sobra masiva |
| Excedente para venta / district heat | ~390 | | Reservado para futuro distrito |

**Implicación:** el campus genera **20–25× más calor que el que consume**. Hay oportunidad real de **vender calor** a desarrollos vecinos (parque industrial El Tablazo, hoteles del sector aeropuerto) en una segunda fase.

## 10. CAPEX del sistema híbrido v2 (sólo equipos)

| Subsistema | Detalle | CAPEX (M USD) |
|---|---|---|
| **5× GE LM6000 PF Sprint 60 MW H₂-ready** | $750/kW × 300 MW | **225** |
| **2× turbinas vapor + HRSG + condensadores** | $400/kW × 120 MW | **48** |
| **5× generadores de cola HRSG + balance of plant** | aux, bombas, tanques | **22** |
| Conexión gasoducto TGI + ERM + city gate dedicado | obra de conexión | **8** |
| Mezclador H₂ + sistema control combustible | ATEX zona 1 | **6** |
| Electrolizador PEM 20 MW (Fase 1) | $1,5M/MW | **30** |
| Tanques H₂ 700 bar enterrados (5 t inicial) | tipo IV, 200 m³ buried | **15** |
| BESS 21× BYD MC Cube T (304,5 MWh) | LFP $250/kWh + integración | **85** |
| Inversores GFM + PCS para BESS | 300 MW | **18** |
| HVO N+1 — 5×30 MW + tanques 1.000 m³ | $700/kW + obra | **38** |
| Subestación GIS 230/34,5 kV (100 MW SIN) | enterrada, simplificada | **22** |
| Anillo MT 34,5 kV + transformadores secos | dual ring subterráneo | **30** |
| UPS rotativo + flywheels integrados (2N+1) | Hitec/Piller, 350 MVA | **45** |
| PV 10 MWp grado + estructuras low-profile | $750/kWp | **8** |
| BESS dedicado PV (8 MWh) | aplanamiento | **2** |
| Heat manifold + intercambiadores + bombeo distrital | recuperación de calor | **15** |
| SCADA + protección + ciber-OT + control común | IEC 62443 SL3 | **18** |
| Comisionamiento + integración + arranque | EPC final | **15** |
| **SUBTOTAL EQUIPOS Y SISTEMAS** | | **650** |
| **Optimización por compra integrada (paquete EPC)** | -8% | **-52** |
| **CAPEX OBJETIVO ENERGÍA (sin obra civil)** | | **≈ 600 M USD** |

> Encaja en el rango **500–600 M USD** que indicaste. Recortes posibles si se requiere bajar más:
> - Diferir electrolizador a Fase 2: -30 M.
> - Reducir BESS a 200 MWh (40 min): -20 M.
> - Eliminar HVO inicial (solo activar en Fase 2 cuando crezca DC): -38 M.
> - **Mínimo viable Fase 1: ≈ 510 M USD**.

## 11. Por qué este sistema es viable y eficiente

1. **Gas TGI ya pasa por Rionegro** → conexión simple y barata; OPEX combustible competitivo.
2. **Eficiencia ciclo combinado 54% LHV** → bajo OPEX por kWh.
3. **Sólo 100 MW de SIN** → trámite UPME sencillo y rápido.
4. **Calor residual cubre 100% del edificio + ACS + spa** → ahorro adicional ~3-5 MW eléctricos en bombas de calor.
5. **CAPEX ajustado a 600 M USD** sin sacrificar Tier IV ni redundancia.
6. **H₂ ramp progresivo** → ruta a baja huella de carbono sin sobrecargar el día 1.
7. **Sin chimeneas verticales + PV en grado** → cumple servidumbre Aerocivil y mantiene el campus visualmente limpio.
8. **Black-out tolerance:** cogen 5 unidades + BESS 1 h + HVO 100 h + SIN 100 MW = redundancia múltiple.
