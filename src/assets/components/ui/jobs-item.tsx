import { getTimeString } from "../../../datetime/date";
import { type Jobs } from "../../../jobsdata/jobs";

export function JobsItem({ jobs }: { jobs: Jobs }) {
  const timeStart = getTimeString(jobs.timeStart);
  const timeEnd = getTimeString(jobs.timeEnd);

  return (
    <div className="flex justify-between py-2">
      <div className="inline-flex gap-4">
        <p className="text-xl">{jobs.jobs}</p>
        {timeStart && timeEnd && (
          <p>
            <time dateTime={timeStart}>{timeStart}</time>
            <span>-</span>
            <time dateTime={timeEnd}>{timeEnd}</time>
          </p>
        )}
      </div>

      <div className="inline-flex gap-4">
        {jobs.level && (
          <p className="text-lg">
            <span></span>
          </p>
        )}
        <p className="text-slate-600 dark:text-slate-400">{jobs.category}</p>
      </div>
    </div>
  );
}
