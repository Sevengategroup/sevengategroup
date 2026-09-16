import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/hugeicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as ChevronLeft, i as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coverflow-carousel-B_nzzQes.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var useIsoLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function CoverflowCarousel({ slides, rotate = 44, depth = .6, perspective = 3, falloff = .56, fade = .1, cardWidth = "clamp(148px, 22vw, 260px)", gap = .05, loop = true, showCaption = false, showPagination = false, showNavigation = false, label = "Cover carousel", className, cardClassName }) {
	const count = slides.length;
	const frameRef = import_react.useRef(null);
	const cardRefs = import_react.useRef([]);
	/** Fractional card index at the centre. The single source of truth. */
	const posRef = import_react.useRef(0);
	/** Where the current settle is headed. Stepping off `pos` instead would
	swallow a keypress that lands mid-flight, before the round-off moves. */
	const targetRef = import_react.useRef(0);
	const widthRef = import_react.useRef(0);
	const rafRef = import_react.useRef(null);
	const dragRef = import_react.useRef(null);
	const [selected, setSelected] = import_react.useState(0);
	/** Nearest whole card, folded back into 0..count-1. */
	const indexAt = import_react.useCallback((pos) => (Math.round(pos) % count + count) % count, [count]);
	const paint = import_react.useCallback(() => {
		const width = widthRef.current;
		if (!width) return;
		const pitch = width * (1 + gap);
		const pos = posRef.current;
		cardRefs.current.forEach((card, index) => {
			if (!card) return;
			let offset = index - pos;
			if (loop) {
				offset = (offset % count + count) % count;
				if (offset > count / 2) offset -= count;
			}
			const distance = Math.abs(offset);
			const ramp = Math.pow(distance, falloff);
			const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);
			card.style.transform = `translateX(calc(-50% + ${offset * pitch}px)) translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;
			const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
			card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
			card.style.zIndex = String(100 - Math.round(distance));
		});
	}, [
		count,
		depth,
		fade,
		falloff,
		gap,
		loop,
		rotate
	]);
	const settle = import_react.useCallback((target) => {
		if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
		targetRef.current = target;
		setSelected(indexAt(target));
		const step = () => {
			const remaining = target - posRef.current;
			if (Math.abs(remaining) < 4e-4) {
				posRef.current = target;
				paint();
				rafRef.current = null;
				return;
			}
			posRef.current += remaining * .16;
			paint();
			rafRef.current = requestAnimationFrame(step);
		};
		rafRef.current = requestAnimationFrame(step);
	}, [indexAt, paint]);
	const clamp = import_react.useCallback((pos) => loop ? pos : Math.max(0, Math.min(count - 1, pos)), [count, loop]);
	const goTo = import_react.useCallback((index) => {
		const target = loop ? index + Math.round((targetRef.current - index) / count) * count : index;
		settle(clamp(target));
	}, [
		clamp,
		count,
		loop,
		settle
	]);
	const nudge = import_react.useCallback((by) => settle(clamp(Math.round(targetRef.current) + by)), [clamp, settle]);
	const onPointerDown = (event) => {
		if (rafRef.current !== null) {
			cancelAnimationFrame(rafRef.current);
			rafRef.current = null;
		}
		event.currentTarget.setPointerCapture(event.pointerId);
		targetRef.current = posRef.current;
		dragRef.current = {
			id: event.pointerId,
			x: event.clientX,
			pos: posRef.current,
			v: 0,
			t: performance.now()
		};
	};
	const onPointerMove = (event) => {
		const drag = dragRef.current;
		if (!drag || drag.id !== event.pointerId) return;
		const pitch = widthRef.current * (1 + gap);
		if (!pitch) return;
		const now = performance.now();
		const previous = posRef.current;
		posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
		drag.v = (posRef.current - previous) / Math.max(now - drag.t, 1) * 1e3;
		drag.t = now;
		const index = indexAt(posRef.current);
		if (index !== selected) setSelected(index);
		paint();
	};
	const endDrag = (event) => {
		const drag = dragRef.current;
		if (!drag || drag.id !== event.pointerId) return;
		dragRef.current = null;
		const carried = Math.max(-2, Math.min(2, drag.v * .18));
		settle(clamp(Math.round(posRef.current + carried)));
	};
	useIsoLayoutEffect(() => {
		const frame = frameRef.current;
		if (!frame) return;
		const measure = () => {
			const card = cardRefs.current[0];
			if (!card) return;
			widthRef.current = card.offsetWidth;
			paint();
		};
		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(frame);
		return () => observer.disconnect();
	}, [paint]);
	import_react.useEffect(() => () => {
		if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
	}, []);
	const active = slides[selected];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("w-full", className),
		style: { ["--cf-card"]: cardWidth },
		role: "region",
		"aria-roledescription": "carousel",
		"aria-label": label,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: frameRef,
					tabIndex: 0,
					onPointerDown,
					onPointerMove,
					onPointerUp: endDrag,
					onPointerCancel: endDrag,
					onKeyDown: (event) => {
						if (event.key === "ArrowLeft") {
							event.preventDefault();
							nudge(-1);
						} else if (event.key === "ArrowRight") {
							event.preventDefault();
							nudge(1);
						}
					},
					className: "cursor-grab overflow-hidden py-10 outline-none ring-ring focus-visible:ring-2 active:cursor-grabbing",
					style: {
						perspective: `calc(var(--cf-card) * ${perspective})`,
						touchAction: "pan-y"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative select-none",
						style: {
							height: "var(--cf-card)",
							transformStyle: "preserve-3d"
						},
						children: slides.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: (node) => {
								cardRefs.current[index] = node;
							},
							role: "group",
							"aria-roledescription": "slide",
							"aria-label": `${index + 1} of ${count}`,
							className: cn("absolute left-1/2 top-0 aspect-square overflow-hidden rounded-2xl bg-muted shadow-xl will-change-transform", cardClassName),
							style: { width: "var(--cf-card)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: slide.src,
								alt: slide.alt,
								draggable: false,
								className: "h-full w-full select-none object-cover"
							})
						}, index))
					})
				}), showNavigation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Previous slide",
					onClick: () => nudge(-1),
					className: "absolute left-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition hover:bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next slide",
					onClick: () => nudge(1),
					className: "absolute right-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition hover:bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
				})] })]
			}),
			showCaption && active?.title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-col items-center px-6 duration-300 animate-in fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] font-semibold tracking-tight text-foreground",
						children: active.title
					}),
					active.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] text-muted-foreground",
						children: active.subtitle
					}),
					active.meta && active.meta.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-10 w-full max-w-[230px] text-[12px]",
						children: active.meta.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between py-[5px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-medium text-foreground",
								children: row.value
							})]
						}, row.label))
					})
				]
			}, selected),
			showPagination && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex items-center justify-center gap-2",
				children: slides.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Go to slide ${index + 1}`,
					"aria-current": index === selected,
					onClick: () => goTo(index),
					className: cn("size-2 rounded-full bg-foreground transition-opacity", index === selected ? "opacity-100" : "opacity-30")
				}, index))
			})
		]
	});
}
//#endregion
export { CoverflowCarousel as t };
