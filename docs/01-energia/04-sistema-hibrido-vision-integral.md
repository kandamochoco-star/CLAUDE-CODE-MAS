# Sistema híbrido de energía — Visión integral

> **Update tras concepto Aerocivil:** altura máxima permitida cota **2120 msnm**.
> Rasante lote 2092–2100 msnm → **disponemos de 20–28 m sobre rasante**.
> **Chimeneas de cogeneración con turbinas H₂/biogás son viables** (con SCR + DLE H₂-ready + diseño aeroacústico). Se mantiene el caso base (no se sustituye por SOFC).

## 1. Filosofía: 4 capas concéntricas

El sistema se diseña como **4 capas en cascada**, cada una cubriendo un rango de tiempo y rol distintos. La carga TI nunca ve un transitorio porque las capas se solapan.

```
TIEMPO →    0 ms ─── 30 s ─── 8 s ─── 4 h ─── 168 h ─── continuo
            ┌──────────┐
Capa 1      │ FLYWHEEL │ 60 MW × 30 s        Inercia mecánica
            └──────────┘
            ┌──────────────────────┐
Capa 2      │       BESS LFP       │ 300 MW × 4 h (1.200 MWh)
            └──────────────────────┘
                 ┌─────────────────────────────────┐
Capa 3           │      HVO RENOVABLE N+2          │ 450 MW × 168 h
                 └─────────────────────────────────┘
                              ┌──────────────────────────────┐
Capa 4                        │  COGEN H₂/BIOGÁS + SIN + PV  │ Continuo
                              └──────────────────────────────┘
```

Cada capa **arranca antes de que la anterior se agote**. La carga TI solo "ve" la suma.

---

## 2. Diagrama unifilar simplificado

```
                          ┌─ SIN ISA/EPM 230 kV ─┐
                          │  Línea A   │   Línea B │   ← PPA 24/7 renovable
                          └─────┬──────┴────┬─────┘     contractual a través SIN
                                │           │
                    ┌───────────┴───────────┴───────────┐
                    │  SUBESTACIÓN GIS 230/34,5 kV      │
                    │  Enterrada -15 m · 2N             │
                    │  Capacidad: 400 MW firmes         │
                    └─────────────────┬─────────────────┘
                                      │ 34,5 kV
              ┌──────────┬─────────────┼─────────────┬──────────┐
              │          │             │             │          │
              ▼          ▼             ▼             ▼          ▼
        ┌─────────┐ ┌─────────┐  ┌──────────┐  ┌─────────┐ ┌─────────┐
        │ COGEN   │ │  BESS   │  │ ANILLO   │  │   HVO   │ │   PV    │
        │ H₂/BIO  │ │ 1,2 GWh │  │  MT 34,5 │  │ 450 MW  │ │ 5,5 MWp │
        │ 200 MW  │ │ 300 MW  │  │ DUAL RING│  │ N+2     │ │ techo   │
        │ caverna │ │ bóvedas │  │ subterr. │  │ búnker  │ │ +3      │
        │ -25 m   │ │ -10 m   │  │          │  │ -20 m   │ │         │
        └────┬────┘ └────┬────┘  └────┬─────┘  └────┬────┘ └────┬────┘
             │           │            │             │           │
             └───────────┴────┬───────┴─────────────┴───────────┘
                              │
                    ┌─────────┴──────────┐
                    │  Trafos secos      │
                    │  34,5 kV / 415 V   │
                    └─────────┬──────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
        ┌──────────┐    ┌──────────┐    ┌──────────┐
        │  UPS A   │    │  UPS B   │    │ UPS RES. │
        │ rotativo │    │ rotativo │    │ flywheel │
        │ + flywh. │    │ + flywh. │    │ N+1      │
        │  2N      │    │  2N      │    │          │
        └────┬─────┘    └────┬─────┘    └────┬─────┘
             │ Bus A         │ Bus B         │
             ▼               ▼               ▼
        ┌─────────────────────────────────────────┐
        │        CARGA TI 300 MW (4 halls)        │
        │   Cada rack: PSU dual A/B (2N)          │
        └─────────────────────────────────────────┘
```

