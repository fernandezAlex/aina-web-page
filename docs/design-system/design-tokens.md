# Design Tokens

## Purpose

These tokens define the visual foundation for future design and code work.

## Token philosophy

- keep the token set compact
- prefer semantic naming over raw color-name naming where possible
- map brand decisions cleanly into reusable system variables

## Color tokens

### Brand

- `color.brand.primary`: `#BD0833`
- `color.brand.accent`: `#EB6B2F`
- `color.brand.accentSoft`: `#FFA952`
- `color.brand.earth`: `#9C5E03`

### Surfaces

- `color.surface.base`: `#FFFFFF`
- `color.surface.warm`: `#E8CEB0`
- `color.surface.subtle`: `#F7F2EA`

### Text

- `color.text.primary`: `#111111`
- `color.text.secondary`: `#333333`
- `color.text.inverse`: `#FFFFFF`

### Borders

- `color.border.subtle`: `#E6DDD1`
- `color.border.strong`: `#CDBAA3`

### Actions

- `color.action.primary`: `#BD0833`
- `color.action.primaryHover`: `#990628`
- `color.action.secondary`: `#EB6B2F`
- `color.action.secondaryHover`: `#C85A25`

### Feedback

- `color.feedback.success`: `#2E7D32`
- `color.feedback.warning`: `#B26A00`
- `color.feedback.error`: `#B00020`

## Typography tokens

## Font intent

- heading family intent: geometric sans
- body family intent: human readable sans or readable serif-compatible body choice if later approved

## Type scale

- `type.display`: 56 / 1.05 / 700
- `type.h1`: 44 / 1.1 / 700
- `type.h2`: 36 / 1.15 / 700
- `type.h3`: 28 / 1.2 / 600
- `type.h4`: 24 / 1.25 / 600
- `type.h5`: 20 / 1.3 / 600
- `type.h6`: 18 / 1.35 / 600
- `type.bodyLg`: 20 / 1.6 / 400
- `type.body`: 16 / 1.65 / 400
- `type.bodySm`: 14 / 1.6 / 400
- `type.label`: 14 / 1.4 / 600
- `type.caption`: 12 / 1.4 / 400

Values above are font-size / line-height / weight.

## Spacing tokens

- `space.1`: `4px`
- `space.2`: `8px`
- `space.3`: `12px`
- `space.4`: `16px`
- `space.5`: `24px`
- `space.6`: `32px`
- `space.7`: `48px`
- `space.8`: `64px`
- `space.9`: `96px`
- `space.10`: `128px`

## Radius tokens

- `radius.sm`: `6px`
- `radius.md`: `12px`
- `radius.lg`: `20px`
- `radius.xl`: `32px`
- `radius.pill`: `999px`

## Shadow tokens

- `shadow.sm`: `0 2px 8px rgba(17, 17, 17, 0.06)`
- `shadow.md`: `0 8px 24px rgba(17, 17, 17, 0.08)`
- `shadow.lg`: `0 16px 40px rgba(17, 17, 17, 0.10)`

## Layout tokens

- `layout.maxWidth.content`: `1200px`
- `layout.maxWidth.reading`: `760px`
- `layout.gutter.mobile`: `20px`
- `layout.gutter.desktop`: `32px`
- `layout.sectionGap.sm`: `48px`
- `layout.sectionGap.md`: `72px`
- `layout.sectionGap.lg`: `96px`

## Breakpoints

- `breakpoint.sm`: `640px`
- `breakpoint.md`: `768px`
- `breakpoint.lg`: `1024px`
- `breakpoint.xl`: `1280px`
- `breakpoint.2xl`: `1440px`

## Motion tokens

- `motion.fast`: `150ms`
- `motion.base`: `220ms`
- `motion.slow`: `320ms`
- `motion.ease`: `ease`

## Token usage rules

- do not create ad hoc colors when a semantic token exists
- prefer spacing tokens over arbitrary pixel jumps
- prefer radius consistency over component-by-component invention
- keep motion subtle and short
