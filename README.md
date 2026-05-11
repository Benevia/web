# Benevia Grupo Consultor — Sitio Web

Sitio estático informativo para Benevia Grupo Consultor. Diseñado como herramienta de validación para clientes que llegan por recomendación directa.

---

## Estructura de archivos

```
benevia-web/
├── index.html          # Single-page con 5 secciones de contenido
├── styles.css          # CSS3 moderno, variables :root, mobile-first
├── script.js           # JS vainilla (< 2KB), menú hamburguesa accesible
├── images/
│   ├── LogoH.jpg       # Logo horizontal (header)
│   └── LogoV.jpg       # Logo vertical (footer)
└── README.md           # Este documento
```

---

## Extracción de la Guía de Identidad

### Colores institucionales (Pantone → RGB → HEX)

| Pantone | RGB | HEX | Uso |
|---------|-----|-----|-----|
| 300 C | 0, 112, 184 | `#0070B8` | Azul principal, botones, enlaces |
| 166 C | 210, 110, 0 | `#D26E00` | Naranja, acentos, números destacados |
| 370 C | 115, 143, 36 | `#738F24` | Verde, bordes de sección familia |
| Black 7 C | 65, 65, 65 | `#414141` | Texto principal, fondos oscuros |

### Colores subordinados

| Pantone | RGB | HEX | Uso |
|---------|-----|-----|-----|
| 302 C | 0, 81, 125 | `#00517D` | Azul oscuro, hover states |
| Process Cyan C | 0, 164, 232 | `#00A4E8` | Focus outlines, acentos digitales |
| 179 C | 204, 82, 0 | `#CC5200` | Indicadores obligatorios en formularios |
| 144 C | 222, 152, 0 | `#DE9800` | Dorado, texto destacado en cajas oscuras |
| 364 C | 87, 119, 33 | `#577721` | Verde oscuro, subtítulos |
| 368 C | 149, 184, 47 | `#95B82F` | Verde lima, acentos secundarios |
| Violet C | 81, 80, 84 | `#515054` | Gris violeta, bordes sección corporativa |
| 2665 C | 83, 64, 144 | `#534090` | Morado, disponible para expansiones |

### Tipografías

**Guía original:**
- Principal: Gotham Bold (títulos)
- Auxiliares: Gotham Light, Gotham Book, Helvetica Regular (cuerpo)

**Suposición documentada:** Gotham es una tipografía comercial de Hoefler & Co. que requiere licencia para uso web. Como alternativa libre y técnicamente equivalente:
- **Títulos:** Montserrat (Google Fonts) — fuente geométrica sans-serif muy similar a Gotham en peso, proporción y personalidad.
- **Cuerpo:** Inter (Google Fonts) — diseñada para pantalla, similar a Helvetica pero con mejor legibilidad digital y soporte amplio de caracteres.

### Jerarquía de tamaños

| Elemento | Mobile | Tablet (768px+) | Desktop (1200px+) |
|----------|--------|-----------------|-------------------|
| H1 (Hero) | 1.75rem (28px) | 2.25rem (36px) | 2.5–3rem (40–48px) |
| H2 (Sección) | 1.5rem (24px) | 1.75rem (28px) | 2–2.5rem (32–40px) |
| H3 (Subsección) | 1.125rem (18px) | 1.25rem (20px) | 1.5rem (24px) |
| Cuerpo | 1rem (16px) | 1rem (16px) | 1–1.125rem (16–18px) |
| Caption | 0.875rem (14px) | 0.875rem (14px) | 0.875rem (14px) |

### Espaciado base

- Base: 8px (0.5rem)
- Padding secciones: 4rem (mobile) → 5rem (tablet) → 6rem (desktop)
- Contenedor: max-width 1200px, padding lateral 1.5rem (mobile) → 2rem (desktop)
- Interlineado cuerpo: 1.65

### Uso de logo

- **Horizontal (LogoH.jpg):** Header fijo, navegación principal.
- **Vertical (LogoV.jpg):** Footer, marca de cierre.

---

## Decisiones de arquitectura confirmadas

1. **Single-page:** Las 5 secciones de contenido se presentan en una sola página con navegación por anclas. Menor fricción para visitantes que validan una recomendación previa.
2. **Formulario Netlify:** El CTA "Agendar conversación" dirige a un formulario Netlify Forms con campos: nombre, empresa, teléfono, email (opcional), mensaje. Compatible con despliegue en Netlify drag & drop.
3. **Estático puro:** Sin animaciones de entrada. El mercado meta (dueños 50–60 años) valora claridad y velocidad de carga por encima de efectos visuales.

---

## Requisitos técnicos cumplidos

- ✅ HTML5 semántico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ✅ CSS3 con variables `:root`, Flexbox, CSS Grid
- ✅ JavaScript vainilla, < 2KB, sin librerías externas
- ✅ Mobile-first, responsive en 320px, 768px, 1200px
- ✅ Menú hamburguesa funcional con ARIA (`aria-expanded`, `aria-label`, `aria-controls`)
- ✅ SEO on-page: meta tags, Open Graph, título descriptivo, jerarquía H1–H3, alt texts, `lang="es"`
- ✅ Accesibilidad WCAG AA: contraste validado, navegación por teclado, focus states visibles, `prefers-reduced-motion`
- ✅ Lazy loading en imágenes fuera del viewport inicial
- ✅ Formulario compatible con Netlify Forms (`name="contacto" method="POST" netlify`)
- ✅ Rutas relativas en todo el proyecto

---

## Despliegue en Netlify

1. Comprima la carpeta `benevia-web/` en un archivo ZIP.
2. Vaya a [netlify.com](https://netlify.com) e inicie sesión.
3. En el dashboard, arrastre y suelte el ZIP en el área de despliegue.
4. Netlify generará una URL pública automáticamente.
5. Para usar dominio propio: Site settings → Domain management.

**Nota sobre el formulario:** Netlify detecta automáticamente el formulario con el atributo `netlify`. Los envíos aparecerán en el panel de Forms del sitio.

---

## Créditos

- Identidad visual: Benevia Grupo Consultor / Morfogenia Consultores
- Desarrollo: Adaptado a especificaciones Fase 2 del proyecto Benevia Web
