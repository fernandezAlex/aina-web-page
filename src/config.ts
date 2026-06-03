export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "es",
  siteTitle: "Si Asha Foundation | Educación, terapia y cuidado en Nepal",
  siteDescription:
    "Landing inspirada en las guías de marca de Si Asha Foundation para presentar su misión, programas e impacto junto a una invitación clara a colaborar.",
};

export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "SI ASHA",
  heroImage: "/siasha/hero-logo.png",
  heroImageAlt: "Logotipo de Si Asha Foundation",
  overlayText: "La esperanza se construye cada dia.",
  brandName: "Si Asha Foundation",
  navLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Mision", href: "#about" },
    { label: "Programas", href: "#services" },
    { label: "Impacto", href: "#work" },
    { label: "Contacto", href: "#contact" },
  ],
};

export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Create hope.",
  titleLine2: "Take action.",
  description:
    "Si Asha Foundation trabaja con ninos y jovenes con discapacidad intelectual y del desarrollo en Nepal. Su enfoque combina educacion especializada, terapias, acompanamiento familiar y cuidado cotidiano para que cada nino pueda aprender, participar y crecer con dignidad.",
  portfolioImages: [
    { src: "/siasha/who-we-are-hero.webp", alt: "Comunidad de Si Asha Foundation" },
    { src: "/siasha/children-happy.webp", alt: "Ninos en un programa de Si Asha Foundation" },
    { src: "/siasha/hetauda-school.webp", alt: "Escuela de Si Asha Foundation en Hetauda" },
    { src: "/siasha/bardibas-school.webp", alt: "Centro de Si Asha Foundation en Bardibas" },
    { src: "/siasha/aina-with-children.webp", alt: "Equipo acompanando a ninos y familias" },
  ],
  accentText: "Escuela a escuela. Provincia a provincia.",
};

export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Impacto visible",
  titleRegular: "Como se traduce",
  titleItalic: "el apoyo en accion",
  viewAllText: "Explorar la mision",
  viewAllHref: "#contact",
  viewProjectText: "Sumarte a esta linea de trabajo",
  projects: [
    {
      id: 1,
      title: "Educacion especializada",
      category: "Derecho a aprender",
      year: "En marcha",
      image: "/siasha/program-education.webp",
      description:
        "Las escuelas de Si Asha Foundation ofrecen aprendizaje adaptado, acompanamiento profesional y espacios donde cada nino puede desarrollar autonomia y confianza.",
    },
    {
      id: 2,
      title: "Terapias y rehabilitacion",
      category: "Desarrollo y bienestar",
      year: "Continuo",
      image: "/siasha/program-therapy.webp",
      description:
        "La terapia ocupacional, fisica y del habla forma parte del dia a dia para fortalecer movilidad, comunicacion y participacion social.",
    },
    {
      id: 3,
      title: "Apoyo a familias",
      category: "Acompanamiento real",
      year: "Largo plazo",
      image: "/siasha/family-support.webp",
      description:
        "Las familias reciben orientacion y respaldo para sostener el desarrollo de sus hijos tambien fuera del aula y de los centros terapeuticos.",
    },
    {
      id: 4,
      title: "Inclusion y sensibilizacion",
      category: "Cambio social",
      year: "Provincia a provincia",
      image: "/siasha/awareness-inclusion.webp",
      description:
        "El trabajo de Si Asha no termina en la escuela: tambien impulsa una sociedad que reconozca la dignidad y el valor de cada nino.",
    },
  ],
};

