import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

import { type Job } from "../data/jobs";

export async function getJobs(query?: string) {
	await fakeNetwork(`getJobs:${query}`);
	let jobs = (await localforage.getItem("jobs")) as Job[];
	if (!jobs) jobs = [];
	if (query) {
		jobs = matchSorter(jobs, query, { keys: ["title"] });
	}
	return jobs.sort(sortBy("last", "id"));
}

export async function createJob(formData: FormData) {
	await fakeNetwork(``);

	const newJob: Job = {
<<<<<<< HEAD
		id: Math.floor(Math.random() * (10_000_000 - 1 + 1) + 1), // 1 to 100
=======
		id: Math.floor(Math.random() * (10_000_000 - 1 + 1) + 1),
>>>>>>> 47ab41613c6e3e99b6c1fdcdb9aebee6ef8b0632
		title: String(formData.get("title")),
		category: String(formData.get("category")),
		divisi: String(formData.get("divisi")),
		isDone: true,
<<<<<<< HEAD
		timeStart: new Date("2024-05-22 19:30"),
		timeEnd: new Date("2024-05-22 20:30")
=======
		timeStart: new Date("2000-01-01 06:00"),
		timeEnd: new Date("2000-01-01 07:00")
>>>>>>> 47ab41613c6e3e99b6c1fdcdb9aebee6ef8b0632
	};

	const jobs = await getJobs();
	const newJobs = [...jobs, newJob];
	await set(newJobs);
	return newJob;
}

export async function getJob(id: number) {
<<<<<<< HEAD
	await fakeNetwork(`${id}`);
=======
	await fakeNetwork(`job:${id}`);
>>>>>>> 47ab41613c6e3e99b6c1fdcdb9aebee6ef8b0632
	const jobs = (await localforage.getItem("jobs")) as Job[];
	const job = jobs.find((job) => job.id === id);
	return job ?? null;
}

export async function updateJob(id: number, updates: Job) {
	await fakeNetwork(``);
	const jobs = (await localforage.getItem("jobs")) as Job[];
	const job = jobs.find((job) => job.id === id);
	if (!job) throw new Error("No job found for");
	Object.assign(job, updates);
	await set(jobs);
	return job;
}

export async function deleteJob(id: number) {
	const jobs = (await localforage.getItem("jobs")) as Job[];
	const index = jobs.findIndex((job) => job.id === id);
	if (index > -1) {
		jobs.splice(index, 1);
		await set(jobs);
		return true;
	}
	return false;
}

function set(jobs: Job[]) {
	return localforage.setItem("jobs", jobs);
}

<<<<<<< HEAD
let fakeCache: { [key: string]: boolean } = {};
=======
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let fakeCache = {};
>>>>>>> 47ab41613c6e3e99b6c1fdcdb9aebee6ef8b0632

async function fakeNetwork(key: string) {
	if (!key) {
		fakeCache = {};
	}
<<<<<<< HEAD

	if (fakeCache[key]) {
		return;
	}

	fakeCache[key] = true;
	return new Promise((resolve) => {
		setTimeout(resolve, Math.random() * 800);
=======
	//@ts-expect-error-error Later
	if (fakeCache[key]) {
		return;
	}
	//@ts-expect-error-error Later
	fakeCache[key] = true;
	return new Promise((res) => {
		setTimeout(res, Math.random() * 800);
>>>>>>> 47ab41613c6e3e99b6c1fdcdb9aebee6ef8b0632
	});
}
