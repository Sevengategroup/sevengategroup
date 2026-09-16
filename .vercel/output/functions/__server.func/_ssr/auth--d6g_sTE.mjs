import { i as createServerFn } from "./server-CdqFUkkp.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BKODJ3F0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth--d6g_sTE.js
if (!process.env.JWT_SECRET) console.warn("WARNING: JWT_SECRET environment variable is not set. Auth will fail.");
var loginAdmin = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("a22835464017e84bbc79f0ddf69d6f8b2b781ca158c0781a6ff7a205d55e5c7d"));
createServerFn({ method: "POST" }).handler(createSsrRpc("5ad185cd6b09d2a662482df854932195fba800faab6ee8565582a954ac2d0da6"));
var getAdminSession = createServerFn({ method: "GET" }).handler(createSsrRpc("4ffbf3038593f57f87b5e2996c4445048736e8867a93893afc4b8cc70755ec03"));
var requireAdmin = async () => {
	const session = await getAdminSession();
	if (!session) throw new Error("Unauthorized");
	return session;
};
//#endregion
export { requireAdmin as n, loginAdmin as t };
