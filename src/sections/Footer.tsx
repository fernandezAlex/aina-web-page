import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const footerBackgroundImage = `${import.meta.env.BASE_URL}bg-img-header.jpeg`;

export function Footer() {
  const { footer: footerConfig } = useSiteContent();
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasNavigation = footerConfig.navLinks.length > 0;
  const closingText = footerConfig.closingText?.trim() ?? '';
  const [closingHeadline, ...closingRestParts] = closingText.split('. ');
  const closingBody = closingRestParts.join('. ');
  const hasFooterContent = Boolean(
    footerConfig.logoText || hasNavigation || closingText
  );

  useEffect(() => {
    if (!hasFooterContent) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: logoRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            logoRef.current,
            { y: 80, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
          );
        },
        once: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, [hasFooterContent]);

  if (!hasFooterContent) return null;

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative w-full overflow-hidden bg-forest-dark pt-24 pb-8 md:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBackgroundImage})`, opacity: 0.18 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,168,80,0.92)_0%,rgba(253,168,80,0.94)_50%,rgba(255,185,111,0.92)_100%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {footerConfig.logoText && (
          <div
            ref={logoRef}
            className="-mx-6 mb-16 px-6 py-12 opacity-0 md:-mx-12 md:mb-24 md:px-12 md:py-16"
          >
            <svg
              viewBox="0 0 600 100"
              className="h-auto max-h-[25vh] w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-secondary font-sans font-extrabold"
                style={{
                  fontSize: '90px',
                  letterSpacing: '-0.03em',
                }}
              >
                {footerConfig.logoText}
              </text>
            </svg>
            {closingText && (
              <div className="mx-auto mt-6 max-w-5xl text-center">
                <p className="font-sans text-2xl font-semibold leading-none text-offwhite/90 md:text-3xl">
                  {closingHeadline}
                  {closingBody ? '.' : ''}
                </p>
                {closingBody && (
                  <p className="mt-3 font-sans text-xl font-semibold leading-snug text-offwhite/82 md:text-2xl">
                    {closingBody}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <div ref={contentRef} className="relative opacity-0">
          <div className="mb-16">
            {hasNavigation && (
              <div>
                <p className="accent-kicker mb-4 text-sm font-body uppercase tracking-widest">
                  {footerConfig.navigationLabel}
                </p>
                <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  {footerConfig.navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex text-base font-body text-offwhite/84 transition-colors duration-300 hover:text-secondary md:text-lg"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-offwhite/18 pt-8 md:flex-row">
            <p className="text-base font-body text-offwhite/64 md:text-lg">
              {footerConfig.copyright}
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f3a34d]/35 to-transparent" />
    </footer>
  );
}
