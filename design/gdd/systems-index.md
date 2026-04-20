# Systems Index: 7 Wonders Digital — Core Loop

> **Status**: Draft
> **Created**: 2026-04-19
> **Last Updated**: 2026-04-19
> **Source Concept**: design/gdd/game-concept.md

---

## Overview

7 Wonders Digital es una adaptación web de un juego de mesa con mecánica central de card drafting simultáneo en tiempo real. Sus sistemas se dividen en cuatro grupos: (1) datos del juego (definiciones de cartas y Maravillas), (2) motor de reglas (validar construcción, calcular recursos, gestionar turnos), (3) networking en tiempo real (coordinar el reveal simultáneo entre clientes), y (4) UI (presentar el estado del juego con transparencia total al jugador). El mayor riesgo técnico es el **Reveal Coordinator** — el protocolo que garantiza que todos los jugadores revelen su elección al mismo tiempo. El mayor riesgo de datos es el **Construction Validator** que debe manejar recursos opcionales ("1 Arcilla o 1 Mineral"). Todo lo demás depende de que estos dos funcionen correctamente.

Los tres pilares que guían cada decisión de diseño de sistema:
1. **El Reveal es el Juego** — la sincronización del reveal simultáneo es innegociable
2. **Transparencia de Estado** — la UI muestra proactivamente todo lo que el jugador necesita saber
3. **Cero Fricción de Reglas** — la app aplica el reglamento; el jugador solo estrategiza

---

## Systems Enumeration

| # | Sistema | Categoría | Prioridad | Estado | Design Doc | Depende de |
|---|---------|-----------|-----------|--------|------------|------------|
| 1 | Game State Model | Core | MVP | Not Started | — | — |
| 2 | Card Data (inferred) | Core | MVP | Not Started | — | — |
| 3 | Wonder Data (inferred) | Core | MVP | Not Started | — | — |
| 4 | Deck Builder (inferred) | Gameplay | MVP | Not Started | — | Card Data, Wonder Data, Game State Model |
| 5 | Hand Manager (inferred) | Gameplay | MVP | Not Started | — | Game State Model |
| 6 | Turn / Game Flow (inferred) | Gameplay | MVP | Not Started | — | Game State Model, Hand Manager |
| 7 | Resource Calculator (inferred) | Gameplay | MVP | Not Started | — | Game State Model, Card Data |
| 8 | Construction Validator (inferred) | Gameplay | MVP | Not Started | — | Resource Calculator, Card Data, Game State Model |
| 9 | Commerce UI Data (inferred) | Gameplay | MVP | Not Started | — | Resource Calculator, Game State Model |
| 10 | Wonder System | Gameplay | MVP | Not Started | — | Wonder Data, Construction Validator, Game State Model |
| 11 | Military Resolution | Gameplay | MVP | Not Started | — | Game State Model |
| 12 | Scoring Engine | Gameplay | MVP | Not Started | — | Game State Model |
| 13 | Socket.io Room Manager (inferred) | Core | MVP | Not Started | — | Game State Model |
| 14 | Reveal Coordinator (inferred) | Core | MVP | Not Started | — | Socket.io Room Manager, Game State Model |
| 15 | State Sync Engine (inferred) | Core | MVP | Not Started | — | Socket.io Room Manager, Game State Model |
| 16 | Persistence Layer (inferred) | Persistence | MVP | Not Started | — | Game State Model, Socket.io Room Manager |
| 17 | Card Drafting | Gameplay | MVP | Not Started | — | Hand Manager, Turn/Game Flow, Reveal Coordinator, Construction Validator |
| 18 | Comercio | Gameplay | MVP | Not Started | — | Commerce UI Data, Construction Validator |
| 19 | Ciudad Builder (inferred) | Gameplay | MVP | Not Started | — | Construction Validator, Card Data |
| 20 | Lobby / Room | Core | MVP | Not Started | — | Socket.io Room Manager, Persistence Layer |
| 21 | Lobby UI (inferred) | UI | MVP | Not Started | — | Lobby / Room |
| 22 | Hand Display (inferred) | UI | MVP | Not Started | — | Card Drafting, Commerce UI Data |
| 23 | City Tableau (inferred) | UI | MVP | Not Started | — | Ciudad Builder, Card Data |
| 24 | Commerce Dialog (inferred) | UI | MVP | Not Started | — | Comercio, Commerce UI Data |
| 25 | Wonder Board Display (inferred) | UI | MVP | Not Started | — | Wonder System, Wonder Data |
| 26 | Reveal Display (inferred) | UI | MVP | Not Started | — | Reveal Coordinator, Card Drafting |
| 27 | Military Resolution Display (inferred) | UI | MVP | Not Started | — | Military Resolution |
| 28 | Scoring Screen (inferred) | UI | MVP | Not Started | — | Scoring Engine |
| 29 | Waiting Indicator (inferred) | UI | MVP | Not Started | — | Reveal Coordinator, State Sync Engine |

