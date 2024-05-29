import { FaStackOverflow } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";
import { HomeRoute } from "./home";

export function RootRoute() {
  return (
<<<<<<< HEAD
    <main className="box-border h-64 justify-items-center max-w-screen-xl content-center mx-auto">
      <h1 className="text-slate-950 hover:text-teal-800 m-10 dark:text-slate-100 font-bold justify-center text-6xl flex">
        <Link to="/">MY JOBS</Link>
      </h1>

      <div className="flex flex-row">
        <ul className="flex w-3/12 max-h-full items-center gap-2 text-2xl font-bold flex-col my-4">
=======
    <main className="box-border justify-items-center max-w-screen-xl content-center mx-auto">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-slate-950 hover:text-teal-800 m-10 dark:text-slate-100 font-bold justify-center text-4xl">
          <Link to="/">MY JOBS</Link>
        </h1>

        <ul className="w-3/12 max-h-full items-center gap-2 text-xl font-bold flex flex-row items-center">
>>>>>>> 9dbdfc0bca4a48addd836306db5b2441bd675b7b
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
<<<<<<< HEAD

        <section>
          <Outlet />
        </section>
      </div>
=======
      </div>

      <Outlet />
>>>>>>> 9dbdfc0bca4a48addd836306db5b2441bd675b7b
    </main>
  );
}
