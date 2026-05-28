# Hazel Labs — Landing Page

**Physics-Informed Machine Learning para Materiales de Construcción**

Landing page production-ready, modular y responsive para Hazel Labs.

---

## Estructura del proyecto

```
hazel-labs/
├── index.html               # Página principal
├── styles/
│   ├── main.css             # Tokens, base, componentes, secciones
│   └── responsive.css       # Breakpoints mobile-first
├── scripts/
│   ├── i18n.js              # Sistema bilingüe ES / EN
│   ├── main.js              # Nav, scroll reveals, contadores, formulario
│   ├── animations.js        # Hero canvas, Problem canvas, PIML canvas, Convergence chart
│   └── network.js           # Red de validación (canvas Section 05)
├── assets/
│   ├── logo/                # Logo SVG (inline en HTML)
│   ├── icons/               # Íconos adicionales
│   └── fonts/               # Fuentes locales (opcional, usa Google Fonts por defecto)
└── README.md
```

---

## Cómo ejecutar

### Opción 1 — Servidor local (recomendado)

```bash
# Python 3
cd hazel-labs
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Luego abre: [http://localhost:8080](http://localhost:8080)

### Opción 2 — Abrir directo

Abre `index.html` en tu navegador. Las fuentes de Google Fonts requieren conexión a internet.

---

## Deploy en GitHub Pages

```bash
# 1. Crear repositorio en GitHub
git init
git add .
git commit -m "feat: initial Hazel Labs landing"
git remote add origin https://github.com/TU_USER/hazel-labs.git
git push -u origin main

# 2. En GitHub → Settings → Pages → Branch: main / root
```

La página quedará disponible en: `https://TU_USER.github.io/hazel-labs`

---

## Secciones

| # | ID | Contenido |
|---|-----|-----------|
| Hero | `#hero` | Headline, métricas, canvas de partículas |
| 01 | `#problem` | El problema de I+D actual + canvas de convergencia |
| 02 | `#timeline-comparison` | Comparación 3 métodos + diferenciador físico |
| 03 | `#piml` | Tecnología PIML + red neuronal animada |
| 04 | `#impact` | Triple impacto cuantificable con contadores |
| 05 | `#network` | Red de validación (canvas interactivo) |
| 06 | `#clients` | Segmentos de clientes |
| 07 | `#diff` | Diferenciadores |
| 08 | `#team` | Equipo |
| CTA | `#cta` | Call to action |
| 09 | `#contact` | Formulario de contacto + partners |

---

## Sistema bilingüe

El sistema ES/EN está implementado en `scripts/i18n.js`.

Para agregar o modificar textos, editar el objeto `CONTENT` en ese archivo:

```js
// scripts/i18n.js
const CONTENT = {
  es: { 'hero-line1': 'Del ensayo y error', ... },
  en: { 'hero-line1': 'From trial and error', ... }
}
```

Los IDs en el HTML deben coincidir con las claves del objeto.

---

## Partners de validación

Actualizados según brief:

- **DICTUC** — NCh146 · NCh853 · NCh935
- **IDIEM** — Ensayos físicos
- **INN** — Instituto Nacional de Normalización
- **Startup Lab 01** — Prototipado y pilotaje
- **CChC** — Cámara Chilena de la Construcción
- **SOVIQUIM** — Distribuidor

---

## Stack técnico

- HTML5 semántico
- CSS3 puro (variables, grid, flexbox, animaciones)
- JavaScript vanilla ES6+ (sin dependencias)
- Canvas 2D API (partículas, convergencia, PIML, red)
- IntersectionObserver (reveals, contadores)
- Google Fonts: DM Sans + DM Mono

---

## Tipografía

```css
--font: 'DM Sans', sans-serif;   /* 200, 300, 400, 500 */
--mono: 'DM Mono', monospace;    /* 300, 400 */
```

---

## Colores

```css
--bg:      #050709   /* Fondo base */
--cyan:    #4fc9e8   /* Acento principal */
--blue:    #3b7cf4   /* CTAs y tecnología */
--green:   #34c77b   /* Impacto ambiental / positivo */
--amber:   #f59e0b   /* Advertencias / tradicional */
```

---

## Customización

Para agregar un nuevo partner al nodo de red, editar `scripts/network.js`:

```js
const NODES = [
  // ...
  { id: 11, label: 'NUEVO', sub: 'Descripción', x: 0.40, y: 0.20, r: 13, color: '#34c77b' },
];
const EDGES = [
  // ...
  [0, 11], // conectar al nodo central
];
```

---

© 2025 Hazel Labs — Spin-off de Hazeladd
