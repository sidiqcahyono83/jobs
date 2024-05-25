import { JobItem } from "../components/ui/job-item";
import { Link } from "react-router-dom";
import { dataJobs } from "../data/jobs";

export function JobsRoute() {
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
                {dataJobs.map((job) => (
                  <li
                    key={job.id}
                    className="my-2 dark:bg-stone-400 rounded-md dark:text-black"
                  >
                    <Link
                      to={`/jobs/${job.id}`}
                      className="block  hover:bg-slate-400"
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
