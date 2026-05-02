# 02 — MEP, cooling y protección contra incendios

## HVAC general

| Zona | Sistema | Set-point | Notas |
|---|---|---|---|
| Data halls -3 | Free-cooling indirecto + RDHX trasero + DLC líquido en GPU racks | 22–27 °C cold aisle, 70% HR | ASHRAE A1A |
| Security house -2 | VRF + UMA con redundancia 2N, presurización mantraps | 22 °C / 50% HR | NIST PE-13 |
| Logística -1 | Cold storage 2–8 °C farma + cámara -25 °C; resto VRF | Variable | Farma GDP |
| Lobby ±0 | UMA central con free-cooling | 22 °C | High-comfort |
| Convenciones +1 | UMAs modulares c/HRV + suelo radiante reversible | 22 °C / 45% HR | Acústica NC30 |
| Control +2 | VRF + redundancia + sobrepresión positiva | 22 °C / 50% HR | Salas TEMPEST aire dedicado |
| Hotel +3 | Sistema 4 tubos fancoils + UMA con HR + recuperación calor | 22 °C dormitorio, spa 28 °C | WELL Gold |

## Cooling principal del data center

### Estrategia híbrida
1. **Direct Liquid Cooling (DLC)** para racks de alta densidad (>30 kW/rack, GPU NVIDIA H/B-series, custom AI):
   - CDU por fila, agua a 32–40 °C de entrada (W4 ASHRAE), retorna 50–55 °C.
   - **Reuso de calor** a hospitality y snow-melt (calor 50 °C utilizable para spa).
2. **Rear Door Heat Exchangers (RDHX)** para racks 15–30 kW.
3. **CRAH + contención pasillo frío** para racks legacy < 15 kW.

### Plantas de enfriamiento
- **6 chillers absorción + free-cooling** 12 MW c/u, redundancia N+2.
- **Dry-coolers en cubierta:** 32 unidades 1,5 MW c/u, free-cooling > 8.000 h/año en Rionegro.
- **Spray adiabático opcional** (solo días extremos > 23 °C exterior, < 2% del tiempo).
- **Loop secundario:** agua + glicol propilenglicol 25%, ΔT 12 °C.

### Eficiencia
- **PUE objetivo anual: 1,15** (best-in-class, posible por clima).
- **WUE: < 0,2 L/kWh** (free-cooling aire predominante).

## Hidráulica

### Agua potable
- Aljibe profundo + acueducto Rionegro (back-up).
- Almacenamiento subterráneo 1.500 m³ + presurización con grupos redundantes.

### Agua de proceso (cooling)
- Loop cerrado 12.000 m³ glicolado, reposición mínima.
- Tanque de inercia subterráneo 2.500 m³ — actúa como **almacén térmico** (pre-enfriado nocturno).

### PTAR
- Tratamiento biológico secundario + UF + UV + osmosis para reuso (sanitarios + cooling makeup + riego).
- Capacidad: 250 m³/día.

### Reserva contra incendio
- Tanque dedicado 2.500 m³ + 2 grupos UL/FM diesel + uno eléctrico.

## Protección contra incendios

### Detección
- **VESDA** (aspiración temprana) en data halls, security house, salas eléctricas.
- Detectores ópticos + iónicos redundantes.
- Cámaras térmicas con IA en cavernas cogen y bóvedas BESS.

### Supresión
| Zona | Sistema |
|---|---|
| Data halls -3 | **Pre-action doble interlock** + agente limpio Novec 1230 (o FK-5-1-12) en zonas críticas |
| Cogen caverna | Agua nebulizada + N₂ inerte + corte combustible automático |
| Búnker HVO | Espuma AFFF fluor-free + diluvio |
| Bóvedas BESS | **Agua + aerosol K** + N₂ inerte (control thermal runaway Li-ion) — diseño NFPA 855 |
| Galerías técnicas | Rociadores + corte automático compartimentos |
| Hotel + convenciones | Rociadores tipo NFPA 13 + extintores |
| Cocinas (hotel/club) | Sistema químico húmedo NFPA 96 |
| Helipuerto | Monitor espuma 1.500 L/min + 2 hidrantes |

### Compartimentación
- **REI 240** entre data halls, salas UPS, salas eléctricas críticas.
- **REI 180** núcleos de evacuación.
- **REI 120** general.
- Sellos cortafuego en todas las penetraciones (Hilti / 3M Firestop).

### Evacuación
- Tiempo objetivo evacuación + escape: 10 min para data center, 6 min para hotel.
- Pasillos presurizados, señalización fotoluminiscente + dinámica LED.
- Puntos de encuentro exteriores cubiertos.

## Eléctrico interior (resumen)

- 2N+1 en distribución crítica.
- Dos caminos A/B físicamente separados desde MT a PDU/RPP.
- Tableros TN-S, monitorización analítica por circuito (Schneider PowerLogic / ABB).
- Iluminación: 100% LED, control DALI, sensores presencia + luz natural.
- Tomas técnicas: 415 V/240 V CA + 380/48 V CC en data halls modernos.

## Comunicaciones

- **Cuatro entradas de fibra** independientes en 4 cuadrantes geográficos.
- **2 meet-me rooms** (MMR-A y MMR-B) en planta -2, separadas, redundantes.
- LAN interno 800G/400G espina-hoja con segregación VLAN/SDN.
- WiFi 6E/7 en hospitality, **bloqueo RF activo** en SCIF (TEMPEST).
- DAS 5G privado neutro a operadores Tigo/Claro/Movistar/WOM.

## Seguridad MEP

- **Air-gap** redes OT (BMS, SCADA, DCIM) vs IT cliente.
- Diodos de datos unidireccionales hacia SOC para telemetría OT.
- Firmware whitelisting en PLC/RTU.
- Auditoría continua IEC 62443 SL3.
