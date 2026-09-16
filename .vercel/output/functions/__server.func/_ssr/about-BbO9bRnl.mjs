import { t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { y as ArrowRight01Icon } from "../_libs/hugeicons__core-free-icons.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BbO9bRnl.js
var import_jsx_runtime = require_jsx_runtime();
var about_default = "/assets/about-ByIfvmtR.jpg";
var istockphoto_standard_29308620_default = "/assets/istockphoto_standard_29308620-BK4KQ3Ms.jpg";
var fadeInUp = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: .6 }
	}
};
var staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
function AboutUsComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-[50svh] md:h-[60svh] w-full flex items-end pb-0 md:pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_default,
						alt: "About Sevengate Group",
						className: "w-full h-full object-cover blur-[2px] scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/50" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 text-right w-full container-x",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: "hidden",
						animate: "visible",
						variants: fadeInUp,
						className: "font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight drop-shadow-md",
						children: "Who We Are"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: staggerContainer,
						className: "lg:col-span-5 flex flex-col gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "border border-border p-8 md:p-10 group transition-colors hover:border-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-light tracking-wide mb-4 text-foreground",
								children: "Our Mission"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed font-light",
								children: "To deliver specialised, world-class technical services and solutions across Africa's energy, infrastructure, and natural resources sectors driving operational excellence, enabling growth, and creating lasting value for our clients, partners, and communities."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "border border-border bg-muted/30 p-8 md:p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-light tracking-wide mb-4 text-foreground",
								children: "Our Vision"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed font-light",
								children: "To be Africa's most trusted and capable multi-sector energy and infrastructure group a company that sets the benchmark for technical excellence, professional integrity, and sustainable impact across the continent."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: fadeInUp,
						className: "lg:col-span-7 prose prose-gray max-w-none text-muted-foreground font-light leading-relaxed space-y-6 md:text-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: fadeInUp,
								className: "h-[1px] w-16 bg-accent mb-8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeInUp,
								className: "text-xl md:text-2xl text-foreground leading-relaxed font-light mb-8",
								children: "A multi-sector powerhouse built on over two decades of African industry experience, international technical partnerships, and an unwavering commitment to excellence."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sevengate Group was founded with a clear and purposeful vision: to build a world-class African company capable of delivering the specialised technical services and solutions that Africa's most critical industries demand. What began as a focused operation in the energy sector has grown in the last ten years, into a diversified Group with a commanding presence across technology, energy, mining, infrastructure and construction projects." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From our base in Nigeria, we have expanded our reach across the African continent, forging strategic technical partnerships with leading organisations in Europe, Asia and other global centres of industry expertise. These alliances enable us to bring international standards, original OEM equipment, and cutting-edge technical know-how directly to our clients wherever they operate." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today, Sevengate Group is recognised not only for the breadth of our sector coverage, but for the depth of our expertise. Our team comprises professionals with an average of over 30 years of industry experience individuals who have built careers at the highest levels of the energy and infrastructure sectors, and who bring that accumulated knowledge to every project and engagement we undertake." })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-16 md:pb-24 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: fadeInUp,
					className: "w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/about-image.jpeg",
						alt: "About Sevengate Group Operations",
						className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-16 md:py-24 container-x max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: fadeInUp,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl font-bold text-accent tracking-tight mb-10 text-center",
						children: "Our Core Values"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-100px"
					},
					variants: staggerContainer,
					className: "grid grid-cols-1 md:grid-cols-2 gap-8",
					children: [
						{
							title: "Integrity",
							desc: "We conduct our business with the highest ethical standards, building trust through transparency, accountability, and honest dealings with all stakeholders."
						},
						{
							title: "Excellence",
							desc: "We are committed to delivering world-class outcomes across every sector we operate in, holding ourselves to rigorous standards of quality, safety, and performance."
						},
						{
							title: "Partnership",
							desc: "We believe in the power of collaboration with our clients, technical partners, and communities to create lasting value and drive sustainable development across Africa."
						},
						{
							title: "Innovation",
							desc: "Backed by European, Asian and other regional technical alliances and a team of industry veterans, we continuously seek better ways to solve complex challenges and deliver exceeding results"
						}
					].map((val, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeInUp,
						className: "border border-border p-8 md:p-10 group transition-colors hover:border-accent bg-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-light tracking-wide mb-4 text-foreground",
							children: val.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed font-light",
							children: val.desc
						})]
					}, idx))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-16 md:py-24 container-x max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: fadeInUp,
						className: "mb-12 max-w-4xl mx-auto text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4",
								children: "What Sets Us Apart"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl text-center font-light tracking-[0.1em] text-accent mb-6 uppercase",
								children: "Why Sevengate Group"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground leading-relaxed font-light",
								children: "In a region where the gap between expectation and execution is often wide, Sevengate Group exists to close it. We combine the agility and local insight of an African company with the technical rigour and global reach of an international operator. The result is a partner that understands your environment, speaks your language, and delivers to the standard you deserve."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: "hidden",
							whileInView: "visible",
							viewport: {
								once: true,
								margin: "-100px"
							},
							variants: fadeInUp,
							className: "border border-border p-8 md:p-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-6 divide-y divide-border",
								children: [
									{
										label: "10 Years",
										desc: "A proven track record of delivering across multiple sectors in Africa's most demanding operating environments."
									},
									{
										label: "20+ Years",
										desc: "Average staff experience across our technical and operational teams, seasoned professionals who have seen and solved it all."
									},
									{
										label: "OEM Supply",
										desc: "We supply only original manufacturer-certified equipment and parts, ensuring reliability, warranty compliance, and long-term performance."
									},
									{
										label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											"Europe,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Asia and",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Other Regional Links"
										] }),
										desc: "Established technical partnerships with key global leading organisations give our clients access to world-class expertise and technology."
									},
									{
										label: "5+ Sectors",
										desc: "Diversified capabilities across technology, energy, mining infrastructure and construction, all under one roof."
									},
									{
										label: "Pan-African",
										desc: "Operating across Africa with the local knowledge, networks, and regulatory understanding to deliver effectively in diverse markets."
									}
								].map((metric, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex flex-col xl:flex-row gap-4 xl:gap-8 xl:items-center ${idx > 0 ? "pt-6" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "xl:w-32 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-flex items-center px-4 py-2 border-l-2 border-accent text-foreground font-light tracking-wide text-sm w-full xl:w-auto",
											children: metric.label
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground leading-relaxed flex-1 font-light text-sm xl:text-base",
										children: metric.desc
									})]
								}, idx))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: "hidden",
							whileInView: "visible",
							viewport: {
								once: true,
								margin: "-100px"
							},
							variants: fadeInUp,
							className: "relative w-full aspect-square md:aspect-[4/5] rounded-none overflow-hidden shadow-2xl group bg-muted lg:sticky lg:top-36",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: istockphoto_standard_29308620_default,
								alt: "Why Sevengate Group",
								className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: "hidden",
						whileInView: "visible",
						viewport: {
							once: true,
							margin: "-100px"
						},
						variants: fadeInUp,
						className: "mt-20 max-w-4xl mx-auto text-center flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl md:text-3xl font-light text-foreground tracking-tight mb-6",
								children: "Partner with a team that brings experience, integrity, and results."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed mb-10 text-lg font-light",
								children: "Whether you are seeking a technical services partner, an OEM equipment supplier, or a reliable group with multi-sector capabilities across Africa, Sevengate Group is ready to support your goals."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 border border-border px-8 py-4 font-light transition-all hover:border-foreground hover:bg-foreground hover:text-background tracking-wide text-sm",
								children: ["Contact Us Today", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
									icon: ArrowRight01Icon,
									className: "w-4 h-4",
									strokeWidth: 1
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {})
		]
	});
}
//#endregion
export { AboutUsComponent as component };
