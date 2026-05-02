# Modelo financiero v2 — CAPEX, OPEX, gas, comparativo SIN, ROI/TIR

> Reemplaza secciones financieras de `01-capex-opex.md` para el subsistema energético. Mantiene el resto.

## 1. CAPEX recalculado

### Sistema de autogeneración (sólo equipos, sin obra civil)

| Subsistema | M USD |
|---|---|
| 5× GE LM6000 PF Sprint 60 MW | 225 |
| Ciclo de vapor (HRSG + 2 STG + condensadores) | 70 |
| Conexión TGI + ERM + mezclador H₂ | 14 |
| Electrolizador PEM 20 MW + tanques H₂ | 45 |
| BESS BYD 21× MC Cube T (304,5 MWh) + PCS | 103 |
| HVO N+1 150 MW + tanques | 38 |
| GIS 230/34,5 kV (100 MW) + anillo MT + trafos | 52 |
| UPS rotativo 2N+1 + flywheels | 45 |
| PV 10 MWp grado + BESS pequeño | 10 |
| Heat manifold + recuperación térmica edificio | 15 |
| SCADA + ciber-OT + control + comisionamiento | 33 |
| **Subtotal** | **650** |
| Optimización paquete EPC | -50 |
| **CAPEX equipos energía** | **600 M USD** |

### CAPEX total proyecto (revisado)

| Componente | M USD |
|---|---|
| **Sistema energético (arriba)** | **600** |
| Obra civil subterránea (excavación 200.000 m³ huella + cavernas) | 380 |
| Edificio sobre rasante (3 plantas × 25.200 m²) | 460 |
| Edificio bajo rasante shell (3 plantas × 25.200 + galerías) | 720 |
| Data Center fit-out (MEP DC, racks, fibra, pasillos contención) | 950 |
| Last-mile robotizada -1 (equipamiento) | 110 |
| Cold storage farma | 75 |
| Convenciones +1 (auditorios, AV, simuladores) | 200 |
| Hotel +3 FF&E + acabados | 140 |
| Spa + club + restaurantes | 55 |
| Security house -2 (sistemas, integración) | 165 |
| Conectividad fibra + MMR + redes | 80 |
| Predio (84.000 m²) | 80 |
| Licencias, EIA, ingeniería | 220 |
| Contingencia 15% | 770 |
| **CAPEX TOTAL PROYECTO** | **≈ 5.005 M USD** |

> Reducción de ~50% vs. v1 (10 B → 5 B) por:
> - Sistema energético dimensionado a la realidad (cogen on-site en lugar de 400 MW SIN + masivo BESS).
> - Cavernas reducidas (no se aloja casi todo el respaldo en piedra).
> - PV 10 MWp en grado en vez de cubierta tracker.
> - Eficiencias de paquete EPC integrado.

## 2. OPEX anual (operación plena, año 7)

### Combustible

**Cálculo del consumo de gas:**

- 5 LM6000 @ 75% load promedio → 225 MW gas + 95 MW vapor = 320 MW eléctricos cogen.
- Heat rate ciclo combinado @ 75% load: 6.500 BTU/kWh (net).
- Demanda anual cogen: 320 MW × 8.760 h × 0,90 disponibilidad = **2.523 GWh/año eléctricos**.
- Fuel input: 2.523 GWh × 6,5 MMBtu/MWh = **16,4 millones MMBtu/año**.

**Mix de combustible:**

| Año | % Gas TGI | % H₂ | Notas |
|---|---|---|---|
| 1 | 100% | 0% | Arranque, sin electrolizador aún |
| 3 | 95% | 5% | Electrolizador 20 MW operativo |
| 5 | 90% | 10% | Electrolizador 50 MW + compras externas |
| 7 | 80% | 20% | Mix compra externa + on-site |

**Precio del gas (TGI Rionegro, industrial):**

- Gas TGI ~$5,5/MMBtu (precio 2024–2025, contrato firme largo plazo).
- H₂ verde Colombia ~$4,5/kg en 2030 → ~$33/MMBtu (decrece a $25/MMBtu si entra incentivo Ley 2099).

