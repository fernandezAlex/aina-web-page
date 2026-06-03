import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StatsCard } from '../components/StatsCard';
import { aboutAinaConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function AboutAina() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      const blocks = blocksRef.current?.querySelectorAll('.about-aina-block');
      if (blocks) {
        gsap.fromTo(
          blocks,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: blocksRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 78%',
        onEnter: () => {
          setShouldAnimateStats(true);
          gsap.fromTo(
            statsRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (
    !aboutAinaConfig.titleRegular &&
    aboutAinaConfig.narrativeBlocks.length === 0 &&
    aboutAinaConfig.impactStats.length === 0
  ) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="sobre-aina"
      className="relative w-full py-24 md:py-32 bg-offwhite overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-softblack/10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] gap-12 md:gap-16 items-start">
          <div>
            <div ref={headerRef} className="opacity-0 mb-12 md:mb-16">
              {aboutAinaConfig.subtitle && (
                <p className="text-softblack/50 text-sm font-body uppercase tracking-widest mb-4">
                  {aboutAinaConfig.subtitle}
                </p>
              )}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-softblack tracking-tight max-w-3xl">
                {aboutAinaConfig.titleRegular}{' '}
                <span className="font-serif italic font-normal text-softblack/70">
                  {aboutAinaConfig.titleItalic}
                </span>
              </h2>
            </div>

            <div ref={blocksRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
              {aboutAinaConfig.narrativeBlocks.map((block) => (
                <article
                  key={block.title}
                  className="about-aina-block opacity-0 bg-white rounded-lg p-7 md:p-8 border border-softblack/10 shadow-sm"
                >
                  <p className="text-forest-light text-xs font-body uppercase tracking-widest mb-4">
                    {block.eyebrow}
                  </p>
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-softblack tracking-tight mb-4">
                    {block.title}
                  </h3>
                  <p className="text-softblack/60 font-body text-base leading-relaxed">
                    {block.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside
            ref={statsRef}
            className="opacity-0 lg:sticky lg:top-10 bg-white rounded-lg p-8 md:p-10 border border-softblack/10 shadow-sm"
            aria-label="Impacto de Si Asha Foundation"
          >
            <StatsCard
              stats={aboutAinaConfig.impactStats}
              label={aboutAinaConfig.statsLabel}
              shouldAnimate={shouldAnimateStats}
              valueClassName="text-5xl md:text-6xl"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
