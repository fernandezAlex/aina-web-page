import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	ArrowUpRight,
	Globe,
	GraduationCap,
	HandHeart,
	Heart,
	Users,
} from "lucide-react";
import { useSiteContent } from "../i18n";

gsap.registerPlugin(ScrollTrigger);

const heroImage = `${import.meta.env.BASE_URL}aina/main/aina-child-embrace.jpg`;
const membershipImages = [
	`${import.meta.env.BASE_URL}aina/join/dscf1500.jpg`,
	`${import.meta.env.BASE_URL}aina/join/join-gallery-1.jpg`,
	`${import.meta.env.BASE_URL}aina/join/join-gallery-2.jpg`,
] as const;
const secondaryImages = [
	`${import.meta.env.BASE_URL}aina/main/aina-join-volunteer-terrain.jpg`,
	`${import.meta.env.BASE_URL}aina/main/aina-join-institute-group.jpg`,
] as const;

const membershipIcons = [Users, HandHeart, Globe] as const;
const membershipTones = [
	{
		iconShell: "bg-primary text-white",
		title: "text-primary",
		button: "bg-primary text-white hover:bg-[#a60d30]",
	},
	{
		iconShell: "bg-[#ff8b14] text-white",
		title: "text-[#f47d0c]",
		button: "bg-[#ff8b14] text-white hover:bg-[#f47d0c]",
	},
	{
		iconShell: "bg-[#efa513] text-white",
		title: "text-[#e99e06]",
		button: "bg-[#efa513] text-white hover:bg-[#db9308]",
	},
] as const;

