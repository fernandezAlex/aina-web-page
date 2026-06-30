# Impact Gallery Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build one responsive card that combines the three current About Aina photographs and the three localized impact statistics in the section’s right column.

**Architecture:** Extract the existing animated counter as a reusable export, then build a focused `ImpactGalleryCard` component that owns the collage and statistics layout. Keep `AboutAina` responsible for section-level copy, scroll triggering, and placement only.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, GSAP ScrollTrigger, Lucide React, Vite.

---

### Task 1: Make the animated counter reusable

**Files:**
- Modify: `src/components/StatsCard.tsx:4-68`

- [ ] **Step 1: Export the existing counter prop interface and component**

Rename `CounterProps` to `AnimatedCounterProps`, export it, rename `Counter` to `AnimatedCounter`, and export the function:

```tsx
export interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  shouldAnimate: boolean;
  useGrouping?: boolean;
  locale: Locale;
}

export function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  shouldAnimate,
  useGrouping = false,
  locale,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const newCount = Math.floor(easeProgress * end);

      if (newCount !== countRef.current) {
        countRef.current = newCount;
        setCount(newCount);
      }

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, shouldAnimate]);

  return (
    <span>
      {prefix}
      {count.toLocaleString(locale, { useGrouping })}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Update `StatsCard` to use the exported name**

Replace its internal usage with:

```tsx
<AnimatedCounter
  end={stat.value}
  prefix={stat.prefix}
  suffix={stat.suffix}
  shouldAnimate={shouldAnimate}
  useGrouping={stat.useGrouping}
  locale={locale}
/>
```

- [ ] **Step 3: Verify TypeScript and lint**

Run: `rtk npm run build && rtk npm run lint`

Expected: both commands exit successfully; the existing `StatsCard` behavior remains unchanged.

### Task 2: Create the fused gallery and impact component

**Files:**
- Create: `src/components/ImpactGalleryCard.tsx`

- [ ] **Step 1: Define the focused component API**

Create these imports and props:

```tsx
import { HeartHandshake, School, UserRound, type LucideIcon } from 'lucide-react';
import type { AboutAinaConfig, Locale } from '../config';
import { AnimatedCounter } from './StatsCard';

interface ImpactGalleryCardProps {
  images: AboutAinaConfig['gallery'];
  stats: AboutAinaConfig['impactStats'];
  label: string;
  ariaLabel: string;
  locale: Locale;
  shouldAnimate: boolean;
}

const statIcons: LucideIcon[] = [School, UserRound, HeartHandshake];
```

- [ ] **Step 2: Build the complete responsive card**

Create the component with this complete implementation:

```tsx
import { HeartHandshake, School, UserRound, type LucideIcon } from 'lucide-react';
import type { AboutAinaConfig, Locale } from '../config';
import { AnimatedCounter } from './StatsCard';

interface ImpactGalleryCardProps {
  images: AboutAinaConfig['gallery'];
  stats: AboutAinaConfig['impactStats'];
  label: string;
  ariaLabel: string;
  locale: Locale;
  shouldAnimate: boolean;
}

const statIcons: LucideIcon[] = [School, UserRound, HeartHandshake];
const iconColors = ['bg-primary', 'bg-primary/65', 'bg-forest-dark'];

