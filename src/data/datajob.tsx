export type JobType = {
  id: number;
  jobs: string;
  category: string;
  divisions: string;
  isDone: boolean;
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
    isDone: true
  }
];
