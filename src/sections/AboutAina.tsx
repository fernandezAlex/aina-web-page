import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'lucide-react';
import { ImpactGalleryCard } from '../components/ImpactGalleryCard';
import { useI18n, useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

export function AboutAina() {
  const { locale } = useI18n();
  const { aboutAina: aboutAinaConfig } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leadBlocksRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const [shouldAnimateStats, setShouldAnimateStats] = useState(false);
  const closingParagraph = aboutAinaConfig.paragraphs[aboutAinaConfig.paragraphs.length - 1];
  const bodyParagraphs = aboutAinaConfig.paragraphs.slice(0, -1);
  const hasImpactCardContent =
    aboutAinaConfig.gallery.length > 0 || aboutAinaConfig.impactStats.length > 0;

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

      if (statsRef.current) {
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
    !hasImpactCardContent
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
        <div
          className={`grid items-start gap-12 ${
            hasImpactCardContent
              ? 'lg:grid-cols-[minmax(0,0.8fr)_minmax(560px,1.2fr)] lg:gap-14'
              : ''
          }`}
        >
          <div>
            <div ref={headerRef} className="mb-3 opacity-0">
              {aboutAinaConfig.subtitle && (
                <p className="accent-kicker text-sm font-body uppercase tracking-widest mb-4">
                  {aboutAinaConfig.subtitle}
                </p>
              )}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-primary tracking-tight max-w-3xl">
                {aboutAinaConfig.title}
              </h2>
              <p className="mt-6 max-w-3xl text-lg font-body leading-relaxed text-softblack md:text-xl">
                {aboutAinaConfig.intro}
              </p>
            </div>

            {bodyParagraphs.length > 0 && (
              <div ref={leadBlocksRef} className="mb-10 space-y-2 md:mb-12">
                {bodyParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="about-aina-block max-w-3xl text-lg leading-relaxed text-softblack opacity-0 md:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

          {hasImpactCardContent && (
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
          )}
        </div>

        {closingParagraph && (
          <div className="mx-auto mt-16 max-w-5xl md:mt-20">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#f6c27f]/65 bg-[linear-gradient(180deg,#FDA850_0%,#ffb766_100%)] px-8 py-10 text-center shadow-[0_26px_80px_rgba(141,31,57,0.14)] md:px-12 md:py-12">
              <div className="pointer-events-none absolute inset-[14px] rounded-[1.5rem] border border-white/22" />
              <div className="pointer-events-none absolute inset-x-14 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="pointer-events-none absolute -left-4 top-8 h-20 w-20 rounded-full border border-white/24 bg-white/8 blur-[1px]" />
              <div className="pointer-events-none absolute -right-6 bottom-5 h-24 w-24 rounded-full border border-[#ffe2b8]/28 bg-white/10 blur-sm" />
              <div className="pointer-events-none absolute left-1/2 top-5 h-9 w-9 -translate-x-1/2 rotate-45 rounded-[0.9rem] border border-white/28 bg-white/12" />
              <div className="pointer-events-none absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/28 bg-white/12 shadow-[0_10px_24px_rgba(255,255,255,0.08)]">
                <Heart className="h-6 w-6 text-white" fill="currentColor" strokeWidth={1.8} />
              </div>

              <p className="relative text-2xl font-sans font-semibold leading-tight tracking-tight text-primary md:text-3xl lg:text-4xl">
                {closingParagraph}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