**Costo combustible año 7 (base):**

| Concepto | MMBtu/año | $/MMBtu | M USD/año |
|---|---|---|---|
| Gas TGI 80% | 13,1 M | 5,5 | 72,1 |
| H₂ blend 20% (mix on-site + compra) | 3,3 M | 28 | 92,0 |
| **Total combustible año 7** | **16,4 M** | | **164,1** |

**Costo combustible año 1 (sólo gas):**

| Concepto | MMBtu/año | $/MMBtu | M USD/año |
|---|---|---|---|
| Gas TGI 100% | 16,4 M | 5,5 | **90,2** |

> El H₂ blend encarece OPEX. **Decisión estratégica:** rampa lenta de H₂, entrar al 20% sólo cuando precio H₂ baje a $20/MMBtu o haya incentivo regulatorio. Año 1–5 priorizar gas + cero H₂ premium minimiza OPEX.

### OPEX completo año 1

| Concepto | M USD/año |
|---|---|
| Combustible (100% gas TGI) | 90 |
| Compra al SIN (100 MW backup × FC 30%) | 26 |
| O&M cogen (LM6000 contrato F-class GE) | 14 |
| O&M BESS BYD (1% CAPEX) | 1 |
| O&M HVO + lubricantes + arranques | 2 |
| Personal sistema energético (40 técnicos) | 4 |
| Repuestos + reposiciones | 6 |
| Agua proceso + tratamiento | 1 |
| Seguros sistema energético | 8 |
| Mantenimiento fibra/comunicaciones SIN | 1 |
| **Subtotal energía** | **153** |
| Personal DC operación (200) | 24 |
| Personal seguridad GSOC (120) | 12 |
| Personal hotel + F&B + spa (300) | 18 |
| Personal corp/admin/IT/legal (80) | 12 |
| Mantenimiento MEP edificio + DC | 70 |
| Licencias software (DCIM, SIEM, AV, etc.) | 18 |
| Seguros generales + cyber | 35 |
| Impuestos prediales + ICA + reparto | 28 |
| Compensación ambiental + CSR | 8 |
| **OPEX TOTAL año 1** | **378** |
| OPEX año 7 (con H₂ ramp 20%) | **452** |

## 3. Comparativo: tarifa industrial vs. autogeneración

### Tarifa industrial Colombia (Oriente Antioqueño, nivel III, sector terciario alto consumo)

- Precio Bolsa promedio 2024: ~270 COP/kWh
- Tarifa industrial regulada: ~530 COP/kWh todo incluido (energía + transporte + distribución + comercialización + contribución 20%)
- En USD @ 4.200 COP/USD: **≈ $0,126/kWh**
- Si el cliente tuviera contrato directo PPA 24/7 renovable: **~$0,085–0,10/kWh** (mejor escenario, no garantizado a 400 MW)

> Para este modelo usamos referencia conservadora: **tarifa industrial $0,11/kWh USD** (promedio entre regulada y mercado libre).

### LCOE de la autogeneración

**Sin H₂ (año 1):**

| Concepto | M USD/año | $/kWh |
|---|---|---|
| Combustible gas | 90 | 0,036 |
| O&M | 23 | 0,009 |
| Amortización CAPEX 600 M @ 8% × 15 años (CRF 0,117) | 70 | 0,028 |
| Personal cogen | 4 | 0,002 |
| Otros (agua, seguros, etc.) | 16 | 0,006 |
| **TOTAL LCOE COGEN AÑO 1** | **203** | **$0,081/kWh** |

Energía generada cogen año 1: 2.523 GWh.

**Con compra SIN para balance (100 MW × FC 30% = 263 GWh/año):**

| Fuente | GWh/año | $/kWh | M USD/año |
|---|---|---|---|
| Cogen | 2.523 | 0,081 | 204 |
| SIN backup | 263 | 0,11 | 29 |
| **Demanda total cubierta** | **2.786** | **0,084** | **233** |

(Demanda 400 MW × 8.760 × 0,80 utilización = 2.803 GWh/año aproximadamente.)

