import { useState } from "react";
import { JobItem } from "../components/ui/job-item";
import { Link } from "react-router-dom";
import localforage from "localforage";
import { Job, dataJobs } from "../data/jobs";

export function JobsRoute() {
  const [jobsState, setJobs] = useState<Job[]>([]);

  const initializeJobs = async () => {
    const storedJobs = await localforage.getItem<Job[]>("jobs");
    if (storedJobs) {
      setJobs(storedJobs);
    } else {
      setJobs(dataJobs);
      await localforage.setItem("jobs", dataJobs);
    }
  };

  if (jobsState.length === 0) {
    initializeJobs();
  }

  return (
    <>
      <main className="dark:text-white">
        <div className="m-4">
          <h1 className="font-bold mx-4 text-4xl rounded-sm text-slate-800 font-neutral-400 dark:text-white">
            Jobs List
          </h1>
        </div>
        <div className="mx-10 max-w-5xl">
          <section className="my-4">
            <div>
              <ul className="flex-row text-2xl justify-between gap-2">
                {jobsState.map((job) => (
                  <li
                    key={job.id}
                    className="my-2 dark:text-white hover:rounded-xl"
                  >
                    <Link
                      to={`/jobs/${job.id}`}
                      className="block hover:bg-stone-700"
                    >
                      <JobItem job={job} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
