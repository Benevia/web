# Benevia.mx — V4.2 (SEO técnico y semántico)

Versión preparada el 20 de septiembre de 2026 a partir de V4.1.

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
- No existen referencias a “Benevia Grupo Consultor”, al teléfono antiguo, a una persona fundadora ni a LinkedIn personal dentro del paquete.

## Deliberadamente no modificado

- Ningún H1, párrafo, subtítulo, CTA, tarjeta, navegación visible ni cuerpo de artículo.
- Los slugs históricos de los artículos.
- La arquitectura visual, CSS e imágenes. En `script.js` sólo se normalizaron los destinos de compatibilidad de anclas antiguas para evitar saltos a URLs con `.html`.
- No se añadieron enlaces “Relacionado” ni se corrigieron textos visibles del índice de artículos, porque V4.2 conserva literalmente el contenido visible de V4.1.
- No se crearon fechas de publicación que el material fuente no permite verificar con día exacto.

## Acciones fuera del paquete

La limpieza de menciones externas antiguas (por ejemplo, directorios que aún muestran “Benevia Grupo Consultor” o teléfonos anteriores) requiere actualizar cada fuente externa y no puede resolverse desde los archivos del sitio. Tras publicar conviene enviar el sitemap actualizado y solicitar recrawl en Google Search Console.
