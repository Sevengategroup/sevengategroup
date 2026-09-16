import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ceo-B7q7EETL.js
var import_jsx_runtime = require_jsx_runtime();
function CeoAddressComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-gray-50 text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-32 pb-20 md:pt-48 md:pb-32 bg-foreground text-white overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--amber-brand)_0%,transparent_30%)] opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-white/[0.02]" })]
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
						className: "max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-luxury-gold mb-4",
							children: "Leadership"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight mb-6",
							children: [
								"A Message from ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-orange-500",
									children: "Our CEO"
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-32 relative z-10 -mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .2
						},
						className: "bg-white rounded-none p-10 md:p-16 shadow-[0_20px_60px_rgb(0,0,0,0.05)] ring-1 ring-black/5 max-w-4xl mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xl md:text-2xl font-display text-foreground font-medium leading-relaxed italic mb-8 border-l-4 border-luxury-gold pl-6",
									children: "\"Welcome to Sevengate Group. As we forge ahead in shaping the future of infrastructure, energy, and industry in Africa, our commitment remains steadfast: delivering excellence, driving innovation, and creating lasting value.\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At Sevengate Group, our journey has been defined by a relentless pursuit of excellence and a bold vision for the future. We recognize that the challenges facing our industries today require not just solutions, but transformative approaches that combine deep expertise with innovative thinking." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Through our diverse subsidiaries, ranging from Engineering and Mining to Automation and Control, we are uniquely positioned to address complex needs across multiple sectors. Our strength lies in our synergy—the ability to harness the collective power of our distinct divisions to deliver comprehensive, world-class results." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "As we look to the horizon, we remain dedicated to sustainable practices, empowering our communities, and upholding the highest standards of integrity in all our operations. We invite you to join us on this exciting journey as we continue to build, innovate, and lead." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 pt-8 border-t border-gray-100 flex items-center gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-16 bg-gray-200 rounded-full overflow-hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-foreground text-lg",
										children: "Chief Executive Officer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-luxury-gold font-medium uppercase tracking-wider text-sm mt-1",
										children: "Sevengate Group"
									})] })]
								})
							]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CeoAddressComponent as component };
