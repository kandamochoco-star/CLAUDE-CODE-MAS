# Planta -3 — Data Center hiperescala 300 MW IT

## Concepto

Cuatro **data halls** independientes de **75 MW IT cada uno**, separados por muros REI 240, con utilities propios + utilities compartidos redundantes 2N+1. Diseño escalable por bloques de 25 MW.

## Distribución en planta (25.000 m²)

```
─────────────────────────────────────────────────────────────────────
│   Hall A 75 MW   │   Hall B 75 MW   │   Hall C 75 MW   │  Hall D │
│   3.500 m² IT    │   3.500 m² IT    │   3.500 m² IT    │  75 MW  │
│   (DLC + RDHX)   │   (DLC + RDHX)   │   (DLC + RDHX)   │ 3.500m² │
├──────────────────┼──────────────────┼──────────────────┼─────────┤
│ MMR-A · UPS A    │ Mech A · Elec A  │ Mech B · Elec B  │ MMR-B   │
│ Battery rooms    │ Pumps · Tanks    │ Pumps · Tanks    │ UPS B   │
├──────────────────┴──────────────────┴──────────────────┴─────────┤
│   Galerías técnicas A (Norte)  /  Galerías técnicas B (Sur)      │
│   Cables MT 34,5 kV · Fibra · Agua · Aire · Detección            │
─────────────────────────────────────────────────────────────────────
```

## Capacidad y densidad

| Parámetro | Valor |
|---|---|
| MW IT por hall | 75 MW |
| MW total | **300 MW** |
| Racks por hall (mix) | 600 racks (avg 125 kW/rack DLC + 25 kW/rack air) |
| Total racks | 2.400 |
| Densidad pico | hasta **150 kW/rack** en zonas DLC AI |
| Espacios técnicos | 30% del piso |
| Pasillos contención | Frío + caliente, contención total |

## Diseño TIA-942 Rated-4 / Uptime Tier IV

- **Cero puntos únicos de fallo** en cualquier sistema crítico.
- **Mantenimiento concurrente** (CM): cualquier componente puede ser servido sin afectar TI.
- **Tolerancia a fallos** (FT): cualquier fallo único no afecta TI.
- **2N+1** en eléctrica y mecánica crítica.
- **Compartimentación física** (no solo lógica) entre A y B.

## Cooling

### Tipos de zona por hall

| Zona | % del hall | Tecnología | Densidad |
|---|---|---|---|
| AI/HPC GPU | 50% | **Direct Liquid Cooling** (cold plate, agua W4 32–40 °C) | 80–150 kW/rack |
| Compute denso | 30% | **Rear Door Heat Exchanger** | 30–60 kW/rack |
| Almacenamiento + legacy | 20% | CRAH + contención | 5–15 kW/rack |

### CDU y plantas
- 16 **CDU (Coolant Distribution Unit)** por hall × 4 halls = 64 CDU.
- Plantas chillers + dry-coolers compartidas, descritas en `docs/03-arquitectura/02-mep-cooling-fire.md`.
- Recuperación de calor 50–55 °C → spa, hotel, snow-melt + posible DH urbano futuro.

## Eléctrico

- **Doble alimentación A/B** independiente desde la subestación GIS (-15 m).
- **UPS rotativo + batería + flywheel** 2N+1 por hall.
- **Distribución MT 34,5 kV** baja a transformadores secos en cada hall, salida BT 415 V (+ 380 V CC opcional).
- Tableros con monitorización por circuito + analítica IA para detección anómala.
- **Tableros tipo Powerbar** (ABB Smissline o equivalente) con módulos hot-swap.

## Seguridad

- **Acceso solo desde planta -2** Security House, vía 2 mantraps biométricos (huella + iris + tarjeta + PIN).
- **Jaulas internas** por cliente con sus propias cerraduras inteligentes (auditoría blockchain).
- **Cámaras IP** en cada pasillo con IA de detección (operaciones anómalas, EPI faltante).
- **Anti-tamper** sensores en racks de clientes premium.
- **Sin ventanas, sin conductos accesibles** desde exterior. Ventilación filtrada HEPA + carbón activado.
- **Detección sísmica + geofónica** en suelo y muros.

## Conectividad

- 2 **MMR (Meet-Me Rooms)** A y B, físicamente separadas, en extremos opuestos del hall.
- Cross-connects en jaulas de cobre + fibra MPO/MTP.
- Carrier-neutral: mínimo 6 carriers presentes.
- Latencia interna entre halls < 50 µs.

## Operación

- **DCIM** Schneider EcoStruxure / Vertiv Trellis con dashboards públicos para clientes (su jaula).
- **AIOps** con detección de drift térmico, predicción fallos disco/PSU, optimización flujo.
- **Personal:** turnos 24/7 con mínimo 4 técnicos certificados + remoto NOC en +2.
- **Ventanas de mantenimiento concurrente:** sin necesidad de avisar al cliente.

## Medio ambiente operativo

| Parámetro | Valor |
|---|---|
| Temperatura cold aisle | 22–27 °C (ASHRAE A1A) |
| HR | 30–70% |
| Polvo / partículas | ISO Clase 8 |
| Vibración fondo | < 0,1g |
| Ruido | < 85 dB(A) zona técnico, < 75 dB(A) sala |

## Resiliencia

- Aislamiento sísmico bajo cada hall (LRB).
- Resistencia a inundación: cota de fundación drenada activamente, sensores en losa.
- Anti-EMP: jaula de Faraday opcional para halls de cliente militar/gobierno.
- **Continuidad ante apagón nacional > 7 días** con cogen + HVO + BESS.
