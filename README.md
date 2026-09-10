# Diana Marcela Bermúdez Cuevas — Portafolio profesional

Portafolio web profesional de Diana Marcela Bermúdez Cuevas, abogada y especialista en
Derecho Constitucional, con experiencia en el sector público colombiano.

## Contenido

- Perfil profesional (hoja de vida oficial)
- Áreas de experiencia (derecho de familia, administrativo, derechos humanos, conciliación, etc.)
- Experiencia laboral en formato línea de tiempo
- Formación académica y estudios complementarios
- Contacto (correo y WhatsApp)

## Stack tecnológico

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- React Router
- lucide-react

## Estructura del proyecto

- `App.tsx` y `main.tsx` — aplicación y enrutado
- `pages/` — composición de páginas
- `components/features/` — secciones de la página
- `components/layout/` — navegación y pie de página
- `components/ui/` — primitivas reutilizables
- `constants.ts` — contenido del portafolio (fuente única de datos)
- `index.css` — estilos globales

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Construcción

```bash
npm run build
```

## Pruebas

```bash
npx vitest run
```

## Verificación

```bash
npm run lint
```

- El proyecto usa `BrowserRouter`; en un hosting estático se recomienda un fallback de
  reescritura de rutas hacia `index.html`.