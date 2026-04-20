# Game Concept: 7 Wonders Digital — Core Loop

*Created: 2026-04-19*
*Status: Draft*

---

## Elevator Pitch

> Es un juego de cartas multijugador online donde eliges una carta cada turno, construyes tu civilización y pasas el resto a tu vecino — todo simultáneamente, en tiempo real — hasta que el momento del reveal colectivo revela quién jugó qué. Basado fielmente en el juego de mesa 7 Wonders (Antoine Bauza, 2010).

---

## Core Identity

| Aspect | Detail |
| ---- | ---- |
| **Genre** | Digital board game / Card drafting / Estrategia por turnos multijugador |
| **Platform** | Web browser (desktop-first) |
| **Target Audience** | Jugadores de boardgames que no tienen acceso al físico; fans de Catan buscando más profundidad estratégica |
| **Player Count** | Multijugador online: 3-7 jugadores (MVP: 3 jugadores) |
| **Session Length** | MVP (Age I): ~15 min · Juego completo (futuro): ~45-60 min |
| **Monetization** | Ninguna — proyecto personal para poder jugar el juego |
| **Estimated Scope** | Mediano — MVP: 4-6 semanas (equipo de 2) · Juego completo: 4-6 meses adicionales |
| **Comparable Titles** | 7 Wonders (juego de mesa físico), Catan Universe (digital), Board Game Arena |

---

## Core Fantasy

Finalmente puedo jugar 7 Wonders cuando quiera, con mis amigos, sin tener que comprar el físico ni recordar las reglas manualmente. La app aplica todo automáticamente — yo solo me concentro en la estrategia: ¿qué carta me quedo, qué le paso al de la izquierda, qué está construyendo el de la derecha?

El corazón del juego no es la optimización matemática — es ese momento donde todos revelan su elección simultáneamente y descubrís que tomaste exactamente la carta que el otro necesitaba desesperadamente, o que te la robaron justo a vos.

---

## Unique Hook

Como 7 Wonders board game, AND ALSO sin tablero físico, sin tokens, sin calcular manualmente el comercio — la app gestiona todo el estado y el reveal simultáneo es el momento central de cada turno, diseñado para crear reacción y conversación entre jugadores.

---

## Visual Identity Anchor

**Dirección visual: "Las cartas son el mundo"**

*Regla visual central:* El color de cada carta ES la información. La UI nunca necesita explicar el tipo de una carta si el color lo dice todo.

**Principios visuales:**
1. **Fidelidad cromática:** Marrones (materiales crudos) · Grises (manufacturas) · Azul (civiles) · Verde (ciencia) · Amarillo (comercio) · Rojo (militar) · Púrpura (Guilds). Los mismos colores del físico — un jugador del juego de mesa entiende la UI al instante.
   *Design test:* Si necesitamos un ícono o label para distinguir tipos de carta, el color falló.

2. **Legibilidad sobre decoración:** Texto claro, costo visible, efecto accesible de un vistazo. MVP sin ilustraciones complejas — la información ES el arte.
   *Design test:* ¿Un jugador nuevo puede leer una carta en 3 segundos? Si no, simplificar.

3. **La ciudad crece visualmente:** Las cartas construidas se acumulan en filas por color, como en el físico. El tablero de Wonder es el centro geográfico. Ver la ciudad de tu vecino te dice inmediatamente qué estrategia sigue.
   *Design test:* Al mirar la ciudad de un rival, ¿podés inferir en 5 segundos si es ruta militar, científica o comercial?

**Filosofía de color:** Paleta de alta saturación fiel al juego de mesa original. El fondo de la mesa es neutro/oscuro para que los colores de las cartas sean los protagonistas absolutos.

---

## Player Experience Analysis (MDA Framework)

### Target Aesthetics (What the player FEELS)

| Aesthetic | Priority | How We Deliver It |
| ---- | ---- | ---- |
| **Sensation** (sensory pleasure) | 4 | Animación del reveal · sonido de carta jugada · ciudad que crece |
| **Fantasy** (make-believe) | 5 | Liderar una civilización antigua, construir una Maravilla del mundo |
| **Narrative** (drama) | N/A | Sin narrativa explícita — la historia emerge de cada partida |
| **Challenge** (mastery) | 3 | Qué cards priorizar, cuándo bloquear a un vecino, cadenas óptimas |
| **Fellowship** (social) | 1 | El reveal simultáneo · ver la ciudad del rival · reaccionar juntos |
| **Discovery** (secrets) | 6 | Descubrir sinergias entre cartas · aprender qué estrategia funciona |
| **Expression** (creativity) | N/A | Poca expresión personal — las cartas tienen efectos fijos |
| **Submission** (flow) | 2 | Ritmo fluido · app calcula reglas · sin fricción de "¿puedo hacer esto?" |

