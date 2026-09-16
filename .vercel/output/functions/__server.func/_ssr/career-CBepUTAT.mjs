import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, t as HugeiconsIcon } from "../_libs/hugeicons__react+react.mjs";
import { l as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as Briefcase02Icon, d as Location01Icon, h as Cancel01Icon } from "../_libs/hugeicons__core-free-icons.mjs";
import { n as Navbar, t as Footer } from "./Footer-BTIkrdsZ.mjs";
import { t as ChatWidget } from "./ChatWidget-CUBVLoNx.mjs";
import { i as createServerFn } from "./server-CgASqeYN.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DbxSuZNl.mjs";
import { i as Route$10 } from "./router-Dr_yIcMN.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as ReactRemoveScroll } from "../_libs/react-remove-scroll+[...].mjs";
import { t as hideOthers } from "../_libs/aria-hidden.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/career-CBepUTAT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var __defProp$14 = Object.defineProperty;
var __name$14 = (target, value) => __defProp$14(target, "name", {
	value,
	configurable: true
});
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return /* @__PURE__ */ __name$14(function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) return ourEventHandler?.(event);
	}, "handleEvent");
}
__name$14(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
	if (!canUseDOM) throw new Error("Cannot access window outside of the DOM");
	return element?.ownerDocument?.defaultView ?? window;
}
__name$14(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
	if (!canUseDOM) throw new Error("Cannot access document outside of the DOM");
	return element?.ownerDocument ?? document;
}
__name$14(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
	const { activeElement } = getOwnerDocument(node);
	if (!activeElement?.nodeName) return null;
	if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getOwnerDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
__name$14(getActiveElement, "getActiveElement");
function isFrame(element) {
	return element.tagName === "IFRAME";
}
__name$14(isFrame, "isFrame");
var __defProp$13 = Object.defineProperty;
var __name$13 = (target, value) => __defProp$13(target, "name", {
	value,
	configurable: true
});
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$13(setRef$1, "setRef");
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$1(refs[i], null);
			}
		};
	};
}
__name$13(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
__name$13(useComposedRefs, "useComposedRefs");
var __defProp$12 = Object.defineProperty;
var __name$12 = (target, value) => __defProp$12(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
	const Context = import_react.createContext(defaultContext);
	Context.displayName = rootComponentName + "Context";
	const Provider = /* @__PURE__ */ __name$12((props) => {
		const { children, ...context } = props;
		const value = import_react.useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	}, "Provider");
	Provider.displayName = rootComponentName + "Provider";
	function useContext2(consumerName, options = {}) {
		const { optional = false } = options;
		const context = import_react.useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		if (optional) return void 0;
		throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
	}
	__name$12(useContext2, "useContext");
	return [Provider, useContext2];
}
__name$12(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = /* @__PURE__ */ __name$12((props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope, options = {}) {
			const { optional = false } = options;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$12(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$12(createContext3, "createContext");
	const createScope = /* @__PURE__ */ __name$12(() => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return /* @__PURE__ */ __name$12(function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		}, "useScope");
	}, "createScope");
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name$12(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = /* @__PURE__ */ __name$12(() => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return /* @__PURE__ */ __name$12(function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		}, "useComposedScopes");
	}, "createScope");
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
__name$12(composeContextScopes, "composeContextScopes");
var useLayoutEffect2 = globalThis?.document ? import_react.useLayoutEffect : () => {};
var __defProp$11 = Object.defineProperty;
var __name$11 = (target, value) => __defProp$11(target, "name", {
	value,
	configurable: true
});
var useReactId = import_react[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
	const [id, setId] = import_react.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
__name$11(useId, "useId");
var __defProp$10 = Object.defineProperty;
var __name$10 = (target, value) => __defProp$10(target, "name", {
	value,
	configurable: true
});
var useReactEffectEvent = import_react[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = import_react[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
	if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
	const ref = import_react.useRef(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
		ref.current = callback;
	});
	else useLayoutEffect2(() => {
		ref.current = callback;
	});
	return import_react.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name$10(useEffectEvent, "useEffectEvent");
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", {
	value,
	configurable: true
});
var useInsertionEffect = import_react[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = /* @__PURE__ */ __name$9(() => {}, "onChange"), caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	return [isControlled ? prop : uncontrolledProp, import_react.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
__name$9(useControllableState, "useControllableState");
function useUncontrolledState({ defaultProp, onChange }) {
	const [value, setValue] = import_react.useState(defaultProp);
	const prevValueRef = import_react.useRef(value);
	const onChangeRef = import_react.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
__name$9(useUncontrolledState, "useUncontrolledState");
function isFunction(value) {
	return typeof value === "function";
}
__name$9(isFunction, "isFunction");
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
	const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
	const isControlled = controlledState !== void 0;
	const onChange = useEffectEvent(onChangeProp);
	const args = [{
		...initialArg,
		state: defaultProp
	}];
	if (init) args.push(init);
	const [internalState, dispatch] = import_react.useReducer((state2, action) => {
		if (action.type === SYNC_STATE) return {
			...state2,
			state: action.state
		};
		const next = reducer(state2, action);
		if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
		return next;
	}, ...args);
	const uncontrolledState = internalState.state;
	const prevValueRef = import_react.useRef(uncontrolledState);
	import_react.useEffect(() => {
		if (prevValueRef.current !== uncontrolledState) {
			prevValueRef.current = uncontrolledState;
			if (!isControlled) onChange(uncontrolledState);
		}
	}, [
		uncontrolledState,
		prevValueRef,
		isControlled
	]);
	const state = import_react.useMemo(() => {
		if (controlledState !== void 0) return {
			...internalState,
			state: controlledState
		};
		return internalState;
	}, [internalState, controlledState]);
	import_react.useEffect(() => {
		if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
			type: SYNC_STATE,
			state: controlledState
		});
	}, [
		controlledState,
		internalState.state,
		isControlled
	]);
	return [state, dispatch];
}
__name$9(useControllableStateReducer, "useControllableStateReducer");
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
		const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$8(createSlot, "createSlot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$8((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
	return Slottable2;
}
__name$8(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name$8((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$8(mergeProps, "mergeProps");
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$8(getElementRef$1, "getElementRef");
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name$8(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name$8(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$8(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name$8((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name$8((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = import_react[" use ".trim().toString()];
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", {
	value,
	configurable: true
});
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = /* @__PURE__ */ createSlot(`Primitive.${node}`);
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
function dispatchDiscreteCustomEvent(target, event) {
	if (target) import_react_dom.flushSync(() => target.dispatchEvent(event));
}
__name$7(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", {
	value,
	configurable: true
});
function useCallbackRef(callback) {
	const callbackRef = import_react.useRef(callback);
	import_react.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name$6(useCallbackRef, "useCallbackRef");
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", {
	value,
	configurable: true
});
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = import_react.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$5(function DismissableLayer2(props, forwardedRef) {
	const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	const ownerDocument = node?.ownerDocument ?? globalThis?.document;
	const [, force] = import_react.useState({});
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const layers = Array.from(context.layers);
	const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
	const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
	const index = node ? layers.indexOf(node) : -1;
	const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
	const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
	const isDeferredPointerDownOutsideRef = import_react.useRef(false);
	const pointerDownOutside = usePointerDownOutside((event) => {
		onPointerDownOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, {
		ownerDocument,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces: context.dismissableSurfaces,
		shouldHandlePointerDownOutside: import_react.useCallback((target) => {
			if (!(target instanceof Node)) return false;
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
			return isPointerEventsEnabled && !isPointerDownOnBranch;
		}, [context.branches, isPointerEventsEnabled])
	});
	const focusOutside = useFocusOutside((event) => {
		if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
		const target = event.target;
		if ([...context.branches].some((branch) => branch.contains(target))) return;
		onFocusOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, ownerDocument);
	const isHighestLayer = node ? index === layers.length - 1 : false;
	const handleKeyDown = useCallbackRef((event) => {
		if (event.key !== "Escape") return;
		onEscapeKeyDown?.(event);
		if (!event.defaultPrevented && onDismiss) {
			event.preventDefault();
			onDismiss();
		}
	});
	import_react.useEffect(() => {
		if (!isHighestLayer) return;
		ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [
		ownerDocument,
		isHighestLayer,
		handleKeyDown
	]);
	import_react.useEffect(() => {
		if (!node) return;
		if (disableOutsidePointerEvents) {
			if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
				originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
				ownerDocument.body.style.pointerEvents = "none";
			}
			context.layersWithOutsidePointerEventsDisabled.add(node);
		}
		context.layers.add(node);
		dispatchUpdate();
		return () => {
			if (disableOutsidePointerEvents) {
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
			}
		};
	}, [
		node,
		ownerDocument,
		disableOutsidePointerEvents,
		context
	]);
	import_react.useEffect(() => {
		return () => {
			if (!node) return;
			context.layers.delete(node);
			context.layersWithOutsidePointerEventsDisabled.delete(node);
			dispatchUpdate();
		};
	}, [node, context]);
	import_react.useEffect(() => {
		const handleUpdate = /* @__PURE__ */ __name$5(() => force({}), "handleUpdate");
		document.addEventListener(CONTEXT_UPDATE, handleUpdate);
		return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...layerProps,
		ref: composedRefs,
		style: {
			pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
			...props.style
		},
		onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
		onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
	});
}, "DismissableLayer"));
function useDismissableLayerSurface() {
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	import_react.useEffect(() => {
		if (!node) return;
		context.dismissableSurfaces.add(node);
		return () => {
			context.dismissableSurfaces.delete(node);
		};
	}, [node, context.dismissableSurfaces]);
	return setNode;
}
__name$5(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name$5(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
	const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
	const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
	const isPointerInsideReactTreeRef = import_react.useRef(false);
	const isPointerDownOutsideRef = import_react.useRef(false);
	const interceptedOutsideInteractionEventsRef = import_react.useRef(/* @__PURE__ */ new Map());
	const handleClickRef = import_react.useRef(() => {});
	import_react.useEffect(() => {
		function resetOutsideInteraction() {
			isPointerDownOutsideRef.current = false;
			isDeferredPointerDownOutsideRef.current = false;
			interceptedOutsideInteractionEventsRef.current.clear();
		}
		__name$5(resetOutsideInteraction, "resetOutsideInteraction");
		function isOutsideInteractionIntercepted() {
			return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
		}
		__name$5(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
		function handleInteractionCapture(event) {
			if (!isPointerDownOutsideRef.current) return;
			const target = event.target;
			if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
			if (event.type === "click") window.setTimeout(() => {
				if (isPointerDownOutsideRef.current) handleClickRef.current();
			}, 0);
		}
		__name$5(handleInteractionCapture, "handleInteractionCapture");
		function handleInteractionBubble(event) {
			if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
		}
		__name$5(handleInteractionBubble, "handleInteractionBubble");
		const handlePointerDown = /* @__PURE__ */ __name$5((event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
					resetOutsideInteraction();
					if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				__name$5(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
				if (!shouldHandlePointerDownOutside(event.target)) {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
					isPointerInsideReactTreeRef.current = false;
					return;
				}
				const eventDetail = { originalEvent: event };
				isPointerDownOutsideRef.current = true;
				isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
				interceptedOutsideInteractionEventsRef.current.clear();
				if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
				else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				}
			} else {
				ownerDocument.removeEventListener("click", handleClickRef.current);
				resetOutsideInteraction();
			}
			isPointerInsideReactTreeRef.current = false;
		}, "handlePointerDown");
		const outsideInteractionEvents = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (const eventName of outsideInteractionEvents) {
			ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
			ownerDocument.addEventListener(eventName, handleInteractionBubble);
		}
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.removeEventListener(eventName, handleInteractionBubble);
			}
		};
	}, [
		ownerDocument,
		handlePointerDownOutside,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces,
		shouldHandlePointerDownOutside
	]);
	return { onPointerDownCapture: /* @__PURE__ */ __name$5(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
}
__name$5(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef(onFocusOutside);
	const isFocusInsideReactTreeRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleFocus = /* @__PURE__ */ __name$5((event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
		}, "handleFocus");
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: /* @__PURE__ */ __name$5(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ __name$5(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
	};
}
__name$5(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
	const event = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(event);
}
__name$5(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(target, event);
	else target.dispatchEvent(event);
}
__name$5(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", {
	value,
	configurable: true
});
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var FocusScope = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function FocusScope2(props, forwardedRef) {
	const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
	const [container, setContainer] = import_react.useState(null);
	const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
	const lastFocusedElementRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, setContainer);
	const focusScope = import_react.useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	import_react.useEffect(() => {
		if (trapped) {
			let handleFocusIn2 = function(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			}, handleFocusOut2 = function(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			}, handleMutations2 = function(mutations) {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			__name$4(handleFocusIn2, "handleFocusIn");
			__name$4(handleFocusOut2, "handleFocusOut");
			__name$4(handleMutations2, "handleMutations");
			document.addEventListener("focusin", handleFocusIn2);
			document.addEventListener("focusout", handleFocusOut2);
			const mutationObserver = new MutationObserver(handleMutations2);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn2);
				document.removeEventListener("focusout", handleFocusOut2);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused
	]);
	import_react.useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
					if (document.activeElement === previouslyFocusedElement) focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope
	]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const container2 = event.currentTarget;
			const [first, last] = getTabbableEdges(container2);
			if (!(first && last)) {
				if (focusedElement === container2) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...scopeProps,
		ref: composedRefs,
		onKeyDown: handleKeyDown
	});
}, "FocusScope"));
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
__name$4(focusFirst, "focusFirst");
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
__name$4(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$4((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$4(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
__name$4(findVisible, "findVisible");
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
__name$4(isHidden, "isHidden");
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
__name$4(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
__name$4(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
__name$4(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
__name$4(arrayRemove, "arrayRemove");
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
__name$4(removeLinks, "removeLinks");
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
var Portal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$3(function Portal2(props, forwardedRef) {
	const { container: containerProp, ...portalProps } = props;
	const [mounted, setMounted] = import_react.useState(false);
	useLayoutEffect2(() => setMounted(true), []);
	const container = containerProp || mounted && globalThis?.document?.body;
	return container ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...portalProps,
		ref: forwardedRef
	}), container) : null;
}, "Portal"));
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
__name$2(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name$2((props) => {
	const { present, children } = props;
	const presence = usePresence(present);
	const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react.Children.only(children);
	const ref = useStableComposedRefs(presence.ref, getElementRef(child));
	return typeof children === "function" || presence.isPresent ? import_react.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
	const [node, setNode] = import_react.useState();
	const stylesRef = import_react.useRef(null);
	const prevPresentRef = import_react.useRef(present);
	const prevAnimationNameRef = import_react.useRef("none");
	const mountAnimationNameRef = import_react.useRef(void 0);
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react.useEffect(() => {
		if (state === "mounted") {
			prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
			mountAnimationNameRef.current = void 0;
		} else prevAnimationNameRef.current = "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) {
				mountAnimationNameRef.current = currentAnimationName;
				send("MOUNT");
			} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = /* @__PURE__ */ __name$2((event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			}, "handleAnimationEnd");
			const handleAnimationStart = /* @__PURE__ */ __name$2((event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			}, "handleAnimationStart");
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react.useCallback((node2) => {
			if (node2) {
				const styles = getComputedStyle(node2);
				stylesRef.current = styles;
				mountAnimationNameRef.current = getAnimationName(styles);
			} else stylesRef.current = null;
			setNode(node2);
		}, [])
	};
}
__name$2(usePresence, "usePresence");
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$2(setRef, "setRef");
function useStableComposedRefs(...refs) {
	const refsRef = import_react.useRef(refs);
	refsRef.current = refs;
	return import_react.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(currentRefs[i], null);
			}
		};
	}, []);
}
__name$2(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
__name$2(getAnimationName, "getAnimationName");
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$2(getElementRef, "getElementRef");
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var count = 0;
var guards = null;
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
__name$1(FocusGuards, "FocusGuards");
function useFocusGuards() {
	import_react.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
__name$1(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
__name$1(createFocusGuard, "createFocusGuard");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog$1 = /* @__PURE__ */ __name((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
}, "Dialog");
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
var DialogPortal$1 = /* @__PURE__ */ __name((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const composedRefs = useComposedRefs(forwardedRef, useDismissableLayerSurface());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME = "DialogContent";
var DialogContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
			"aria-labelledby": context.titlePresent ? context.titleId : void 0,
			"data-state": getState(context.open),
			...contentProps,
			ref: forwardedRef,
			deferPointerDownOutside: true,
			onDismiss: () => context.onOpenChange(false)
		})
	}) });
}, "DialogContentImpl"));
var TITLE_NAME = "DialogTitle";
var DialogTitle$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogTitle2(props, forwardedRef) {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME, __scopeDialog);
	const { setTitleCount } = context;
	useLayoutEffect2(() => {
		setTitleCount((count) => count + 1);
		return () => setTitleCount((count) => count - 1);
	}, [setTitleCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
}, "DialogTitle"));
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogDescription2(props, forwardedRef) {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
	const { setDescriptionCount } = context;
	useLayoutEffect2(() => {
		setDescriptionCount((count) => count + 1);
		return () => setDescriptionCount((count) => count - 1);
	}, [setDescriptionCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
}, "DialogDescription"));
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function getState(open) {
	return open ? "open" : "closed";
}
__name(getState, "getState");
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-none", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
			icon: Cancel01Icon,
			className: "h-4 w-4",
			strokeWidth: 1.2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var nigeriaStatesAndLGAs = {
	"Abia": [
		"Aba North",
		"Aba South",
		"Arochukwu",
		"Bende",
		"Ikwuano",
		"Isiala Ngwa North",
		"Isiala Ngwa South",
		"Isuikwuato",
		"Obi Ngwa",
		"Ohafia",
		"Osisioma",
		"Ugwunagbo",
		"Ukwa East",
		"Ukwa West",
		"Umuahia North",
		"Umuahia South",
		"Umunneochi"
	],
	"Adamawa": [
		"Demsa",
		"Fufure",
		"Ganye",
		"Gayuk",
		"Gombi",
		"Grie",
		"Hong",
		"Jada",
		"Lamurde",
		"Madagali",
		"Maiha",
		"Mayo Belwa",
		"Michika",
		"Mubi North",
		"Mubi South",
		"Numan",
		"Shelleng",
		"Song",
		"Toungo",
		"Yola North",
		"Yola South"
	],
	"Akwa Ibom": [
		"Abak",
		"Eastern Obolo",
		"Eket",
		"Esit Eket",
		"Essien Udim",
		"Etim Ekpo",
		"Etinan",
		"Ibeno",
		"Ibesikpo Asutan",
		"Ibiono-Ibom",
		"Ika",
		"Ikono",
		"Ikot Abasi",
		"Ikot Ekpene",
		"Ini",
		"Itu",
		"Mbo",
		"Mkpat-Enin",
		"Nsit-Atai",
		"Nsit-Ibom",
		"Nsit-Ubium",
		"Obot Akara",
		"Okobo",
		"Onna",
		"Oron",
		"Oruk Anam",
		"Udung-Uko",
		"Ukanafun",
		"Uruan",
		"Urue-Offong/Oruko",
		"Uyo"
	],
	"Anambra": [
		"Aguata",
		"Anambra East",
		"Anambra West",
		"Anaocha",
		"Awka North",
		"Awka South",
		"Ayamelum",
		"Dunukofia",
		"Ekwusigo",
		"Idemili North",
		"Idemili South",
		"Ihiala",
		"Njikoka",
		"Nnewi North",
		"Nnewi South",
		"Ogbaru",
		"Onitsha North",
		"Onitsha South",
		"Orumba North",
		"Orumba South",
		"Oyi"
	],
	"Bauchi": [
		"Alkaleri",
		"Bauchi",
		"Bogoro",
		"Damban",
		"Darazo",
		"Dass",
		"Gamawa",
		"Ganjuwa",
		"Giade",
		"Itas/Gadau",
		"Jama'are",
		"Katagum",
		"Kirfi",
		"Misau",
		"Ningi",
		"Shira",
		"Tafawa Balewa",
		"Toro",
		"Warji",
		"Zaki"
	],
	"Bayelsa": [
		"Brass",
		"Ekeremor",
		"Kolokuma/Opokuma",
		"Nembe",
		"Ogbia",
		"Sagbama",
		"Southern Ijaw",
		"Yenagoa"
	],
	"Benue": [
		"Ado",
		"Agatu",
		"Apa",
		"Buruku",
		"Gboko",
		"Guma",
		"Gwer East",
		"Gwer West",
		"Katsina-Ala",
		"Konshisha",
		"Kwande",
		"Logo",
		"Makurdi",
		"Obi",
		"Ogbadibo",
		"Ohimini",
		"Oju",
		"Okpokwu",
		"Otukpo",
		"Tarka",
		"Ukum",
		"Ushongo",
		"Vandeikya"
	],
	"Borno": [
		"Abadam",
		"Askira/Uba",
		"Bama",
		"Bayo",
		"Biu",
		"Chibok",
		"Damboa",
		"Dikwa",
		"Gubio",
		"Guzamala",
		"Gwoza",
		"Hawul",
		"Jere",
		"Kaga",
		"Kala/Balge",
		"Konduga",
		"Kukawa",
		"Kwaya Kusar",
		"Mafa",
		"Magumeri",
		"Maiduguri",
		"Marte",
		"Mobbar",
		"Monguno",
		"Ngala",
		"Nganzai",
		"Shani"
	],
	"Cross River": [
		"Abi",
		"Akamkpa",
		"Akpabuyo",
		"Bakassi",
		"Bekwarra",
		"Biase",
		"Boki",
		"Calabar Municipal",
		"Calabar South",
		"Etung",
		"Ikom",
		"Obanliku",
		"Obubra",
		"Obudu",
		"Odukpani",
		"Ogoja",
		"Yakuur",
		"Yala"
	],
	"Delta": [
		"Aniocha North",
		"Aniocha South",
		"Bomadi",
		"Burutu",
		"Ethiope East",
		"Ethiope West",
		"Ika North East",
		"Ika South",
		"Isoko North",
		"Isoko South",
		"Ndokwa East",
		"Ndokwa West",
		"Okpe",
		"Oshimili North",
		"Oshimili South",
		"Patani",
		"Sapele",
		"Udu",
		"Ughelli North",
		"Ughelli South",
		"Ukwuani",
		"Uvwie",
		"Warri North",
		"Warri South",
		"Warri South West"
	],
	"Ebonyi": [
		"Abakaliki",
		"Afikpo North",
		"Afikpo South",
		"Ebonyi",
		"Ezza North",
		"Ezza South",
		"Ikwo",
		"Ishielu",
		"Ivo",
		"Izzi",
		"Ohaozara",
		"Ohaukwu",
		"Onicha"
	],
	"Edo": [
		"Akoko-Edo",
		"Egor",
		"Esan Central",
		"Esan North-East",
		"Esan South-East",
		"Esan West",
		"Etsako Central",
		"Etsako East",
		"Etsako West",
		"Igueben",
		"Ikpoba Okha",
		"Orhionmwon",
		"Oredo",
		"Ovia North-East",
		"Ovia South-West",
		"Owan East",
		"Owan West",
		"Uhunmwonde"
	],
	"Ekiti": [
		"Ado Ekiti",
		"Efon",
		"Ekiti East",
		"Ekiti South-West",
		"Ekiti West",
		"Emure",
		"Gbonyin",
		"Ido Osi",
		"Ijero",
		"Ikere",
		"Ikole",
		"Ilejemeje",
		"Irepodun/Ifelodun",
		"Ise/Orun",
		"Moba",
		"Oye"
	],
	"Enugu": [
		"Aninri",
		"Awgu",
		"Enugu East",
		"Enugu North",
		"Enugu South",
		"Ezeagu",
		"Igbo Etiti",
		"Igbo Eze North",
		"Igbo Eze South",
		"Isi Uzo",
		"Nkanu East",
		"Nkanu West",
		"Nsukka",
		"Oji River",
		"Udenu",
		"Udi",
		"Uzo Uwani"
	],
	"FCT": [
		"Abaji",
		"Bwari",
		"Gwagwalada",
		"Kuje",
		"Kwali",
		"Municipal Area Council"
	],
	"Gombe": [
		"Akko",
		"Balanga",
		"Billiri",
		"Dukku",
		"Funakaye",
		"Gombe",
		"Kaltungo",
		"Kwami",
		"Nafada",
		"Shongom",
		"Yamaltu/Deba"
	],
	"Imo": [
		"Aboh Mbaise",
		"Ahiazu Mbaise",
		"Ehime Mbano",
		"Ezinihitte",
		"Ideato North",
		"Ideato South",
		"Ihitte/Uboma",
		"Ikeduru",
		"Isiala Mbano",
		"Isu",
		"Mbaitoli",
		"Ngor Okpala",
		"Njaba",
		"Nkwerre",
		"Nwangele",
		"Obowo",
		"Oguta",
		"Ohaji/Egbema",
		"Okigwe",
		"Orlu",
		"Orsu",
		"Oru East",
		"Oru West",
		"Owerri Municipal",
		"Owerri North",
		"Owerri West",
		"Unuimo"
	],
	"Jigawa": [
		"Auyo",
		"Babura",
		"Biriniwa",
		"Birnin Kudu",
		"Buji",
		"Dutse",
		"Gagarawa",
		"Garki",
		"Gumel",
		"Guri",
		"Gwaram",
		"Gwiwa",
		"Hadejia",
		"Jahun",
		"Kafin Hausa",
		"Kaugama",
		"Kazaure",
		"Kiri Kasama",
		"Kiyawa",
		"Kaugama",
		"Maigatari",
		"Malam Madori",
		"Miga",
		"Ringim",
		"Roni",
		"Sule Tankarkar",
		"Taura",
		"Yankwashi"
	],
	"Kaduna": [
		"Birnin Gwari",
		"Chikun",
		"Giwa",
		"Igabi",
		"Ikara",
		"Jaba",
		"Jema'a",
		"Kachia",
		"Kaduna North",
		"Kaduna South",
		"Kagarko",
		"Kajuru",
		"Kaura",
		"Kauru",
		"Kubau",
		"Kudan",
		"Lere",
		"Makarfi",
		"Sabon Gari",
		"Sanga",
		"Soba",
		"Zangon Kataf",
		"Zaria"
	],
	"Kano": [
		"Ajingi",
		"Albasu",
		"Bagwai",
		"Bebeji",
		"Bichi",
		"Bunkure",
		"Dala",
		"Dambatta",
		"Dawakin Kudu",
		"Dawakin Tofa",
		"Doguwa",
		"Fagge",
		"Gabasawa",
		"Garko",
		"Garun Mallam",
		"Gaya",
		"Gezawa",
		"Gwale",
		"Gwarzo",
		"Kabo",
		"Kano Municipal",
		"Karaye",
		"Kibiya",
		"Kiru",
		"Kumbotso",
		"Kunchi",
		"Kura",
		"Madobi",
		"Makoda",
		"Minjibir",
		"Nasarawa",
		"Rano",
		"Rimin Gado",
		"Rogo",
		"Shanono",
		"Sumaila",
		"Takai",
		"Tarauni",
		"Tofa",
		"Tsanyawa",
		"Tudun Wada",
		"Ungogo",
		"Warawa",
		"Wudil"
	],
	"Katsina": [
		"Bakori",
		"Batagarawa",
		"Batsari",
		"Baure",
		"Bindawa",
		"Charanchi",
		"Dandume",
		"Danja",
		"Dan Musa",
		"Daura",
		"Dutsi",
		"Dutsin Ma",
		"Faskari",
		"Funtua",
		"Ingawa",
		"Jibia",
		"Kafur",
		"Kaita",
		"Kankara",
		"Kankia",
		"Katsina",
		"Kurfi",
		"Kusada",
		"Mai'Adua",
		"Malumfashi",
		"Mani",
		"Mashi",
		"Matazu",
		"Musawa",
		"Rimi",
		"Sabuwa",
		"Safana",
		"Sandamu",
		"Zango"
	],
	"Kebbi": [
		"Aleiro",
		"Arewa Dandi",
		"Argungu",
		"Augie",
		"Bagudo",
		"Birnin Kebbi",
		"Bunza",
		"Dandi",
		"Fakai",
		"Gwandu",
		"Jega",
		"Kalgo",
		"Koko/Besse",
		"Maiyama",
		"Ngaski",
		"Sakaba",
		"Shanga",
		"Suru",
		"Wasagu/Danko",
		"Yauri",
		"Zuru"
	],
	"Kogi": [
		"Adavi",
		"Ajaokuta",
		"Ankpa",
		"Bassa",
		"Dekina",
		"Ibaji",
		"Idah",
		"Igalamela Odolu",
		"Ijumu",
		"Kabba/Bunu",
		"Kogi",
		"Lokoja",
		"Mopa Muro",
		"Ofu",
		"Ogori/Magongo",
		"Okehi",
		"Okene",
		"Olamaboro",
		"Omala",
		"Yagba East",
		"Yagba West"
	],
	"Kwara": [
		"Asa",
		"Baruten",
		"Edu",
		"Ekiti",
		"Ifelodun",
		"Ilorin East",
		"Ilorin South",
		"Ilorin West",
		"Irepodun",
		"Isin",
		"Kaiama",
		"Moro",
		"Offa",
		"Oke Ero",
		"Oyun",
		"Pategi"
	],
	"Lagos": [
		"Agege",
		"Ajeromi-Ifelodun",
		"Alimosho",
		"Amuwo-Odofin",
		"Apapa",
		"Badagry",
		"Epe",
		"Eti Osa",
		"Ibeju-Lekki",
		"Ifako-Ijaiye",
		"Ikeja",
		"Ikorodu",
		"Kosofe",
		"Lagos Island",
		"Lagos Mainland",
		"Mushin",
		"Ojo",
		"Oshodi-Isolo",
		"Shomolu",
		"Surulere"
	],
	"Nasarawa": [
		"Akwanga",
		"Awe",
		"Doma",
		"Karu",
		"Keana",
		"Keffi",
		"Kokona",
		"Lafia",
		"Nasarawa",
		"Nasarawa Egon",
		"Obi",
		"Toto",
		"Wamba"
	],
	"Niger": [
		"Agaie",
		"Agwara",
		"Bida",
		"Borgu",
		"Bosso",
		"Chanchaga",
		"Edati",
		"Gbako",
		"Gurara",
		"Katcha",
		"Kontagora",
		"Lapai",
		"Lavun",
		"Magama",
		"Mariga",
		"Mashegu",
		"Mokwa",
		"Moya",
		"Paikoro",
		"Rafi",
		"Rijau",
		"Shiroro",
		"Suleja",
		"Tafa",
		"Wushishi"
	],
	"Ogun": [
		"Abeokuta North",
		"Abeokuta South",
		"Ado-Odo/Ota",
		"Egbado North",
		"Egbado South",
		"Ewekoro",
		"Ifo",
		"Ijebu East",
		"Ijebu North",
		"Ijebu North East",
		"Ijebu Ode",
		"Ikenne",
		"Imeko Afon",
		"Ipokia",
		"Obafemi Owode",
		"Odeda",
		"Odogbolu",
		"Ogun Waterside",
		"Remo North",
		"Shagamu"
	],
	"Ondo": [
		"Akoko North-East",
		"Akoko North-West",
		"Akoko South-East",
		"Akoko South-West",
		"Akure North",
		"Akure South",
		"Ese Odo",
		"Idanre",
		"Ifedore",
		"Ilaje",
		"Ile Oluji/Okeigbo",
		"Irele",
		"Odigbo",
		"Okitipupa",
		"Ondo East",
		"Ondo West",
		"Ose",
		"Owo"
	],
	"Osun": [
		"Aiyedade",
		"Aiyedire",
		"Atakunmosa East",
		"Atakunmosa West",
		"Boluwaduro",
		"Boripe",
		"Ede North",
		"Ede South",
		"Egbedore",
		"Ejigbo",
		"Ife Central",
		"Ife East",
		"Ife North",
		"Ife South",
		"Ifedayo",
		"Ifelodun",
		"Ila",
		"Ilesa East",
		"Ilesa West",
		"Irepodun",
		"Irewole",
		"Isokan",
		"Iwo",
		"Obokun",
		"Odo Otin",
		"Ola Oluwa",
		"Olorunda",
		"Oriade",
		"Orolu",
		"Osogbo"
	],
	"Oyo": [
		"Afijio",
		"Akinyele",
		"Atiba",
		"Atisbo",
		"Egbeda",
		"Ibadan North",
		"Ibadan North-East",
		"Ibadan North-West",
		"Ibadan South-East",
		"Ibadan South-West",
		"Ibarapa Central",
		"Ibarapa East",
		"Ibarapa North",
		"Ido",
		"Irepo",
		"Iseyin",
		"Itesiwaju",
		"Iwajowa",
		"Kajola",
		"Lagelu",
		"Ogbomosho North",
		"Ogbomosho South",
		"Ogo Oluwa",
		"Olorunsogo",
		"Oluyole",
		"Ona Ara",
		"Orelope",
		"Ori Ire",
		"Oyo",
		"Oyo East",
		"Saki East",
		"Saki West",
		"Surulere"
	],
	"Plateau": [
		"Bokkos",
		"Barkin Ladi",
		"Bassa",
		"Jos East",
		"Jos North",
		"Jos South",
		"Kanam",
		"Kanke",
		"Langtang North",
		"Langtang South",
		"Mangu",
		"Mikang",
		"Pankshin",
		"Qua'an Pan",
		"Riyom",
		"Shendam",
		"Wase"
	],
	"Rivers": [
		"Abua/Odual",
		"Ahoada East",
		"Ahoada West",
		"Akuku-Toru",
		"Andoni",
		"Asari-Toru",
		"Bonny",
		"Degema",
		"Eleme",
		"Emuoha",
		"Etche",
		"Gokana",
		"Ikwerre",
		"Khana",
		"Obio/Akpor",
		"Ogba/Egbema/Ndoni",
		"Ogu/Bolo",
		"Okrika",
		"Omuma",
		"Opobo/Nkoro",
		"Oyigbo",
		"Port Harcourt",
		"Tai"
	],
	"Sokoto": [
		"Binji",
		"Bodinga",
		"Dange Shuni",
		"Gada",
		"Goronyo",
		"Gudu",
		"Gwadabawa",
		"Illela",
		"Isa",
		"Kebbe",
		"Kware",
		"Rabah",
		"Sabon Birni",
		"Shagari",
		"Silame",
		"Sokoto North",
		"Sokoto South",
		"Tambuwal",
		"Tangaza",
		"Tureta",
		"Wamako",
		"Wurno",
		"Yabo"
	],
	"Taraba": [
		"Ardo Kola",
		"Bali",
		"Donga",
		"Gashaka",
		"Gassol",
		"Ibi",
		"Jalingo",
		"Karim Lamido",
		"Kumi",
		"Lau",
		"Sardauna",
		"Takum",
		"Ussa",
		"Wukari",
		"Yorro",
		"Zing"
	],
	"Yobe": [
		"Bade",
		"Bursari",
		"Damaturu",
		"Fika",
		"Fune",
		"Geidam",
		"Gujba",
		"Gulani",
		"Jakusko",
		"Karasuwa",
		"Machina",
		"Nangere",
		"Nguru",
		"Potiskum",
		"Tarmuwa",
		"Yunusari",
		"Yusufari"
	],
	"Zamfara": [
		"Anka",
		"Bakura",
		"Birnin Magaji/Kiyaw",
		"Bukkuyum",
		"Bungudu",
		"Gummi",
		"Gusau",
		"Kaura Namoda",
		"Maradun",
		"Maru",
		"Shinkafi",
		"Talata Mafara",
		"Chafe",
		"Zurmi"
	]
};
var vision_and_mission_default = "/assets/vision%20and%20mission-CnnuLA5N.jpg";
var submitApplication = createServerFn({ method: "POST" }).handler(createSsrRpc("73d61aee52f588528a341b5fcc27302ee81d0568cc5d4930f05acd63b6bca368"));
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
function CareerPage() {
	const { jobs } = Route$10.useLoaderData();
	const [selectedJob, setSelectedJob] = (0, import_react.useState)(null);
	const [applyingJob, setApplyingJob] = (0, import_react.useState)(null);
	const [applicantNationality, setApplicantNationality] = (0, import_react.useState)("Nigeria");
	const [applicantState, setApplicantState] = (0, import_react.useState)("");
	const [applicantLga, setApplicantLga] = (0, import_react.useState)("");
	const [isApplying, setIsApplying] = (0, import_react.useState)(false);
	const [applyError, setApplyError] = (0, import_react.useState)("");
	const [applySuccess, setApplySuccess] = (0, import_react.useState)(false);
	const handleApplySubmit = async (e) => {
		e.preventDefault();
		if (!applyingJob) return;
		setIsApplying(true);
		setApplyError("");
		setApplySuccess(false);
		try {
			const formData = new FormData(e.currentTarget);
			formData.set("jobTitle", "General Application");
			formData.set("jobId", "general");
			await submitApplication({ data: formData });
			setApplySuccess(true);
		} catch (err) {
			setApplyError(err.message || "Failed to submit application. Please try again.");
		} finally {
			setIsApplying(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 md:h-36" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-12 md:py-24 container-x max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					animate: "visible",
					variants: staggerContainer,
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									variants: fadeInUp,
									className: "text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-4 leading-relaxed",
									children: "Join Sevengate Group"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
									variants: fadeInUp,
									className: "font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]",
									children: [
										"Build The Future",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Of Africa"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									variants: fadeInUp,
									className: "text-muted-foreground font-light leading-relaxed text-lg space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are always looking for driven, technical, and internationally-minded professionals to join our industry across technology, energy, mining infrastructure and construction." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Sevengate is an equal employment opportunity company. We work as a team and we win as a team. For more on how to join our team, contact us on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:career@sevengategroup.com",
										className: "text-accent hover:underline",
										children: "career@sevengategroup.com"
									})] })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeInUp,
							className: "flex flex-col items-start border-t border-border pt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setApplySuccess(false);
									setApplyingJob({
										id: "general",
										title: "General Application"
									});
								},
								className: "bg-accent text-white px-12 py-6 text-lg font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
								children: "Submit CV"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: fadeInUp,
						className: "relative w-full rounded-none overflow-hidden shadow-2xl group bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: vision_and_mission_default,
							alt: "Career at Sevengate Group",
							className: "w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24 bg-gray-50 border-t border-gray-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .6 },
						className: "mb-12 flex flex-col items-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl md:text-4xl font-normal text-foreground uppercase tracking-tight mb-4",
							children: "Current Opportunities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-20 h-1 bg-accent" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .2
						},
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: jobs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground col-span-full text-center py-10",
							children: "No open positions at the moment."
						}) : jobs.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group bg-white border border-gray-100 p-6 lg:p-8 flex flex-col justify-between hover:shadow-xl hover:border-accent/30 transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-[2px] bg-accent/50 mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-semibold text-xl text-foreground mb-2 leading-tight",
										children: job.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-sm font-light",
										children: job.title
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setSelectedJob(job);
								},
								className: "w-full inline-flex items-center justify-center bg-transparent border border-accent text-accent px-5 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:bg-accent hover:text-white",
								children: "Apply Now"
							})]
						}, job.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedJob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => {
					setSelectedJob(null);
					setApplySuccess(false);
				},
				className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { x: "100%" },
				animate: { x: 0 },
				exit: { x: "100%" },
				transition: {
					type: "spring",
					damping: 25,
					stiffness: 200
				},
				className: "fixed inset-y-0 right-0 z-50 w-full max-w-2xl bg-background border-l border-border p-8 md:p-12 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setSelectedJob(null);
						setApplySuccess(false);
					},
					className: "absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
						icon: Cancel01Icon,
						className: "w-6 h-6"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-10 mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3 mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1.5",
									children: selectedJob.category
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight mb-6",
								children: selectedJob.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-6 text-sm font-light text-muted-foreground border-y border-border py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
										icon: Location01Icon,
										className: "w-5 h-5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedJob.location })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
										icon: Briefcase02Icon,
										className: "w-5 h-5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedJob.type })]
								})]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-8 text-muted-foreground font-light leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-foreground font-semibold uppercase tracking-wide mb-4",
									children: "About The Role"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selectedJob.description })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-foreground font-semibold uppercase tracking-wide mb-4",
									children: "Key Responsibilities"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-disc list-outside ml-5 space-y-2",
									children: selectedJob.responsibilities?.map((req, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: req }, i))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-foreground font-semibold uppercase tracking-wide mb-4",
									children: "Requirements"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-disc list-outside ml-5 space-y-2",
									children: selectedJob.requirements?.map((req, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: req }, i))
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-8 border-t border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setSelectedJob(null);
									setApplySuccess(false);
									setApplyingJob(selectedJob);
								},
								className: "w-full md:w-auto inline-flex items-center justify-center bg-accent text-white px-10 py-5 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20",
								children: "Submit CV"
							})
						})
					]
				})]
			})] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!applyingJob,
				onOpenChange: (open) => !open && setApplyingJob(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-4xl max-h-[90vh] overflow-y-auto bg-background p-0 border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
							className: "mb-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight",
								children: "Submit CV"
							})
						}), applySuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-green-600 bg-green-50 p-6 font-medium border border-green-200 rounded-sm text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl mb-2 font-semibold",
									children: "Application Submitted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your application has been successfully submitted! We will be in touch soon." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setApplyingJob(null),
									className: "mt-6 px-8 py-3 bg-accent text-white font-semibold uppercase tracking-widest hover:bg-accent/90",
									children: "Close"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleApplySubmit,
							className: "space-y-10",
							children: [
								applyError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-red-500 bg-red-50 p-4 text-sm font-medium border border-red-200",
									children: applyError
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2",
									children: "1. Personal Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Full Name (As on ID) *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "fullName",
											required: true,
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Date of Birth"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											name: "dob",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Gender"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "gender",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Gender"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Male",
													children: "Male"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Female",
													children: "Female"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Other",
													children: "Other"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Prefer not to say",
													children: "Prefer not to say"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Nationality"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: applicantNationality === "Nigeria" ? "Nigeria" : "Other",
											onChange: (e) => {
												setApplicantNationality(e.target.value);
												setApplicantState("");
												setApplicantLga("");
											},
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Nigeria",
												children: "Nigeria"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Other",
												children: "Other"
											})]
										})] }),
										applicantNationality === "Nigeria" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "hidden",
												name: "nationality",
												value: "Nigeria"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "hidden",
												name: "stateOfOrigin",
												value: `${applicantState}${applicantLga ? ` - ${applicantLga}` : ""}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "State of Origin"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: applicantState,
												onChange: (e) => {
													setApplicantState(e.target.value);
													setApplicantLga("");
												},
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
												required: true,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select State"
												}), Object.keys(nigeriaStatesAndLGAs).map((state) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: state,
													children: state
												}, state))]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "LGA of Origin"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: applicantLga,
												onChange: (e) => setApplicantLga(e.target.value),
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
												required: true,
												disabled: !applicantState,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select LGA"
												}), applicantState && nigeriaStatesAndLGAs[applicantState]?.map((lga) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: lga,
													children: lga
												}, lga))]
											})] })
										] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Specify Nationality *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "nationality",
											value: applicantNationality === "Other" ? "" : applicantNationality,
											onChange: (e) => setApplicantNationality(e.target.value),
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											required: true,
											placeholder: "e.g. Ghana"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "State / Province / Region"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												name: "stateOfOrigin",
												value: applicantState,
												onChange: (e) => setApplicantState(e.target.value),
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
												required: true
											})]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Phone Number *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											name: "phone",
											required: true,
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Email Address *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												name: "email",
												required: true,
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Home Address"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												name: "homeAddress",
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Current Location (City/State)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "currentLocation",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Marital Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "maritalStatus",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Status"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Single",
													children: "Single"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Married",
													children: "Married"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Divorced",
													children: "Divorced"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Widowed",
													children: "Widowed"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Emergency Contact Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "emergencyContactName",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Emergency Contact Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "tel",
											name: "emergencyContactPhone",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2",
									children: "2. Education & Work Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Highest Qualification"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "highestQualification",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Qualification"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "PhD",
													children: "PhD"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Master's Degree",
													children: "Master's Degree"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Bachelor's Degree",
													children: "Bachelor's Degree"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "HND",
													children: "HND"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "OND/ND",
													children: "OND/ND"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Diploma",
													children: "Diploma"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "SSCE/WAEC/NECO",
													children: "SSCE/WAEC/NECO"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Other",
													children: "Other"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Institution Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "institutionName",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Year of Graduation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "graduationYear",
											placeholder: "e.g. 2020",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
											children: "Course of Study / Field"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "courseOfStudy",
											className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Professional Certifications"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "certifications",
												rows: 2,
												placeholder: "List any relevant certifications...",
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Work Experience"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "workExperience",
												rows: 4,
												placeholder: "Company, Role, Duration, Responsibilities...",
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "md:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
												children: "Skills"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "skills",
												rows: 3,
												placeholder: "Technical skills, Languages, Software tools...",
												className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none"
											})]
										})
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold uppercase tracking-widest text-accent mb-6 border-b border-border pb-2",
									children: "3. Upload CV"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-2",
									children: "CV / Resume (PDF, DOCX) *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									name: "cv",
									accept: ".pdf,.doc,.docx",
									required: true,
									className: "w-full p-3 bg-transparent border border-border focus:border-accent outline-none file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer"
								})] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-8 border-t border-border flex flex-col sm:flex-row justify-end gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setApplyingJob(null),
										className: "px-8 py-4 font-semibold uppercase tracking-widest border border-border hover:bg-muted/10 transition-colors",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: isApplying,
										className: "bg-accent text-white px-10 py-4 font-semibold uppercase tracking-widest hover:bg-accent/90 transition-colors disabled:opacity-50 inline-flex items-center justify-center min-w-[200px]",
										children: isApplying ? "Submitting..." : "Submit Application"
									})]
								})
							]
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { CareerPage as component };
