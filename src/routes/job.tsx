import {
	useLoaderData,
	LoaderFunctionArgs,
	Link,
	Form,
} from "react-router-dom";
import { getJob } from "../storage/jobs";

export async function loader({ params }: LoaderFunctionArgs) {
	const idParam = Number(params.jobId);
	const job = await getJob(idParam);
	return { job };
}

export function DetailJobRoute() {
	const { job } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	if (!job) {
		return <p>Job not found.</p>;
	}

	return (
		<div className="w-4/5 mx-auto">
			<h1 className="text-4xl font-bold mb-4">{job.title}</h1>
			<div className="text-xl">
				<p>Category: {job.category}</p>
				<p>Divisi: {job.division}</p>
				<p>Is Done: {job.isDone ? "Yes" : "No"}</p>
				{job.timeStart && (
					<p>
						Time Start: {new Date(job.timeStart).toLocaleString()}
					</p>
				)}
				{job.timeEnd && (
					<p>Time End: {new Date(job.timeEnd).toLocaleString()}</p>
				)}
			</div>
			<p className="flex my-4 gap-4 items-center justify-start">
				<button
					type="submit"
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					<Link to={`/jobs/${job.id}/edit`}>Edit</Link>
				</button>
				<Form
					method="post"
					action="destroy"
					onSubmit={(event) => {
						if (
							!confirm(
								"Please confirm you want to delete this record."
							)
						) {
							event.preventDefault();
						}
					}}
				>
					<button
						type="submit"
						className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
					>
						Delete
					</button>
				</Form>
			</p>
		</div>
	);
}
