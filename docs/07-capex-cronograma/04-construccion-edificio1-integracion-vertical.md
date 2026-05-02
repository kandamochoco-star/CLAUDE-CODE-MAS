# Construcción Edificio #1 — Mole grado militar 150.000 m² con integración vertical

> Aterrizado al mercado **Rionegro, Antioquia**, costos 2025, aplicando integración vertical estilo grupo empresarial antioqueño (mismo conglomerado: cementera + concreto + construcción + ingeniería + acabados + hospitality + tech + financiero).

## 1. Programa de áreas a construir

| Nivel | Función | m² | Especificación |
|---|---|---|---|
| +3 | Hotel + crew + club + spa | 25.200 | 5★ luxury |
| +2 | Control DC + IA + business + offices | 25.200 | Class A+ con SCIF |
| +1 | Lobby + Convenciones + simuladores | 25.200 | Convenciones high-end con doble altura |
| -1 | Logística + cold + parking + portal | 25.200 | Industrial mid-spec + cold storage |
| -2 | Security House | 25.200 | Hardened + RF shielding |
| -3 | Data Center 300 MW | 25.200 | Tier IV shell + sismoaislamiento |
| -4/-5 | Galerías técnicas + cavernas | ~40.000 | Hardened, alojan cogen y BESS |
| Cubierta técnica | Cooling + antenas + helipuerto satélite | 5.000 | Estructural reforzada |
| **Total construido** | | **≈ 191.000 m²** | (150.000 visible + 40.000 galerías) |

## 2. Costos de mercado Rionegro 2025 (sin integración vertical)

Basado en tarifas de constructoras antioqueñas tier-1 (Conconcreto, Construcciones El Cóndor, Coninsa Ramón H, Marval, Amarilo) para proyectos comparables del Oriente Antioqueño y Zona Franca Rionegro.

### Tarifas de referencia ($/m² USD, todo incluido — materiales + obra de mano + supervisión + utilidad contratista 15%)

| Tipología | $/m² | COP/m² @ 4.200 |
|---|---|---|
| Sótano vivienda/parqueadero estándar | 480 | 2,0 M |
| Sótano industrial high-spec (bodega cold) | 920 | 3,9 M |
| Sótano hardened/grado militar | 1.550 | 6,5 M |
| Sótano DC Tier IV shell + sismoaislamiento | 2.150 | 9,0 M |
| Caverna profunda (>20 m) shell hardened | 1.700 | 7,1 M |
| Sobre rasante oficina A | 950 | 4,0 M |
| Sobre rasante lab/clean room | 1.250 | 5,3 M |
| Sobre rasante hotel 5★ | 1.580 | 6,6 M |
| Sobre rasante convenciones high-end + AV | 1.880 | 7,9 M |

### Cálculo bruto Edificio #1 (sin integración vertical)

| Zona | m² | $/m² | M USD |
|---|---|---|---|
| **Movimiento de tierras + excavación** (200.000 m³ + 50.000 m³ caverna) | — | — | 28 |
| **Muros pantalla + anclajes + bombeo** | — | — | 42 |
| **Cimentación + losa fondo masiva + waterproof** | — | — | 38 |
| **-3 DC Tier IV shell** | 25.200 | 2.150 | 54,2 |
| Aislamiento sísmico data halls (LRB) | — | — | 22 |
| **-2 Security House hardened + RF shielding + SCIF** | 25.200 | 1.550 | 39,1 |
| **-1 Logística + cold storage shell + portal** | 25.200 | 920 | 23,2 |
| **Caverna -4/-5 (cogen + BESS + HVO)** | 40.000 | 1.700 | 68,0 |
| **+1 Lobby + Convenciones high-end** | 25.200 | 1.880 | 47,4 |
| **+2 Control + IA + offices** | 25.200 | 1.250 | 31,5 |
| **+3 Hotel 5★ + spa + club acabados** | 25.200 | 1.580 | 39,8 |
| **Cubierta técnica + helipuerto** | 5.000 | 1.500 | 7,5 |
| **Fachada blast-resistant + envolvente** (30.000 m² fachada) | — | 850 | 25,5 |
| **MEP general edificio** (HVAC, hidrosanitario, eléctrico no DC) | 150.000 | 380 | 57,0 |
| **Compartimentación REI + protección incendio** | — | — | 28,0 |
| **Acabados especiales** (auditorios AV, hotel FF&E, spa, simuladores fit-out) | — | — | 95,0 |
| **Vialidad interna + paisajismo + perímetro seguridad** | — | — | 32,0 |
| **Ascensores + montacargas + escaleras mecánicas** (15 unidades) | — | — | 18,0 |
| **SUBTOTAL OBRA DIRECTA** | | | **695,2** |
| Diseño + ingeniería + dirección de obra (8%) | — | — | 55,6 |
| Imprevistos y contingencias (10%) | — | — | 75,1 |
| **TOTAL CONSTRUCCIÓN SIN INTEGRACIÓN VERTICAL** | | | **≈ 826 M USD** |

