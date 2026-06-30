# Tarjeta fusionada de impacto e imágenes

## Objetivo

Fusionar las tres estadísticas de impacto y las tres fotografías actuales de la sección “Sobre Aina” en una sola tarjeta visual. La tarjeta ocupará la columna derecha de la sección y mantendrá el bloque narrativo completo en la columna izquierda.

## Referencia visual

La composición seguirá la referencia aprobada por la usuaria: una tarjeta de fondo blanco cálido, bordes redondeados y una distribución interna con collage fotográfico orgánico a la izquierda y estadísticas a la derecha. La referencia define la jerarquía, proporción y carácter editorial; el contenido seguirá procediendo de la configuración actual del sitio.

## Composición de escritorio

- La sección conservará dos columnas: texto a la izquierda y tarjeta fusionada a la derecha.
- La columna derecha tendrá más anchura que en la implementación actual para alojar la composición completa sin comprimir el copy.
- La tarjeta contendrá una cuadrícula interna de dos áreas.
- El área fotográfica mostrará la primera imagen como pieza principal y las otras dos como recortes circulares u orgánicos superpuestos en la parte inferior.
- El área de impacto mostrará el rótulo “Impacto acumulado” y las tres estadísticas actuales en orden, separadas por líneas finas.
- Las cifras conservarán su animación de conteo y el formato localizado existente.
- Los tonos granate y naranja seguirán los tokens de color actuales del proyecto.

## Composición móvil

- Fotografías y estadísticas permanecerán dentro de una única tarjeta.
- El collage ocupará la parte superior y las estadísticas se apilarán debajo.
- Las superposiciones se limitarán al área fotográfica para evitar recortes, desbordamientos o solapamientos con el texto.
- El contenido conservará legibilidad y separación táctil desde 320 px de ancho.

## Contenido y datos

- No se modificará el copy de las estadísticas.
- No se cambiarán rutas de imágenes ni textos alternativos.
- La tarjeta consumirá `aboutAinaConfig.gallery`, `aboutAinaConfig.impactStats`, `impactLabel` e `impactAriaLabel`.
- El resultado seguirá funcionando en español, inglés y catalán mediante la configuración localizada existente.

## Componentes

- Se creará un componente específico para la tarjeta fusionada, responsable únicamente de la composición de galería e impacto.
- `AboutAina` mantendrá la estructura general de la sección y colocará el nuevo componente en el `aside` derecho.
- El contador animado existente se reutilizará o extraerá a una unidad compartida para evitar duplicar su lógica.

## Accesibilidad y movimiento

- Las imágenes conservarán sus textos alternativos actuales.
- La agrupación de estadísticas conservará su etiqueta accesible.
- La animación de entrada seguirá activándose al entrar la tarjeta en el viewport.
- Las cifras terminarán siempre en su valor real aunque la animación no pueda completarse.

## Verificación

- Ejecutar TypeScript y la compilación de producción.
- Ejecutar ESLint.
- Comprobar visualmente la sección en anchuras de escritorio y móvil.
- Confirmar que aparecen exactamente tres imágenes y tres estadísticas, con el contenido localizado actual.

## Fuera de alcance

- Cambiar textos, cifras o fotografías.
- Rediseñar el bloque narrativo de la izquierda.
- Alterar otras tarjetas de estadísticas del sitio.
