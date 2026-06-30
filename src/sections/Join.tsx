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
const joinBlockVisuals = [
  {
    mainImage: `${import.meta.env.BASE_URL}aina/main/aina-classroom-support.jpg`,
    mainAlt: 'Sesión de apoyo educativo en Nepal',
    supportImage: `${import.meta.env.BASE_URL}aina/main/aina-child-close-smile.jpg`,
    supportAlt: 'Niño sonriendo junto a Aina',
    chip: '3 formas de sumar',
  },
  {
    mainImage: `${import.meta.env.BASE_URL}aina/main/aina-girl-conversation.jpg`,
    mainAlt: 'Aina en conversación cercana durante una actividad',
    supportImage: `${import.meta.env.BASE_URL}aina/main/aina-child-floor-portrait.jpg`,
    supportAlt: 'Actividad compartida en el suelo',
    chip: 'Presencia real',
  },
  {
    mainImage: `${import.meta.env.BASE_URL}aina/main/aina-child-embrace.jpg`,
    mainAlt: 'Aina con un niño en una escena cercana y visible',
    supportImage: `${import.meta.env.BASE_URL}aina/main/aina-library-portrait.jpg`,
    supportAlt: 'Aina en un entorno de aprendizaje',
    chip: 'Formación con impacto',
  },
] as const;
const joinPrimaryActionThemes = [
  {
    shell: 'border-secondary/20 bg-[linear-gradient(180deg,#fff8f3_0%,#fff1e7_100%)]',
    halo: 'from-[#f97316]/22 via-[#ffae7a]/12 to-transparent',
    accent: 'bg-[linear-gradient(160deg,#f97316_0%,#ff8f4a_100%)]',
    arrow: 'border-secondary/25 bg-secondary text-white group-hover:bg-[#9f0429]',
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
  halo: 'from-secondary/18 via-[#d94b6d]/10 to-transparent',
  accent: 'bg-[linear-gradient(160deg,#f97316_0%,#ff8f4a_100%)]',
  arrow: 'border-secondary/25 bg-secondary text-white group-hover:bg-[#9f0429]',
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
          <p className="mt-4 max-w-3xl text-lg font-body leading-relaxed text-black md:mt-6 md:text-xl">
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
            const visual = joinBlockVisuals[index];

            return (
              <article
                key={block.title}
                data-join-block
                className={[
                  'accent-card relative overflow-hidden rounded-[1.5rem] border border-secondary/15 bg-white p-5 opacity-0 shadow-[0_20px_50px_rgba(103,17,39,0.08)] transition-transform duration-300 hover:-translate-y-1 md:rounded-[2rem] md:p-8',
                  isPrimaryBlock
                    ? 'md:min-h-[27rem] lg:col-span-2 lg:min-h-[26rem]'
                    : 'md:min-h-[27rem] lg:min-h-[26rem]',
                ].join(' ')}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-secondary/10 to-transparent md:h-28" />

                {isPrimaryBlock ? (
                  <div className="relative">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.28fr)_minmax(18rem,0.72fr)] lg:items-start">
                      <div>
                        <div className="mb-4 flex items-start justify-between gap-4 md:mb-6">
                          <div className="space-y-2 md:space-y-3">
                            <p className="accent-kicker text-xs font-body uppercase tracking-[0.22em]">
                              {block.eyebrow}
                            </p>
                            <h3 className="max-w-[16ch] text-2xl font-sans font-bold leading-[0.98] tracking-tight text-primary md:text-[2.75rem]">
                              {block.title}
                            </h3>
                          </div>

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary/14 text-secondary md:h-12 md:w-12">
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </div>
                        </div>

                        <p className="mb-4 w-full text-base font-sans font-semibold leading-snug text-softblack md:mb-5 md:max-w-[28ch] md:text-[1.7rem]">
                          {block.summary}
                        </p>

                        <p className="w-full max-w-[64ch] text-lg font-body leading-relaxed text-softblack md:text-xl">
                          {block.description}
                        </p>
                      </div>

                      <div className="relative hidden lg:block">
                        <div className="grid gap-4">
                          <div className="relative overflow-hidden rounded-[2rem] bg-[#f5e6dc] shadow-[0_24px_50px_rgba(103,17,39,0.10)]">
                            <img
                              src={visual.mainImage}
                              alt={visual.mainAlt}
                              className="h-[16rem] w-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2a0d14]/68 via-[#7e2d12]/18 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                              <p className="max-w-[20ch] text-2xl font-sans font-semibold leading-tight text-white">
                                Educación, inclusión y continuidad real
                              </p>
                            </div>
                          </div>

                          <div className="grid gap-4 xl:grid-cols-3">
                            {block.actions.map((action, actionIndex) => {
                              const opensInNewTab = action.href.startsWith('http');
                              const actionImage = joinActionImages[index]?.[actionIndex];
                              const theme = joinPrimaryActionThemes[actionIndex];

                              return (
                                <a
                                  key={action.href}
                                  href={action.href}
                                  target={opensInNewTab ? '_blank' : undefined}
                                  rel={opensInNewTab ? 'noreferrer' : undefined}
                                  className="group relative overflow-hidden rounded-[1.7rem] shadow-[0_20px_40px_rgba(103,17,39,0.12)] transition-all duration-300 hover:-translate-y-1"
                                >
                                  <img
                                    src={actionImage?.src ?? visual.supportImage}
                                    alt={actionImage?.alt ?? action.label}
                                    className="h-[15rem] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                  />
                                  <span className={['absolute inset-0 opacity-95', theme.accent].join(' ')} />
                                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0.10)_28%,rgba(0,0,0,0.42)_100%)]" />
                                  <span className="absolute inset-x-0 bottom-0 p-5">
                                    <span className="flex items-end justify-between gap-3">
                                      <span className="block text-left text-[1.45rem] font-sans font-semibold leading-tight text-white">
                                        {action.label}
                                      </span>
                                      <span className={['flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/16 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.06]', theme.arrow].join(' ')}>
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              );
                            })}
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-full flex-col">
                    <div className="relative mb-6 overflow-hidden rounded-[1.6rem] bg-[#f8eee8] shadow-[0_18px_35px_rgba(103,17,39,0.08)]">
                      <img
                        src={visual.mainImage}
                        alt={visual.mainAlt}
                        className="h-56 w-full object-cover md:h-64"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 md:p-5">
                        <p className="rounded-full bg-white/88 px-3 py-1 text-[0.68rem] font-body uppercase tracking-[0.22em] text-secondary shadow-sm backdrop-blur">
                          {block.eyebrow}
                        </p>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/88 text-secondary shadow-sm backdrop-blur">
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </div>
                      </div>

                      <div className="absolute left-5 bottom-[-2.25rem] flex items-end gap-3">
                        <div className="relative h-24 w-24 overflow-hidden rounded-full border-[4px] border-white shadow-[0_18px_30px_rgba(103,17,39,0.16)] md:h-28 md:w-28">
                          <img
                            src={visual.supportImage}
                            alt={visual.supportAlt}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="mb-3 rounded-full bg-white/92 px-4 py-2 text-sm font-semibold text-softblack shadow-[0_12px_24px_rgba(103,17,39,0.10)] backdrop-blur">
                          {visual.chip}
                        </div>
                      </div>
                    </div>

                    <div className="pt-10">
                      <h3 className="max-w-[16ch] text-2xl font-sans font-bold leading-[0.98] tracking-tight text-primary md:max-w-none md:text-[2.2rem]">
                        {block.title}
                      </h3>

                      <p className="mt-4 max-w-[34ch] text-base font-sans font-semibold leading-snug text-softblack md:max-w-none md:text-lg">
                        {block.summary}
                      </p>

                      <p className="mt-4 max-w-[40ch] text-lg font-body leading-relaxed text-softblack md:max-w-none md:text-xl">
                        {block.description}
                      </p>

                      <div className="mt-7 grid gap-3">
                        {block.actions.map((action) => {
                          const opensInNewTab = action.href.startsWith('http');
                          const theme = joinSecondaryActionTheme;

                          return (
                            <a
                              key={action.href}
                              href={action.href}
                              target={opensInNewTab ? '_blank' : undefined}
                              rel={opensInNewTab ? 'noreferrer' : undefined}
                              className={[
                                'group relative overflow-hidden rounded-[1.5rem] border p-3 shadow-[0_16px_32px_rgba(103,17,39,0.10)] transition-all duration-300 hover:-translate-y-1 md:p-4',
                                theme.shell,
                              ].join(' ')}
                            >
                              <span className={['pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b opacity-90', theme.halo].join(' ')} />
                              <span className="relative flex items-center justify-between gap-4">
                                <span className="min-w-0 flex-1 text-left">
                                  <span className="block text-lg font-semibold leading-snug text-softblack">
                                    {action.label}
                                  </span>
                                </span>

                                <span className={['flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-[0_10px_18px_rgba(103,17,39,0.10)] transition-all duration-300 group-hover:scale-[1.06]', theme.arrow].join(' ')}>
                                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
                                </span>
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
