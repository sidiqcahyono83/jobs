import { useState } from "react";
import { JobItem } from "./assets/components/ui/job-item";
import { JobType, dataJobs } from "./data/datajob";

export function App() {

  const [jobsState, setJobs] = useState(dataJobs);

  const saveNewJob = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newdataJob: JobType = {
      id: 10,
      title: formData.get("title")?.toString() || "Untitled",
      category: formData.get("category")?.toString() || "Uncategorized",
      divisi: formData.get("divisi")?.toString() || "Tecknik" ,
      isDone:  false ,
    };

    setJobs([...dataJobs, newdataJob]);
  };



  return (
    <>
      <main className="container mx-auto dark:text-white">
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
          <div className="my-2 dark:text-white">
            
            <form action="" onSubmit={saveNewJob} className="mx-auto">
              <div className="form-control my-2">
                <label htmlFor="title" className="font-normal text-2xl my-4">
                  Title Job :
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="mx-10 rounded-md py-2.5 px-2.5 text-2xl text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-control my-2">
                <label htmlFor="category" className="font-normal text-2xl my-4">
                  Category Job :
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="mx-10 rounded-md py-2.5 px-2.5 text-2xl text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-control my-2">
                <label htmlFor="divisi" className="font-normal text-2xl my-4">
                  Divisi :
                </label>
                <input
                  type="text"
                  name="divisi"
                  id="divisi"
                  className="mx-10 rounded-md py-2.5 px-2.5 text-2xl text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
             
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 mx-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
                <button
                  type="reset"
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Reset
                </button>
              
            </form>
          </div>

          <hr />

          <section className="my-4">
            <div>
              <ul className="flex-row text-2xl  justify-between gap-2">
                {jobsState.map((Jobs) => (
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
