# 03 — Planta fotovoltaica de cubierta (+3, 25.000 m²)

## Recurso solar Rionegro

| Parámetro | Valor |
|---|---|
| Latitud | 6,15° N |
| Altitud | 2.100 msnm |
| GHI promedio | 4,8 kWh/m²/día (≈ 1.750 kWh/m²/año) |
| Días nubosos | ~140/año (mañanas claras, tardes con cobertura) |
| Performance Ratio esperado | 0,82 (alta irradiancia + temperatura moderada favorece eficiencia) |

## Dimensionamiento

| Parámetro | Valor |
|---|---|
| Área bruta cubierta | 25.000 m² |
| Área aprovechable (descontando heliopuerto, lucernarios, AC, pasarelas) | ≈ 18.000 m² |
| Densidad de potencia (módulos bifaciales 600 W, 2,8 m²) | 215 Wp/m² |
| Potencia instalada | **≈ 5,5 MWp** (bifacial ground albedo bajo en cubierta — limitado a monofacial salvo pérgola) |
| Generación anual | **≈ 9 GWh/año** |
| Cobertura del consumo total | < 0,5% |
| Cobertura de cargas auxiliares edificio +1/+3 (no DC) | ≈ 25% |

## Configuración

- **Módulos:** 9.150 paneles monocristalinos bifaciales 600 Wp, anti-PID, anti-LID, eficiencia ≥ 22,5%.
- **Estructura:** 
  - 60% **fija**, inclinación 10° hacia el Norte (latitud baja, optimiza generación anual).
  - 40% **pérgola elevada** sobre área social del +3 (sombra útil club/spa) con tracker monoaxial NS lento.
- **Inversores:** 6 × string inverters 1.500 V de 850 kW (SMA / Sungrow / Huawei), distribuidos para minimizar pérdidas DC.
- **Conexión:** salida en MT 34,5 kV al anillo subterráneo del campus, vía transformador elevador en planta técnica del +3.

## Integración con cubierta

El techo del +3 cumple **funciones múltiples**, no es solo PV:

```
TECHO +3 (25.000 m²) — distribución
─────────────────────────────────────────
Heliopuerto privado FATO + TLOF      1.500 m²
Torre de control / antenas           300 m²
Cooling towers (closed-loop)         2.500 m²
Cuartos eléctricos / inverters       400 m²
Captación pluvial / lucernarios spa  300 m²
Pasarelas mantenimiento + seguridad  1.000 m²
Pérgola PV social club/spa           4.000 m²
Campos PV principales                15.000 m²
─────────────────────────────────────────
```

## Almacenamiento dedicado

- BESS **dedicado a PV**: 22 MWh / 5,5 MW (4 h), independiente del BESS principal subterráneo.
- Aplanado de generación + soporte a microred del edificio en caso de aislamiento total.

## Resiliencia y seguridad

- Estructuras y módulos certificados a **viento 130 km/h** y **granizo 35 mm a 27 m/s**.
- Sistema **anti-incendio CC** (DC arc fault detection, rapid shutdown módulo a módulo según NFPA 70 690.12).
- Cableado MT y DC en bandejas de fibrocemento + pintura intumescente.
- Mantenimiento robotizado: 2 robots de limpieza autónomos sin agua (microfibra rotativa).
- Anti-deslumbramiento certificado para no afectar aproximaciones JMC (estudio FAA/Aerocivil con módulos de baja reflectividad < 1%).

## Impacto

- 9 GWh/año de energía limpia local.
- Sombreamiento útil reduce demanda HVAC del +3 en ~12%.
- Storytelling/branding: cubierta visible desde aproximación a JMC, refuerza posicionamiento sostenible.
