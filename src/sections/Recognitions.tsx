import { recognitionAwards } from '../content/images';

export function Recognitions() {
  return (
    <section id="reconocimientos" className="relative w-full bg-forest-dark py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,169,82,0.16),transparent_34%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-14 md:mb-20">
          <p className="text-secondary/80 text-sm font-body uppercase tracking-widest mb-4">
            Reconocimientos
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            Reconocimientos
          </h2>
          <p className="mt-5 text-xl md:text-2xl font-serif italic text-secondary/90">
            Reconocimientos que impulsan la misión
          </p>
          <p className="mt-7 text-lg md:text-xl text-white/65 font-body leading-relaxed">
            El impacto social y educativo de los proyectos impulsados por Aina Barca ha sido
            reconocido por instituciones nacionales e internacionales tanto en Espana como en Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {recognitionAwards.map((award) => (
            <article
              key={`${award.title}-${award.year}-${award.imageSrc}`}
              className="group bg-forest-dark p-5 md:p-6 transition-colors duration-300 hover:bg-forest-mid"
            >
              <div className="aspect-[4/3] rounded-lg border border-dashed border-white/20 bg-white/[0.04] overflow-hidden flex items-center justify-center">
                <img
                  src={award.imageSrc}
                  alt={`${award.title} — ${award.location} · ${award.year}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="pt-6">
                <p className="text-sm font-body uppercase tracking-widest text-secondary/75">
                  {award.location} · {award.year}
                </p>
                <h3 className="mt-3 text-xl md:text-2xl font-sans font-semibold text-white leading-snug">
                  {award.title}
                </h3>
                <p className="mt-4 text-sm md:text-base font-body leading-relaxed text-white/68">
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
