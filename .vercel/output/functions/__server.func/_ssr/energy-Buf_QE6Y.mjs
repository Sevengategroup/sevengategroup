import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ServicesNavigation } from "./ServicesNavigation-CYs-3c2m.mjs";
import { t as oil_and_gas_default } from "./oil and gas-BBKyFhIg.mjs";
import { t as thermal_energy_default } from "./thermal-energy-DuIBRpe6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/energy-Buf_QE6Y.js
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
function EnergyComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-20 md:h-28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pt-8 md:pt-12 pb-12 md:pb-16 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: staggerContainer,
					className: "flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeInUp,
							className: "text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-2 leading-relaxed",
							children: "Sevengate Group"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							variants: fadeInUp,
							className: "font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-4 leading-[1.1]",
							children: "Energy Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeInUp,
							className: "text-muted-foreground font-light leading-relaxed max-w-3xl text-lg",
							children: "We provide comprehensive industrial solutions across the energy sector, supporting critical operations with high-quality services built on a commitment to innovation and operational excellence."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 md:py-16 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: staggerContainer,
						className: "flex flex-col gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
								variants: fadeInUp,
								className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight",
								children: "Oil & Gas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeInUp,
								className: "text-muted-foreground font-light leading-relaxed",
								children: "Serving Africa's oil and gas industry from wellhead to end-user. We provide comprehensive industrial gas solutions that support critical operations, and deliver high-quality manufacturing and distribution solutions built on a commitment to quality, innovation, and operational excellence."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeInUp,
								className: "text-muted-foreground font-light leading-relaxed",
								children: "Our capabilities span all three segments of the oil and gas value chain—Upstream, Midstream & Downstream—making us a versatile and comprehensive partner for operators with diverse asset portfolios..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: fadeInUp,
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/oil-and-gas",
									className: "inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
									children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: fadeInUp,
						className: "relative w-full aspect-[4/3] overflow-hidden bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: oil_and_gas_default,
							alt: "Oil and gas operations",
							className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-border/50 max-w-7xl mx-auto" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 md:py-16 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: fadeInUp,
						className: "relative w-full aspect-[4/3] overflow-hidden bg-muted order-2 lg:order-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: thermal_energy_default,
							alt: "Thermal and Green Energy",
							className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: staggerContainer,
						className: "flex flex-col gap-6 order-1 lg:order-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
								variants: fadeInUp,
								className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#54A6EA] uppercase tracking-tight",
								children: "Power"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
								variants: fadeInUp,
								className: "font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight mt-2",
								children: "Thermal & Green Energy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeInUp,
								className: "text-muted-foreground font-light leading-relaxed",
								children: "Integrated power solutions for a resilient energy future. We deliver comprehensive power generation solutions that meet evolving energy requirements, from conventional thermal plants to innovative renewable technologies, ensuring reliable and sustainable energy."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeInUp,
								className: "text-muted-foreground font-light leading-relaxed",
								children: "Sevengate Group is a trusted technical services and OEM equipment partner for generation companies (GENCOs) operating thermal and gas-fired power plants across Africa..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: fadeInUp,
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/power/thermal-energy",
									className: "inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
									children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesNavigation, { currentPath: "/services/energy" }),
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
					className: "max-w-3xl mx-auto text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight mb-6",
							children: "Ready to Partner With Us?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed font-light mb-10 text-lg",
							children: "Discuss your energy needs with our experts and discover how Sevengate Group can power your next project."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
							children: "Contact Us"
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
export { EnergyComponent as component };
