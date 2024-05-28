import { FaStackOverflow } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <main className="box-border justify-items-center max-w-screen-xl content-center mx-auto border-2">
      <h1 className="text-slate-950 hover:text-teal-800 m-10 dark:text-slate-100 font-bold justify-center text-4xl flex">
        <Link to="/">MY JOBS</Link>
      </h1>
      <div className="flex max-w-full">
        <ul className="flex w-3/12 max-h-full items-center gap-2 text-xl font-bold flex-col border-2">
          <li className="hover:text-blue-800">
            <Link to="/jobs" className="flex gap-2">
              <FaStackOverflow />
              My Jobs
            </Link>
          </li>
          <li className="hover:text-blue-800">
            <Link to="/addjobs" className="flex gap-2">
              <FaPlus />
              Add Job
            </Link>
          </li>
        </ul>

        <section>
          <Outlet />
        </section>
      </div>
    </main>
  );
}
