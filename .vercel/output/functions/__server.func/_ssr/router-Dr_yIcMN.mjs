import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { _ as createFileRoute, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { v as ArrowUp01Icon } from "../_libs/hugeicons__core-free-icons.mjs";
import { i as createServerFn, u as __exportAll } from "./server-CgASqeYN.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DbxSuZNl.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs-DWBlhlEz.js
var getJobs = createServerFn({ method: "GET" }).handler(createSsrRpc("7517e505ffa1236fb1abcc2723251912fff820e75b0b582f5d8e2f8666eea827"));
var createJob = createServerFn({ method: "POST" }).validator((job) => job).handler(createSsrRpc("670bb17028d432503ee07b68a002bf01729c45f8418efe458a86ad4c77e3d1ff"));
var deleteJob = createServerFn({ method: "POST" }).validator((id) => id).handler(createSsrRpc("ac935873e59edabfa1f19e9cf174289cc52543e9cf73065d20f62fe5c395ef16"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dr_yIcMN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-u3rYDy7j.css";
var ClickEffect = () => {
	const [clicks, setClicks] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const handleClick = (e) => {
			const newClick = {
				id: Date.now(),
				x: e.clientX,
				y: e.clientY
			};
			setClicks((prev) => [...prev, newClick]);
			setTimeout(() => {
				setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
			}, 600);
		};
		window.addEventListener("mousedown", handleClick);
		return () => window.removeEventListener("mousedown", handleClick);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 pointer-events-none z-[9999] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: clicks.map((click) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute",
			style: {
				left: click.x,
				top: click.y
			},
			children: [...Array(4)].map((_, i) => {
				const angle = [
					-60,
					-20,
					20,
					60
				][i];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .5,
						y: 0,
						x: 0
					},
					animate: {
						opacity: [
							0,
							1,
							0
						],
						scale: [
							.8,
							1.1,
							.8
						],
						x: Math.sin(angle * Math.PI / 180) * 20,
						y: -Math.cos(angle * Math.PI / 180) * 20
					},
					transition: {
						duration: .35,
						ease: "easeOut"
					},
					className: "absolute w-[3px] h-[7px] bg-white dark:bg-neutral-900 rounded-full",
					style: {
						left: -1.5,
						top: -3.5,
						transform: `rotate(${angle}deg) translateY(-12px)`,
						transformOrigin: "center bottom"
					}
				}, i);
			})
		}, click.id)) })
	});
};
function BackToTop() {
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) setIsVisible(true);
			else setIsVisible(false);
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: {
			opacity: 0,
			scale: .8,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .8,
			y: 20
		},
		transition: {
			duration: .3,
			ease: "easeOut"
		},
		onClick: scrollToTop,
		className: "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center bg-foreground text-background shadow-lg transition-transform hover:scale-110 hover:bg-accent hover:text-white",
		"aria-label": "Back to top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
			icon: ArrowUp01Icon,
			className: "h-6 w-6",
			strokeWidth: 1.5
		})
	}) });
}
var getMaintenanceState = createServerFn({ method: "GET" }).handler(createSsrRpc("1eb1db9f8cb055027a73a608b55d9ade7bf6004203f05058e865804af5b553ce"));
var toggleMaintenanceState = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("d545b511d90e22707fd12386f2e6310be9b75570512a8b0bafc2263417eaa945"));
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-none bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: error.message || "Something went wrong on our end."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-red-500 overflow-auto text-left max-h-40 border p-2",
					children: error.stack
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-none bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-none border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sevengate Group" },
			{
				name: "description",
				content: "Pan-African energy, infrastructure and natural resources group."
			},
			{
				name: "author",
				content: "Sevengate Group"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/logo.png",
			type: "image/png"
		}]
	}),
	loader: async () => {
		return { isMaintenanceMode: await getMaintenanceState() };
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClickEffect, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$18 = () => import("./routes-CUBPVydI.mjs");
var Route$18 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sevengate Group — Energy, Infrastructure & Natural Resources in Africa" },
		{
			name: "description",
			content: "Sevengate Group develops, finances and operates gas, power, oil, construction and mining assets across Africa — engineered for a continent on the rise."
		},
		{
			property: "og:title",
			content: "Sevengate Group — Powering Africa's next decade"
		},
		{
			property: "og:description",
			content: "Pan-African energy, infrastructure and natural resources group operating across gas, power, oil, construction and Mining."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./contact-De5WO5zm.mjs");
var Route$17 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$17, "component"),
	head: () => ({ meta: [{ title: "Contact Us — Sevengate Group" }, {
		name: "description",
		content: "Get in touch with Sevengate Group. Contact our head office in Abuja, or reach out via phone and email."
	}] })
});
var $$splitComponentImporter$16 = () => import("./maintenance-toggle-BBpR-qna.mjs");
var Route$16 = createFileRoute("/maintenance-toggle")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	loader: async () => {
		return { isMaintenanceMode: await getMaintenanceState() };
	}
});
var $$splitComponentImporter$15 = () => import("./subsidiaries-C_5UjTzG.mjs");
var Route$15 = createFileRoute("/subsidiaries")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => ({ meta: [{ title: "Subsidiaries — Sevengate Group" }] })
});
var $$splitComponentImporter$14 = () => import("./about-BbO9bRnl.mjs");
var Route$14 = createFileRoute("/about/")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./ceo-B7q7EETL.mjs");
var Route$13 = createFileRoute("/about/ceo")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: "CEO Address — Sevengate Group" }] })
});
var $$splitComponentImporter$12 = () => import("./organization-COFhMLpT.mjs");
var Route$12 = createFileRoute("/about/organization")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./login-DxVHwbo1.mjs");
var Route$11 = createFileRoute("/admin/login")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./career-CBepUTAT.mjs");
var Route$10 = createFileRoute("/career/")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	loader: async () => {
		return { jobs: await getJobs() };
	}
});
var $$splitComponentImporter$9 = () => import("./construction-BEkhDtrI.mjs");
var Route$9 = createFileRoute("/services/construction")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./energy-Buf_QE6Y.mjs");
var Route$8 = createFileRoute("/services/energy")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./mining-D1VqjJSJ.mjs");
var Route$7 = createFileRoute("/services/mining")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./oil-and-gas-D_jS7JOk.mjs");
var Route$6 = createFileRoute("/services/oil-and-gas")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./other-services-D2uQuibb.mjs");
var Route$5 = createFileRoute("/services/other-services")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./jobs-Cb1StPi-.mjs");
var Route$4 = createFileRoute("/admin/jobs/")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	loader: async () => {
		return { jobs: await getJobs() };
	}
});
var $$splitComponentImporter$3 = () => import("./new-BaHc9_Gb.mjs");
var Route$3 = createFileRoute("/admin/jobs/new")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./details._slug-Bnja6Xhq.mjs");
var Route$2 = createFileRoute("/services/details/$slug")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./power-2CwFiewB.mjs");
var Route$1 = createFileRoute("/services/power/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./thermal-energy-DfjjU1XW.mjs");
var Route = createFileRoute("/services/power/thermal-energy")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var ContactRoute = Route$17.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$19
});
var MaintenanceToggleRoute = Route$16.update({
	id: "/maintenance-toggle",
	path: "/maintenance-toggle",
	getParentRoute: () => Route$19
});
var SubsidiariesRoute = Route$15.update({
	id: "/subsidiaries",
	path: "/subsidiaries",
	getParentRoute: () => Route$19
});
var AboutIndexRoute = Route$14.update({
	id: "/about/",
	path: "/about/",
	getParentRoute: () => Route$19
});
var AboutCeoRoute = Route$13.update({
	id: "/about/ceo",
	path: "/about/ceo",
	getParentRoute: () => Route$19
});
var AboutOrganizationRoute = Route$12.update({
	id: "/about/organization",
	path: "/about/organization",
	getParentRoute: () => Route$19
});
var AdminLoginRoute = Route$11.update({
	id: "/admin/login",
	path: "/admin/login",
	getParentRoute: () => Route$19
});
var CareerIndexRoute = Route$10.update({
	id: "/career/",
	path: "/career/",
	getParentRoute: () => Route$19
});
var ServicesConstructionRoute = Route$9.update({
	id: "/services/construction",
	path: "/services/construction",
	getParentRoute: () => Route$19
});
var ServicesEnergyRoute = Route$8.update({
	id: "/services/energy",
	path: "/services/energy",
	getParentRoute: () => Route$19
});
var ServicesMiningRoute = Route$7.update({
	id: "/services/mining",
	path: "/services/mining",
	getParentRoute: () => Route$19
});
var ServicesOilAndGasRoute = Route$6.update({
	id: "/services/oil-and-gas",
	path: "/services/oil-and-gas",
	getParentRoute: () => Route$19
});
var ServicesOtherServicesRoute = Route$5.update({
	id: "/services/other-services",
	path: "/services/other-services",
	getParentRoute: () => Route$19
});
var AdminJobsIndexRoute = Route$4.update({
	id: "/admin/jobs/",
	path: "/admin/jobs/",
	getParentRoute: () => Route$19
});
var AdminJobsNewRoute = Route$3.update({
	id: "/admin/jobs/new",
	path: "/admin/jobs/new",
	getParentRoute: () => Route$19
});
var ServicesDetailsSlugRoute = Route$2.update({
	id: "/services/details/$slug",
	path: "/services/details/$slug",
	getParentRoute: () => Route$19
});
var ServicesPowerIndexRoute = Route$1.update({
	id: "/services/power/",
	path: "/services/power/",
	getParentRoute: () => Route$19
});
var rootRouteChildren = {
	IndexRoute,
	ContactRoute,
	MaintenanceToggleRoute,
	SubsidiariesRoute,
	AboutCeoRoute,
	AboutOrganizationRoute,
	AdminLoginRoute,
	ServicesConstructionRoute,
	ServicesEnergyRoute,
	ServicesMiningRoute,
	ServicesOilAndGasRoute,
	ServicesOtherServicesRoute,
	AboutIndexRoute,
	CareerIndexRoute,
	AdminJobsNewRoute,
	ServicesDetailsSlugRoute,
	ServicesPowerThermalEnergyRoute: Route.update({
		id: "/services/power/thermal-energy",
		path: "/services/power/thermal-energy",
		getParentRoute: () => Route$19
	}),
	AdminJobsIndexRoute,
	ServicesPowerIndexRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$16 as a, deleteJob as c, Route$10 as i, Route$2 as n, toggleMaintenanceState as o, Route$4 as r, createJob as s, router_exports as t };
