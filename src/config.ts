export interface SiteConfig {
	language: string;
	siteTitle: string;
	siteDescription: string;
}

export const siteConfig: SiteConfig = {
	language: "es",
	siteTitle: "Aina Barca | El amor puesto en accion",
	siteDescription:
		"Web de Aina Barca sobre su historia, vision, libros, prensa, reconocimientos y formas de colaborar.",
};

const asset = (path: string) =>
	`${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

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
}

export const heroConfig: HeroConfig = {
	backgroundText: "AINA BARCA",
	heroImage: asset("/aina-transparente.png"),
	heroImageAlt: "Silueta recortada de Aina Barca",
	overlayText: "El amor puesto en accion",
	brandName: "Aina Barca",
	navLinks: [
		{ label: "Inicio", href: "#hero" },
		{ label: "Sobre Aina", href: "#sobre-aina" },
		{ label: "La Vision", href: "#vision" },
		{ label: "Libros", href: "#libros" },
		{ label: "Prensa", href: "#prensa" },
		{ label: "Reconocimientos", href: "#reconocimientos" },
		{ label: "Unete", href: "#unete" },
	],
};

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

export const introMissionConfig: IntroMissionConfig = {
	titleLine1: "Una vida dedicada a construir",
	titleLine2: "oportunidades donde antes no las habia.",
	paragraphs: [
		{
			text: "Desde hace mas de una decada, Aina Barca trabaja para construir educacion, inclusion y dignidad para personas con discapacidad intelectual en Nepal, mientras impulsa la formacion de nuevas generaciones de lideres sociales capaces de generar impacto real en el mundo.",
		},
		{
			text: "Fundadora de Familia de Hetauda, Fundacion Si Asha y Aina Institute, su trabajo conecta accion social, liderazgo humano y transformacion estructural desde una misma vision: crear oportunidades donde antes no existian.",
			links: [
				{
					label: "Familia de Hetauda",
					href: "https://familiadehetauda.org/",
				},
				{
					label: "Fundacion Si Asha",
					href: "https://siasha.org/es/",
				},
				{
					label: "Aina Institute",
					href: "https://ainainstitute.es/?utm_source=chatgpt.com",
				},
			],
		},
	],
	images: [
		{
			src: asset("/aina/main/aina-outdoor-smile.jpg"),
			alt: "Aina Barca sonríe al aire libre",
		},
		{
			src: asset("/aina/main/aina-talk.jpg"),
			alt: "Aina Barca durante una conversación pública",
		},
		{
			src: asset("/aina/main/aina-child-embrace.jpg"),
			alt: "Aina Barca abraza a un niño en un momento emotivo",
		},
		{
			src: asset("/aina/main/aina-child-floor-portrait.jpg"),
			alt: "Aina Barca acompaña de cerca a un niño en un retrato vertical",
		},
		{
			src: asset("/aina/main/aina-studio-portrait-2.jpg"),
			alt: "Retrato de estudio de Aina Barca sonriendo",
		},
	],
};

export interface AboutAinaConfig {
	subtitle: string;
	title: string;
	intro: string;
	paragraphs: string[];
	impactLabel: string;
	impactStats: StatItem[];
}

export const aboutAinaConfig: AboutAinaConfig = {
	subtitle: "Sobre Aina",
	title:
		"Hay viajes que cambian una vida. Y decisiones que terminan cambiando muchas otras.",
	intro:
		"Con 21 anos, un viaje a Nepal hizo que Aina se encontrara frente a una realidad imposible de ignorar: ninos y ninas con discapacidad intelectual completamente excluidos, familias sin recursos ni apoyo y personas invisibles para gran parte de la sociedad.",
	paragraphs: [
		"Ninos que nunca habian ido a la escuela. Madres que creian que sus hijos no tendrian futuro. Familias acostumbradas a vivir el rechazo y el silencio.",
		"Lo que empezo como una experiencia de voluntariado termino convirtiendose en una mision de vida.",
		"Mientras muchos habrian seguido adelante, ella decidio quedarse. Escuchar. Aprender. Y convertir el amor en accion, construyendo escuelas donde antes no habia nada.",
		"Lo que un dia comenzo con una idea y muchisima incertidumbre, hoy se ha convertido en escuelas de educacion especial, centros de fisioterapia y una red de apoyo e inclusion para cientos de personas y familias en Nepal.",
		"Porque transformar vidas no consiste solo en ayudar. Consiste en crear estructuras capaces de sostener dignidad, autonomia y oportunidades a largo plazo.",
	],
	impactLabel: "Impacto acumulado",
	impactStats: [
		{
			value: 157,
			prefix: "+",
			label: "ninos y ninas con discapacidad escolarizados",
			useGrouping: true,
		},
		{
			value: 60,
			prefix: "+",
			label: "mujeres forman parte del equipo profesional",
			useGrouping: true,
		},
		{
			value: 1000,
			prefix: "+",
			label: "familias han encontrado apoyo, comunidad y esperanza",
			useGrouping: true,
		},
	],
};

export interface VisionCard {
	title: string;
	subtitle: string;
	description: string;
	ctaLabel: string;
	href: string;
	initials: string;
	logoSrc?: string;
	logoAlt?: string;
}

export interface VisionConfig {
	eyebrow: string;
	heading: string;
	subheading: string;
	description: string;
	cards: VisionCard[];
	closingTitle: string;
	closingParagraphs: string[];
	closingBackgroundImage: string;
	ctaButtonText: string;
	ctaHref: string;
}

export const visionConfig: VisionConfig = {
	eyebrow: "La Vision",
	heading: "Una misma vision",
	subheading: "Diferentes formas de transformar vidas.",
	description:
		"Todo lo que Aina Barca ha construido nace de una misma conviccion: que ninguna persona deberia quedar excluida por haber nacido en un lugar sin oportunidades.",
	cards: [
		{
			title: "Familia de Hetauda",
			subtitle: "Donde nacio la primera escuela",
			description:
				"En 2012, Aina Barca impulso en Hetauda la primera escuela de educacion especial para ninos y ninas con discapacidad intelectual de la region. Hoy, la ONG Familia de Hetauda sigue acompanando a cientos de familias a traves de educacion, inclusion y apoyo especializado en Nepal.",
			ctaLabel: "Ir a la web",
			href: "https://familiadehetauda.org/",
			initials: "FH",
		},
		{
			title: "Fundacion Si Asha",
			subtitle: "Una vision que quiere llegar a todo Nepal",
			description:
				"Fundacion Si Asha nace en Espana con un objetivo claro: seguir expandiendo el acceso a educacion especial, inclusion y oportunidades a todas las provincias de Nepal. Porque la dignidad no deberia depender del lugar donde una persona nace.",
			ctaLabel: "Ir a la web",
			href: "https://siasha.org/es/",
			initials: "SA",
			logoSrc: asset("/siasha/hero-logo.png"),
			logoAlt: "Logotipo de Fundacion Si Asha",
		},
		{
			title: "Si Asha Foundation",
			subtitle: "El corazon que sostiene cada proyecto",
			description:
				"La contraparte nepali responsable de coordinar el trabajo diario sobre el terreno: escuelas, equipos, terapias, programas educativos y acompanamiento a familias en Nepal. Detras de cada nino acompanado, hay un equipo humano haciendo posible que todo siga adelante.",
			ctaLabel: "Ir a la web",
			href: "https://www.siashafoundation.org/",
			initials: "SF",
			logoSrc: asset("/siasha/hero-logo.png"),
			logoAlt: "Logotipo de Si Asha Foundation",
		},
		{
			title: "Asha Special School & Rehabilitation Centers",
			subtitle: "Mucho mas que escuelas",
			description:
				"Espacios creados para garantizar educacion, fisioterapia, inclusion y oportunidades reales para ninos y jovenes con discapacidad intelectual. Lugares donde los ninos encuentran, por primera vez, apoyo, comunidad y esperanza de futuro.",
			ctaLabel: "Ir a la web",
			href: "https://www.siashafoundation.org/",
			initials: "AS",
		},
		{
			title: "Aina Institute",
			subtitle: "Cuando ayudas a personas que ayudan, el impacto se multiplica",
			description:
				"Aina Institute forma a nuevas generaciones de lideres sociales capaces de transformar proposito en proyectos solidos, sostenibles y capaces de generar impacto real. Porque cambiar vidas requiere vision, estructura y accion.",
			ctaLabel: "Ir a la web",
			href: "https://www.educations.com/institutions/aina-institute",
			initials: "AI",
		},
	],
	closingTitle: "Que ningun nino quede invisible para la sociedad",
	closingParagraphs: [
		"La vision es seguir expandiendo las Asha Special Schools para que cada vez mas ninos puedan acceder a educacion especializada, inclusion y un futuro digno.",
		"Porque el lugar donde una persona nace no deberia definir las oportunidades que tendra en la vida.",
		"Pero nada de esto se construye solo.",
		"Cada escuela, cada nino acompanado y cada familia apoyada existen gracias a personas que decidieron no mirar hacia otro lado.",
		"Personas que entendieron que el amor, cuando se convierte en accion, transforma vidas.",
	],
	closingBackgroundImage: asset("/aina/main/aina-child-embrace.jpg"),
	ctaButtonText: "Pasa a la accion",
	ctaHref: "#unete",
};

export interface FooterConfig {
	logoText: string;
	navigationLabel: string;
	navLinks: { label: string; href: string }[];
	closingText: string;
	copyright: string;
}

export const footerConfig: FooterConfig = {
	logoText: "AINA BARCA",
	navigationLabel: "Secciones",
	navLinks: [
		{ label: "Inicio", href: "#hero" },
		{ label: "Sobre Aina", href: "#sobre-aina" },
		{ label: "La Vision", href: "#vision" },
		{ label: "Libros", href: "#libros" },
		{ label: "Prensa", href: "#prensa" },
		{ label: "Reconocimientos", href: "#reconocimientos" },
		{ label: "Unete", href: "#unete" },
	],
	closingText:
		"El amor puesto en accion. Una vision compartida para construir educacion, inclusion y dignidad en Nepal.",
	copyright: `© ${new Date().getFullYear()} Aina Barca`,
};