---

## 3. Capas — detalle técnico

### Capa 1 — Flywheels (0–30 s)

| Parámetro | Valor |
|---|---|
| Tecnología | Flywheels de fibra de carbono en vacío magnético |
| Vendor candidato | Beacon Power 25-MW gen 2 / Amber Kinetics M32 / Calnetix VYCON |
| Configuración | 20 unidades × 3 MW |
| Energía total útil | ≈ 0,5 MWh (≥ 30 s @ 60 MW) |
| Round-trip eficiencia | 88-92% |
| Tiempo de respuesta | < 4 ms |
| Vida útil | 20 años, sin degradación cíclica |
| Ubicación | Sala UPS en planta -3 (junto a cada hall) |
| Función crítica | Cubrir el "valle" entre detección de falla red y arranque diesel HVO (8-12 s típico), sin tocar BESS para preservar ciclos |

### Capa 2 — BESS LFP (30 s – 4 h)

| Parámetro | Valor |
|---|---|
| Química | LiFePO₄ (LFP), no NMC — más segura, sin cobalto |
| Vendor candidato | Tesla Megapack 2 XL / CATL EnerC / Sungrow PowerTitan |
| Capacidad | **1.200 MWh / 300 MW** |
| Autonomía a plena carga | **4 horas** continuas |
| Round-trip eficiencia | 92% AC-AC (incluye PCS) |
| Ciclos esperados | > 8.000 al 80% DoD (≈ 15-20 años a 1 ciclo/día) |
| Bóvedas | 6 bóvedas × 200 MWh, F240, separación 30 m |
| Supresión incendio | Agua nebulizada + aerosol K + N₂ inerte (NFPA 855) |
| Aislamiento | Cada celda con monitoreo BMS, módulos hot-swap |
| Conectividad | Inversores grid-forming (modo isla autónomo) + grid-following |
| Servicios extra | Peak-shaving, arbitraje, AGC, soporte de frecuencia, black-start |

**Por qué LFP y no NMC/sodio/flujo:**
- LFP: madura, segura, ciclable, costo competitivo. **Elegida.**
- NMC: más densa, pero riesgo de thermal runaway mayor — descartada en bóvedas.
- Sodio (Na-ion): emergente, aún cara y baja densidad — re-evaluar año 5.
- Flujo (vanadio): excelente para 8-12 h, footprint 5x mayor — descartada por espacio.

### Capa 3 — HVO renovable (8 s – 168 h)

| Parámetro | Valor |
|---|---|
| Combustible | **HVO100** (Hydrotreated Vegetable Oil, Neste / Eni / TotalEnergies) |
| Reducción CO₂ vs diésel fósil | 90% |
| Generadores | 15 × 30 MW = 450 MW (N+2 sobre 400 MW carga) |
| Vendor candidato | MTU Series 4000, Cummins QSK95, Caterpillar 3516E |
| Tiempo de arranque a plena carga | 8-12 s (con preheat permanente) |
| Tanques | 6 × 500 m³ subterráneos (3.000 m³ total) |
| Autonomía a plena carga | **168 h (7 días)** |
| Reposición logística | Camiones cisterna 30 m³ por entrada norte K12 |
| Tratamiento de gases | SCR-NOx + filtro partículas DPF + monitoreo CEMS |
| Chimeneas | 5 × Ø 1,8 m, 25 m sobre rasante (cota 2117-2125 msnm — verificar dentro de 2120) |

> **Nota Aerocivil:** las chimeneas a 25 m sobre rasante alcanzan 2117-2125 msnm en el punto más alto del lote. Hay puntos donde excederían 2120. **Solución:** ubicar chimeneas en zona oeste del lote (rasante 2092 m → tope 2117 m, dentro de límite). Confirmado en topografía y verificación CFD del penacho a velocidad ≤ 4,3 m/s.

