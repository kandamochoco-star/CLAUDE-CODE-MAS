# 01 — Resumen Ejecutivo

## Visión

Construir en El Tablazo (Rionegro, Antioquia) un **campus tecnológico vertical de uso mixto** anclado por un **data center hiperescala grado militar de 300 MW IT** con **autogeneración energética subterránea** baja en carbono y respaldos N+2, complementado por funciones logísticas de última milla, centro de convenciones tecnológico, centro de control/IA, y zona hospitality premium.

## Cifras clave

| Concepto | Valor |
|---|---|
| Capacidad TI continua | **300 MW** (3 fases de 100 MW) |
| PUE objetivo (anual) | **≤ 1.20** (clima andino frío favorece free-cooling) |
| Carga total demandada (incl. PUE 1.2 + amenities) | **≈ 380–410 MW** |
| Generación instalada subterránea | **450 MW** (N+1 sobre carga total) |
| Energía anual TI | ≈ 2.628 GWh/año |
| Cubierta fotovoltaica | 25.000 m² ≈ **5,5 MWp** (≈ 9 GWh/año, ≈ 0,3% del consumo) |
| BESS | **1.200 MWh / 300 MW** (4 h autonomía) |
| Lote / construible | 84.000 m² / 20.000 m² huella |
| Plantas | 6 (de **-3 a +3**) + cubierta técnica |
| Área construida total | ≈ **150.000 m²** + galerías técnicas subterráneas |
| Clasificación | TIA-942 **Rated-4**, Uptime **Tier IV**, ISO 27001, NIST 800-53 high |

## Pisos y programa

```
+TECHO  Planta fotovoltaica 25.000 m² (5,5 MWp) + heliopuerto VFR + cooling
+3      Hotel de lujo + hotel tripulaciones + club ejecutivo + spa corporativo
+2      Centro de control DC, laboratorio IA, business center, oficinas tier-1
+1      Centro de convenciones tech, showrooms NVIDIA/Intel/AMD, simuladores
±0      Lobby principal, accesos, control vehicular, vestíbulos seguros
-1      Logística última milla robotizada, cold storage farma, parqueaderos VIP
-2      Security House (SOC + NOC + comando + reacción)
-3      Data Center hiperescala (300 MW IT)
SUB     Galerías técnicas, autogeneración, BESS, agua, combustibles
```

## Matriz energética (resumen — detalle en `docs/01-energia/`)

**No existe una solución 100% subterránea, 100% limpia, 100% in-situ a 300 MW** con tecnología comercial probada en Colombia hoy. Se propone matriz híbrida con ruta evolutiva a cero emisiones:

| Fuente | Capacidad | Ubicación | Limpio | Rol |
|---|---|---|---|---|
| Conexión SIN (EPM/ISA 230 kV) | 400 MW firmes | Subestación enterrada | Mix nacional ~70% renovable | Primaria |
| PPA renovable dedicado (eólica La Guajira + solar Cesar) | 300 MW promedio | Off-site, ruedo SIN | ✅ 100% | Primaria contractual |
| Cogeneración H₂ verde + biogás (turbinas aeroderivadas) | 200 MW | **Caverna subterránea** | ✅ tras transición | Autogeneración baseload |
| Fotovoltaica cubierta | 5,5 MWp | Techo | ✅ | Complemento diurno |
| BESS Li-ion (LFP) | 1.200 MWh / 300 MW | **Bóvedas subterráneas** | ✅ | Black-start + peak |
| Diesel HVO (renovable) N+2 | 450 MW | **Búnker subterráneo** | ✅ HVO 90% reducción | Respaldo crítico |
| Volantes de inercia (flywheels) | 60 MW × 30 s | Sala UPS -3 | ✅ | Transitorio 0–30 s |
| Reservado **SMR** (futuro) | 2 × 77 MWe | Caverna preparada | ✅ | Opción 2032+ si regula |

**Disponibilidad objetivo:** 99,9999% (six-nines) ≈ 31,5 s/año de outage en carga TI.

## Inversión estimada (Clase 5 AACE, ±50%)

| Componente | USD |
|---|---|
| Data center 300 MW (shell + MEP + TI) | 4.500 M |
| Autogeneración subterránea + BESS | 1.800 M |
| Edificio mixto (5 plantas restantes + techo PV) | 950 M |
| Subestación, conexión SIN, servidumbres | 280 M |
| Excavación + obra civil subterránea | 620 M |
| Licencias, ingeniería, contingencia 20% | 1.630 M |
| **Total CAPEX orden de magnitud** | **≈ USD 9.800 M** |

## Cronograma macro

| Fase | Duración | Hito |
|---|---|---|
| 0. Prefactibilidad y EIA | 12 meses | Términos de referencia ANLA |
| 1. Licenciamiento + ingeniería básica | 18 meses | Licencia ANLA, conexión UPME |
| 2. Obra civil subterránea (excavación 30 m) | 24 meses | Casco -3 entregado |
| 3. MEP DC fase 1 (100 MW) | 18 meses | Energización fase 1 |
| 4. Edificio sobre rasante + amenities | 24 meses (paralelo) | Recibo +3 |
| 5. Fases 2 y 3 DC (+200 MW) | 24 meses | 300 MW operativos |
| **Total a plena carga** | **~7–8 años** | Operación completa |

## Riesgos críticos top 5

1. **Aeronáutico:** restricciones de altura y emisiones térmicas/penachos cerca de JMC pueden limitar chimeneas y torres de enfriamiento.
2. **Ambiental:** fuentes hídricas, humedales y POT Rionegro restringen huella y descargas. EIA puede tomar 18–30 meses.
3. **Conexión SIN:** disponibilidad de 400 MW firmes en STR/STN Oriente requiere refuerzos UPME que no son inmediatos.
4. **Geotecnia:** terreno volcánico (cenizas y flujos del Complejo Volcánico Ruiz-Tolima) puede complicar excavación a -30 m.
5. **Hídrico para enfriamiento:** 300 MW IT demanda ~9–18 ML/día si fuera evaporativo; hay que ir a **free-cooling + enfriamiento adiabático mínimo + circuitos cerrados**.

## Próximos pasos recomendados

1. Estudio de prefactibilidad geotécnica e hidrogeológica del lote.
2. Concepto técnico Aerocivil sobre alturas, emisiones y radioayudas.
3. Solicitud de punto de conexión a UPME (400 MW STR Oriente).
4. Términos de referencia ANLA para EIA del proyecto integrado.
5. Mesa con Alcaldía Rionegro: validación POT, plan parcial si aplica.
