import {
	Form,
	useLoaderData,
	redirect,
	ActionFunctionArgs,
	LoaderFunctionArgs,
	Link,
} from "react-router-dom";

import { getJob, updateJob } from "../storage/jobs";
import { Job } from "../data/jobs";

export async function action({ request, params }: ActionFunctionArgs) {
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);
	await updateJob(Number(params.jobId), updates as unknown as Job);
	return redirect(`/jobs/${params.jobId}`);
}

export async function loader({ params }: LoaderFunctionArgs) {
	const idParam = Number(params.jobId);
	const job = await getJob(idParam);
	console.log(job);

	return { job };
}

export function EditJobRoute() {
	const { job } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	return (
		<Form method="post">
			<div className="mb-6">
				<label
					htmlFor="title"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Title Job
				</label>
				<input
					type="text"
					name="title"
					id="title"
					value={job?.title}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>
			<p>
				<span>Name</span>
				<input
					placeholder="Title"
					aria-label="Job"
					type="text"
					name="title"
					defaultValue={job?.title}
				/>
			</p>
			<label>
				<span>divisi</span>
				<input
					type="text"
					name="divisi"
					placeholder="@jack"
					defaultValue={job?.division}
				/>
			</label>
			<label
				htmlFor="progres"
				className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
			>
				Select an Job Progres
			</label>
			<select
				id="progres"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option selected>Choose a progres</option>
				<option value="false">Running</option>
				<option value="true">Done</option>
			</select>

			<p className="my-4">
				<button
					type="submit"
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					Update
				</button>
				<button
					type="button"
					className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					<Link to="/jobs">Cancle</Link>
				</button>
			</p>
		</Form>
	);
}
