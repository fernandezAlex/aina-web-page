import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const { hero: heroConfig } = useSiteContent();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateHeaderState() {
      setHasScrolled(window.scrollY > 24);
    }

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function closeOnResize() {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', closeOnResize);

    return () => window.removeEventListener('resize', closeOnResize);
  }, [isMobileMenuOpen]);

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

      {/* Sticky navigation */}
      <nav
        className={[
          'fixed left-0 right-0 top-0 z-50 px-4 py-4 transition-all duration-300 md:px-8 lg:px-12',
          hasScrolled || isMobileMenuOpen
            ? 'bg-forest-dark/88 shadow-[0_12px_42px_rgba(0,0,0,0.22)] backdrop-blur-xl'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a
            href="#hero"
            className="shrink-0 text-white font-sans font-bold text-lg tracking-tight transition-colors duration-300 hover:text-secondary md:text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {heroConfig.brandName}
          </a>

          {heroConfig.navLinks.length > 0 && (
            <div className="hidden items-center gap-4 text-white/82 text-sm font-body lg:gap-7 lg:flex">
              {heroConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <LanguageSwitcher label={heroConfig.languageLabel} />
            {heroConfig.navLinks.length > 0 && (
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-main-menu"
                aria-label={isMobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_14px_38px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors duration-300 hover:bg-white/16 lg:hidden"
              >
                {isMobileMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
              </button>
            )}
          </div>
        </div>

        {heroConfig.navLinks.length > 0 && (
          <div
            id="mobile-main-menu"
            className={[
              'mx-auto mt-4 max-w-7xl overflow-hidden rounded-3xl border border-white/15 bg-forest-dark/96 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 lg:hidden',
              isMobileMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 border-transparent opacity-0',
            ].join(' ')}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="flex flex-col p-2">
              {heroConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 font-body text-base text-white/86 transition-colors duration-300 hover:bg-white/12 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </section>
  );
}
