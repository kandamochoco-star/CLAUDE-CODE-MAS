# Planta -1 — Logística última milla, cold storage y parqueaderos

## Programa

| Zona | m² | Función |
|---|---|---|
| Última milla robotizada (carriers) | 9.000 | DHL, FedEx, Amazon, Temu, Mercado Libre, etc. |
| Cold storage farmacéutico (GDP) | 4.500 | 2–8 °C y -25 °C, con validación |
| Parqueadero VIP / blindado | 4.000 | Clientes premium + ejecutivos |
| Parqueadero servicio | 2.500 | Carriers, taxis, valet |
| Estaciones de carga EV | 1.500 | 60 puntos AC + 20 DC fast |
| Andenes camión + dock-levelers | 2.000 | 24 puertas tipo cross-dock |
| Áreas técnicas + circulación | 1.500 | |
| **Total** | **25.000** | |

## Última milla robotizada

### Concepto

Espacio modular alquilable a empresas logísticas, con sistemas comunes de robotización (no propietarios), operados como **servicio compartido** (RaaS — Robotics as a Service).

### Equipamiento estándar
- **AS/RS** (Automated Storage and Retrieval System) Kardex / AutoStore — almacenamiento denso 3D.
- **AMRs** (Autonomous Mobile Robots) tipo Locus, Geek+ o 6 River Systems para picking goods-to-person.
- **Bandas transportadoras + sortation** Beumer / Vanderlande, capacidad 25.000 paquetes/h.
- **Estaciones puttwall** para clasificación última milla por barrio Rionegro/Medellín.
- **Flota in-house de vehículos eléctricos** para envío local con 60 puntos de carga.
- **Drones de delivery** (proyecto piloto, requiere aprobación Aerocivil RPAS) — pad en patio exterior, no cubierta.

### Modelo comercial
- Espacios desde 200 m² con docks dedicados, conectividad fibra, energía + cold opcional.
- Tarifa: arriendo + cargo por uso de robótica + cargo por sortation + energía.
- Carriers traen sus WMS, integran via API a la **plataforma común "TablazoOS"** del campus.

### Conectividad
- Acceso vehicular **directo desde túnel logístico oeste** sin pasar por lobby público.
- Doble vía con sentido único, dock-levelers automáticos.
- Pre-clearance de aduana en zonas designadas (acuerdo con DIAN para zona franca extendida).

## Cold storage farmacéutico

### Estándares
- **GDP** (Good Distribution Practice) EU + WHO.
- **VFAR** (vacunas) — alineado con red de frío INVIMA.
- **FDA 21 CFR Part 11** registros electrónicos.
- Validación térmica con mapping inicial + recurrente.

### Cámaras
| Cámara | T | Volumen | Aplicación |
|---|---|---|---|
| Frío 1 | 2–8 °C | 1.500 m² | Vacunas, biológicos, insulinas |
| Frío 2 | 2–8 °C | 1.000 m² | Reserva + cuarentena |
| Congelado | -20 a -25 °C | 800 m² | Plasma, biológicos congelados |
| Ultra-frío | -70 °C | 200 m² | mRNA vacunas, terapias avanzadas |
| Antesalas | 15–25 °C | 1.000 m² | Etiquetado, despacho |

### Equipamiento
- Sistema redundante de refrigeración N+1 con monitoreo continuo IoT.
- **UPS dedicado para refrigeración** (no comparte con DC).
- Mappers tiempo real + logger Bluetooth en cada palet.
- Acceso restringido por biometría + cámaras de cadena de custodia.
- Backup de N₂ líquido para ultra-frío en falla.

## Parqueaderos especiales

### VIP / blindado
- 80 plazas, separación 2,8 m × 6 m (vehículos blindados).
- Carga EV en cada plaza (Tipo 2, 22 kW + 2 fast 150 kW).
- Acceso por túnel directo con K12 mantrap.
- Cámaras LPR + escáner de bajos.

### Servicio
- 200 plazas, valet con app.
- 4 racks bicicletas/scooters + cargadores.

### Carga EV
- 60 puntos AC 22 kW para personal/clientes.
- 20 DC fast 150 kW para ride-hailing y carriers EV.
- Smart charging integrado al BESS (V2G compatible).

## Acceso y seguridad

- Mantraps vehiculares K12 con escáner subterráneo.
- Cámaras + IA detección de armas/conductas anómalas.
- Cumplimiento UFC 4-022-01 entry control.
- Drenaje de combustibles + sistema de espuma en caso de incendio vehicular.
- Compartimentación REI 180 entre logística, cold y parqueadero.
