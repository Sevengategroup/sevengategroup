import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/hugeicons__react+react.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { s as createJob } from "./router-Dr_yIcMN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-BaHc9_Gb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewJobPage() {
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [formData, setFormData] = (0, import_react.useState)({
		title: "",
		category: "",
		type: "Full-Time",
		location: "",
		description: "",
		responsibilities: "",
		requirements: ""
	});
	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			const responsibilitiesArray = formData.responsibilities.split("\n").map((s) => s.trim()).filter(Boolean);
			const requirementsArray = formData.requirements.split("\n").map((s) => s.trim()).filter(Boolean);
			await createJob({ data: {
				title: formData.title,
				category: formData.category,
				type: formData.type,
				location: formData.location,
				description: formData.description,
				responsibilities: responsibilitiesArray,
				requirements: requirementsArray
			} });
			navigate({ to: "/admin/jobs" });
		} catch (err) {
			setError(err.message || "Failed to create job");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 md:h-36" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-12 md:py-24 container-x max-w-3xl mx-auto px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl font-normal text-foreground uppercase tracking-tight",
							children: "Post a New Job"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-4",
							children: "Create a new job posting that will appear on the Career page."
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-red-500/10 border border-red-500/20 text-red-500 p-4 mb-8",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm uppercase tracking-wider font-semibold text-muted-foreground",
											children: "Job Title"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "text",
											name: "title",
											value: formData.title,
											onChange: handleChange,
											className: "w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors",
											placeholder: "e.g. Senior Structural Engineer"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm uppercase tracking-wider font-semibold text-muted-foreground",
											children: "Category"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "text",
											name: "category",
											value: formData.category,
											onChange: handleChange,
											className: "w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors",
											placeholder: "e.g. Engineering"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm uppercase tracking-wider font-semibold text-muted-foreground",
											children: "Job Type"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "type",
											value: formData.type,
											onChange: handleChange,
											className: "w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors appearance-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Full-Time",
													children: "Full-Time"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Part Time",
													children: "Part Time"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Contract",
													children: "Contract"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Remote",
													children: "Remote"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm uppercase tracking-wider font-semibold text-muted-foreground",
											children: "Location"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "text",
											name: "location",
											value: formData.location,
											onChange: handleChange,
											className: "w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors",
											placeholder: "e.g. Lagos, Nigeria"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm uppercase tracking-wider font-semibold text-muted-foreground",
									children: "Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									name: "description",
									value: formData.description,
									onChange: handleChange,
									rows: 4,
									className: "w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors",
									placeholder: "Brief overview of the role..."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm uppercase tracking-wider font-semibold text-muted-foreground",
									children: "Responsibilities (One per line)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									name: "responsibilities",
									value: formData.responsibilities,
									onChange: handleChange,
									rows: 5,
									className: "w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors",
									placeholder: "Enter responsibilities, separated by newlines"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm uppercase tracking-wider font-semibold text-muted-foreground",
									children: "Requirements (One per line)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									name: "requirements",
									value: formData.requirements,
									onChange: handleChange,
									rows: 5,
									className: "w-full p-4 bg-transparent border border-border focus:border-accent outline-none transition-colors",
									placeholder: "Enter requirements, separated by newlines"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "w-full md:w-auto px-10 py-5 bg-accent text-white uppercase tracking-widest font-semibold hover:-translate-y-1 transition-transform disabled:opacity-50",
								children: loading ? "Posting..." : "Post Job"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { NewJobPage as component };
