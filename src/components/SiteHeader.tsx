import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { type HeroConfig } from '../config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

interface SiteHeaderProps {
  heroConfig: HeroConfig;
}

export function SiteHeader({ heroConfig }: SiteHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const updateStickyState = () => {
      const heroSection = document.getElementById('hero');

      if (!heroSection) {
        setIsSticky(window.scrollY > 16);
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const triggerPoint = heroBottom - 96;
      setIsSticky(window.scrollY >= triggerPoint);
    };

    updateStickyState();
    window.addEventListener('scroll', updateStickyState, { passive: true });
    window.addEventListener('resize', updateStickyState);

    return () => {
      window.removeEventListener('scroll', updateStickyState);
      window.removeEventListener('resize', updateStickyState);
    };
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isSticky
          ? 'border-b border-white/10 bg-forest-dark/95 shadow-[0_12px_40px_rgba(103,17,39,0.3)] backdrop-blur-xl'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-5 md:px-12 md:py-6">
        <a
          href="#hero"
          className={[
            'text-[1.05rem] font-sans font-bold tracking-tight text-primary transition-colors duration-300 md:text-[1.28rem]',
          ].join(' ')}
        >
          {heroConfig.brandName}
        </a>

        {heroConfig.navLinks.length > 0 && (
          <nav
            aria-label="Primary"
            className={[
              'hidden items-center gap-8 text-[1.04rem] font-body font-bold transition-colors duration-300 md:flex md:text-[1.12rem]',
              isSticky ? 'text-primary' : 'text-primary/94',
            ].join(' ')}
          >
            {heroConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={[
                  'transition-colors duration-300',
                  'hover:text-white/92',
                ].join(' ')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher label={heroConfig.languageLabel} dark={isSticky} />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className={[
                    'inline-flex size-11 items-center justify-center rounded-full border backdrop-blur transition-colors duration-300',
                    isSticky
                      ? 'border-primary/70 bg-primary text-white shadow-[0_10px_30px_rgba(188,5,49,0.24)]'
                      : 'border-primary/70 bg-primary text-white shadow-[0_10px_26px_rgba(188,5,49,0.2)]',
                  ].join(' ')}
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-l border-black/10 bg-[#f7f2ea] px-0 text-softblack"
              >
                <SheetHeader className="border-b border-black/8 px-6 pb-5 pt-6">
                  <SheetTitle className="font-sans text-base tracking-[0.08em]">
                    {heroConfig.brandName}
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-1 flex-col px-6 py-6">
                  <nav className="flex flex-col gap-2">
                    {heroConfig.navLinks.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <a
                          href={link.href}
                          className="rounded-2xl border border-black/8 bg-white/70 px-4 py-4 font-body text-base transition-colors duration-300 hover:bg-white"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-6 border-t border-black/8 pt-6">
                    <p className="mb-3 font-sans text-[0.72rem] font-semibold tracking-[0.18em] text-softblack/65">
                      {heroConfig.languageLabel}
                    </p>
                    <LanguageSwitcher label={heroConfig.languageLabel} dark />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
