import { ArrowUpRight } from 'lucide-react';

interface PressLogo {
  name: string;
  href: string;
  logoSrc: string;
  imageSlot: string;
}

const pressLogos: PressLogo[] = [
  {
    name: 'Medio nacional',
    href: '#contact',
    logoSrc: '',
    imageSlot: 'LOGO MEDIO NACIONAL — colocar imagen en public/prensa/',
  },
  {
    name: 'Medio internacional',
    href: '#contact',
    logoSrc: '',
    imageSlot: 'LOGO MEDIO INTERNACIONAL — colocar imagen en public/prensa/',
  },
  {
    name: 'Televisión',
    href: '#contact',
    logoSrc: '',
    imageSlot: 'LOGO TELEVISIÓN — colocar imagen en public/prensa/',
  },
  {
    name: 'Prensa escrita',
    href: '#contact',
    logoSrc: '',
    imageSlot: 'LOGO PRENSA ESCRITA — colocar imagen en public/prensa/',
  },
  {
    name: 'Radio',
    href: '#contact',
    logoSrc: '',
    imageSlot: 'LOGO RADIO — colocar imagen en public/prensa/',
  },
  {
    name: 'Digital',
    href: '#contact',
    logoSrc: '',
    imageSlot: 'LOGO DIGITAL — colocar imagen en public/prensa/',
  },
];

export function Press() {
  return (
    <section id="prensa" className="light-section relative w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-softblack/50 text-sm font-body uppercase tracking-widest mb-4">
              Prensa
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-softblack tracking-tight leading-tight">
              Prensa
            </h2>
            <p className="mt-5 text-xl md:text-2xl font-serif italic text-forest-mid">
              Una historia que ha cruzado fronteras
            </p>
          </div>

          <div>
            <p className="text-lg md:text-xl text-softblack/70 font-body leading-relaxed max-w-3xl">
              La labor de Si Asha Foundation ha despertado el interés de medios nacionales e internacionales,
              que han recogido una historia nacida en Nepal y sostenida por una red de apoyo capaz de cruzar
              fronteras. Cada aparición ayuda a visibilizar la discapacidad intelectual y del desarrollo, la
              educación especializada y el derecho de cada niño a crecer con dignidad.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-3 gap-px bg-softblack/10 border border-softblack/10">
              {pressLogos.map((logo) => (
                <a
                  key={logo.imageSlot}
                  href={logo.href}
                  aria-label={`Abrir enlace de prensa: ${logo.name}`}
                  className="group min-h-44 bg-offwhite p-6 flex flex-col justify-between transition-colors duration-300 hover:bg-white"
                >
                  <div className="h-20 rounded-md border border-dashed border-softblack/20 bg-white/70 flex items-center justify-center overflow-hidden">
                    {logo.logoSrc ? (
                      <img
                        src={logo.logoSrc}
                        alt={`Logo de ${logo.name}`}
                        className="max-h-14 max-w-[80%] object-contain grayscale transition duration-300 group-hover:grayscale-0"
                        loading="lazy"
                      />
                    ) : (
                      <span className="px-4 text-center text-[0.7rem] font-body uppercase tracking-widest text-softblack/40">
                        {logo.imageSlot}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="text-sm font-sans font-semibold text-softblack/70 group-hover:text-softblack transition-colors duration-300">
                      {logo.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-softblack/40 group-hover:text-forest-mid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
