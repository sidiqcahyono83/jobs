import { FaStackOverflow } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <div className="justify-center m-10">
      <h1 className="text-slate-950 hover:text-teal-800 m-10 dark:text-slate-100 font-bold justify-center text-6xl flex">
        <Link to="/">MY JOBS</Link>
      </h1>
      <div className="flex w-full">
        <ul className="w-60 h-96 flex flex-col gap-2 text-2xl font-bold">
          <li className=" gap-2 my-4 hover:text-blue-800">
            <Link to="/jobs" className="flex gap-2">
              <FaStackOverflow />
              My Jobs
            </Link>
          </li>
          <li className="gap-2 items-center  hover:text-blue-800">
            <Link to="/addjobs" className="flex gap-2">
              <FaPlus />
              Add Job
            </Link>
          </li>
        </ul>

        <section className="grow items-start content-normal">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
