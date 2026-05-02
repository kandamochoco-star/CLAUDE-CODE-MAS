# Perímetro y control vehicular

## Perímetro del lote (84.000 m²)

### Capas

```
Exterior público
│
│  CAPA 1 — Bosque cortafuego + sensores enterrados (15 m)
│           Especies nativas, sin cobertura de visibilidad
│
│  CAPA 2 — Cerramiento perimetral 4,5 m
│           Malla anti-escalada + concertina + tres líneas
│           tensiómetros + fibra DTS detección intrusión
│
│  CAPA 3 — Foso seco + barrera vehicular pasiva K12/M50
│           (bolardos hidráulicos en puntos de acceso)
│
│  CAPA 4 — Zona estéril (10 m), iluminada,
│           cámaras térmicas + radar 360°
│
│  CAPA 5 — Cerramiento técnico edificio (RC4)
│           Acceso solo via mantraps controlados
│
│  CAPA 6 — Stand-off mínimo 30 m al edificio
│
Edificio
```

### Sensores
- **Fibra óptica enterrada DAS** (Distributed Acoustic Sensing) para detección de excavación, paso, vehículos.
- **Radares perímetro** (Magna Bsp / SpotterRF) cobertura 360° complementaria.
- **Cámaras térmicas + visible 4K** cada 50 m, con analítica IA on-edge.
- **Iluminación reactiva** (low-glow nominal, halógena potente al detectar).
- **Sensores sísmicos** geofónicos en cerramiento.
- **Drone-detection** RF (DJI AeroScope) + radar específico mini-UAS.

### Patrullaje
- 4 oficiales en patrullaje vehicular eléctrico continuo.
- 2 oficiales con K9 (perro detección explosivos + intruso).
- Rondas randomizadas (no patrón previsible).

## Accesos al lote

| Acceso | Función | Control |
|---|---|---|
| Sur (público) | Lobby, convenciones, hotel, oficinas | K8 + LPR + escáner sub-vehículo + biometría |
| Oeste (logístico) | Carriers, cold storage, mercancías | K12 mantrap + permiso 24 h previo + escolta |
| Norte (técnico) | HVO, suministros cogen, residuos peligrosos | K12 mantrap doble + escolta obligada |
| Este (VIP/blindado) | Ejecutivos, escoltas, gobierno | K12 mantrap + biometría + sweep 100% |
| Emergencia (NE) | Solo bomberos / EMS / fuerza pública | Bolardos hidráulicos remotos desde GSOC |

### Mantraps vehiculares
- Diseño **UFC 4-022-02** ECF (Entry Control Facility).
- Dos puertas en serie con espacio de inspección entre ellas.
- Escáner de bajo (under-vehicle scanner) automático con AI matching plates.
- Detector de explosivos (vapor + canino).
- Cámaras 360° + comunicación con conductor.
- Frenado pasivo (espigas hidráulicas + barreras K12).

## Stand-off blast

- **Mínimo 30 m** entre cualquier vehículo no inspeccionado y la envolvente del edificio.
- Verificación con análisis **TM 5-855-1** / **UFC 3-340-02** para presión incidente < 7 kPa en envolvente.
- Mobiliario urbano y jardinería diseñados como **barrera anti-vehículo** (jardineras certificadas K12, bancos rotos en ariete).

## Iluminación de seguridad

- **Norma NSF / IESNA RP-33** seguridad.
- 30 lux mínimo en perímetro, 50 lux en accesos, 100 lux en mantraps.
- Color CRI bajo (no atrae fauna) + sin contaminación al cielo (no afecta JMC visual).
- Backup en UPS dedicado seguridad.

## Comunicaciones

- Radio **TETRA cifrada** (Hytera / Sepura) para todos los oficiales.
- Repetidores redundantes 2N en cubierta y subterráneo.
- LTE PTT (Motorola WAVE) + Iridium satelital + Starlink como triple respaldo.
- Cámaras corporales en oficiales con streaming a GSOC.

## Procesos

- **Lista blanca** de visitantes 24 h previa (excepto emergencia).
- Verificación de identidad vs lista de cesación nacional + Interpol.
- Acompañamiento obligatorio para no-empleados en zonas restringidas.
- Auditoría de accesos en blockchain interno (inmutable).
- Briefing diario de inteligencia + amenaza nivel.
