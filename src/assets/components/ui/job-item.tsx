import { JobType } from "../../../data/datajob";

export function JobItem({ job }: { job: JobType }) {
  return (
    <div className="flex justify-between">
      <p>{job.jobs}</p>

      <p>{job.divisions}</p>
    </div>
  );
}