## 3. Aplicando integración vertical

> Modelo asumido: el grupo del cliente posee (o controla con participación mayoritaria) entidades en cada eslabón de la cadena. Caso de estudio similar: Grupo Argos / Cementos Argos + Construcciones El Cóndor + Conconcreto + Corona + Sura + Bancolombia (nivel GEA), o un grupo familiar consolidado tipo Grupo Bolívar + Constructora Bolívar.

### Eslabones que aplican a este proyecto

```
┌──────────────────────────────────────────────────────────────────┐
│                    GRUPO EMPRESARIAL DEL CLIENTE                   │
└──────────────────────────────────────────────────────────────────┘
       │
       ├─► CEMENTERA + AGREGADOS + CONCRETO PREMEZCLADO
       │     (planta de batching on-site dedicada)
       │
       ├─► PREFABRICADOS DE CONCRETO + ESTRUCTURAS METÁLICAS
       │     (prelosas, paneles muro, escaleras, tuberías técnicas)
       │
       ├─► CARPINTERÍA + VIDRIO + ALUMINIO
       │     (fachada ventilada, ventanería blast-resistant)
       │
       ├─► CERÁMICA + SANITARIO + ACABADOS DUROS
       │     (fachada, baños, hotel, club, spa)
       │
       ├─► ELÉCTRICO + ILUMINACIÓN + AUTOMATIZACIÓN
       │     (BMS, KNX, DALI, control de accesos)
       │
       ├─► CONSTRUCTORA GENERAL (in-house)
       │     (gerencia integral, mano de obra, equipo amarillo)
       │
       ├─► FIRMA DE INGENIERÍA + ARQUITECTURA
       │     (diseño, BIM, supervisión técnica)
       │
       ├─► OPERADOR HOSPITALITY (hotel + F&B + club)
       │     (FF&E, marca, programación, operación)
       │
       ├─► EMPRESA DE SEGURIDAD (SOC + perímetro + táctico)
       │     (Security House operacional)
       │
       ├─► INTEGRADOR TECH + DC OPERATOR
       │     (Tier IV, NOC, conectividad)
       │
       ├─► LOGÍSTICA + EV FLEET (shuttle JMC, last-mile)
       │
       ├─► ASEGURADORA + BANCO + FONDO INMOBILIARIO
       │     (financiamiento + insurance + lease-back)
       │
       └─► ENERGÍA (cogen + BESS + comercializadora)
             (operación cogen + venta excedente SIN)
```

### Ahorros por eslabón

| Eslabón | Concepto del ahorro | % ahorro sobre rubro | Impacto sobre CAPEX construcción |
|---|---|---|---|
| Cemento + agregados + concreto | Eliminación markup + transporte interno + planta in-situ | 12% sobre concreto (≈ 30% del CAPEX) | -3,6% global |
| Acero refuerzo + estructuras | Compra grupal + posible fabricación interna | 7% sobre acero (≈ 18% del CAPEX) | -1,3% global |
| Carpintería + fachada + vidrio | Eliminación intermediarios + optimización industrial | 12% sobre rubro (≈ 12% del CAPEX) | -1,4% global |
| Cerámica + acabados duros | Suministro directo desde cementera/cerámica grupo | 10% sobre rubro (≈ 8% del CAPEX) | -0,8% global |
| Eléctrico + automatización + iluminación | Empresa de tecnología/automatización propia | 10% sobre rubro (≈ 12% del CAPEX) | -1,2% global |
| Constructora in-house (sin contratista general) | Eliminación margen 12–18% + administración propia | 14% sobre obra directa | **-9,5% global** |
| Diseño + ingeniería | Firma propia (sin licitación tradicional) | 30% sobre rubro (≈ 7% del CAPEX) | -2,1% global |
| Hospitality FF&E (hotel + spa + club) | Operador propio compra al por mayor + economies | 15% sobre FF&E (≈ 5% del CAPEX) | -0,75% global |
| Security systems integration | Integrador propio | 8% sobre rubro (≈ 4% del CAPEX) | -0,3% global |
| Logística + almacén materiales | Inventario JIT desde bodega del grupo | 3% global | -3,0% global |
| Curva de aprendizaje de fases (mismo equipo) | Eficiencia operativa creciente | 2% global | -2,0% global |
| Financiación interna (fondo + banco grupo) | Costo capital reducido + gestión integrada | (no afecta CAPEX, sí TIR) | — |
| **Ahorro total estimado** | | | **≈ 25,9%** |

