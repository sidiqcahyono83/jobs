import { JobsItem } from "./assets/components/ui/jobs-item";
import { dataJobs } from "./jobsdata/jobs";

export function App() {
  return (
    <>
      <div className="m-10 flex justify-center max-w-64xl">
        <h1 className="font-bold text-2xl font-neutral-400">MY JOBS</h1>
      </div>

      <div className="m-10 flex justify-center max-w-64xl">
        <section className="space-y-2">
          <div>
            <ul className="flex justify-between gap-2">
              {dataJobs.map((Jobs) => (
                <li key={Jobs.id}>
                  <JobsItem jobs={Jobs} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
