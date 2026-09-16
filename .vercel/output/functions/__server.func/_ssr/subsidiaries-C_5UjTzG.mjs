import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/subsidiaries-C_5UjTzG.js
var import_jsx_runtime = require_jsx_runtime();
function SubsidiariesComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-gray-50 text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-32 pb-20 md:pt-48 md:pb-32 bg-foreground text-white overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/hero2.jpeg",
						alt: "Subsidiaries Banner",
						className: "absolute inset-0 w-full h-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "max-w-2xl drop-shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-[0.2em] text-luxury-gold mb-4 drop-shadow-md",
								children: "Our Network"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight mb-6 drop-shadow-xl text-white",
								children: [
									"Our ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-orange-300",
										children: "Subsidiaries"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-white/90 leading-relaxed max-w-xl drop-shadow-md font-medium",
								children: "A diverse portfolio of specialized companies delivering excellence across key sectors in Africa."
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-32 relative z-10 -mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-8",
						children: [
							{
								name: "Aggregates and More",
								desc: "Education Technology (Ed-Tech)\nOther Technology Service"
							},
							{
								name: "Tèrre Crustè Engineering Services",
								desc: "Operations and Maintainance\nElectrical and Instrumentation\nAutomation and Control\nBalance of Plants Service\nOther Engineering service"
							},
							{
								name: "International Transformer Merchanics",
								desc: "Equipment Retrofit \nTransformer Mechanics \nOther Mechanical Services"
							}
						].map((sub, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .5,
								delay: idx * .1
							},
							className: "bg-white rounded-none p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5 hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-display font-bold text-foreground mb-4",
								children: sub.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-col gap-3 mb-6",
								children: sub.desc.split("\n").map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-muted-foreground leading-relaxed",
										children: line.trim()
									})]
								}, i))
							})] })
						}, idx))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SubsidiariesComponent as component };
