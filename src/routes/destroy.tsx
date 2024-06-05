import { redirect } from "react-router-dom";
import { deleteJob } from "../storage/jobs";

export async function action({ params }) {
	const idParams = Number(params.jobId);
	await deleteJob(idParams);
	return redirect("/");
}

// export async function action({ params }) {
// 	throw new Error("oh dang!");
// 	const idParams = Number(params.jobId);
// 	await deleteJob(idParams);
// 	return redirect("/");
// }
