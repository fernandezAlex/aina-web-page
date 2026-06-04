import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_ORBIT_OFFSETS = [-26, 22, -14, 28, -20];
const PLANET_SIZES = [11.5, 12.5, 11.75, 13.5, 11.25];
const ORBIT_ROTATIONS = [-8, 6, -5, 7, -6];
const PLANET_STACK_CLASSES = [
  'lg:-mt-6',
  'lg:mt-5',
  'lg:-mt-3',
  'lg:mt-7',
  'lg:-mt-5',
];

export function Vision() {
  const { vision: visionConfig } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: introRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            introRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      const planets = gsap.utils.toArray<HTMLElement>('.vision-planet');
      if (planets.length) {
        gsap.fromTo(
          planets,
          { y: 80, opacity: 0, rotateZ: 2 },
          {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.14,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 78%',
              once: true,
            },
          }
        );

        planets.forEach((planet, index) => {
          const orb = planet.querySelector<HTMLElement>('.vision-planet-orb');
          const ring = planet.querySelector<HTMLElement>('.vision-planet-ring');
          const capsule = planet.querySelector<HTMLElement>('.vision-planet-capsule');

          gsap.to(planet, {
            y: index % 2 === 0 ? -10 : 12,
            duration: 3.6 + index * 0.28,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });

          if (orb) {
            gsap.to(orb, {
              rotate: index % 2 === 0 ? 8 : -8,
              duration: 8 + index,
              ease: 'none',
              repeat: -1,
              yoyo: true,
            });
          }

          if (ring) {
            gsap.to(ring, {
              rotate: index % 2 === 0 ? 360 : -360,
              duration: 18 + index * 2,
              ease: 'none',
              repeat: -1,
            });
          }

          gsap.to(planet, {
            yPercent: DESKTOP_ORBIT_OFFSETS[index] * 0.35,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });

          if (capsule) {
            gsap.to(capsule, {
              rotateX: index % 2 === 0 ? 6 : -6,
              rotateY: index % 2 === 0 ? -8 : 8,
              transformPerspective: 1200,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom top',
                scrub: 1.5,
              },
            });
          }
        });
      }

      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            ctaRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!visionConfig.heading && visionConfig.cards.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative w-full overflow-hidden bg-offwhite pb-0 pt-24 text-softblack md:pb-0 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#ffa952]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-28 h-80 w-80 rounded-full bg-forest-mid/10 blur-3xl" />
      <div className="absolute left-1/2 top-40 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-forest-mid/8" />
      <div className="absolute left-1/2 top-56 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full border border-forest-mid/6" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div ref={introRef} className="mx-auto max-w-4xl text-center opacity-0">
          {visionConfig.eyebrow && (
            <p className="mb-4 text-sm font-body uppercase tracking-[0.32em] text-forest-mid/70">
              {visionConfig.eyebrow}
            </p>
          )}
          <h2 className="text-4xl font-sans font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
            {visionConfig.heading}
            <br />
            <span className="font-serif italic font-normal text-primary/75">
              {visionConfig.subheading}
            </span>
          </h2>
          {visionConfig.description && (
            <p className="mx-auto mt-8 max-w-3xl text-base font-body leading-relaxed text-softblack/65 md:text-xl">
              {visionConfig.description}
            </p>
          )}
        </div>

        <div ref={cardsRef} className="relative mt-20 md:mt-24">
          <div className="pointer-events-none absolute left-0 right-0 top-[8.75rem] hidden md:block">
            <div className="h-px w-full bg-[linear-gradient(90deg,rgba(141,31,57,0)_0%,rgba(141,31,57,0.18)_10%,rgba(141,31,57,0.38)_50%,rgba(141,31,57,0.18)_90%,rgba(141,31,57,0)_100%)]" />
            <div className="absolute left-[8%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-dashed border-forest-mid/10" />
            <div className="absolute left-[31%] top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-dashed border-forest-mid/10" />
            <div className="absolute left-[54%] top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-dashed border-forest-mid/10" />
            <div className="absolute right-[12%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-dashed border-forest-mid/10" />
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-4">
            {visionConfig.cards.map((card, index) => (
              <article
                key={card.title}
                className={`vision-planet group relative flex flex-col items-center opacity-0 ${PLANET_STACK_CLASSES[index] ?? ''}`}
              >
                <div
                  className="relative flex w-full flex-col items-center"
                  style={{
                    perspective: '1400px',
                  }}
                >
                  <div
                    className="vision-planet-orb relative z-10 flex items-center justify-center rounded-full"
                    style={{
                      width: `${PLANET_SIZES[index] ?? 12}rem`,
                      height: `${PLANET_SIZES[index] ?? 12}rem`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.96)_0%,rgba(248,240,231,0.96)_34%,rgba(225,205,189,0.92)_62%,rgba(177,60,87,0.78)_100%)] shadow-[0_26px_60px_rgba(103,17,39,0.18)]" />
                    <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.92),rgba(255,255,255,0)_38%)]" />
                    <div
                      className="vision-planet-ring absolute inset-[-9%] rounded-full border border-forest-mid/20"
                      style={{
                        transform: `rotate(${ORBIT_ROTATIONS[index] ?? 0}deg)`,
                      }}
                    >
                      <div className="absolute left-[6%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-secondary/75 shadow-[0_0_0_8px_rgba(255,169,82,0.08)]" />
                      <div className="absolute right-[10%] top-[18%] h-2.5 w-2.5 rounded-full bg-primary/70" />
                    </div>
                    <div className="absolute inset-[15%] overflow-hidden rounded-full ring-1 ring-white/50">
                      {card.logoSrc ? (
                        <img
                          src={card.logoSrc}
                          alt={card.logoAlt || `${card.title} logo`}
                          className={
                            card.mediaMode === 'image'
                              ? 'h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                              : 'h-full w-full object-contain bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.94),rgba(247,242,234,0.98))] p-7 transition-transform duration-700 group-hover:scale-105'
                          }
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-white text-3xl font-sans font-bold text-forest-mid">
                          {card.initials}
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-3 left-1/2 h-10 w-[72%] -translate-x-1/2 rounded-full bg-primary/15 blur-2xl" />
                  </div>

                  <div className="mt-[-1.25rem] hidden h-12 w-px bg-[linear-gradient(180deg,rgba(141,31,57,0.35),rgba(141,31,57,0))] md:block" />

                  <div className="vision-planet-capsule relative z-20 mt-4 w-full max-w-[20rem] rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_28px_70px_rgba(27,20,19,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_34px_90px_rgba(103,17,39,0.14)] md:min-h-[27rem] md:rounded-[2rem_2rem_2rem_1rem] lg:max-w-none">
                    <div className="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-secondary/70 shadow-[0_0_0_8px_rgba(255,169,82,0.08)]" />
                    <p className="max-w-[14ch] pr-8 text-xs font-body uppercase tracking-[0.28em] text-forest-mid/70">
                      {card.subtitle}
                    </p>
                    <h3 className="mt-4 text-[1.85rem] font-sans font-bold leading-[1.05] text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm font-body leading-relaxed text-softblack/62 md:text-[0.98rem]">
                      {card.description}
                    </p>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 border-b border-forest-mid/30 pb-1 text-sm font-body font-bold text-forest-mid transition-colors duration-300 hover:border-forest-mid hover:text-softblack"
                    >
                      {card.ctaLabel}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          ref={ctaRef}
          className="relative left-1/2 right-1/2 mt-16 w-screen -translate-x-1/2 overflow-hidden bg-forest-dark opacity-0 shadow-[0_30px_90px_rgba(103,17,39,0.24)] md:mt-20"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${visionConfig.closingBackgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(92,9,28,0.92)_0%,rgba(126,18,43,0.86)_45%,rgba(126,18,43,0.74)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,170,82,0.18),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,3,13,0.18)_0%,rgba(45,3,13,0.5)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
            <div className="max-w-4xl text-center md:text-left">
              <p className="mb-4 text-sm font-body uppercase tracking-[0.32em] text-white/70">
                {visionConfig.closingEyebrow}
              </p>
              <p className="text-3xl font-sans font-bold tracking-tight text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.28)] md:text-5xl lg:text-6xl">
                {visionConfig.closingTitle}
              </p>
              <div className="mt-8 space-y-4">
                {visionConfig.closingParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-3xl text-base font-body leading-relaxed text-white/90 [text-shadow:0_6px_18px_rgba(0,0,0,0.25)] md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <a
                href={visionConfig.ctaHref}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-body font-bold uppercase tracking-[0.18em] text-softblack transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-forest-dark"
              >
                {visionConfig.ctaButtonText}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
