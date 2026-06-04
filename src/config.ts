export type Locale = 'es' | 'en' | 'ca';

export interface SiteConfig {
  language: Locale;
  siteTitle: string;
  siteDescription: string;
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
  selectionHint: string;
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

export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
  { value: 'ca', label: 'CA' },
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
      siteTitle: 'Aina Barca | El amor puesto en accion',
      siteDescription:
        'Web de Aina Barca sobre su historia, vision, libros, prensa, reconocimientos y formas de colaborar.',
    },
    hero: {
      backgroundText: 'AINA BARCA',
      heroImage: asset('/aina-transparente.png'),
      heroImageAlt: 'Silueta recortada de Aina Barca',
      overlayText: 'El amor puesto en accion',
      brandName: 'Aina Barca',
      languageLabel: 'Idioma',
      navLinks: [
        { label: 'Inicio', href: navHrefs[0] },
        { label: 'Sobre Aina', href: navHrefs[1] },
        { label: 'La Vision', href: navHrefs[2] },
        { label: 'Libros', href: navHrefs[3] },
        { label: 'Prensa', href: navHrefs[4] },
        { label: 'Reconocimientos', href: navHrefs[5] },
        { label: 'Unete', href: navHrefs[6] },
      ],
    },
    introMission: {
      titleLine1: 'Una vida dedicada a construir',
      titleLine2: 'oportunidades donde antes no las habia.',
      paragraphs: [
        {
          text: 'Desde hace mas de una decada, Aina Barca trabaja para construir educacion, inclusion y dignidad para personas con discapacidad intelectual en Nepal, mientras impulsa la formacion de nuevas generaciones de lideres sociales capaces de generar impacto real en el mundo.',
        },
        {
          text: 'Fundadora de Familia de Hetauda, Fundacion Si Asha y Aina Institute, su trabajo conecta accion social, liderazgo humano y transformacion estructural desde una misma vision: crear oportunidades donde antes no existian.',
          links: [
            { label: 'Familia de Hetauda', href: 'https://familiadehetauda.org/' },
            { label: 'Fundacion Si Asha', href: 'https://siasha.org/es/' },
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
          alt: 'Aina Barca sonrie al aire libre',
        },
        {
          src: asset('/aina/main/aina-talk.jpg'),
          alt: 'Aina Barca durante una conversacion publica',
        },
        {
          src: asset('/aina/main/aina-child-embrace.jpg'),
          alt: 'Aina Barca abraza a un nino en un momento emotivo',
        },
        {
          src: asset('/aina/main/aina-child-floor-portrait.jpg'),
          alt: 'Aina Barca acompana de cerca a un nino en un retrato vertical',
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
        'Con 21 anos, un viaje a Nepal hizo que Aina se encontrara frente a una realidad imposible de ignorar: ninos y ninas con discapacidad intelectual completamente excluidos, familias sin recursos ni apoyo y personas invisibles para gran parte de la sociedad.',
      paragraphs: [
        'Ninos que nunca habian ido a la escuela. Madres que creian que sus hijos no tendrian futuro. Familias acostumbradas a vivir el rechazo y el silencio.',
        'Lo que empezo como una experiencia de voluntariado termino convirtiendose en una mision de vida.',
        'Mientras muchos habrian seguido adelante, ella decidio quedarse. Escuchar. Aprender. Y convertir el amor en accion, construyendo escuelas donde antes no habia nada.',
        'Lo que un dia comenzo con una idea y muchisima incertidumbre, hoy se ha convertido en escuelas de educacion especial, centros de fisioterapia y una red de apoyo e inclusion para cientos de personas y familias en Nepal.',
        'Porque transformar vidas no consiste solo en ayudar. Consiste en crear estructuras capaces de sostener dignidad, autonomia y oportunidades a largo plazo.',
      ],
      impactLabel: 'Impacto acumulado',
      impactAriaLabel: 'Impacto de Aina Barca',
      impactStats: [
        {
          value: 157,
          prefix: '+',
          label: 'ninos y ninas con discapacidad escolarizados',
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
      eyebrow: 'La Vision',
      heading: 'Una misma vision',
      subheading: 'Diferentes formas de transformar vidas.',
      description:
        'Todo lo que Aina Barca ha construido nace de una misma conviccion: que ninguna persona deberia quedar excluida por haber nacido en un lugar sin oportunidades.',
      cards: [
        {
          title: 'Familia de Hetauda',
          subtitle: 'Donde nacio la primera escuela',
          description:
            'En 2012, Aina Barca impulso en Hetauda la primera escuela de educacion especial para ninos y ninas con discapacidad intelectual de la region. Hoy, la ONG Familia de Hetauda sigue acompanando a cientos de familias a traves de educacion, inclusion y apoyo especializado en Nepal.',
          ctaLabel: 'Ir a la web',
          href: 'https://familiadehetauda.org/',
          initials: 'FH',
          logoSrc: asset('/vision/familia-de-hetauda-logo.png'),
          logoAlt: 'Logotipo oficial de Familia de Hetauda',
          mediaMode: 'logo',
        },
        {
          title: 'Fundacion Si Asha',
          subtitle: 'Una vision que quiere llegar a todo Nepal',
          description:
            'Fundacion Si Asha nace en Espana con un objetivo claro: seguir expandiendo el acceso a educacion especial, inclusion y oportunidades a todas las provincias de Nepal. Porque la dignidad no deberia depender del lugar donde una persona nace.',
          ctaLabel: 'Ir a la web',
          href: 'https://siasha.org/es/',
          initials: 'SA',
          logoSrc: asset('/vision/fundacion-si-asha-logo.png'),
          logoAlt: 'Logotipo oficial de Fundacion Si Asha',
          mediaMode: 'logo',
        },
        {
          title: 'Si Asha Foundation',
          subtitle: 'El corazon que sostiene cada proyecto',
          description:
            'La contraparte nepali responsable de coordinar el trabajo diario sobre el terreno: escuelas, equipos, terapias, programas educativos y acompanamiento a familias en Nepal. Detras de cada nino acompanado, hay un equipo humano haciendo posible que todo siga adelante.',
          ctaLabel: 'Ir a la web',
          href: 'https://www.siashafoundation.org/',
          initials: 'SF',
          logoSrc: asset('/vision/si-asha-foundation-logo.png'),
          logoAlt: 'Logotipo oficial de Si Asha Foundation',
          mediaMode: 'logo',
        },
        {
          title: 'Asha Special School & Rehabilitation Centers',
          subtitle: 'Mucho mas que escuelas',
          description:
            'Espacios creados para garantizar educacion, fisioterapia, inclusion y oportunidades reales para ninos y jovenes con discapacidad intelectual. Lugares donde los ninos encuentran, por primera vez, apoyo, comunidad y esperanza de futuro.',
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
            'Aina Institute forma a nuevas generaciones de lideres sociales capaces de transformar proposito en proyectos solidos, sostenibles y capaces de generar impacto real. Porque cambiar vidas requiere vision, estructura y accion.',
          ctaLabel: 'Ir a la web',
          href: 'https://ainainstitute.es/',
          initials: 'AI',
          logoSrc: asset('/vision/aina-institute-logo.png'),
          logoAlt: 'Logotipo oficial de Aina Institute',
          mediaMode: 'logo',
        },
      ],
      closingEyebrow: 'Una causa que se siente cerca',
      closingTitle: 'Que ningun nino quede invisible para la sociedad',
      closingParagraphs: [
        'La vision es seguir expandiendo las Asha Special Schools para que cada vez mas ninos puedan acceder a educacion especializada, inclusion y un futuro digno.',
        'Porque el lugar donde una persona nace no deberia definir las oportunidades que tendra en la vida.',
        'Pero nada de esto se construye solo.',
        'Cada escuela, cada nino acompanado y cada familia apoyada existen gracias a personas que decidieron no mirar hacia otro lado.',
        'Personas que entendieron que el amor, cuando se convierte en accion, transforma vidas.',
      ],
      closingBackgroundImage: asset('/aina/main/aina-child-embrace.jpg'),
      ctaButtonText: 'Pasa a la accion',
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
          'Este no es un libro sobre teorias ni sobre cooperacion contada desde fuera. Es la historia real de como una chica de 21 anos termino viviendo entre burocracia, pobreza, choque cultural, perdidas, contradicciones y aprendizajes mientras intentaba levantar una escuela de educacion especial en Nepal desde cero. Un viaje intimo y sin filtros sobre el lado mas humano, y tambien mas duro, de construir una mision de vida lejos de casa y dejar una huella real.',
        buttonLabel: 'Comprar en Amazon',
      },
      upcomingBook: {
        eyebrow: 'Proximo lanzamiento',
        title: 'Un nuevo libro esta en camino',
        description:
          'Hay historias que todavia no han sido contadas. Despues de anos viviendo entre Nepal y Espana, Aina Barca esta escribiendo una nueva obra basada en algunas de las experiencias mas intensas, complejas y transformadoras de todo este camino. Sera un libro mucho mas intimo y personal sobre lo que ocurre detras de una mision de vida: la presion, las contradicciones, el impacto emocional, las relaciones humanas, el sentido de proposito y el precio invisible de dedicar una vida a intentar cambiar otras.',
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
        'El trabajo de Aina Barca y sus proyectos en Nepal ha sido compartido por medios nacionales e internacionales que han dado voz a la importancia de la inclusion, la educacion especial y la dignidad de las personas con discapacidad intelectual.',
      selectionLabel: 'Seleccion de medios',
      selectionHint: 'Una sola fila de logos para recorrer de forma horizontal.',
      previousLabel: 'Ver medio anterior',
      nextLabel: 'Ver siguiente medio',
      mediaAriaLabel: 'Ver aparicion en prensa',
      indicatorAriaLabel: 'Ir al medio',
      appearances: [
        { name: 'Radio Galega', href: pressHref('Radio Galega'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-galega.png') },
        { name: 'National Gold', href: pressHref('National Gold'), category: 'Television', imageSrc: asset('/aina/press-media/national-gold.png') },
        { name: 'RTVE', href: pressHref('RTVE'), category: 'Television', imageSrc: asset('/aina/press-media/rtve.png') },
        { name: 'Radio Madrid SER', href: pressHref('Radio Madrid SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-madrid-ser.png') },
        { name: 'News24', href: pressHref('News24'), category: 'Digital', imageSrc: asset('/aina/press-media/news24.png') },
        { name: 'RAC1', href: pressHref('RAC1'), category: 'Radio', imageSrc: asset('/aina/press-media/rac1.png') },
        { name: 'Regio7', href: pressHref('Regio7'), category: 'Prensa escrita', imageSrc: asset('/aina/press-media/regio7.png') },
        { name: 'TV3', href: pressHref('TV3'), category: 'Television', imageSrc: asset('/aina/press-media/tv3.png') },
        { name: 'Radio Irun SER', href: pressHref('Radio Irun SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-irun-ser.png') },
        { name: 'Nepal Television', href: pressHref('Nepal Television'), category: 'Television', imageSrc: asset('/aina/press-media/nepal-television.png') },
        { name: 'Mujer Emprendedora', href: pressHref('Mujer Emprendedora'), category: 'Digital', imageSrc: asset('/aina/press-media/mujer-emprendedora.png') },
        { name: 'EITB', href: pressHref('EITB'), category: 'Television', imageSrc: asset('/aina/press-media/eitb.png') },
        { name: 'RNE', href: pressHref('RNE'), category: 'Radio', imageSrc: asset('/aina/press-media/rne.png') },
        { name: 'Mundo Solidario', href: pressHref('Mundo Solidario'), category: 'Prensa solidaria', imageSrc: asset('/aina/press-media/mundo-solidario.png') },
        { name: 'Team TV', href: pressHref('Team TV'), category: 'Television', imageSrc: asset('/aina/press-media/team-tv.png') },
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
        { name: 'UOC', href: pressHref('UOC'), category: 'Academico', imageSrc: asset('/aina/press-media/uoc.png') },
        { name: 'Onda Cero', href: pressHref('Onda Cero'), category: 'Radio', imageSrc: asset('/aina/press-media/onda-cero.png') },
      ],
    },
    recognitions: {
      eyebrow: 'Reconocimientos',
      title: 'Reconocimientos',
      subtitle: 'Reconocimientos que impulsan la mision',
      description:
        'El impacto social y educativo de los proyectos impulsados por Aina Barca ha sido reconocido por instituciones nacionales e internacionales tanto en Espana como en Nepal.',
      awards: [
        {
          title: 'Social Welfare Education Award',
          location: 'Nepal',
          year: '2024',
          imageSrc: asset('/aina/recognitions/social-welfare-1.jpg'),
          description:
            'Premio entregado por el Primer Ministro de Nepal en reconocimiento al impacto educativo y social impulsado para la inclusion de personas con discapacidad intelectual en Nepal.',
        },
        {
          title: 'Premio RECLA a la Sostenibilidad',
          location: 'Peru',
          year: '2024',
          imageSrc: asset('/aina/recognitions/recla-prize-1.jpg'),
          description:
            'Reconocimiento internacional otorgado al programa impulsado por Aina Institute por su innovacion en formacion con impacto social.',
        },
        {
          title: 'Premio Joan Maria Malapeira i Gas',
          location: 'Universidad de Barcelona',
          year: '2024',
          imageSrc: asset('/aina/recognitions/joan-maria-prize-1.jpg'),
          description:
            'Premio a la innovacion educativa por el desarrollo de programas formativos impulsados desde Aina Institute en el ambito del emprendimiento social.',
        },
        {
          title: 'Reconocimiento Ayuntamiento de Hetauda (Saman Patra)',
          location: 'Nepal',
          year: '2023',
          imageSrc: asset('/aina/recognitions/saman-patra-1.jpg'),
          description:
            'Distincion otorgada a Aina Barca por su contribucion al desarrollo educativo y social de la comunidad de Hetauda, Nepal.',
        },
        {
          title: 'Premio TELVA Solidaridad',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-1.jpg'),
          description:
            'Reconocimiento a la labor social desarrollada por Familia de Hetauda para impulsar educacion, inclusion y oportunidades para personas con discapacidad intelectual en Nepal.',
        },
        {
          title: 'Premio Sociedad Inclusiva',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-2.jpg'),
          description:
            'Premio otorgado por el compromiso con la inclusion y la creacion de oportunidades reales para personas con discapacidad intelectual y sus familias.',
        },
      ],
    },
    join: {
      eyebrow: 'Unete',
      title: 'Hay muchas formas de poner el amor en accion.',
      description:
        'A veces, las transformaciones mas grandes empiezan con gestos pequenos: una decision, una ayuda, una persona que decide implicarse.',
      gallery: [
        {
          src: asset('/aina/main/aina-child-close-smile.jpg'),
          alt: 'Aina abraza a un nino sonriendo junto a un mural',
        },
        {
          src: asset('/aina/main/aina-child-blue-shirt.jpg'),
          alt: 'Aina acompana a un nino con camiseta amarilla frente a un mural',
        },
        {
          src: asset('/aina/main/aina-child-floor-portrait.jpg'),
          alt: 'Aina en el suelo junto a un nino durante una actividad',
        },
        {
          src: asset('/aina/main/aina-child-embrace.jpg'),
          alt: 'Aina y un nino se abrazan en un momento de complicidad',
        },
      ],
      blocks: [
        {
          eyebrow: 'Apoyo recurrente',
          title: 'Sosten una escuela, abre futuros.',
          summary: 'Tu ayuda mensual mantiene oportunidades reales en marcha.',
          description:
            'Ayuda a que ninos y ninas en Nepal puedan seguir accediendo a educacion, inclusion y un futuro con mas oportunidades. Porque detras de cada escuela y cada nino que hoy puede aprender, hay personas que decidieron sostener esta mision con amor y compromiso.',
          actions: [
            {
              label: 'Hazte socio desde Espana',
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
          title: 'Vive la mision desde dentro.',
          summary: 'Comparte el dia a dia con el equipo y acompana procesos reales.',
          description:
            'Comparte el dia a dia con las mujeres y equipos que trabajan cada dia para construir una sociedad mas inclusiva y humana en Nepal desde la educacion, la inclusion y el amor puesto en accion.',
          actions: [
            {
              label: 'Quiero ser voluntario',
              href: 'mailto:voluntariosfdh@gmail.com',
            },
          ],
        },
        {
          eyebrow: 'Aina Institute',
          title: 'Convierte tu vocacion en impacto profesional.',
          summary: 'Formacion practica para construir proyectos solidos y sostenibles.',
          description:
            'A traves de Aina Institute, personas de distintos paises aprenden a construir proyectos solidos, sostenibles y capaces de generar impacto real. Porque tener vocacion no siempre es suficiente. Tambien hacen falta herramientas, estrategia y una estructura capaz de sostener el cambio. Convierte tu vocacion en tu profesion.',
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
        { label: 'La Vision', href: navHrefs[2] },
        { label: 'Libros', href: navHrefs[3] },
        { label: 'Prensa', href: navHrefs[4] },
        { label: 'Reconocimientos', href: navHrefs[5] },
        { label: 'Unete', href: navHrefs[6] },
      ],
      closingText:
        'El amor puesto en accion. Una vision compartida para construir educacion, inclusion y dignidad en Nepal.',
      copyright: `© ${year} Aina Barca`,
    },
  },
  en: {
    siteConfig: {
      language: 'en',
      siteTitle: 'Aina Barca | Love Put Into Action',
      siteDescription:
        'Aina Barca website about her story, vision, books, press coverage, recognitions, and ways to collaborate.',
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
          text: 'Founder of Familia de Hetauda, Fundacion Si Asha, and Aina Institute, her work connects social action, human leadership, and structural transformation through one shared vision: creating opportunities where they did not exist before.',
          links: [
            { label: 'Familia de Hetauda', href: 'https://familiadehetauda.org/' },
            { label: 'Fundacion Si Asha', href: 'https://siasha.org/es/' },
            { label: 'Aina Institute', href: 'https://ainainstitute.es/?utm_source=chatgpt.com' },
          ],
        },
      ],
      images: [
        { src: asset('/aina/main/aina-outdoor-smile.jpg'), alt: 'Aina Barca smiling outdoors' },
        { src: asset('/aina/main/aina-talk.jpg'), alt: 'Aina Barca during a public talk' },
        { src: asset('/aina/main/aina-child-embrace.jpg'), alt: 'Aina Barca hugging a child in an emotional moment' },
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
        { value: 157, prefix: '+', label: 'children with disabilities enrolled in school', useGrouping: true },
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
            'In 2012, Aina Barca promoted the first special education school for children with intellectual disabilities in the Hetauda region. Today, Familia de Hetauda continues supporting hundreds of families through education, inclusion, and specialized care in Nepal.',
          ctaLabel: 'Visit website',
          href: 'https://familiadehetauda.org/',
          initials: 'FH',
          logoSrc: asset('/vision/familia-de-hetauda-logo.png'),
          logoAlt: 'Official Familia de Hetauda logo',
          mediaMode: 'logo',
        },
        {
          title: 'Fundacion Si Asha',
          subtitle: 'A vision that aims to reach all of Nepal',
          description:
            'Fundacion Si Asha was created in Spain with a clear goal: to keep expanding access to special education, inclusion, and opportunity across all provinces of Nepal. Because dignity should not depend on where someone is born.',
          ctaLabel: 'Visit website',
          href: 'https://siasha.org/es/',
          initials: 'SA',
          logoSrc: asset('/vision/fundacion-si-asha-logo.png'),
          logoAlt: 'Official Fundacion Si Asha logo',
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
      closingTitle: 'So that no child remains invisible to society',
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
      titleAccent: 'No filters.',
      publishedBook: {
        eyebrow: 'Published book',
        title: 'Asha, o la fuerza de la esperanza',
        description:
          'This is not a book about theory or about cooperation told from the outside. It is the real story of how a 21-year-old woman ended up living through bureaucracy, poverty, culture shock, loss, contradictions, and learning while trying to build a special education school in Nepal from scratch. An intimate, unfiltered journey through the most human and hardest side of building a life mission far from home and leaving a real mark.',
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
      selectionHint: 'A single row of logos to browse horizontally.',
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
        { name: 'Regio7', href: pressHref('Regio7'), category: 'Print press', imageSrc: asset('/aina/press-media/regio7.png') },
        { name: 'TV3', href: pressHref('TV3'), category: 'Television', imageSrc: asset('/aina/press-media/tv3.png') },
        { name: 'Radio Irun SER', href: pressHref('Radio Irun SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-irun-ser.png') },
        { name: 'Nepal Television', href: pressHref('Nepal Television'), category: 'Television', imageSrc: asset('/aina/press-media/nepal-television.png') },
        { name: 'Mujer Emprendedora', href: pressHref('Mujer Emprendedora'), category: 'Digital', imageSrc: asset('/aina/press-media/mujer-emprendedora.png') },
        { name: 'EITB', href: pressHref('EITB'), category: 'Television', imageSrc: asset('/aina/press-media/eitb.png') },
        { name: 'RNE', href: pressHref('RNE'), category: 'Radio', imageSrc: asset('/aina/press-media/rne.png') },
        { name: 'Mundo Solidario', href: pressHref('Mundo Solidario'), category: 'Solidarity press', imageSrc: asset('/aina/press-media/mundo-solidario.png') },
        { name: 'Team TV', href: pressHref('Team TV'), category: 'Television', imageSrc: asset('/aina/press-media/team-tv.png') },
        { name: 'El Confidencial', href: pressHref('El Confidencial'), category: 'Digital', imageSrc: asset('/aina/press-media/el-confidencial.png') },
        { name: 'El Diario Vasco', href: pressHref('El Diario Vasco'), category: 'Print press', imageSrc: asset('/aina/press-media/el-diario-vasco.png') },
        { name: 'Confidenciales', href: pressHref('Confidenciales'), category: 'Magazine / cover', imageSrc: asset('/aina/press-media/confidenciales-cover.png') },
        { name: 'SER Catalunya', href: pressHref('SER Catalunya'), category: 'Radio', imageSrc: asset('/aina/press-media/ser-catalunya.png') },
        { name: 'Ratopati', href: pressHref('Ratopati'), category: 'Digital', imageSrc: asset('/aina/press-media/ratopati.png') },
        { name: 'Ara', href: pressHref('Ara'), category: 'Print press', imageSrc: asset('/aina/press-media/ara.png') },
        { name: 'La Vanguardia', href: pressHref('La Vanguardia'), category: 'Print press', imageSrc: asset('/aina/press-media/la-vanguardia.png') },
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
            'Award presented by the Prime Minister of Nepal in recognition of the educational and social impact created for the inclusion of people with intellectual disabilities in Nepal.',
        },
        {
          title: 'RECLA Sustainability Award',
          location: 'Peru',
          year: '2024',
          imageSrc: asset('/aina/recognitions/recla-prize-1.jpg'),
          description:
            'International recognition granted to the program promoted by Aina Institute for its innovation in training with social impact.',
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
      siteTitle: 'Aina Barca | L amor Posat en Accio',
      siteDescription:
        'Web d Aina Barca sobre la seva historia, visio, llibres, premsa, reconeixements i maneres de col·laborar.',
    },
    hero: {
      backgroundText: 'AINA BARCA',
      heroImage: asset('/aina-transparente.png'),
      heroImageAlt: 'Silueta retallada d Aina Barca',
      overlayText: 'L amor posat en accio',
      brandName: 'Aina Barca',
      languageLabel: 'Idioma',
      navLinks: [
        { label: 'Inici', href: navHrefs[0] },
        { label: 'Sobre l Aina', href: navHrefs[1] },
        { label: 'Visio', href: navHrefs[2] },
        { label: 'Llibres', href: navHrefs[3] },
        { label: 'Premsa', href: navHrefs[4] },
        { label: 'Reconeixements', href: navHrefs[5] },
        { label: 'Uneix t', href: navHrefs[6] },
      ],
    },
    introMission: {
      titleLine1: 'Una vida dedicada a construir',
      titleLine2: 'oportunitats on abans no n hi havia.',
      paragraphs: [
        {
          text: 'Des de fa mes d una decada, Aina Barca treballa per construir educacio, inclusio i dignitat per a persones amb discapacitat intel·lectual al Nepal, mentre impulsa la formacio de noves generacions de lideres socials capaces de generar un impacte real al mon.',
        },
        {
          text: 'Fundadora de Familia de Hetauda, Fundacion Si Asha i Aina Institute, la seva feina connecta accio social, lideratge huma i transformacio estructural des d una mateixa visio: crear oportunitats on abans no existien.',
          links: [
            { label: 'Familia de Hetauda', href: 'https://familiadehetauda.org/' },
            { label: 'Fundacion Si Asha', href: 'https://siasha.org/es/' },
            { label: 'Aina Institute', href: 'https://ainainstitute.es/?utm_source=chatgpt.com' },
          ],
        },
      ],
      images: [
        { src: asset('/aina/main/aina-outdoor-smile.jpg'), alt: 'Aina Barca somriu a l aire lliure' },
        { src: asset('/aina/main/aina-talk.jpg'), alt: 'Aina Barca durant una conversa publica' },
        { src: asset('/aina/main/aina-child-embrace.jpg'), alt: 'Aina Barca abraca un infant en un moment emotiu' },
        { src: asset('/aina/main/aina-child-floor-portrait.jpg'), alt: 'Aina Barca acompanya de prop un infant en un retrat vertical' },
        { src: asset('/aina/main/aina-studio-portrait-2.jpg'), alt: 'Retrat d estudi d Aina Barca somrient' },
      ],
    },
    aboutAina: {
      subtitle: 'Sobre l Aina',
      title: 'Hi ha viatges que canvien una vida. I decisions que n acaben canviant moltes altres.',
      intro:
        'Amb 21 anys, un viatge al Nepal va fer que l Aina es trobes davant d una realitat impossible d ignorar: infants amb discapacitat intel·lectual completament exclosos, families sense recursos ni suport i persones invisibles per a gran part de la societat.',
      paragraphs: [
        'Infants que mai no havien anat a l escola. Mares que creien que els seus fills i filles no tindrien futur. Families acostumades a viure el rebuig i el silenci.',
        'El que va comencar com una experiencia de voluntariat es va acabar convertint en una missio de vida.',
        'Mentre moltes altres persones haurien continuat endavant, ella va decidir quedar-se. Escoltar. Aprendre. I convertir l amor en accio, construint escoles on abans no hi havia res.',
        'El que un dia va comencar amb una idea i molta incertesa, avui s ha convertit en escoles d educacio especial, centres de fisioterapia i una xarxa de suport i inclusio per a centenars de persones i families al Nepal.',
        'Perque transformar vides no consisteix nomes a ajudar. Consisteix a crear estructures capaces de sostenir dignitat, autonomia i oportunitats a llarg termini.',
      ],
      impactLabel: 'Impacte acumulat',
      impactAriaLabel: 'Impacte d Aina Barca',
      impactStats: [
        { value: 157, prefix: '+', label: 'infants amb discapacitat escolaritzats', useGrouping: true },
        { value: 60, prefix: '+', label: 'dones formen part de l equip professional', useGrouping: true },
        { value: 1000, prefix: '+', label: 'families han trobat suport, comunitat i esperança', useGrouping: true },
      ],
      gallery: [
        { src: asset('/aina/main/aina-nepal-rooftop.jpg'), alt: 'Aina Barca asseguda en un terrat al Nepal durant un dels seus primers viatges' },
        { src: asset('/aina/main/aina-sunlight-portrait.jpg'), alt: 'Retrat a contrallum d Aina Barca durant una visita de camp' },
        { src: asset('/aina/main/aina-hands-detail.jpg'), alt: 'Detall de les mans d Aina Barca tocant la terra durant un recorregut al Nepal' },
      ],
    },
    vision: {
      eyebrow: 'Visio',
      heading: 'Una mateixa visio',
      subheading: 'Diferents maneres de transformar vides.',
      description:
        'Tot el que Aina Barca ha construït neix d una mateixa conviccio: cap persona no hauria de quedar exclosa per haver nascut en un lloc sense oportunitats.',
      cards: [
        {
          title: 'Familia de Hetauda',
          subtitle: 'On va neixer la primera escola',
          description:
            'L any 2012, Aina Barca va impulsar a Hetauda la primera escola d educacio especial per a infants amb discapacitat intel·lectual de la regio. Avui, l ONG Familia de Hetauda continua acompanyant centenars de families a traves de l educacio, la inclusio i el suport especialitzat al Nepal.',
          ctaLabel: 'Anar al web',
          href: 'https://familiadehetauda.org/',
          initials: 'FH',
          logoSrc: asset('/vision/familia-de-hetauda-logo.png'),
          logoAlt: 'Logotip oficial de Familia de Hetauda',
          mediaMode: 'logo',
        },
        {
          title: 'Fundacion Si Asha',
          subtitle: 'Una visio que vol arribar a tot el Nepal',
          description:
            'Fundacion Si Asha neix a Espanya amb un objectiu clar: continuar ampliant l acces a l educacio especial, la inclusio i les oportunitats a totes les provincies del Nepal. Perque la dignitat no hauria de dependre del lloc on una persona neix.',
          ctaLabel: 'Anar al web',
          href: 'https://siasha.org/es/',
          initials: 'SA',
          logoSrc: asset('/vision/fundacion-si-asha-logo.png'),
          logoAlt: 'Logotip oficial de Fundacion Si Asha',
          mediaMode: 'logo',
        },
        {
          title: 'Si Asha Foundation',
          subtitle: 'El cor que soste cada projecte',
          description:
            'La contrapart nepalesa responsable de coordinar la feina diaria sobre el terreny: escoles, equips, therapies, programes educatius i acompanyament a families al Nepal. Darrere de cada infant acompanyat, hi ha un equip huma fent possible que tot continuï endavant.',
          ctaLabel: 'Anar al web',
          href: 'https://www.siashafoundation.org/',
          initials: 'SF',
          logoSrc: asset('/vision/si-asha-foundation-logo.png'),
          logoAlt: 'Logotip oficial de Si Asha Foundation',
          mediaMode: 'logo',
        },
        {
          title: 'Asha Special School & Rehabilitation Centers',
          subtitle: 'Molt mes que escoles',
          description:
            'Espais creats per garantir educacio, fisioterapia, inclusio i oportunitats reals per a infants i joves amb discapacitat intel·lectual. Llocs on els infants troben, per primera vegada, suport, comunitat i esperança de futur.',
          ctaLabel: 'Anar al web',
          href: 'https://www.siashafoundation.org/',
          initials: 'AS',
          logoSrc: asset('/siasha/hetauda-school.webp'),
          logoAlt: 'Imatge real de l Asha Special School a Hetauda',
          mediaMode: 'image',
        },
        {
          title: 'Aina Institute',
          subtitle: 'Quan ajudes persones que ajuden, l impacte es multiplica',
          description:
            'Aina Institute forma noves generacions de lideres socials capaces de transformar proposit en projectes solids, sostenibles i capaços de generar un impacte real. Perque canviar vides requereix visio, estructura i accio.',
          ctaLabel: 'Anar al web',
          href: 'https://ainainstitute.es/',
          initials: 'AI',
          logoSrc: asset('/vision/aina-institute-logo.png'),
          logoAlt: 'Logotip oficial d Aina Institute',
          mediaMode: 'logo',
        },
      ],
      closingEyebrow: 'Una causa que se sent propera',
      closingTitle: 'Que cap infant quedi invisible per a la societat',
      closingParagraphs: [
        'La visio es continuar ampliant les Asha Special Schools perque cada vegada mes infants puguin accedir a educacio especialitzada, inclusio i un futur digne.',
        'Perque el lloc on una persona neix no hauria de definir les oportunitats que tindra a la vida.',
        'Pero res d aixo no es construeix sol.',
        'Cada escola, cada infant acompanyat i cada familia recolzada existeixen gracies a persones que van decidir no mirar cap a una altra banda.',
        'Persones que van entendre que l amor, quan es converteix en accio, transforma vides.',
      ],
      closingBackgroundImage: asset('/aina/main/aina-child-embrace.jpg'),
      ctaButtonText: 'Passa a l accio',
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
          'Aquest no es un llibre sobre teories ni sobre cooperacio explicada des de fora. Es la historia real de com una noia de 21 anys va acabar vivint entre burocracia, pobresa, xoc cultural, perdues, contradiccions i aprenentatges mentre intentava aixecar una escola d educacio especial al Nepal des de zero. Un viatge intim i sense filtres sobre la part mes humana, i tambe mes dura, de construir una missio de vida lluny de casa i deixar una empremta real.',
        buttonLabel: 'Comprar a Amazon',
      },
      upcomingBook: {
        eyebrow: 'Proper llancament',
        title: 'Un nou llibre esta en cami',
        description:
          'Hi ha histories que encara no s han explicat. Despres d anys vivint entre el Nepal i Espanya, Aina Barca esta escrivint una nova obra basada en algunes de les experiencies mes intenses, complexes i transformadores de tot aquest cami. Sera un llibre molt mes intim i personal sobre el que passa darrere d una missio de vida: la pressio, les contradiccions, l impacte emocional, les relacions humanes, el sentit de proposit i el preu invisible de dedicar una vida a intentar canviar-ne d altres.',
        buttonLabel: 'Vull saber-ne abans que ningu',
      },
      galleryImages: [
        { src: asset('/aina/main/aina-book-portrait-1.jpg'), alt: 'Aina Barca en un retrat editorial vinculat a la seva faceta com a autora' },
        { src: asset('/aina/main/aina-book-portrait-2.jpg'), alt: 'Aina Barca escrivint i revisant material en un entorn de treball' },
      ],
      showcaseImages: [
        { src: asset('/aina/book-cover-apple.jpg'), alt: 'Portada del llibre Asha, o la fuerza de la esperanza d Aina Barca' },
        { src: asset('/aina/book-cover-article.jpg'), alt: 'Imatge editorial del llibre Asha, o la fuerza de la esperanza publicada en premsa cultural' },
      ],
    },
    press: {
      eyebrow: 'Premsa',
      title: 'Premsa',
      subtitle: 'Una historia que ha travessat fronteres',
      description:
        'La feina d Aina Barca i els seus projectes al Nepal ha estat compartida per mitjans nacionals i internacionals que han donat veu a la importancia de la inclusio, l educacio especial i la dignitat de les persones amb discapacitat intel·lectual.',
      selectionLabel: 'Seleccio de mitjans',
      selectionHint: 'Una sola fila de logos per recorrer-la en horitzontal.',
      previousLabel: 'Veure el mitja anterior',
      nextLabel: 'Veure el mitja seguent',
      mediaAriaLabel: 'Veure aparicio a la premsa',
      indicatorAriaLabel: 'Anar al mitja',
      appearances: [
        { name: 'Radio Galega', href: pressHref('Radio Galega'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-galega.png') },
        { name: 'National Gold', href: pressHref('National Gold'), category: 'Televisio', imageSrc: asset('/aina/press-media/national-gold.png') },
        { name: 'RTVE', href: pressHref('RTVE'), category: 'Televisio', imageSrc: asset('/aina/press-media/rtve.png') },
        { name: 'Radio Madrid SER', href: pressHref('Radio Madrid SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-madrid-ser.png') },
        { name: 'News24', href: pressHref('News24'), category: 'Digital', imageSrc: asset('/aina/press-media/news24.png') },
        { name: 'RAC1', href: pressHref('RAC1'), category: 'Radio', imageSrc: asset('/aina/press-media/rac1.png') },
        { name: 'Regio7', href: pressHref('Regio7'), category: 'Premsa escrita', imageSrc: asset('/aina/press-media/regio7.png') },
        { name: 'TV3', href: pressHref('TV3'), category: 'Televisio', imageSrc: asset('/aina/press-media/tv3.png') },
        { name: 'Radio Irun SER', href: pressHref('Radio Irun SER'), category: 'Radio', imageSrc: asset('/aina/press-media/radio-irun-ser.png') },
        { name: 'Nepal Television', href: pressHref('Nepal Television'), category: 'Televisio', imageSrc: asset('/aina/press-media/nepal-television.png') },
        { name: 'Mujer Emprendedora', href: pressHref('Mujer Emprendedora'), category: 'Digital', imageSrc: asset('/aina/press-media/mujer-emprendedora.png') },
        { name: 'EITB', href: pressHref('EITB'), category: 'Televisio', imageSrc: asset('/aina/press-media/eitb.png') },
        { name: 'RNE', href: pressHref('RNE'), category: 'Radio', imageSrc: asset('/aina/press-media/rne.png') },
        { name: 'Mundo Solidario', href: pressHref('Mundo Solidario'), category: 'Premsa solidaria', imageSrc: asset('/aina/press-media/mundo-solidario.png') },
        { name: 'Team TV', href: pressHref('Team TV'), category: 'Televisio', imageSrc: asset('/aina/press-media/team-tv.png') },
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
        { name: 'UOC', href: pressHref('UOC'), category: 'Academic', imageSrc: asset('/aina/press-media/uoc.png') },
        { name: 'Onda Cero', href: pressHref('Onda Cero'), category: 'Radio', imageSrc: asset('/aina/press-media/onda-cero.png') },
      ],
    },
    recognitions: {
      eyebrow: 'Reconeixements',
      title: 'Reconeixements',
      subtitle: 'Reconeixements que impulsen la missio',
      description:
        'L impacte social i educatiu dels projectes impulsats per Aina Barca ha estat reconegut per institucions nacionals i internacionals tant a Espanya com al Nepal.',
      awards: [
        {
          title: 'Social Welfare Education Award',
          location: 'Nepal',
          year: '2024',
          imageSrc: asset('/aina/recognitions/social-welfare-1.jpg'),
          description:
            'Premi lliurat pel Primer Ministre del Nepal en reconeixement de l impacte educatiu i social impulsat per a la inclusio de persones amb discapacitat intel·lectual al Nepal.',
        },
        {
          title: 'Premi RECLA a la Sostenibilitat',
          location: 'Peru',
          year: '2024',
          imageSrc: asset('/aina/recognitions/recla-prize-1.jpg'),
          description:
            'Reconeixement internacional atorgat al programa impulsat per Aina Institute per la seva innovacio en formacio amb impacte social.',
        },
        {
          title: 'Premi Joan Maria Malapeira i Gas',
          location: 'Universitat de Barcelona',
          year: '2024',
          imageSrc: asset('/aina/recognitions/joan-maria-prize-1.jpg'),
          description:
            'Premi a la innovacio educativa pel desenvolupament de programes formatius impulsats des d Aina Institute en l ambit de l emprenedoria social.',
        },
        {
          title: 'Reconeixement Ajuntament de Hetauda (Saman Patra)',
          location: 'Nepal',
          year: '2023',
          imageSrc: asset('/aina/recognitions/saman-patra-1.jpg'),
          description:
            'Distincio atorgada a Aina Barca per la seva contribucio al desenvolupament educatiu i social de la comunitat de Hetauda, al Nepal.',
        },
        {
          title: 'Premi TELVA Solidaritat',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-1.jpg'),
          description:
            'Reconeixement a la tasca social desenvolupada per Familia de Hetauda per impulsar educacio, inclusio i oportunitats per a persones amb discapacitat intel·lectual al Nepal.',
        },
        {
          title: 'Premi Societat Inclusiva',
          location: 'Madrid',
          year: '2026',
          imageSrc: asset('/aina/recognitions/telva-prize-2.jpg'),
          description:
            'Premi atorgat pel compromís amb la inclusio i la creacio d oportunitats reals per a persones amb discapacitat intel·lectual i les seves families.',
        },
      ],
    },
    join: {
      eyebrow: 'Uneix t',
      title: 'Hi ha moltes maneres de posar l amor en accio.',
      description:
        'De vegades, les transformacions mes grans comencen amb gestos petits: una decisio, una ajuda, una persona que decideix implicar-s hi.',
      gallery: [
        { src: asset('/aina/main/aina-child-close-smile.jpg'), alt: 'Aina abraca un infant somrient al costat d un mural' },
        { src: asset('/aina/main/aina-child-blue-shirt.jpg'), alt: 'Aina acompanya un infant davant d un mural' },
        { src: asset('/aina/main/aina-child-floor-portrait.jpg'), alt: 'Aina a terra al costat d un infant durant una activitat' },
        { src: asset('/aina/main/aina-child-embrace.jpg'), alt: 'Aina i un infant s abracen en un moment de complicitat' },
      ],
      blocks: [
        {
          eyebrow: 'Suport recurrent',
          title: 'Soste una escola, obre futurs.',
          summary: 'La teva ajuda mensual manté oportunitats reals en marxa.',
          description:
            'Ajuda que infants del Nepal puguin continuar accedint a educacio, inclusio i un futur amb mes oportunitats. Perque darrere de cada escola i de cada infant que avui pot aprendre, hi ha persones que van decidir sostenir aquesta missio amb amor i compromís.',
          actions: [
            { label: 'Fes-te soci des d Espanya', href: 'https://familiadehetauda.org/hazte-socio/' },
            { label: 'Fes-te soci des del Nepal', href: 'https://www.siashafoundation.org/get-involved/' },
            { label: 'Fes-te soci des d altres llocs del mon', href: 'https://siasha.org/hazte-socio/' },
          ],
        },
        {
          eyebrow: 'Voluntariat',
          title: 'Viu la missio des de dins.',
          summary: 'Comparteix el dia a dia amb l equip i acompanya processos reals.',
          description:
            'Comparteix el dia a dia amb les dones i els equips que treballen cada dia per construir una societat mes inclusiva i humana al Nepal des de l educacio, la inclusio i l amor posat en accio.',
          actions: [{ label: 'Vull ser voluntari', href: 'mailto:voluntariosfdh@gmail.com' }],
        },
        {
          eyebrow: 'Aina Institute',
          title: 'Converteix la teva vocacio en impacte professional.',
          summary: 'Formacio practica per construir projectes solids i sostenibles.',
          description:
            'A traves d Aina Institute, persones de diferents paisos aprenen a construir projectes solids, sostenibles i capaços de generar un impacte real. Perque tenir vocacio no sempre es suficient. Tambe fan falta eines, estrategia i una estructura capaç de sostenir el canvi. Converteix la teva vocacio en la teva professio.',
          actions: [{ label: 'Parla amb l equip', href: 'https://wa.me/34610094664' }],
        },
      ],
    },
    footer: {
      logoText: 'AINA BARCA',
      navigationLabel: 'Seccions',
      navLinks: [
        { label: 'Inici', href: navHrefs[0] },
        { label: 'Sobre l Aina', href: navHrefs[1] },
        { label: 'Visio', href: navHrefs[2] },
        { label: 'Llibres', href: navHrefs[3] },
        { label: 'Premsa', href: navHrefs[4] },
        { label: 'Reconeixements', href: navHrefs[5] },
        { label: 'Uneix t', href: navHrefs[6] },
      ],
      closingText:
        'L amor posat en accio. Una visio compartida per construir educacio, inclusio i dignitat al Nepal.',
      copyright: `© ${year} Aina Barca`,
    },
  },
};

export function getSiteContent(locale: Locale): LocalizedSiteContent {
  return contentByLocale[locale];
}
