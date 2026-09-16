import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/hugeicons__react+react.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { t as power_default } from "./power-B9sLWp7n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUBPVydI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var heroSlides = [
	{
		image: "src/assets/hero2.jpg",
		text: "Build for Africa\nBacked by Global Expertise",
		position: "top-left"
	},
	{
		image: "/hero2.jpeg",
		text: "Your Trusted Partner\nfor Africa's Critical Industries",
		position: "top-right"
	},
	{
		image: "/hero section3.jpeg",
		text: ""
	},
	{
		image: "/assets/construction20-D_ij5nJn.jpeg",
		text: ""
	}
];
function Hero() {
	const [currentImageIndex, setCurrentImageIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
		}, 5e3);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[100svh] w-full overflow-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: heroSlides[currentImageIndex].image,
					alt: "Sevengate Background",
					initial: {
						opacity: 0,
						scale: 1.05
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: { opacity: 0 },
					transition: {
						duration: 2,
						ease: "easeInOut"
					},
					className: "absolute inset-0 h-full w-full object-cover"
				}, currentImageIndex)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 container-x h-[100svh] pt-24 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: (() => {
					const slide = heroSlides[currentImageIndex];
					let alignClasses = "justify-center items-center text-center px-6 md:px-12";
					let textClasses = "text-5xl md:text-7xl";
					if (slide.position === "bottom-right") {
						alignClasses = "justify-end items-end text-right pb-12 md:pb-16 px-6 md:px-12";
						textClasses = "text-3xl md:text-5xl";
					} else if (slide.position === "top-left") {
						alignClasses = "justify-start items-start text-left pt-28 md:pt-36 px-6 md:px-12";
						textClasses = "text-3xl md:text-5xl";
					} else if (slide.position === "top-right") {
						alignClasses = "justify-start items-end text-right pt-28 md:pt-36 px-6 md:px-12";
						textClasses = "text-3xl md:text-5xl";
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -30
						},
						transition: {
							duration: .8,
							ease: "easeOut"
						},
						className: `absolute inset-0 flex flex-col w-full ${alignClasses}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: `text-white font-display font-light tracking-wide drop-shadow-md whitespace-pre-line ${textClasses}`,
							children: slide.text
						})
					}, currentImageIndex);
				})()
			})
		})]
	});
}
var sections = [
	{
		title: "Technology",
		image: "/hero section 3.jpg",
		link: "/",
		desc: ""
	},
	{
		title: "Energy",
		image: power_default,
		link: "/services/power",
		desc: "Sustainable generation and grid development."
	},
	{
		title: "Mining",
		image: "/hero section 3.jpg",
		link: "/services/mining",
		desc: "Responsible mining and resource extraction."
	},
	{
		title: "Infrastructure",
		image: "/hero section 1.jpg",
		link: "/services/construction",
		desc: "Building the physical backbone of tomorrow."
	}
];
var carouselItems = [
	...sections,
	...sections,
	...sections,
	...sections
];
function NavigationCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "w-full bg-background py-8 md:py-12 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 md:mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-light text-foreground uppercase tracking-widest",
						children: "Our Sectors"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-px w-16 bg-accent" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full flex overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "flex whitespace-nowrap w-max",
					animate: { x: ["0%", "-25%"] },
					transition: {
						ease: "linear",
						duration: 25,
						repeat: Infinity
					},
					children: carouselItems.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: section.link,
							className: "group flex items-center px-8 md:px-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-4xl font-light text-foreground tracking-wide whitespace-nowrap transition-all duration-700 group-hover:text-accent group-hover:-translate-y-2 border-b border-muted-foreground/40 group-hover:border-accent pb-1",
								children: section.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-8 md:ml-16 w-2.5 h-2.5 md:w-3 md:h-3 bg-muted-foreground/30 transition-colors duration-700 group-hover:bg-accent/50 block" })]
						})
					}, `${section.title}-${index}`))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: { duration: .8 },
				className: "mx-auto max-w-4xl px-6 lg:px-12 mt-20 md:mt-32 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl font-light text-foreground mb-8",
					children: "A trusted partner for Africa’s most critical industries"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 text-muted-foreground leading-relaxed font-light text-base md:text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For over two decades, Sevengate Group has established itself as a leading force in Africa’s energy, construction and infrastructure landscape. Operating across five core sectors – oil and gas, power, construction and infrastructure, solid minerals mining and technology services – we deliver solutions that combine deep local understanding with international technical excellence." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Through strategic technical partnerships with industry-leading organisations in Europe, Asia and beyond, we bring world-class expertise to every project. Our team of seasoned professionals, many with over 30 years of sector-specific experience, ensures that every project is executed to the highest standards of quality, safety, and efficiency." })]
				})]
			})
		]
	});
}
var stats = [
	{
		value: "20+",
		label: "Years in Operation"
	},
	{
		value: "30+",
		label: "Years Average. Staff Experience"
	},
	{
		value: "5",
		label: "Industry Sectors Served"
	}
];
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: .2,
			delayChildren: .1
		}
	}
};
var itemVariants = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: "easeOut"
		}
	}
};
function KeyStatistics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "w-full bg-background pb-20 md:pb-32 pt-10 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 lg:px-12 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 md:mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-light text-foreground uppercase tracking-widest",
						children: "Key Statistics"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-px w-16 bg-accent" })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-50px"
				},
				className: "relative grid grid-cols-1 md:grid-cols-3 bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" }),
					stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: itemVariants,
						className: `flex flex-col items-center justify-center p-14 text-center relative z-10
                ${index !== stats.length - 1 ? "md:after:content-[\"\"] md:after:absolute md:after:right-0 md:after:top-1/4 md:after:bottom-1/4 md:after:w-px md:after:bg-slate-800 border-b border-slate-800 md:border-b-0" : ""}
              `,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-6xl md:text-7xl font-light mb-4 bg-gradient-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent tracking-tight",
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-sans text-sm md:text-base font-medium text-slate-400 tracking-wider max-w-[200px] uppercase",
							children: stat.label
						})]
					}, index))
				]
			})]
		})
	});
}
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationCards, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyStatistics, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {})
		]
	});
}
//#endregion
export { LandingPage as component };
