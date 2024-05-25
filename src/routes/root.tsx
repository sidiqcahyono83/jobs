import { FaStackOverflow } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <main>
      <div className="justify-center m-10">
        <h1 className="text-slate-950 m-10 dark:text-slate-100 font-bold justify-center text-6xl flex">
          <Link to="/">MY JOBS</Link>
        </h1>
        <div className="flex  justify-evenly">
          <ul className="flex flex-col gap-2 text-2xl">
            <li className=" gap-2  hover:text-blue-800">
              <Link to="/jobs">
                <FaStackOverflow />
                My Jobs
              </Link>
            </li>
            <li className="flex gap-2 items-center  hover:text-blue-800">
              <Link to="/addjobs">
                <FaPlus />
                Add Job
              </Link>
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
