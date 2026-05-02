# 02 — Premisas y criterios de diseño

## Premisas del cliente (input)

- 300 MW/h continuos (interpretado como **300 MW de carga TI continua**, equivalente a 2.628 GWh/año).
- Autogeneración **in situ y subterránea**.
- Sin riesgos de caídas de energía (objetivo: **≥ Tier IV / six-nines**).
- Matriz **lo más limpia posible** con respaldos.
- 20.000 m² disponibles de un lote de 84.000 m².
- Edificio contiguo de 6 plantas (-3 a +3), 25.000 m² por planta, **grado militar**.
- Programa por planta definido por el cliente (ver `docs/04-pisos/`).
- Cubierta del +3 con planta fotovoltaica de 25.000 m².
- Altitud 2.092–2.100 msnm.

## Criterios de diseño adoptados

### 1. Disponibilidad y redundancia

| Criterio | Valor |
|---|---|
| Disponibilidad TI | 99,9999% (≤ 31,5 s/año) |
| Redundancia eléctrica | **2N+1** (2 caminos activos + reserva) |
| Redundancia mecánica | **N+2** crítico, N+1 no crítico |
| Tiers | TIA-942 Rated-4 + Uptime Tier IV |
| Black-start | Autónomo desde BESS + flywheels + HVO |
| Tiempo de transferencia | 0 ms (UPS rotativo + estático en paralelo) |

### 2. Eficiencia

- **PUE objetivo anual: 1,15–1,20** (clima Rionegro: temp. media 17 °C, máx 25 °C → free-cooling > 8.000 h/año).
- **WUE objetivo: < 0,3 L/kWh** (circuitos cerrados, mínimo evaporativo).
- **CUE objetivo: < 0,15 kg CO₂e/kWh** en año 1, **0** en año 10 (ruta a net-zero).
- ERE (Energy Reuse Effectiveness): captar calor residual para amenities (+3 spa/hotel) y centro de convenciones.

### 3. Seguridad física (grado militar)

Adopción combinada de:
- **UFC 4-010-01** DoD Minimum Antiterrorism Standards for Buildings.
- **UFC 4-022-01** Security Engineering: Entry Control Facilities.
- **TIA-942-C** Rated-4 (compartimentación, fire, controles).
- **NIST SP 800-53 rev. 5** controles HIGH (físicos PE-1..PE-25).
- **ISO/IEC 27001 + 27002** SGSI.
- **CPNI** (UK Centre for Protection of National Infrastructure) — buenas prácticas perímetro.
- **SCIF** ICD-705 — para áreas sensibles del cliente militar/gobierno.

Capas (defensa en profundidad):
1. Perímetro exterior (84.000 m²): cercado anti-escalada, K12/M50 anti-vehículo, foso seco, CCTV térmico + radar.
2. Stand-off mínimo: 30 m de cualquier vía pública al edificio.
3. Capa intermedia: zona estéril 10 m, sensores sísmicos, detección de intrusos enterrados.
4. Envolvente edificio: muros RC4 (> 30 cm hormigón armado), ventanas blast-resistant (UFC GSA 3a/3b).
5. Zonas internas: SCIF, jaulas Faraday TEMPEST en NOC/SOC y data halls sensibles.
6. Núcleo: data halls -3 con air-gap, biometría multifactor, mantraps, ASR-rated doors.

### 4. Sismología y estructura

- Rionegro está en zona de **amenaza sísmica intermedia** (NSR-10, Aa=0,15g, Av=0,20g, suelo tipo C/D estimado).
- Diseño estructural: **NSR-10** + **ASCE 41-17** (rehabilitación/desempeño) + criterios **DoD UFC 3-310-04** anti-blast.
- Sótanos en hormigón armado masivo, pantallas de contención post-tensadas, losa fondo > 1,5 m con sub-drenaje.
- Aislamiento sísmico considerado en data halls -3 (apoyos elastoméricos LRB) para mantener equipos críticos en sismo de diseño.

### 5. Conectividad

- **Mínimo 4 carrier-neutral fiber entries**, en 4 cuadrantes geográficos diferentes, con caminos divergentes a POPs en Medellín y Bogotá.
- Cable submarino: latencia objetivo a Miami < 65 ms, Sao Paulo < 95 ms.
- Aviones: presencia carrier hotel en planta -2 con meet-me rooms cruzados.
- Capacidad inicial: 4 × 100 Tbps fiber pairs, escalable a 1 Pbps con CWDM/coherente 800G+.

### 6. Sostenibilidad y certificaciones

- LEED v4.1 BD+C **Platinum** (campus).
- BREEAM **Outstanding**.
- WELL Gold (zonas de hospitality y oficinas +2/+3).
- **Net-Zero** operacional año 10 (alineado SBTi 1.5 °C).
- Certificación **ISO 50001** energía, **ISO 14001** ambiental.
- **EU Code of Conduct for Data Centres** participación.

### 7. Continuidad y resiliencia

- Diseño contra escenarios:
  - Sismo Mw 6,5 a 30 km (reproduce daño 1999 Armenia).
  - Caída de red SIN > 72 h.
  - Erupción volcánica con ceniza (cuenca Ruiz-Tolima) → filtración HEPA + sellos.
  - Incidente cibernético + insider threat simultáneo.
  - Pandemia / aislamiento de personal 30 días.
- Reservas in-situ: combustible HVO 168 h, agua 96 h, alimentos personal crítico 30 días, oxígeno médico (heli + spa).

### 8. Aeronáutica (JMC)

- Lote dentro de superficies limitadoras de obstáculos del aeródromo.
- Coordinación obligatoria con **Aerocivil** y operador JMC (Airplan):
  - Concepto técnico de altura (RAC 154).
  - Estudio de penachos térmicos (chimeneas, cooling) — limitar velocidad de salida ≤ 4,3 m/s o reorientar.
  - Estudio de interferencia electromagnética con radioayudas (ILS, VOR, radar).
  - Iluminación y balizamiento RAC.
- **Heliopuerto en cubierta:** elevado privado, VFR diurno/nocturno, RAC 4.7. Útil para evac médica, ejecutivos, tripulaciones.

### 9. Hidrología y agua

- Captación: aljibe profundo + recolección lluvia (Rionegro 2.000 mm/año) — sistema aporta hasta 50% de agua de proceso.
- No descargas a quebradas: planta PTAR cerrada, reuso 95%.
- Reserva contra incendio: 2.500 m³ subterráneos, sistema VESDA + pre-action + agente limpio (Novec/3M alternative) en data halls.

### 10. Normativa colombiana de referencia

- **NSR-10** sismo-resistente.
- **RETIE / RETILAP** eléctrica.
- **NTC 2050** (código eléctrico).
- **POT Rionegro** (Acuerdo 002 de 2018 y modificaciones) — uso del suelo, retiros, alturas.
- **Ley 99/93 + Decreto 1076/2015** ambiental.
- **Ley 1715/2014 + 2099/2021** energías renovables.
- **CREG 030/2018** autogeneración a gran escala.
- **Resolución UPME 0703/2018** conexión al SIN.
- **RAC** Reglamento Aeronáutico Colombiano (partes 14, 154).
