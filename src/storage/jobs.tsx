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
		id: Math.floor(Math.random() * (10_000_000 - 1 + 1) + 1), // 1 to 100
		title: String(formData.get("title")),
		category: String(formData.get("category")),
		divisi: String(formData.get("divisi")),
		isDone: true,
		timeStart: new Date("2024-05-22 19:30"),
		timeEnd: new Date("2024-05-22 20:30")
	};

	const jobs = await getJobs();
	const newJobs = [...jobs, newJob];
	await set(newJobs);
	return newJob;
}

export async function getJob(id: number) {
	await fakeNetwork(`${id}`);
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

let fakeCache: { [key: string]: boolean } = {};

async function fakeNetwork(key: string) {
	if (!key) {
		fakeCache = {};
	}

	if (fakeCache[key]) {
		return;
	}

	fakeCache[key] = true;
	return new Promise((resolve) => {
		setTimeout(resolve, Math.random() * 800);
	});
}
