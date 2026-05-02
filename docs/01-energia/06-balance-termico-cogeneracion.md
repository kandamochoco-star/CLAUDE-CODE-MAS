# Balance térmico — Cogeneración + calor residual del Data Center

## 1. Punto de partida

El sistema produce calor en **dos fuentes principales**:

1. **Cogeneración LM6000 + ciclo de vapor** (combustión gas/H₂).
2. **Servidores del DC** (300 MW IT prácticamente todos convertidos en calor; refrigeración por **líquido dieléctrico** en racks AI/HPC + RDHX en compute medio).

La premisa: **todo el calor residual debe utilizarse**. El edificio consume calor (heating, ACS hotel, spa, piscina, electrolizador preheat).

## 2. Balance térmico de las turbinas LM6000

### Una unidad LM6000 PF Sprint @ 85% load

| Flujo | Valor | Notas |
|---|---|---|
| Fuel input (gas natural HHV) | **~150 MW** | Heat rate 9.000 BTU/kWh simple cycle |
| Trabajo eje gas turbine | 60 MW | 40% eficiencia simple cycle |
| Pérdidas radiación + auxiliares | 7 MW | |
| **Calor en escape (gases ~530 °C)** | **83 MW** | Recuperable en HRSG |
| **HRSG recupera ~80%** | **66 MW** vapor | A 80 bar / 530 °C |
| Pérdidas chimenea (gas a 130 °C tras HRSG) | 17 MW | Para descarga sur |

### Tren de vapor común (5 LM6000 → 5 HRSG → 2 turbinas vapor)

| Flujo | Valor | Notas |
|---|---|---|
| Vapor total HP entregado por 5 HRSG | **5 × 66 = 330 MW térm.** | |
| Trabajo en turbina vapor (η 36%) | **120 MW eléctricos** | 2 × 60 MW STG |
| **Calor rechazado en condensador (50–70 °C)** | **210 MW térmicos** | **APROVECHABLE** |
| **Camisas + intercooler 5 LM6000 (80–95 °C)** | **25 MW térmicos** | **APROVECHABLE** |
| Pérdidas mecánicas + auxiliares STG | 15 MW | |

### Resumen 5 unidades LM6000 + ciclo de vapor

| Concepto | MW |
|---|---|
| Fuel input total | 750 (gas) |
| Eléctrico bruto (gas) | 300 |
| Eléctrico bruto (vapor) | 120 |
| Auxiliares cogen | -10 |
| **Eléctrico neto cogen** | **410** |
| Calor recuperable condensador | 210 |
| Calor recuperable camisas/intercooler | 25 |
| Calor en gases de escape post-HRSG | 85 |
| **Calor recuperable total cogen** | **320** |
| Eficiencia eléctrica | 410/750 = **54,7%** |
| **Eficiencia global con cogen aprovechado** | **(410 + 220)/750 = 84%** |

(Donde "220" = calor del condensador + camisas + parte del flue gas tras economizador adicional.)

## 3. Calor residual del Data Center

### Carga IT y disipación

| Tipo de rack | MW | Tecnología cooling | Temperatura agua de retorno |
|---|---|---|---|
| AI/HPC GPU (50%) | 150 | **Direct Liquid Cooling — líquido dieléctrico** | **55–65 °C** |
| Compute denso (30%) | 90 | RDHX + agua | 40–50 °C |
| Almacenamiento + legacy (20%) | 60 | CRAH + aire | 30–35 °C (post intercambio) |
| **Total disipación servidor** | **300 MW térmicos** | Coincide con carga eléctrica | |

### Cantidad y calidad

- **Líquido dieléctrico** (3M Novec 7100/7300, Solvay Galden o equivalentes en racks 2-fase): permite extracción a temperatura más alta. El loop secundario que sale del CDU al heat manifold opera a **55–65 °C**.
- Total agua "caliente útil" disponible: ~150–180 MW a 55–65 °C (suma DLC + parte de RDHX).
- Loop de baja temperatura: ~120 MW a 30–45 °C (RDHX residual + aire).

### Aprovechabilidad
- **El calor del DC a 55–65 °C es ideal para ACS hotel, spa, piscina y heating del edificio.**
- El loop a 30–45 °C alimenta **chiller de absorción** que produce frío del propio cooling del DC (regenerative cooling).

## 4. Demanda térmica del campus

| Uso | Pico (MW térm.) | Promedio (MW térm.) | Notas |
|---|---|---|---|
| Calefacción edificio +1/+2/+3 (50.000 m²) | 6 | 2 | Rionegro 10–25 °C; calor solo en madrugadas frías (5–15 °C) |
| ACS hotel (320 habitaciones equivalentes) | 3 | 1,5 | Demanda continua |
| Spa + piscinas + hammam + jacuzzi | 4 | 2 | Renovación constante |
| Cocinas restaurantes + lavandería hotel | 1,5 | 0,8 | |
| Pre-heat electrolizadores PEM (mejor eff.) | 2 | 1 | Sólo si están operando |
| Ventilación con recuperación entálpica (boost) | 1 | 0,3 | |
| Climatización +2 control / +1 lobby (heating) | 3 | 0,8 | Free-cooling domina la mayor parte del año |
| **Total demanda térmica edificio** | **20,5** | **8,4** | |

## 5. Balance: oferta vs. demanda