export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "Lo que hacemos",
  titleLine1: "Un modelo completo",
  titleLine2Italic: "de cuidado e inclusion",
  description:
    "La marca Si Asha transmite esperanza activa, estructura y compromiso. Esta version del template recoge esa direccion con una narrativa mas humana, mas clara y mas institucional a la vez.",
  services: [
    {
      iconName: "Sparkles",
      title: "Educacion adaptada",
      description:
        "Escuelas y metodologias disenadas para ninos y jovenes con discapacidad intelectual y del desarrollo.",
    },
    {
      iconName: "Camera",
      title: "Terapias continuas",
      description:
        "Procesos terapeuticos integrados en la rutina diaria para impulsar autonomia, comunicacion y bienestar.",
    },
    {
      iconName: "Diamond",
      title: "Cuidado cotidiano",
      description:
        "Proteccion, acompanamiento y entornos estables para ninos que necesitan mas apoyo para sostener su desarrollo.",
    },
    {
      iconName: "Users",
      title: "Comunidad y confianza",
      description:
        "Trabajo con familias, equipos locales y personas colaboradoras para construir impacto real y sostenible.",
    },
  ],
};

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Por que Si Asha",
  titleRegular: "Esperanza con",
  titleItalic: "estructura y dignidad",
  statsLabel: "Claves del modelo",
  stats: [
    { value: 2012, suffix: "", label: "Ano de inicio del proyecto en Nepal" },
    { value: 3, suffix: "", label: "Centros en funcionamiento en el recorrido actual" },
    { value: 4, suffix: "", label: "Pilares del trabajo: educacion, terapia, cuidado e inclusion" },
    { value: 1, suffix: "", label: "Compromiso: que ningun nino quede invisible" },
  ],
  featureCards: [
    {
      image: "/siasha/who-we-are-vertical-1.webp",
      imageAlt: "Nina en programa educativo de Si Asha Foundation",
      title: "Cercania humana",
      description:
        "La identidad visual debe mostrar presencia, acompanamiento y trabajo real con ninos y familias.",
    },
    {
      image: "/siasha/childrens-vertical-1.webp",
      imageAlt: "Ninos sonriendo en Si Asha Foundation",
      title: "Seriedad con calidez",
      description:
        "El tono evita el paternalismo y apuesta por una organizacion creible, activa y profundamente humana.",
    },
  ],
  wideImage: "/siasha/transparency-hero.webp",
  wideImageAlt: "Equipo y comunidad de Si Asha Foundation",
  wideTitle: "Confianza que se ve",
  wideDescription:
    "Fotografia documental, mensajes concretos y llamadas a la accion claras para reforzar transparencia, continuidad e impacto.",
};

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Pilares de marca",
  titleRegular: "Lo que esta landing",
  titleItalic: "quiere transmitir",
  testimonials: [
    {
      id: 1,
      name: "Mision",
      role: "Marco institucional",
      image: "/siasha/hero-logo.png",
      quote:
        "La esperanza no aparece sola: se construye con educacion, terapia, cuidado y compromiso sostenido.",
    },
    {
      id: 2,
      name: "Vision",
      role: "Direccion de crecimiento",
      image: "/siasha/team-board.webp",
      quote:
        "El horizonte es una Nepal mas inclusiva, donde el acceso al apoyo especializado no dependa de la geografia.",
    },
    {
      id: 3,
      name: "Gobernanza",
      role: "Confianza y continuidad",
      image: "/siasha/kailash-kaundinya.webp",
      quote:
        "La marca debe sentirse suficientemente institucional para generar confianza y suficientemente humana para mover a la accion.",
    },
  ],
};

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Preguntas frecuentes",
  titleRegular: "Lo esencial",
  titleItalic: "antes de publicar",
  ctaText: "Esta demo ya incorpora la direccion visual y narrativa principal.",
  ctaButtonText: "Revisar siguiente paso",
  ctaHref: "#contact",
  faqs: [
    {
      id: "faq-1",
      question: "Que recoge esta adaptacion del estilo de Si Asha Foundation?",
      answer:
        "La paleta oficial, un tono mas editorial y serio, el enfoque en dignidad y accion, y el uso de fotografia real vinculada al trabajo de la fundacion.",
    },
    {
      id: "faq-2",
      question: "Que evita a proposito?",
      answer:
        "Lenguaje paternalista, promesas vagas, estetica de startup y recursos visuales que conviertan a los ninos en simbolos de sufrimiento.",
    },
    {
      id: "faq-3",
      question: "Que quedaria por validar antes de una publicacion final?",
      answer:
        "El email canonico de contacto, enlaces sociales definitivos y cualquier cifra publica que la fundacion quiera destacar de forma oficial.",
    },
  ],
};

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: { label: string; href: string }[];
  socialLabel: string;
  socialLinks: { iconName: string; href: string; label: string }[];
  tagline: string;
  copyright: string;
  bottomLinks: { label: string; href: string }[];
}

export const footerConfig: FooterConfig = {
  logoText: "SI ASHA",
  contactLabel: "Contacto",
  email: "",
  locationText: "Nepal y red internacional de apoyo\nEmail pendiente de confirmacion oficial",
  navigationLabel: "Secciones",
  navLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Mision", href: "#about" },
    { label: "Programas", href: "#services" },
    { label: "Impacto", href: "#work" },
  ],
  socialLabel: "Canales",
  socialLinks: [],
  tagline: "Hope is built every day.\nEvery gesture matters.",
  copyright: "© Si Asha Foundation demo concept.",
  bottomLinks: [
    { label: "Transparencia", href: "#work" },
    { label: "Colaborar", href: "#contact" },
  ],
};
