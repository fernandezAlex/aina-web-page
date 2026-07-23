# Aina Web Page

Proyecto web independiente basado en `aina-web-page`, adaptado visual y narrativamente siguiendo las guias de marca, tono y sistema de diseno de Si Asha Foundation.

## Que incluye

- Paleta alineada con la guia de marca de Si Asha Foundation
- Tipografias locales reutilizadas desde el proyecto principal
- Copy en espanol orientado a una presentacion editorial con sensibilidad social
- Integracion de referencias visuales y documentales alineadas con el branding de Si Asha
- Animaciones GSAP y estructura single-page mantenidas
- Documentacion local de branding, guidelines y design system en `docs/`

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- GSAP
- Swiper

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue

El despliegue de producción se automatiza con GitHub Actions. La configuración inicial, los secretos necesarios, la primera publicación y la recuperación están documentados en [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## Nota

Este repo es independiente del proyecto principal de Si Asha Foundation. Reutiliza su documentacion de marca como referencia de trabajo, pero mantiene su propio historial Git, configuracion y despliegue.

## Documentacion incluida

- `docs/brand-guidelines.md`: guia principal de marca y tono
- `docs/information-architecture.md`: estructura y secciones recomendadas
- `docs/accessibility-checklist.md`: criterios de accesibilidad
- `docs/design-system/`: principios, tokens, patrones y reglas de aplicacion visual
