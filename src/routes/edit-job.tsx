import {
	useLoaderData,
	LoaderFunctionArgs,
	redirect,
	Form,
	Link,
} from "react-router-dom";

import { getJob, updateJob } from "../storage/jobs";
import { Button, Label, Select, TextInput } from "flowbite-react";

export async function loader({ params }: LoaderFunctionArgs) {
	const idParam = Number(params.jobId);
	const job = await getJob(idParam);
	return { job };
}

export async function action({ request, params }: LoaderFunctionArgs) {
	const jobId = Number(params.jobId);
	const formData = await request.formData();
	const newJobData = {
		id: Number(formData.get("id")),
		title: String(formData.get("title")),
		category: String(formData.get("category")),
		division: String(formData.get("division")),
		isDone: Boolean(formData.get("isDone")),
		timeStart: new Date(),
		timeEnd: new Date(),
	};
	Object.fromEntries(formData);

	await updateJob(jobId, newJobData);

	return redirect(`/jobs/`);
}

export function EditJobRoute() {
	const { job } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	if (!job) {
		return <p>Job not found.</p>;
	}

	return (
		<div className="w-4/5 mx-auto">
			<h1 className="text-4xl font-bold mb-4">{job.title}</h1>
			<Form method="post" className="flex max-w-md flex-col gap-4">
				<TextInput
					id="title"
					type="text"
					name="title"
					placeholder="name@flowbite.com"
					defaultValue={job.title}
					hidden
				/>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="title" value="Job Title" />
					</div>
					<TextInput
						id="title"
						type="text"
						name="title"
						placeholder="name@flowbite.com"
						defaultValue={job.title}
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="Category" value="Job Category" />
					</div>
					<TextInput
						id="Category"
						type="text"
						name="category"
						defaultValue={job.category}
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="division" value="Job Division" />
					</div>
					<TextInput
						id="division"
						type="text"
						name="division"
						defaultValue={job.division}
						required
					/>
				</div>
				<div className="flex gap-2 col-span-2">
					<div className="mb-2 block">
						<Label htmlFor="timeStart" value="Job Time Start" />
					</div>
					<TextInput
						id="timeStart"
						type="date"
						name="timeStart"
						defaultValue={JSON.stringify(job.timeStart)}
						required
					/>
					<div className="mb-2 gap-2 col-span-2">
						<Label htmlFor="timeEnd" value="Job Time Start" />
					</div>
					<TextInput
						id="timeEnd"
						type="date"
						name="timeEnd"
						defaultValue={JSON.stringify(job.timeEnd)}
						required
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="isDone" value="Job Division" />
					</div>
					<Select id="isDone" name="isDone" required>
						<option value="true">Done</option>
						<option value="false">In Progres</option>
					</Select>
				</div>
				<div className="flex flex-col-2 gap-2 justify-between">
					<Button type="submit">Edit</Button>
					<Button color="warning" as={Link} to="/jobs">
						Back
					</Button>
				</div>
			</Form>
		</div>
	);
}
