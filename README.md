# Benevia.mx — dirección editorial

Sitio estático. HTML, CSS y JavaScript sin framework. Se publica en Cloudflare
Workers con `wrangler deploy` desde la raíz de esta carpeta.

## Qué cambió respecto a la versión anterior

Rediseño completo de estructura visual y de redacción, a partir de tres
decisiones: identidad visual distinta a un sitio de software o consultoría,
formato editorial en vez de embudo comercial clásico, y la observación
directa como puerta de entrada en lugar de la promesa comercial.

- **Visual:** sin tarjetas ni botones tipo píldora. Paleta de marca (azul,
  naranja, verde) usada con disciplina: casi todo el sitio es tinta sobre
  papel, con el color reservado para acentos puntuales. Un solo botón
  sólido en cada página, al final, para la conversación.
- **Estructura:** citas de situación con barra lateral, listas planas,
  índice de "caminos" para las tres audiencias, acordeones nativos
  (`<details>/<summary>`, funcionan sin JavaScript) para profundizar sólo
  en lo que interese.
- **Redacción:** cada frase se revisó con la prueba de "en voz alta" —si
  nadie lo diría así en una conversación real, se reescribió. Se eliminó
  el verbo "sostener" como muletilla en las nueve páginas comerciales
  (no es parte del léxico propio de Benevia).

## Artículos

Los 12 artículos se conservan con el cuerpo exactamente igual al original,
verificado carácter por carácter. Sólo cambiaron el encabezado, el pie y la
navegación entre artículos, para que compartan el mismo sistema visual.

## Pendiente de tu confirmación antes de publicar

- **Formspree.** El formulario de `contacto.html` usa el ID `xdabwwzv`, el
  que tengo documentado como tuyo de trabajo anterior. La versión más
  reciente que revisamos traía un ID distinto (`xgvzpbge`) sin explicación.
  Verifica en tu panel de Formspree cuál es el correcto antes de publicar;
  si es el otro, es cambiar una sola línea en el atributo `action` del
  `<form>`.
- **Analítica.** Cada página tiene, antes de `script.js`, un comentario
  donde va el fragmento de Cloudflare Web Analytics. Falta sustituir
  `TOKEN_AQUI` por el token real de benevia.mx.

## Navegación

- Inicio
- Qué puede lograr
- Para quién
  - Dueños y fundadores
  - Empresas familiares
  - Directivos y gerentes
- Cómo trabajamos
- Artículos
- Conversar

## Identidad

- Tipografías: Montserrat (títulos) y Lato (cuerpo), cargadas de Google
  Fonts.
- Colores: `--paper #FCFBF8`, `--ink #201F1D`, `--muted #6B6560`,
  `--blue #0A70B8`, `--blue-dark #00517D`, `--orange #B25E00` (versión de
  texto del naranja de marca, ajustada para contraste 4.5:1 sobre el fondo).
- `images/og-benevia.png`: nueva imagen de vista previa para redes,
  1200×630, con la misma apertura editorial que la portada.

## Notas técnicas

- `_redirects` conserva las rutas del sitio anterior con código 301.
- `script.js` redirige además las anclas antiguas de la portada
  (`#dueno`, `#familia`, `#operacion`, `#empresas`), que el servidor no
  puede resolver porque el fragmento no viaja en la petición.
- El filtro de artículos por categoría sigue funcionando igual; se quitó
  la categoría "Estrategia" porque todavía no tiene ningún artículo.
- `metodologia.html` se conserva como redirección de respaldo hacia
  `como-trabajamos.html`.
