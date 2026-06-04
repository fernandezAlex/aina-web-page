import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const { hero: heroConfig } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);

  const hasHeroContent = Boolean(
    heroConfig.backgroundText ||
      heroConfig.heroImage ||
      heroConfig.navLinks.length > 0
  );

  useEffect(() => {
    if (!hasHeroContent) return;

    const ctx = gsap.context(() => {
      // Store ScrollTrigger instances for cleanup
      const triggers: ScrollTrigger[] = [];

      // Parallax effect for main text
      const textTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (textRef.current) {
            gsap.set(textRef.current, { yPercent: self.progress * 50 });
          }
        },
      });
      triggers.push(textTrigger);

      // Parallax effect for model (slower movement = appears closer)
      const modelTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (modelRef.current) {
            gsap.set(modelRef.current, { yPercent: self.progress * 20 });
          }
        },
      });
      triggers.push(modelTrigger);

      // Fade out overlay text faster
      const overlayTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '30% top',
        scrub: 1,
        onUpdate: (self) => {
          if (overlayTextRef.current) {
            gsap.set(overlayTextRef.current, { opacity: 1 - self.progress });
          }
        },
      });
      triggers.push(overlayTrigger);

      // Cleanup function
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [hasHeroContent]);

  if (!hasHeroContent) return null;

  if (!heroConfig.backgroundText && !heroConfig.heroImage && heroConfig.navLinks.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-forest-dark"
    >
      {/* Layer 1: Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark to-forest-mid opacity-95" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 2: Big Text */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-10 will-change-transform"
      >
        <p aria-hidden="true" className="text-[12vw] md:text-[14vw] lg:text-[16vw] font-sans font-extrabold text-secondary/58 tracking-tighter leading-none select-none whitespace-nowrap">
          {heroConfig.backgroundText}
        </p>
      </div>

      {/* Layer 3: Hero Model Image (Cutout) */}
      {heroConfig.heroImage && (
        <div
          ref={modelRef}
          className="absolute inset-0 flex items-end justify-center z-20 will-change-transform"
        >
          <div className="relative w-[66vw] md:w-[44vw] lg:w-[34vw] max-w-[620px]">
            <img
              src={heroConfig.heroImage}
              alt={heroConfig.heroImageAlt}
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      )}

      {/* Layer 4: Main content */}
      <div
        ref={overlayTextRef}
        className="absolute inset-x-0 top-[14%] z-30 px-6 md:px-12 will-change-transform"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-white text-center">
          {heroConfig.brandName && (
            <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-secondary/85 md:text-base">
              {heroConfig.brandName}
            </p>
          )}
          {heroConfig.overlayText && (
            <p className="font-serif italic text-2xl tracking-wide text-secondary/92 md:text-3xl lg:text-4xl">
              {heroConfig.overlayText}
            </p>
          )}
        </div>
      </div>

      {/* Navigation hint */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="text-white font-sans font-bold text-lg tracking-tight">
          {heroConfig.brandName}
        </div>
        {heroConfig.navLinks.length > 0 && (
          <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-body">
            {heroConfig.navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</a>
            ))}
          </div>
        )}
        <LanguageSwitcher label={heroConfig.languageLabel} />
      </nav>
    </section>
  );
}
