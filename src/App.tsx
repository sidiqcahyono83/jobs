import { JobItem } from "./assets/components/ui/job-item";
import { dataJobs } from "./data/datajob";

export function App() {
  return (
    <>
      <main className="container mx-auto">
        <div className="m-10 flex justify-center max-w-5xl">
          <h1 className="font-bold text-4xl text-slate-800 font-neutral-400">
            MY JOBS
          </h1>
        </div>

        <div className="mx-10 max-w-5xl">
          <h2 className="font-bold text-2xl my-4 text-slate-800 font-neutral-400">
            Job Desk
          </h2>
          <hr />
          <section className="my-4">
            <div>
              <ul className="flex-row text-2xl  justify-between gap-2">
                {dataJobs.map((Jobs) => (
                  <li key={Jobs.id} className="my-2 ">
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
