export type Jobs = {
  id: number;
  jobs: string;
  category: string;
  level: boolean;
  timeStart?: Date;
  timeEnd?: Date;
};

export const dataJobs: Jobs[] = [
  {
    id: 1,
    jobs: "repair",
    category: "soon",
    level: true,
    timeStart: new Date("2000-01-01 06:00"),
    timeEnd: new Date("2000-01-01 07:00")
  },
  {
    id: 2,
    jobs: "Splicing",
    category: "urgent",
    level: false
  }
];
