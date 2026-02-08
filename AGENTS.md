# CLAUDE.md — Guia Definitiva del Proyecto

Este archivo es la fuente de verdad para cualquier modelo de IA que trabaje en este repositorio. Cada directiva se ha extraido del codigo real, no de suposiciones.

---

## I. CONTEXTO DEL PROYECTO

- **Tipo:** Portfolio web personal / Blog — [wilsonmunoz.com](https://wilsonmunoz.com)
- **Framework:** Astro 5 (SSG) con integracion React 19
- **Lenguaje:** TypeScript (`strictNullChecks: true`). Los componentes React usan `.jsx`
- **Estilos:** SASS (API `modern`) con arquitectura modular de 5 capas + CSS `@layer`
- **Content:** Astro Content Collections con loader `glob` y archivos `.mdx`
- **Deploy:** Netlify (`npm run build` -> `dist/`)
- **Routing:** File-based (Astro). Paginacion con `[...page].astro`, rutas dinamicas con `[id].astro` y `[tags].astro`
- **Transiciones:** `ClientRouter` de `astro:transitions` (View Transitions API)

---

## II. COMANDOS

```bash
npm install          # Instalar dependencias (REQUERIDO antes de cualquier cambio)
npm run build        # Build de produccion -> VERIFICACION PRIMARIA
npm run dev          # Dev server en localhost:4321
npm run preview      # Preview del build
```

**No hay linter ni test runner.** El build exitoso (`npm run build`) es la unica verificacion disponible. El compilador TypeScript atrapa los errores de tipo.

---

## III. ARQUITECTURA DE ARCHIVOS

```
src/
├── assets/
│   ├── icons/          # SVGs + barrel export (index.js)
│   └── images/         # Imagenes del sitio + barrel export (index.js)
├── components/         # Componentes Astro (.astro) y React (.jsx)
├── constant/           # Datos estaticos: navLink, projects, projectsApp, blogroll
│   └── index.js
├── content/
│   └── posts/          # Blog posts en .mdx con imagenes en subcarpetas
├── layouts/            # Layout.astro (principal), Hero.astro, Footer.astro
├── pages/              # Rutas del sitio (file-based routing)
│   ├── index.astro
│   ├── about/
│   ├── blog/           # [...page].astro (paginacion), [id].astro (detalle), search.astro
│   ├── blogroll/
│   ├── contact/
│   ├── projects/
│   ├── tags/           # index.astro (listado), [tags].astro (filtro por tag)
│   ├── 404.astro
│   └── rss.xml.js
├── sass/               # Estilos (ver seccion IV)
└── content.config.ts   # Definicion del schema de Content Collections
```

---

## IV. SISTEMA DE ESTILOS (SASS)

### Arquitectura de 5 capas con CSS `@layer`

Punto de entrada: `src/sass/style.scss` usa `sass:meta` con `load-css()` para inyectar cada capa dentro de su `@layer` CSS correspondiente. Cada capa tiene un `_index.scss` que re-exporta sus modulos con `@forward`.

**Orden de cascada (de menor a mayor prioridad):**
```
@layer base, layout, components, utilities;
```
Las utilidades siempre ganan sobre componentes — ITCSS correcto. `01-abstracts` no tiene `@layer` porque solo contiene SASS (maps, mixins, funciones) sin output CSS.

| Capa | `@layer` | Ruta | Contenido |
|:---|:---|:---|:---|
| **01-abstracts** | *(sin layer)* | `sass/01-abstracts/` | `_tokens.scss` (design tokens), `_mixins.scss` (breakpoints), `_functions.scss` |
| **02-base** | `base` | `sass/02-base/` | `_reset.scss` (CSS reset + `prefers-reduced-motion`), `_variables.scss` (`:root` custom properties), `_elements.scss` (estilos de elementos) |
| **03-layout** | `layout` | `sass/03-layout/` | Layouts de pagina: hero, blog-post, post, footer, search, tag-block |
| **04-components** | `components` | `sass/04-components/` | Estilos de componentes: card, nav, tag, submit, head, blog-roll, search-form |
| **05-utilities** | `utilities` | `sass/05-utilities/` | Clases utilitarias generadas (spacing, colors, flex, grid, gap, alignment, aspect-ratio, object-fit, text, etc.) |

### Design Tokens (`_tokens.scss`)

**Espaciado** (fluid, generado con Utopia):
`--space-3xs`, `--space-2xs`, `--space-xs`, `--space-s`, `--space-m`, `--space-l`, `--space-xl`, `--space-2xl`, `--space-3xl`

**Tipografia** (fluid):
`--size--1`, `--base`, `--size-1`, `--size-2`, `--size-3`, `--size-4`, `--size-5`

**Colores**:
- Primarios: `--color-red`, `--color-primary`, `--color-secondary`
- Neutros: `--color-slate-50`, `--color-slate-300`, `--color-slate-600`, `--color-slate-950`
- Dark mode via `prefers-color-scheme` con `color-scheme: light dark` y variables CSS condicionales

**Font weights**: `--fw-regular: 300`, `--fw-semiBold: 600`, `--fw-bold: 900`

### Clases utilitarias disponibles (generadas con `@each` desde tokens)

**Spacing** — Patron: `{propiedad}-{token}`. Ejemplo: `mt-space-xl`, `px-space-2xs`, `mb-space-l`, `my-space-s`
- Prefijos: `m-`, `mt-`, `mr-`, `mb-`, `ml-`, `my-`, `mx-`, `p-`, `pt-`, `pr-`, `pb-`, `pl-`, `py-`, `px-`

**Tipografia**: `size--1`, `base`, `size-1`, `size-2`, `size-3`, `size-4`, `size-5`

**Colores**: `bg-{color}`, `text-{color}`. Ejemplo: `bg-color-primary`, `text-color-slate-50`, `bg-color-slate-600`

**Layout**:
- `.d-flex` — Flex con custom properties: `--gutter` (gap), `--a-horizontal` (justify), `--a-vertical` (align)
- `.d-grid` — Grid auto-fill con: `--min-max` (min column width), `--gap`
- `.flow` — Vertical rhythm via `* + *` con `--flow` (default `--space-s`)
- `.container` — `max-width: 56.25rem` (900px), centrado con padding `--space-s`
- `.container-lg` — `max-width: 90rem` (1440px)

**Gap**: `gap-space-3xs`, `gap-space-2xs`, `gap-space-xs`, `gap-space-s`, `gap-space-m`, `gap-space-l`, `gap-space-xl`, `gap-space-2xl`, `gap-space-3xl`

**Alignment**:
- `.items-center`, `.items-start`, `.items-end`, `.items-stretch`, `.items-baseline`
- `.justify-center`, `.justify-start`, `.justify-end`, `.justify-between`

**Media**: `.aspect-video` (16/9), `.aspect-square` (1), `.object-cover`, `.object-contain`

**Otras**: `.d-block`, `.relative`, `.uppercase`, `.fw-semibold`, `.fw-regular`, `.visually-hidden`, `.radius`, `.size-full`, `.text-ellipsis`, `.border-animated`, `.w-full`

### Breakpoints (`_mixins.scss`)

```scss
@include ab.breakpoint(sm)   // min-width: 40em (640px)
@include ab.breakpoint(md)   // min-width: 48em (768px)
@include ab.breakpoint(lg)   // min-width: 64em (1024px)
@include ab.breakpoint(xl)   // min-width: 90em (1440px)
@include ab.breakpoint-down(sm) // max-width: 39.99875em
```

### Convencion de clases en el HTML

El proyecto usa un **patron de separador `|`** para distinguir la clase semantica/BEM del componente de las clases utilitarias:

```html
<nav class="nav | mt-space-xl">
<ul class="nav__list | d-flex">
<a class="nav__link | border-animated d-flex px-space-3xs py-space-xs">
<ul class="blog-post | flow">
<div class="hero-nav | container">
```

Regla: **Nombre del componente BEM primero**, luego `|`, luego utilidades.

### BEM en componentes SASS

Los componentes usan BEM con nesting nativo de SASS (`&`):

```scss
.card {
    &__link { --gutter: var(--space-2xs); }
    &__link-github { line-height: normal; }
}
.nav {
    &__list { --gutter: var(--space-m); }
    &__link { text-decoration: none; }
}
```

### Como personalizar `.d-flex` y `.d-grid`

No crear nuevas clases wrapper. Sobrescribir las custom properties inline o desde el SASS del componente:

```scss
// En el SASS del componente
.nav__list { --gutter: var(--space-m); }
```

---

## V. PATRONES DE CODIGO (EXTRAIDOS DEL CODIGO REAL)

### Estructura de un componente Astro

```astro
---
// 1. Imports (path aliases primero, relativos despues)
import Layout from "@layouts/Layout.astro";
import Nav from "@components/Nav.astro";
import { getCollection } from "astro:content";
import { Icon } from "astro-icon/components";

// 2. Interface de Props (cuando aplique)
interface Props {
    title: string;
    description: string;
    canonical?: string;
}

// 3. Logica (data fetching, props, variables)
const { title, description } = Astro.props;
const allPosts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
);
---

<!-- 4. Markup con clases: BEM | utilidades -->
<Layout title={title} description={description}>
    <div class="container">
        <slot />
    </div>
</Layout>
```

### Estructura de un componente React (`.jsx`)

```jsx
// Functional components, sin TypeScript en .jsx
import { useState, useEffect } from "react";

export default function ComponentName({ prop1, prop2 = [] }) {
    const [state, setState] = useState(initialValue);
    // className (no class) — usa las mismas utilidades SASS
    return (
        <div className="component | d-flex mt-space-m">
            {/* contenido */}
        </div>
    );
}
```

### Patron de pagina con Hero + Nav

La mayoria de paginas siguen este layout:

```astro
<Layout title="..." description="...">
    <div class="hero-nav | container">
        <Hero title="PageTitle" />
        <Nav />
    </div>
    <div class="container mt-space-3xl">
        <!-- contenido -->
    </div>
</Layout>
```

### Content Collections

Schema definido en `src/content.config.ts`:

```ts
schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
    cover: image(),
    date: z.date(),
    description: z.string().max(200),
})
```

Los posts usan `getCollection("posts")` y se acceden con `post.data.title`, `post.data.date`, `post.data.tags`, etc. La ruta del post individual es `/blog/${post.id}`.

### Iconos

Se usa `astro-icon` con paquetes `@iconify-json/*`:

```astro
import { Icon } from "astro-icon/components";
<Icon name="tabler:home-2" />
<Icon name="prime:github" width={24} height={24} />
<Icon name="carbon:tag" />
```

Tambien `lucide-astro` para iconos en posts MDX:

```mdx
import { Tag, Heart, Settings } from 'lucide-astro';
```

### Imagenes

Se usan barrel exports desde `src/assets/images/index.js`. El componente `<Picture>` de `astro:assets` se usa para optimizacion:

```astro
import { Picture } from "astro:assets";
<Picture
    src={project.img}
    widths={[project.img.width / 1.5, project.img.width]}
    sizes={`(max-width: 39.9em) ${project.img.width / 2}px, ${project.img.width}px`}
    alt={project.alt}
/>
```

### Hidratacion de componentes React en Astro

```astro
<!-- client:load — Hidrata inmediatamente (para componentes interactivos criticos) -->
<SearchEngine client:load posts={posts} allPosts={allPosts} />

<!-- client:visible — Hidrata cuando es visible (para componentes below-the-fold) -->
<Figcaption client:visible description={project.description} />
```

---

## VI. PATH ALIASES

Definidos en `tsconfig.json`. **Obligatorios para imports internos:**

| Alias | Target | Ejemplo |
|:---|:---|:---|
| `@src/*` | `src/*` | `import { foo } from '@src/utils';` |
| `@components/*` | `src/components/*` | `import Nav from '@components/Nav.astro';` |
| `@layouts/*` | `src/layouts/*` | `import Layout from '@layouts/Layout.astro';` |
| `@constant/*` | `src/constant/*` | `import { navLink } from '@constant/index';` |
| `@assets/*` | `src/assets/*` | `import { logo } from '@assets/icons';` |

Imports relativos (`./`, `../`) solo se usan entre archivos del mismo directorio (ej: un componente importando otro componente vecino).

---

## VII. NAMING CONVENTIONS

| Concepto | Convencion | Ejemplo real |
|:---|:---|:---|
| Componentes Astro/React | PascalCase | `CardPost.astro`, `SearchEngine.jsx` |
| Variables / funciones | camelCase | `allPosts`, `filterPosts`, `currentPath` |
| Constantes exportadas | camelCase (arrays/objetos) | `navLink`, `projects`, `blogroll` |
| Clases CSS (componente) | BEM: `block__element` | `.card__link`, `.nav__list`, `.hero__title` |
| Clases CSS (utilidad) | kebab-case con token | `.mt-space-xl`, `.bg-color-primary` |
| Interfaces/Types TS | PascalCase | `Props`, `Project` |

---

## VIII. DEPENDENCIAS CLAVE

No instalar nuevas dependencias sin permiso explicito. Estas son las que ya existen:

| Paquete | Uso |
|:---|:---|
| `astro` (v5) | Framework principal |
| `@astrojs/react` | Integracion React |
| `@astrojs/mdx` | Soporte MDX para posts |
| `@astrojs/sitemap` | Generacion de sitemap |
| `@astrojs/partytown` | Google Analytics en web worker |
| `@astrojs/rss` | Feed RSS |
| `astro-icon` + `@iconify-json/*` | Sistema de iconos |
| `lucide-astro` | Iconos adicionales en MDX |
| `@tanstack/react-table` | Tablas interactivas en posts |
| `sass` | Preprocesador CSS |
| `sanitize-html` + `markdown-it` | Procesamiento de contenido para RSS |
| `react` + `react-dom` (v19) | Componentes interactivos |

---

## IX. DIRECTIVAS DEL AGENTE

1. **Verificar siempre con `npm run build`** despues de cualquier cambio. Es la unica forma de validar.
2. **No instalar dependencias** sin permiso explicito del usuario.
3. **Buscar antes de asumir.** Leer el archivo antes de editarlo. No asumir que un archivo o patron existe.
4. **Usar path aliases** (`@components/*`, `@layouts/*`, etc.) para todos los imports internos.
5. **Respetar el patron `|`** en las clases HTML: nombre BEM primero, luego utilidades.
6. **Usar las utilidades SASS existentes** antes de escribir CSS nuevo. Revisar las clases disponibles en la seccion IV.
7. **SASS nuevo:** Si se necesita un nuevo componente, crear el archivo en la capa correcta (`03-layout/` o `04-components/`) y registrarlo en el `_index.scss` de esa capa con `@forward`. Para nuevas utilidades, crearlas en `05-utilities/`. Todo el CSS se envuelve automaticamente en su `@layer` correspondiente via `style.scss`.
8. **Idioma:** Texto visible al usuario y comentarios en espanol. Identificadores de codigo (variables, funciones, clases CSS) en ingles.
9. **React en `.jsx`**, no `.tsx`. Los componentes React de este proyecto no usan TypeScript.
10. **Componentes Astro** son la opcion por defecto. Solo usar React cuando se necesite interactividad del lado del cliente (state, effects, event handlers complejos).
11. **Formulario de contacto** usa Brevo Transactional Email API via Netlify Function (`netlify/functions/send-email.mjs`). Variables de entorno: `API_BREVO` y `CONTACT_EMAIL`.
12. **No crear archivos de documentacion** (.md, README) salvo que se pida explicitamente.
