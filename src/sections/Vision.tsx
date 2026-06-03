import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { visionConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

      const cards = cardsRef.current?.querySelectorAll('.vision-card');
      if (cards?.length) {
        ScrollTrigger.create({
          trigger: cardsRef.current,
          start: 'top 78%',
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 70, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.12,
              }
            );
          },
          once: true,
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
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#ffa952]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-28 h-80 w-80 rounded-full bg-forest-mid/10 blur-3xl" />

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

        <div ref={cardsRef} className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {visionConfig.cards.map((card) => (
            <article
              key={card.title}
              className="vision-card group flex min-h-[360px] flex-col rounded-3xl border border-softblack/10 bg-white/80 p-6 opacity-0 shadow-[0_24px_80px_rgba(27,20,19,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-forest-mid/25 hover:shadow-[0_30px_90px_rgba(103,17,39,0.14)]"
            >
              <div
                className={`mb-8 overflow-hidden rounded-2xl ring-1 ring-softblack/5 ${
                  card.mediaMode === 'image'
                    ? 'h-32 bg-softblack/5'
                    : 'flex h-24 items-center justify-center bg-offwhite/80'
                }`}
              >
                {card.logoSrc ? (
                  <img
                    src={card.logoSrc}
                    alt={card.logoAlt || `${card.title} logo`}
                    className={
                      card.mediaMode === 'image'
                        ? 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        : 'max-h-16 max-w-[75%] object-contain'
                    }
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-forest-mid/35 bg-white text-lg font-sans font-bold text-forest-mid">
                    {card.initials}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col">
                <p className="mb-3 text-xs font-body uppercase tracking-[0.24em] text-forest-mid/70">
                  {card.subtitle}
                </p>
                <h3 className="text-xl font-sans font-bold leading-tight text-primary">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm font-body leading-relaxed text-softblack/60">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start border-b border-forest-mid/30 pb-1 text-sm font-body font-bold text-forest-mid transition-colors duration-300 hover:border-forest-mid hover:text-softblack"
                >
                  {card.ctaLabel}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
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
                Una causa que se siente cerca
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
