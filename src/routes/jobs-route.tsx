import { JobItem } from "../components/ui/job-item";
import { Link } from "react-router-dom";

import { dataJobs } from "../data/jobs";

export function JobsRoute() {
  return (
    <>
      <div>
<<<<<<< HEAD
        <h1 className="font-bold mx-4 text-4xl rounded-sm text-slate-800 font-neutral-400 dark:text-white">
=======
        <h1 className="font-bold mx-4 text-2xl  text-slate-800 font-neutral-400 flex-row dark:text-white items-stretch">
>>>>>>> 9dbdfc0bca4a48addd836306db5b2441bd675b7b
          Jobs List
        </h1>
        <ul>
          {dataJobs.map((job) => (
<<<<<<< HEAD
            <li key={job.id} className="my-2 dark:text-white hover:rounded-xl">
=======
            <li
              key={job.id}
              className="dark:text-white hover:rounded-xl text-lg mx-2"
            >
>>>>>>> 9dbdfc0bca4a48addd836306db5b2441bd675b7b
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