```
                        OFERTA (MW térm.)         │  DEMANDA (MW)
                                                  │
┌─────────────────────────────────────────────┐   │  ┌──────────────┐
│ Cogen condensador     210                   │   │  │ Edificio +   │
│ Cogen camisas/intercooler 25                │   │  │ ACS + Spa +  │
│ DC servidores (DLC + RDHX)  300             │   │  │ Cocinas      │
│ Cogen flue gas residual ~85 (low quality)   │   │  │ etc.         │
└─────────────────────────────────────────────┘   │  │              │
            TOTAL ≈ 620 MW térm.                  │  │  ~20 MW pico │
                                                  │  │  ~8 MW prom. │
                                                  │  └──────────────┘
                                                  │
                              EXCEDENTE: ~600 MW  │
                              (disipación a       │
                              ambiente o venta    │
                              futura distrital)   │
```

**Conclusión:** la oferta de calor es **30× la demanda interna pico, 70× el promedio.** El edificio se cubre con holgura mínima del calor de cogen + DC.

## 6. Estrategia de manejo del excedente

### A corto plazo (Fase 1)

1. **Recuperación útil** (20 MW pico): edificio + ACS + spa + piscinas + electrolizador.
2. **Adsorption chiller** (capacidad 30 MW frío) usando el loop a 30–45 °C: reduce la carga sobre los chillers eléctricos en los meses cálidos. Aporta hasta **6 MW eléctricos de ahorro**.
3. **Disipación controlada** del excedente via **dry-coolers carenados subterráneos** con extracción horizontal — sin penacho visible, ruido < 35 dB(A) en el linde.

### A mediano plazo (Fase 2/3)

4. **District heating municipal** — venta de calor a:
   - Parque industrial El Tablazo.
   - Hoteles vecinos al aeropuerto JMC.
   - Eventual urbanización Llanogrande.
   - Esquema: tubería preaislada enterrada + estación de cliente.
   - Tarifa: $25–35/MWh térmico → ingreso adicional $5–15 M/año cuando opere.

5. **Greenhouses / agricultura de precisión** dentro o adyacente al lote:
   - 2–4 ha de invernaderos calefactados con calor residual.
   - Producción local para los restaurantes del campus + venta.
   - Modelo demostrado en países nórdicos (data centers calefactando granjas).

6. **Almacenamiento térmico estacional** (estudio de prefactibilidad):
   - Tanque agua caliente subterráneo 5.000 m³ a 80 °C.
   - Permite shifting de demanda térmica.

## 7. Diagrama de la red térmica

```
[5 × LM6000]           [5 × HRSG]            [2 × Turb. vapor]
   gases 530°C  ───►   genera vapor 80 bar   ───►   ELÉCTRICO
                                                   (120 MW)
                                                       │
                       [Condensador]  ◄─────  vapor saturado
                        50–70°C  210 MW
                            │
   [Camisas + intercoolers] 80–95°C  25 MW
                            │
                            ▼
              ┌─────────────────────────┐
              │   COLECTOR TÉRMICO HP   │  60–80 °C, 235 MW
              │   (heat manifold)       │
              └──────┬──────────────┬──┘
                     │              │
   [DLC servers DC]──┘              │
       55–65 °C, 180 MW             │
                                    │
              ┌─────────────────────┴────┐
              │   COLECTOR TÉRMICO LP    │  35–45 °C, 120 MW
              │   (loop secundario)      │
              └──┬──────────┬─────────┬──┘
                 │          │         │
                 ▼          ▼         ▼
         ┌──────────┐ ┌──────────┐ ┌──────────────┐
         │ EDIFICIO │ │ ABSORP.  │ │ DISIPACIÓN   │
         │  (heat   │ │ CHILLER  │ │ (dry-coolers │
         │ exchang.)│ │ → frío   │ │ subterr.)    │
         │ 8 MW pk  │ │ 30 MW frío│ │ ~570 MW      │
         └──────────┘ └──────────┘ └──────────────┘
```

## 8. Ahorros eléctricos por aprovechamiento térmico

| Concepto | Ahorro eléctrico |
|---|---|
| Calefacción edificio (vs caldera eléctrica/bomba calor) | 2 MW promedio |
| ACS + spa (vs eléctrico) | 1,2 MW promedio |
| Adsorption chiller desplaza chillers eléctricos | 6 MW promedio |
| Pre-heat electrolizadores mejora eficiencia | 0,8 MW promedio |
| **Total ahorro eléctrico** | **~10 MW promedio** |
| Energía anual ahorrada | ~88 GWh/año |
| Valor ahorro @ $0,066/kWh LCOE cogen | **≈ $5,8 M/año** |

## 9. Resumen ejecutivo del balance térmico

- **Cogeneración:** 410 MW eléctricos + 320 MW térmicos recuperables (eficiencia global 84%).
- **Servidores DC:** 300 MW térmicos a temperaturas útiles gracias a DLC.
- **Demanda térmica del edificio:** sólo ~20 MW pico → satisfecha 100% sin gas adicional.
- **Excedente térmico ~600 MW** disipado o exportable como district heat.
- **Ahorro eléctrico anual por aprovechamiento térmico:** ~$6 M.
- **PUE efectivo del campus:** **1,12** (vs 1,18 sin recuperación) — gracias a adsorption chiller + heating gratis.
- **ERE (Energy Reuse Effectiveness):** > 0,15 inicial, target 0,30 con district heat.
