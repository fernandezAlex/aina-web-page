import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useSiteContent } from '../i18n';

export function Press() {
  const { press } = useSiteContent();
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

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
    }, 3200);

    return () => window.clearInterval(autoplay);
  }, [api, isPaused]);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const pageCount = Math.ceil(press.appearances.length / itemsPerView);
  const activePage = Math.min(pageCount - 1, Math.floor(selectedIndex / itemsPerView));

  return (
    <section
      id="prensa"
      className="light-section relative w-full overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,169,82,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(141,31,57,0.08),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="accent-kicker text-sm font-body uppercase tracking-widest mb-4">
              {press.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-primary tracking-tight leading-tight">
              {press.title}
            </h2>
            <p className="mt-5 text-xl md:text-2xl font-serif italic text-forest-mid">
              {press.subtitle}
            </p>
          </div>

          <div className="lg:pt-2">
            <p className="text-lg md:text-xl text-softblack/70 font-body leading-relaxed max-w-3xl">
              {press.description}
            </p>
          </div>
        </div>

        <div
          className="mt-12 rounded-[2rem] border border-secondary/15 bg-[#fbf6ef]/90 p-5 shadow-[0_24px_80px_rgba(103,17,39,0.08)] backdrop-blur-sm md:p-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="mb-6 flex flex-col gap-4 border-b border-secondary/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-body text-base font-semibold uppercase tracking-[0.26em] text-primary md:text-xl">
                {press.selectionLabel}
              </p>
            </div>
          </div>

          <div className="relative px-9 sm:px-10 md:px-12">
            <button
              type="button"
              aria-label={press.previousLabel}
              onClick={() => api?.scrollPrev()}
              className="group absolute left-0 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/20 bg-white/95 text-primary shadow-[0_10px_26px_rgba(103,17,39,0.12)] transition duration-300 hover:-translate-x-0.5 hover:border-primary/35 hover:bg-primary hover:text-white md:h-11 md:w-11"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 md:h-5 md:w-5" />
            </button>
            <button
              type="button"
              aria-label={press.nextLabel}
              onClick={() => api?.scrollNext()}
              className="group absolute right-0 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/20 bg-primary text-white shadow-[0_10px_26px_rgba(103,17,39,0.18)] transition duration-300 hover:translate-x-0.5 hover:bg-secondary md:h-11 md:w-11"
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 md:h-5 md:w-5" />
            </button>

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
                {press.appearances.map((item, index) => {
                  const isActive = index === selectedIndex;

                  return (
                    <CarouselItem
                      key={item.name}
                      className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${press.mediaAriaLabel}: ${item.name}`}
                        className={[
                          'accent-card group relative flex h-full min-h-[10.75rem] flex-col overflow-hidden rounded-[1.35rem] border border-secondary/14 bg-white px-4 py-4 transition-all duration-500',
                          isActive
                            ? 'translate-y-0 shadow-[0_16px_40px_rgba(103,17,39,0.1)]'
                            : 'translate-y-0 opacity-95 shadow-[0_10px_24px_rgba(103,17,39,0.06)]',
                        ].join(' ')}
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
                            className={[
                              'max-h-12 max-w-full object-contain transition duration-500',
                              isActive ? 'grayscale-0 scale-100' : 'grayscale opacity-75 scale-[0.96]',
                              'group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100',
                            ].join(' ')}
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
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: pageCount }).map((_, pageIndex) => (
                <button
                  key={`page-dot-${pageIndex}`}
                  type="button"
                  onClick={() => api?.scrollTo(pageIndex * itemsPerView)}
                  aria-label={`${press.indicatorAriaLabel} ${pageIndex + 1}`}
                  aria-pressed={activePage === pageIndex}
                  className={[
                    'h-2 rounded-full transition-all duration-300 sm:h-2.5',
                    activePage === pageIndex
                      ? 'w-8 bg-primary sm:w-10'
                      : 'w-3 bg-secondary/25 hover:bg-secondary/45 sm:w-4',
                  ].join(' ')}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
