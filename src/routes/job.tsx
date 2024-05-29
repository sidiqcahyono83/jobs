import { useParams } from "react-router-dom";
import {dataJobs} from "../data/jobs";

export function DetailJobRoute() {

  const { jobId } = useParams();

  const job = dataJobs.find((job) => job.id == jobId);

  if (!job) {
    return <p>Job not found.</p>;
    s;
  }

  return (
    <div className="my-4 mx-10">
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
      <div className="text-xl">
        <p>Category: {job.category}</p>
        <p>Divisi: {job.divisi}</p>
        <p>Is Done: {job.isDone ? "Yes" : "No"}</p>
        {job.timeStart && (
          <p>Time Start: {new Date(job.timeStart).toLocaleString()}</p>
        )}
        {job.timeEnd && (
          <p>Time End: {new Date(job.timeEnd).toLocaleString()}</p>
        )}
      </div>
    </div>
  );
}
