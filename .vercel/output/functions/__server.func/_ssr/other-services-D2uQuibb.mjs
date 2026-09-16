import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ServicesNavigation } from "./ServicesNavigation-CYs-3c2m.mjs";
import { t as CoverflowCarousel } from "./coverflow-carousel-B_nzzQes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/other-services-D2uQuibb.js
var import_jsx_runtime = require_jsx_runtime();
var istockphoto_standard_16163592_default = "/assets/istockphoto_standard_16163592-a5O0aWyk.jpg";
var corrosion_default = "/assets/corrosion-B6jxTrbs.jpeg";
var corrosion_control_default = "/assets/corrosion-control-DZTwcGhu.jpeg";
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
function OtherServicesComponent() {
	const corrosionSlides = [corrosion_default, corrosion_control_default].map((src, i) => ({
		src,
		alt: `Corrosion Control ${i + 1}`
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-[50svh] md:h-[60svh] w-full flex items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/other-services.jpeg",
						alt: "Sevengate Group Specialised Services",
						className: "w-full h-full object-cover object-center"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/50" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 text-center container-x mt-16 md:mt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: "hidden",
						animate: "visible",
						variants: fadeInUp,
						className: "font-display text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-4 drop-shadow-md uppercase",
						children: "Other Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: "hidden",
						animate: "visible",
						variants: {
							hidden: {
								opacity: 0,
								y: 20
							},
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									duration: .6,
									delay: .2
								}
							}
						},
						className: "text-white/80 font-light tracking-[0.2em] uppercase text-sm md:text-base drop-shadow",
						children: "Sevengate Group Specialised Services"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pt-12 md:pt-16 pb-8 md:pb-12 container-x max-w-4xl mx-auto text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: staggerContainer,
					className: "flex flex-col gap-6 items-center w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
						variants: fadeInUp,
						className: "font-display text-xl md:text-2xl font-semibold text-foreground uppercase tracking-wide leading-relaxed",
						children: "Delivering Turnkey Solutions And Asset Integrity Across Industries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground font-light leading-relaxed md:text-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeInUp,
							children: "Beyond our core sectors, we provide specialized services including the design and installation of LPG gas networks, as well as comprehensive corrosion control and asset management programs to protect your critical infrastructure."
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
									children: "METERED LPG/COOKING GAS SUPPLY AND NETWORK"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We specialize in the design, installation, commissioning, operation, and maintenance of Liquefied Petroleum Gas (LPG) distribution networks for residential estates, commercial developments, industrial facilities, and institutional clients. Our systems are designed to provide safe, efficient, and uninterrupted gas supply while complying with all relevant industry regulations and safety requirements." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/services/details/$slug",
											params: { slug: "lpg-gas-network" },
											className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group",
											children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												size: 16,
												className: "transition-transform group-hover:translate-x-1"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										variants: fadeInUp,
										className: "relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-muted mt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: istockphoto_standard_16163592_default,
											alt: "LPG Gas Network",
											className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight",
									children: [
										"Corrosion Control &",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Management"
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Protecting valuable assets from corrosion is essential to ensuring long-term operational reliability and cost efficiency. We provide comprehensive corrosion control and asset integrity solutions, including corrosion assessments, protective coating systems, cathodic protection, inspections, integrity monitoring, and preventive maintenance programs for industrial and infrastructure assets." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/services/details/$slug",
											params: { slug: "corrosion-control" },
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
											slides: corrosionSlides,
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
									children: "Industrial Gases"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We provide comprehensive industrial gas solutions that support critical operations across manufacturing, healthcare, oil and gas, energy, food processing, and other industrial sectors. Our services include the production, storage, handling, transportation, and distribution of industrial gases while maintaining the highest standards of quality, reliability, and operational safety." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/services/details/$slug",
										params: { slug: "industrial-gases" },
										className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group",
										children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 16,
											className: "transition-transform group-hover:translate-x-1"
										})]
									})
								})]
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight",
									children: [
										"Manufacturing &",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Distribution"
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our manufacturing and distribution operations are built on a commitment to quality, innovation, and operational excellence. We produce and supply high-quality industrial products, equipment, and engineered solutions that meet international standards and support the diverse needs of clients across multiple industries." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/services/details/$slug",
										params: { slug: "manufacturing-distribution" },
										className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group",
										children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											size: 16,
											className: "transition-transform group-hover:translate-x-1"
										})]
									})
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesNavigation, { currentPath: "/services/other-services" }),
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
							children: "Need Expert Specialized Services?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed font-light mb-10 text-lg",
							children: "From deploying robust LPG networks to implementing advanced corrosion control systems, Sevengate Group has the technical expertise to secure your operations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
							children: "Contact Our Team"
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
export { OtherServicesComponent as component };
