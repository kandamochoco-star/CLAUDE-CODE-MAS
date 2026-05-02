# 01 — Arquitectura y estructura

## Concepto arquitectónico

**Búnker tecnológico vertical con corona de hospitalidad.**  
Las funciones críticas (data center, security house, autogeneración) viven bajo tierra, blindadas y sismoaisladas. Las funciones públicas y comerciales (logística, convenciones, control, hotel) emergen sobre rasante en una composición sobria, biofílica y contextualizada al paisaje del Oriente Antioqueño.

**Lenguaje:** muros gruesos en hormigón visto pulido, fachadas ventiladas en cerámica gres tipo "tablazo" (referencia local), grandes voladizos en niveles superiores, jardines verticales de especies nativas, lucernarios con shading dinámico.

## Sección esquemática

```
                          HELIPORT
        ╔══════════════════════════════════════════════╗   +28 m
        ║  TECHO  PV 25.000 m² + COOLING + HELI         ║
        ╠══════════════════════════════════════════════╣   +24 m
        ║  +3   HOTEL LUJO + CLUB + SPA + TRIPULAC.    ║
        ╠══════════════════════════════════════════════╣   +20 m
        ║  +2   CONTROL DC + IA LAB + BUSINESS         ║
        ╠══════════════════════════════════════════════╣   +16 m
        ║  +1   CONVENCIONES + SHOWROOMS + SIM         ║
        ╠══════════════════════════════════════════════╣   +12 m
        ║  ±0   LOBBY · ACCESOS · MANTRAPS              ║   ±0 RAS.
        ╠══════════════════════════════════════════════╣
        ║  -1   LOGÍSTICA · COLD · PARQUEADERO VIP     ║   -5 m
        ╠══════════════════════════════════════════════╣
        ║  -2   SECURITY HOUSE (SOC/NOC/Comando)       ║   -10 m
        ╠══════════════════════════════════════════════╣
        ║  -3   DATA CENTER 300 MW IT (4 halls)        ║   -16 m
        ╠══════════════════════════════════════════════╣
        ║  -4   GALERÍAS TÉCNICAS · TANQUES · PTAR     ║   -22 m
        ╠══════════════════════════════════════════════╣
        ║  -5   COGEN · BESS · GIS · HVO  (cavernas    ║   -25 m
        ║       extendidas bajo el lote)                ║   -30 m
        ╚══════════════════════════════════════════════╝
```

## Estructura

### Sistema estructural
- **Subterráneo** (-3 a -5): muros pantalla portantes + losas postensadas + columnas RC en grilla 12 × 12 m (data halls modulares).
- **Sobre rasante** (±0 a +3): núcleo central rígido en hormigón armado + perímetro mixto acero-hormigón con grandes luces (18 m libres en convenciones).
- **Cubierta:** estructura ligera reticular en acero para PV + cooling + helipuerto.

### Materiales
- Hormigón **autocompactante de alta resistencia HF-50 a HF-80** en zonas blindadas.
- Acero estructural **A572 Gr 50 / S355**.
- Refuerzo **fibras metálicas + fibras estructurales** en losas masivas.

### Cargas de diseño
- Sobrecarga data hall **-3:** 15 kN/m² (rack + racks compactos GPU).
- Sobrecarga **+1 convenciones / showrooms:** 7,5 kN/m².
- Sobrecarga **+3 hotel:** 2 kN/m² + cargas concentradas piscina, spa.
- Cubierta + heliopuerto: cargas dinámicas por aterrizaje 5,5 t × factor 1,5.
- **Sismo:** NSR-10 + factor de importancia I=1,5 (esencial) + verificación con espectro de sitio probabilístico (PSHA).
- **Viento:** NSR-10 + ASCE 7-22 zona expuesta.
- **Anti-blast:** UFC 3-340-02 — explosión vehicular VBIED a 30 m, presión incidente reducida a < 7 kPa en envolvente.

### Aislamiento sísmico data halls -3
- Apoyos **LRB (Lead Rubber Bearings)** o **friction pendulum triple** bajo cada columna del nivel -3 que soporta data halls.
- Periodo objetivo aislado T ≈ 3,5 s.
- Reducción aceleración pico esperada > 70%.
- **Continuidad operativa garantizada hasta sismo MCE (2.475 años retorno).**

### Resistencia al fuego
- Compartimentación REI 240 entre data halls.
- Núcleos de evacuación REI 180.
- Recubrimientos pasivos: mortero proyectado, pinturas intumescentes, conductos sellados (firestop).

## Envolvente

### Sobre rasante
- **Fachada ventilada** con paneles cerámicos gres porcelánico 12 mm + lana mineral 20 cm + barrera HPV + muro técnico hormigón 25 cm.
- Carpinterías: **vidrio blast-resistant GSA 3a/3b** (trilaminado + película), valor U < 1,2 W/m²K.
- Cubierta verde extensiva en zonas no PV (atenuación térmica + pluvial).

### Bajo rasante
- Muros pantalla 1,2 m hormigón estanco.
- Impermeabilización doble lámina PVC + bentonita.
- Drenaje perimetral con bombeo redundante.
- Capa interior técnica con muros sándwich (hormigón + lana de roca + acero galvanizado) en data halls para control acústico-térmico.

## Movilidad interior

### Núcleos verticales
| Núcleo | Función | Capacidad |
|---|---|---|
| N1 (centro) | Público hotel/convenciones | 4 ascensores 1.600 kg + 2 escaleras protegidas |
| N2 (lateral O) | Servicio + carga | 2 monta-camillas + montacargas 5 t |
| N3 (lateral E) | Restringido seguridad/data | 2 ascensores blindados biométricos |
| N4 (técnico) | Solo personal MEP | 1 ascensor industrial 10 t + escalera |
| Pozo logístico exterior | Mercancías -1 / vehículos cogen | Montacargas 40 t |

### Helipuerto (cubierta)
- Acceso solo desde N1 con biometría + escolta.

### Accesos vehiculares
- **Acceso público:** vía sur — control K8 + cámaras LPR.
- **Acceso logístico/cold:** vía oeste — túnel descendente directo a -1, control K12.
- **Acceso técnico/HVO/cogen:** vía norte — control K12 mantrap + escolta obligada.
- **Acceso seguridad/VIP blindado:** vía este — túnel a -2, full mantrap, trampas hidráulicas.

## Bioclimática y eficiencia

- **Free-cooling natural** aprovechando T media 17 °C → economizadores aire-aire en cooling de data halls > 7.500 h/año.
- **Chimenea solar** en núcleo central facilita ventilación natural pisos +1/+2/+3.
- **Lucernarios cenitales** con vidrio electrocrómico en convenciones y lobby.
- **Recuperación de calor cogen** alimenta SPA, hotel, snow-melt, ACS.
- **Iluminación LED + DALI + circadiana** en zonas hospitality.
- **Vegetación nativa** en patios + jardines verticales reduce isla de calor y ofrece confort.

## Modelo BIM y digital twin

- Toda la documentación de diseño en **Revit + IFC 4.3** con LOD 400 en MEP.
- **Digital twin operacional** integrando BIM + IoT + DCIM (Schneider EcoStruxure / Vertiv Trellis) + SCADA + BMS Niagara.
- Simulación CFD continua de flujos térmicos en data halls.
