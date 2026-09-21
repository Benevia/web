# Benevia.mx — V4.3 (SEO técnico, semántico y normalización de rutas)

Versión preparada el 20 de septiembre de 2026 a partir de V4.2.

## Corrección de arquitectura de rutas en V4.3

- El índice editorial se movió físicamente de `/articulos.html` a `/articulos/index.html`. La URL pública y canónica sigue siendo `/articulos`.
- Se eliminó la colisión física entre el archivo raíz `articulos.html` y el directorio `articulos/`.
- `wrangler.jsonc` declara explícitamente `assets.html_handling = "drop-trailing-slash"`, por lo que tanto los archivos `*.html` como los `index.html` de carpeta se sirven con URL pública sin extensión y sin barra final.
- `_redirects` incorpora `/articulos.html → /articulos` con código 301 para conservar compatibilidad con la URL física anterior.
- Las rutas relativas a CSS, JavaScript e imágenes del índice de artículos se ajustaron a su nueva ubicación física; no cambió ningún texto visible.
- Las URLs canónicas, Open Graph, JSON-LD, sitemap y enlaces internos permanecen en la forma ya definida en V4.2: sin `.html`.

## Alcance

Esta versión aplica la auditoría SEO sin modificar el texto visible ni el contenido editorial del sitio.

- URLs canónicas públicas normalizadas sin `.html`.
- Enlaces internos normalizados a las rutas canónicas finales, evitando saltos 301 innecesarios.
- `canonical`, `og:url`, sitemap y JSON-LD alineados con las mismas URLs.
- `_redirects` actualizado para que las rutas históricas apunten directamente a destinos sin extensión.
- Entidad Benevia modelada como `Organization`, sin `Person`, fundador, nombre personal ni `sameAs` personal.
- Servicio modelado como `Service`: “Profesionalización e institucionalización empresarial”.
- Grafo JSON-LD unificado mediante `@id` para Organization, WebSite y Service.
- `quien-esta-detras.html` se declara como `AboutPage`; contacto como `ContactPage`; artículos como `Article` + `WebPage`.
- `articleSection` incorporado a los 12 artículos a partir de su categoría ya visible. No se inventaron fechas exactas: al no existir día de publicación verificable, no se agregó `datePublished`/`dateModified`.
- Meta description del inicio ajustada para desambiguar Benevia en contexto empresarial y eliminar la limitación geográfica “Jalisco y el Bajío”.
- Títulos SEO principales conservados tal como estaban en V4.1, salvo Contacto, que queda como “Conversar con Benevia | Profesionalización empresarial”.
- Meta descriptions de artículos demasiado breves ampliadas sin tocar el cuerpo editorial.
- Open Graph completado con `og:image:alt`; Twitter Card completado con título, descripción e imagen.
- `metodologia.html` se mantiene como compatibilidad histórica, canonicaliza a `/como-trabajamos` y queda `noindex,follow`.
- No existen referencias al nombre comercial anterior, al teléfono antiguo, a una persona fundadora ni a LinkedIn personal dentro del paquete.

## Deliberadamente no modificado

- Ningún H1, párrafo, subtítulo, CTA, tarjeta, navegación visible ni cuerpo de artículo.
- Los slugs históricos de los artículos.
- La arquitectura visual, CSS e imágenes. En `script.js` sólo se normalizaron los destinos de compatibilidad de anclas antiguas para evitar saltos a URLs con `.html`.
- No se añadieron enlaces “Relacionado” ni se corrigieron textos visibles del índice de artículos, porque V4.2 conserva literalmente el contenido visible de V4.1.
- No se crearon fechas de publicación que el material fuente no permite verificar con día exacto.

## Acciones fuera del paquete

La limpieza de menciones externas antiguas (por ejemplo, directorios que aún muestran el nombre comercial anterior o teléfonos anteriores) requiere actualizar cada fuente externa y no puede resolverse desde los archivos del sitio. Tras publicar conviene enviar el sitemap actualizado y solicitar recrawl en Google Search Console.

## Verificación recomendada en Cloudflare Preview

Antes de apuntar el dominio a esta versión, conviene comprobar en la preview de Cloudflare el código HTTP, el encabezado `Location` cuando corresponda y la URL final de estas rutas:

- `/articulos` → debe servir `articulos/index.html` en la URL canónica `/articulos`.
- `/articulos/` → debe normalizarse a `/articulos`.
- `/articulos.html` → debe redirigir permanentemente a `/articulos`.
- `/articulos/que-quede-por-escrito` → debe servir el artículo directamente.
- `/articulos/que-quede-por-escrito.html` → debe normalizarse a la ruta sin extensión.
- `/metodologia` y `/metodologia.html` → deben redirigir directamente a `/como-trabajamos`.
- `/dueno`, `/dueno.html`, `/familia`, `/familia.html`, `/servicios` y `/servicios.html` → deben resolver mediante las reglas permanentes de `_redirects`.

La validación estática del paquete confirma que no queda ninguna colisión física de ruta: `/articulos` corresponde únicamente a `articulos/index.html` y cada artículo corresponde únicamente a su archivo `*.html`.
