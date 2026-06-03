import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type JoinAction = {
  label: string;
  href: string;
};

type JoinBlock = {
  title: string;
  description: string;
  actions: JoinAction[];
};

const joinBlocks: JoinBlock[] = [
  {
    title: 'Forma parte de este cambio',
    description:
      'Suma tu apoyo sostenido para que los programas educativos, terapéuticos y familiares puedan seguir creciendo.',
    actions: [
      {
        label: 'Hazte socio desde España',
        href: 'https://familiadehetauda.org/hazte-socio/',
      },
      {
        label: 'Hazte socio desde Nepal',
        href: 'https://www.siashafoundation.org/get-involved/',
      },
      {
        label: 'Hazte socio desde otras partes del mundo',
        href: 'https://siasha.org/hazte-socio/',
      },
    ],
  },
  {
    title: 'Forma parte de esta misión sobre el terreno',
    description:
      'Comparte tiempo, presencia y capacidades junto al equipo que acompaña cada día a niños, jóvenes y familias.',
    actions: [
      {
        label: 'Quiero ser voluntario',
        href: 'mailto:voluntariosfdh@gmail.com',
      },
    ],
  },
  {
    title: 'Fórmate para transformar vidas',
    description:
      'Conversa con el equipo para encontrar la mejor forma de prepararte y aportar desde tu experiencia.',
    actions: [
      {
        label: 'Habla con el equipo',
        href: 'https://wa.me/34610094664',
      },
    ],
  },
];

export function Join() {
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
          <p className="text-softblack/50 text-sm font-body uppercase tracking-widest mb-4">
            Únete
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-softblack tracking-tight leading-[0.98]">
            Hay muchas formas de poner el amor en acción.
          </h2>
        </div>

        <div ref={blocksRef} className="grid lg:grid-cols-3 gap-5 md:gap-6">
          {joinBlocks.map((block) => (
            <article
              key={block.title}
              data-join-block
              className="opacity-0 flex min-h-[25rem] flex-col justify-between rounded-[2rem] bg-white p-6 md:p-8 shadow-sm border border-softblack/10"
            >
              <div>
                <h3 className="text-forest-dark/60 text-xs font-body uppercase tracking-[0.22em] mb-5">
                  {block.title}
                </h3>
                <p className="text-softblack/70 font-body text-base md:text-lg leading-relaxed">
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
                      className="group flex w-full items-center justify-between gap-4 rounded-full bg-forest-dark px-5 py-4 text-left text-sm md:text-base font-sans font-semibold text-white transition-all duration-300 hover:bg-forest-mid hover:-translate-y-0.5"
                    >
                      <span>{action.label}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
