import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  GraduationCap,
  HandHeart,
  Users,
} from 'lucide-react';
import { useSiteContent } from '../i18n';

type JoinIcon = typeof HandHeart;

gsap.registerPlugin(ScrollTrigger);

const joinIcons: JoinIcon[] = [HandHeart, Users, GraduationCap];

export function Join() {
  const { join } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: blocksRef.current,
        start: 'top 82%',
        onEnter: () => {
          const blocks = blocksRef.current?.querySelectorAll('[data-join-block]');
          if (blocks) {
            gsap.fromTo(
              blocks,
              { y: 44, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.12,
              }
            );
          }
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="unete"
      className="relative w-full bg-offwhite py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-forest-dark/10 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div ref={headerRef} className="max-w-4xl mb-14 md:mb-20 opacity-0">
          <p className="accent-kicker text-sm font-body uppercase tracking-widest mb-4">
            {join.eyebrow}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-primary tracking-tight leading-[0.98]">
            {join.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-lg font-body leading-relaxed text-softblack/68">
            {join.description}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 md:mb-12 md:grid-cols-4">
          {join.gallery.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-[1.75rem] border border-softblack/10 bg-white shadow-sm aspect-[4/5]">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div ref={blocksRef} className="grid lg:grid-cols-3 gap-5 md:gap-6">
          {join.blocks.map((block, index) => {
            const Icon = joinIcons[index];

            return (
              <article
                key={block.title}
                data-join-block
                className="accent-card opacity-0 flex min-h-[27rem] flex-col justify-between rounded-[2rem] border border-secondary/15 bg-white p-6 shadow-[0_20px_50px_rgba(103,17,39,0.08)] transition-transform duration-300 hover:-translate-y-1 md:p-8"
              >
                <div>
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <p className="accent-kicker text-xs font-body uppercase tracking-[0.22em]">
                        {block.eyebrow}
                      </p>
                      <h3 className="max-w-[14ch] text-3xl font-sans font-bold leading-[0.98] tracking-tight text-primary md:text-[2.2rem]">
                        {block.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/14 text-secondary">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>

                  <p className="mb-5 max-w-[28ch] text-base font-sans font-semibold leading-snug text-softblack md:text-lg">
                    {block.summary}
                  </p>

                  <p className="text-base font-body leading-relaxed text-softblack/70 md:text-lg">
                    {block.description}
                  </p>
                </div>

                <div className="mt-10 space-y-3">
                  {block.actions.map((action) => {
                    const opensInNewTab = action.href.startsWith('http');

                    return (
                      <a
                        key={action.href}
                        href={action.href}
                        target={opensInNewTab ? '_blank' : undefined}
                        rel={opensInNewTab ? 'noreferrer' : undefined}
                        className="group flex w-full items-center justify-between gap-4 rounded-[1.4rem] border border-secondary/20 bg-secondary px-5 py-4 text-left text-sm font-sans font-semibold text-softblack shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff8b43] md:text-base"
                      >
                        <span>{action.label}</span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/24 transition-colors duration-300 group-hover:bg-white/32">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
                        </span>
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
