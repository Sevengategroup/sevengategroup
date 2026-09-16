import { i as createServerFn } from "./server-CdqFUkkp.mjs";
import { t as createServerRpc } from "./createServerRpc-BQwYyHq7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/maintenance-BSaCL4je.js
var isMaintenanceModeEnabled = false;
var getMaintenanceState_createServerFn_handler = createServerRpc({
	id: "1eb1db9f8cb055027a73a608b55d9ade7bf6004203f05058e865804af5b553ce",
	name: "getMaintenanceState",
	filename: "src/api/maintenance.ts"
}, (opts) => getMaintenanceState.__executeServer(opts));
var getMaintenanceState = createServerFn({ method: "GET" }).handler(getMaintenanceState_createServerFn_handler, async () => {
	return isMaintenanceModeEnabled;
});
var toggleMaintenanceState_createServerFn_handler = createServerRpc({
	id: "d545b511d90e22707fd12386f2e6310be9b75570512a8b0bafc2263417eaa945",
	name: "toggleMaintenanceState",
	filename: "src/api/maintenance.ts"
}, (opts) => toggleMaintenanceState.__executeServer(opts));
var toggleMaintenanceState = createServerFn({ method: "POST" }).validator((data) => data).handler(toggleMaintenanceState_createServerFn_handler, async ({ data }) => {
	const validPassword = process.env.INITIAL_ADMIN_PASSWORD;
	if (!validPassword || data.password !== validPassword) throw new Error("Invalid password");
	isMaintenanceModeEnabled = data.enable;
	return {
		success: true,
		state: isMaintenanceModeEnabled
	};
});
//#endregion
export { getMaintenanceState_createServerFn_handler, toggleMaintenanceState_createServerFn_handler };
