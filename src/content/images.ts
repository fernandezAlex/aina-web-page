const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const aboutAinaGallery = [
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
];

export const serviceImages = [
  {
    src: asset('/aina/main/aina-classroom-support.jpg'),
    alt: 'Aina acompaña a niños en una sesión de apoyo educativo',
  },
  {
    src: asset('/aina/main/aina-yellow-wall-1.jpg'),
    alt: 'Aina junto a una niña en un espacio de trabajo terapéutico',
  },
  {
    src: asset('/aina/main/aina-yellow-wall-2.jpg'),
    alt: 'Aina con una niña en un momento de cuidado cotidiano',
  },
  {
    src: asset('/aina/main/aina-girl-conversation.jpg'),
    alt: 'Aina conversa de cerca con una niña en Nepal',
  },
];

export const booksImages = [
  {
    src: asset('/aina/main/aina-book-portrait-1.jpg'),
    alt: 'Aina Barca en un retrato editorial vinculado a su faceta como autora',
  },
  {
    src: asset('/aina/main/aina-book-portrait-2.jpg'),
    alt: 'Aina Barca escribiendo y revisando material en un entorno de trabajo',
  },
];

export const bookShowcaseImages = [
  {
    src: asset('/aina/book-cover-apple.jpg'),
    alt: 'Portada del libro Asha, o la fuerza de la esperanza de Aina Barca',
  },
  {
    src: asset('/aina/book-cover-article.jpg'),
    alt: 'Imagen editorial del libro Asha, o la fuerza de la esperanza publicada en prensa cultural',
  },
];

export const joinGalleryImages = [
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
];

export const principlesGalleryImages = [
  {
    src: asset('/aina/main/aina-forest-portrait.jpg'),
    alt: 'Retrato de Aina Barca en exterior',
  },
  {
    src: asset('/aina/main/aina-pink-jacket.jpg'),
    alt: 'Aina Barca con chaqueta rosa durante una sesion fotografica',
  },
  {
    src: asset('/aina/main/aina-child-balance-2.jpg'),
    alt: 'Aina acompana a un nino en una actividad motriz de equilibrio',
  },
  {
    src: asset('/aina/main/aina-child-hug-2.jpg'),
    alt: 'Aina abraza a un nino durante una actividad en el centro',
  },
  {
    src: asset('/aina/main/aina-child-wall-2.jpg'),
    alt: 'Aina junto a un nino en una escena de acompanamiento cotidiano',
  },
];

export type PressAppearance = {
  name: string;
  category: string;
  imageSrc: string;
  href?: string;
};

export const pressAppearances: PressAppearance[] = [
  { name: 'Radio Galega', category: 'Radio', imageSrc: asset('/aina/press-media/radio-galega.png') },
  { name: 'National Gold', category: 'Television', imageSrc: asset('/aina/press-media/national-gold.png') },
  { name: 'RTVE', category: 'Television', imageSrc: asset('/aina/press-media/rtve.png') },
  { name: 'Radio Madrid SER', category: 'Radio', imageSrc: asset('/aina/press-media/radio-madrid-ser.png') },
  { name: 'News24', category: 'Digital', imageSrc: asset('/aina/press-media/news24.png') },
  { name: 'RAC1', category: 'Radio', imageSrc: asset('/aina/press-media/rac1.png') },
  { name: 'Regio7', category: 'Prensa escrita', imageSrc: asset('/aina/press-media/regio7.png') },
  { name: 'TV3', category: 'Television', imageSrc: asset('/aina/press-media/tv3.png') },
  { name: 'Radio Irun SER', category: 'Radio', imageSrc: asset('/aina/press-media/radio-irun-ser.png') },
  { name: 'Nepal Television', category: 'Television', imageSrc: asset('/aina/press-media/nepal-television.png') },
  { name: 'Mujer Emprendedora', category: 'Digital', imageSrc: asset('/aina/press-media/mujer-emprendedora.png') },
  { name: 'EITB', category: 'Television', imageSrc: asset('/aina/press-media/eitb.png') },
  { name: 'RNE', category: 'Radio', imageSrc: asset('/aina/press-media/rne.png') },
  { name: 'Mundo Solidario', category: 'Prensa solidaria', imageSrc: asset('/aina/press-media/mundo-solidario.png') },
  { name: 'Team TV', category: 'Television', imageSrc: asset('/aina/press-media/team-tv.png') },
  { name: 'El Confidencial', category: 'Digital', imageSrc: asset('/aina/press-media/el-confidencial.png') },
  { name: 'El Diario Vasco', category: 'Prensa escrita', imageSrc: asset('/aina/press-media/el-diario-vasco.png') },
  { name: 'Confidenciales', category: 'Revista / portada', imageSrc: asset('/aina/press-media/confidenciales-cover.png') },
  { name: 'SER Catalunya', category: 'Radio', imageSrc: asset('/aina/press-media/ser-catalunya.png') },
  { name: 'Ratopati', category: 'Digital', imageSrc: asset('/aina/press-media/ratopati.png') },
  { name: 'Ara', category: 'Prensa escrita', imageSrc: asset('/aina/press-media/ara.png') },
  { name: 'La Vanguardia', category: 'Prensa escrita', imageSrc: asset('/aina/press-media/la-vanguardia.png') },
  { name: 'Todo Literatura', category: 'Cultura', imageSrc: asset('/aina/press-media/todo-literatura.png') },
  { name: 'Eco Diario', category: 'Digital', imageSrc: asset('/aina/press-media/eco-diario.png') },
  { name: 'Online Khabar', category: 'Digital', imageSrc: asset('/aina/press-media/online-khabar.png') },
  { name: 'RPP', category: 'Radio / digital', imageSrc: asset('/aina/press-media/rpp.png') },
  { name: 'UOC', category: 'Academico', imageSrc: asset('/aina/press-media/uoc.png') },
  { name: 'Onda Cero', category: 'Radio', imageSrc: asset('/aina/press-media/onda-cero.png') },
];

export type RecognitionAward = {
  title: string;
  location: string;
  year: string;
  imageSrc: string;
  description: string;
};

export const recognitionAwards: RecognitionAward[] = [
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
];
