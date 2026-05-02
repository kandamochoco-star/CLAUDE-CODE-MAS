# Security House — Planta -2

> Objetivo: **una de las security houses mejor diseñadas del mundo**, comparable con instalaciones de tier-1 banks (HSBC Global Operations Centers), gobierno (NSOC, JOC) y grandes hyperscalers (Google, Microsoft, Equinix).

## Filosofía de diseño

**Defensa en profundidad** combinando:
- **NIST SP 800-53 rev. 5** controles HIGH (PE, AC, AU, IR, SI).
- **ISO/IEC 27001 + 27002 + 27035** SGSI + IR.
- **TIA-942-C** Rated-4 zonas de seguridad.
- **UFC 4-010-01 / 4-022-01 / 4-022-03** DoD.
- **CPNI** (UK) buenas prácticas perímetro y SOC.
- **ICD-705** SCIF para áreas clasificadas.
- **NCA / OG-86** (sector eléctrico — protección activos críticos).
- **CCPA** Crisis Command Protocol Architecture (referencia interna).

## Zonificación interna (25.000 m²)

| Zona | m² | Detalle |
|---|---|---|
| **GSOC — Global Security Operations Center** | 2.500 | Vigilancia integral 24/7 |
| **NOC operacional + ciber-SOC** | 2.500 | Ciberseguridad + telemetría DC |
| **Centro de Mando y Control (C2) — crisis** | 1.500 | Activable en emergencia |
| **Centro de respuesta táctica + armería** | 2.000 | Personal de reacción + equipos |
| **Inteligencia + análisis** | 1.500 | OSINT + threat intel |
| **Identity Vault — control de accesos campus** | 800 | Emisión credenciales, biometría |
| **NOC backup gemelo de +2** | 1.500 | Redundancia operativa |
| **SCIF / TEMPEST rooms** | 1.000 | Áreas clasificadas (gobierno/militar) |
| **Logística forense + evidencias** | 800 | Custodia, cadena de evidencia |
| **Sala de servidores SH dedicados** | 1.500 | Aislada del DC -3, sistemas seguridad |
| **Salas de operaciones cliente** | 2.000 | Banks/gov pueden tener SOC propio aquí |
| **Áreas técnicas + circulación + mantraps** | 7.400 | |
| **Total** | **25.000** | |

## GSOC — Global Security Operations Center

### Layout
- **Video wall principal:** 16 × 6 m, 96 pantallas 4K HDR seamless, gestión video Black Box / Christie / Barco MultiTouch.
- **42 puestos operativos** en 3 turnos (14 simultáneos).
- Operadores especializados: cámara, drones, perímetro, IA analítica, llamadas, dispatcher, supervisor, comandante.
- 4 puestos jerárquicos elevados (gerente turno + 3 líderes).

### Capacidades
| Sistema | Plataforma |
|---|---|
| **PSIM** Physical Security Information Management | **Genetec Security Center / Milestone XProtect Corporate** |
| VMS (Video Management System) | Cámaras IP 4K + analítica IA on-edge (Bosch, Axis, Hanwha, Avigilon) |
| **Reconocimiento facial / LPR** | NEC NeoFace / Briefcam (uso conforme a Ley 1581 Habeas Data) |
| ACS (Access Control System) | Lenel S2 / Honeywell ProWatch / Genetec Synergis |
| **Detección de intrusos** | Senstar / Magal / Optex (perímetro), Bosch (interior) |
| **Drones** | Detección DJI AeroScope + DroneShield + sistema RF jamming (con permiso Mindefensa) |
| **Análisis IA** | Modelos propios + BriefCam / IntelliVision para búsqueda forense |
| Gestión de visitantes | HID / Genetec ClearID, integrado con biometría |
| C2 incidentes | Everbridge + ServiceNow SecOps + custom playbooks |
| **Comunicaciones** | Radio TETRA cifrada + LTE Push-to-Talk (Motorola WAVE) + crash phones |

### Cobertura
- **3.000 cámaras** internas y perímetro.
- 80 puntos de control de acceso + mantraps.
- 200 sensores perímetro (vibración, infrarrojo, microondas).
- 12 radares + 24 cámaras térmicas perímetro.
- 6 puntos drone-detection 360°.

## Ciber-SOC

### Capacidades MITRE ATT&CK alineadas
- Detección, contención, erradicación, recuperación.
- **Threat hunting** continuo + **purple teaming** mensual.
- **Incident Response** con SLA <15 min ack, <1 h contención P1.
- **Threat intelligence** propia + feeds (Mandiant, Recorded Future, MISP).

### Stack tecnológico
| Capa | Producto |
|---|---|
| **SIEM** | Splunk Enterprise Security / Microsoft Sentinel / Google Chronicle |
| **SOAR** | Palo Alto Cortex XSOAR / Splunk SOAR |
| **EDR/XDR** | CrowdStrike Falcon / SentinelOne / Microsoft Defender XDR |
| **NDR** | Darktrace / ExtraHop / Vectra AI |
| **Deception** | Illusive / Attivo / TrapX |
| **Vulnerability Mgmt** | Qualys / Tenable + workflows ServiceNow |
| **OT/ICS Security** | Claroty / Nozomi / Dragos para SCADA cogen + BMS |
| **Identity** | Microsoft Entra ID + Okta + CyberArk PAM + HashiCorp Vault |
| **DNS/Web/Email** | Cisco Umbrella + Mimecast + Proofpoint |
| **Forensics** | Magnet Axiom + EnCase + Velociraptor + Sandbox Joe / Any.run |
| **DLP** | Forcepoint / Microsoft Purview |
| **Gestión de claves** | HSM nivel **FIPS 140-3 Level 4** redundantes en SH-2 |

