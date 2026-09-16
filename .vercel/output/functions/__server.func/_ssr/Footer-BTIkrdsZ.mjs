import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { d as useLocation, v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { b as ArrowDown01Icon, c as Menu01Icon, f as Linkedin01Icon, h as Cancel01Icon, i as Search01Icon, o as NewTwitterIcon, p as Facebook01Icon, t as YoutubeIcon } from "../_libs/hugeicons__core-free-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-BTIkrdsZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var newest_logo_default = "/assets/newest-logo-DePyrWPU.png";
var navItems = [
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Subsidiaries",
		href: "/subsidiaries"
	},
	{
		label: "Services",
		children: [
			{
				label: "Energy",
				href: "/services/energy"
			},
			{
				label: "Construction",
				href: "/services/construction"
			},
			{
				label: "Mining",
				href: "/services/mining"
			},
			{
				label: "Other Services",
				href: "/services/other-services"
			}
		]
	},
	{
		label: "Careers",
		href: "/career",
		id: "careers"
	},
	{
		label: "Contact",
		href: "/contact",
		id: "contact"
	}
];
var searchIndex = [
	{
		title: "Home",
		path: "/",
		keywords: [
			"home",
			"landing",
			"sevengate",
			"group"
		]
	},
	{
		title: "About Us",
		path: "/about",
		keywords: [
			"about",
			"vision",
			"mission",
			"history"
		]
	},
	{
		title: "CEO Message",
		path: "/about/ceo",
		keywords: [
			"ceo",
			"founder",
			"message",
			"leadership"
		]
	},
	{
		title: "Organization",
		path: "/about/organization",
		keywords: [
			"organization",
			"structure",
			"team"
		]
	},
	{
		title: "Subsidiaries",
		path: "/subsidiaries",
		keywords: [
			"subsidiaries",
			"companies",
			"terre cruste"
		]
	},
	{
		title: "Oil & Gas",
		path: "/services/oil-and-gas",
		keywords: [
			"oil",
			"gas",
			"petroleum",
			"oem"
		]
	},
	{
		title: "Power",
		path: "/services/power",
		keywords: [
			"power",
			"electricity",
			"generation",
			"turbines"
		]
	},
	{
		title: "Construction",
		path: "/services/construction",
		keywords: [
			"construction",
			"infrastructure",
			"civil",
			"epc"
		]
	},
	{
		title: "Mining",
		path: "/services/mining",
		keywords: [
			"mining",
			"minerals",
			"solid minerals",
			"extraction"
		]
	},
	{
		title: "Other Services",
		path: "/services/other-services",
		keywords: [
			"other",
			"services",
			"lpg",
			"corrosion",
			"specialised"
		]
	},
	{
		title: "Careers",
		path: "/career",
		keywords: [
			"careers",
			"jobs",
			"vacancies",
			"hiring"
		]
	},
	{
		title: "Contact Us",
		path: "/contact",
		keywords: [
			"contact",
			"email",
			"phone",
			"address"
		]
	}
];
var MobileNavItem = ({ item, level = 0, setOpen, handleNavClick, activeId }) => {
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const isActive = item.id ? activeId === item.id : false;
	if (item.children) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col ${level === 0 ? "border-b border-border/50 last:border-0 py-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setIsExpanded(!isExpanded),
			className: `flex w-full items-center justify-between ${level === 0 ? "py-3 text-lg font-serif font-bold uppercase tracking-widest text-foreground hover:text-accent" : "py-2 pl-4 text-sm font-sans font-semibold tracking-wide text-muted-foreground hover:text-foreground"} transition-colors ${isExpanded && level === 0 ? "text-accent" : ""}`,
			children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
				icon: ArrowDown01Icon,
				className: `h-5 w-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`,
				strokeWidth: 1.5
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex flex-col gap-1 ${level === 0 ? "py-2" : ""}`,
				children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavItem, {
					item: child,
					level: level + 1,
					setOpen,
					handleNavClick,
					activeId
				}, child.label))
			})
		}) })]
	});
	const linkClass = level === 0 ? `block px-2 py-3 text-lg font-serif font-bold uppercase tracking-widest transition-colors ${isActive ? "text-accent" : "text-foreground hover:text-accent"}` : `block px-2 py-2 pl-4 text-sm font-sans font-semibold tracking-wide text-muted-foreground transition-colors hover:text-foreground`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: level === 0 ? "border-b border-border/50 last:border-0 py-2" : "",
		children: item.href?.startsWith("/#") || item.href?.startsWith("#") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: item.href,
			onClick: (e) => handleNavClick(e, item.href.replace("/", "")),
			"aria-current": isActive ? "true" : void 0,
			className: linkClass,
			children: item.label
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: item.href,
			onClick: () => setOpen(false),
			className: linkClass,
			children: item.label
		})
	});
};
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [activeId, setActiveId] = (0, import_react.useState)("");
	const [hoveredLabel, setHoveredLabel] = (0, import_react.useState)(null);
	const [isSearchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	useLocation();
	const navigate = useNavigate();
	const searchResults = searchQuery.trim() === "" ? [] : searchIndex.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase())));
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const sections = navItems.filter((n) => n.id).map((n) => document.getElementById(n.id)).filter((el) => !!el);
		if (sections.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				0,
				.25,
				.5,
				.75,
				1
			]
		});
		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);
	const handleNavClick = (e, href) => {
		if (!href.startsWith("#")) return;
		const id = href.slice(1);
		const el = id ? document.getElementById(id) : document.documentElement;
		if (!el) return;
		e.preventDefault();
		const top = id === "" ? 0 : el.getBoundingClientRect().top + window.scrollY - 72;
		window.scrollTo({
			top,
			behavior: "smooth"
		});
		history.replaceState(null, "", href);
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 flex w-full transition-all duration-500 ${scrolled ? "pt-0" : "pt-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Primary",
			className: `flex h-20 md:h-28 w-full items-center justify-between px-6 lg:px-12 transition-all duration-300 bg-background/95 border-b border-border backdrop-blur-xl`,
			onMouseLeave: () => setHoveredLabel(null),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 items-center justify-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center justify-center md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: newest_logo_default,
							alt: "Sevengate Logo",
							className: "h-16 w-auto object-contain transition-all duration-300"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/contact",
						onClick: (e) => handleNavClick(e, "contact"),
						className: `hidden md:inline-flex items-center text-sm font-serif font-bold tracking-widest uppercase transition-colors duration-500 text-foreground hover:text-accent`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-1.5 text-xl font-bold leading-none",
							children: "+"
						}), " Contact Us"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex flex-1 items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: newest_logo_default,
							alt: "Sevengate Logo",
							className: "h-20 md:h-28 w-auto object-contain transition-all duration-300"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex flex-1 items-center justify-end gap-4 md:gap-6 text-foreground`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `flex items-center overflow-hidden transition-all duration-300 ease-in-out border-b ${isSearchOpen ? "w-32 md:w-48 border-current opacity-100 mr-2" : "w-0 border-transparent opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "w-full bg-transparent outline-none placeholder:text-current/50 px-2 py-1 text-sm md:text-base",
									onBlur: () => setTimeout(() => {
										setSearchOpen(false);
										setSearchQuery("");
									}, 200)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Search",
								className: "hover:text-accent transition-colors z-10",
								onClick: () => {
									setSearchOpen(!isSearchOpen);
									if (isSearchOpen) setSearchQuery("");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
									icon: Search01Icon,
									className: "h-5 w-5 md:h-6 md:w-6",
									strokeWidth: 1.2
								})
							}),
							isSearchOpen && searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-full right-0 mt-2 w-48 md:w-64 bg-background border border-border shadow-lg overflow-hidden z-50",
								children: searchResults.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "py-2",
									children: searchResults.map((result, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-white transition-colors",
										onClick: () => {
											navigate({ to: result.path });
											setSearchOpen(false);
											setSearchQuery("");
										},
										children: result.title
									}) }, idx))
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-4 py-3 text-sm text-muted-foreground text-center",
									children: "No results found"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen((s) => !s),
						"aria-label": "Toggle menu",
						"aria-expanded": open,
						className: "ml-2 flex items-center gap-2 hover:text-accent transition-colors",
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
							icon: Cancel01Icon,
							className: "h-8 w-8 md:h-10 md:w-10",
							strokeWidth: 2.5
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
							icon: Menu01Icon,
							className: "h-8 w-8 md:h-10 md:w-10",
							strokeWidth: 2.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:block text-sm font-serif font-bold tracking-widest uppercase",
							children: "Menu"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setOpen(false),
			className: "fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { x: "100%" },
			animate: { x: 0 },
			exit: { x: "100%" },
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 200
			},
			className: "fixed inset-y-0 right-0 z-[101] w-full max-w-sm bg-background border-l border-border p-6 md:p-8 overflow-y-auto flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl font-bold uppercase tracking-widest text-foreground",
					children: "Menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "text-muted-foreground hover:text-foreground transition-colors p-2 -mr-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
						icon: Cancel01Icon,
						className: "w-6 h-6",
						strokeWidth: 1.5
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2 flex-grow",
				children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavItem, {
					item,
					setOpen,
					handleNavClick,
					activeId
				}) }, item.label))
			})]
		})] }) })]
	});
}
function Footer() {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "w-full bg-foreground border-t border-white/10 pt-16 pb-12 px-6 lg:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-1 flex flex-col gap-6 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: newest_logo_default,
							alt: "Sevengate Logo",
							className: "h-12 w-auto object-contain self-start brightness-0 invert"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:info@sevengategroup.com",
									className: "text-white/60 hover:text-white transition-colors font-sans text-sm",
									children: "adminoffice@sevengategroup.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col text-white/60 font-sans text-sm gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+234 - 916 641 8189" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+234 803 072 6373" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mt-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "w-8 h-8 flex items-center justify-center text-[#1877F2] hover:opacity-80 transition-opacity",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: Facebook01Icon,
												className: "w-6 h-6"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "w-8 h-8 flex items-center justify-center text-[#1DA1F2] hover:opacity-80 transition-opacity",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: NewTwitterIcon,
												className: "w-6 h-6"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "w-8 h-8 flex items-center justify-center text-[#FF0000] hover:opacity-80 transition-opacity",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: YoutubeIcon,
												className: "w-6 h-6"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "w-8 h-8 flex items-center justify-center text-[#3467C2] hover:opacity-80 transition-opacity",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
												icon: Linkedin01Icon,
												className: "w-6 h-6"
											})
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-1 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-[2px] bg-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-white uppercase tracking-wide text-lg mt-1",
								children: "Abuja Office"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-white/60 font-sans text-sm leading-relaxed",
								children: [
									"14 Sambrerio Close",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Off Limpopo Street",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Maitama, F.C.T - Abuja, Nigeria."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-1 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-[2px] bg-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-white uppercase tracking-wide text-lg mt-1",
								children: "Lagos Office / Equipment Yard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-white/60 font-sans text-sm leading-relaxed",
								children: [
									"Km 22 Lagos-Ibadan Expressway",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Asese Town, Ogun State, Nigeria."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-1 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-[2px] bg-accent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-white uppercase tracking-wide text-lg mt-1",
								children: "Enugu Office/Factory"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-white/60 font-sans text-sm leading-relaxed",
								children: [
									"Plot C-20, PRODA Road",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Emene Industrial Layout",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Enugu, Enugu State, Nigeria."
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-white/60 text-xs font-sans",
					children: [
						"© ",
						currentYear,
						" Sevengate Group. All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6 text-xs font-sans text-white/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-accent transition-colors",
							children: "About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/subsidiaries",
							className: "hover:text-accent transition-colors",
							children: "Subsidiaries"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/oil-and-gas",
							className: "hover:text-accent transition-colors",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/career",
							className: "hover:text-accent transition-colors",
							children: "Careers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-accent transition-colors",
							children: "Contact"
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { Navbar as n, Footer as t };
