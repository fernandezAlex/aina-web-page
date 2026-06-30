import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useSiteContent } from "../i18n";

gsap.registerPlugin(ScrollTrigger);

type VisionCard = {
	title: string;
	subtitle: string;
	description: string;
	ctaLabel: string;
	href: string;
	initials: string;
	logoSrc?: string;
	logoAlt?: string;
	mediaMode?: "image" | "logo";
};

type VisionBubbleProps = {
	card: VisionCard;
	className?: string;
	imageClassName?: string;
};

function splitVisionDescription(description: string) {
	const [lead, emphasis] = description.split(/:\s*/);

	if (!emphasis) {
		return { lead: description, emphasis: "" };
	}

	return { lead: `${lead}:`, emphasis };
}

function VisionBubble({
	card,
	className = "",
	imageClassName = "",
}: VisionBubbleProps) {
	return (
		<div
			className={`vision-node relative flex aspect-square items-center justify-center rounded-full border border-[#f7c28f]/70 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.98)_0%,rgba(255,249,243,0.95)_46%,rgba(251,229,209,0.94)_100%)] p-6 shadow-[0_18px_48px_rgba(182,92,32,0.18)] ${className}`}
		>
			<div className="absolute inset-[8%] rounded-full border border-white/70" />
			<div className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(247,165,126,0.22)_0%,rgba(247,165,126,0)_68%)] blur-xl" />
			{card.logoSrc ? (
				<img
					src={card.logoSrc}
					alt={card.logoAlt || `${card.title} logo`}
					className={`relative z-10 h-full w-full object-contain ${card.mediaMode === "image" ? "rounded-full object-cover p-0" : "p-5"} ${imageClassName}`}
					loading="lazy"
				/>
			) : (
				<div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-white text-center text-3xl font-sans font-bold text-primary">
					{card.initials}
				</div>
			)}
		</div>
	);
}

