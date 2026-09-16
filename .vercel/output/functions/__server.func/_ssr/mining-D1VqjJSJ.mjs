import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { b as ArrowDown01Icon } from "../_libs/hugeicons__core-free-icons.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ServicesNavigation } from "./ServicesNavigation-CYs-3c2m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mining-D1VqjJSJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var solid_minerals_mining_default = "/assets/solid%20minerals%20mining-CpNM5RR1.webp";
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
var focusAreas = [
	{
		slug: "mine-development",
		title: "Mine Development & Operations",
		content: "End-to-end mine development and operational management, applying rigorous engineering standards and sustainable practices to extract value efficiently and safely."
	},
	{
		slug: "mineral-processing",
		title: "Mineral Processing",
		content: "Advanced processing solutions designed to maximize yield and purity, leveraging state-of-the-art technology to ensure high-grade mineral output for global markets."
	},
	{
		slug: "technical-partnerships",
		title: "Technical Partnerships & Capability Building",
		content: "Collaborating with leading global technical partners to build local capability, transfer specialized knowledge, and establish world-class mining operations in Nigeria."
	}
];
function SolidMineralsComponent() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 md:h-28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-8 md:pt-12 pb-12 md:pb-16 container-x max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
										"Sevengate Group",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Expanding Into Nigeria's Mining Sector"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
									variants: fadeInUp,
									className: "font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]",
									children: "Mining"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
									variants: fadeInUp,
									className: "font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed",
									children: "A Strategic Expansion Into Nigeria's Mining Sector"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
										variants: fadeInUp,
										children: "Sevengate Group is expanding into one of Nigeria's most promising and strategically important industries Mining. As Nigeria continues to diversify its economy beyond oil and gas, the country's vast and largely untapped reserves of  Mining present a significant opportunity for investment, development, and value creation."
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
							className: "flex flex-col gap-10 sticky top-36",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: fadeInUp,
								className: "relative w-full aspect-[4/3] overflow-hidden bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: solid_minerals_mining_default,
									alt: "Mining operations",
									className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: fadeInUp,
						className: "mt-8 text-muted-foreground font-light leading-relaxed",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Building on 16 years of operational excellence across the energy and infrastructure sectors, Sevengate Group is bringing the same commitment to quality, safety, and technical rigour that has defined our work in oil, gas, power, and construction to our new mining operations. We are establishing a credible, professionally managed presence in Nigeria's Mining sector positioned to grow as the industry matures and regulatory frameworks continue to develop." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: fadeInUp,
						className: "flex flex-col gap-6 max-w-4xl mx-auto mt-16 md:mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight mb-2",
								children: "Our Focus Areas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-8",
								children: "Where Sevengate Group Is Building Capability"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col border-t border-border",
							children: focusAreas.map((area, index) => {
								const isOpen = openIndex === index;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b border-border overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setOpenIndex(isOpen ? null : index),
										className: "flex items-center justify-between w-full py-4 md:py-5 px-2 hover:bg-muted/30 transition-colors group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `font-sans text-[15px] transition-colors ${isOpen ? "text-accent font-medium" : "text-foreground font-light"}`,
											children: area.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 ml-4 flex items-center justify-center w-8 h-8",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: ArrowDown01Icon,
												className: `w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : "text-muted-foreground group-hover:text-foreground"}`,
												strokeWidth: 1.5
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											height: 0,
											opacity: 0
										},
										animate: {
											height: "auto",
											opacity: 1
										},
										exit: {
											height: 0,
											opacity: 0
										},
										transition: {
											duration: .3,
											ease: "easeInOut"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "px-2 pb-5 text-muted-foreground leading-relaxed font-light text-sm flex flex-col gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: area.content }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/services/details/$slug",
												params: { slug: area.slug },
												className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group",
												children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													size: 14,
													className: "transition-transform group-hover:translate-x-1"
												})]
											}) })]
										})
									}) })]
								}, index);
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-foreground py-12 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x max-w-5xl text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: fadeInUp,
						className: "text-white font-sans text-lg md:text-xl font-light italic leading-relaxed",
						children: "Nigeria holds over 40 different Mining resources, including limestone, coal, iron ore, gold, and lithium, many of which remain significantly underexplored and underdeveloped."
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: staggerContainer,
					className: "max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeInUp,
							className: "text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-2",
							children: "Our Approach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							variants: fadeInUp,
							className: "font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight mb-8",
							children: "How We Are Entering The Sector"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeInUp,
							className: "text-muted-foreground font-light leading-relaxed mb-6",
							children: "Sevengate Group's expansion into Mining is being approached with the same careful, professional discipline that has characterised our growth across other sectors. We are:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.ul, {
							variants: fadeInUp,
							className: "list-disc list-outside ml-5 space-y-4 text-muted-foreground font-light leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Conducting thorough technical and commercial assessments of prospective mining opportunities in Nigeria." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Building a dedicated mining team with the technical expertise and operational experience required to develop and run mining assets professionally." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Establishing partnerships with experienced international mining operators and equipment suppliers to supplement our in-house capabilities." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Engaging proactively with Nigerian regulatory authorities and communities to ensure our mining activities are conducted responsibly and in compliance with all applicable laws and regulations." })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-16 md:pb-24 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: fadeInUp,
					className: "flex flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-accent text-sm font-semibold tracking-[0.1em] uppercase",
						children: "Why Sevengate Group In Mining"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-foreground p-8 md:p-12 lg:p-16 flex flex-col gap-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border border-white/10 bg-white/5 p-8 md:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg md:text-xl lg:text-2xl text-white font-light italic leading-relaxed text-center",
								children: "\"We are bringing 16 years of African operational excellence, a culture of technical rigour, and the discipline of internationally experienced professionals to Nigeria's Mining sector.\""
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-white/80 font-light leading-relaxed text-base md:text-lg",
							children: [
								"While our mining operations are at an early stage, our entry into this sector is not speculative. It is a deliberate, strategic decision backed by the same foundations that have made ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "font-medium text-white",
									children: "Sevengate Group"
								}),
								" a trusted name in energy and infrastructure across Africa. We invite investors, partners, and prospective clients to engage with us as we grow this important new chapter of the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "font-medium text-white",
									children: "Sevengate Group"
								}),
								" story."
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesNavigation, { currentPath: "/services/mining" }),
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
							children: "Interested In Partnering With Us In Mining?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed font-light mb-10 text-lg",
							children: "Sevengate Group welcomes conversations with potential investors, technical partners, and stakeholders who share our vision for a professionally developed Nigerian Mining sector."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
							children: "Get In Touch"
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
export { SolidMineralsComponent as component };
