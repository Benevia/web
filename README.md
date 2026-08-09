# Benevia.mx

Sitio estático. HTML, CSS y JavaScript sin framework. Se publica en Cloudflare Workers
con `wrangler deploy` desde la raíz de esta carpeta.

## Arquitectura

- `index.html` — Inicio
- `resultados.html` — Qué puede lograr
- `para-quien.html` — Para quién (incluye criterio de no encaje)
- `duenos-fundadores.html` — Dueños y fundadores
- `empresas-familiares.html` — Empresas familiares
- `directivos-gerentes.html` — Directivos y gerentes
- `como-trabajamos.html` — Cómo trabajamos
- `articulos.html` — Índice de artículos con filtro por categoría
- `articulos/` — 12 artículos, un archivo por texto
- `contacto.html` — Agendar conversación
- `metodologia.html` — Redirección a `como-trabajamos.html`

## Identidad

- Tipografías: Montserrat (títulos, sustituye a Gotham) y Lato (cuerpo, sustituye a Helvetica).
- Colores institucionales declarados en `:root` de `styles.css`:
  azul `#0A70B8`, azul oscuro `#00517D`, naranja `#D26E00`, verde `#738F24`, gris `#414141`.
- No se usan colores fuera de esa paleta.

## Registro y ortografía

- Toda la capa comercial se dirige al lector de usted.
- Los resúmenes de artículos que aparecen en páginas comerciales se escriben en tercera
  persona, para que el índice tenga un solo registro sin alterar el cuerpo de los textos.
- Norma ortográfica anterior a la reforma de la RAE de 2010: «sólo» con tilde cuando
  equivale a «solamente», demostrativos tildados cuando funcionan como pronombres,
  distinción entre «aún» y «aun».
- Comillas tipográficas curvas. No se usa el guion largo.

## Publicación de un artículo nuevo

1. Colocar el archivo en `articulos/`, copiando la estructura de uno existente.
2. Agregar la tarjeta en `articulos.html` con su `data-category`.
3. Agregar la URL en `sitemap.xml`.
4. Revisar la navegación entre artículos vecinos del texto nuevo y de sus contiguos.
5. El llamado final de cada artículo es específico de ese texto. No se usa uno genérico.

## Pendiente por hacer fuera de estos archivos

- Analítica. Cada página tiene, antes de `script.js`, un comentario donde va el fragmento
  de Cloudflare Web Analytics. Falta sustituir `TOKEN_AQUI` por el token real de la
  propiedad benevia.mx y quitar los signos de comentario.
- DMARC. El registro `rua` sigue enviando los reportes a una dirección de GoDaddy.
  Conviene apuntarlo a una dirección de Zoho controlada por Benevia.

## Notas técnicas

- `_redirects` conserva las rutas del sitio anterior con código 301.
- `script.js` redirige además las anclas antiguas de la portada (`#dueno`, `#familia`,
  `#operacion`, `#empresas`), que el servidor no puede resolver porque el fragmento no
  viaja en la petición.
- El formulario usa Formspree. Cada formulario envía su propio `_subject` para distinguir
  si la solicitud salió de la portada o de la página de contacto. La dirección de respuesta
  la toma Formspree del campo `email` del prospecto.
- `images/og-benevia.png` es la imagen de previsualización para LinkedIn y otras redes,
  en 1200 por 630 píxeles.
