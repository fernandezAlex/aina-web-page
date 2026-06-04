import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_ORBIT_OFFSETS = [-10, 12, -18, 8, -12];
const PLANET_DIAMETERS = [25, 25, 27, 25, 25];
const PLANET_STACK_CLASSES = ['lg:z-[1]', 'lg:z-[2]', 'lg:z-[5]', 'lg:z-[3]', 'lg:z-[4]'];

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
          { y: 90, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.15,
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
          const ring = planet.querySelector<HTMLElement>('.vision-planet-ring');
          const atmosphere = planet.querySelector<HTMLElement>('.vision-planet-atmosphere');

          gsap.to(planet, {
            y: index % 2 === 0 ? -12 : 14,
            duration: 4 + index * 0.24,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });

          if (ring) {
            gsap.to(ring, {
              rotate: index % 2 === 0 ? 360 : -360,
              duration: 20 + index * 2,
              ease: 'none',
              repeat: -1,
            });
          }

          if (atmosphere) {
            gsap.to(atmosphere, {
              opacity: 0.82,
              scale: 1.04,
              duration: 3.2 + index * 0.2,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
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
      <div className="absolute left-1/2 top-40 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-forest-mid/8" />
      <div className="absolute left-1/2 top-56 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full border border-forest-mid/6" />

      <div className="relative z-10 mx-auto max-w-[96rem] px-6 md:px-12">
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
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute left-1/2 top-[18%] h-[28rem] w-[88rem] -translate-x-1/2 rounded-full border border-forest-mid/8" />
            <div className="absolute left-1/2 top-[41%] h-[16rem] w-[82rem] -translate-x-1/2 rounded-full border border-dashed border-forest-mid/10" />
            <div className="absolute left-1/2 top-[48%] h-px w-[86rem] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(141,31,57,0)_0%,rgba(141,31,57,0.16)_18%,rgba(141,31,57,0.34)_50%,rgba(141,31,57,0.16)_82%,rgba(141,31,57,0)_100%)]" />
          </div>

          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-0 lg:px-0">
            {visionConfig.cards.map((card, index) => (
              <article
                key={card.title}
                className={`vision-planet group relative flex w-full justify-center opacity-0 ${PLANET_STACK_CLASSES[index] ?? ''} ${
                  index > 0 ? 'lg:-ml-20' : ''
                } ${index === 1 ? 'lg:mt-3' : ''} ${index === 2 ? 'lg:-mt-2' : ''} ${index === 3 ? 'lg:mt-2' : ''} ${index === 4 ? 'lg:mt-1' : ''}`}
              >
                <div
                  className="relative"
                  style={{
                    perspective: '1400px',
                    width: `min(100%, ${PLANET_DIAMETERS[index] ?? 26}rem)`,
                  }}
                >
                  <div
                    className="vision-planet-shell relative aspect-square overflow-hidden rounded-full border border-white/65 bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.92)_0%,rgba(255,214,168,0.72)_14%,rgba(244,159,83,0.6)_28%,rgba(173,42,72,0.62)_48%,rgba(113,16,41,0.9)_76%,rgba(78,9,28,1)_100%)] p-5 shadow-[0_44px_110px_rgba(103,17,39,0.22)] transition-transform duration-500 group-hover:-translate-y-2"
                  >
                    <div className="vision-planet-atmosphere absolute inset-[3%] rounded-full border border-white/20 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.46),rgba(255,255,255,0)_32%),radial-gradient(circle_at_70%_72%,rgba(255,169,82,0.22),rgba(255,169,82,0)_28%),radial-gradient(circle_at_48%_58%,rgba(113,16,41,0),rgba(113,16,41,0.26)_68%,rgba(52,6,19,0.38)_100%)]" />
                    <div className="absolute inset-[6.5%] rounded-full border border-white/18" />
                    <div className="absolute inset-x-[8%] top-[8%] h-[41%] overflow-hidden rounded-[999px_999px_40%_40%] ring-1 ring-white/30 shadow-[0_14px_34px_rgba(55,8,21,0.14)]">
                      {card.logoSrc ? (
                        <img
                          src={card.logoSrc}
                          alt={card.logoAlt || `${card.title} logo`}
                          className={
                            card.mediaMode === 'image'
                              ? 'h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                              : 'h-full w-full object-contain bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(247,242,234,0.92))] p-7 transition-transform duration-700 group-hover:scale-105'
                          }
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-white text-4xl font-sans font-bold text-forest-mid">
                          {card.initials}
                        </div>
                      )}
                    </div>

                    <div className="absolute inset-x-[8%] bottom-[8%] top-[50%] overflow-hidden rounded-[42%_42%_999px_999px] border-t border-white/10 bg-[linear-gradient(180deg,rgba(175,40,70,0.16)_0%,rgba(123,16,42,0.8)_18%,rgba(95,12,35,0.94)_54%,rgba(72,8,26,0.98)_100%)] px-6 pb-6 pt-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_18px_42px_rgba(255,190,120,0.09)] backdrop-blur-[10px]">
                      <div className="absolute left-1/2 top-0 h-12 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/18 blur-2xl" />
                      <p className="relative mx-auto max-w-[22ch] text-[0.58rem] font-body uppercase tracking-[0.24em] text-white/72 md:text-[0.62rem]">
                        {card.subtitle}
                      </p>
                      <h3 className="relative mx-auto mt-2 max-w-[15ch] text-[1.35rem] font-sans font-bold leading-[1.02] text-white md:text-[1.55rem]">
                        {card.title}
                      </h3>
                      <p className="relative mx-auto mt-3 max-w-[30ch] text-[0.76rem] font-body leading-[1.5] text-white/86 md:text-[0.82rem]">
                        {card.description}
                      </p>
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noreferrer"
                        className="relative mt-4 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-[0.76rem] font-body font-bold text-secondary transition-colors duration-300 hover:border-white/60 hover:text-white md:text-[0.82rem]"
                      >
                        {card.ctaLabel}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>

                    <div
                      className="vision-planet-ring absolute inset-[-4%] rounded-full border border-forest-mid/18"
                    >
                      <div className="absolute left-[8%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-secondary/75 shadow-[0_0_0_8px_rgba(255,169,82,0.08)]" />
                      <div className="absolute right-[12%] top-[20%] h-2.5 w-2.5 rounded-full bg-primary/65" />
                    </div>
                  </div>

                  <div className="absolute -bottom-5 left-1/2 h-12 w-[72%] -translate-x-1/2 rounded-full bg-primary/15 blur-2xl" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          ref={ctaRef}
          className="relative left-1/2 right-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden bg-forest-dark opacity-0 shadow-[0_30px_90px_rgba(103,17,39,0.24)] md:mt-24"
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
