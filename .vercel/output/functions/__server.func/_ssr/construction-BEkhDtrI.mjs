import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ServicesNavigation } from "./ServicesNavigation-CYs-3c2m.mjs";
import { t as CoverflowCarousel } from "./coverflow-carousel-B_nzzQes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/construction-BEkhDtrI.js
var import_jsx_runtime = require_jsx_runtime();
var construction_default = "/assets/construction-sredLtlO.webp";
var construction1_default = "/assets/construction1-CdJfPkAT.jpeg";
var construction2_default = "/assets/construction2-Bp35OWIz.jpeg";
var construction3_default = "/assets/construction3-o1UUUeGC.jpeg";
var construction4_default = "/assets/construction4-D5IJlU72.jpeg";
var infrastructure_default = "/assets/infrastructure-eNtaXn_L.jpeg";
var infrastructure1_default = "/assets/infrastructure1-wCADB4eo.jpeg";
var infrastrucure2_default = "/assets/infrastrucure2-soz2SV-S.jpeg";
var fadeInUp = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: .6 }
	}
};
var staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
function ConstructionComponent() {
	const constructionSlides = [
		construction1_default,
		construction2_default,
		construction3_default,
		construction4_default
	].map((src, i) => ({
		src,
		alt: `Construction Project ${i + 1}`
	}));
	const infrastructureSlides = [
		infrastructure_default,
		infrastructure1_default,
		infrastrucure2_default
	].map((src, i) => ({
		src,
		alt: `Infrastructure Project ${i + 1}`
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 md:h-28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pt-8 md:pt-12 pb-12 md:pb-16 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: staggerContainer,
						className: "flex flex-col gap-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
								variants: fadeInUp,
								className: "text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-4 leading-relaxed",
								children: [
									"Sevengate Group:",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Building Africa With Precision"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: fadeInUp,
								className: "font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]",
								children: [
									"Construction &",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Infrastructure",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Services"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
								variants: fadeInUp,
								className: "font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed",
								children: [
									"End-To-End Construction And Infrastructure",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Delivery Across Africa"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: fadeInUp,
									children: "We deliver comprehensive construction solutions that transform concepts into durable, high-quality infrastructure, and develop resilient infrastructure that supports economic growth, industrial development, and improved quality of life."
								})
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: staggerContainer,
						className: "flex flex-col gap-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeInUp,
							className: "relative w-full aspect-[4/3] overflow-hidden bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: construction_default,
								alt: "Bridge under construction",
								className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pt-8 md:pt-12 pb-16 md:pb-24 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-16 md:gap-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							whileInView: "visible",
							viewport: {
								once: true,
								margin: "-100px"
							},
							variants: fadeInUp,
							className: "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-4 lg:col-span-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight",
									children: "Construction"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We deliver comprehensive construction solutions that transform concepts into durable, high-quality infrastructure across multiple domains." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/services/details/$slug",
											params: { slug: "construction" },
											className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group",
											children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												size: 16,
												className: "transition-transform group-hover:translate-x-1"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										variants: fadeInUp,
										className: "mt-10 w-full overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverflowCarousel, {
											slides: constructionSlides,
											showNavigation: true,
											showPagination: true,
											cardWidth: "clamp(280px, 60vw, 640px)"
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-border/50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							whileInView: "visible",
							viewport: {
								once: true,
								margin: "-100px"
							},
							variants: fadeInUp,
							className: "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-4 lg:col-span-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight",
									children: "Infrastructure"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We develop resilient infrastructure that supports economic growth, industrial development, and improved quality of life." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/services/details/$slug",
											params: { slug: "infrastructure" },
											className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group",
											children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												size: 16,
												className: "transition-transform group-hover:translate-x-1"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										variants: fadeInUp,
										className: "mt-10 w-full overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverflowCarousel, {
											slides: infrastructureSlides,
											showNavigation: true,
											showPagination: true,
											cardWidth: "clamp(280px, 60vw, 640px)"
										})
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesNavigation, { currentPath: "/services/construction" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: fadeInUp,
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight mb-6",
							children: "Have A Construction Or Infrastructure Project You Need To Deliver?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed font-light mb-10 text-lg",
							children: "Sevengate Group brings engineering expertise, procurement capability, and experienced project delivery teams to construction and infrastructure projects of all scales across Africa."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
							children: "Discuss Your Project"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {})
		]
	});
}
//#endregion
export { ConstructionComponent as component };
