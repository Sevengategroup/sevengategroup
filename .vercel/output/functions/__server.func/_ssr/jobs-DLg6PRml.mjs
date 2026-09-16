import { t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { b as useRouter, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as PlusSignIcon, m as Delete01Icon } from "../_libs/hugeicons__core-free-icons.mjs";
import { c as deleteJob, r as Route$4 } from "./router-scCtyqXC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs-DLg6PRml.js
var import_jsx_runtime = require_jsx_runtime();
function AdminJobs() {
	const { jobs } = Route$4.useLoaderData();
	const router = useRouter();
	const handleDelete = async (id) => {
		if (confirm("Are you sure you want to delete this job?")) try {
			await deleteJob({ data: id });
			router.invalidate();
		} catch (e) {
			alert("Failed to delete job.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background text-foreground p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-display uppercase tracking-widest font-bold",
					children: "Manage Jobs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/jobs/new",
					className: "flex items-center gap-2 bg-accent text-white px-6 py-3 font-semibold uppercase tracking-widest hover:bg-accent/90 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, { icon: PlusSignIcon }), "Post New Job"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-border overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/20 border-b border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 font-semibold uppercase tracking-widest text-sm",
								children: "Title"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 font-semibold uppercase tracking-widest text-sm",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 font-semibold uppercase tracking-widest text-sm",
								children: "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 font-semibold uppercase tracking-widest text-sm",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 font-semibold uppercase tracking-widest text-sm text-right",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0 hover:bg-muted/10 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 font-medium",
								children: job.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold tracking-widest text-accent uppercase bg-accent/10 px-2 py-1",
									children: job.category
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 text-sm text-muted-foreground",
								children: job.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 text-sm text-muted-foreground",
								children: job.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-end gap-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelete(job.id),
										className: "text-red-500 hover:text-red-700 transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
											icon: Delete01Icon,
											className: "w-5 h-5"
										})
									})
								})
							})
						]
					}, job.id)), jobs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 5,
						className: "px-6 py-12 text-center text-muted-foreground",
						children: "No jobs posted yet."
					}) })] })]
				})
			})]
		})
	});
}
//#endregion
export { AdminJobs as component };
