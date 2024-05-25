import { FaStackOverflow } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Outlet } from "react-router-dom";
export function RootRoute() {
  return (
    <main>
      <div className="justify-center m-10">
        <h1 className="text-slate-950 m-10 dark:text-slate-100 font-bold justify-center text-6xl flex">
          MY JOBS
        </h1>
        <div className="flex flex-col-2 content-between">
          <ul className="flex flex-col bg-fuchsia-600 gap-6  text-2xl">
            <li className="hover:text-3xl">Home</li>
            <li className="flex gap-4 items-center  hover:text-blue-800">
              <FaStackOverflow />
              My Jobs
            </li>
            <li className="flex gap-4 items-center hover:text-blue-800">
              <FaAlignLeft />
              Jobs Item
            </li>
            <li className="flex gap-4 items-center  hover:text-blue-800">
              <FaPlus />
              Add Job
            </li>
          </ul>

          <section className="mx-2">
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
}
