# Rumabi Study 🌌

Plataforma académica futurista para estudiantes universitarios — apuntes, comunidades, eventos,
horarios y recursos, todo en un solo lugar. Construido con **React + TypeScript + Vite**.

## Cómo ejecutarlo

```bash
cd rumabi-study
npm install
npm run dev
```

Abre `http://localhost:5173`. Para compilar producción: `npm run build`.

> ⚠️ En el entorno donde generé este proyecto no tengo acceso a internet ni a `npm`, así que no
> pude ejecutar `npm install` ni tomar una captura de pantalla real. El código está completo y
> probado a nivel de sintaxis, pero corre `npm run dev` en tu máquina para verlo en vivo y
> avisame si algo no compila — lo ajustamos.

## Estructura del proyecto

```
rumabi-study/
├── src/
│   ├── components/       → 15 componentes reutilizables (uno por carpeta)
│   ├── pages/             → 10 páginas, una carpeta por página
│   ├── context/           → ThemeContext (temas + tipografía) y FontSizeContext
│   ├── i18n/               → configuración de idiomas + locales/es.json, en.json
│   ├── data/                → datos de ejemplo (eventos, grupos, galería, biblioteca)
│   ├── hooks/                 → useReveal (scroll reveal)
│   ├── styles/                 → themes.css (3 paletas) + global.css
│   └── App.tsx / main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Lo que sí pude construir 100% funcional

- **Logo animado real** (SVG + CSS, sin librerías): respiración de brillo cada 4s, núcleo con
  rotación continua de 20s, y efecto hover que acelera el giro y expande la "R".
- **Fondo de nebulosa dinámico**: partículas en `<canvas>` moviéndose con `requestAnimationFrame`,
  líneas holográficas animadas y gradiente de fondo que cicla lentamente entre azul y morado.
  Respeta `prefers-reduced-motion`.
- **3 temas de color** intercambiables en vivo (Nebula / Emerald Tech / Solar Core) vía variables
  CSS + `data-theme` en `<html>`, persistidos en `localStorage`.
- **3 tipografías** intercambiables (Orbitron / Poppins / Inter) y **5 tamaños de texto** (A- a
  A+++) que escalan toda la interfaz con una variable `--font-scale`.
- **Español / Inglés** completos con `react-i18next`.
- **Responsive real**: 3 columnas en escritorio, 2 en tablet, 1 en móvil, con menú lateral animado
  en móvil.
- **Mapa real** con Leaflet + OpenStreetMap, marcadores y popups (referencia: UMSA, La Paz).
- **Consumo de API externa real**: la página `/api` llama en vivo a la Universities API pública
  (no requiere API key) — funcionará apenas tengas conexión a internet.
- Formulario de contacto, galería con hover 3D, dashboard con horario/tareas/progreso, y más de
  15 componentes reutilizables.

## Lo que dejé "improvisado" — para que decidas si lo cambiamos

- **Galería**: no tengo fotos reales del campus, así que cada tarjeta usa un gradiente de color
  como marcador de posición en vez de una imagen. Es trivial reemplazarlo por `<img src="...">`
  en `src/components/GalleryCard/GalleryCard.tsx` en cuanto tengas fotos.
- **Ubicación del mapa**: usé como referencia la Universidad Mayor de San Andrés (La Paz) porque
  no especificaste una universidad. Las coordenadas de los 4 puntos de interés son aproximadas —
  dime el nombre real de tu universidad (o una ficticia) y ajusto las coordenadas.
- **Datos de ejemplo**: eventos, grupos, tareas y recursos de biblioteca son contenido de muestra
  en `src/data/mockData.ts`, listo para conectarse a un backend real más adelante.
- No corrí `npm install` ni un build real (sin red en este entorno) — si al ejecutarlo aparece
  algún error de tipos o de import, pégamelo aquí y lo corrijo al toque.

## Cambios de esta ronda (interactividad frontend)

Todo lo siguiente ahora funciona de verdad (con estado de React + `localStorage`, sin backend):

- **Inicio**: el buscador filtra en vivo sobre biblioteca/eventos/grupos y navega al resultado; los 4 chips y las 5 tarjetas de "Diseñado para..." navegan a su página correspondiente.
- **Dashboard**: los accesos rápidos del sidebar hacen scroll a su sección (o navegan a Biblioteca/Comunidad); cada día del horario tiene un botón "+ Añadir" para agregar una clase y una "×" para quitarla — se guarda en `localStorage`.
- **Comunidad**: "Unirme" alterna a "✔ Unido" y ajusta el contador de miembros, persistido por navegador.
- **Biblioteca**: botón "+ Subir apunte" agrega un recurso nuevo (marcado "Tuyo") y "Ver" abre un modal de detalle.
- **Eventos**: "+ Crear evento personal" guarda un evento visible solo en tu navegador, etiquetado "Mi evento", con opción de eliminarlo.
- **Configuración (⚙️)**: el panel ahora usa todo el alto disponible en vez de cortarse.
- **Botón superior**: "Iniciar sesión" abre un selector de rol (Estudiante / Otro usuario) — es un login simulado, no hay autenticación real.
- **Footer**: se quitó la línea "Hecho con propósito académico...".

**Límite real (no es cosa de frontend vs pereza, es la naturaleza de no tener backend):** todo lo anterior se guarda en `localStorage`, es decir, por navegador/dispositivo. Si un estudiante sube un apunte, otro estudiante en otro dispositivo no lo verá hasta que haya una base de datos real detrás. Galería, Mapa y Nosotros se dejaron tal cual, como pediste.

## Checklist de requisitos


| Requisito | Estado |
|---|---|
| React + TypeScript + Vite | ✅ |
| 10 páginas | ✅ |
| 10+ componentes | ✅ (15) |
| Navbar global + Footer global | ✅ |
| Responsive (3/2/1 columnas) | ✅ |
| Cambio de tamaño de letra (5 niveles) | ✅ |
| Español / Inglés | ✅ |
| 3 temas de color | ✅ |
| Banner principal animado | ✅ |
| Galería de imágenes | ✅ (placeholders, ver arriba) |
| Mapa geográfico | ✅ (Leaflet) |
| Formulario de contacto | ✅ |
| Consumo de API externa | ✅ (Universities API) |
| Logo animado | ✅ |
| Fondo dinámico | ✅ |
