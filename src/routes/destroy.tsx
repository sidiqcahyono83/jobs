import { redirect } from "react-router-dom";
import { deleteJob } from "../storage/jobs";

//@ts-expect-error
export async function action({ params }: LoaderFunctionArgs) {
	const idParam = Number(params.jobId);
	await deleteJob(idParam);
	return redirect("/");
}
