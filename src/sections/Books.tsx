import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, BookOpen, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookShowcaseImages, booksImages } from "../content/images";

const AMAZON_URL =
	"https://www.amazon.es/fuerza-esperanza-sue%C3%B1o-levantar-escuela/dp/8417622586/ref=tmm_pap_swatch_0";
const EARLY_ACCESS_URL = "http://eepurl.com/cWGZ3j";

gsap.registerPlugin(ScrollTrigger);

export function Books() {
	const sectionRef = useRef<HTMLElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: headerRef.current,
				start: "top 85%",
				onEnter: () => {
					gsap.fromTo(
						headerRef.current,
						{ y: 60, opacity: 0 },
						{ y: 0, opacity: 1, duration: 1, ease: "power3.out" },
					);
				},
				once: true,
			});

			ScrollTrigger.create({
				trigger: cardsRef.current,
				start: "top 80%",
				onEnter: () => {
					const cards = cardsRef.current?.querySelectorAll("[data-book-card]");
					if (cards) {
						gsap.fromTo(
							cards,
							{ y: 56, opacity: 0 },
							{
								y: 0,
								opacity: 1,
								duration: 0.85,
								ease: "power3.out",
								stagger: 0.16,
							},
						);
					}
				},
				once: true,
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="libros"
			className="mt-12 relative w-full overflow-hidden bg-white pb-24 pt-0 md:pb-32 md:pt-0"
		>
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-softblack/10 to-transparent" />
			<div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-forest-mid/10 blur-3xl" />
			<div className="absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-forest-dark/10 blur-3xl" />

			<div className="mt-24 relative z-10 max-w-7xl mx-auto px-6 md:px-12">
				<div ref={headerRef} className="max-w-3xl mb-14 md:mb-20 opacity-0">
					<p className="accent-kicker text-sm font-body uppercase tracking-widest mb-4">
						Libros
					</p>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-primary tracking-tight leading-tight">
						Nepal desde dentro.{" "}
						<span className="font-serif italic font-normal text-primary/75">
							Sin filtros.
						</span>
					</h2>
				</div>

				<div
					ref={cardsRef}
					className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8"
				>
					<article
						data-book-card
						className="opacity-0 group relative overflow-hidden rounded-3xl bg-forest-dark p-8 md:p-10 min-h-[460px] flex flex-col justify-between"
					>
						<img
							src={booksImages[0].src}
							alt={booksImages[0].alt}
							className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_34%),linear-gradient(135deg,rgba(103,17,39,0.94),rgba(141,31,57,0.82))]" />
						<div className="relative z-10">
							<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15">
								<BookOpen className="h-6 w-6" strokeWidth={1.5} />
							</div>
							<div className="grid items-start gap-6 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-8">
								<div className="overflow-hidden rounded-2xl border border-white/12 bg-white/6 shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm max-w-[220px]">
									<img
										src={bookShowcaseImages[0].src}
										alt={bookShowcaseImages[0].alt}
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
								<div>
									<p className="text-secondary/80 text-xs font-body uppercase tracking-[0.28em] mb-4">
										Libro publicado
									</p>
									<h3 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
										Asha, o la fuerza de la esperanza
									</h3>
									<p className="mt-6 max-w-2xl text-white/65 font-body text-base md:text-lg leading-relaxed">
										Este no es un libro sobre teorias ni sobre cooperacion
										contada desde fuera. Es la historia real de como una chica
										de 21 anos termino viviendo entre burocracia, pobreza,
										choque cultural, perdidas, contradicciones y aprendizajes
										mientras intentaba levantar una escuela de educacion
										especial en Nepal desde cero. Un viaje intimo y sin filtros
										sobre el lado mas humano, y tambien mas duro, de construir
										una mision de vida lejos de casa y dejar una huella real.
									</p>
								</div>
							</div>
						</div>

						<div className="relative z-10 mt-10">
							<Button
								asChild
								size="lg"
								className="bg-secondary text-softblack hover:bg-white rounded-full px-7 shadow-none"
							>
								<a href={AMAZON_URL} target="_blank" rel="noreferrer">
									Comprar en Amazon
									<ArrowUpRight className="h-4 w-4" />
								</a>
							</Button>
						</div>
					</article>

					<article
						data-book-card
						className="opacity-0 group relative overflow-hidden rounded-3xl bg-offwhite p-8 md:p-10 min-h-[460px] flex flex-col justify-between border border-softblack/10"
					>
						<img
							src={booksImages[1].src}
							alt={booksImages[1].alt}
							className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-105"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(145deg,rgba(255,122,43,0.88),rgba(212,73,29,0.82)_42%,rgba(103,17,39,0.72)_100%)]" />
						<div className="absolute inset-0 bg-gradient-to-t from-softblack/52 via-softblack/18 to-transparent" />
						<div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-white/14 blur-2xl" />
						<div className="relative z-10">
							<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest-dark/90 text-white ring-1 ring-white/15">
								<Bell className="h-6 w-6" strokeWidth={1.5} />
							</div>
							<p className="text-white/72 text-xs font-body uppercase tracking-[0.28em] mb-4">
								Próximo lanzamiento
							</p>
							<h3 className="max-w-xl text-3xl md:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
								Un nuevo libro está en camino
							</h3>
							<p className="mt-6 max-w-xl text-white/88 font-body text-base md:text-lg leading-relaxed">
								Hay historias que todavia no han sido contadas. Despues de anos
								viviendo entre Nepal y Espana, Aina Barca esta escribiendo una
								nueva obra basada en algunas de las experiencias mas intensas,
								complejas y transformadoras de todo este camino. Sera un libro
								mucho mas intimo y personal sobre lo que ocurre detras de una
								mision de vida: la presion, las contradicciones, el impacto
								emocional, las relaciones humanas, el sentido de proposito y el
								precio invisible de dedicar una vida a intentar cambiar otras.
							</p>
						</div>

						<div className="relative z-10 mt-10">
							<Button
								asChild
								size="lg"
								className="bg-secondary text-softblack hover:bg-white rounded-full px-7 shadow-none"
							>
								<a href={EARLY_ACCESS_URL} target="_blank" rel="noreferrer">
									Quiero enterarme antes que nadie
									<ArrowUpRight className="h-4 w-4" />
								</a>
							</Button>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}
