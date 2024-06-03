import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
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
				<p>Divisi: {job.divisi}</p>
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
		</div>
	);
}
