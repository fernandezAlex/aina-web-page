import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSiteContent } from '../i18n';

gsap.registerPlugin(ScrollTrigger);

const imageAnimConfigs = [
  { clipFrom: 'inset(0% 100% 0% 0%)', rotation: -2, parallax: [-6, 6], delay: 0 },
  { clipFrom: 'inset(0% 0% 100% 0%)', rotation: 1.5, parallax: [-3, 3], delay: 0.12 },
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1.2, parallax: [-5, 5], delay: 0.08 },
  { clipFrom: 'inset(100% 0% 0% 0%)', rotation: 1, parallax: [-4, 4], delay: 0.22 },
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1.5, parallax: [-7, 7], delay: 0.18 },
];

export function IntroMission() {
  const { introMission: introMissionConfig } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleWrap = titleLine1Ref.current?.parentElement?.parentElement;
      if (titleWrap && titleLine1Ref.current && titleLine2Ref.current) {
        gsap.set([titleLine1Ref.current, titleLine2Ref.current], {
          yPercent: 110,
        });

        ScrollTrigger.create({
          trigger: titleWrap,
          start: 'top 85%',
          onEnter: () => {
            gsap.to([titleLine1Ref.current, titleLine2Ref.current], {
              yPercent: 0,
              duration: 1.1,
              ease: 'power4.out',
              stagger: 0.13,
            });
          },
          once: true,
        });
      }

      const paragraphItems = paragraphsRef.current?.querySelectorAll('.intro-mission-paragraph');
      if (paragraphItems?.length) {
        gsap.fromTo(
          paragraphItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.14,
            scrollTrigger: {
              trigger: paragraphsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      const gridItems = gridRef.current?.querySelectorAll('.grid-item');
      if (gridItems) {
        gridItems.forEach((item, i) => {
          const img = item.querySelector('img');
          const cfg = imageAnimConfigs[i];
          if (!cfg) return;

          ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            onEnter: () => {
              gsap.set(item, { opacity: 1 });

              gsap.fromTo(
                item,
                { clipPath: cfg.clipFrom },
                {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 1.3,
                  ease: 'power4.inOut',
                  delay: cfg.delay,
                }
              );

              if (img) {
                gsap.fromTo(
                  img,
                  { scale: 1.45, rotate: cfg.rotation },
                  {
                    scale: 1.12,
                    rotate: 0,
                    duration: 1.8,
                    ease: 'power3.out',
                    delay: cfg.delay,
                  }
                );
              }
            },
            once: true,
          });

          if (img) {
            gsap.fromTo(
              img,
              { yPercent: cfg.parallax[0] },
              {
                yPercent: cfg.parallax[1],
                ease: 'none',
                scrollTrigger: {
                  trigger: item,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (
    !introMissionConfig.titleLine1 &&
    !introMissionConfig.titleLine2 &&
    introMissionConfig.paragraphs.length === 0
  ) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative w-full bg-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <div>
            <div className="overflow-hidden">
              <div ref={titleLine1Ref}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-primary tracking-tight leading-tight">
                  {introMissionConfig.titleLine1}
                </h2>
              </div>
            </div>
            <div className="overflow-hidden">
              <div ref={titleLine2Ref}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-primary tracking-tight leading-tight">
                  {introMissionConfig.titleLine2}
                </h2>
              </div>
            </div>
          </div>

          <div ref={paragraphsRef} className="mt-8 space-y-6 max-w-5xl">
            {introMissionConfig.paragraphs.map((paragraph) => (
              <p
                key={paragraph.text}
                className="intro-mission-paragraph text-base md:text-lg font-body leading-relaxed text-softblack opacity-0"
              >
                {paragraph.links?.length
                  ? (() => {
                      const links = paragraph.links ?? [];
                      let content = paragraph.text;
                      const parts: ReactNode[] = [];

                      links.forEach((link, linkIndex) => {
                        const splitParts = content.split(link.label);
                        if (splitParts.length === 1) return;

                        parts.push(splitParts[0]);
                        parts.push(
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-primary underline decoration-primary/35 underline-offset-4 transition-colors duration-300 hover:text-secondary"
                          >
                            {link.label}
                          </a>
                        );
                        content = splitParts.slice(1).join(link.label);

                        if (linkIndex === links.length - 1 && content) {
                          parts.push(content);
                        }
                      });

                      return parts.length > 0 ? parts : paragraph.text;
                    })()
                  : paragraph.text}
              </p>
            ))}
          </div>
        </div>

        {introMissionConfig.images.length > 0 && (
          <>
            <div
              ref={gridRef}
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]"
            >
              {introMissionConfig.images.map((image, index) => (
                <div
                  key={image.src}
                  className={`grid-item relative overflow-hidden rounded-lg group cursor-pointer opacity-0 ${
                    index === 0 ? 'md:col-span-1 md:row-span-2' : ''
                  } ${index === 3 ? 'row-span-2' : ''}`}
                >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover will-change-transform ${
                    index === 2 ? 'object-center' : ''
                  }`}
                  loading="lazy"
                />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
                </div>
              ))}
            </div>

          </>
        )}
      </div>
    </section>
  );
}