function JoinButton({
	href,
	label,
	className,
}: {
	href: string;
	label: string;
	className: string;
}) {
	const opensInNewTab = href.startsWith("http");

	return (
		<a
			href={href}
			target={opensInNewTab ? "_blank" : undefined}
			rel={opensInNewTab ? "noreferrer" : undefined}
			className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-base font-sans font-bold transition-all duration-300 hover:-translate-y-0.5 ${className}`}
		>
			{label}
			<ArrowUpRight className="h-4 w-4" strokeWidth={2} />
		</a>
	);
}

function JoinSectionHeading({
	icon,
	title,
	titleClassName,
}: {
	icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
	title: string;
	titleClassName?: string;
}) {
	const Icon = icon;

	return (
		<div className="flex flex-col gap-5 sm:flex-row sm:items-start">
			<div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_18px_38px_rgba(169,17,47,0.18)] sm:h-24 sm:w-24">
				<Icon className="h-10 w-10" strokeWidth={1.8} />
			</div>
			<div>
				<h3
					className={`text-[2.35rem]  font-bold leading-[0.96] text-primary md:text-[3.2rem] ${titleClassName ?? ""}`}
				>
					{title}
				</h3>
				<div className="mt-4 h-px w-16 bg-[#f09838]" />
			</div>
		</div>
	);
}

export function Join() {
	const { join } = useSiteContent();
	const sectionRef = useRef<HTMLElement>(null);
	const animatedRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (reduceMotion) return;

		const ctx = gsap.context(() => {
			const items = gsap.utils.toArray<HTMLElement>(".join-fade-item");
			if (items.length) {
				gsap.fromTo(
					items,
					{ y: 42, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.95,
						ease: "power3.out",
						stagger: 0.1,
						scrollTrigger: {
							trigger: animatedRef.current,
							start: "top 82%",
							once: true,
						},
					},
				);
			}
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const supportBlock = join.blocks[0];
	const volunteerBlock = join.blocks[1];
	const instituteBlock = join.blocks[2];

	return (
		<section
			ref={sectionRef}
			id="unete"
			className="relative overflow-hidden bg-offwhite py-16 md:py-24"
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,168,0.35),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(244,155,64,0.16),transparent_26%)]" />

			<div className="relative mx-auto max-w-7xl px-6 md:px-12">
				<div ref={animatedRef} className="flex flex-col gap-6">
					<div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.9fr)] lg:gap-10">
						<div className="join-fade-item flex flex-col justify-center pt-2 lg:pr-6">
							<div className="flex items-center gap-4 text-[#f27f14]">
								<p className="text-[3rem]  italic leading-none md:text-[4rem]">
									{join.eyebrow}
								</p>
								<div className="flex flex-1 items-center gap-3">
									<div className="h-px flex-1 bg-current/65" />
									<Heart className="h-8 w-8" strokeWidth={1.8} />
								</div>
							</div>

							<h2 className="mt-3  text-[3.6rem] font-bold leading-[0.92] tracking-tight text-primary md:text-[5.2rem] xl:text-[6.2rem]">
								{join.title}
							</h2>
							<div className="mt-6 h-px w-16 bg-[#f09838]" />
							<p className="mt-6  text-xl leading-relaxed text-softblack md:text-[2rem]">
								{join.description}
							</p>
						</div>

						<div className="join-fade-item relative min-h-[22rem] overflow-hidden rounded-[2.2rem] bg-[#f3e1d0] shadow-[0_26px_60px_rgba(147,89,35,0.18)] md:min-h-[32rem]">
							<img
								src={heroImage}
								alt="Aina abraza a un niño en Nepal"
								className="h-full w-full object-cover"
								loading="lazy"
							/>
							<div className="pointer-events-none absolute inset-y-0 left-0 w-[42%] bg-[linear-gradient(90deg,rgba(247,242,234,0.96)_0%,rgba(247,242,234,0.28)_68%,rgba(247,242,234,0)_100%)]" />
							<div className="pointer-events-none absolute -left-12 top-[-3%] h-[106%] w-[44%] rounded-full border-[8px] border-white/65 opacity-80" />
							<div className="pointer-events-none absolute -left-7 top-[3%] h-[96%] w-[36%] rounded-full border border-[#edd6c1]/90 opacity-90" />
						</div>
					</div>

					<article className="join-fade-item rounded-[2rem] border border-[#efd7c2] bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,250,246,0.92)_100%)] p-4 shadow-[0_20px_50px_rgba(138,80,31,0.08)] md:rounded-[2.5rem] md:p-8 xl:p-10">
						<div className="mx-auto max-w-5xl text-left">
							<div className="flex items-center justify-center gap-4">
								<div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_16px_34px_rgba(169,17,47,0.18)]">
									<Users className="h-7 w-7" strokeWidth={1.8} />
								</div>
								<br />
								<h3 className="text-[2.35rem] font-bold leading-[0.96] text-primary md:text-[3.2rem]">
									{supportBlock.title}
								</h3>
								<br />
							</div>
							<div className="mx-auto mt-4 h-px w-16 bg-[#f09838]" />
							<br />
							<div className="text-left md:text-[1.26rem]">
								<p>{supportBlock.summary}</p>
								<p>{supportBlock.description}</p>
							</div>
						</div>

						<div className="mt-8 grid gap-4 lg:grid-cols-3 xl:gap-5">
							{supportBlock.actions.map((action, index) => {
								const Icon = membershipIcons[index];
								const tone = membershipTones[index];

								return (
									<article
										key={action.href}
										className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[#ecd5c0] bg-white shadow-[0_16px_40px_rgba(138,80,31,0.08)]"
									>
										<div className="aspect-[1.24/1] overflow-hidden">
											<img
												src={membershipImages[index] ?? membershipImages[0]}
												alt={action.label}
												className={`h-full w-full object-cover ${
													index === 0
														? "object-top"
														: index === 2
															? "scale-[1.16] object-[52%_18%]"
															: ""
												}`}
												loading="lazy"
											/>
										</div>

										<div className="relative flex flex-1 flex-col px-5 pb-5 pt-10 text-center md:px-6 md:pb-6">
											<div
												className={`absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-white shadow-[0_14px_28px_rgba(138,80,31,0.12)] ${tone.iconShell}`}
											>
												<Icon className="h-7 w-7" strokeWidth={1.8} />
											</div>

											<h4
												className={`mx-auto text-[2rem]  font-bold leading-[1] ${tone.title}`}
											>
												{action.label}
											</h4>
											<p className="mx-auto mt-6 text-lg text-softblack md:text-[1.26rem]">
												{action.description}
											</p>

											<div className="mt-auto pt-6">
												<JoinButton
													href={action.href}
													label={action.label}
													className={`${tone.button} w-full text-center`}
												/>
											</div>
										</div>
									</article>
								);
							})}
						</div>
					</article>

					<article className="join-fade-item overflow-hidden rounded-[2rem] border border-[#efd7c2] bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(255,248,242,0.96)_52%,rgba(255,230,196,0.68)_100%)] shadow-[0_20px_50px_rgba(138,80,31,0.08)]">
						<div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(20rem,0.92fr)]">
							<div className="flex flex-col justify-center px-6 py-7 md:px-8 md:py-10 xl:px-10">
								<JoinSectionHeading
									icon={HandHeart}
									title={volunteerBlock.title}
								/>
								<p className="mt-5 text-lg leading-relaxed text-softblack md:text-[1.34rem]">
									{volunteerBlock.summary}
								</p>
								<div className="mt-7">
									<JoinButton
										href={volunteerBlock.actions[0]?.href ?? "#"}
										label={volunteerBlock.actions[0]?.label ?? ""}
										className="bg-primary text-white hover:bg-[#a60d30]"
									/>
								</div>
							</div>

							<div className="min-h-[20rem] lg:min-h-full">
								<img
									src={secondaryImages[0]}
									alt="Aina comparte un momento cercano con un niño en Nepal"
									className="h-full w-full object-cover"
									loading="lazy"
								/>
							</div>
						</div>
					</article>

					<article className="join-fade-item overflow-hidden rounded-[2rem] border border-[#efd7c2] bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(255,248,242,0.96)_52%,rgba(255,236,208,0.72)_100%)] shadow-[0_20px_50px_rgba(138,80,31,0.08)]">
						<div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(20rem,0.92fr)]">
							<div className="flex flex-col justify-center px-6 py-7 md:px-8 md:py-10 xl:px-10">
								<JoinSectionHeading
									icon={GraduationCap}
									title={instituteBlock.title}
									titleClassName="text-[#f27f14]"
								/>
								<p className="mt-5 text-lg leading-relaxed text-softblack md:text-[1.34rem]">
									{instituteBlock.summary}
								</p>
								<p className="mt-5  text-lg leading-relaxed text-softblack md:text-[1.34rem]">
									{instituteBlock.description}
								</p>
								{instituteBlock.note ? (
									<p className="mt-5 text-xl font-sans font-bold text-[#f27f14] md:text-[1.45rem]">
										{instituteBlock.note}
									</p>
								) : null}
								<div className="mt-7">
									<JoinButton
										href={instituteBlock.actions[0]?.href ?? "#"}
										label={instituteBlock.actions[0]?.label ?? ""}
										className="bg-[#ff8b14] text-white hover:bg-[#f27f14]"
									/>
								</div>
							</div>

							<div className="min-h-[20rem] lg:min-h-full">
								<img
									src={secondaryImages[1]}
									alt="Espacio de aprendizaje vinculado a Aina Institute"
									className="h-full w-full object-cover"
									loading="lazy"
								/>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}
