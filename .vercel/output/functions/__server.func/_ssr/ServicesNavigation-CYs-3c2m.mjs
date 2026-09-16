import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as ShieldCheck, o as BuildingComplex, r as Pickaxe, s as ArrowRight, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServicesNavigation-CYs-3c2m.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		title: "Energy",
		path: "/services/energy",
		description: "Comprehensive oil, gas, and power generation solutions.",
		icon: Zap
	},
	{
		title: "Construction & Infrastructure",
		path: "/services/construction",
		description: "Civil engineering and infrastructure development.",
		icon: BuildingComplex
	},
	{
		title: "Mining & Solid Minerals",
		path: "/services/mining",
		description: "Exploration and mineral processing.",
		icon: Pickaxe
	},
	{
		title: "Other Services",
		path: "/services/other-services",
		description: "Corrosion control and specialized solutions.",
		icon: ShieldCheck
	}
];
function ServicesNavigation({ currentPath }) {
	const otherServices = services.filter((service) => service.path !== currentPath);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-muted/30 border-y border-border py-20 mt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight",
					children: "Explore Other Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-20 h-1 bg-accent mt-6" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
				children: otherServices.map((service, index) => {
					const Icon = service.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: index * .1,
							duration: .5
						},
						className: "group relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: service.path,
							className: "block h-full bg-background border border-border p-8 transition-all duration-300 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-foreground mb-3 uppercase tracking-wide group-hover:text-accent transition-colors",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground font-light mb-8",
									children: service.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-8 left-8 right-8 flex items-center text-xs font-semibold uppercase tracking-widest text-accent mt-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" })]
								})
							]
						})
					}, service.path);
				})
			})]
		})
	});
}
//#endregion
export { ServicesNavigation as t };
