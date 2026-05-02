# Planta +2 — Centro de control DC, IA lab y business center

## Programa

| Zona | m² | Función |
|---|---|---|
| **NOC operacional DC** (público técnico) | 2.500 | Operaciones del data center, vigilancia infraestructura |
| **AI Training Lab** | 4.500 | Espacios para entrenamiento IA — clientes y campus |
| **Business center clientes -2** (jaulas premium) | 3.000 | Oficinas privadas para clientes del data center que requieren presencia local |
| **Oficinas tier-1: bancos, universidades, gobierno** | 5.000 | Hot-desking + privadas + war rooms |
| **Software house** (alquilable a startups y scaleups) | 4.000 | Coworking de alto nivel + oficinas privadas |
| **Salas de junta + war rooms** | 2.000 | 8 salas, 4 con SCIF/TEMPEST |
| Cafetería + áreas sociales + biofilia | 2.000 | |
| Servicios + circulación | 2.000 | |
| **Total** | **25.000** | |

> El **comando táctico de seguridad** (SOC global, control vehicular perímetro, CCTV reacción) reside en planta **-2 Security House**, no en +2. El +2 es el "cerebro operativo" del data center y los inquilinos. Hay enlace seguro con SH-2.

## NOC del data center

### Layout
- **Video wall** 12 × 4 m, 96 paneles 4K HDR, modo libre + presets.
- **24 puestos operativos** en 3 turnos, ergonomía Herman Miller / Steelcase.
- 4 salas de crisis adyacentes con conexión inmediata a SOC -2.
- **Backup NOC** físicamente separado en planta -2 (gemelo) — failover < 30 s.

### Stack
- **DCIM:** Schneider EcoStruxure / Vertiv Trellis / nlyte.
- **Observability:** Datadog / Grafana enterprise + Prometheus.
- **AIOps:** Dynatrace Davis AI / IBM Watson AIOps + modelos propios entrenados en lab adyacente.
- **SCADA-OT:** Schneider Geo / Wonderware / Siemens WinCC para cogen, BESS, GIS.
- **BMS:** Niagara N4 / Honeywell.
- **ITSM:** ServiceNow.
- Todos integrados con **air-gap** vía diodos de datos donde aplica.

## AI Training Lab

### Concepto
Laboratorio compartido de IA con acceso directo al data center -3:
- **Reservas de cómputo** sobre clusters NVIDIA H/B-series alojados en data halls.
- Conectividad **InfiniBand / NVLink** desde lab a sala dedicada en hall A o D.
- Estaciones de trabajo Quadro / Threadripper para etapas de prototipado.
- Salas de **anotación de datos** (humanos + IA assist).
- **Salas de pruebas robóticas** con celdas seguras (alianza con startups).
- **Programa académico** con UdeA, EAFIT, UPB para tesis y residencias.

### Ofertas comerciales
- Bancos: modelos de riesgo, fraude, scoring.
- Universidades: investigación con créditos compute subsidiados.
- Gobierno (Mintic, DNP, Mindefensa): soberanía de datos + IA local.
- Startups: programa "AI Foundry" con créditos.

## Business center (clientes -2)

Inquilinos del data center -3 que requieren presencia física:
- Jaulas físicas en -3 + oficinas correspondientes en +2.
- Acceso biométrico vinculado a ambas áreas.
- Salas de soporte a auditorías (jurídicas, técnicas, regulatorias).
- Concierge dedicado para visitas + agenda.

## Bancos, universidades, gobierno

### Bancos (3.000 m² estimados internos)
- Operaciones core, mesas de trading, salas de continuidad de negocio (BCP).
- **Latencia ultrabaja** al data center -3 (<100 µs) → ideal para HFT, core banking.
- Cumplimiento **PCI-DSS** + **SARLAFT** + **Circular 007 SuperFinanciera**.

### Universidades
- Sedes corporativas para programas de posgrado (MBA, MSc IA, ciberseguridad).
- Cátedras patrocinadas por marcas tech del +1.
- Aula magna 200 personas + breakout rooms.

### Gobierno
- Espacio para entidades que requieran **soberanía de datos** (CCIT, MinTIC, Min Defensa).
- SCIF (ICD-705) para datos clasificados.
- Conectividad GovNet dedicada.

## Software house / coworking premium

- 600 puestos hot-desk + 80 oficinas privadas (4–25 puestos).
- Salas de pitch, demo days, eventos.
- Café de barista + cocina + lockers + duchas.
- Servicios "tech-as-a-service": GitHub Enterprise, AWS/GCP/Azure créditos, Stripe.
- Programa de aceleración 12 meses con mentoría de inquilinos del piso.

## SCIF y TEMPEST

- 4 salas de junta blindadas RF (jaulas Faraday) con certificación TEMPEST/SDIP-27.
- Aire dedicado, sin penetraciones de servicios externos.
- Bloqueo de teléfonos celulares en accesos.
- Auditoría continua de emisiones EMI.

## Conectividad

- Fibra dedicada al data center (latencia µs).
- WiFi 6E + 5G privado.
- LAN segregada por inquilino (VLAN + SDN microsegmentación).
- Zero Trust Network Access (ZTNA) para todos.

## Acceso

- Lobby +2 con biometría (huella + reconocimiento facial + acreditación).
- Registro previo via app para visitantes.
- Acompañamiento obligatorio en zonas restringidas.
- Auditoría completa en SOC -2.