> **Nota Tier 2 (Ages II+III, ciencia, Guilds, 4-7 jugadores):** Los mismos sistemas del MVP se expanden — no se agregan sistemas nuevos sino que se amplía el scope de Card Data, Deck Builder, Scoring Engine (fórmula cuadrática de ciencia), Military Resolution (tokens +3/+5), y Wonder System (efectos completos de todas las Maravillas).

---

## Categories

| Categoría | Descripción |
|-----------|-------------|
| **Core** | Sistemas de infraestructura base (Game State, Networking, Room Manager) |
| **Gameplay** | Motor de reglas del juego (validación, cálculo de recursos, turnos) |
| **Persistence** | Serialización de estado para reconexión mid-game |
| **UI** | Pantallas y componentes que presentan el estado al jugador |

---

## Priority Tiers

| Tier | Definición | Contenido en este proyecto |
|------|------------|---------------------------|
| **MVP** | Loop central funcional: draft simultáneo + Age I + 3 jugadores | Los 29 sistemas listados |
| **Tier 2** | Juego completo: Age I+II+III + ciencia + Guilds + 4-7 jugadores | Expansión del scope de sistemas existentes |
| **Tier 3** | Maravillas lado B + variante 2 jugadores | Ciudad Libre logic, Wonder side B effects |
| **Full Vision** | Expansión Leaders | Draft de líderes pre-Age I |

---

## Dependency Map

### Foundation Layer (sin dependencias — diseñar primero)

1. **Game State Model** — los contratos de datos TypeScript (`GameState`, `PlayerState`, `Card`) que todos los demás sistemas usan. Un cambio aquí rompe todo; debe definirse bien desde el principio.
2. **Card Data** — ~70 registros de cartas de Age I con nombre, tipo, costo, efecto, cadenas y requisito de jugadores. Datos puros sin lógica.
3. **Wonder Data** — 7 tableros de Maravilla lado A: recurso inicial, costos y efectos de etapas. 21 registros.

### Core Layer (depende de Foundation)

1. **Resource Calculator** — depende de: Game State Model, Card Data
2. **Deck Builder** — depende de: Card Data, Wonder Data, Game State Model
3. **Hand Manager** — depende de: Game State Model
4. **Turn / Game Flow** — depende de: Game State Model, Hand Manager
5. **Military Resolution** — depende de: Game State Model
6. **Scoring Engine** — depende de: Game State Model
7. **Socket.io Room Manager** — depende de: Game State Model
8. **Persistence Layer** — depende de: Game State Model, Socket.io Room Manager

### Feature Layer (depende de Core)