> En la práctica, los grupos verticalmente integrados de Antioquia logran **18–28% de ahorro** sobre proyectos comparables licitados al mercado. Conservador para este modelo: **22%**.

### Resultado con integración vertical

```
826 M USD × (1 - 0,22) = 644 M USD
```

| | M USD |
|---|---|
| **CAPEX construcción Edificio #1 sin integración vertical** | 826 |
| Ahorro por integración vertical (22% conservador) | -182 |
| **CAPEX construcción Edificio #1 CON integración vertical** | **≈ 644** |
| (Rango optimista 25–28% ahorro: 595–620 M) | 595–620 |

## 4. Beneficios adicionales de la integración vertical (más allá del CAPEX)

| Beneficio | Impacto |
|---|---|
| **Control del cronograma** | Reducción de ~15–20% en tiempo de obra (no esperas de proveedores externos, no licitaciones). De ~30 meses (mercado) a ~24 meses (vertical). |
| **Calidad uniforme** | Estándares del grupo aplicados desde diseño hasta acabado, sin pérdidas en interfases. |
| **Reducción de risk premium** | Sin variación de precios por material (proveedores son del grupo) → cobertura natural contra inflación. |
| **Captura de valor en cada eslabón** | Las utilidades de cada subsidiaria del grupo (cementera, constructora, FF&E, etc.) son **utilidad consolidada del grupo**. El "ahorro" del 22% en CAPEX es además **utilidad recuperada** en otras líneas. |
| **Mejor gestión de incidentes** | Si falla algo en obra, el grupo tiene relación de mando directo con cada subsidiario, no negociación entre empresas externas. |
| **Apalancamiento financiero** | Con banco/fondo del grupo, project finance puede negociar tasas mejores y condiciones más flexibles. |

## 5. Modelo de capture de valor consolidado del grupo

Para una construcción de 826 M USD valor de mercado:

| Línea | Margen del grupo |
|---|---|
| Cementera vende concreto al grupo: utilidad ~25% sobre $80 M de concreto | 20 M |
| Acero: utilidad ~10% sobre $130 M de acero | 13 M |
| Acabados (cerámica, vidrio, FF&E): utilidad ~18% sobre $100 M | 18 M |
| Constructora (mano de obra + gestión): utilidad ~12% sobre $300 M de obra | 36 M |
| Diseño + ingeniería: utilidad ~25% sobre $55 M | 14 M |
| Hospitality FF&E + operador: utilidad ~15% sobre $50 M | 7,5 M |
| Tech + security integration: utilidad ~12% sobre $40 M | 4,8 M |
| **Utilidad consolidada del grupo en la propia obra** | **≈ 113 M USD** |

**Punto clave:** un constructor externo cobraría 826 M USD y se llevaría ~120–150 M de utilidad fuera del grupo. Con integración vertical, el **grupo paga 644 M USD efectivos** y además **captura 113 M de utilidad** en sus propias subsidiarias = costo neto real **~531 M USD**.

```
Sin integración vertical:    paga 826  →  costo neto 826
Con integración vertical:    paga 644  →  costo neto 644 - 113 = 531
                                          ───────────────────────
                                          AHORRO ECONÓMICO REAL: 295 M USD
                                          (35,7% sobre el valor de mercado)
```

## 6. Cronograma optimizado con integración vertical

| Fase | Mercado tradicional | Integración vertical | Ahorro |
|---|---|---|---|
| Diseño detallado | 14 meses | 9 meses | -5 |
| Excavación + civil estructural | 22 meses | 18 meses | -4 |
| Obra gris + envolvente | 18 meses | 15 meses | -3 |
| MEP + sistemas | 14 meses | 12 meses | -2 |
| Acabados + FF&E | 10 meses | 7 meses | -3 |
| Comisionamiento + Tier IV cert. | 6 meses | 5 meses | -1 |
| **Total a apertura** | **38 meses (paralelo)** | **30 meses (paralelo)** | **-8 meses** |

