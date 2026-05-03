# Consolidación final v3 — Proyecto El Tablazo

> Versión autoritativa después de iterar con todas las restricciones del cliente:
> Aerocivil cota 2.119 msnm, sin chimeneas verticales, PV enterrado, gasoducto TGI,
> 6 pisos sin ±0, integración vertical del grupo, eliminación de redundancia
> energética innecesaria, precios reales Rionegro 2025.

## 1. Diseño urbano-arquitectónico

- **Único edificio visible:** "la mole" de 6 plantas (-3, -2, -1, +1, +2, +3).
- **Huella POT 30%:** 25.200 m² visibles. Resto del lote: paisajismo + PV en grado.
- **Altura máxima:** 2.119 msnm (validada Aerocivil). 27 m sobre rasante.
- **Sin ±0:** el edificio "flota" sobre el grado. Acceso al +1 por rampa monumental + ascensores.
- **+1 = lobby + convenciones** combinados (atrio doble altura, distribuye selectivamente a +2, +3, -1).
- **Acceso restringido** a -2/-3: sólo desde portal especial en -1 (mantraps biométricos).

## 2. Programa por planta (definitivo)

| Nivel | Función | m² | Notas |
|---|---|---|---|
| **+3** | Hotel 5★ + Crew hotel + Club + Spa | 25.200 | Operador propio del grupo |
| **+2** | NOC + Ciber-SOC + IA Lab + Business + Bancos/Univ | 25.200 | SCIF + TEMPEST en zonas críticas |
| **+1** | **Lobby + Convenciones + Showrooms tier-1 + Simuladores** | 25.200 | Distribuidor de accesos |
| **-1** | Logística última milla + Cold pharma + Parking + **Portal a -2/-3** | 25.200 | DHL/FedEx/Amazon RaaS |
| **-2** | Security House (GSOC + Ciber + C2 + Táctico) | 25.200 | NIST 800-53 HIGH + ICD-705 |
| **-3** | Data Center 300 MW IT (4 halls × 75 MW) | 25.200 | Tier IV + sismoaislamiento |
| **-4/-5** | Galerías + cavernas: cogen + BESS + GIS | 40.000 | Hardened, Aerocivil OK |
| **Cubierta** | Cooling carenado + antenas (no PV, no helipuerto) | 5.000 | Helipuerto reubicado al grado sur |
| **Total construido** | | **≈ 191.000 m²** | |

## 3. Sistema energético definitivo (lean)

### Topología

```
GAS TGI ─► COGEN 5×LM6000 + 2×STG 60MW ─┐
                                         ├─► ANILLO MT 34,5 kV ─► UPS 2N ─► DC -3
SIN 100 MW ────► GIS 230/34,5 kV ────────┤
                                         │
BESS BYD 21×14,5 = 304 MWh ──────────────┤
                                         │
HVO 2×30 MW (life safety) ──────────────┤
                                         │
PV 10 MWp grado ─────────────────────────┘

CALOR RESIDUAL:
  Cogen condensador (210 MW) + DC servidores (300 MW dieléctrico) ─►
  Heat manifold ─► Edificio + Hotel + Spa + Adsorption chiller (30 MW frío)
```

### Capacidades

| Equipo | Capacidad |
|---|---|
| Cogen ciclo combinado (5 LM6000 + 2 STG) | **410 MW netos** (54,7% LHV / 84% con cogen) |
| Conexión SIN (backup + balance) | 100 MW firmes |
| BESS BYD MC Cube T | 304 MWh / 300 MW (1 h) |
| HVO (life safety + cargas críticas) | 60 MW |
| PV en grado | 10 MWp (~17 GWh/año) |
| UPS estático modular | 2N para data halls |
| Calor recuperable | 320 MW térmicos (cubre 100% del edificio + spa) |

### Lo que SE eliminó vs versiones anteriores

- ❌ Flywheels (BESS GFM lo hace).
- ❌ HVO masivo de 450/150 MW (reducido a 60 MW life safety).
- ❌ UPS rotativo dinámico premium (sustituido por estático modular 2N).
- ⏱ Electrolizador H₂ Fase 1 (diferido a Fase 3 cuando precio H₂ baje).

## 4. CAPEX consolidado final

| Componente | M USD |
|---|---|
| **Sistema energético simplificado** | **565** |
| **Edificio #1 — construcción 150.000 m²** (con integración vertical) | **318** |
| Data Center fit-out (MEP, racks, cooling líquido dieléctrico, fibra interna) | 950 |
| Equipos especializados last-mile + cold storage | 195 |
| Equipos convenciones + simuladores Level D | 200 |
| Hotel FF&E (operador grupo, -15%) | 119 |
| Security House equipos + integración (integrador grupo, -10%) | 149 |
| Conectividad fibra externa + 4 entradas + MMR | 76 |
| Predio (84.000 m²) | 80 |
| Licencias + EIA + ingeniería externa especializada | 165 |
| Contingencia 10% sobre el resto | 282 |
| **CAPEX TOTAL PROYECTO** | **≈ 3.099 M USD** |
| Captura utilidad subsidiarias del grupo | -149 |
| **COSTO NETO REAL AL GRUPO** | **≈ 2.950 M USD** |

## 5. OPEX e ingresos (estabilizado año 7)