### Capa 4 — Generación continua (24/7)

#### 4.1 Cogen H₂/biogás (200 MW)
| Parámetro | Valor |
|---|---|
| Tecnología | Ciclo combinado H₂-ready |
| Vendor candidato | GE LM6000PF Sprint H₂ / Siemens SGT-A45 H₂ / MHI H-25 |
| Configuración | 2 × (Turbina 50 MW + HRSG + Turbina vapor 50 MW) = 2 × 100 MW |
| Eficiencia eléctrica CCGT | 54% LHV |
| Eficiencia con cogen térmica | hasta 80% (recuperación 60 MW térmicos) |
| Mezcla combustible año 1 | 30% H₂ verde + 70% biogás |
| Mezcla combustible año 5 | 100% H₂ verde (objetivo) |
| Ubicación | Caverna -25 m, sobrepresión interna diseñada 50 kPa |
| Tiempo de arranque (hot start) | 10-15 min (no usado para emergencia, sí baseload) |

#### 4.2 Conexión SIN (400 MW firmes)
- 2 líneas 230 kV redundantes desde subestaciones distintas (Guayabal y Llanogrande).
- PPA físico 24/7 con renovables (eólica La Guajira + solar Cesar).
- **Match horario año 1: 70%; año 5: 95%; año 10: ≥ 99% (24/7 carbon-free).**

#### 4.3 PV cubierta (5,5 MWp)
- 9 GWh/año, complemento diurno.
- BESS dedicado 22 MWh para aplanar.

#### 4.4 Electrolizadores PEM (producción H₂ on-site)
| Parámetro | Valor |
|---|---|
| Capacidad año 1 | 50 MW |
| Capacidad año 5 | 100 MW |
| Producción H₂ | ≈ 18-36 t/día año 5 |
| Eficiencia | 60% LHV (PEM moderno) |
| Vendor candidato | Cummins HyLYZER / Plug Power / Siemens Silyzer / Nel |
| Almacenamiento | Tanques tipo IV fibra de carbono, 700 bar, enterrados, 50 t = 1.650 MWh-eq |
| Energía de alimentación | Excedente PV + horarios valle PPA + sobrante cogen vapor |

---

## 4. Despacho típico — día sin incidentes

Carga total demandada (TI 300 MW + PUE 1,2 + edificio + logística) = **400 MW promedio**.

```
MW │
500│
   │                                                               
450│ ─────────── HVO (en standby, no genera) ─────────────────
   │                                                               
400│ ╔══════════════════════════════════════════════════════════╗ ← Demanda
   │ ║                                                          ║   400 MW
350│ ║                                                          ║
   │ ║                                                          ║
300│ ║                                                          ║
   │ ║   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ║
250│ ║   ░░░░░░░░ COGEN H₂/biogás 200 MW (baseload) ░░░░░░░    ║
   │ ║   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ║
200│ ║   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ║
   │ ║                                                          ║
150│ ║   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ║
   │ ║   ▓▓▓▓▓▓▓ SIN + PPA 24/7 (≈ 195 MW promedio) ▓▓▓▓▓▓▓    ║
100│ ║   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ║
   │ ║                                                          ║
 50│ ║                          ▒▒▒▒▒▒▒▒▒▒                      ║
   │ ║                       ▒▒ PV 5 MW ▒▒                      ║   
  0│ ╚══════════════════════════════════════════════════════════╝
   └─0───3───6───9──12──15──18──21──24─── hora del día
                            
   BESS: ciclando entre carga (horarios valle SIN) y descarga (peak),
         sin tocar para emergencia.
```

**Distribución de la energía (despacho normal, día típico):**