1. **Construction Validator** — depende de: Resource Calculator, Card Data, Game State Model
2. **Reveal Coordinator** — depende de: Socket.io Room Manager, Game State Model
3. **State Sync Engine** — depende de: Socket.io Room Manager, Game State Model
4. **Wonder System** — depende de: Wonder Data, Construction Validator, Game State Model
5. **Commerce UI Data** — depende de: Resource Calculator, Game State Model
6. **Comercio** — depende de: Commerce UI Data, Construction Validator
7. **Ciudad Builder** — depende de: Construction Validator, Card Data
8. **Card Drafting** — depende de: Hand Manager, Turn/Game Flow, Reveal Coordinator, Construction Validator
9. **Lobby / Room** — depende de: Socket.io Room Manager, Persistence Layer

### Presentation Layer (wraps gameplay systems)

1. **Lobby UI** — depende de: Lobby / Room
2. **Hand Display** — depende de: Card Drafting, Commerce UI Data
3. **City Tableau** — depende de: Ciudad Builder, Card Data
4. **Commerce Dialog** — depende de: Comercio, Commerce UI Data
5. **Wonder Board Display** — depende de: Wonder System, Wonder Data
6. **Reveal Display** — depende de: Reveal Coordinator, Card Drafting
7. **Military Resolution Display** — depende de: Military Resolution
8. **Scoring Screen** — depende de: Scoring Engine
9. **Waiting Indicator** — depende de: Reveal Coordinator, State Sync Engine

---

## Recommended Design Order

Combina orden de dependencias + prioridad. Los sistemas en el mismo nivel de dependencia pueden diseñarse en paralelo.

| Orden | Sistema | Capa | Esfuerzo | Por qué en este orden |
|-------|---------|------|----------|-----------------------|
| 1 | Game State Model | Foundation | S | Todo depende de estas interfaces — definirlas primero evita retrabajos en cascada |
| 2 | Card Data | Foundation | M | ~70 cartas de Age I; sin esto el Deck Builder y el Validator no pueden definir sus reglas |
| 3 | Wonder Data | Foundation | S | 7 Maravillas lado A; necesario para que Wonder System y Deck Builder sean concretos |
| 4 | Resource Calculator | Core | M | Base del Construction Validator — el caso de recursos opcionales ("1 Arcilla O 1 Mineral") es la parte más sutil |
| 5 | Construction Validator | Core/Feature | L | El sistema más complejo del motor de reglas: recursos propios + opcionales + comercio + cadenas. **Alta prioridad de prototipo** |
| 6 | Deck Builder | Core | S | Una vez que Card Data existe, construir el mazo por Age y nº de jugadores es mecánico |
| 7 | Hand Manager | Core | S | Rastrear manos y pasar en la dirección correcta — lógica sencilla pero crítica para el draft |
| 8 | Turn / Game Flow | Core | M | Orquesta fases del turno y transición entre Ages; diseñar después de Hand Manager |
| 9 | Reveal Coordinator | Feature | M | El protocolo "esperar a todos antes de revelar" — el riesgo técnico #1. **Alta prioridad de prototipo** |
| 10 | State Sync Engine | Feature | M | Broadcast del estado autoritativo del servidor a clientes; se diseña junto a Reveal Coordinator |
| 11 | Socket.io Room Manager | Core | M | Infraestructura de salas; puede diseñarse en paralelo con Turn/Game Flow |
| 12 | Commerce UI Data | Feature | S | Exponer recursos de vecinos y costos — diseñar antes de Commerce Dialog |
| 13 | Comercio | Feature | M | Las reglas completas de cuándo y cómo comprar recursos a vecinos |
| 14 | Wonder System | Feature | M | Etapas, costos, y efectos de las Maravillas lado A en Age I |
| 15 | Military Resolution | Core | S | Lógica pura: comparar escudos, asignar fichas; bien especificado en las reglas |
| 16 | Scoring Engine (MVP) | Core | S | MVP: cartas azules + fichas militares + monedas÷3. Simple en Tier 1 |
| 17 | Ciudad Builder | Feature | S | Registrar cartas construidas por tipo; depende del Validator |
| 18 | Card Drafting | Feature | M | El flujo completo de un turno draft — orquesta todos los sistemas anteriores |
| 19 | Persistence Layer | Core | M | Serialización al DB; diseñar después de que GameState esté estable |
| 20 | Lobby / Room | Feature | M | Crear/unirse por código + gestionar lista de jugadores pre-game |
| 21 | Lobby UI | Presentation | S | Pantalla de entrada; depende del Lobby/Room system |
| 22 | Hand Display | Presentation | M | Componente central del juego — mostrar cartas con detalle, acciones disponibles |
| 23 | City Tableau | Presentation | M | Ciudad del jugador — filas de cartas por color, ciudad de vecinos visible |
| 24 | Wonder Board Display | Presentation | S | Tablero de Maravilla con etapas construidas/pendientes |
| 25 | Commerce Dialog | Presentation | M | Modal de comercio — mostrar recursos de vecinos, costo calculado, confirmar compra |
| 26 | Waiting Indicator | Presentation | S | ¿Quién ya eligió? ¿Quién falta? (sin revelar qué eligieron) |
| 27 | Reveal Display | Presentation | M | Animación del reveal — el momento central del juego, debe sentirse dramático |
| 28 | Military Resolution Display | Presentation | S | Comparación de escudos y asignación de fichas al final del Age |
| 29 | Scoring Screen | Presentation | S | Tabla de puntos breakdown por categoría |