| | M USD/año |
|---|---|
| **Ingresos brutos** | **1.552** |
| Combustible gas TGI + SIN | 116 |
| O&M sistema energético | 32 |
| Personal + mantenimiento + licencias + impuestos + seguros | 264 |
| **Total OPEX** | **412** |
| **EBITDA** | **1.140** |
| **Margen EBITDA** | **73%** |

## 6. Indicadores financieros finales

| Indicador | Valor |
|---|---|
| **CAPEX total** | 3.099 M USD |
| **Costo neto al grupo** | 2.950 M USD |
| **EBITDA estabilizado** | 1.140 M USD/año |
| **Payback simple** | ~6,5 años |
| **TIR proyecto (10 años)** | **20–24%** |
| **TIR equity (60/40)** | **32–38%** |
| **VAN @ WACC 9% (15 años)** | +3.500 M USD |
| **DSCR año 7** | 5,8x |

## 7. El sistema energético se paga solo

| | Valor |
|---|---|
| LCOE autogeneración | $0,081/kWh |
| Tarifa industrial SIN nivel III | $0,110/kWh |
| **Diferencial (ahorro)** | **$0,029/kWh = 26%** |
| Demanda anual | 2.803 GWh |
| **Ahorro anual contra SIN** | **75 M USD/año** |
| **Payback CAPEX 565 M sólo con ahorro** | **~7,5 años** |
| Con beneficios completos (district heat, arbitraje, servicios SIN) | **~6 años** |

## 8. Cronograma con integración vertical

| Fase | Mes | Hito |
|---|---|---|
| 0 | M0–M12 | Prefactibilidad + EIA + Aerocivil + UPME (en paralelo) |
| 1 | M12–M30 | Licenciamiento + ingeniería + pre-leasing |
| 2 | M30–M48 | Excavación + civil estructural |
| 3 | M40–M60 | DC fit-out fase 1 (100 MW) + MEP edificio |
| 4 | M48–M66 | Acabados + FF&E hotel + comisionamiento Tier IV |
| 5 | M66 | **Apertura fase 1: DC 100 MW + hotel + convenciones operativos** |
| 6 | M66–M84 | Fases 2 y 3 DC (+200 MW) |
| 7 | M84 | **300 MW IT operativos, plena capacidad** |

> Aceleración 8 meses vs cronograma sin integración vertical → ingresos anticipados ~250 M USD.

## 9. Por qué este diseño funciona

1. **Eficiencia técnica:** 54,7% eléctrica + 84% con cogen aprovechado.
2. **Simplicidad:** sólo cogen + SIN + BESS + UPS — sin redundancia barroca.
3. **Disponibilidad:** Tier IV / six-nines (≤ 31,5 s/año outage).
4. **Aprovechamiento térmico:** edificio entero calefactado con calor "gratis" del DC + cogen.
5. **CAPEX realista:** 3.099 M total, 2.950 M neto al grupo (no 5–10 B inflados).
6. **Autogeneración:** 410 MW > 400 MW demanda, no dependemos del SIN para operar.
7. **Económico:** payback 6,5 años, TIR proyecto 20–24%.
8. **Cumple Aerocivil:** cota 2.119, sin chimeneas verticales, PV en grado.
9. **Cumple ANLA/CORNARE:** EIA + permisos abordados en `docs/02-sitio/04-ambiental.md`.
10. **Captura del grupo:** integración vertical hace que cada $1 del CAPEX construya valor en otra subsidiaria.

## 10. Riesgos clave a gestionar (no eliminados, sólo gestionados)

1. **Pre-leasing del DC:** sin clientes ancla 60% antes de FID, no cierra project finance. Acción: marketing temprano con hyperscalers + bancos colombianos.
2. **EIA con audiencia pública:** 18–30 meses, comunicación temprana clave.
3. **Conexión 100 MW SIN:** trámite UPME mucho más simple que 400 MW v1; aún requiere 12 meses.
4. **Fluctuación gas TGI:** contrato firme largo plazo + cobertura financiera.
5. **Concentración del grupo en ejecución:** auditoría externa cada fase para precios de transferencia DIAN.

## 11. Documentación de soporte

| Tema | Documento |
|---|---|
| Resumen ejecutivo original | `docs/00-master/01-resumen-ejecutivo.md` |
| Premisas + criterios | `docs/00-master/02-premisas-y-criterios.md` |
| Matriz de riesgos | `docs/00-master/03-matriz-riesgos.md` |
| **Sistema energético simplificado (final)** | **`docs/01-energia/08-sistema-energetico-simplificado.md`** |
| Confirmación técnica cogen | `docs/01-energia/07-confirmacion-tecnica-cogen.md` |
| Balance térmico | `docs/01-energia/06-balance-termico-cogeneracion.md` |
| Sitio + Aerocivil + ambiental | `docs/02-sitio/` |
| Arquitectura + MEP | `docs/03-arquitectura/` |
| **Programa de pisos v2** | **`docs/04-pisos/00-overview-pisos-v2.md`** |
| Detalle por planta | `docs/04-pisos/0X-piso-*.md` |
| Security House | `docs/05-seguridad/` |
| Marco regulatorio | `docs/06-regulacion/` |
| **Modelo financiero recalibrado (final)** | **`docs/07-capex-cronograma/05-recalibracion-rionegro-real.md`** |
| Construcción + integración vertical | `docs/07-capex-cronograma/04-construccion-edificio1-integracion-vertical.md` |