### Key Dynamics (Emergent player behaviors)

- Los jugadores van a espiar las ciudades de sus vecinos para inferir qué cartas quieren y bloquearlas conscientemente
- Los jugadores van a sentir "culpa estratégica" al descartar cartas buenas que el rival podría aprovechar
- El reveal va a generar conversación y exclamaciones ("¡no puedo creer que hayas tomado eso!")
- Los jugadores van a aprender gradualmente los chains sin estudiarlos — los descubren naturalmente cuando la app les ofrece construcción gratuita

### Core Mechanics (Systems we build)

1. **Card Drafting simultáneo** — todos eligen una carta en secreto, la app espera a que todos confirmen, luego revela todas las decisiones al mismo tiempo
2. **Ciudad builder por color** — construir estructuras aumenta recursos permanentes y acumula efectos categorizados por tipo de carta
3. **Comercio entre vecinos** — ver los recursos disponibles de jugadores adyacentes y decidir si pagar 2 monedas por cada recurso faltante
4. **Resolución militar automática** — al final de cada Era, la app compara escudos entre vecinos y distribuye fichas de victoria/derrota
5. **Scoring multi-categoría** — suma de 5 categorías al final (Age I MVP: azules + militar + monedas; Tier 2 añade ciencia y Guilds)

---

## Player Motivation Profile

### Primary Psychological Needs Served

| Need | How This Game Satisfies It | Strength |
| ---- | ---- | ---- |
| **Autonomy** | Cada turno hay 3 decisiones posibles (construir/Maravilla/descartar) + qué carta elegir de entre 7 opciones distintas | Supporting |
| **Competence** | Aprender chains, inferir qué descarta el rival, optimizar ruta de puntos | Supporting |
| **Relatedness** | El reveal simultáneo · ver ciudades rivales · la tensión de pasar una carta que el otro quiere | Core |

### Player Type Appeal (Bartle Taxonomy)

- [x] **Achievers** — Ganar partidas, completar Maravillas, maximizar score
- [ ] **Explorers** — Descubrir sinergias de cartas, entender el sistema de chains
- [x] **Socializers** — La experiencia compartida del reveal, jugar con amigos
- [ ] **Killers/Competitors** — Bloquear cartas que el rival quiere activamente

### Flow State Design

- **Onboarding curve:** Age I tiene cartas simples (recurso → construir estructura). El tutorial implícito es que en los primeros 3 turnos solo hay cartas marrones y grises — bajo riesgo de error
- **Difficulty scaling:** No escala de dificultad en el sentido clásico — la complejidad emerge de los rivales humanos
- **Feedback clarity:** Cada carta construida muestra exactamente qué cambió (recursos nuevos, escudos, PV). La ciudad crece visualmente
- **Recovery from failure:** Una partida dura 15 min (MVP). El fracaso no es permanente — "de nuevo" es inmediato

---

## Core Loop

### Moment-to-Moment (30 segundos)

Ver tu mano de cartas → leer los costos → revisar los recursos de tus vecinos si necesitás comerciar → elegir una carta en secreto → confirmar tu acción (construir / etapa Maravilla / descartar) → esperar que todos confirmen → **REVEAL**: todas las decisiones se revelan simultáneamente → pasar la mano al vecino.

Este ciclo es intrínsecamente satisfactorio porque la fase de espera crea tensión, y el reveal la resuelve abruptamente.

### Short-Term (5-15 minutos)

Un Age completo = 6 turnos. La mano empieza en 7 cartas y se reduce a 2 (la última se descarta sin beneficio). La presión aumenta porque ves menos opciones y ya ves qué construyó el rival en los últimos turnos. "One more turn" viene de: siempre hay una carta que querés pero no estás seguro de que llegue a vos antes de que la agarre otro.

### Session-Level (MVP: 15 min)

Age I completo (6 turnos) → resolución militar automática (comparar escudos con vecinos, fichas de victoria/derrota) → scoring final (cartas azules + fichas militares + monedas÷3) → pantalla de resultados con tabla de puntos → botón "jugar de nuevo".

### Long-Term Progression

Sin meta-progresión en el sentido de RPG — es un boardgame. El crecimiento es de conocimiento: aprender qué Maravillas son fuertes, cuándo priorizar recursos vs puntos, qué chains existen. En Tier 2 (Age II + III) el juego completo añade complejidad estratégica genuina.

### Retention Hooks

- **Curiosidad:** "¿Qué hubiera pasado si tomaba esa carta verde?" · "¿Qué hace la Maravilla de Babilonia?"
- **Investment:** La partida es corta — el "investment" es el grupo de amigos con quienes jugar
- **Social:** El mismo loop que Catan — "¿cuándo jugamos otro?"
- **Mastery:** Mejorar en predecir qué cartas llegarán, cuándo bloquear rivales

---

## Game Pillars

