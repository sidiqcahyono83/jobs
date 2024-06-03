import { Link, useLoaderData } from "react-router-dom";

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
			{/* <main className="w-3/5 mx-auto"> */}
			<div>
				<h1 className="font-bold text-4xl rounded-sm text-slate-800 font-neutral-400 dark:text-white">
					Jobs List
				</h1>
				{jobs.length ? (
					<ul>
						{jobs.map((job) => (
							<li
								key={job.id}
								className="my-4 inline-flex justify-between dark:text-white hover:rounded-xl text-xl block hover:bg-stone-100"
							>
								<Link to={`/jobs/${job.id}`} className="">
									{job.title}
									{job.isDone
										? "\u2714\uFE0F"
										: "\u23F8\uFE0F"}
								</Link>
							</li>
						))}
					</ul>
				) : (
					<p>Job Not Found</p>
				)}
			</div>
			{/* </main> */}
		</>
	);
}
