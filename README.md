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
