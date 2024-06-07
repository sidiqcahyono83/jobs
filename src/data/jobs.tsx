export type Job = {
	id: number;
	title: string;
	category: string;
	division: string;
	isDone: string;
	timeStart?: Date;
	timeEnd?: Date;
};
export const dataJobs: Job[] = [
	{
		id: 1,
		title: "Repair",
		category: "usual",
		division: "technician",
		isDone: "In progres",
	},
	{
		id: 2,
		title: "Splicing",
		category: "urgent",
		division: "staff",
		isDone: "Still running",
	},
	{
		id: 3,
		title: "Teach",
		category: "soon",
		division: "staff",
		isDone: "Done",
		timeStart: new Date("2024-05-22 19:30"),
		timeEnd: new Date("2024-05-22 21:30"),
	},
];
