<<<<<<< HEAD
import { useLoaderData, LoaderFunctionArgs, Link } from "react-router-dom";
import { getJob } from "../storage/jobs";
=======
import {
	Form,
	LoaderFunctionArgs,
	redirect,
	useLoaderData,
} from "react-router-dom";

import { getJob, updateJob } from "../storage/jobs";

export async function action({ request, params }) {
	const formData = await request.formData();
	const title = formData.get("title");
	const division = formData.get("division");
	const updates = Object.fromEntries(formData);
	updates.title; // "Some"
	updates.division;
	await updateJob(params.JobId, updates);
	return redirect(`/Jobs/${params.JobId}`);
}
>>>>>>> 7084e6adf4764abc494ebe53e47146f967b10742

export async function loader({ params }: LoaderFunctionArgs) {
	const idParam = Number(params.jobId);
	const job = await getJob(idParam);
	return { job };
}

export function EditJobRoute() {
<<<<<<< HEAD
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
			<p className="space-y-4">
				<button
					type="submit"
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					<Link to={`/jobs/${job.id}/edit`}>Edit</Link>
				</button>
				<button
					type="button"
					className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					<Link to="/jobs">Beck</Link>
				</button>
=======
	return (
		<Form method="post" id="contact-form">
			<p>
				<span>Name</span>
				<input
					placeholder="First"
					aria-label="First name"
					type="text"
					name="first"
					defaultValue={job?.title}
				/>
				<input
					placeholder="Last"
					aria-label="Last name"
					type="text"
					name="last"
					defaultValue={job?.division}
				/>
			</p>
			<label>
				<span>Twitter</span>
				<input
					type="text"
					name="twitter"
					placeholder="@jack"
					defaultValue={job?.isDone}
				/>
			</label>
			<label>
				<span>Avatar URL</span>
				<input
					placeholder="https://example.com/avatar.jpg"
					aria-label="Avatar URL"
					type="text"
					name="avatar"
					defaultValue={job?.timeEnd}
				/>
			</label>
			<label>
				<span>Notes</span>
				<textarea name="notes" defaultValue={job?.timeStart} rows={6} />
			</label>
			<p>
				<button type="submit">Save</button>
				<button type="button">Cancel</button>
>>>>>>> 7084e6adf4764abc494ebe53e47146f967b10742
			</p>
		</div>
	);
}
