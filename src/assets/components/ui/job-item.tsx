import { JobType } from "../../../data/datajob";

export function JobItem({ job }: { job: JobType }) {
  return (
    <div className="flex justify-between">
      <p className="">{job.jobs}</p>

      <p>
        {job.divisions}, {job.isDone ? "✅" : "❓"}
      </p>
    </div>
  );
}
