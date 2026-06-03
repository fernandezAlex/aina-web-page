import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { pressAppearances } from '../content/images';

export function Press() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateSelectedIndex();
    api.on('select', updateSelectedIndex);
    api.on('reInit', updateSelectedIndex);

    return () => {
      api.off('select', updateSelectedIndex);
      api.off('reInit', updateSelectedIndex);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;

    const autoplay = window.setInterval(() => {
      api.scrollNext();
    }, 3600);

    return () => window.clearInterval(autoplay);
  }, [api, isPaused]);

  return (
    <section
      id="prensa"
      className="light-section relative w-full overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,169,82,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(141,31,57,0.08),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="accent-kicker text-sm font-body uppercase tracking-widest mb-4">
              Prensa
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-primary tracking-tight leading-tight">
              Prensa
            </h2>
            <p className="mt-5 text-xl md:text-2xl font-serif italic text-forest-mid">
              Una historia que ha cruzado fronteras
            </p>
          </div>

          <div>
            <p className="text-lg md:text-xl text-softblack/70 font-body leading-relaxed max-w-3xl">
              El trabajo de Aina Barca y sus proyectos en Nepal ha sido compartido por medios
              nacionales e internacionales que han dado voz a la importancia de la inclusion, la
              educacion especial y la dignidad de las personas con discapacidad intelectual.
            </p>

            <div
              className="mt-12 rounded-[2rem] border border-secondary/15 bg-[#fbf6ef]/90 p-5 shadow-[0_24px_80px_rgba(103,17,39,0.08)] backdrop-blur-sm md:p-6"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={() => setIsPaused(false)}
            >
              <div className="mb-6 flex flex-col gap-4 border-b border-secondary/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.7rem] font-body uppercase tracking-[0.34em] text-secondary/80">
                    Seleccion de medios
                  </p>
                  <p className="mt-2 text-sm md:text-base font-body text-softblack/60">
                    Logos de medios destacados. Navega con las flechas para verlos todos.
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <span className="text-xs font-body uppercase tracking-[0.28em] text-softblack/45">
                    {String(selectedIndex + 1).padStart(2, '0')} /{' '}
                    {String(pressAppearances.length).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    aria-label="Ver medio anterior"
                    onClick={() => api?.scrollPrev()}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/20 bg-white/85 text-forest-dark transition duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:bg-white"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Ver siguiente medio"
                    onClick={() => api?.scrollNext()}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/20 bg-forest-dark text-white transition duration-300 hover:-translate-y-0.5 hover:bg-forest-mid"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>

              <Carousel
                setApi={setApi}
                opts={{
                  align: 'start',
                  loop: true,
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-3">
                  {pressAppearances.map((item, index) => {
                    const isActive = index === selectedIndex;

                    return (
                      <CarouselItem
                        key={item.name}
                        className="pl-3 basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
                      >
                        <article
                          className={[
                            'accent-card group relative flex h-full min-h-[12.5rem] flex-col overflow-hidden rounded-[1.35rem] border border-secondary/14 bg-white px-4 py-4 transition-all duration-500',
                            isActive
                              ? 'translate-y-0 shadow-[0_16px_40px_rgba(103,17,39,0.1)]'
                              : 'translate-y-1 opacity-90 shadow-[0_10px_24px_rgba(103,17,39,0.06)]',
                          ].join(' ')}
                        >
                          <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-secondary/55 to-transparent" />
                          <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-secondary/35 transition duration-500 group-hover:scale-125 group-hover:bg-secondary/70" />

                          <div>
                            <div className="flex items-center justify-between gap-4">
                              <span className="rounded-full border border-secondary/15 bg-secondary/8 px-3 py-1 text-[0.68rem] font-body uppercase tracking-[0.26em] text-secondary/90">
                                {item.category}
                              </span>
                              <span className="text-xs font-body uppercase tracking-[0.24em] text-softblack/30">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>

                            <div className="mt-4 flex h-24 items-center justify-center rounded-[1rem] border border-dashed border-secondary/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(252,246,237,0.92))] p-4 shadow-inner">
                              <img
                                src={item.imageSrc}
                                alt={`Aparición en ${item.name}`}
                                className={[
                                  'max-h-14 max-w-full object-contain transition duration-500',
                                  isActive
                                    ? 'grayscale-0 scale-100'
                                    : 'grayscale opacity-75 scale-[0.96]',
                                  'group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100',
                                ].join(' ')}
                                loading="lazy"
                              />
                            </div>
                          </div>

                          <div className="mt-4 flex items-end justify-between gap-3">
                            <div>
                              <p className="text-base font-sans font-semibold leading-tight text-softblack">
                                {item.name}
                              </p>
                              <p className="mt-1 text-[0.68rem] font-body uppercase tracking-[0.24em] text-softblack/42">
                                Medio destacado
                              </p>
                            </div>

                            {item.href ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Ver aparicion en prensa: ${item.name}`}
                                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/16 bg-secondary/10 text-secondary transition duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:bg-secondary hover:text-white"
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            ) : (
                              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/12 bg-secondary/5 text-secondary/45">
                                <ArrowUpRight className="h-4 w-4" />
                              </span>
                            )}
                          </div>
                        </article>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {pressAppearances.map((item, index) => (
                    <button
                      key={`${item.name}-dot`}
                      type="button"
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Ir al medio ${item.name}`}
                      aria-pressed={selectedIndex === index}
                      className={[
                        'h-2.5 rounded-full transition-all duration-300',
                        selectedIndex === index
                          ? 'w-8 bg-forest-dark'
                          : 'w-2.5 bg-secondary/25 hover:bg-secondary/45',
                      ].join(' ')}
                    />
                  ))}
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Anterior"
                    onClick={() => api?.scrollPrev()}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/20 bg-white text-forest-dark transition duration-300 hover:border-secondary/40 hover:bg-secondary/10"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Siguiente"
                    onClick={() => api?.scrollNext()}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/20 bg-forest-dark text-white transition duration-300 hover:bg-forest-mid"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