### Comparativo año 1

| Escenario | Energía total | Costo total | Costo/kWh blend |
|---|---|---|---|
| **A) 100% SIN tarifa industrial** | 2.803 GWh | $308 M/año | $0,110 |
| **B) Autogeneración + SIN backup** | 2.786 GWh | $233 M/año | $0,084 |
| **AHORRO ANUAL** | | **$75 M/año** | -24% |

### Comparativo año 7 (con H₂ 20%)

| Escenario | Costo total/año | $/kWh blend |
|---|---|---|
| 100% SIN tarifa industrial | $308 M | $0,110 |
| Autogeneración con H₂ 20% | $278 M | $0,099 |
| AHORRO | $30 M | -10% |

> El H₂ blend reduce el ahorro pero no lo elimina. La curva mejora cuando el precio H₂ verde baje (Colombia tiene gran potencial de H₂ verde con eólica/solar — costo proyectado < $2/kg en 2035).

## 4. Recuperación del CAPEX del sistema energético

### Mínimo: ahorros vs. tarifa SIN

| | Año 1 | Año 5 | Año 7 |
|---|---|---|---|
| Ahorro anual ($/año) | 75 M | 60 M | 30 M |
| Acumulado ($M) | 75 | 360 | 480 |

**Payback simple del CAPEX 600 M sólo con ahorro vs. SIN: ~9 años** (sin contar revenue del DC).

### Realista: ahorro + ingresos térmicos + arbitraje BESS + servicios complementarios

| Fuente | M USD/año |
|---|---|
| Ahorro vs. tarifa SIN | 75 |
| District heat futuro (año 5+) | 8 |
| Arbitraje BESS (compra valle / venta peak) | 5 |
| Servicios complementarios CREG (AGC, regulación frecuencia) | 6 |
| Excedente al SIN (cuando aplica) | 4 |
| **Total beneficios sistema energético** | **98 M USD/año estabilizado** |

**Payback con beneficios completos: 600 / 98 = ~6 años.**

## 5. Modelo financiero global del proyecto

### Ingresos consolidados (año 7 estabilizado)

| Línea | M USD/año |
|---|---|
| Colocation 240 MW IT vendidos ($4,5M/MW año retail Tier IV) | 1.080 |
| Cross-connects + servicios gestionados | 70 |
| AI Training as a Service | 110 |
| Cold storage farma | 28 |
| Last-mile (RaaS + alquiler espacios) | 42 |
| Convenciones + showrooms (ingresos eventos + alquiler) | 55 |
| Hotel (320 llaves promedio + crew) | 65 |
| Club + spa + F&B | 22 |
| Oficinas business +2 | 65 |
| Servicios complementarios SIN + BESS arb. | 11 |
| Excedente SIN | 4 |
| **Ingresos brutos año 7** | **1.552 M USD/año** |

### EBITDA estimado

| | Año 3 (Fase 1) | Año 7 (estabilizado) |
|---|---|---|
| Ingresos | 480 | 1.552 |
| OPEX | 220 | 452 |
| **EBITDA** | **260** | **1.100** |
| EBITDA margin | 54% | 71% |

### Flujo de caja simplificado (Project finance 60/40, deuda @ 7%, equity @ 15%)

| Año | CAPEX | EBITDA | Servicio deuda | FCFE | Acum FCFE |
|---|---|---|---|---|---|
| 1 | -1.500 | 0 | -50 | -1.550 | -1.550 |
| 2 | -1.500 | 0 | -100 | -1.600 | -3.150 |
| 3 | -1.000 | 60 | -150 | -1.090 | -4.240 |
| 4 | -500 | 200 | -200 | -500 | -4.740 |
| 5 | -500 | 500 | -250 | -250 | -4.990 |
| 6 | 0 | 800 | -250 | 550 | -4.440 |
| 7 | 0 | 1.100 | -250 | 850 | -3.590 |
| 8 | 0 | 1.150 | -250 | 900 | -2.690 |
| 9 | 0 | 1.180 | -250 | 930 | -1.760 |
| 10 | 0 | 1.200 | -250 | 950 | -810 |
| 11 | 0 | 1.220 | -250 | 970 | 160 |
| 12 | 0 | 1.250 | -250 | 1.000 | 1.160 |

