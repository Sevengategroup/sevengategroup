import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ServicesNavigation } from "./ServicesNavigation-CYs-3c2m.mjs";
import { t as power_default } from "./power-B9sLWp7n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/power-2CwFiewB.js
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
function PowerComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 md:h-28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-8 md:pt-12 pb-12 md:pb-16 container-x max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
									"Keeping Africa's Lights On"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: fadeInUp,
								className: "font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]",
								children: [
									"Power Sector",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Services"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
								variants: fadeInUp,
								className: "font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed",
								children: "Specialist Services For Thermal Power Generation Companies"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: fadeInUp,
									children: "We provide end-to-end conventional power solutions that ensure reliable electricity generation, and remain committed to delivering innovative renewable energy solutions that promote environmental sustainability and long-term energy resilience."
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
								src: power_default,
								alt: "Power Sector Services",
								className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: fadeInUp,
					className: "mt-8 text-muted-foreground font-light leading-relaxed"
				})]
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
									children: "Conventional Power"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We provide end-to-end conventional power solutions that ensure reliable electricity generation, transmission, and distribution. Our services include engineering, procurement, construction, operation, maintenance, rehabilitation, and optimization of thermal and gas-fired power plants, helping clients achieve maximum operational performance and energy security." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/services/details/$slug",
										params: { slug: "conventional-power" },
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight",
									children: "Green Energy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As the global energy landscape evolves, we remain committed to delivering innovative renewable energy solutions that promote environmental sustainability and long-term energy resilience. Our expertise includes solar photovoltaic systems, hybrid energy solutions, battery energy storage, energy efficiency programs, and other clean energy technologies tailored to residential, commercial, and industrial applications." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/services/details/$slug",
										params: { slug: "green-energy" },
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesNavigation, { currentPath: "/services/power" }),
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
							children: "Looking For A Technical Partner To Keep Your Plant Running?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed font-light mb-10 text-lg",
							children: "Whether you need emergency spare parts, a major turbine overhaul, or routine balance of plant maintenance, Sevengate Group has the expertise to support your operations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
							children: "Speak With Our Power Team"
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
export { PowerComponent as component };
