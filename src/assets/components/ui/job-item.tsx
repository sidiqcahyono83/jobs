import { JobType } from "../../../data/datajob";

export function JobItem({ job }: { job: JobType }) {
  return (
    <div>
      <p>{job.jobs}</p>
    </div>
  );
}
