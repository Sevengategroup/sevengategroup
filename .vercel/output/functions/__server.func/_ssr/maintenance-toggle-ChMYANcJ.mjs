import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { b as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Settings02Icon, u as LockIcon } from "../_libs/hugeicons__core-free-icons.mjs";
import { a as Route$16, o as toggleMaintenanceState } from "./router-scCtyqXC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/maintenance-toggle-ChMYANcJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MaintenanceTogglePage() {
	const { isMaintenanceMode } = Route$16.useLoaderData();
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const router = useRouter();
	const handleToggle = async (enable) => {
		setError("");
		setSuccess("");
		setIsLoading(true);
		try {
			await toggleMaintenanceState({ data: {
				password,
				enable
			} });
			setSuccess(`Maintenance mode successfully ${enable ? "enabled" : "disabled"}.`);
			router.invalidate();
		} catch (err) {
			setError(err.message || "Failed to authenticate");
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-white border border-border p-8 rounded-sm shadow-sm relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-1 bg-accent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
								icon: Settings02Icon,
								size: 40,
								className: "text-accent mb-4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-2xl font-light uppercase tracking-widest text-foreground text-center",
								children: "Maintenance Control"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-12 bg-accent mt-4" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-muted/20 border border-border rounded-sm flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium uppercase tracking-widest text-muted-foreground",
									children: "Current Status:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-sm font-bold tracking-widest uppercase ${isMaintenanceMode ? "text-red-500" : "text-green-500"}`,
									children: isMaintenanceMode ? "ACTIVE" : "INACTIVE"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
									children: "Admin Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
										icon: LockIcon,
										size: 18,
										className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: "Enter access code",
										className: "w-full pl-10 pr-4 py-3 bg-background border border-input rounded-none focus:outline-none focus:ring-1 focus:ring-accent text-sm"
									})]
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 bg-red-50 text-red-600 text-xs font-medium tracking-wide border border-red-100",
								children: error
							}),
							success && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 bg-green-50 text-green-600 text-xs font-medium tracking-wide border border-green-100",
								children: success
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4 pt-4 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleToggle(true),
									disabled: isLoading || isMaintenanceMode,
									className: "w-full py-3 bg-red-50 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed",
									children: "Enable"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleToggle(false),
									disabled: isLoading || !isMaintenanceMode,
									className: "w-full py-3 bg-green-50 text-green-600 border border-green-200 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed",
									children: "Disable"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => router.navigate({ to: "/" }),
									className: "text-xs text-muted-foreground hover:text-accent uppercase tracking-widest underline underline-offset-4",
									children: "Go to Site"
								})
							})
						]
					})
				]
			})
		})
	});
}
//#endregion
export { MaintenanceTogglePage as component };
