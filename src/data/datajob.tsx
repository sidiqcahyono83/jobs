export type JobType = {
  id: number;
  jobs: string;
  category: string;
  divisions: string;
  isDone: boolean;
  timeStart?: Date;
  timeEnd?: Date;
};
export const dataJobs: JobType[] = [
  {
    id: 1,
    jobs: "Repair",
    category: "usual",
    divisions: "technician",
    isDone: false
  },
  {
    id: 2,
    jobs: "Splicing",
    category: "urgent",
    divisions: "staff",
    isDone: true
  },
  {
    id: 3,
    jobs: "Teach",
    category: "soon",
    divisions: "staff",
    isDone: true,
    timeStart: new Date("2024-05-22 19:30"),
    timeEnd: new Date("2024-05-22 21:30")
  }
];
