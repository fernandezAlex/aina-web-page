import { useSiteContent } from '../i18n';

export function Recognitions() {
  const { recognitions } = useSiteContent();

  return (
    <section id="reconocimientos" className="relative w-full bg-forest-dark py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,5,49,0.14),transparent_34%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-14 md:mb-20">
          <p className="text-secondary/80 text-sm font-body uppercase tracking-widest mb-4">
            {recognitions.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            {recognitions.title}
          </h2>
          <p className="mt-5 text-xl md:text-2xl font-serif italic text-secondary/90">
            {recognitions.subtitle}
          </p>
          <p className="mt-7 text-xl font-body font-bold leading-relaxed text-white md:text-2xl">
            {recognitions.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {recognitions.awards.map((award) => (
            <article
              key={`${award.title}-${award.year}-${award.imageSrc}`}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[#f4d7b6] bg-white p-5 shadow-[0_20px_60px_rgba(141,31,57,0.14)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f0c896] hover:shadow-[0_30px_90px_rgba(141,31,57,0.18)] md:p-6"
            >
              <div className="pointer-events-none absolute right-5 top-5 h-14 w-14 rounded-full bg-[#fff2e0] blur-2xl transition-transform duration-500 group-hover:scale-125" />

              <div className="aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-[#f3d4b4] bg-[#fff9f3] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] flex items-center justify-center">
                <img
                  src={award.imageSrc}
                  alt={`${award.title} - ${award.location} · ${award.year}`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="pt-6">
                <p className="text-sm font-body uppercase tracking-[0.24em] text-secondary/80">
                  {award.location} · {award.year}
                </p>
                <h3 className="mt-3 text-xl md:text-2xl font-sans font-semibold text-primary leading-snug">
                  {award.title}
                </h3>
                <p className="mt-4 text-base md:text-lg font-body leading-relaxed text-white/68">
                  {award.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
