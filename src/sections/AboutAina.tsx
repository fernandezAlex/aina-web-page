import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StatsCard } from '../components/StatsCard';
import { useI18n, useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

export function AboutAina() {
  const { locale } = useI18n();
  const { aboutAina: aboutAinaConfig } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);
  const leadBlocksRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const closingParagraph = aboutAinaConfig.paragraphs[aboutAinaConfig.paragraphs.length - 1];
  const bodyParagraphs = aboutAinaConfig.paragraphs.slice(0, -1);
  const leadParagraphs = bodyParagraphs.slice(0, 2);
  const sideParagraphs = bodyParagraphs.slice(2);

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

      const blocks = blocksRef.current?.querySelectorAll('.about-aina-block');
      if (blocks) {
        gsap.fromTo(
          blocks,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: blocksRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      const leadBlocks = leadBlocksRef.current?.querySelectorAll('.about-aina-block');
      if (leadBlocks) {
        gsap.fromTo(
          leadBlocks,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: leadBlocksRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (
    !aboutAinaConfig.title &&
    aboutAinaConfig.paragraphs.length === 0 &&
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
                <p className="accent-kicker text-sm font-body uppercase tracking-widest mb-4">
                  {aboutAinaConfig.subtitle}
                </p>
              )}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-primary tracking-tight max-w-3xl">
                {aboutAinaConfig.title}
              </h2>
              <p className="mt-6 max-w-3xl text-base md:text-lg font-body leading-relaxed text-softblack/70">
                {aboutAinaConfig.intro}
              </p>
            </div>

            {leadParagraphs.length > 0 && (
              <div ref={leadBlocksRef} className="mb-10 space-y-5 md:mb-12">
                {leadParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="about-aina-block max-w-3xl text-base leading-relaxed text-softblack opacity-0 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <div
              ref={statsRef}
              className="accent-card mb-10 opacity-0 rounded-lg border border-secondary/15 bg-white p-8 shadow-sm md:mb-12 md:p-10"
              aria-label={aboutAinaConfig.impactAriaLabel}
            >
              <StatsCard
                stats={aboutAinaConfig.impactStats}
                label={aboutAinaConfig.impactLabel}
                shouldAnimate={shouldAnimateStats}
                valueClassName="text-5xl md:text-6xl"
                locale={locale}
              />
            </div>

          </div>

          <aside className="space-y-10 lg:sticky lg:top-10">
            <div className="grid grid-cols-2 gap-4">
              {aboutAinaConfig.gallery.map((image, index) => (
                <div
                  key={image.src}
                  className={`overflow-hidden rounded-[1.75rem] border border-softblack/10 bg-white shadow-sm ${
                    index === 0 ? 'col-span-2 aspect-[4/3]' : 'aspect-[4/5]'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`h-full w-full object-cover ${index === 0 ? 'object-top' : ''}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {sideParagraphs.length > 0 && (
              <div ref={blocksRef} className="space-y-5">
                {sideParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="about-aina-block text-base leading-relaxed text-softblack opacity-0 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </aside>
        </div>

        {closingParagraph && (
          <div className="mx-auto mt-16 max-w-5xl text-center md:mt-20">
            <p className="text-2xl font-sans font-semibold leading-tight tracking-tight text-primary md:text-3xl lg:text-4xl">
              {closingParagraph}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
