import { redirect } from "react-router-dom";
import { deleteJob } from "../storage/jobs";

export async function action({ params }) {
	throw new Error("Error !");
	await deleteJob(params.jobtId);
	return redirect("/");
}
