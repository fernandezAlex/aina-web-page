import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

export function Press() {
  const { press } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 56, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      const cards = gridRef.current?.querySelectorAll('[data-press-card]');
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.82,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="prensa"
      className="light-section relative w-full overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(188,5,49,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(253,168,80,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div ref={headerRef} className="max-w-5xl opacity-0">
          <p className="accent-kicker mb-4 text-sm font-body uppercase tracking-widest">
            {press.eyebrow}
          </p>
          <h2 className="text-4xl font-sans font-bold tracking-tight leading-tight text-primary md:text-5xl lg:text-6xl">
            {press.title}
          </h2>
          <p className="mt-5 text-xl font-serif font-bold italic text-forest-mid md:text-2xl">
            {press.subtitle}
          </p>
          <p className="mt-7 max-w-5xl text-xl font-body leading-relaxed text-softblack/70 md:text-2xl">
            {press.description}
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-secondary/15 bg-[#fbf6ef]/90 p-5 shadow-[0_24px_80px_rgba(103,17,39,0.08)] backdrop-blur-sm md:p-6">
          <div className="mb-6 border-b border-secondary/10 pb-6">
            <p className="font-body text-base font-semibold uppercase tracking-[0.26em] text-primary md:text-xl">
              {press.selectionLabel}
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {press.appearances.map((item) => (
              <a
                key={item.name}
                data-press-card
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${press.mediaAriaLabel}: ${item.name}`}
                className="accent-card group relative flex min-h-[10.75rem] flex-col overflow-hidden rounded-[1.35rem] border border-secondary/14 bg-white px-4 py-4 opacity-0 shadow-[0_10px_24px_rgba(103,17,39,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(103,17,39,0.1)]"
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-secondary/55 to-transparent" />
                <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-secondary/35 transition duration-500 group-hover:scale-125 group-hover:bg-secondary/70" />

                <div className="flex items-center justify-start">
                  <span className="rounded-full border border-secondary/15 bg-secondary/8 px-2.5 py-1 text-[0.56rem] font-body uppercase tracking-[0.18em] text-secondary/90 sm:text-[0.6rem]">
                    {item.category}
                  </span>
                </div>

                <div className="mt-3 flex h-20 items-center justify-center rounded-[1rem] border border-dashed border-secondary/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(252,246,237,0.92))] p-4 shadow-inner">
                  <img
                    src={item.imageSrc}
                    alt={`${press.mediaAriaLabel}: ${item.name}`}
                    className="max-h-12 max-w-full object-contain grayscale transition duration-500 group-hover:scale-100 group-hover:grayscale-0 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                <div className="mt-3 flex items-end justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-sans font-semibold leading-tight text-primary md:text-lg">
                      {item.name}
                    </p>
                  </div>

                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/16 bg-secondary/10 text-secondary transition duration-300 group-hover:-translate-y-0.5 group-hover:border-secondary/40 group-hover:bg-secondary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
