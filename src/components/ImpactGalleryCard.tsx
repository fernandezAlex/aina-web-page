import { HeartHandshake, School, UserRound, type LucideIcon } from 'lucide-react';
import type { AboutAinaConfig, Locale } from '../config';
import { AnimatedCounter } from './StatsCard';

interface ImpactGalleryCardProps {
  images: AboutAinaConfig['gallery'];
  stats: AboutAinaConfig['impactStats'];
  label: string;
  ariaLabel: string;
  locale: Locale;
  shouldAnimate: boolean;
}

const statIcons: LucideIcon[] = [School, UserRound, HeartHandshake];
const iconColors = ['bg-primary', 'bg-primary/65', 'bg-forest-dark'];

export function ImpactGalleryCard({
  images,
  stats,
  label,
  ariaLabel,
  locale,
  shouldAnimate,
}: ImpactGalleryCardProps) {
  if (images.length === 0 && stats.length === 0) return null;

  const [mainImage, lowerLeftImage, lowerRightImage] = images;

  return (
    <article
      className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[#fffdf9] shadow-[0_24px_70px_rgba(73,32,24,0.10)]"
      aria-label={ariaLabel}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(253,168,80,0.10),transparent_32%),radial-gradient(circle_at_96%_92%,rgba(188,5,49,0.06),transparent_30%)]" />
      <div className="relative grid xl:grid-cols-[0.92fr_1.08fr]">
        {images.length > 0 && (
          <div className="relative min-h-[390px] overflow-hidden sm:min-h-[500px] xl:min-h-[760px]">
            {mainImage && (
              <div className="absolute inset-x-0 top-0 h-[68%] overflow-hidden rounded-br-[42%]">
                <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fffdf9]/25" />
              </div>
            )}
            {lowerLeftImage && (
              <div className="absolute bottom-[4%] left-[5%] z-20 aspect-square w-[58%] overflow-hidden rounded-full border-[8px] border-[#fffdf9] shadow-[0_18px_40px_rgba(73,32,24,0.18)]">
                <img
                  src={lowerLeftImage.src}
                  alt={lowerLeftImage.alt}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            )}
            {lowerRightImage && (
              <div className="absolute bottom-[2%] right-[2%] z-10 aspect-square w-[54%] overflow-hidden rounded-full border-[8px] border-[#fffdf9] shadow-[0_18px_40px_rgba(73,32,24,0.16)]">
                <img
                  src={lowerRightImage.src}
                  alt={lowerRightImage.alt}
                  className="h-full w-full object-cover object-[18%_center]"
                  loading="lazy"
                />
              </div>
            )}
            <div className="absolute bottom-6 left-6 grid grid-cols-3 gap-2 opacity-40">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-secondary" />
              ))}
            </div>
          </div>
        )}

        {stats.length > 0 && (
          <div className="relative px-6 pb-8 pt-9 sm:px-9 sm:pb-10 xl:px-8 xl:py-12">
            {label && (
              <div className="mb-5">
                <p className="accent-kicker text-sm font-body uppercase tracking-widest">
                  {label}
                </p>
                <span className="mt-4 block h-1 w-12 rounded-full bg-forest-dark" />
              </div>
            )}

            <div>
              {stats.map((stat, index) => {
                const Icon = statIcons[index % statIcons.length];
                const isLast = index === stats.length - 1;

                return (
                  <div
                    key={`${stat.label}-${index}`}
                    className={`grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 py-7 first:pt-5 ${
                      isLast ? '' : 'border-b border-primary/15'
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${
                        iconColors[index % iconColors.length]
                      }`}
                    >
                      <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="font-sans text-5xl font-bold leading-none tracking-tight text-primary xl:text-6xl">
                        <AnimatedCounter
                          end={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          shouldAnimate={shouldAnimate}
                          useGrouping={stat.useGrouping}
                          locale={locale}
                        />
                      </p>
                      <p
                        className={`mt-3 font-body text-base font-semibold leading-snug xl:text-lg ${
                          isLast ? 'text-forest-dark' : 'text-softblack'
                        }`}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
