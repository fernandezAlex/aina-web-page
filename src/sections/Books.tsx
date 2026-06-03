import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, BookOpen, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AMAZON_URL =
  'https://www.amazon.es/fuerza-esperanza-sue%C3%B1o-levantar-escuela/dp/8417622586/ref=tmm_pap_swatch_0';
const EARLY_ACCESS_URL = 'http://eepurl.com/cWGZ3j';

gsap.registerPlugin(ScrollTrigger);

export function Books() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        trigger: cardsRef.current,
        start: 'top 80%',
        onEnter: () => {
          const cards = cardsRef.current?.querySelectorAll('[data-book-card]');
          if (cards) {
            gsap.fromTo(
              cards,
              { y: 56, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                ease: 'power3.out',
                stagger: 0.16,
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
      id="libros"
      className="relative w-full py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softblack/10 to-transparent" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-forest-mid/10 blur-3xl" />
      <div className="absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-forest-dark/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div ref={headerRef} className="max-w-3xl mb-14 md:mb-20 opacity-0">
          <p className="text-softblack/50 text-sm font-body uppercase tracking-widest mb-4">
            Libros
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-softblack tracking-tight leading-tight">
            Nepal desde dentro.{' '}
            <span className="font-serif italic font-normal text-softblack/70">
              Sin filtros.
            </span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8">
          <article
            data-book-card
            className="opacity-0 group relative overflow-hidden rounded-3xl bg-forest-dark p-8 md:p-10 min-h-[460px] flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />
            <div className="relative z-10">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15">
                <BookOpen className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="text-white/45 text-xs font-body uppercase tracking-[0.28em] mb-4">
                Libro publicado
              </p>
              <h3 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
                Asha, o la fuerza de la esperanza
              </h3>
              <p className="mt-6 max-w-2xl text-white/65 font-body text-base md:text-lg leading-relaxed">
                Un relato íntimo sobre el sueño de levantar una escuela en Nepal y sobre las
                personas que lo hicieron posible. Una historia de infancia, discapacidad,
                dignidad y compromiso contada desde el terreno, con la honestidad de quien
                ha visto de cerca cuánto puede cambiar una vida cuando alguien decide quedarse.
              </p>
            </div>

            <div className="relative z-10 mt-10">
              <Button
                asChild
                size="lg"
                className="bg-white text-forest-dark hover:bg-white/90 rounded-full px-7 shadow-none"
              >
                <a href={AMAZON_URL} target="_blank" rel="noreferrer">
                  Comprar en Amazon
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </article>

          <article
            data-book-card
            className="opacity-0 relative overflow-hidden rounded-3xl bg-offwhite p-8 md:p-10 min-h-[460px] flex flex-col justify-between border border-softblack/10"
          >
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-forest-dark/10" />
            <div className="relative z-10">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-dark text-white">
                <Bell className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="text-softblack/45 text-xs font-body uppercase tracking-[0.28em] mb-4">
                Próximo lanzamiento
              </p>
              <h3 className="text-3xl md:text-4xl font-sans font-bold text-softblack tracking-tight leading-tight">
                Un nuevo libro está en camino
              </h3>
              <p className="mt-6 text-softblack/60 font-body text-base md:text-lg leading-relaxed">
                La próxima historia ya se está escribiendo: más Nepal, más preguntas incómodas
                y más mirada directa a lo que sucede cuando la esperanza deja de ser una idea
                bonita y se convierte en trabajo diario. Apúntate para recibir novedades antes
                del lanzamiento.
              </p>
            </div>

            <div className="relative z-10 mt-10">
              <Button
                asChild
                size="lg"
                className="bg-forest-dark text-white hover:bg-forest-mid rounded-full px-7 shadow-none"
              >
                <a href={EARLY_ACCESS_URL} target="_blank" rel="noreferrer">
                  Quiero enterarme antes que nadie
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
