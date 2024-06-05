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

export async function loader({ params }: LoaderFunctionArgs) {
	const idParam = Number(params.jobId);
	const job = await getJob(idParam);
	return { job };
}

export function EditJobRoute() {
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
			</p>
		</Form>
	);
}
