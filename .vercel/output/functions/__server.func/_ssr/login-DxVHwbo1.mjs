import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/hugeicons__react+react.mjs";
import { x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as loginAdmin } from "./auth-BBZtuKmv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DxVHwbo1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const router = useRouter();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await loginAdmin({ data: {
				email,
				password
			} });
			router.navigate({ to: "/admin/jobs" });
		} catch (err) {
			setError(err.message || "Login failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background flex flex-col justify-center items-center p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-white p-8 border border-border shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-display font-bold uppercase tracking-widest text-center mb-8",
					children: "Admin Login"
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-red-50 text-red-600 p-3 mb-6 text-sm",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "flex flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm font-semibold tracking-widest uppercase mb-2",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							required: true,
							className: "w-full border border-border px-4 py-3 bg-transparent outline-none focus:border-accent transition-colors"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm font-semibold tracking-widest uppercase mb-2",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							required: true,
							className: "w-full border border-border px-4 py-3 bg-transparent outline-none focus:border-accent transition-colors"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "w-full bg-accent text-white font-semibold uppercase tracking-widest py-4 mt-4 hover:bg-accent/90 transition-colors disabled:opacity-50",
							children: loading ? "Logging in..." : "Login"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { AdminLogin as component };
