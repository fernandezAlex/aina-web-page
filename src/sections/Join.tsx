import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Globe,
  GraduationCap,
  HandHeart,
  Heart,
  Users,
} from 'lucide-react';
import { useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const heroImage = `${import.meta.env.BASE_URL}aina/main/aina-child-embrace.jpg`;
const membershipImages = [
  `${import.meta.env.BASE_URL}aina/join/join-gallery-2.jpg`,
  `${import.meta.env.BASE_URL}aina/join/join-gallery-1.jpg`,
  `${import.meta.env.BASE_URL}aina/main/aina-child-embrace.jpg`,
] as const;
const secondaryImages = [
  `${import.meta.env.BASE_URL}aina/main/aina-girl-conversation.jpg`,
  `${import.meta.env.BASE_URL}aina/main/aina-library-portrait.jpg`,
] as const;

const membershipIcons = [Users, HandHeart, Globe] as const;
const membershipTones = [
  {
    shell: 'border-secondary/20 bg-[linear-gradient(180deg,#fff8f3_0%,#fff1e7_100%)]',
    halo: 'from-[#f97316]/22 via-[#ffae7a]/12 to-transparent',
    accent: 'bg-[linear-gradient(160deg,#f97316_0%,#ff8f4a_100%)]',
    arrow: 'border-secondary/25 bg-secondary text-white group-hover:bg-[#9f0429]',
    imageRing: 'border-secondary/20',
  },
  {
    iconShell: 'bg-[#ff8b14] text-white',
    title: 'text-[#f47d0c]',
    button: 'bg-[#ff8b14] text-white hover:bg-[#f47d0c]',
  },
  {
    iconShell: 'bg-[#efa513] text-white',
    title: 'text-[#e99e06]',
    button: 'bg-[#efa513] text-white hover:bg-[#db9308]',
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
  const animatedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.join-fade-item');
      if (items.length) {
        gsap.fromTo(
          items,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: animatedRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const supportBlock = join.blocks[0];
  const volunteerBlock = join.blocks[1];
  const instituteBlock = join.blocks[2];

  return (
    <section
      ref={sectionRef}
      id="unete"
      className="relative overflow-hidden bg-offwhite py-16 md:py-24"
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

      <div ref={animatedRef} className="relative mx-auto flex max-w-[122rem] flex-col gap-6 px-5 md:px-10 xl:px-16">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.9fr)] lg:gap-10">
          <div className="join-fade-item flex flex-col justify-center pt-2 lg:pr-6">
            <div className="flex items-center gap-4 text-[#f27f14]">
              <p className="text-[3rem] font-serif italic leading-none md:text-[4rem]">
                {join.eyebrow}
              </p>
              <div className="flex flex-1 items-center gap-3">
                <div className="h-px flex-1 bg-current/65" />
                <Heart className="h-8 w-8" strokeWidth={1.8} />
              </div>
            </div>

            <h2 className="mt-3 max-w-[10ch] text-[3.6rem] font-serif font-bold leading-[0.92] tracking-tight text-primary md:text-[5.2rem] xl:text-[6.2rem]">
              {join.title}
            </h2>
            <div className="mt-6 h-px w-16 bg-[#f09838]" />
            <p className="mt-6 max-w-[21ch] text-xl leading-relaxed text-softblack md:text-[2rem]">
              {join.description}
            </p>
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

        <article className="join-fade-item rounded-[2rem] border border-[#efd7c2] bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,250,246,0.92)_100%)] p-4 shadow-[0_20px_50px_rgba(138,80,31,0.08)] md:rounded-[2.5rem] md:p-8 xl:p-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_16px_34px_rgba(169,17,47,0.18)]">
                <Users className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="text-[2.2rem] font-serif font-bold leading-none text-primary md:text-[3.4rem]">
                {supportBlock.title}
              </h3>
            </div>
            <div className="mx-auto mt-4 h-px w-16 bg-[#f09838]" />
            <div className="mx-auto mt-5 max-w-5xl space-y-4 text-lg leading-relaxed text-softblack md:text-[1.9rem] md:leading-[1.45]">
              <p>{supportBlock.summary}</p>
              <p>{supportBlock.description}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3 xl:gap-5">
            {supportBlock.actions.map((action, index) => {
              const Icon = membershipIcons[index];
              const tone = membershipTones[index];

              return (
                <article
                  key={action.href}
                  className="overflow-hidden rounded-[1.6rem] border border-[#ecd5c0] bg-white shadow-[0_16px_40px_rgba(138,80,31,0.08)]"
                >
                  <div className="aspect-[1.24/1] overflow-hidden">
                    <img
                      src={membershipImages[index] ?? membershipImages[0]}
                      alt={action.label}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="relative px-5 pb-5 pt-10 text-center md:px-6 md:pb-6">
                    <div className={`absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-white shadow-[0_14px_28px_rgba(138,80,31,0.12)] ${tone.iconShell}`}>
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>

                    <h4 className={`mx-auto max-w-[12ch] text-[2rem] font-serif font-bold leading-[1] ${tone.title}`}>
                      {action.label}
                    </h4>
                    <p className="mx-auto mt-4 max-w-[20ch] text-lg leading-relaxed text-softblack md:text-[1.26rem]">
                      {action.description}
                    </p>

                    <div className="mt-6">
                      <JoinButton href={action.href} label={action.label} className={`${tone.button} w-full text-center`} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </article>

                      <p className="mt-4 max-w-[40ch] text-lg font-body leading-relaxed text-softblack md:max-w-none md:text-xl">
                        {block.description}
                      </p>

            <div className="min-h-[20rem] lg:min-h-full">
              <img
                src={secondaryImages[0]}
                alt="Aina comparte un momento cercano con un niño en Nepal"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </article>

        <article className="join-fade-item overflow-hidden rounded-[2rem] border border-[#efd7c2] bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(255,248,242,0.96)_52%,rgba(255,236,208,0.72)_100%)] shadow-[0_20px_50px_rgba(138,80,31,0.08)]">
          <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(20rem,0.92fr)]">
            <div className="flex flex-col justify-center px-6 py-7 md:px-8 md:py-10 xl:px-10">
              <JoinSectionHeading
                icon={GraduationCap}
                title={instituteBlock.title}
                titleClassName="text-[#f27f14]"
              />
              <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-softblack md:text-[1.34rem]">
                {instituteBlock.summary}
              </p>
              <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-softblack md:text-[1.34rem]">
                {instituteBlock.description}
              </p>
              {instituteBlock.note ? (
                <p className="mt-5 text-xl font-sans font-bold text-[#f27f14] md:text-[1.45rem]">
                  {instituteBlock.note}
                </p>
              ) : null}
              <div className="mt-7">
                <JoinButton
                  href={instituteBlock.actions[0]?.href ?? '#'}
                  label={instituteBlock.actions[0]?.label ?? ''}
                  className="bg-[#ff8b14] text-white hover:bg-[#f27f14]"
                />
              </div>
            </div>

            <div className="min-h-[20rem] lg:min-h-full">
              <img
                src={secondaryImages[1]}
                alt="Espacio de aprendizaje vinculado a Aina Institute"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