| Fuente | MW promedio | % |
|---|---|---|
| Cogen H₂/biogás baseload | 200 | 50% |
| SIN + PPA 24/7 | 195 | 49% |
| PV cubierta | 5 | 1% |
| BESS arbitraje (neto = 0) | 0 | 0% |
| HVO | 0 | 0% (standby) |
| **Total** | **400** | **100%** |

---

## 5. Cascada de respuesta — falla de SIN (caso peor)

```
t = 0 ms       Apagón total SIN (ambas líneas)
               │
t < 4 ms       │ Relés diferenciales detectan, abren interruptores red
               │ Inversores grid-forming BESS asumen control de frecuencia
               ▼
t = 4 ms       FLYWHEELS estabilizan transitorio
               BESS comienza inyección masiva (300 MW)
               Cogen H₂/biogás sigue inyectando 200 MW (baseload activo)
               │
t = 4-12 s     │ HVO precalentado arranca
               │ Sincronización con bus
               ▼
t = 12 s       HVO N+2 disponible: 450 MW (más de lo que necesitamos)
               BESS reduce inyección (queda en flotación)
               Cogen sigue 200 MW
               │
t = 12 s – 168 h
               Operación isla:
                 Cogen 200 MW + HVO ~200 MW (modulado) = 400 MW
                 BESS para soporte frecuencia + reservas spinning
               │
t = 168 h      Reposición HVO (camiones) si SIN sigue caída
               Cogen aumenta a límite (200 MW) + electrolizadores apagan
                 para liberar combustible H₂ del stock
               │
Continuo       Operación isla indefinida con reposición logística HVO
               (riesgo: solo si SIN cae >7 días sin reposición)
```

**En todo este escenario la carga TI nunca ve fluctuación > ±1% de tensión o ±0,1 Hz de frecuencia.**

---

## 6. Cascada de respuesta — falla múltiple severa

| Escenario | SIN | Cogen | HVO | BESS | Acción | Tiempo crítico |
|---|---|---|---|---|---|---|
| 1 línea SIN cae | ✗ | ✓ | — | — | Línea B asume | 50 ms |
| Ambas líneas SIN | ✗✗ | ✓ | arranca | ✓ | BESS+Flywh→HVO | 12 s |
| Cogen falla 1 turbina | ✓ | 100MW | — | — | SIN absorbe | 0 |
| Cogen falla total | ✓ | ✗✗ | — | ✓ | SIN+BESS | 0 |
| SIN + Cogen | ✗✗ | ✗✗ | arranca | ✓ | BESS 4h + HVO 168h | 12 s |
| SIN + Cogen + HVO 1 unidad | ✗✗ | ✗✗ | 420MW | ✓ | sigue OK (N+1) | 12 s |
| SIN + Cogen + HVO 3 unidades | ✗✗ | ✗✗ | 360MW | ✓ | reduce no-críticos | 12 s |
| SIN + Cogen + HVO total | ✗✗ | ✗✗ | ✗✗ | 4h | **BESS 4h + apaga ordenado o load shed** | 4 h gracia |
| Sismo MCE | -- | apaga | apaga | ✓ | BESS 4h + reinicia | 4 h |
| Apocalipsis (todo) | ✗ | ✗ | ✗ | ✗ | Apagado limpio + procedure | -- |

**Probabilidad acumulada del último escenario sin BESS: < 10⁻⁶ por año.**

---

## 7. Balance energético anual (año 5, operación plena)

| Fuente | GWh/año | % | CO₂e (kt/año) |
|---|---|---|---|
| Cogen H₂/biogás (60% H₂ verde + 40% biogás) | 1.752 | 50% | 35 |
| SIN + PPA 24/7 (95% match renovable) | 1.700 | 49% | 8 |
| PV cubierta | 9 | 0,3% | 0 |
| HVO arranques + pruebas | 5 | 0,1% | 0,3 |
| BESS arbitraje (consumo neto pérdidas) | -28 | -0,8% | — |
| Excedente vendido al SIN | -50 | -1,4% | -3 |
| **Demanda neta del campus** | **3.388** | **100%** | **~40 kt** |