### Pillar 1: El Reveal es el Juego
El momento en que todos revelan su carta elegida es el pico emocional de cada turno. La UI, la sincronización y el timing deben construirse para que ese instante sea dramático y claro.

*Design test:* Si estamos debatiendo entre animación instantánea vs animación progresiva del reveal, elegimos la que genere más reacción en los otros jugadores.

### Pillar 2: Transparencia de Estado
El jugador siempre sabe exactamente qué tiene, qué producen sus vecinos y cuánto le costaría construir cada carta. La incertidumbre viene de las decisiones de otros, no de la UI.

*Design test:* Si un jugador tiene que calcular mentalmente si puede pagar una carta, la UI falló — esa información debe mostrarse proactivamente.

### Pillar 3: Cero Fricción de Reglas
La app aplica el reglamento automáticamente. Chains detectadas, comercio calculado, resolución militar ejecutada. El jugador nunca necesita releer las reglas mientras juega.

*Design test:* Si alguien pregunta "¿puedo hacer esto?" durante la partida, hay información faltante en la UI que debe añadirse.

### Anti-Pillars (What This Game Is NOT)

- **NOT chat en tiempo real (MVP):** Distrae del reveal, añade complejidad de moderación. La conversación pasa fuera de la app.
- **NOT AI opponents (MVP):** La IA de 7 Wonders requiere evaluar estrategias complejas multiturno. Desvía completamente el foco del MVP.
- **NOT soporte para 7 jugadores desde el día 1:** Validar flujo y sync con 3-4 jugadores primero. Escalar después.
- **NOT expansión Leaders en MVP:** Añade un draft extra antes del Age I, 6 monedas iniciales, y cartas de líderes con efectos únicos. El scope es completamente separable.
- **NOT variante 2 jugadores en MVP:** Ciudad Libre require lógica especial (control alternado, 2 cartas por turno). Tier 3.

---

## Inspiration and References

| Reference | What We Take From It | What We Do Differently | Why It Matters |
| ---- | ---- | ---- | ---- |
| 7 Wonders (mesa) | Todas las reglas, la mecánica de draft, la estructura de 3 Eras | UI digital que elimina cálculos manuales | Es el juego que estamos adaptando fielmente |
| Catan Universe | Implementación digital de boardgame clásico, UX de turno claro, feedback visual de recursos | Draft simultáneo en lugar de turnos secuenciales | Referencia de UX para boardgame digital con jugadores nuevos |
| Board Game Arena | Implementación fiel de 7 Wonders en web (ya existe) | Proyecto propio para aprender construyéndolo | Prueba de que es técnicamente posible en browser |

**Non-game inspirations:** El juego de mesa físico como objeto — la sensación de pasar cartas por la mesa, ver la ciudad del rival crecer en tu campo visual, la anticipación del reveal.

---

## Target Player Profile

| Attribute | Detail |
| ---- | ---- |
| **Age range** | 20-35 |
| **Gaming experience** | Mid-core — conoce boardgames, juega videojuegos ocasionalmente |
| **Time availability** | Sesiones de 15-60 min con amigos coordinados online |
| **Platform preference** | Desktop browser — no quieren instalar nada |
| **Current games they play** | Catan, boardgames de mesa con amigos |
| **What they're looking for** | Jugar 7 Wonders sin comprar el físico ni reunirse presencialmente |
| **What would turn them away** | UI confusa, tener que calcular manualmente el comercio, latencia que rompe la simultaneidad del reveal |

---

## Technical Considerations

| Consideration | Assessment |
| ---- | ---- |
| **Stack** | React + TypeScript (frontend) · Node.js + Socket.io (backend) · PostgreSQL (persistencia) |
| **Key Technical Challenges** | Sincronización del reveal (esperar a todos antes de revelar) · validación de recursos opcionales ("1 Arcilla o 1 Mineral") · reconexión mid-game |
| **Art Style** | Flat/functional — color-coded cards, sin ilustraciones complejas en MVP. Fidelidad cromática al juego físico |
| **Art Pipeline Complexity** | Baja — CSS + iconos SVG para tipos de carta. Sin assets de arte original en MVP |
| **Audio Needs** | Mínima — sonido de carta colocada, reveal, resolución militar. Opcional en MVP |
| **Networking** | Client-Server con Socket.io · rooms por partida · PostgreSQL para estado persistente entre reconexiones |
| **Content Volume** | MVP (Age I): ~70 cartas únicas · 7 tableros de Maravilla (lado A) · ~10 tipos de efecto. Juego completo: ~170 cartas |
| **Procedural Systems** | Ninguno — es una adaptación fiel de un juego determinista |

---

## Risks and Open Questions

