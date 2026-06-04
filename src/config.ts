export type Locale = 'es' | 'en' | 'ca';

export interface SiteConfig {
  language: Locale;
  siteTitle: string;
  siteDescription: string;
  socialTitle: string;
  socialDescription: string;
  socialImage: string;
  socialImageAlt: string;
}

export interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  useGrouping?: boolean;
}

export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
  languageLabel: string;
}

export interface IntroMissionConfig {
  titleLine1: string;
  titleLine2: string;
  paragraphs: Array<{
    text: string;
    links?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  images: {
    src: string;
    alt: string;
  }[];
}

export interface AboutAinaConfig {
  subtitle: string;
  title: string;
  intro: string;
  paragraphs: string[];
  impactLabel: string;
  impactStats: StatItem[];
  impactAriaLabel: string;
  gallery: Array<{
    src: string;
    alt: string;
  }>;
}

export interface VisionCard {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  href: string;
  initials: string;
  logoSrc?: string;
  logoAlt?: string;
  mediaMode?: 'logo' | 'image';
}

export interface VisionConfig {
  eyebrow: string;
  heading: string;
  subheading: string;
  description: string;
  cards: VisionCard[];
  closingEyebrow: string;
  closingTitle: string;
  closingParagraphs: string[];
  closingBackgroundImage: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface BookCard {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
}

export interface BooksConfig {
  eyebrow: string;
  title: string;
  titleAccent: string;
  publishedBook: BookCard;
  upcomingBook: BookCard;
  galleryImages: Array<{
    src: string;
    alt: string;
  }>;
  showcaseImages: Array<{
    src: string;
    alt: string;
  }>;
}

export interface PressAppearance {
  name: string;
  category: string;
  imageSrc: string;
  href?: string;
}

export interface PressConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  selectionLabel: string;
  previousLabel: string;
  nextLabel: string;
  mediaAriaLabel: string;
  indicatorAriaLabel: string;
  appearances: PressAppearance[];
}

export interface RecognitionAward {
  title: string;
  location: string;
  year: string;
  imageSrc: string;
  description: string;
}

export interface RecognitionsConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  awards: RecognitionAward[];
}

export interface JoinAction {
  label: string;
  href: string;
}

export interface JoinBlock {
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  actions: JoinAction[];
}

export interface JoinConfig {
  eyebrow: string;
  title: string;
  description: string;
  gallery: Array<{
    src: string;
    alt: string;
  }>;
  blocks: JoinBlock[];
}

export interface FooterConfig {
  logoText: string;
  navigationLabel: string;
  navLinks: { label: string; href: string }[];
  closingText: string;
  copyright: string;
}

export interface LocalizedSiteContent {
  siteConfig: SiteConfig;
  hero: HeroConfig;
  introMission: IntroMissionConfig;
  aboutAina: AboutAinaConfig;
  vision: VisionConfig;
  books: BooksConfig;
  press: PressConfig;
  recognitions: RecognitionsConfig;
  join: JoinConfig;
  footer: FooterConfig;
}

export const localeOptions: Array<{
  value: Locale;
  label: string;
  flag: string;
  name: string;
  flagSrc?: string;
}> = [
  { value: 'es', label: 'ES', flag: '🇪🇸', name: 'Español' },
  { value: 'en', label: 'EN', flag: '🇬🇧', name: 'English' },
  {
    value: 'ca',
    label: 'CA',
    flag: 'Catalonia',
    name: 'Català',
    flagSrc: `${import.meta.env.BASE_URL}flags/catalonia.svg`,
  },
];

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const year = new Date().getFullYear();

const pressOfficialUrls: Record<string, string> = {
  'Radio Galega': 'https://crtvg.gal/programacion-rg',
  'National Gold': 'https://nationalgoldhd.com/',
  RTVE: 'https://www.rtve.es/',
  'Radio Madrid SER': 'https://cadenaser.com/radio-madrid/',
  News24: 'https://www.news24.com/',
  RAC1: 'https://www.rac1.cat/',
  Regio7: 'https://www.regio7.cat/',
  TV3: 'https://www.3cat.cat/tv3/',
  'Radio Irun SER': 'https://cadenaser.com/radio-irun/',
  'Nepal Television': 'https://www.ntv.org.np/',
  'Mujer Emprendedora': 'https://www.paginasdemujeremprendedora.net/',
  EITB: 'https://www.eitb.eus/',
  RNE: 'https://www.rtve.es/radio/',
  'Mundo Solidario': 'https://www.mundo-solidario.com/',
  'Team TV': 'https://www.teamtv.online/',
  'El Confidencial': 'https://www.elconfidencial.com/',
  'El Diario Vasco': 'https://www.diariovasco.com/',
  Confidenciales: 'https://www.elconfidencial.com/',
  'SER Catalunya': 'https://cadenaser.com/cataluna/',
  Ratopati: 'https://www.ratopati.com/',
  Ara: 'https://www.ara.cat/',
  'La Vanguardia': 'https://www.lavanguardia.com/',
  'Todo Literatura': 'https://www.todoliteratura.es/',
  'Eco Diario': 'https://ecodiario.mx/',
  'Online Khabar': 'https://www.onlinekhabar.com/',
  RPP: 'https://rpp.pe/',
  UOC: 'https://www.uoc.edu/',
  'Onda Cero': 'https://www.ondacero.es/',
};

const pressHref = (name: string) => pressOfficialUrls[name];

const navHrefs = [
  '#hero',
  '#sobre-aina',
  '#vision',
  '#libros',
  '#prensa',
  '#reconocimientos',
  '#unete',
] as const;

