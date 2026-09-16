import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/organization-COFhMLpT.js
var import_jsx_runtime = require_jsx_runtime();
var organization_structure_default = "/assets/organization%20structure-BsJBLeSS.webp";
function OrganizationComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-32 pb-24 md:pt-40 bg-foreground text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x relative z-10 max-w-4xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "font-display text-5xl font-semibold tracking-tight sm:text-6xl text-luxury-gold",
						children: "Structural Organization"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .1 },
						className: "mt-6 text-xl text-white/80 leading-relaxed",
						children: "How we operate across the value chain, ensuring efficiency and excellence in every sector."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .7 },
					className: "rounded-none border border-border bg-card p-6 sm:p-10 shadow-luxury-soft flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-luxury-gold mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-luxury-gold" }), " Corporate Structure"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-10 font-display text-3xl font-semibold text-foreground text-center",
							children: "Sevengate Group Organization"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: organization_structure_default,
							alt: "Sevengate Group Organization Structure",
							className: "w-full h-auto rounded-none shadow-sm object-contain max-h-[800px]",
							loading: "lazy"
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
export { OrganizationComponent as component };
