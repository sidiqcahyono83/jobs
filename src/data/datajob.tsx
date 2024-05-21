export type JobType = {
  id: number;
  jobs: string;
  category: string;
  divisions: string;
};
export const dataJobs: JobType[] = [
  {
    id: 1,
    jobs: "Repair",
    category: "usual",
    divisions: "technician"
  },
  {
    id: 2,
    jobs: "Splicing",
    category: "urgent",
    divisions: "staff"
  },
  {
    id: 3,
    jobs: "Teach",
    category: "soon",
    divisions: "staff"
  }
];
