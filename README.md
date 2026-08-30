# Benevia.mx | versión final 2026-08-30

Sitio estático completo, listo para publicar con la misma estructura de despliegue del paquete recibido.

## Dirección visual

- Identidad editorial y sistémica, con azul noche como arquitectura principal y la paleta Benevia usada como código funcional.
- Tipografías web: Sora para títulos, IBM Plex Sans para lectura e IBM Plex Mono para señalización.
- Lenguaje gráfico propio basado en nodos, arcos y conexiones derivados de la geometría del símbolo de Benevia.
- Sin fotografías corporativas genéricas, sin cuadrículas de tarjetas como lenguaje dominante y sin botones tipo píldora.
- Navegación y jerarquía optimizadas para escritorio y móvil.

## Contenido

Se conservaron los textos y los 12 artículos del paquete fuente entregado. Se incorporó en la portada la frase indicada expresamente: "Lo que antes dependía de una persona ahora vive en la operación."

Se eliminaron del sitio los usos de guion largo, comillas angulares, la leyenda corporativa histórica y el lema histórico en los metadatos. El pie no incluye lema.

## Publicación

La estructura, `_redirects`, `robots.txt`, `sitemap.xml` y `wrangler.jsonc` se conservan para el flujo de publicación existente en Cloudflare.

El formulario de `contacto.html` conserva exactamente el endpoint Formspree del sitio fuente recibido: `https://formspree.io/f/xdabwwzv`.

No se incorporó un token de analítica porque el paquete fuente no contenía uno real. El sitio funciona sin analítica y puede publicarse así; Cloudflare Web Analytics puede añadirse posteriormente sin modificar el diseño.