(Año 3 es el primer año en que la fase 1 está operativa — DC 100 MW + hotel + convenciones; ingresos parciales.)

### Indicadores

| Indicador | Valor |
|---|---|
| **CAPEX total** | 5.000 M USD |
| **EBITDA estabilizado** | 1.100 M USD/año |
| **Margen EBITDA** | 71% |
| **Payback simple desde año 1** | ~10,5 años |
| **TIR del proyecto (10 años)** | **13–15%** |
| **TIR del equity (con apalancamiento 60/40)** | **20–24%** |
| **VAN @ WACC 9% (15 años)** | **+ 2.700 M USD** |
| **Ratio servicio deuda (DSCR) año 7** | 4,4x |

### Escenarios

| Escenario | TIR proyecto | Comentario |
|---|---|---|
| Base | 14% | Como arriba |
| Pesimista (-20% pre-leasing, +15% CAPEX, gas $7,5/MMBtu) | 8% | Marginal |
| Optimista (gas $4,5/MMBtu, district heat operativo año 4, AI demand boom) | 19% | Muy atractivo |
| Solo si ahorro vs. SIN paga el sistema energético | Sí | El sistema energético se autofinancia en ~6–9 años |

## 6. Confirmación: ¿el ahorro de energía paga el sistema?

**Sí, con margen.**

- **CAPEX sistema energético:** 600 M USD.
- **Ahorro anual estabilizado:** 75–98 M USD/año (vs. comprar todo al SIN).
- **Payback simple del sistema:** **6–9 años**.
- **TIR del subsistema energético (aislado):** ~13%.
- **VAN del subsistema energético (15 años, WACC 9%):** **~ +260 M USD**.

A esto se suma:
- **Mejor disponibilidad** (Tier IV, six-nines) → no posible con dependencia al SIN solo.
- **Soberanía energética** del campus (no expuesto a apagones nacionales).
- **Calor gratis** para el edificio (cero gasto en calefacción/ACS).
- **Ruta a baja huella de carbono** (H₂ blend ramp).
- **Ingresos extras** (district heat, servicios complementarios).

## 7. Tarifas y supuestos clave (a validar)

| Variable | Valor usado | Fuente / sensibilidad |
|---|---|---|
| Gas TGI industrial Rionegro | $5,5/MMBtu | TGI / Promigas tarifa firme largo plazo |
| Tarifa industrial SIN nivel III | $0,11/kWh | XM bolsa + cargos regulados (CREG) |
| WACC del proyecto | 9% | Project finance + país riesgo |
| Inflación | 4% Col / 2,5% USD | DANE + Fed |
| TRM | 4.200 COP/USD | Promedio 2024 |
| H₂ verde 2030 | $4,5/kg | Hydrogen Council outlook |
| Heat rate CC LM6000 @ 75% | 6.500 BTU/kWh | GE spec |
| Disponibilidad cogen | 90% | Mantenimiento mayor cada 32k h |
| Pre-leasing DC año 4 | 60% | Conservador para Latam |
| Pre-leasing DC año 7 | 80% | Estabilizado |

## 8. Quick reference final

| | Valor |
|---|---|
| **CAPEX sistema autogeneración** | **600 M USD** |
| **CAPEX total proyecto** | 5.000 M USD |
| **OPEX anual sistema energético año 1** | 153 M USD |
| **Costo gas anual año 1** | 90 M USD (16,4 M MMBtu × $5,5) |
| **LCOE autogeneración año 1** | **$0,081/kWh** |
| **Tarifa industrial SIN** | $0,110/kWh |
| **Diferencia (ahorro)** | **$0,029/kWh = 26%** |
| **Ahorro anual contra SIN** | **75 M USD/año** |
| **Payback sistema energético** | **6–9 años** |
| **EBITDA estabilizado proyecto** | 1.100 M USD/año |
| **TIR proyecto** | 13–15% |
| **TIR equity** | 20–24% |
