import { Link } from "react-router-dom";
import { FaStackOverflow } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export function Nav() {
	return (
		<div className="flex flex-wrap justify-between items-center">
			<h1 className="text-slate-950 hover:text-teal-800 m-10 dark:text-slate-100 font-bold justify-center text-4xl">
				<Link to="/">MY JOBS</Link>
			</h1>

			<ul className="flex flex-wrap items-center gap-3">
				<li className="hover:text-blue-800 text-xl font-bold">
					<Link to="/jobs" className="flex gap-2">
						<FaStackOverflow />
						My Jobs
					</Link>
				</li>
				<li className="hover:text-blue-800 text-xl font-bold">
					<Link to="/add-job" className="flex gap-2">
						<FaPlus />
						Add Job
					</Link>
				</li>
			</ul>
		</div>
	);
}
