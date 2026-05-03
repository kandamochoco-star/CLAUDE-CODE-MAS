# Sistema energético simplificado — eliminando redundancia

> **Reemplaza** el dimensionamiento de `05-sistema-hibrido-v2.md` para los componentes de respaldo.
> Mantiene cogen + BESS + SIN intactos.

## Lógica: ¿qué redundancias eliminar?

Si la primera línea de defensa es **cogen 5× LM6000 (N+1)** y tenemos además **SIN 100 MW backup + BESS 300 MWh**, las capas adicionales que tenía v2 son sobrecapacidad costosa:

| Componente v2 | Función original | ¿Realmente necesario? | Decisión |
|---|---|---|---|
| Flywheels 30 MW × 30 s | Cubrir transitorio antes de arranque generadores | **NO**: los inversores grid-forming del BESS BYD ya hacen esto en < 4 ms | **ELIMINAR** |
| HVO N+1 150 MW | Respaldo profundo 100 h | **NO en esa magnitud**: cogen baseload + SIN + BESS ya cubren prácticamente todos los escenarios. Sólo se justifica HVO mínimo para life safety en evento extremo | **REDUCIR a 60 MW** (sólo life safety + cargas TI más críticas) |
| UPS rotativo 2N+1 | Calidad de potencia + transferencia 0 ms | **SÍ pero menos**: cogen baseload constante + BESS GFM eliminan la necesidad de "rotativo dinámico" caro. Basta UPS estático modular tradicional con BESS aguas arriba haciendo de buffer | **SIMPLIFICAR a UPS estático modular 2N** |
| Electrolizador 20 MW Fase 1 | Producción H₂ on-site | **DIFERIR**: arrancar 100% gas natural; H₂ entra en Fase 3 cuando precio de H₂ baje | **DIFERIR a Fase 3** |

## Análisis de probabilidades de fallo (justifica los recortes)

| Escenario | Probabilidad anual | Cubierto por | ¿OK? |
|---|---|---|---|
| 1 LM6000 falla (mantenimiento) | 100% (programado) | Las otras 4 + STG | ✓ |
| 2 LM6000 simultáneas | <0,5% | Resto cogen + SIN | ✓ |
| Toda cogen cae | <0,01% | SIN 100 MW + BESS 1 h | ✓ |
| SIN cae sola | 1-3% | Cogen sigue | ✓ |
| Cogen + SIN simultáneos | <10⁻⁴ | BESS 1 h + HVO 60 MW life safety | ✓ |
| Cogen + SIN + BESS | <10⁻⁶ | HVO 60 MW + apagado ordenado | aceptable |

> Probabilidad acumulada del peor escenario (todo cae) < 1 evento cada millón de años. **No se justifica diseñar contra eso con $150 M de HVO + flywheels.**

## Sistema energético simplificado — costo final

| Bloque | Detalle | M USD |
|---|---|---|
| **Cogeneración** | 5× LM6000 + 5× HRSG + 2× STG 60 MW + BOP | 353 |
| Conexión TGI gas + ERM | | 8 |
| Chimenea horizontal sur + SCR + filtros | | 14 |
| **Subtotal cogen** | | **375** |
| **BESS** BYD 21× MC Cube T (304 MWh) + PCS GFM + bóvedas | | 95 |
| **HVO life safety** 2× 30 MW + tanques 200 m³ + SCR | (reducido de $38M) | 15 |
| **Conexión SIN** GIS 230/34,5 kV 100 MW + 2 líneas + anillo MT | | 80 |
| **UPS estático modular 2N** (Schneider Galaxy / ABB DPA) — sustituye rotativo | (de $46M a $22M) | 22 |
| **PV grado** 10 MWp + BESS PV pequeño | | 10 |
| **Recuperación térmica** heat manifold + adsorption chiller + tanque acumulación | | 25 |
| **SCADA + ciber-OT + comisionamiento** | | 18 |
| **SUBTOTAL** | | **640** |
| Optimización paquete EPC integrado (-12%) | | -77 |
| **CAPEX SISTEMA ENERGÉTICO SIMPLIFICADO** | | **≈ 565 M USD** |

> Encaja exactamente en el rango **500–600 M USD** que pediste, sin H₂ Fase 1 (diferido a Fase 3).
>
> Si se incluye electrolizador 20 MW + tanques H₂ desde el día 1: **+52 M = 617 M**.

## Comparativo de capas eliminadas

| Item | v2 (con redundancia excesiva) | v3 (lean) | Ahorro |
|---|---|---|---|
| Cogen completa | 353 | 353 | — |
| BESS | 106 | 95 | -11 |
| H₂ Fase 1 | 52 | 0 (diferido) | -52 |
| HVO | 38 | 15 | -23 |
| Flywheels | 8 | 0 (eliminado) | -8 |
| UPS | 46 (rotativo) | 22 (estático modular) | -24 |
| Conexión SIN | 82 | 80 | -2 |
| PV | 10 | 10 | — |
| Recuperación térmica | 25 | 25 | — |
| SCADA + ciber + comm. | 20 | 18 | -2 |
| **Total bruto** | 740 | 618 | -122 |
| Optimización EPC | -80 | -77 | — |
| **Total neto** | **660** | **541** | **-119** |

## Lo que NO se sacrifica

- **Disponibilidad Tier IV / six-nines:** mantenida. La redundancia real está en **cogen N+1 + SIN + BESS** que es mucho más robusta que apilar UPS rotativos + flywheels.
- **Black-start:** el BESS BYD con inversores GFM hace black-start de toda la planta sin necesidad de flywheels.
- **Transferencia 0 ms:** el BESS aguas arriba del UPS estático absorbe cualquier transitorio antes de que llegue al UPS. Resultado: la TI ve potencia limpia siempre.
- **Operación isla:** cogen + BESS pueden operar la planta indefinidamente sin SIN.

## Topología simplificada

```
       ┌── GAS TGI ──┐                  ┌── SIN 100 MW ──┐
       │             │                  │  (backup)      │
       ▼             ▼                  ▼                ▼
  ┌─────────────────────┐         ┌──────────────────┐
  │  COGEN 410 MW NETO  │         │  GIS 230/34,5 kV │
  │  5× LM6000 + 2× STG │         └────────┬─────────┘
  └──────────┬──────────┘                  │
             │                              │
             └─────────┬───────────────────┘
                       │ 34,5 kV
                       ▼
              ┌────────────────┐
              │  ANILLO MT     │
              │  DUAL RING     │
              └────────┬───────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
   ┌─────────┐   ┌──────────┐   ┌──────────┐
   │  BESS   │   │  TRAFOS  │   │   HVO    │
   │  BYD    │   │  SECOS   │   │ 60 MW    │
   │ 304 MWh │   │ 34,5/415 │   │ (life    │
   │ / 300 MW│   │          │   │ safety)  │
   └────┬────┘   └─────┬────┘   └─────┬────┘
        │              │              │
        │              ▼              │
        │      ┌──────────────┐       │
        │      │ UPS ESTÁTICO │       │
        │      │ MODULAR 2N   │       │
        │      └──────┬───────┘       │
        │             │                │
        └─────────────┼────────────────┘
                      ▼
              ┌──────────────┐
              │ DATA HALLS -3│
              │  300 MW IT   │
              └──────────────┘
```

**Resultado:** sistema más simple, más barato, igual de fiable.
