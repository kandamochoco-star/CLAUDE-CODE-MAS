# 02 — Autogeneración subterránea: ingeniería civil y de proceso

## Objetivo

Alojar bajo tierra **200 MW de cogeneración H₂/biogás (o SOFC)**, **450 MW de respaldo HVO**, **1.200 MWh BESS** y subestación GIS 230/34,5 kV, integrados con el data center de la planta -3 mediante galerías técnicas blindadas.

## Esquema en planta (cota subterránea, lote 84.000 m²)

```
┌───────────────────────────────────────────────────────────────────┐
│ Lote 84.000 m² — perímetro de seguridad                           │
│                                                                   │
│   ┌──────────────────────────────┐    ┌──────────────────────┐    │
│   │ Edificio principal 6 plantas │    │ Caverna cogeneración │    │
│   │ (huella 25.000 m²)           │    │ (-25 m)              │    │
│   │                              │    │ 80 x 40 x 15 m       │    │
│   │  -3  Data Center 300 MW      │◄───►│ 200 MW H₂/biogás     │    │
│   │  -2  Security House          │    │ + recuperación calor │    │
│   │  -1  Logística               │    └──────┬───────────────┘    │
│   │  ±0  Lobby                   │           │                    │
│   │  +1  Convenciones            │    ┌──────┴───────────────┐    │
│   │  +2  Control / IA            │    │ Búnker HVO (-20 m)   │    │
│   │  +3  Hotel                   │    │ 5 salas, 15 × 30 MW  │    │
│   │  Techo  PV 25.000 m²         │    │ Tanques 3.000 m³ HVO │    │
│   └──────────────────────────────┘    └──────┬───────────────┘    │
│             │                                 │                   │
│             │ Galerías técnicas blindadas    │                   │
│             │ (2 caminos A/B, separados)     │                   │
│             │                                 │                   │
│   ┌─────────┴─────────┐         ┌────────────┴───────────┐        │
│   │ Subestación GIS   │         │ BESS — 6 bóvedas       │        │
│   │ (-15 m)           │         │ (-10 m) 200 MWh c/u    │        │
│   │ 230/34,5 kV       │         │ Compartimentadas F240  │        │
│   └───────────────────┘         └────────────────────────┘        │
│                                                                   │
│   Áreas no construidas (64.000 m²): zona estéril, paisajismo,     │
│   captación pluvial, bosque cortafuegos.                          │
└───────────────────────────────────────────────────────────────────┘
```

## Diseño de la caverna principal de cogeneración

| Parámetro | Valor |
|---|---|
| Cota | -25 m bajo rasante |
| Dimensiones útiles | 80 × 40 × 15 m (48.000 m³) |
| Excavación bruta | ≈ 65.000 m³ |
| Sostenimiento primario | Bulonado sistemático + shotcrete fibras 25 cm |
| Revestimiento final | Hormigón armado HF-50 / 80 cm + impermeabilización |
| Resistencia diseño | Sobrepresión interna 50 kPa (deflagración H₂) |
| Ventilación | 8 renovaciones/h, redundante, exhaust catalítico H₂ |
| Detección H₂ | sensores en techo cada 5 m, umbral 10% LIE |
| Drenaje | Pozo de bombeo doble + sumideros en pendiente 0,5% |
| Acceso vehicular | Rampa 1:8 desde patio técnico, puerta blast K12 |
| Acceso de equipos | Pozo vertical 6 × 6 m con grúa pórtico 100 t |

## Equipamiento

### Turbinas de gas (caso base)
- 2 × **GE LM6000 PF Sprint** o **Siemens SGT-A45** modificadas H₂.
- Nominal cada una: 50 MW eléctricos + ciclo combinado vapor 50 MW = **2 × 100 MW**.
- Modificación crítica: cámara de combustión **DLE H₂-ready** (hasta 100% H₂).
- Calor residual capturado por HRSG + turbina vapor → 60 MW térmicos útiles.

### Fuel cells SOFC (alternativa sin chimenea)
- 200 × Bloom Energy Server 1 MW (modulares).
- Sin combustión → sin NOx, sin penacho visible, ruido < 65 dB.
- Combustible: H₂ verde + biogás.
- Footprint mayor (~6.000 m² en caverna ampliada).

### Electrolizadores PEM (producción H₂)
- 50 MW capacidad inicial, 100 MW año 5.
- Alimentados con excedente PV + horarios valle PPA.
- Almacenamiento H₂: **caverna salina no disponible localmente** → alternativa: tanques tipo II/IV de fibra de carbono a 700 bar enterrados, 50 t H₂ ≈ 1.650 MWh equivalentes.

## Geotecnia y excavación

- Suelo esperado: depósitos volcánicos (cenizas, lapilli, flujos piroclásticos) + saprolito + roca andesítica/basáltica a >25 m.
- Estudio previo obligatorio: **20+ sondeos SPT/CPTu hasta 40 m**, 6 sondeos roca con RQD, ensayos triaxiales, permeabilidad in-situ.
- Riesgos: **napa freática alta** (Rionegro tiene humedales), **capas de ceniza inestables**, posibilidad de **flujos lahar** históricos.
- Métodos: muros pantalla profundos + jet grouting + bombeo well-point + losa fondo masiva con sub-presión hidráulica diseñada.

## Ventilación y seguridad de la caverna

- **Sistema de ventilación principal:** 4 ventiladores axiales 250.000 m³/h cada uno, redundancia 2N.
- **Modos de operación:**
  1. Normal: aporte 200.000 m³/h, extracción 240.000 m³/h (subpresión).
  2. Emergencia incendio: confinamiento + supresión por agente limpio.
  3. Fuga H₂: dilución forzada + corte combustible + venteo techo a chimenea de seguridad de 30 m con catalizador platino.
- **Detección:** H₂, CO, CO₂, NOx, temperatura, humo (VESDA), sísmica.
- **Supresión:** agua nebulizada para incendio combustible + N₂ inerte para electrónica.

## Galerías técnicas

- 2 galerías independientes A/B, separación mínima 30 m, profundidad -8 m.
- Sección 4 × 3 m, hormigón blindado, puertas blast cada 50 m.
- Contienen: cables MT, fibra óptica, agua chiller, agua HVO, gas H₂ (galería A solo si certificación ATEX), aire comprimido.
- Totalmente sensorizadas (DTS fibra distribuida temperatura, fugas, intrusión).

## Acceso y logística

- **Pozo de servicio principal:** 8 × 6 m, montacargas 40 t, conecta -25 a +0.
- **Rampa vehicular:** desde patio técnico exterior (lado norte del lote, lejos del público), pendiente 1:8, gálibo 4,5 m, puertas K12 escalonadas (mantrap vehicular).
- **Salidas de emergencia:** 4 escaleras blindadas independientes a superficie + 2 ascensores de bomberos.

## Refrigeración

- Cogen y data center comparten **planta de free-cooling** en cubierta (-3 a +3 vertical) + dry-coolers + adiabatic spray (uso mínimo).
- Circuito agua/glicol cerrado, BTU diferencial 12 °C.
- **Calor de recuperación:** vapor 8 bar → spa, hotel, snow-melt, regeneración deshumidificadores convenciones.

## Ruido y vibración

- Caverna a -25 m → atenuación natural > 60 dB.
- Cimentación de turbinas sobre **aisladores tipo Gerb** (acústicos + sísmicos).
- Objetivo en superficie: < 35 dB(A) nocturno (cumple Resolución 0627/2006 zona residencial cercana).
