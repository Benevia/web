# Benevia.mx | V3 arquitectura compuesta estandarizada | 2026-09-18

Sitio estático completo construido sobre la V3 del 16-sep-2026. Esta iteración conserva íntegro el contenido editorial de V3 y rediseña su puesta en escena para recuperar dinamismo de sitio web sin abandonar la sobriedad visual alcanzada.

## Principio de esta versión

La regla es: **el contenido no cambia; cambia el recipiente visual que le corresponde a cada idea**.

Se conserva la V3 como base conceptual y editorial, junto con su descubrimiento progresivo, pero se recupera la variedad compositiva de versiones antiguas de Benevia: heroes realmente compuestos, tarjetas sólo donde aportan, columnas, mosaicos, secuencias, bandas y cambios de escala.

No se añadieron textos nuevos ni se reescribió contenido existente.

## Contenido

- Se conservan íntegros títulos, subtítulos, párrafos, artículos, CTA y demás contenido editorial de V3.
- Los cuatro detonantes iniciales de la portada continúan como entradas explorables mediante `details/summary`.
- Se conserva la revelación progresiva de los capítulos definidos en V3.
- Los doce artículos individuales permanecen como páginas tranquilas de lectura.

## Arquitectura visual

- Papel `#F6F8F7` como plano principal.
- Tinta `#04202E` para giros de nivel: en portada, “Normalmente nos llaman por otra cosa” y “Cómo trabajamos”; en interiores, “Una situación real”; además de la banda final y el pie.
- Blanco reservado para tarjetas, formularios y piezas contenidas.
- Sin beige, gradientes ni halos decorativos.
- Heroes interiores a dos planos: texto + esquema CG cuando existe; texto + lead contrapuesto cuando no hay esquema.
- Secciones interiores con recipientes distintos según su función: rutas, citas, prosa, situaciones reales, desplegables, timeline, índice editorial y contacto.
- En Artículos, la retícula deja de ser uniforme y funciona como composición editorial.
- En la portada, cada movimiento narrativo tiene una puesta en escena distinta sin agregar contenido.

## Esquemas CG e integración Iz

- `visual/` contiene 16 SVG: 15 esquemas CG y una variante oscura de convergencia.
- Se conserva la asignación conceptual de V3; no se aumentó su presencia para crear dinamismo artificial.
- Paleta CG: azul `#0A70B8`, naranja `#D26E00`, verde `#738F24`, gris `#414141`, papel y neutros derivados.
- Los esquemas siguen integrados con criterio Iz: pequeños, subordinados al contenido y presentes sólo cuando tienen razón conceptual.
- `images/` permanece idéntica a V3.


## Estandarización de esquemas CG

Se revisaron todas las apariciones de esquemas CG en las 22 páginas. La regla final es:

- Un esquema CG aislado nunca crea su propia tarjeta.
- Los esquemas aislados usan fondo transparente, sin borde y sin sombra.
- En cabeceras interiores, el esquema flota directamente sobre el plano papel.
- En la portada, los marcadores narrativos también quedan integrados directamente al papel o a la tinta correspondiente.
- Cuando un esquema aparece dentro de una tarjeta que contiene texto, la tarjeta pertenece al contenido completo, no al esquema.
- En “Cómo trabajamos”, el fondo papel detrás de las marcas sólo sirve para interrumpir visualmente la línea de la secuencia y es idéntico al fondo de la sección; no forma un recuadro visible.

También se incorporó la versión más reciente, transparente y coherente con la familia, de `jerarquia-excepcion.svg`, `jerarquia-amplia.svg`, `red-coordinacion.svg` y `red-distribuida.svg`.

## Dinamismo

El dinamismo proviene principalmente de arquitectura, no de adornos:

- apertura de portada con cuatro entradas visuales explorables;
- cambios de escala entre capítulos;
- piezas blancas sobre papel para separar ideas sin cambiar de paleta;
- dos giros a tinta en la portada;
- mosaicos de observaciones y citas;
- timeline visual de “Cómo trabajamos”;
- retícula editorial desigual en Artículos;
- variación de composición 40/60, 50/50 y tres columnas en páginas interiores;
- interacción discreta en tarjetas y desplegables;
- indicador de progreso de lectura.

## Interacción y accesibilidad

- Menú responsivo.
- Progreso de lectura en un solo color.
- `details/summary` nativos para revelación progresiva y desplegables.
- Filtros de artículos conservados.
- Foco visible para teclado.
- Animaciones discretas y desactivables mediante `prefers-reduced-motion`.
- Esquemas decorativos ocultos para lectores de pantalla cuando el texto ya contiene la información.

## Verificación realizada

- Los 22 archivos HTML permanecen byte por byte idénticos a la V3 de arquitectura compuesta: **0 cambios de contenido**.
- Se comparó `images/` por hash contra V3: **sin cambios**.
- Se verificaron referencias locales: **0 recursos o enlaces locales faltantes**.
- Se auditó `visual/`: **0 SVG con fondo blanco explícito**.
- Se auditó CSS: **0 tarjetas blancas, bordes o sombras en contenedores CG aislados (`hero-cg` y `cg-marker`)**.
- Se verificaron IDs duplicados: **0 duplicados detectados**.
- La versión base ya había sido probada a 390, 768 y 1024 px sin desbordamiento horizontal. Esta revisión sólo reduce anchos y elimina padding, borde y sombra de contenedores CG aislados, por lo que no introduce nuevas fuentes de desbordamiento.
- `script.js` pasa validación de sintaxis con Node.
- Se conserva la estructura de publicación `_redirects`, `robots.txt`, `sitemap.xml` y `wrangler.jsonc`.
- El formulario conserva el endpoint Formspree original.