export function ImpactGalleryCard({
  images,
  stats,
  label,
  ariaLabel,
  locale,
  shouldAnimate,
}: ImpactGalleryCardProps) {
  if (images.length === 0 && stats.length === 0) return null;

  const [mainImage, lowerLeftImage, lowerRightImage] = images;

  return (
    <article
      className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[#fffdf9] shadow-[0_24px_70px_rgba(73,32,24,0.10)]"
      aria-label={ariaLabel}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(253,168,80,0.10),transparent_32%),radial-gradient(circle_at_96%_92%,rgba(188,5,49,0.06),transparent_30%)]" />
      <div className="relative grid xl:grid-cols-[0.92fr_1.08fr]">
        {images.length > 0 && (
          <div className="relative min-h-[390px] overflow-hidden sm:min-h-[500px] xl:min-h-[760px]">
            {mainImage && (
              <div className="absolute inset-x-0 top-0 h-[68%] overflow-hidden rounded-br-[42%]">
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fffdf9]/25" />
              </div>
            )}
            {lowerLeftImage && (
              <div className="absolute bottom-[4%] left-[5%] z-20 aspect-square w-[58%] overflow-hidden rounded-full border-[8px] border-[#fffdf9] shadow-[0_18px_40px_rgba(73,32,24,0.18)]">
                <img
                  src={lowerLeftImage.src}
                  alt={lowerLeftImage.alt}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            )}
            {lowerRightImage && (
              <div className="absolute bottom-[2%] right-[-4%] z-10 aspect-square w-[54%] overflow-hidden rounded-full border-[8px] border-[#fffdf9] shadow-[0_18px_40px_rgba(73,32,24,0.16)]">
                <img
                  src={lowerRightImage.src}
                  alt={lowerRightImage.alt}
                  className="h-full w-full object-cover object-[18%_center]"
                  loading="lazy"
                />
              </div>
            )}
            <div className="absolute bottom-6 left-6 grid grid-cols-3 gap-2 opacity-40">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-secondary" />
              ))}
            </div>
          </div>
        )}

        {stats.length > 0 && (
          <div className="relative px-6 pb-8 pt-9 sm:px-9 sm:pb-10 xl:px-8 xl:py-12">
            {label && (
              <div className="mb-5">
                <p className="accent-kicker text-sm font-body uppercase tracking-widest">
                  {label}
                </p>
                <span className="mt-4 block h-1 w-12 rounded-full bg-forest-dark" />
              </div>
            )}

            <div>
              {stats.map((stat, index) => {
                const Icon = statIcons[index % statIcons.length];
                const isLast = index === stats.length - 1;

                return (
                  <div
                    key={`${stat.label}-${index}`}
                    className={`grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 py-7 first:pt-5 ${
                      isLast ? '' : 'border-b border-primary/15'
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${
                        iconColors[index % iconColors.length]
                      }`}
                    >
                      <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="font-sans text-5xl font-bold leading-none tracking-tight text-primary xl:text-6xl">
                        <AnimatedCounter
                          end={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          shouldAnimate={shouldAnimate}
                          useGrouping={stat.useGrouping}
                          locale={locale}
                        />
                      </p>
                      <p
                        className={`mt-3 font-body text-base font-semibold leading-snug xl:text-lg ${
                          isLast ? 'text-forest-dark' : 'text-softblack'
                        }`}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Verify the component compiles in isolation**

Run: `rtk npm run build && rtk npm run lint`

Expected: TypeScript reports no prop or Lucide type errors and ESLint exits successfully.

### Task 3: Integrate the fused card into About Aina

**Files:**
- Modify: `src/sections/AboutAina.tsx:1-160`

- [ ] **Step 1: Replace the old card import**

Use:

```tsx
import { ImpactGalleryCard } from '../components/ImpactGalleryCard';
```

Remove the `StatsCard` import.

- [ ] **Step 2: Remove the standalone statistics card from the left column**

Delete the `accent-card` wrapper and its `StatsCard` child. Keep the narrative header and all four body paragraphs unchanged.

- [ ] **Step 3: Widen the right column and render the fused card**

Change the outer desktop grid to:

```tsx
<div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(560px,1.2fr)] lg:gap-14">
```

Replace the old photo grid inside `aside` with:

```tsx
<aside ref={statsRef} className="opacity-0 lg:sticky lg:top-8">
  <ImpactGalleryCard
    images={aboutAinaConfig.gallery}
    stats={aboutAinaConfig.impactStats}
    label={aboutAinaConfig.impactLabel}
    ariaLabel={aboutAinaConfig.impactAriaLabel}
    locale={locale}
    shouldAnimate={shouldAnimateStats}
  />
</aside>
```

Keep the existing GSAP trigger attached to `statsRef`, so the whole fused card enters once and the counters start at the same moment.

- [ ] **Step 4: Verify localized content and production checks**

Run: `rtk npm run build && rtk npm run lint`

Expected: build and lint succeed; no copy, image path, alternative text, or locale config changes appear in the diff.

### Task 4: Visual verification and refinement

**Files:**
- Inspect: `src/components/ImpactGalleryCard.tsx`
- Inspect: `src/sections/AboutAina.tsx`

- [ ] **Step 1: Start the local preview**

Run: `rtk npm run dev -- --host 127.0.0.1`

Expected: Vite prints a reachable local URL and serves the current project.

- [ ] **Step 2: Check desktop composition**

At approximately 1440 px viewport width, confirm:

- The narrative remains in the left column.
- One fused card occupies the right column.
- All three current photos appear in the collage.
- All three current statistics appear in order with localized formatting.
- Photo overlaps stay inside the rounded card.

- [ ] **Step 3: Check mobile composition**

At 390 px viewport width, confirm:

- The collage and statistics remain inside the same card.
- The collage is above the statistics.
- No horizontal scrolling or clipped copy occurs.
- Every statistic remains readable and each image keeps a useful crop.

- [ ] **Step 4: Run final verification**

Run: `rtk git diff --check && rtk npm run build && rtk npm run lint`

Expected: no whitespace errors; build and lint succeed.

- [ ] **Step 5: Review the scoped diff**

Run: `rtk git diff -- src/components/StatsCard.tsx src/components/ImpactGalleryCard.tsx src/sections/AboutAina.tsx`

Expected: the diff contains only the reusable counter export, fused card, and About Aina integration; unrelated user changes remain untouched.