8 meses menos = 8 meses de **ingresos anticipados del data center + hotel** = aproximadamente **200–300 M USD adicionales en flujo de caja** (a 25–35 M USD/mes en ingresos parciales en operación temprana).

## 7. Cuadro consolidado de Edificio #1

| | M USD |
|---|---|
| CAPEX construcción mercado abierto | 826 |
| **CAPEX con integración vertical (efectivo)** | **644** |
| Captura utilidad subsidiarias del grupo | -113 |
| **Costo neto real para el grupo** | **531** |
| **Ahorro vs mercado abierto** | **295 (35,7%)** |
| Ingresos anticipados por reducción cronograma | +200 a +300 |
| **Beneficio total integración vertical** | **≈ 500–600 M USD** |

## 8. Integración con el modelo financiero global

Recalibrando el CAPEX total del proyecto:

| Componente | Mercado abierto | Con integración vertical |
|---|---|---|
| Sistema energético (cogen + BESS + etc.) | 660 | 660 (no aplica integración total — equipos importados) |
| **Edificio #1 construcción** | **826** | **644** |
| DC fit-out (MEP, racks, fibra) | 950 | 950 (equipos especializados, integración limitada) |
| Last-mile robótica + cold storage equipos | 195 | 195 |
| Convenciones AV + simuladores | 200 | 200 |
| Hotel FF&E | 140 | 119 (-15% por operador propio) |
| Security house equipos | 165 | 149 (-10% por integrador propio) |
| Conectividad + redes | 80 | 76 (-5%) |
| Predio | 80 | 80 |
| Licencias + EIA + ingeniería externa | 220 | 165 (-25% por firma propia) |
| Contingencia | 770 | 600 |
| **CAPEX TOTAL** | **5.286** | **≈ 4.838** |
| Captura utilidad subsidiarias | — | -150 |
| **Costo neto real del grupo** | **5.286** | **≈ 4.690** |

**Conclusión:** la integración vertical reduce el CAPEX efectivo del grupo de ~$5.300 M a **~$4.700 M netos** (12% de ahorro consolidado), además de acelerar el cronograma 8 meses.

Esto **mejora la TIR del proyecto del 14% al ~17–18%** y la TIR de equity del 22% al **~28–30%**.

## 9. Riesgos de la integración vertical y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Dependencia única del grupo (sin benchmark de mercado) | Auditoría externa de costos cada fase |
| Conflicto de interés en pricing intra-grupo | Pricing a "arm's length" con auditoría tributaria (DIAN exige precios de transferencia) |
| Capacidad limitada del grupo para proyecto de esta escala | Refuerzo con socios estratégicos en eslabones que excedan capacidad (e.g., construcción puede requerir UT con segundo constructor) |
| Riesgo de monocultura de talento (mismo equipo en todo) | Contratar especialistas externos en data center + Aerocivil + EIA |
| Concentración de riesgo financiero en el grupo | Project finance externo + bonos verdes diversifican riesgo |

## 10. Resumen ejecutivo de la pregunta

| Pregunta del cliente | Respuesta |
|---|---|
| ¿Funcionan las 5 LM6000 + 2 STG 60 MW? | **Sí.** 410 MW netos. Steam balance perfecto. Eficiencia 54,7% LHV / 84% con cogen. Ver `docs/01-energia/07-confirmacion-tecnica-cogen.md`. |
| Costo del sistema completo (cogen + BESS + H₂ + HVO + UPS + recuperación + control) | **~660 M USD** (rango 580–660 según fases) |
| Costo construcción Edificio #1 (mole 150.000 m² grado militar) sin integración | **~826 M USD** valor de mercado Rionegro 2025 |
| Costo construcción CON integración vertical | **~644 M USD** (-22%) |
| Costo neto real para el grupo (con captura de utilidades subsidiarias) | **~531 M USD** (-35,7% vs mercado) |
| Beneficio adicional por aceleración cronograma | **+200 a +300 M USD** en ingresos anticipados |
| **CAPEX consolidado total proyecto** | **~4.700 M USD netos al grupo** (vs 5.300 M sin integración) |
| Mejora en TIR | **+3 a +4 puntos** (de 14% a 17–18% proyecto; de 22% a 28–30% equity) |