function VisionCopyBlock({
	card,
	align = "left",
	compact = false,
	className = "",
}: {
	card: VisionCard;
	align?: "left" | "center" | "right";
	compact?: boolean;
	className?: string;
}) {
	const alignmentClasses =
		align === "center"
			? "text-center items-center"
			: align === "right"
				? "items-center text-center lg:items-start lg:text-left"
				: "items-center text-center lg:items-start lg:text-left";

	return (
		<article className={`flex flex-col ${alignmentClasses} ${className}`}>
			<h3 className="max-w-[14ch] text-3xl font-sans font-bold leading-[1.05] text-primary lg:text-[2.35rem]">
				{card.title}
			</h3>
			<div className="mt-4 h-px w-14 bg-[#f29a38]" />
			<p className="mt-4 max-w-[26ch] text-xl font-sans font-bold leading-snug text-[#f08d2d] lg:text-[1.75rem]">
				{card.subtitle}
			</p>
			<div
				className={`mt-5 space-y-5 text-[1.1rem] leading-relaxed text-softblack/88 lg:text-[1.24rem] ${compact ? "max-w-[33ch]" : "max-w-[37ch]"}`}
			>
				{card.description.split(/(?<=\.)\s+/).map((paragraph) => (
					<p key={`${card.title}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
				))}
			</div>
			<a
				href={card.href}
				target="_blank"
				rel="noreferrer"
				className="mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-base font-sans font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9f112f]"
			>
				{card.ctaLabel}
				<ArrowUpRight className="h-4 w-4" />
			</a>
		</article>
	);
}

export function Vision() {
	const { vision: visionConfig } = useSiteContent();
	const sectionRef = useRef<HTMLElement>(null);
	const introRef = useRef<HTMLDivElement>(null);
	const compositionRef = useRef<HTMLDivElement>(null);
	const ctaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (reduceMotion) return;

		const ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: introRef.current,
				start: "top 85%",
				onEnter: () => {
					gsap.fromTo(
						introRef.current,
						{ y: 48, opacity: 0 },
						{ y: 0, opacity: 1, duration: 1, ease: "power3.out" },
					);
				},
				once: true,
			});

			const animatedItems =
				gsap.utils.toArray<HTMLElement>(".vision-fade-item");
			if (animatedItems.length) {
				gsap.fromTo(
					animatedItems,
					{ y: 56, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 1.05,
						ease: "power3.out",
						stagger: 0.1,
						scrollTrigger: {
							trigger: compositionRef.current,
							start: "top 78%",
							once: true,
						},
					},
				);
			}

			ScrollTrigger.create({
				trigger: ctaRef.current,
				start: "top 85%",
				onEnter: () => {
					gsap.fromTo(
						ctaRef.current,
						{ y: 50, opacity: 0 },
						{ y: 0, opacity: 1, duration: 1, ease: "power3.out" },
					);
				},
				once: true,
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	if (!visionConfig.heading && visionConfig.cards.length === 0) return null;

	const [leftTop, rightTop, centerCard, leftBottom, rightBottom] =
		visionConfig.cards;
	const { lead, emphasis } = splitVisionDescription(visionConfig.description);

	return (
		<section
			ref={sectionRef}
			id="vision"
			className="relative w-full overflow-hidden bg-offwhite pb-0 pt-24 text-softblack md:pt-32"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.52),rgba(247,242,234,0.3)_26%,rgba(247,242,234,0.72)_64%,rgba(247,242,234,0.9)_100%)]" />
			<div className="pointer-events-none absolute inset-0">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.42] mix-blend-multiply"
					style={{ backgroundImage: "url(/vision/section-mision-bg.png)" }}
				/>
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.58)_0%,rgba(247,242,234,0.08)_34%,rgba(247,242,234,0.28)_60%,rgba(247,242,234,0.82)_100%)]" />
			</div>

			<div className="relative z-10 mx-auto max-w-[120rem] px-6 md:px-10 xl:px-16">
				<div ref={introRef} className="mx-auto max-w-5xl text-center opacity-0">
					<h2 className="text-[3.5rem] font-bold leading-[0.95] tracking-tight text-primary sm:text-[4.5rem] md:text-[5.7rem] lg:text-[6.4rem]">
						{visionConfig.heading}
					</h2>
					<p className="mt-3 text-[2rem] leading-none text-[#ef8e2d] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[3.9rem]">
						{visionConfig.subheading}
					</p>

					{visionConfig.description && (
						<div className="mx-auto mt-7 max-w-4xl text-lg leading-relaxed text-softblack md:text-[2rem] md:leading-[1.35]">
							<p>{lead}</p>
							{emphasis ? (
								<p className="font-sans font-bold text-primary">{emphasis}</p>
							) : null}
						</div>
					)}
				</div>

				<div
					ref={compositionRef}
					className="relative mt-8 pb-20 md:mt-18 lg:pb-32"
				>
					<div className="grid gap-10 lg:hidden">
						{visionConfig.cards.map((card, index) => (
							<div
								key={card.title}
								className={`vision-fade-item rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-[0_18px_40px_rgba(177,102,46,0.12)] backdrop-blur-sm ${index === 2 ? "bg-white/72" : ""}`}
							>
								<div className="mx-auto w-full max-w-[15rem]">
									<VisionBubble card={card} />
								</div>
								<VisionCopyBlock
									card={card}
									align={index === 2 ? "center" : "left"}
									compact={index !== 2}
									className="mt-6"
								/>
							</div>
						))}
					</div>

					<div className="relative hidden min-h-[88rem] lg:block">
						<div className="pointer-events-none absolute inset-x-[18%] top-[10%] bottom-[10%] rounded-[3rem] bg-white/8 backdrop-blur-[1px]" />
						<svg
							className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
							viewBox="0 0 1200 1408"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<path
								d="M 212 184 C 268 170, 298 180, 346 205"
								fill="none"
								stroke="rgba(240,142,45,0.7)"
								strokeWidth="1.8"
								strokeDasharray="3 8"
								strokeLinecap="round"
							/>
							<path
								d="M 1018 212 C 970 204, 922 204, 840 205"
								fill="none"
								stroke="rgba(240,142,45,0.7)"
								strokeWidth="1.8"
								strokeDasharray="3 8"
								strokeLinecap="round"
							/>
							<path
								d="M 228 774 C 282 742, 324 718, 382 688"
								fill="none"
								stroke="rgba(240,142,45,0.7)"
								strokeWidth="1.8"
								strokeDasharray="3 8"
								strokeLinecap="round"
							/>
							<path
								d="M 1032 860 C 974 818, 920 780, 822 736"
								fill="none"
								stroke="rgba(240,142,45,0.7)"
								strokeWidth="1.8"
								strokeDasharray="3 8"
								strokeLinecap="round"
							/>
							<path
								d="M 600 948 C 602 862, 602 800, 602 708"
								fill="none"
								stroke="rgba(240,142,45,0.7)"
								strokeWidth="1.8"
								strokeDasharray="3 8"
								strokeLinecap="round"
							/>
						</svg>

						{leftTop ? (
							<VisionCopyBlock
								card={leftTop}
								compact
								className="vision-fade-item absolute left-0 top-[6%] max-w-[23rem] xl:left-[2%]"
							/>
						) : null}

						{rightTop ? (
							<VisionCopyBlock
								card={rightTop}
								compact
								align="right"
								className="vision-fade-item absolute right-0 top-[10%] max-w-[23rem] xl:right-[2%]"
							/>
						) : null}

						{leftBottom ? (
							<VisionCopyBlock
								card={leftBottom}
								compact
								className="vision-fade-item absolute left-0 top-[52%] max-w-[24rem] xl:left-[1%]"
							/>
						) : null}

						{rightBottom ? (
							<VisionCopyBlock
								card={rightBottom}
								compact
								align="right"
								className="vision-fade-item absolute right-0 top-[58%] max-w-[23rem] xl:right-[3%]"
							/>
						) : null}

						<div className="pointer-events-none absolute left-1/2 top-[13%] h-[66rem] w-[52rem] -translate-x-1/2">
							<div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(255,248,237,0.36)_0%,rgba(255,248,237,0.04)_52%,rgba(255,248,237,0)_72%)]" />
						</div>

						{leftTop ? (
							<div className="vision-fade-item absolute left-[26.5%] top-[12%] w-[12.5rem] xl:left-[28%] xl:w-[15rem]">
								<VisionBubble card={leftTop} />
							</div>
						) : null}

						{rightTop ? (
							<div className="vision-fade-item absolute right-[25.5%] top-[12%] w-[12.5rem] xl:right-[28%] xl:w-[15rem]">
								<VisionBubble card={rightTop} />
							</div>
						) : null}

						{leftBottom ? (
							<div className="vision-fade-item absolute left-[20%] top-[46%] w-[13.2rem] xl:left-[26%] xl:w-[16rem]">
								<VisionBubble
									card={leftBottom}
									imageClassName={
										leftBottom.mediaMode === "image" ? "scale-[1.03]" : ""
									}
								/>
							</div>
						) : null}

						{rightBottom ? (
							<div className="vision-fade-item absolute right-[25%] top-[46.5%] w-[11.2rem] xl:right-[28%] xl:w-[15rem]">
								<VisionBubble card={rightBottom} />
							</div>
						) : null}

						{centerCard ? (
							<>
								<div className="vision-fade-item absolute left-1/2 top-[29.5%] w-[14rem] -translate-x-1/2 xl:w-[16rem]">
									<VisionBubble card={centerCard} />
								</div>

								<VisionCopyBlock
									card={centerCard}
									align="center"
									className="vision-fade-item absolute left-1/2 top-[66%] w-[42rem] max-w-[calc(100%-8rem)] -translate-x-1/2"
								/>
							</>
						) : null}
					</div>
				</div>

				<div
					ref={ctaRef}
					className="relative left-1/2 right-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden bg-forest-dark opacity-0 shadow-[0_30px_90px_rgba(103,17,39,0.24)] md:mt-12"
				>
					<div
						className="absolute inset-0 bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `url(${visionConfig.closingBackgroundImage})`,
						}}
					/>
					<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(253,168,80,0.94)_0%,rgba(253,168,80,0.86)_45%,rgba(253,168,80,0.74)_100%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,211,163,0.3),transparent_36%)]" />
					<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(27,20,19,0.12)_100%)]" />

					<div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
						<div className="max-w-4xl text-center md:text-left">
							<p className="mb-4 text-sm font-body uppercase tracking-[0.32em] text-primary/80">
								{visionConfig.closingEyebrow}
							</p>
							<p className="text-3xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
								{visionConfig.closingTitle}
							</p>
							<div className="mt-8 space-y-4">
								{visionConfig.closingParagraphs.map((paragraph) => (
									<p
										key={paragraph}
										className="max-w-3xl text-lg font-body leading-relaxed text-softblack md:text-xl"
									>
										{paragraph}
									</p>
								))}
							</div>
							<a
								href={visionConfig.ctaHref}
								className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3 text-sm font-body font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary"
							>
								{visionConfig.ctaButtonText}
								<ArrowUpRight className="h-4 w-4" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
