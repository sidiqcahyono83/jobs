import { useParams } from "react-router-dom";
import { dataJobs } from "../data/jobs";

export function DetailJobRoute() {
<<<<<<< HEAD
	const idParam = useParams();
	const jobId = Number(idParam.jobId);
=======
	const jobParam = useParams();
	const jobId = Number(jobParam.jobId);
>>>>>>> 47ab41613c6e3e99b6c1fdcdb9aebee6ef8b0632

	const job = dataJobs.find((job) => job.id === jobId);

	if (!job) {
		return <p>Job not found.</p>;
	}

	return (
		<div className="my-4 mx-10">
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
