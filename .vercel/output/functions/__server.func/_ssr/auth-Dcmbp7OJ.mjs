import { c as getCookie, i as createServerFn, l as setCookie$1, s as deleteCookie$1 } from "./server-CdqFUkkp.mjs";
import { t as createServerRpc } from "./createServerRpc-BQwYyHq7.mjs";
import { t as prisma } from "./prisma-COpj7n8l.mjs";
import { t as bcryptjs_default } from "../_libs/bcryptjs.mjs";
import { n as jwtVerify, t as SignJWT } from "../_libs/jose.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Dcmbp7OJ.js
if (!process.env.JWT_SECRET) console.warn("WARNING: JWT_SECRET environment variable is not set. Auth will fail.");
var JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "");
var loginAdmin_createServerFn_handler = createServerRpc({
	id: "a22835464017e84bbc79f0ddf69d6f8b2b781ca158c0781a6ff7a205d55e5c7d",
	name: "loginAdmin",
	filename: "src/api/auth.ts"
}, (opts) => loginAdmin.__executeServer(opts));
var loginAdmin = createServerFn({ method: "POST" }).validator((data) => data).handler(loginAdmin_createServerFn_handler, async ({ data }) => {
	const { email, password } = data;
	const user = await prisma.adminUser.findUnique({ where: { email } });
	if (!user) throw new Error("Invalid email or password");
	if (!await bcryptjs_default.compare(password, user.password)) throw new Error("Invalid email or password");
	const token = await new SignJWT({
		id: user.id,
		email: user.email
	}).setProtectedHeader({ alg: "HS256" }).setExpirationTime("24h").sign(JWT_SECRET);
	setCookie$1("admin_token", token, {
		httpOnly: true,
		secure: true,
		path: "/",
		maxAge: 86400
	});
	return { success: true };
});
var logoutAdmin_createServerFn_handler = createServerRpc({
	id: "5ad185cd6b09d2a662482df854932195fba800faab6ee8565582a954ac2d0da6",
	name: "logoutAdmin",
	filename: "src/api/auth.ts"
}, (opts) => logoutAdmin.__executeServer(opts));
var logoutAdmin = createServerFn({ method: "POST" }).handler(logoutAdmin_createServerFn_handler, async () => {
	deleteCookie$1("admin_token");
	return { success: true };
});
var getAdminSession_createServerFn_handler = createServerRpc({
	id: "4ffbf3038593f57f87b5e2996c4445048736e8867a93893afc4b8cc70755ec03",
	name: "getAdminSession",
	filename: "src/api/auth.ts"
}, (opts) => getAdminSession.__executeServer(opts));
var getAdminSession = createServerFn({ method: "GET" }).handler(getAdminSession_createServerFn_handler, async () => {
	const token = getCookie("admin_token");
	if (!token) return null;
	try {
		const { payload } = await jwtVerify(token, JWT_SECRET);
		return payload;
	} catch (e) {
		return null;
	}
});
//#endregion
export { getAdminSession_createServerFn_handler, loginAdmin_createServerFn_handler, logoutAdmin_createServerFn_handler };