*Esfuerzo: S = 1 sesión de diseño · M = 2-3 sesiones · L = 4+ sesiones*

---

## Circular Dependencies

Ninguna dependencia circular detectada. El grafo es un DAG (Directed Acyclic Graph) limpio — los datos fluyen siempre desde Foundation → Core → Feature → Presentation.

---

## High-Risk Systems

| Sistema | Tipo de Riesgo | Descripción | Mitigación |
|---------|---------------|-------------|------------|
| **Construction Validator** | Técnico + Diseño | Los recursos opcionales ("1 Arcilla O 1 Mineral") requieren probar todas las combinaciones posibles para determinar si el jugador puede construir. Con múltiples cartas opcionales la complejidad combinatoria crece. | Prototipar el algoritmo de resolución de recursos opcionales antes de comenzar el diseño de sistemas dependientes. Ver `7wonders-rules.md` sección "Recursos opcionales". |
| **Reveal Coordinator** | Técnico | Garantizar que todos los clientes revelen simultáneamente requiere un protocolo de ready-state robusto. Si un jugador tarda o se desconecta, el juego queda bloqueado. | Prototipar con Socket.io en aislamiento antes de integrarlo con Card Drafting. Definir timeout explícito (ej: 60s auto-discard). |
| **Game State Model** | Diseño | Un schema de GameState mal definido requiere refactors en cascada en todos los sistemas. Difícil de cambiar una vez que múltiples sistemas lo usan. | Diseñar con todas las interfaces necesarias para Age I antes de comenzar cualquier implementación. Usar TypeScript strict mode. |
| **Card Data** | Scope | ~70 cartas de Age I con costos, efectos, cadenas y requisitos de jugadores es trabajo significativo de data entry. Errores en los datos son bugs de gameplay invisibles. | Usar `7wonders-rules.md` como fuente de verdad. Escribir tests de validación sobre los datos (ej: todas las cartas de Age I tienen type definido). |

---

## Progress Tracker

| Métrica | Cuenta |
|---------|--------|
| Total sistemas identificados | 29 |
| Design docs comenzados | 0 |
| Design docs en revisión | 0 |
| Design docs aprobados | 0 |
| Sistemas MVP diseñados | 0 / 29 |

---

## Next Steps

- [ ] Diseñar sistemas en orden de la tabla Recommended Design Order
- [ ] Comenzar por: **Game State Model** (`/design-system game-state-model`)
- [ ] Prototipar **Construction Validator** y **Reveal Coordinator** temprano — no esperar a que estén completamente diseñados para validar que el approach técnico funciona
- [ ] Ejecutar `/design-review design/gdd/[sistema].md` después de cada GDD
- [ ] Ejecutar `/gate-check pre-production` cuando todos los GDDs MVP estén aprobados
