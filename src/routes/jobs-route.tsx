import { useState } from "react";
import { dataJobs } from "../data/jobs";
import { JobItem } from "../components/ui/job-item";

export function JobsRoute() {
  const [jobsState] = useState(dataJobs);

  return (
    <>
      <main className="container dark:text-white">
        <div className="m-10 flex justify-center ">
          <h1 className="font-bold text-4xl text-slate-800 font-neutral-400  dark:text-white">
            MY JOBS
          </h1>
        </div>

        <div className="mx-10 max-w-5xl">
          <section className="my-4">
            <div>
              <ul className="flex-row text-2xl  justify-between gap-2">
                {jobsState.map((Jobs) => (
                  <li key="{Jobs.id}" className="my-2 ">
                    <JobItem job={Jobs} />
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
