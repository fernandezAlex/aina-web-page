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
const joinPrimaryActionThemes = [
  {
    shell: 'border-secondary/20 bg-[linear-gradient(180deg,#fff8f3_0%,#fff1e7_100%)]',
    halo: 'from-[#f97316]/22 via-[#ffae7a]/12 to-transparent',
    accent: 'bg-[linear-gradient(160deg,#f97316_0%,#ff8f4a_100%)]',
    arrow: 'border-secondary/25 bg-secondary text-softblack group-hover:bg-[#ff8b43]',
    imageRing: 'border-secondary/20',
  },
  {
    shell: 'border-primary/18 bg-[linear-gradient(180deg,#fff4f6_0%,#ffe8ed_100%)]',
    halo: 'from-primary/20 via-[#df3359]/10 to-transparent',
    accent: 'bg-[linear-gradient(160deg,#c4143b_0%,#df3359_100%)]',
    arrow: 'border-primary/20 bg-primary text-white group-hover:bg-[#df3359]',
    imageRing: 'border-primary/18',
  },
  {
    shell: 'border-[#d89b11]/22 bg-[linear-gradient(180deg,#fff9e8_0%,#fff2c7_100%)]',
    halo: 'from-[#efb11f]/24 via-[#f7cb4e]/12 to-transparent',
    accent: 'bg-[linear-gradient(160deg,#efb11f_0%,#f7cb4e_100%)]',
    arrow: 'border-[#d89b11]/22 bg-[#efb11f] text-softblack group-hover:bg-[#f7cb4e]',
    imageRing: 'border-[#d89b11]/22',
  },
] as const;
const joinSecondaryActionTheme = {
  shell: 'border-secondary/20 bg-[linear-gradient(180deg,#fff8f3_0%,#fff1e8_100%)]',
  halo: 'from-secondary/18 via-[#ffb98d]/10 to-transparent',
  accent: 'bg-[linear-gradient(160deg,#f97316_0%,#ff8f4a_100%)]',
  arrow: 'border-secondary/25 bg-secondary text-softblack group-hover:bg-[#ff8b43]',
  imageRing: 'border-secondary/20',
} as const;
const joinActionImages = [
  [
    {
      src: `${import.meta.env.BASE_URL}aina/main/aina-child-close-smile.jpg`,
      alt: 'Apoyo educativo sostenido en Nepal',
    },
    {
      src: `${import.meta.env.BASE_URL}aina/main/aina-classroom-support.jpg`,
      alt: 'Acompañamiento cercano en el aula',
    },
    {
      src: `${import.meta.env.BASE_URL}aina/main/aina-child-embrace.jpg`,
      alt: 'Impacto social compartido desde distintos países',
    },
  ],
  [
    {
      src: `${import.meta.env.BASE_URL}aina/main/aina-girl-conversation.jpg`,
      alt: 'Voluntariado de proximidad y acompañamiento',
    },
  ],
  [
    {
      src: `${import.meta.env.BASE_URL}aina/main/aina-book-portrait-1.jpg`,
      alt: 'Conversación con el equipo de Aina Institute',
    },
  ],
] as const;

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
      className="relative w-full overflow-hidden bg-offwhite py-14 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-forest-dark/10 to-transparent md:h-32" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-12">
        <div ref={headerRef} className="mb-8 max-w-4xl opacity-0 md:mb-20">
          <p className="accent-kicker mb-3 text-sm font-body uppercase tracking-widest md:mb-4">
            {join.eyebrow}
          </p>
          <h2 className="text-[2.7rem] font-sans font-bold leading-[0.96] tracking-tight text-primary md:text-6xl lg:text-7xl">
            {join.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base font-body leading-relaxed text-black md:mt-6 md:text-lg">
            {join.description}
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3 md:mb-12 md:grid-cols-4 md:gap-4">
          {join.gallery.map((image) => (
            <div key={image.src} className="aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-softblack/10 bg-white shadow-sm md:rounded-[1.75rem]">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div ref={blocksRef} className="grid gap-4 md:gap-6 lg:grid-cols-2">
          {join.blocks.map((block, index) => {
            const Icon = joinIcons[index];
            const isPrimaryBlock = index === 0;

            return (
              <article
                key={block.title}
                data-join-block
                className={[
                  'accent-card flex flex-col justify-between rounded-[1.5rem] border border-secondary/15 bg-white p-5 opacity-0 shadow-[0_20px_50px_rgba(103,17,39,0.08)] transition-transform duration-300 hover:-translate-y-1 md:rounded-[2rem] md:p-8',
                  isPrimaryBlock
                    ? 'md:min-h-[27rem] lg:col-span-2 lg:min-h-[24rem]'
                    : 'md:min-h-[27rem] lg:min-h-[24rem]',
                ].join(' ')}
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-4 md:mb-6">
                    <div className="space-y-2 md:space-y-3">
                      <p className="accent-kicker text-xs font-body uppercase tracking-[0.22em]">
                        {block.eyebrow}
                      </p>
                      <h3 className="max-w-[14ch] text-2xl font-sans font-bold leading-[0.98] tracking-tight text-primary md:text-[2.2rem]">
                        {block.title}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary/14 text-secondary md:h-12 md:w-12">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>

                  <p className="mb-4 max-w-[28ch] text-base font-sans font-semibold leading-snug text-softblack md:mb-5 md:text-lg">
                    {block.summary}
                  </p>

                  <p className="text-base font-body leading-relaxed text-softblack/70 md:text-lg">
                    {block.description}
                  </p>
                </div>

                <div
                  className={[
                    'mt-6 gap-3 md:mt-10',
                    isPrimaryBlock
                      ? 'grid md:grid-cols-2 xl:grid-cols-3'
                      : 'grid grid-cols-1',
                  ].join(' ')}
                >
                  {block.actions.map((action, actionIndex) => {
                    const opensInNewTab = action.href.startsWith('http');
                    const actionImage = joinActionImages[index]?.[actionIndex];
                    const theme = isPrimaryBlock
                      ? joinPrimaryActionThemes[actionIndex]
                      : joinSecondaryActionTheme;

                    return (
                      <a
                        key={action.href}
                        href={action.href}
                        target={opensInNewTab ? '_blank' : undefined}
                        rel={opensInNewTab ? 'noreferrer' : undefined}
                        className={[
                          'group relative flex w-full overflow-hidden rounded-[1.6rem] border px-4 py-5 text-center text-sm font-sans font-semibold text-softblack shadow-[0_16px_32px_rgba(103,17,39,0.10),inset_0_1px_0_rgba(255,255,255,0.28)] transition-all duration-300 hover:-translate-y-1 md:rounded-[1.85rem] md:px-5 md:py-6 md:text-base',
                          theme.shell,
                          isPrimaryBlock ? 'min-h-[12.75rem]' : 'min-h-[12rem]',
                        ].join(' ')}
                      >
                        <span
                          className={[
                            'pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b opacity-90',
                            theme.halo,
                          ].join(' ')}
                        />

                        <span className="relative flex w-full flex-col items-center">
                          <span
                            className={[
                              'relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-[3px] bg-white shadow-[0_14px_28px_rgba(103,17,39,0.14)] md:h-24 md:w-24',
                              theme.imageRing,
                            ].join(' ')}
                          >
                            {actionImage ? (
                              <img
                                src={actionImage.src}
                                alt={actionImage.alt}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                            ) : (
                              <span className="h-full w-full rounded-full bg-white/35" aria-hidden="true" />
                            )}
                          </span>

                          <span className="mt-4 block min-w-0 text-balance leading-snug md:mt-5">
                            {action.label}
                          </span>

                          <span
                            className={[
                              'mt-4 inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-semibold shadow-[0_10px_18px_rgba(103,17,39,0.10)] transition-all duration-300 group-hover:scale-[1.03] md:mt-5 md:h-12 md:px-5',
                              theme.accent,
                            ].join(' ')}
                          >
                            <span className="mr-2">Ir</span>
                            <span
                              className={[
                                'flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-300 md:h-9 md:w-9',
                                theme.arrow,
                              ].join(' ')}
                            >
                              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
                            </span>
                          </span>
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
