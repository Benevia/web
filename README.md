# Benevia.mx — versión final minimalista

## Criterio de esta versión

Esta versión conserva la arquitectura minimalista del portal, pero cambia el punto de entrada. El sitio ya no comienza describiendo una empresa ideal, sino el momento en que la forma de operar que permitió llegar hasta aquí empieza a resultar insuficiente para la siguiente etapa.

El hilo principal es: reconocer el momento → elegir desde dónde se vive → entender qué puede cambiar → conocer cómo trabaja Benevia → conversar.

El lenguaje público evita exponer criterios internos de tamaño o facturación y mantiene tratamiento de “usted”. La profundidad metodológica queda detrás de resultados observables y situaciones reales.

## Artículos

El contenido editorial de los 12 artículos se conservó sin modificación. En esta actualización sólo cambiaron sus enlaces de navegación y metadatos técnicos para usar las URLs públicas limpias.

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

## Revisión final

- El formulario usa el endpoint histórico de Formspree `xdabwwzv`, presente en todas las versiones anteriores del portal. Antes de la primera publicación en producción conviene confirmar en el panel de Formspree que ese endpoint siga activo en la cuenta de Benevia.
- Sustituir `TOKEN_AQUI` por el token real de Cloudflare Web Analytics sólo si se desea activar esa analítica.
- El cuerpo editorial de los 12 artículos se mantiene sin modificación respecto de la versión base.

## Convención de URLs

La URL pública canónica de cada página es la ruta limpia, sin `.html` (por ejemplo, `/contacto`, `/articulos` y `/resultados`). Los archivos físicos conservan la extensión `.html`; Cloudflare Workers los sirve mediante `html_handling: auto-trailing-slash`.

El archivo `_redirects` sólo dirige rutas históricas y URLs con `.html` hacia su versión limpia. No existen reglas en sentido inverso, para evitar ciclos de redirección.

Los textos editoriales de los 12 artículos no se modificaron en esta actualización; sólo se actualizaron navegación y metadatos técnicos para usar las URLs canónicas limpias.
