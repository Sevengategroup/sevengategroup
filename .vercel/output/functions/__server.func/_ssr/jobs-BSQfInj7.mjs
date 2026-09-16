import { i as createServerFn } from "./server-CdqFUkkp.mjs";
import { t as createServerRpc } from "./createServerRpc-BQwYyHq7.mjs";
import { t as prisma } from "./prisma-COpj7n8l.mjs";
import { n as requireAdmin } from "./auth--d6g_sTE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs-BSQfInj7.js
var getJobs_createServerFn_handler = createServerRpc({
	id: "7517e505ffa1236fb1abcc2723251912fff820e75b0b582f5d8e2f8666eea827",
	name: "getJobs",
	filename: "src/api/jobs.ts"
}, (opts) => getJobs.__executeServer(opts));
var getJobs = createServerFn({ method: "GET" }).handler(getJobs_createServerFn_handler, async () => {
	try {
		return (await prisma.job.findMany({ orderBy: { createdAt: "desc" } })).map((j) => ({
			...j,
			responsibilities: JSON.parse(j.responsibilities),
			requirements: JSON.parse(j.requirements)
		}));
	} catch (error) {
		console.error("Error reading jobs:", error);
		return [];
	}
});
var createJob_createServerFn_handler = createServerRpc({
	id: "670bb17028d432503ee07b68a002bf01729c45f8418efe458a86ad4c77e3d1ff",
	name: "createJob",
	filename: "src/api/jobs.ts"
}, (opts) => createJob.__executeServer(opts));
var createJob = createServerFn({ method: "POST" }).validator((job) => job).handler(createJob_createServerFn_handler, async ({ data }) => {
	await requireAdmin();
	try {
		const newJob = await prisma.job.create({ data: {
			title: data.title,
			category: data.category,
			type: data.type,
			location: data.location,
			description: data.description,
			responsibilities: JSON.stringify(data.responsibilities),
			requirements: JSON.stringify(data.requirements)
		} });
		return {
			...newJob,
			responsibilities: JSON.parse(newJob.responsibilities),
			requirements: JSON.parse(newJob.requirements)
		};
	} catch (error) {
		console.error("Error writing job:", error);
		throw new Error("Failed to create job");
	}
});
var deleteJob_createServerFn_handler = createServerRpc({
	id: "ac935873e59edabfa1f19e9cf174289cc52543e9cf73065d20f62fe5c395ef16",
	name: "deleteJob",
	filename: "src/api/jobs.ts"
}, (opts) => deleteJob.__executeServer(opts));
var deleteJob = createServerFn({ method: "POST" }).validator((id) => id).handler(deleteJob_createServerFn_handler, async ({ data: id }) => {
	await requireAdmin();
	try {
		await prisma.job.delete({ where: { id } });
		return { success: true };
	} catch (error) {
		console.error("Error deleting job:", error);
		throw new Error("Failed to delete job");
	}
});
//#endregion
export { createJob_createServerFn_handler, deleteJob_createServerFn_handler, getJobs_createServerFn_handler };