### Zero Trust
- ZTNA para todo el campus (Zscaler / Cloudflare / Cisco Duo).
- Microsegmentación de red (Illumio / Guardicore).
- Identity-based perimeter — nada se confía por estar "dentro".

## Centro de Mando y Control (C2)

### Activable en emergencias
- Sala de crisis con 30 puestos + war room ejecutiva 12 puestos.
- Línea directa a:
  - Policía Nacional (CAI Rionegro + DIPOL).
  - Fuerza Aérea (Cmdo Aéreo Combate 5 — CACOM 5 Rionegro está al lado).
  - DAS / Migración / DIAN.
  - Bomberos Rionegro + URES.
  - Cruz Roja + EMS hospital del campus.
- Conexión video-conferencia con autoridades + clientes globales.
- Backup energético dedicado + comunicaciones satelitales (Iridium + Starlink redundante).

## Centro de respuesta táctica + armería

### Personal
- Equipo táctico 24/7: **8 oficiales por turno**, formación en empresa de seguridad nivel-1 (ej. Securitas Critical, G4S Risk Management, Andes Security).
- **Línea de mando civil**, no militar (cumple Ley 1740 / Decreto 356/94).
- Capacitación: protección de infraestructura crítica, manejo de armas, primeros auxilios tácticos, antiterrorismo.

### Armería
- Cumplimiento **Decreto 1844/2003** + Industria Militar.
- Armas autorizadas (defensa civil + escolta corporativa): pistolas, escopetas, energéticos no letales.
- Bóveda blindada con doble custodia + auditoría.
- Munición separada en bóveda independiente.
- Sistema biométrico de retiro.
- Cámaras 24/7 + auditoría de cada movimiento.

### Equipo
- Chalecos NIJ III/III+ + cascos.
- Equipos no letales (taser, espuma OC, paintball CO₂ marcador).
- Drones de respuesta + cámaras corporales.
- Vehículos blindados y escolta (en patio exterior).
- Equipos médicos tácticos (TCCC).

## Inteligencia y análisis

- **OSINT** + monitoreo redes sociales, foros (incluido dark web).
- **Threat intel** clasificado por sector (banca, gobierno, energía, datos).
- **Insider threat** programa con UEBA (User Entity Behavior Analytics).
- Reportes ejecutivos + IA generativa para resumen de eventos.

## Identity Vault

- Emisión de credenciales del campus.
- Captura biométrica multi-factor: huella + iris + facial 3D + voz.
- Tarjetas inteligentes **PIV/CIV-compatible** (FIPS 201).
- Federación con clientes (Active Directory, Okta).
- Auditoría completa de altas/bajas/modificaciones.
- Integración HR + onboarding/offboarding automatizado.

## SCIF / TEMPEST rooms

- 4 salas blindadas RF, **certificación TEMPEST** (NSTISSAM TEMPEST/1-92 + SDIP-27).
- Cumplimiento **ICD-705** SCIF.
- Aire dedicado, separación física de servicios.
- Inspección regular de fugas EM.
- Bloqueo de teléfonos en accesos (pelican lockers + RF detectors).
- Solo cleared personnel, escolta obligada para no-cleared.

## Logística forense

- Sala con cadena de evidencia certificada.
- Forensics workstations Magnet/EnCase.
- Laboratorio de imagen disco (write-blockers).
- Bóveda de evidencias con custodia 24/7.

## Compartimentación física

- Muros REI 240 entre zonas.
- Mantraps biométricos entre zonas.
- Pasillos ciegos, sin línea de vista directa GSOC ↔ exterior.
- Aire dedicado por zona (no shared HVAC en críticas).
- UPS dedicado SH-2 (independiente del DC -3).
- **Resiliencia ante fallo del propio data center**: SH puede operar standalone con sistemas locales y fibra externa.

## Métricas operativas (KPIs)

| KPI | Objetivo |
|---|---|
| Tiempo respuesta a alarma P1 | < 30 s |
| Tiempo cierre incidente P1 cibernético | < 4 h |
| Falsos positivos analítica video | < 2% |
| Disponibilidad sistemas seguridad | 99,999% |
| Cobertura formación personal anual | 100% (mín 80 h/año) |
| Penetration test | Trimestral red team |
| Auditoría externa ISO 27001 | Anual |

## Cultura y procesos

- **Tabletop exercises** mensuales (ciber + físico + crisis).
- **Red team / blue team / purple team** trimestral.
- **Insider threat** programa con HR y legal.
- **Whistleblowing** anónimo + protección.
- **Background checks** DBS UK / FBI fingerprint nivel + Procuraduría/Contraloría/DIJIN para personal local.
- Revalidación cada 2 años.