### Design Risks
- **El reveal no genera la emoción esperada en digital:** Sin la fisicalidad de ver las cartas voltearse en la mesa, el momento puede sentirse plano. Mitigación: animación, sonido, y tiempo de reveal deliberado.
- **El comercio manual es confuso para nuevos jugadores:** Ver los recursos de vecinos y calcular el costo puede generar fricción. Mitigación: la UI muestra explícitamente "esta carta te cuesta 2 monedas al vecino izquierdo".

### Technical Risks
- **Sincronización del reveal (ALTO):** Si Socket.io no coordina correctamente que "todos eligieron antes de revelar", algunos jugadores ven el reveal tarde. Requiere un protocolo de ready-state explícito.
- **Recursos opcionales (MEDIO):** Cuando una carta produce "1 Arcilla o 1 Mineral", la validación de construcción debe probar si alguna asignación posible cubre el costo. No es trivial con múltiples cartas opcionales combinadas.
- **Reconexión mid-game (MEDIO):** Si un jugador se desconecta durante la fase de elección, el juego queda bloqueado esperando su selección. Necesita timeout + auto-discard.

### Market Risks
- **Ya existe en Board Game Arena:** BGA tiene 7 Wonders implementado por el publisher oficial. Este proyecto no compite comercialmente — su valor es pedagógico y personal.

### Scope Risks
- **Primera app web seria + 3-7 jugadores en tiempo real:** La combinación de Socket.io rooms, estado sincronizado, y PostgreSQL es substancial para un primer proyecto. El MVP debe mantenerse estrictamente en 3 jugadores + Age I.
- **Scope creep hacia el juego completo:** La tentación de añadir Age II, ciencia, y Guilds antes de que Age I funcione bien es el riesgo #1 del proyecto.

### Open Questions
- **¿Cómo manejar el timer de turno?** ¿Los jugadores esperan infinitamente o hay un timeout automático? ¿Cuántos segundos?
- **¿Qué pasa si el host se desconecta?** ¿La partida se pausa, migra a otro host, o termina?
- **¿PostgreSQL es necesario para el MVP?** Para 3 jugadores y partidas de 15 min, ¿alcanza con estado in-memory en el server?

---

## MVP Definition

**Core hypothesis:** "El draft simultáneo en tiempo real con reveal colectivo es la mecánica central de 7 Wonders y es disfrutable online con la misma tensión que en el físico."

**Required for MVP:**
1. Lobby con código de sala — crear/unirse a partida para 3 jugadores
2. Age I completo — 6 turnos con draft simultáneo, reveal colectivo, y paso de mano (dirección izquierda)
3. Construcción básica — pagar con recursos propios o comerciando con vecinos (manual, visual)
4. Las 3 acciones posibles — construir estructura, construir etapa de Maravilla, descartar por 3 monedas
5. Resolución militar al final del Age — comparar escudos, fichas +1/-1
6. Scoring final simplificado — cartas azules + fichas militares + monedas÷3
7. Pantalla de resultados — tabla con breakdown de puntos por categoría

**Explicitly NOT in MVP:**
- Age II y Age III
- Cartas verdes (ciencia) y su scoring cuadrático
- Guilds (púrpuras)
- Maravillas lado B
- 4-7 jugadores
- Chat en tiempo real
- AI opponents
- Tutorial guiado
- Variante 2 jugadores
- Expansión Leaders

### Scope Tiers

| Tier | Content | Features | Timeline |
| ---- | ---- | ---- | ---- |
| **MVP** | Age I · 3 jugadores · Maravillas lado A · Cartas marrones/grises/azules/amarillas/rojas | Draft simultáneo · Comercio manual · Military Age I · Scoring simplificado | 4-6 semanas |
| **Tier 2** | Age I+II+III · Cartas verdes · Guilds · Wonder stages completos | Scoring científico · Guilds condicionales · 4-7 jugadores | +6-10 semanas |
| **Tier 3** | Maravillas lado B · Variante 2 jugadores | Ciudad Libre · Lógica especial 2P | +4-6 semanas |
| **Full Vision** | Expansión Leaders | Draft de líderes pre-Age I · 6 monedas iniciales | +4-8 semanas |

---

## Next Steps

- [x] Concept draft completado — 2026-04-19
- [ ] Ejecutar `/map-systems` para descomponer en sistemas implementables con dependencias
- [ ] Configurar el stack en CLAUDE.md — este proyecto usa React+TS+Node+Socket.io+PostgreSQL, no un game engine tradicional (`/setup-engine` no aplica — editar CLAUDE.md manualmente)
- [ ] Ejecutar `/design-system` para cada sistema MVP identificado en el mapa
- [ ] Ejecutar `/create-architecture` para el blueprint técnico del stack web
- [ ] Prototipar el reveal simultáneo con Socket.io (`/prototype simultaneous-reveal`)
- [ ] Validar con playtest (`/playtest-report`)
- [ ] Planificar el primer sprint (`/sprint-plan new`)