const contentByLocale: Record<Locale, LocalizedSiteContent> = {
  es: {
    siteConfig: {
      language: 'es',
      siteTitle: 'Aina Barca | Educación especial e inclusión en Nepal',
      siteDescription:
        'Aina Barca impulsa educación especial e inclusión en Nepal. Descubre su historia, libros, reconocimientos, prensa y formas de colaborar.',
      socialTitle: 'Aina Barca | Educación especial e inclusión en Nepal',
      socialDescription:
        'Conoce la historia de Aina Barca y su impacto en Nepal: educación especial, inclusión, libros, prensa y formas de colaborar.',
      socialImage: asset('/aina/main/aina-hero-studio.jpg'),
      socialImageAlt:
        'Retrato de Aina Barca sonriendo en un estudio, imagen principal para compartir la web',
    },
    hero: {
      backgroundText: 'AINA BARCA',
      heroImage: asset('/aina-transparente.png'),
      heroImageAlt: 'Silueta recortada de Aina Barca',
      overlayText: 'El amor puesto en acción',
      brandName: 'Aina Barca',
      languageLabel: 'Idioma',
      navLinks: [
        { label: 'Inicio', href: navHrefs[0] },
        { label: 'Sobre Aina', href: navHrefs[1] },
        { label: 'La Visión', href: navHrefs[2] },
        { label: 'Libros', href: navHrefs[3] },
        { label: 'Prensa', href: navHrefs[4] },
        { label: 'Reconocimientos', href: navHrefs[5] },
        { label: 'Únete', href: navHrefs[6] },
      ],
    },
    introMission: {
      titleLine1: 'Una vida dedicada a construir',
      titleLine2: 'oportunidades donde antes no las había.',
      paragraphs: [
        {
          text: 'Desde hace más de una década, Aina Barca trabaja para construir educación, inclusión y dignidad para personas con discapacidad intelectual en Nepal, mientras impulsa la formación de nuevas generaciones de líderes sociales capaces de generar impacto real en el mundo.',
        },
        {
          text: 'Fundadora de Familia de Hetauda, Fundación Si Asha y Aina Institute, su trabajo conecta acción social, liderazgo humano y transformación estructural desde una misma visión: crear oportunidades donde antes no existían.',
          links: [
            { label: 'Familia de Hetauda', href: 'https://familiadehetauda.org/' },
            { label: 'Fundación Si Asha', href: 'https://siasha.org/es/' },
            {
              label: 'Aina Institute',
              href: 'https://ainainstitute.es/?utm_source=chatgpt.com',
            },
          ],
        },
      ],
      images: [
        {
          src: asset('/aina/main/aina-outdoor-smile.jpg'),
          alt: 'Aina Barca sonríe al aire libre',
        },
        {
          src: asset('/aina/main/aina-talk.jpg'),
          alt: 'Aina Barca durante una conversación pública',
        },
        {
          src: asset('/siasha/aina-with-children.webp'),
          alt: 'Aina Barca comparte un momento con varios niños',
        },
        {
          src: asset('/aina/main/aina-child-floor-portrait.jpg'),
          alt: 'Aina Barca acompaña de cerca a un niño en un retrato vertical',
        },
        {
          src: asset('/aina/main/aina-studio-portrait-2.jpg'),
          alt: 'Retrato de estudio de Aina Barca sonriendo',
        },
      ],
    },
    aboutAina: {
      subtitle: 'Sobre Aina',
      title:
        'Hay viajes que cambian una vida. Y decisiones que terminan cambiando muchas otras.',
      intro:
        'Con 21 años, un viaje a Nepal hizo que Aina se encontrara frente a una realidad imposible de ignorar: niños y niñas con discapacidad intelectual completamente excluidos, familias sin recursos ni apoyo y personas invisibles para gran parte de la sociedad.',
      paragraphs: [
        'Niños que nunca habían ido a la escuela. Madres que creían que sus hijos no tendrían futuro. Familias acostumbradas a vivir el rechazo y el silencio.',
        'Lo que empezó como una experiencia de voluntariado terminó convirtiéndose en una misión de vida.',
        'Mientras muchos habrían seguido adelante, ella decidió quedarse. Escuchar. Aprender. Y convertir el amor en acción, construyendo escuelas donde antes no había nada.',
        'Lo que un día comenzó con una idea y muchísima incertidumbre, hoy se ha convertido en escuelas de educación especial, centros de fisioterapia y una red de apoyo e inclusión para cientos de personas y familias en Nepal.',
        'Porque transformar vidas no consiste solo en ayudar. Consiste en crear estructuras capaces de sostener dignidad, autonomía y oportunidades a largo plazo.',
      ],
      impactLabel: 'Impacto acumulado',
      impactAriaLabel: 'Impacto de Aina Barca',
      impactStats: [
        {
          value: 157,
          prefix: '+',
          label: 'niños y niñas con discapacidad escolarizados',
          useGrouping: true,
        },
        {
          value: 60,
          prefix: '+',
          label: 'mujeres forman parte del equipo profesional',
          useGrouping: true,
        },
        {
          value: 1000,
          prefix: '+',
          label: 'familias han encontrado apoyo, comunidad y esperanza',
          useGrouping: true,
        },
      ],
      gallery: [
        {
          src: asset('/aina/main/aina-nepal-rooftop.jpg'),
          alt: 'Aina Barca sentada en una azotea en Nepal durante uno de sus primeros viajes',
        },
        {
          src: asset('/aina/main/aina-sunlight-portrait.jpg'),
          alt: 'Retrato de Aina Barca a contraluz durante una visita de campo',
        },
        {
          src: asset('/aina/main/aina-hands-detail.jpg'),
          alt: 'Detalle de las manos de Aina Barca sobre la tierra durante un recorrido en Nepal',
        },
      ],
    },
    vision: {
      eyebrow: 'La Visión',
      heading: 'Una misma visión',
      subheading: 'Diferentes formas de transformar vidas.',
      description:
        'Todo lo que Aina Barca ha construido nace de una misma convicción: que ninguna persona debería quedar excluida por haber nacido en un lugar sin oportunidades.',
      cards: [
        {
          title: 'Familia de Hetauda',
          subtitle: 'Donde nació la primera escuela',
          description:
            'En 2012, Aina Barca impulsó en Hetauda la primera escuela de educación especial para niños y niñas con discapacidad intelectual de la región. Hoy, la ONG Familia de Hetauda sigue acompañando a cientos de familias a través de educación, inclusión y apoyo especializado en Nepal.',
          ctaLabel: 'Ir a la web',
          href: 'https://familiadehetauda.org/',
          initials: 'FH',
          logoSrc: asset('/vision/familia-de-hetauda-logo.png'),
          logoAlt: 'Logotipo oficial de Familia de Hetauda',
          mediaMode: 'logo',
        },
        {
          title: 'Fundación Si Asha',
          subtitle: 'Una visión que quiere llegar a todo Nepal',
          description:
            'Fundación Si Asha nace en España con un objetivo claro: seguir expandiendo el acceso a educación especial, inclusión y oportunidades a todas las provincias de Nepal. Porque la dignidad no debería depender del lugar donde una persona nace.',
          ctaLabel: 'Ir a la web',
          href: 'https://siasha.org/es/',
          initials: 'SA',
          logoSrc: asset('/vision/fundacion-si-asha-logo.png'),
          logoAlt: 'Logotipo oficial de Fundación Si Asha',
          mediaMode: 'logo',
        },
        {
          title: 'Si Asha Foundation',
          subtitle: 'El corazón que sostiene cada proyecto',
          description:
            'La contraparte nepalí responsable de coordinar el trabajo diario sobre el terreno: escuelas, equipos, terapias, programas educativos y acompañamiento a familias en Nepal. Detrás de cada niño acompañado, hay un equipo humano haciendo posible que todo siga adelante.',
          ctaLabel: 'Ir a la web',
          href: 'https://www.siashafoundation.org/',
          initials: 'SF',
          logoSrc: asset('/vision/si-asha-foundation-logo.png'),
          logoAlt: 'Logotipo oficial de Si Asha Foundation',
          mediaMode: 'logo',
        },
        {
          title: 'Asha Special School & Rehabilitation Centers',
          subtitle: 'Mucho más que escuelas',
          description:
            'Espacios creados para garantizar educación, fisioterapia, inclusión y oportunidades reales para niños y jóvenes con discapacidad intelectual. Lugares donde los niños encuentran, por primera vez, apoyo, comunidad y esperanza de futuro.',
          ctaLabel: 'Ir a la web',
          href: 'https://www.siashafoundation.org/',
          initials: 'AS',
          logoSrc: asset('/siasha/hetauda-school.webp'),
          logoAlt: 'Imagen real de Asha Special School en Hetauda',
          mediaMode: 'image',
        },
        {
          title: 'Aina Institute',
          subtitle: 'Cuando ayudas a personas que ayudan, el impacto se multiplica',
          description:
            'Aina Institute forma a nuevas generaciones de líderes sociales capaces de transformar propósito en proyectos sólidos, sostenibles y capaces de generar impacto real. Porque cambiar vidas requiere visión, estructura y acción.',
          ctaLabel: 'Ir a la web',
          href: 'https://ainainstitute.es/',
          initials: 'AI',
          logoSrc: asset('/vision/aina-institute-logo.png'),
          logoAlt: 'Logotipo oficial de Aina Institute',
          mediaMode: 'logo',
        },
      ],
      closingEyebrow: 'Una causa que se siente cerca',
      closingTitle: 'Que ningún niño quede invisible para la sociedad',
      closingParagraphs: [
        'La visión es seguir expandiendo las Asha Special Schools para que cada vez más niños puedan acceder a educación especializada, inclusión y un futuro digno.',
        'Porque el lugar donde una persona nace no debería definir las oportunidades que tendrá en la vida.',
        'Pero nada de esto se construye solo.',
        'Cada escuela, cada niño acompañado y cada familia apoyada existen gracias a personas que decidieron no mirar hacia otro lado.',
        'Personas que entendieron que el amor, cuando se convierte en acción, transforma vidas.',
      ],
      closingBackgroundImage: asset('/aina/main/aina-child-embrace.jpg'),
      ctaButtonText: 'Pasa a la acción',
      ctaHref: '#unete',
    },
    books: {
      eyebrow: 'Libros',
      title: 'Nepal desde dentro.',
      titleAccent: 'Sin filtros.',
      publishedBook: {
        eyebrow: 'Libro publicado',
        title: 'Asha, o la fuerza de la esperanza',
        description:
          'Este no es un libro sobre teorías ni sobre cooperación contada desde fuera. Es la historia real de cómo una chica de 21 años terminó viviendo entre burocracia, pobreza, choque cultural, pérdidas, contradicciones y aprendizajes mientras intentaba levantar una escuela de educación especial en Nepal desde cero. Un viaje íntimo y sin filtros sobre el lado más humano, y también más duro, de construir una misión de vida lejos de casa y dejar una huella real.',
        buttonLabel: 'Comprar en Amazon',
      },
      upcomingBook: {
        eyebrow: 'Próximo lanzamiento',
        title: 'Un nuevo libro está en camino',
        description:
          'Hay historias que todavía no han sido contadas. Después de años viviendo entre Nepal y España, Aina Barca está escribiendo una nueva obra basada en algunas de las experiencias más intensas, complejas y transformadoras de todo este camino. Será un libro mucho más íntimo y personal sobre lo que ocurre detrás de una misión de vida: la presión, las contradicciones, el impacto emocional, las relaciones humanas, el sentido de propósito y el precio invisible de dedicar una vida a intentar cambiar otras.',
        buttonLabel: 'Quiero enterarme antes que nadie',
      },
      galleryImages: [
        {
          src: asset('/aina/main/aina-book-portrait-1.jpg'),
          alt: 'Aina Barca en un retrato editorial vinculado a su faceta como autora',
        },
        {
          src: asset('/aina/main/aina-book-portrait-2.jpg'),
          alt: 'Aina Barca escribiendo y revisando material en un entorno de trabajo',
        },
      ],
      showcaseImages: [
        {
          src: asset('/aina/book-cover-apple.jpg'),
          alt: 'Portada del libro Asha, o la fuerza de la esperanza de Aina Barca',
        },
        {
          src: asset('/aina/book-cover-article.jpg'),
          alt: 'Imagen editorial del libro Asha, o la fuerza de la esperanza publicada en prensa cultural',
        },
      ],
    },
    press: {
      eyebrow: 'Prensa',
      title: 'Prensa',
      subtitle: 'Una historia que ha cruzado fronteras',
      description:
        'El trabajo de Aina Barca y sus proyectos en Nepal ha sido compartido por medios nacionales e internacionales que han dado voz a la importancia de la inclusión, la educación especial y la dignidad de las personas con discapacidad intelectual.',
      selectionLabel: 'Selección de medios',
      previousLabel: 'Ver medio anterior',
      nextLabel: 'Ver siguiente medio',
      mediaAriaLabel: 'Ver aparición en prensa',
      indicatorAriaLabel: 'Ir al medio',
      appearances: [
        { name: 'Radio Galega', href: pressHref('Radio Galega'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-galega.png') },
        { name: 'National Gold', href: pressHref('National Gold'), category: 'Televisión', imageSrc: asset('/aina/press-media/national-gold.png') },
        { name: 'RTVE', href: pressHref('RTVE'), category: 'Televisión', imageSrc: asset('/aina/press-media/rtve.png') },
        { name: 'Radio Madrid SER', href: pressHref('Radio Madrid SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-madrid-ser.png') },
        { name: 'News24', href: pressHref('News24'), category: 'Digital', imageSrc: asset('/aina/press-media/news24.png') },
        { name: 'RAC1', href: pressHref('RAC1'), category: 'Radio', imageSrc: asset('/aina/press-media/rac1.png') },
        { name: 'Regió7', href: pressHref('Regio7'), category: 'Prensa escrita', imageSrc: asset('/aina/press-media/regio7.png') },
        { name: 'TV3', href: pressHref('TV3'), category: 'Televisión', imageSrc: asset('/aina/press-media/tv3.png') },
        { name: 'Radio Irun SER', href: pressHref('Radio Irun SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-irun-ser.png') },
        { name: 'Nepal Television', href: pressHref('Nepal Television'), category: 'Televisión', imageSrc: asset('/aina/press-media/nepal-television.png') },
        { name: 'Mujer Emprendedora', href: pressHref('Mujer Emprendedora'), category: 'Digital', imageSrc: asset('/aina/press-media/mujer-emprendedora.png') },
        { name: 'EITB', href: pressHref('EITB'), category: 'Televisión', imageSrc: asset('/aina/press-media/eitb.png') },
        { name: 'RNE', href: pressHref('RNE'), category: 'Radio', imageSrc: asset('/aina/press-media/rne.png') },
        { name: 'Mundo Solidario', href: pressHref('Mundo Solidario'), category: 'Prensa solidaria', imageSrc: asset('/aina/press-media/mundo-solidario.png') },
        { name: 'Team TV', href: pressHref('Team TV'), category: 'Televisión', imageSrc: asset('/aina/press-media/team-tv.png') },
        { name: 'El Confidencial', href: pressHref('El Confidencial'), category: 'Digital', imageSrc: asset('/aina/press-media/el-confidencial.png') },
        { name: 'El Diario Vasco', href: pressHref('El Diario Vasco'), category: 'Prensa escrita', imageSrc: asset('/aina/press-media/el-diario-vasco.png') },
        { name: 'Confidenciales', href: pressHref('Confidenciales'), category: 'Revista / portada', imageSrc: asset('/aina/press-media/confidenciales-cover.png') },
        { name: 'SER Catalunya', href: pressHref('SER Catalunya'), category: 'Radio', imageSrc: asset('/aina/press-media/ser-catalunya.png') },
        { name: 'Ratopati', href: pressHref('Ratopati'), category: 'Digital', imageSrc: asset('/aina/press-media/ratopati.png') },
        { name: 'Ara', href: pressHref('Ara'), category: 'Prensa escrita', imageSrc: asset('/aina/press-media/ara.png') },
        { name: 'La Vanguardia', href: pressHref('La Vanguardia'), category: 'Prensa escrita', imageSrc: asset('/aina/press-media/la-vanguardia.png') },
        { name: 'Todo Literatura', href: pressHref('Todo Literatura'), category: 'Cultura', imageSrc: asset('/aina/press-media/todo-literatura.png') },
        { name: 'Eco Diario', href: pressHref('Eco Diario'), category: 'Digital', imageSrc: asset('/aina/press-media/eco-diario.png') },
        { name: 'Online Khabar', href: pressHref('Online Khabar'), category: 'Digital', imageSrc: asset('/aina/press-media/online-khabar.png') },
        { name: 'RPP', href: pressHref('RPP'), category: 'Radio / digital', imageSrc: asset('/aina/press-media/rpp.png') },
        { name: 'UOC', href: pressHref('UOC'), category: 'Académico', imageSrc: asset('/aina/press-media/uoc.png') },
        { name: 'Onda Cero', href: pressHref('Onda Cero'), category: 'Radio', imageSrc: asset('/aina/press-media/onda-cero.png') },
      ],
    },
    recognitions: {
      eyebrow: 'Reconocimientos',
      title: 'Reconocimientos',
      subtitle: 'Reconocimientos que impulsan la misión',
      description:
        'El impacto social y educativo de los proyectos impulsados por Aina Barca ha sido reconocido por instituciones nacionales e internacionales tanto en España como en Nepal.',
      awards: [
        {
          title: 'Social Welfare Education Award',
          location: 'Nepal',
          year: '2024',
          imageSrc: asset('/aina/recognitions/social-welfare-1.jpg'),
          description:
            'Premio entregado por el Primer Ministro de Nepal en reconocimiento al impacto educativo y social impulsado para la inclusión de personas con discapacidad intelectual en Nepal.',
        },
        {
          title: 'Premio RECLA a la Sostenibilidad',
          location: 'Perú',
          year: '2024',
          imageSrc: asset('/aina/recognitions/recla-prize-1.jpg'),
          description:
            'Reconocimiento internacional otorgado al programa impulsado por Aina Institute por su innovación en formación con impacto social.',
        },
        {
          title: 'Premio Joan Maria Malapeira i Gas',
          location: 'Universidad de Barcelona',
          year: '2024',
          imageSrc: asset('/aina/recognitions/joan-maria-prize-1.jpg'),
          description:
            'Premio a la innovación educativa por el desarrollo de programas formativos impulsados desde Aina Institute en el ámbito del emprendimiento social.',
        },
        {
          title: 'Reconocimiento Ayuntamiento de Hetauda (Saman Patra)',
          location: 'Nepal',
          year: '2023',
          imageSrc: asset('/aina/recognitions/saman-patra-1.jpg'),
          description:
            'Distinción otorgada a Aina Barca por su contribución al desarrollo educativo y social de la comunidad de Hetauda, Nepal.',
        },
        {
          title: 'Premio TELVA Solidaridad',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-1.jpg'),
          description:
            'Reconocimiento a la labor social desarrollada por Familia de Hetauda para impulsar educación, inclusión y oportunidades para personas con discapacidad intelectual en Nepal.',
        },
        {
          title: 'Premio Sociedad Inclusiva',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-2.jpg'),
          description:
            'Premio otorgado por el compromiso con la inclusión y la creación de oportunidades reales para personas con discapacidad intelectual y sus familias.',
        },
      ],
    },
    join: {
      eyebrow: 'Únete',
      title: 'Hay muchas formas de poner el amor en acción.',
      description:
        'A veces, las transformaciones más grandes empiezan con gestos pequeños: una decisión, una ayuda, una persona que decide implicarse.',
      gallery: [
        {
          src: asset('/aina/main/aina-child-close-smile.jpg'),
          alt: 'Aina abraza a un niño sonriendo junto a un mural',
        },
        {
          src: asset('/aina/main/aina-child-blue-shirt.jpg'),
          alt: 'Aina acompaña a un niño con camiseta amarilla frente a un mural',
        },
        {
          src: asset('/aina/main/aina-child-floor-portrait.jpg'),
          alt: 'Aina en el suelo junto a un niño durante una actividad',
        },
        {
          src: asset('/aina/main/aina-child-embrace.jpg'),
          alt: 'Aina y un niño se abrazan en un momento de complicidad',
        },
      ],
      blocks: [
        {
          eyebrow: 'Apoyo recurrente',
          title: 'Sostén una escuela, abre futuros.',
          summary: 'Tu ayuda mensual mantiene oportunidades reales en marcha.',
          description:
            'Ayuda a que niños y niñas en Nepal puedan seguir accediendo a educación, inclusión y un futuro con más oportunidades. Porque detrás de cada escuela y cada niño que hoy puede aprender, hay personas que decidieron sostener esta misión con amor y compromiso.',
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
          eyebrow: 'Voluntariado',
          title: 'Vive la misión desde dentro.',
          summary: 'Comparte el día a día con el equipo y acompaña procesos reales.',
          description:
            'Comparte el día a día con las mujeres y equipos que trabajan cada día para construir una sociedad más inclusiva y humana en Nepal desde la educación, la inclusión y el amor puesto en acción.',
          actions: [
            {
              label: 'Quiero ser voluntario',
              href: 'mailto:voluntariosfdh@gmail.com',
            },
          ],
        },
        {
          eyebrow: 'Aina Institute',
          title: 'Convierte tu vocación en impacto profesional.',
          summary: 'Formación práctica para construir proyectos sólidos y sostenibles.',
          description:
            'A través de Aina Institute, personas de distintos países aprenden a construir proyectos sólidos, sostenibles y capaces de generar impacto real. Porque tener vocación no siempre es suficiente. También hacen falta herramientas, estrategia y una estructura capaz de sostener el cambio. Convierte tu vocación en tu profesión.',
          actions: [
            {
              label: 'Habla con el equipo',
              href: 'https://wa.me/34610094664',
            },
          ],
        },
      ],
    },
    footer: {
      logoText: 'AINA BARCA',
      navigationLabel: 'Secciones',
      navLinks: [
        { label: 'Inicio', href: navHrefs[0] },
        { label: 'Sobre Aina', href: navHrefs[1] },
        { label: 'La Visión', href: navHrefs[2] },
        { label: 'Libros', href: navHrefs[3] },
        { label: 'Prensa', href: navHrefs[4] },
        { label: 'Reconocimientos', href: navHrefs[5] },
        { label: 'Únete', href: navHrefs[6] },
      ],
      closingText:
        'El amor puesto en acción. Una visión compartida para construir educación, inclusión y dignidad en Nepal.',
      copyright: `© ${year} Aina Barca`,
    },
  },
  en: {
    siteConfig: {
      language: 'en',
      siteTitle: 'Aina Barca | Special Education and Inclusion in Nepal',
      siteDescription:
        'Aina Barca advances special education and inclusion in Nepal. Explore her story, books, press coverage, recognitions, and ways to collaborate.',
      socialTitle: 'Aina Barca | Special Education and Inclusion in Nepal',
      socialDescription:
        'Discover Aina Barca’s story and impact in Nepal through special education, inclusion, books, press, and ways to collaborate.',
      socialImage: asset('/aina/main/aina-hero-studio.jpg'),
      socialImageAlt:
        'Studio portrait of Aina Barca smiling, used as the main social sharing image',
    },
    hero: {
      backgroundText: 'AINA BARCA',
      heroImage: asset('/aina-transparente.png'),
      heroImageAlt: 'Cutout silhouette of Aina Barca',
      overlayText: 'Love put into action',
      brandName: 'Aina Barca',
      languageLabel: 'Language',
      navLinks: [
        { label: 'Home', href: navHrefs[0] },
        { label: 'About Aina', href: navHrefs[1] },
        { label: 'Vision', href: navHrefs[2] },
        { label: 'Books', href: navHrefs[3] },
        { label: 'Press', href: navHrefs[4] },
        { label: 'Recognitions', href: navHrefs[5] },
        { label: 'Join', href: navHrefs[6] },
      ],
    },
    introMission: {
      titleLine1: 'A life devoted to creating',
      titleLine2: 'opportunities where none existed before.',
      paragraphs: [
        {
          text: 'For more than a decade, Aina Barca has worked to build education, inclusion, and dignity for people with intellectual disabilities in Nepal, while also training a new generation of social leaders capable of creating real impact in the world.',
        },
        {
          text: 'Founder of Familia de Hetauda, Fundación Si Asha, and Aina Institute, her work connects social action, human leadership, and structural transformation through one shared vision: creating opportunities where they did not exist before.',
          links: [
            { label: 'Familia de Hetauda', href: 'https://familiadehetauda.org/' },
            { label: 'Fundación Si Asha', href: 'https://siasha.org/es/' },
            { label: 'Aina Institute', href: 'https://ainainstitute.es/?utm_source=chatgpt.com' },
          ],
        },
      ],
      images: [
        { src: asset('/aina/main/aina-outdoor-smile.jpg'), alt: 'Aina Barca smiling outdoors' },
        { src: asset('/aina/main/aina-talk.jpg'), alt: 'Aina Barca during a public talk' },
        { src: asset('/siasha/aina-with-children.webp'), alt: 'Aina Barca sharing a moment with several children' },
        { src: asset('/aina/main/aina-child-floor-portrait.jpg'), alt: 'Aina Barca closely accompanying a child in a vertical portrait' },
        { src: asset('/aina/main/aina-studio-portrait-2.jpg'), alt: 'Studio portrait of Aina Barca smiling' },
      ],
    },
    aboutAina: {
      subtitle: 'About Aina',
      title: 'Some journeys change one life. Some decisions end up changing many.',
      intro:
        'At 21, a trip to Nepal placed Aina face to face with a reality that was impossible to ignore: children with intellectual disabilities completely excluded, families without support or resources, and people made invisible by much of society.',
      paragraphs: [
        'Children who had never been to school. Mothers who believed their sons and daughters had no future. Families used to living with rejection and silence.',
        'What began as a volunteer experience ended up becoming a life mission.',
        'While many others would have moved on, she decided to stay. To listen. To learn. And to turn love into action by building schools where there had once been nothing.',
        'What once began with an idea and enormous uncertainty has now become special education schools, physiotherapy centers, and a network of support and inclusion for hundreds of people and families in Nepal.',
        'Because transforming lives is not only about helping. It is about creating structures capable of sustaining dignity, autonomy, and long-term opportunity.',
      ],
      impactLabel: 'Cumulative impact',
      impactAriaLabel: 'Aina Barca impact',
      impactStats: [
        { value: 157, prefix: '+', label: 'children with intellectual disabilities enrolled in school', useGrouping: true },
        { value: 60, prefix: '+', label: 'women are part of the professional team', useGrouping: true },
        { value: 1000, prefix: '+', label: 'families have found support, community, and hope', useGrouping: true },
      ],
      gallery: [
        { src: asset('/aina/main/aina-nepal-rooftop.jpg'), alt: 'Aina Barca sitting on a rooftop in Nepal during one of her first trips' },
        { src: asset('/aina/main/aina-sunlight-portrait.jpg'), alt: 'Backlit portrait of Aina Barca during a field visit' },
        { src: asset('/aina/main/aina-hands-detail.jpg'), alt: 'Close-up of Aina Barca hands touching the ground during a walk in Nepal' },
      ],
    },
    vision: {
      eyebrow: 'Vision',
      heading: 'One shared vision',
      subheading: 'Different ways of transforming lives.',
      description:
        'Everything Aina Barca has built begins from the same conviction: no person should be excluded because they were born in a place with fewer opportunities.',
      cards: [
        {
          title: 'Familia de Hetauda',
          subtitle: 'Where the first school was born',
          description:
            'In 2012, Aina Barca launched the first special education school for children with intellectual disabilities in the Hetauda region. Today, Familia de Hetauda continues supporting hundreds of families through education, inclusion, and specialized care in Nepal.',
          ctaLabel: 'Visit website',
          href: 'https://familiadehetauda.org/',
          initials: 'FH',
          logoSrc: asset('/vision/familia-de-hetauda-logo.png'),
          logoAlt: 'Official Familia de Hetauda logo',
          mediaMode: 'logo',
        },
        {
          title: 'Fundación Si Asha',
          subtitle: 'A vision that aims to reach all of Nepal',
          description:
            'Fundación Si Asha was created in Spain with a clear goal: to keep expanding access to special education, inclusion, and opportunity across all provinces of Nepal. Because dignity should not depend on where someone is born.',
          ctaLabel: 'Visit website',
          href: 'https://siasha.org/es/',
          initials: 'SA',
          logoSrc: asset('/vision/fundacion-si-asha-logo.png'),
          logoAlt: 'Official Fundación Si Asha logo',
          mediaMode: 'logo',
        },
        {
          title: 'Si Asha Foundation',
          subtitle: 'The heart that sustains every project',
          description:
            'The Nepali counterpart responsible for coordinating day-to-day work on the ground: schools, teams, therapies, educational programs, and support for families in Nepal. Behind every child supported, there is a human team making sure everything keeps moving forward.',
          ctaLabel: 'Visit website',
          href: 'https://www.siashafoundation.org/',
          initials: 'SF',
          logoSrc: asset('/vision/si-asha-foundation-logo.png'),
          logoAlt: 'Official Si Asha Foundation logo',
          mediaMode: 'logo',
        },
        {
          title: 'Asha Special School & Rehabilitation Centers',
          subtitle: 'Far more than schools',
          description:
            'Spaces created to guarantee education, physiotherapy, inclusion, and real opportunities for children and young people with intellectual disabilities. Places where children find, often for the first time, support, community, and hope for the future.',
          ctaLabel: 'Visit website',
          href: 'https://www.siashafoundation.org/',
          initials: 'AS',
          logoSrc: asset('/siasha/hetauda-school.webp'),
          logoAlt: 'Real image of Asha Special School in Hetauda',
          mediaMode: 'image',
        },
        {
          title: 'Aina Institute',
          subtitle: 'When you help people who help others, impact multiplies',
          description:
            'Aina Institute trains new generations of social leaders to turn purpose into solid, sustainable projects capable of generating real impact. Because changing lives requires vision, structure, and action.',
          ctaLabel: 'Visit website',
          href: 'https://ainainstitute.es/',
          initials: 'AI',
          logoSrc: asset('/vision/aina-institute-logo.png'),
          logoAlt: 'Official Aina Institute logo',
          mediaMode: 'logo',
        },
      ],
      closingEyebrow: 'A cause you can feel close to',
      closingTitle: 'So no child remains invisible to society',
      closingParagraphs: [
        'The vision is to keep expanding the Asha Special Schools so more children can access specialized education, inclusion, and a dignified future.',
        'Because the place where a person is born should not define the opportunities they will have in life.',
        'But none of this is built alone.',
        'Every school, every child supported, and every family helped exists thanks to people who chose not to look away.',
        'People who understood that love, when turned into action, transforms lives.',
      ],
      closingBackgroundImage: asset('/aina/main/aina-child-embrace.jpg'),
      ctaButtonText: 'Take action',
      ctaHref: '#unete',
    },
    books: {
      eyebrow: 'Books',
      title: 'Nepal from the inside.',
      titleAccent: 'Unfiltered.',
      publishedBook: {
        eyebrow: 'Published book',
        title: 'Asha, o la fuerza de la esperanza',
        description:
          'This is not a book about theory or about aid told from the outside. It is the real story of how a 21-year-old woman ended up navigating bureaucracy, poverty, culture shock, loss, contradictions, and deep learning while trying to build a special education school in Nepal from scratch. An intimate, unfiltered journey through the most human, and also the hardest, side of building a life mission far from home and leaving a real mark.',
        buttonLabel: 'Buy on Amazon',
      },
      upcomingBook: {
        eyebrow: 'Upcoming release',
        title: 'A new book is on the way',
        description:
          'Some stories have not yet been told. After years living between Nepal and Spain, Aina Barca is writing a new work based on some of the most intense, complex, and transformative experiences of this journey. It will be a much more intimate and personal book about what happens behind a life mission: pressure, contradictions, emotional impact, human relationships, sense of purpose, and the invisible cost of devoting one life to trying to change others.',
        buttonLabel: 'I want to hear about it first',
      },
      galleryImages: [
        { src: asset('/aina/main/aina-book-portrait-1.jpg'), alt: 'Aina Barca in an editorial portrait linked to her work as an author' },
        { src: asset('/aina/main/aina-book-portrait-2.jpg'), alt: 'Aina Barca writing and reviewing material in a work setting' },
      ],
      showcaseImages: [
        { src: asset('/aina/book-cover-apple.jpg'), alt: 'Cover of the book Asha, o la fuerza de la esperanza by Aina Barca' },
        { src: asset('/aina/book-cover-article.jpg'), alt: 'Editorial image of the book Asha, o la fuerza de la esperanza published in cultural press' },
      ],
    },
    press: {
      eyebrow: 'Press',
      title: 'Press',
      subtitle: 'A story that has crossed borders',
      description:
        'The work of Aina Barca and her projects in Nepal has been shared by national and international media that have highlighted the importance of inclusion, special education, and the dignity of people with intellectual disabilities.',
      selectionLabel: 'Media selection',
      previousLabel: 'View previous outlet',
      nextLabel: 'View next outlet',
      mediaAriaLabel: 'View press feature',
      indicatorAriaLabel: 'Go to outlet',
      appearances: [
        { name: 'Radio Galega', href: pressHref('Radio Galega'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-galega.png') },
        { name: 'National Gold', href: pressHref('National Gold'), category: 'Television', imageSrc: asset('/aina/press-media/national-gold.png') },
        { name: 'RTVE', href: pressHref('RTVE'), category: 'Television', imageSrc: asset('/aina/press-media/rtve.png') },
        { name: 'Radio Madrid SER', href: pressHref('Radio Madrid SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-madrid-ser.png') },
        { name: 'News24', href: pressHref('News24'), category: 'Digital', imageSrc: asset('/aina/press-media/news24.png') },
        { name: 'RAC1', href: pressHref('RAC1'), category: 'Radio', imageSrc: asset('/aina/press-media/rac1.png') },
        { name: 'Regió7', href: pressHref('Regio7'), category: 'Print media', imageSrc: asset('/aina/press-media/regio7.png') },
        { name: 'TV3', href: pressHref('TV3'), category: 'Television', imageSrc: asset('/aina/press-media/tv3.png') },
        { name: 'Radio Irun SER', href: pressHref('Radio Irun SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-irun-ser.png') },
        { name: 'Nepal Television', href: pressHref('Nepal Television'), category: 'Television', imageSrc: asset('/aina/press-media/nepal-television.png') },
        { name: 'Mujer Emprendedora', href: pressHref('Mujer Emprendedora'), category: 'Digital', imageSrc: asset('/aina/press-media/mujer-emprendedora.png') },
        { name: 'EITB', href: pressHref('EITB'), category: 'Television', imageSrc: asset('/aina/press-media/eitb.png') },
        { name: 'RNE', href: pressHref('RNE'), category: 'Radio', imageSrc: asset('/aina/press-media/rne.png') },
        { name: 'Mundo Solidario', href: pressHref('Mundo Solidario'), category: 'Solidarity media', imageSrc: asset('/aina/press-media/mundo-solidario.png') },
        { name: 'Team TV', href: pressHref('Team TV'), category: 'Television', imageSrc: asset('/aina/press-media/team-tv.png') },
        { name: 'El Confidencial', href: pressHref('El Confidencial'), category: 'Digital', imageSrc: asset('/aina/press-media/el-confidencial.png') },
        { name: 'El Diario Vasco', href: pressHref('El Diario Vasco'), category: 'Print media', imageSrc: asset('/aina/press-media/el-diario-vasco.png') },
        { name: 'Confidenciales', href: pressHref('Confidenciales'), category: 'Magazine / cover', imageSrc: asset('/aina/press-media/confidenciales-cover.png') },
        { name: 'SER Catalunya', href: pressHref('SER Catalunya'), category: 'Radio', imageSrc: asset('/aina/press-media/ser-catalunya.png') },
        { name: 'Ratopati', href: pressHref('Ratopati'), category: 'Digital', imageSrc: asset('/aina/press-media/ratopati.png') },
        { name: 'Ara', href: pressHref('Ara'), category: 'Print media', imageSrc: asset('/aina/press-media/ara.png') },
        { name: 'La Vanguardia', href: pressHref('La Vanguardia'), category: 'Print media', imageSrc: asset('/aina/press-media/la-vanguardia.png') },
        { name: 'Todo Literatura', href: pressHref('Todo Literatura'), category: 'Culture', imageSrc: asset('/aina/press-media/todo-literatura.png') },
        { name: 'Eco Diario', href: pressHref('Eco Diario'), category: 'Digital', imageSrc: asset('/aina/press-media/eco-diario.png') },
        { name: 'Online Khabar', href: pressHref('Online Khabar'), category: 'Digital', imageSrc: asset('/aina/press-media/online-khabar.png') },
        { name: 'RPP', href: pressHref('RPP'), category: 'Radio / digital', imageSrc: asset('/aina/press-media/rpp.png') },
        { name: 'UOC', href: pressHref('UOC'), category: 'Academic', imageSrc: asset('/aina/press-media/uoc.png') },
        { name: 'Onda Cero', href: pressHref('Onda Cero'), category: 'Radio', imageSrc: asset('/aina/press-media/onda-cero.png') },
      ],
    },
    recognitions: {
      eyebrow: 'Recognitions',
      title: 'Recognitions',
      subtitle: 'Recognitions that strengthen the mission',
      description:
        'The social and educational impact of the projects driven by Aina Barca has been recognized by national and international institutions in both Spain and Nepal.',
      awards: [
        {
          title: 'Social Welfare Education Award',
          location: 'Nepal',
          year: '2024',
          imageSrc: asset('/aina/recognitions/social-welfare-1.jpg'),
          description:
            'Award presented by the Prime Minister of Nepal in recognition of the educational and social impact achieved for the inclusion of people with intellectual disabilities in Nepal.',
        },
        {
          title: 'RECLA Sustainability Award',
          location: 'Peru',
          year: '2024',
          imageSrc: asset('/aina/recognitions/recla-prize-1.jpg'),
          description:
            'International recognition granted to the program led by Aina Institute for its innovation in socially driven training.',
        },
        {
          title: 'Joan Maria Malapeira i Gas Award',
          location: 'University of Barcelona',
          year: '2024',
          imageSrc: asset('/aina/recognitions/joan-maria-prize-1.jpg'),
          description:
            'Award for educational innovation for the development of training programs led by Aina Institute in the field of social entrepreneurship.',
        },
        {
          title: 'Recognition from Hetauda City Council (Saman Patra)',
          location: 'Nepal',
          year: '2023',
          imageSrc: asset('/aina/recognitions/saman-patra-1.jpg'),
          description:
            'Distinction awarded to Aina Barca for her contribution to the educational and social development of the Hetauda community in Nepal.',
        },
        {
          title: 'TELVA Solidarity Award',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-1.jpg'),
          description:
            'Recognition of the social work carried out by Familia de Hetauda to promote education, inclusion, and opportunities for people with intellectual disabilities in Nepal.',
        },
        {
          title: 'Inclusive Society Award',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-2.jpg'),
          description:
            'Award granted for a commitment to inclusion and the creation of real opportunities for people with intellectual disabilities and their families.',
        },
      ],
    },
    join: {
      eyebrow: 'Join',
      title: 'There are many ways to put love into action.',
      description:
        'Sometimes the biggest transformations begin with small gestures: a decision, a helping hand, one person choosing to get involved.',
      gallery: [
        { src: asset('/aina/main/aina-child-close-smile.jpg'), alt: 'Aina hugging a smiling child beside a mural' },
        { src: asset('/aina/main/aina-child-blue-shirt.jpg'), alt: 'Aina accompanying a child in front of a mural' },
        { src: asset('/aina/main/aina-child-floor-portrait.jpg'), alt: 'Aina on the floor beside a child during an activity' },
        { src: asset('/aina/main/aina-child-embrace.jpg'), alt: 'Aina and a child hugging in a moment of closeness' },
      ],
      blocks: [
        {
          eyebrow: 'Recurring support',
          title: 'Sustain a school, open futures.',
          summary: 'Your monthly support keeps real opportunities moving.',
          description:
            'Help children in Nepal continue accessing education, inclusion, and a future with more opportunities. Behind every school and every child who can learn today, there are people who chose to sustain this mission with love and commitment.',
          actions: [
            { label: 'Become a member from Spain', href: 'https://familiadehetauda.org/hazte-socio/' },
            { label: 'Become a member from Nepal', href: 'https://www.siashafoundation.org/get-involved/' },
            { label: 'Become a member from elsewhere', href: 'https://siasha.org/hazte-socio/' },
          ],
        },
        {
          eyebrow: 'Volunteering',
          title: 'Live the mission from within.',
          summary: 'Share the daily rhythm of the team and support real processes.',
          description:
            'Share daily life with the women and teams who work every day to build a more inclusive and humane society in Nepal through education, inclusion, and love put into action.',
          actions: [{ label: 'I want to volunteer', href: 'mailto:voluntariosfdh@gmail.com' }],
        },
        {
          eyebrow: 'Aina Institute',
          title: 'Turn your vocation into professional impact.',
          summary: 'Practical training to build strong and sustainable projects.',
          description:
            'Through Aina Institute, people from different countries learn how to build solid, sustainable projects capable of creating real impact. Because vocation alone is not always enough. Tools, strategy, and a structure that can sustain change are also needed. Turn your vocation into your profession.',
          actions: [{ label: 'Talk to the team', href: 'https://wa.me/34610094664' }],
        },
      ],
    },
    footer: {
      logoText: 'AINA BARCA',
      navigationLabel: 'Sections',
      navLinks: [
        { label: 'Home', href: navHrefs[0] },
        { label: 'About Aina', href: navHrefs[1] },
        { label: 'Vision', href: navHrefs[2] },
        { label: 'Books', href: navHrefs[3] },
        { label: 'Press', href: navHrefs[4] },
        { label: 'Recognitions', href: navHrefs[5] },
        { label: 'Join', href: navHrefs[6] },
      ],
      closingText:
        'Love put into action. A shared vision to build education, inclusion, and dignity in Nepal.',
      copyright: `© ${year} Aina Barca`,
    },
  },
  ca: {
    siteConfig: {
      language: 'ca',
      siteTitle: "Aina Barca | Educació especial i inclusió al Nepal",
      siteDescription:
        "L'Aina Barca impulsa educació especial i inclusió al Nepal. Descobreix la seva història, llibres, reconeixements, premsa i com col·laborar.",
      socialTitle: "Aina Barca | Educació especial i inclusió al Nepal",
      socialDescription:
        "Coneix la història de l'Aina Barca i el seu impacte al Nepal: educació especial, inclusió, llibres, premsa i maneres de col·laborar.",
      socialImage: asset('/aina/main/aina-hero-studio.jpg'),
      socialImageAlt:
        "Retrat d'estudi de l'Aina Barca somrient, imatge principal per compartir el web",
    },
    hero: {
      backgroundText: 'AINA BARCA',
      heroImage: asset('/aina-transparente.png'),
      heroImageAlt: "Silueta retallada d'Aina Barca",
      overlayText: "L'amor posat en acció",
      brandName: 'Aina Barca',
      languageLabel: 'Idioma',
      navLinks: [
        { label: 'Inici', href: navHrefs[0] },
        { label: "Sobre l'Aina", href: navHrefs[1] },
        { label: 'Visió', href: navHrefs[2] },
        { label: 'Llibres', href: navHrefs[3] },
        { label: 'Premsa', href: navHrefs[4] },
        { label: 'Reconeixements', href: navHrefs[5] },
        { label: "Uneix-t'hi", href: navHrefs[6] },
      ],
    },
    introMission: {
      titleLine1: 'Una vida dedicada a construir',
      titleLine2: "oportunitats on abans no n'hi havia.",
      paragraphs: [
        {
          text: "Des de fa més d'una dècada, Aina Barca treballa per construir educació, inclusió i dignitat per a persones amb discapacitat intel·lectual al Nepal, mentre impulsa la formació de noves generacions de líders socials capaces de generar un impacte real al món.",
        },
        {
          text: "Fundadora de Familia de Hetauda, Fundació Si Asha i Aina Institute, la seva feina connecta acció social, lideratge humà i transformació estructural des d'una mateixa visió: crear oportunitats on abans no existien.",
          links: [
            { label: 'Familia de Hetauda', href: 'https://familiadehetauda.org/' },
            { label: 'Fundació Si Asha', href: 'https://siasha.org/es/' },
            { label: 'Aina Institute', href: 'https://ainainstitute.es/?utm_source=chatgpt.com' },
          ],
        },
      ],
      images: [
        { src: asset('/aina/main/aina-outdoor-smile.jpg'), alt: "Aina Barca somriu a l'aire lliure" },
        { src: asset('/aina/main/aina-talk.jpg'), alt: 'Aina Barca durant una conversa pública' },
        { src: asset('/siasha/aina-with-children.webp'), alt: 'Aina Barca comparteix un moment amb diversos infants' },
        { src: asset('/aina/main/aina-child-floor-portrait.jpg'), alt: 'Aina Barca acompanya de prop un infant en un retrat vertical' },
        { src: asset('/aina/main/aina-studio-portrait-2.jpg'), alt: "Retrat d'estudi d'Aina Barca somrient" },
      ],
    },
    aboutAina: {
      subtitle: "Sobre l'Aina",
      title: "Hi ha viatges que canvien una vida. I decisions que n'acaben canviant moltes altres.",
      intro:
        "Amb 21 anys, un viatge al Nepal va fer que l'Aina es trobés davant d'una realitat impossible d'ignorar: infants amb discapacitat intel·lectual completament exclosos, famílies sense recursos ni suport i persones invisibles per a gran part de la societat.",
      paragraphs: [
        "Infants que mai no havien anat a l'escola. Mares que creien que els seus fills i filles no tindrien futur. Famílies acostumades a viure el rebuig i el silenci.",
        "El que va començar com una experiència de voluntariat es va acabar convertint en una missió de vida.",
        "Mentre moltes altres persones haurien continuat endavant, ella va decidir quedar-se. Escoltar. Aprendre. I convertir l'amor en acció, construint escoles on abans no hi havia res.",
        "El que un dia va començar amb una idea i molta incertesa, avui s'ha convertit en escoles d'educació especial, centres de fisioteràpia i una xarxa de suport i inclusió per a centenars de persones i famílies al Nepal.",
        'Perquè transformar vides no consisteix només a ajudar. Consisteix a crear estructures capaces de sostenir dignitat, autonomia i oportunitats a llarg termini.',
      ],
      impactLabel: 'Impacte acumulat',
      impactAriaLabel: "Impacte d'Aina Barca",
      impactStats: [
        { value: 157, prefix: '+', label: 'infants amb discapacitat escolaritzats', useGrouping: true },
        { value: 60, prefix: '+', label: "dones formen part de l'equip professional", useGrouping: true },
        { value: 1000, prefix: '+', label: 'famílies han trobat suport, comunitat i esperança', useGrouping: true },
      ],
      gallery: [
        { src: asset('/aina/main/aina-nepal-rooftop.jpg'), alt: 'Aina Barca asseguda en un terrat al Nepal durant un dels seus primers viatges' },
        { src: asset('/aina/main/aina-sunlight-portrait.jpg'), alt: "Retrat a contrallum d'Aina Barca durant una visita de camp" },
        { src: asset('/aina/main/aina-hands-detail.jpg'), alt: "Detall de les mans d'Aina Barca tocant la terra durant un recorregut al Nepal" },
      ],
    },
    vision: {
      eyebrow: 'Visió',
      heading: 'Una mateixa visió',
      subheading: 'Diferents maneres de transformar vides.',
      description:
        "Tot el que Aina Barca ha construït neix d'una mateixa convicció: cap persona no hauria de quedar exclosa per haver nascut en un lloc sense oportunitats.",
      cards: [
        {
          title: 'Familia de Hetauda',
          subtitle: 'On va néixer la primera escola',
          description:
            "L'any 2012, Aina Barca va impulsar a Hetauda la primera escola d'educació especial per a infants amb discapacitat intel·lectual de la regió. Avui, l'ONG Familia de Hetauda continua acompanyant centenars de famílies a través de l'educació, la inclusió i el suport especialitzat al Nepal.",
          ctaLabel: 'Anar al web',
          href: 'https://familiadehetauda.org/',
          initials: 'FH',
          logoSrc: asset('/vision/familia-de-hetauda-logo.png'),
          logoAlt: 'Logotip oficial de Familia de Hetauda',
          mediaMode: 'logo',
        },
        {
          title: 'Fundació Si Asha',
          subtitle: 'Una visió que vol arribar a tot el Nepal',
          description:
            "Fundació Si Asha neix a Espanya amb un objectiu clar: continuar ampliant l'accés a l'educació especial, la inclusió i les oportunitats a totes les províncies del Nepal. Perquè la dignitat no hauria de dependre del lloc on una persona neix.",
          ctaLabel: 'Anar al web',
          href: 'https://siasha.org/es/',
          initials: 'SA',
          logoSrc: asset('/vision/fundacion-si-asha-logo.png'),
          logoAlt: 'Logotip oficial de Fundació Si Asha',
          mediaMode: 'logo',
        },
        {
          title: 'Si Asha Foundation',
          subtitle: 'El cor que sosté cada projecte',
          description:
            'La contrapart nepalesa responsable de coordinar la feina diària sobre el terreny: escoles, equips, teràpies, programes educatius i acompanyament a famílies al Nepal. Darrere de cada infant acompanyat, hi ha un equip humà fent possible que tot continuï endavant.',
          ctaLabel: 'Anar al web',
          href: 'https://www.siashafoundation.org/',
          initials: 'SF',
          logoSrc: asset('/vision/si-asha-foundation-logo.png'),
          logoAlt: 'Logotip oficial de Si Asha Foundation',
          mediaMode: 'logo',
        },
        {
          title: 'Asha Special School & Rehabilitation Centers',
          subtitle: 'Molt més que escoles',
          description:
            'Espais creats per garantir educació, fisioteràpia, inclusió i oportunitats reals per a infants i joves amb discapacitat intel·lectual. Llocs on els infants troben, per primera vegada, suport, comunitat i esperança de futur.',
          ctaLabel: 'Anar al web',
          href: 'https://www.siashafoundation.org/',
          initials: 'AS',
          logoSrc: asset('/siasha/hetauda-school.webp'),
          logoAlt: "Imatge real de l'Asha Special School a Hetauda",
          mediaMode: 'image',
        },
        {
          title: 'Aina Institute',
          subtitle: "Quan ajudes persones que ajuden, l'impacte es multiplica",
          description:
            'Aina Institute forma noves generacions de líders socials capaces de transformar propòsit en projectes sòlids, sostenibles i capaços de generar un impacte real. Perquè canviar vides requereix visió, estructura i acció.',
          ctaLabel: 'Anar al web',
          href: 'https://ainainstitute.es/',
          initials: 'AI',
          logoSrc: asset('/vision/aina-institute-logo.png'),
          logoAlt: "Logotip oficial d'Aina Institute",
          mediaMode: 'logo',
        },
      ],
      closingEyebrow: 'Una causa que se sent propera',
      closingTitle: 'Que cap infant quedi invisible per a la societat',
      closingParagraphs: [
        'La visió és continuar ampliant les Asha Special Schools perquè cada vegada més infants puguin accedir a educació especialitzada, inclusió i un futur digne.',
        'Perquè el lloc on una persona neix no hauria de definir les oportunitats que tindrà a la vida.',
        "Però res d'això no es construeix sol.",
        'Cada escola, cada infant acompanyat i cada família recolzada existeixen gràcies a persones que van decidir no mirar cap a una altra banda.',
        "Persones que van entendre que l'amor, quan es converteix en acció, transforma vides.",
      ],
      closingBackgroundImage: asset('/aina/main/aina-child-embrace.jpg'),
      ctaButtonText: "Passa a l'acció",
      ctaHref: '#unete',
    },
    books: {
      eyebrow: 'Llibres',
      title: 'Nepal des de dins.',
      titleAccent: 'Sense filtres.',
      publishedBook: {
        eyebrow: 'Llibre publicat',
        title: 'Asha, o la fuerza de la esperanza',
        description:
          "Aquest no és un llibre sobre teories ni sobre cooperació explicada des de fora. És la història real de com una noia de 21 anys va acabar vivint entre burocràcia, pobresa, xoc cultural, pèrdues, contradiccions i aprenentatges mentre intentava aixecar una escola d'educació especial al Nepal des de zero. Un viatge íntim i sense filtres sobre la part més humana, i també més dura, de construir una missió de vida lluny de casa i deixar una empremta real.",
        buttonLabel: 'Comprar a Amazon',
      },
      upcomingBook: {
        eyebrow: 'Proper llançament',
        title: 'Un nou llibre està en camí',
        description:
          "Hi ha històries que encara no s'han explicat. Després d'anys vivint entre el Nepal i Espanya, Aina Barca està escrivint una nova obra basada en algunes de les experiències més intenses, complexes i transformadores de tot aquest camí. Serà un llibre molt més íntim i personal sobre el que passa darrere d'una missió de vida: la pressió, les contradiccions, l'impacte emocional, les relacions humanes, el sentit de propòsit i el preu invisible de dedicar una vida a intentar canviar-ne d'altres.",
        buttonLabel: 'Vull saber-ne abans que ningú',
      },
      galleryImages: [
        { src: asset('/aina/main/aina-book-portrait-1.jpg'), alt: 'Aina Barca en un retrat editorial vinculat a la seva faceta com a autora' },
        { src: asset('/aina/main/aina-book-portrait-2.jpg'), alt: 'Aina Barca escrivint i revisant material en un entorn de treball' },
      ],
      showcaseImages: [
        { src: asset('/aina/book-cover-apple.jpg'), alt: "Portada del llibre Asha, o la fuerza de la esperanza d'Aina Barca" },
        { src: asset('/aina/book-cover-article.jpg'), alt: 'Imatge editorial del llibre Asha, o la fuerza de la esperanza publicada en premsa cultural' },
      ],
    },
    press: {
      eyebrow: 'Premsa',
      title: 'Premsa',
      subtitle: 'Una història que ha travessat fronteres',
      description:
        "La feina d'Aina Barca i els seus projectes al Nepal ha estat compartida per mitjans nacionals i internacionals que han donat veu a la importància de la inclusió, l'educació especial i la dignitat de les persones amb discapacitat intel·lectual.",
      selectionLabel: 'Selecció de mitjans',
      previousLabel: 'Veure el mitjà anterior',
      nextLabel: 'Veure el mitjà següent',
      mediaAriaLabel: 'Veure aparició a la premsa',
      indicatorAriaLabel: 'Anar al mitjà',
      appearances: [
        { name: 'Radio Galega', href: pressHref('Radio Galega'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-galega.png') },
        { name: 'National Gold', href: pressHref('National Gold'), category: 'Televisió', imageSrc: asset('/aina/press-media/national-gold.png') },
        { name: 'RTVE', href: pressHref('RTVE'), category: 'Televisió', imageSrc: asset('/aina/press-media/rtve.png') },
        { name: 'Radio Madrid SER', href: pressHref('Radio Madrid SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-madrid-ser.png') },
        { name: 'News24', href: pressHref('News24'), category: 'Digital', imageSrc: asset('/aina/press-media/news24.png') },
        { name: 'RAC1', href: pressHref('RAC1'), category: 'Radio', imageSrc: asset('/aina/press-media/rac1.png') },
        { name: 'Regió7', href: pressHref('Regio7'), category: 'Premsa escrita', imageSrc: asset('/aina/press-media/regio7.png') },
        { name: 'TV3', href: pressHref('TV3'), category: 'Televisió', imageSrc: asset('/aina/press-media/tv3.png') },
        { name: 'Radio Irun SER', href: pressHref('Radio Irun SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-irun-ser.png') },
        { name: 'Nepal Television', href: pressHref('Nepal Television'), category: 'Televisió', imageSrc: asset('/aina/press-media/nepal-television.png') },
        { name: 'Mujer Emprendedora', href: pressHref('Mujer Emprendedora'), category: 'Digital', imageSrc: asset('/aina/press-media/mujer-emprendedora.png') },
        { name: 'EITB', href: pressHref('EITB'), category: 'Televisió', imageSrc: asset('/aina/press-media/eitb.png') },
        { name: 'RNE', href: pressHref('RNE'), category: 'Radio', imageSrc: asset('/aina/press-media/rne.png') },
        { name: 'Mundo Solidario', href: pressHref('Mundo Solidario'), category: 'Premsa solidària', imageSrc: asset('/aina/press-media/mundo-solidario.png') },
        { name: 'Team TV', href: pressHref('Team TV'), category: 'Televisió', imageSrc: asset('/aina/press-media/team-tv.png') },
        { name: 'El Confidencial', href: pressHref('El Confidencial'), category: 'Digital', imageSrc: asset('/aina/press-media/el-confidencial.png') },
        { name: 'El Diario Vasco', href: pressHref('El Diario Vasco'), category: 'Premsa escrita', imageSrc: asset('/aina/press-media/el-diario-vasco.png') },
        { name: 'Confidenciales', href: pressHref('Confidenciales'), category: 'Revista / portada', imageSrc: asset('/aina/press-media/confidenciales-cover.png') },
        { name: 'SER Catalunya', href: pressHref('SER Catalunya'), category: 'Radio', imageSrc: asset('/aina/press-media/ser-catalunya.png') },
        { name: 'Ratopati', href: pressHref('Ratopati'), category: 'Digital', imageSrc: asset('/aina/press-media/ratopati.png') },
        { name: 'Ara', href: pressHref('Ara'), category: 'Premsa escrita', imageSrc: asset('/aina/press-media/ara.png') },
        { name: 'La Vanguardia', href: pressHref('La Vanguardia'), category: 'Premsa escrita', imageSrc: asset('/aina/press-media/la-vanguardia.png') },
        { name: 'Todo Literatura', href: pressHref('Todo Literatura'), category: 'Cultura', imageSrc: asset('/aina/press-media/todo-literatura.png') },
        { name: 'Eco Diario', href: pressHref('Eco Diario'), category: 'Digital', imageSrc: asset('/aina/press-media/eco-diario.png') },
        { name: 'Online Khabar', href: pressHref('Online Khabar'), category: 'Digital', imageSrc: asset('/aina/press-media/online-khabar.png') },
        { name: 'RPP', href: pressHref('RPP'), category: 'Radio / digital', imageSrc: asset('/aina/press-media/rpp.png') },
        { name: 'UOC', href: pressHref('UOC'), category: 'Acadèmic', imageSrc: asset('/aina/press-media/uoc.png') },
        { name: 'Onda Cero', href: pressHref('Onda Cero'), category: 'Radio', imageSrc: asset('/aina/press-media/onda-cero.png') },
      ],
    },
    recognitions: {
      eyebrow: 'Reconeixements',
      title: 'Reconeixements',
      subtitle: 'Reconeixements que impulsen la missió',
      description:
        "L'impacte social i educatiu dels projectes impulsats per Aina Barca ha estat reconegut per institucions nacionals i internacionals tant a Espanya com al Nepal.",
      awards: [
        {
          title: 'Social Welfare Education Award',
          location: 'Nepal',
          year: '2024',
          imageSrc: asset('/aina/recognitions/social-welfare-1.jpg'),
          description:
            "Premi lliurat pel Primer Ministre del Nepal en reconeixement de l'impacte educatiu i social impulsat per a la inclusió de persones amb discapacitat intel·lectual al Nepal.",
        },
        {
          title: 'Premi RECLA a la Sostenibilitat',
          location: 'Perú',
          year: '2024',
          imageSrc: asset('/aina/recognitions/recla-prize-1.jpg'),
          description:
            'Reconeixement internacional atorgat al programa impulsat per Aina Institute per la seva innovació en formació amb impacte social.',
        },
        {
          title: 'Premi Joan Maria Malapeira i Gas',
          location: 'Universitat de Barcelona',
          year: '2024',
          imageSrc: asset('/aina/recognitions/joan-maria-prize-1.jpg'),
          description:
            "Premi a la innovació educativa pel desenvolupament de programes formatius impulsats des d'Aina Institute en l'àmbit de l'emprenedoria social.",
        },
        {
          title: 'Reconeixement Ajuntament de Hetauda (Saman Patra)',
          location: 'Nepal',
          year: '2023',
          imageSrc: asset('/aina/recognitions/saman-patra-1.jpg'),
          description:
            'Distinció atorgada a Aina Barca per la seva contribució al desenvolupament educatiu i social de la comunitat de Hetauda, al Nepal.',
        },
        {
          title: 'Premi TELVA Solidaritat',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-1.jpg'),
          description:
            'Reconeixement a la tasca social desenvolupada per Familia de Hetauda per impulsar educació, inclusió i oportunitats per a persones amb discapacitat intel·lectual al Nepal.',
        },
        {
          title: 'Premi Societat Inclusiva',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-2.jpg'),
          description:
            "Premi atorgat pel compromís amb la inclusió i la creació d'oportunitats reals per a persones amb discapacitat intel·lectual i les seves famílies.",
        },
      ],
    },
    join: {
      eyebrow: "Uneix-t'hi",
      title: "Hi ha moltes maneres de posar l'amor en acció.",
      description:
        "De vegades, les transformacions més grans comencen amb gestos petits: una decisió, una ajuda, una persona que decideix implicar-s'hi.",
      gallery: [
        { src: asset('/aina/main/aina-child-close-smile.jpg'), alt: "Aina abraça un infant somrient al costat d'un mural" },
        { src: asset('/aina/main/aina-child-blue-shirt.jpg'), alt: "Aina acompanya un infant davant d'un mural" },
        { src: asset('/aina/main/aina-child-floor-portrait.jpg'), alt: "Aina a terra al costat d'un infant durant una activitat" },
        { src: asset('/aina/main/aina-child-embrace.jpg'), alt: "Aina i un infant s'abracen en un moment de complicitat" },
      ],
      blocks: [
        {
          eyebrow: 'Suport recurrent',
          title: 'Sostingues una escola, obre futurs.',
          summary: 'La teva ajuda mensual manté oportunitats reals en marxa.',
          description:
            'Ajuda que infants del Nepal puguin continuar accedint a educació, inclusió i un futur amb més oportunitats. Perquè darrere de cada escola i de cada infant que avui pot aprendre, hi ha persones que van decidir sostenir aquesta missió amb amor i compromís.',
          actions: [
            { label: "Fes-te soci des d'Espanya", href: 'https://familiadehetauda.org/hazte-socio/' },
            { label: 'Fes-te soci des del Nepal', href: 'https://www.siashafoundation.org/get-involved/' },
            { label: "Fes-te soci des d'altres llocs del món", href: 'https://siasha.org/hazte-socio/' },
          ],
        },
        {
          eyebrow: 'Voluntariat',
          title: 'Viu la missió des de dins.',
          summary: "Comparteix el dia a dia amb l'equip i acompanya processos reals.",
          description:
            "Comparteix el dia a dia amb les dones i els equips que treballen cada dia per construir una societat més inclusiva i humana al Nepal des de l'educació, la inclusió i l'amor posat en acció.",
          actions: [{ label: 'Vull ser voluntari', href: 'mailto:voluntariosfdh@gmail.com' }],
        },
        {
          eyebrow: 'Aina Institute',
          title: 'Converteix la teva vocació en impacte professional.',
          summary: 'Formació pràctica per construir projectes sòlids i sostenibles.',
          description:
            "A través d'Aina Institute, persones de diferents països aprenen a construir projectes sòlids, sostenibles i capaços de generar un impacte real. Perquè tenir vocació no sempre és suficient. També fan falta eines, estratègia i una estructura capaç de sostenir el canvi. Converteix la teva vocació en la teva professió.",
          actions: [{ label: "Parla amb l'equip", href: 'https://wa.me/34610094664' }],
        },
      ],
    },
    footer: {
      logoText: 'AINA BARCA',
      navigationLabel: 'Seccions',
      navLinks: [
        { label: 'Inici', href: navHrefs[0] },
        { label: "Sobre l'Aina", href: navHrefs[1] },
        { label: 'Visió', href: navHrefs[2] },
        { label: 'Llibres', href: navHrefs[3] },
        { label: 'Premsa', href: navHrefs[4] },
        { label: 'Reconeixements', href: navHrefs[5] },
        { label: "Uneix-t'hi", href: navHrefs[6] },
      ],
      closingText:
        "L'amor posat en acció. Una visió compartida per construir educació, inclusió i dignitat al Nepal.",
      copyright: `© ${year} Aina Barca`,
    },
  },
};

export function getSiteContent(locale: Locale): LocalizedSiteContent {
  return contentByLocale[locale];
}
