![laptopL](https://user-images.githubusercontent.com/60928765/78252267-3332e780-74b8-11ea-88e0-05d6451042b0.png)
# Data Lovers – Pokémon Go ![faviconPoke](https://user-images.githubusercontent.com/60928765/78252266-329a5100-74b8-11ea-83af-3cb96c9d2b55.png)

## 🎯 Índice 
* [1. Resumen del proyecto](#1-Resumen-del-proyecto)
* [2. Descripción del proyecto](#2-Descripción-del-proyecto)
* [2.1 Proceso Creativo de Diseño](#2.1-Proceso-Creativo-de-Diseño)
* [2.2 Vista Final Desktop](#2.2-Vista-Final-Desktop)
* [2.3 Vista Final Mobile](#2.3-Vista-Final-Mobile)
* [2.4 Vista Final Tablet](#2.4-Vista-Final-Tablet)
* [3. Investigación UX ](#3-Investigación-UX)
* [3.1 Investigación con Jugadores/ Jugadoras de Pokémon Go ](#3.1-Investigación-con-Jugadores-de-Pokémon-Go)
•	3. Objetivos de aprendizaje
•	4. Consideraciones generales
•	5. Criterios de aceptación mínimos del proyecto
•	6. Hacker edition
•	7. Consideraciones técnicas
•	8. Pistas, tips y lecturas complementarias
•	9. Checklist

***

## 1. Resumen del proyecto 📝 

Este proyecto tiene como finalidad construir una página web, en la cual va interactuar con una base de datos externa, la misma que cuenta con la información de los 251 Pokémones de la región de Kanto y Johto. Por el cual, se va importar y extraer los datos requeridos, según las necesidades de nuestrxs usuarixs.
Logrando que puedan visualizar, la información deseada, de manera precisa y clara. En la cual lxs usuarixs podrán interactuar filtrando, ordenando y obteniendo un cálculo agregado de la data, para una mejor comprensión de la misma.

## 2. Descripción del proyecto 📎

Esta página web es la nueva propuesta de actualización, para la página original de Pokémon Go, en la cual añade información relevante para los usuarios nuevos y antiguos del juego para móvil, con la finalidad de mejorar la experiencia que estos tienen, ya que podrán comprar diversas cualidades de los pokémones, permitiendo mejorar sus estrategias, así como una inserción rápida en el juego para aquellos que recién comienzan.

#### 2.1 Proceso Creativo de Diseño 👩🏻‍🎨
Teoria de color
 
#### 2.2 Vista Final Desktop 💻
#### 2.3 Vista Final Mobile 📲
#### 2.4 Vista Final Tablet 📱

## 3. Investigación UX 🔍

#### 3.1 Investigación con Jugadores/ Jugadoras de Pokémon Go

* 📌 App

Pokémon Go, consiste en buscar y capturar personajes de la saga Pokémon escondidos en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse físicamente por las calles de la ciudad para progresar. La aplicación comporta un elemento de interacción social, ya que promueve reuniones físicas de los usuarios en distintas ubicaciones de sus poblaciones.

* 📌 Hallazgos

Los entrenadores de Pokémon Go tienen como objetivo coleccionar diferentes tipos de Pokémon para completar su Pokédex. Además, usan sus Pokémon para enfrentarse a otros entrenadores u otros Pokémon mientras realizan incursiones y batallan en gimnasios.

* 📌 1.- Atrapar y coleccionar los Pokémon

Los Pokémon aparecen en estado salvaje (mientras caminan por la calle) donde pueden ser capturados por los entrenadores. Hay Pokémon que aparecen con más frecuencia que otros. Por ejemplo, es muy difícil encontrar alguna evolución de un Pokémon. Algunos Pokémon pueden evolucionar a otra forma (ej. Pikachu a Raichu), pero necesitan una cantidad determinada de caramelos para poder evolucionar, los cuales se obtienen cada vez que captura a un Pokémon de su misma especie. Por ejemplo, cada vez que se captura a un Pikachu el entrenador obtiene 3 caramelos tipo Pikachu. Al final necesita 25 para poder evolucionarlo a Raichu. La cantidad de caramelos necesaria para evolucionar un Pokémon varía de una especie a otra.

* 📌 2.- Datos que te ayudarán a atrapar y coleccionar pokémones

-	Los Pokémon tienen características únicas que determinan las decisiones que toma el usuario (tipo, tamaño, info, etc).
-	Encounter: % Base de Huida y % Base de Captura.
-	Spaw-chance: Frecuencia de aparición de un pokémon.
-	Egg: En qué tipo de huevos aparece el pokémon.
-	Buddy-distance-km: Distancia en km que debe caminar el usuario con un pokémon con buddy para obtener 1 caramelo de dicho pokémon.
-	Evolution: Tipo de caramelo, siguiente evolución y anterior evolución, si necesita algún ítem para evolucionar.

* 📌 3.- Pelear para ganar gimnasios, incursiones y a otros entrenadores

Los Pokémon y sus ataques son de distintos tipos. Por ejemplo, Pikachu es de tipo eléctrico y tiene ataques eléctricos y normales. Tener presente esta característica es importante cuando un entrenador elige al Pokémon más adecuado para su batalla. Por ejemplo, hay Pokémon que son débiles ante ataques de fuego y otros que resisten más este tipo de ataques. Por eso un entrenador necesita saber cuáles son los mejores ataques (por tipo) por cada Pokémon.
Además, en incursiones o peleas de gimnasios, un entrenador necesita armar un equipo equilibrado de Pokémon con diferentes tipos para hacer el mayor daño posible y ayudar a su equipo.

* 📌 4.- Datos que te ayudarán para pelear

-	Stats: Base de Ataque, Defensa y Salud + máx. CP (máx. puntos de combate) y máx. HP (máx. puntos de salud).
-	Resistant: A qué tipos de pokémon es resistente.
-	Weaknesses: Contra qué tipos de pokémon es débil.
-	Quick-move: Movimientos rápidos.
-	Special-attack: Ataques especiales

* 📌 5.- Datos que puedo obtener de acá

-	Qué pokémon tiene mayor punto de combate y mayor punto de salud.
-	Algunas veces el usuario tiene que elegir a los que tienen menos cantidad de debilidades y/o resistencia y saber de qué tipo son. Por ello, es importante para un maestro Pokémon poder ordenarlos por estas 3 características.
-	STAB: (Same Type Attack Bonus, traducido como Bonificación por Ataque del Mismo Tipo). Se calcula así: si el Pokémon que usa el movimiento es del mismo tipo que el movimiento, el daño aumenta en un 20%
-	DPS (daño por segundo): Se calcula dividiendo el daño base del movimiento por el STAB entre el tiempo que toma el movimiento.
-	EPS (energía por movimiento): Se calcula dividiendo la energía entre el tiempo que toma el movimiento.
- El mejor set de movimientos: calcula cuál es la mejor combinación de quick-move con special-attack para ataque y defensa en gimnasios, acá te dejamos este video que te explica como calcularlo (solo una diferencia, considera 20% para STAB, en lugar de 25%).
Nota: Tanto quick move como special attack tienen información de cada movimiento: nombre, tipo, base de daño, energía, duración del movimiento(seg).

#### 3.2 Público Objetivo 🎯
#### 3.3 Problemática y Necesidades de los Usuarios 🗣️
#### 3.4 Propuesta de Valor 🏆
#### 3.5 Historiad de Usuario y Criterios de Aceptación 📢 📝
#### 3.6 Prototipo en Baja Fidelidad 📲✏️
#### 3.7 Testeo de Usabilidad y Feeback 💬🗣️🔁
![Testing Usabilidad](https://user-images.githubusercontent.com/60928765/78049235-6bafb580-7340-11ea-904f-3f9bde1f40bb.png)
#### 3.8 Prototipo en Baja Fidelidad Pivoteado 👾
#### 3.9 Prototipo Validado y en Alta Fidelidad 👾
#### 3.10 Arquitectura de la información 🗂️

## 4. Objetivos de aprendizaje 

### UX
- [ ] Diseñar la aplicación pensando y entendiendo al usuario.
- [ ] Crear prototipos para obtener feedback e iterar.
- [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [ ] Planear y ejecutar tests de usabilidad.

### HTML y CSS
- [ ] Entender y reconocer por qué es importante el HTML semántico.
- [ ] Identificar y entender tipos de selectores en CSS.
- [ ] Entender cómo funciona flexbox en CSS.
- [ ] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM
- [ ] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [ ] Manejar eventos del DOM. (addEventListener)
- [ ] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value).

### Javascript
- [ ] Manipular arrays (filter | map | sort | reduce).
- [ ] Manipular objects (key | value).
- [ ] Entender el uso de condicionales (if-else | switch).
- [ ] Entender el uso de bucles (for | forEach).
- [ ] Entender la diferencia entre expression y statements.
- [ ] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [ ] Utilizar ES Modules (import | export).

### Pruebas Unitarias (testing)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [ ] Ejecutar comandos de git (add | commit | pull | status | push).
- [ ] Utilizar los repositorios de GitHub (clone | fork | gh-pages).
- [ ] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [ ] Organizar y dividir el código en módulos (Modularización).
- [ ] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [ ] Utilizar linter para seguir buenas prácticas (ESLINT).

## 5. Consideraciones generales

- Este proyecto se realizó en dupla
![Identicket Sandra Zapata](https://user-images.githubusercontent.com/60928765/78052249-766c4980-7344-11ea-91de-dd1d3b270eee.png)![Identicket Shirley Garrido](https://user-images.githubusercontent.com/60928765/78052251-7704e000-7344-11ea-9f9d-47b2f02ea2ad.png)

-	El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub Pages.
-	Tiempo para completarlo: Toma como referencia 4 semanas.

## 6. Pruebas Unitarias

El boilerplate de este proyecto no incluye Pruebas Unitarias (tests), así es que tendrás que escribirlas tú para las funciones que tenga tu código.
Tus pruebas unitarias deben dar una cobertura del 70% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas) del archivo src/data.js que contenga tus funciones y está detallado en la sección de Consideraciones técnicas.

## 7. Checklist

- [ ] Usa VanillaJS.
- [ ] No hace uso de this.
- [ ] Pasa linter (npm run pretest)
- [ ] Pasa tests (npm test)
- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
- [ ] Incluye Definición del producto clara e informativa en README.md.
- [ ] Incluye historias de usuario en README.md.
- [ ] Incluye sketch de la solución (prototipo de baja fidelidad) en README.md.
- [ ] Incluye Diseño de la Interfaz de Usuario (prototipo de alta fidelidad) en README.md.
- [ ] Incluye link a Zeplin en README.md.
- [ ] Incluye el listado de problemas que detectaste a través de tests de usabilidad en el README.md.
- [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
- [ ] UI: Permite filtrar data en base a una condición.
- [ ] UI: Es responsive.

***
