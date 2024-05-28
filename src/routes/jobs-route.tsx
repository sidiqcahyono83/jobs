import { JobItem } from "../components/ui/job-item";
import { Link } from "react-router-dom";

import { dataJobs } from "../data/jobs";

export function JobsRoute() {
  return (
    <>
      <div>
        <h1 className="font-bold mx-4 text-2xl  text-slate-800 font-neutral-400 flex-row dark:text-white items-stretch">
          Jobs List
        </h1>
        <ul>
          {dataJobs.map((job) => (
            <li
              key={job.id}
              className="dark:text-white hover:rounded-xl text-lg mx-2"
            >
              <Link to={`/jobs/${job.id}`} className="block hover:bg-stone-700">
                <JobItem job={job} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