Demanda incluye: TI 300 MW × 8.760 = 2.628 GWh + PUE 525 + edificio 175 + logística 60 = **≈ 3.388 GWh/año**.

**Intensidad: 12 g CO₂e/kWh año 5** (vs 165 g/kWh promedio SIN Colombia 2024). **Net-zero año 10** con 100% H₂ verde.

---

## 8. Despliegue por fases

```
Año 1-3   Fase 1 — 100 MW IT
          ├─ Conexión SIN 200 MW firmes (1 línea)
          ├─ BESS 400 MWh
          ├─ HVO 5 generadores (150 MW, N+2 sobre 100)
          ├─ Flywheels 20 MW
          └─ PV cubierta parcial 2 MWp

Año 3-5   Fase 2 — +100 MW IT (= 200 MW total)
          ├─ Segunda línea SIN, total 400 MW firmes
          ├─ Cogen turbina 1 (100 MW)
          ├─ BESS +400 MWh (= 800 MWh)
          ├─ HVO +5 generadores (= 300 MW)
          ├─ Electrolizador 25 MW
          └─ PV cubierta completa 5,5 MWp

Año 5-7   Fase 3 — +100 MW IT (= 300 MW total)
          ├─ Cogen turbina 2 (= 200 MW)
          ├─ BESS +400 MWh (= 1.200 MWh)
          ├─ HVO +5 generadores (= 450 MW)
          └─ Electrolizador 50 MW

Año 7-10  Optimización net-zero
          ├─ H₂ verde 100% (cogen)
          ├─ PPA 24/7 ≥ 99% match
          ├─ BESS ampliación opcional 300 MWh (sodio-ion?)
          └─ Reserva bóveda SMR (no equipada)
```

---

## 9. CAPEX desagregado del sistema híbrido

| Subsistema | CAPEX (M USD) |
|---|---|
| Subestación GIS 230/34,5 + 2 líneas SIN | 280 |
| Cogen 2 × 100 MW H₂-ready + HRSG + obra civil caverna | 800 |
| BESS 1.200 MWh LFP + bóvedas + supresión | 720 |
| HVO 450 MW + búnker + tanques + SCR | 380 |
| Flywheels 60 MW × 30 s | 90 |
| PV 5,5 MWp + BESS dedicado 22 MWh | 25 |
| Electrolizadores PEM 100 MW + almacenaje H₂ | 220 |
| UPS rotativos 2N+1 (30 × 12 MW) | 180 |
| Anillo MT 34,5 kV dual + transformadores | 110 |
| SCADA + protección + control + ciber-OT | 60 |
| **Subtotal sistema híbrido** | **2.865 M USD** |

(Nota: ya incorporado en el CAPEX total ~10 B del proyecto — ver `docs/07-capex-cronograma/01-capex-opex.md`.)

---

## 10. Qué hace este sistema **único** vs. un data center convencional

1. **Autogeneración subterránea real (200 MW)**, no sólo backup. La mayoría de hyperscalers dependen 100% de red.
2. **6 capas de respaldo** (red dual + cogen + BESS + HVO + flywheels + PV) — no 2 (red + diésel) como típicamente.
3. **168 h de autonomía total in-situ** sin reposición logística.
4. **Compatible con apagón nacional indefinido** (con reposición HVO).
5. **Ruta a net-zero año 10** sin sacrificar disponibilidad.
6. **Producción de H₂ verde on-site** convierte excedentes en combustible despachable — economía circular energética.
7. **Recuperación térmica** (50–55 °C) alimenta hotel/spa — ERE > 0,2.
8. **Servicios complementarios al SIN** (BESS) generan ingreso adicional ~25 M USD/año.
9. **Resiliencia sísmica + volcánica** (sellos, filtración, autonomía).
10. **Disponibilidad objetivo 99,9999% (six-nines)** — ≤ 31,5 s/año de outage en TI.
