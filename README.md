# Benevia.mx — propuesta minimalista

Versión construida sobre `Benevia_mx_2026-08-09_v2.zip`.

## Criterio de diseño

La arquitectura conceptual se conserva, pero la información se distribuye por capas:

1. **Inicio**: reconocimiento rápido, tres resultados, tres entradas por situación y una explicación mínima de la intervención.
2. **Qué puede lograr**: siete resultados con profundidad desplegable bajo demanda.
3. **Para quién**: tres rutas (dueños, empresas familiares, directivos/gerentes) y señales de cuándo el trabajo suele aportar.
4. **Cómo trabajamos**: seis pasos visibles, con detalle desplegable sólo si el lector lo solicita.
5. **Artículos**: índice editorial simple; los 12 archivos de artículo se conservaron sin modificación.
6. **Conversar**: formulario principal y datos secundarios en desplegables.

## Decisiones visuales

- Mucho más espacio en blanco y menos tarjetas.
- Líneas, tipografía y jerarquía editorial en lugar de bloques densos.
- Azul Benevia como acento principal; naranja y verde sólo como apoyos.
- Navegación progresiva: primero reconocer, después elegir, luego profundizar.
- Componentes `<details>` nativos para ofrecer profundidad sin saturar la primera lectura.
- Diseño responsivo sin dependencias externas de JavaScript.

## Artículos

Los 12 archivos dentro de `/articulos/` se dejaron intactos. Su presentación cambia únicamente por la nueva hoja de estilos compartida.

## Publicación

- Se conserva `_redirects`, `robots.txt`, `sitemap.xml` y `wrangler.jsonc`.
- `metodologia.html` continúa redirigiendo a `como-trabajamos.html`.
- Cloudflare Web Analytics sigue pendiente de insertar el token real en los bloques comentados.
- El formulario conserva el endpoint de Formspree de la v2.
