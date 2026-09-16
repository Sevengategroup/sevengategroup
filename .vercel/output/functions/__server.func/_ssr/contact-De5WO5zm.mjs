import { t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { g as Call02Icon, l as Mail01Icon, r as SentIcon, s as Message01Icon } from "../_libs/hugeicons__core-free-icons.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-De5WO5zm.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const subject = formData.get("subject");
		const message = formData.get("message");
		const whatsappNumber = "2348030726373";
		const text = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
		window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-gray-50 text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative w-full aspect-[4/3] md:aspect-[21/9] bg-foreground text-white overflow-hidden flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/hero2.jpeg",
							alt: "Contact Banner",
							className: "absolute inset-0 w-full h-full object-cover object-center opacity-20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--amber-brand)_0%,transparent_30%)] opacity-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-white/[0.02]" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x relative z-10 w-full mt-16 md:mt-24",
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
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-luxury-gold mb-4",
							children: "Get in Touch"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-white/70 leading-relaxed max-w-xl",
							children: "Whether you're looking to partner on infrastructure projects, explore energy opportunities, or simply learn more about our operations, we're here to help."
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 md:py-32 relative z-10 -mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								duration: .6,
								delay: .2
							},
							className: "space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-white rounded-none p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-none bg-luxury-gold/10 text-luxury-gold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: Call02Icon,
												className: "h-6 w-6",
												strokeWidth: 1.2
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold text-foreground mb-2",
											children: "Our Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:+2349166418189",
												className: "text-gray-600 hover:text-luxury-gold transition-colors",
												children: "+234 - 916 641 8189"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:+2348030726373",
												className: "text-gray-600 hover:text-luxury-gold transition-colors",
												children: "+234 803 072 6373"
											})]
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-white rounded-none p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-none bg-luxury-gold/10 text-luxury-gold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: Mail01Icon,
												className: "h-6 w-6",
												strokeWidth: 1.2
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold text-foreground mb-2",
											children: "Our Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:adminoffice@sevengategroup.com",
											className: "text-gray-600 hover:text-luxury-gold transition-colors block break-all",
											children: "adminoffice@sevengategroup.com"
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-white rounded-none p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-none ",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: Message01Icon,
												className: "h-6 w-6",
												strokeWidth: 1.2
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-bold  mb-2",
											children: "WhatsApp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://wa.me/2348030726373",
											className: "text-gray-600 hover:text-[#25D366] transition-colors block break-all",
											children: "+234 803 072 6373"
										})] })]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								delay: .4
							},
							className: "bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] ring-1 ring-black/5 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
										children: "Send a message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-gray-500",
										children: "A member of our team will get back to you shortly"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "space-y-6 relative z-10",
									onSubmit: handleSubmit,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "name",
													className: "text-sm font-semibold text-foreground",
													children: "Full Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													id: "name",
													name: "name",
													required: true,
													placeholder: "Your full name",
													className: "w-full bg-gray-50 border border-gray-200 rounded-none px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "email",
													className: "text-sm font-semibold text-foreground",
													children: "Email Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													id: "email",
													name: "email",
													required: true,
													placeholder: "your-email@example.com",
													className: "w-full bg-gray-50 border border-gray-200 rounded-none px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "subject",
												className: "text-sm font-semibold text-foreground",
												children: "Subject"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												id: "subject",
												name: "subject",
												required: true,
												placeholder: "How can we help?",
												className: "w-full bg-gray-50 border border-gray-200 rounded-none px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "message",
												className: "text-sm font-semibold text-foreground",
												children: "Message"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												id: "message",
												name: "message",
												required: true,
												rows: 5,
												placeholder: "Leave a message...",
												className: "w-full bg-gray-50 border border-gray-200 rounded-none px-5 py-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold transition-all"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											className: "group inline-flex w-full items-center justify-center gap-2 rounded-none bg-foreground px-8 py-4 text-sm font-bold text-white transition-all hover:bg-foreground/90 shadow-[0_4px_15px_color-mix(in_oklab,var(--navy-deep)_40%,transparent)] hover:-translate-y-0.5",
											children: ["Submit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: SentIcon,
												className: "h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
												strokeWidth: 1.2
											})]
										})
									]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
