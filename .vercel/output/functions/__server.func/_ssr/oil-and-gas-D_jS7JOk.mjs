import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ServicesNavigation } from "./ServicesNavigation-CYs-3c2m.mjs";
import { t as oil_and_gas_default } from "./oil and gas-BBKyFhIg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/oil-and-gas-D_jS7JOk.js
var import_jsx_runtime = require_jsx_runtime();
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
function OilAndGasComponent() {
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
									"Sevengate Group",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Full Value Chain Coverage"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: fadeInUp,
								className: "font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]",
								children: [
									"Oil & Gas",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Services"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
								variants: fadeInUp,
								className: "font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed",
								children: "Serving Africa's Oil And Gas Industry From Wellhead To End-User"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: fadeInUp,
									children: "We provide comprehensive industrial gas solutions that support critical operations, and deliver high-quality manufacturing and distribution solutions built on a commitment to quality, innovation, and operational excellence."
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
								src: oil_and_gas_default,
								alt: "Oil and gas operations",
								className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
							})
						})
					})]
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
					className: "flex flex-col gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: fadeInUp,
									className: "text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-2",
									children: "Value Chain Coverage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
									variants: fadeInUp,
									className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight mb-6",
									children: "Upstream, Midstream & Downstream"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: fadeInUp,
									className: "text-muted-foreground font-light leading-relaxed",
									children: "Sevengate Group’s capabilities span all three segments of the oil and gas value chain, making us a versatile and comprehensive partner for independent operators with diverse asset portfolios."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl font-semibold text-foreground uppercase",
											children: "Upstream"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground font-light leading-relaxed flex-grow",
											children: "Supporting exploration and production operations with OEM equipment supply, technical services, and maintenance solutions that maximise production uptime and asset integrity."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/services/details/$slug",
												params: { slug: "upstream" },
												className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group",
												children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													size: 14,
													className: "transition-transform group-hover:translate-x-1"
												})]
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl font-semibold text-foreground uppercase",
											children: "Midstream"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground font-light leading-relaxed flex-grow",
											children: "Providing pipeline services, procurement support, and technical expertise to operators managing transportation, storage, and processing infrastructure."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/services/details/$slug",
												params: { slug: "midstream" },
												className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group",
												children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													size: 14,
													className: "transition-transform group-hover:translate-x-1"
												})]
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl font-semibold text-foreground uppercase",
											children: "Downstream"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground font-light leading-relaxed flex-grow",
											children: "Delivering inspection, maintenance, and equipment supply services to refining and distribution facilities, ensuring regulatory compliance and operational continuity."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/services/details/$slug",
												params: { slug: "downstream" },
												className: "inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group",
												children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													size: 14,
													className: "transition-transform group-hover:translate-x-1"
												})]
											})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeInUp,
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-foreground p-8 md:p-12 lg:p-16 flex flex-col gap-8 items-center text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-accent text-xs font-semibold tracking-[0.3em] uppercase",
									children: "Why Choose Sevengate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-white/5 border border-white/10 p-8 md:p-12 w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl md:text-2xl lg:text-3xl text-white font-light italic leading-relaxed",
										children: "\"We bring international standards and OEM-certified equipment to every oil and gas engagement backed by 16 years of African industry experience.\""
									})
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesNavigation, { currentPath: "/services/oil-and-gas" }),
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
							children: "Looking For A Reliable Oil And Gas Services Partner In Africa?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed font-light mb-10 text-lg",
							children: "Whether you need OEM parts, maintenance support, technical consulting, or full procurement and logistics management, Sevengate Group has the expertise and the network to deliver."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
							children: "Request A Consultation"
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
export { OilAndGasComponent as component };
