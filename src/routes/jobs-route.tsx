import { Link, useLoaderData } from "react-router-dom";
import { JobItem } from "../components/ui/job-item";

import { getJobs } from "../storage/jobs";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
	const jobs = await getJobs();
	return { jobs };
}

export function JobsRoute() {
	const { jobs } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	return (
		<>
			<div>
				<h1 className="font-bold mx-4 text-4xl rounded-sm text-slate-800 font-neutral-400 dark:text-white">
					Jobs List
				</h1>
				<ul>
					{jobs.map((job) => (
						<li
							key={job.id}
							className="my-4 mx-2 dark:text-white hover:rounded-xl text-xl"
						>
							<Link
								to={`/jobs/${job.id}`}
								className="block hover:bg-stone-100"
							>
								<JobItem job={job} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
