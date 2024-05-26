import { useState } from "react";
import localforage from "localforage";
import { Job } from "../data/jobs";

export function DetailJobRoute() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const loadJob = async () => {
    const storedJobs = await localforage.getItem<Job[]>("jobs");
    if (storedJobs) {
      const job = storedJobs.find((j) => j.id === Number(id));
      if (job) {
        setJob(job);
      }
    }
    setIsInitialized(true);
  };

  if (!isInitialized) {
    loadJob();
  }

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-4 mx-10">
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
      <div className="text-xl">
        <p>
          <strong>Category:</strong> {job.category}
        </p>
        <p>
          <strong>Divisi:</strong> {job.divisi}
        </p>
        <p>
          <strong>Is Done:</strong> {job.isDone ? "Yes" : "No"}
        </p>
        {job.timeStart && (
          <p>
            <strong>Time Start:</strong>{" "}
            {new Date(job.timeStart).toLocaleString()}
          </p>
        )}
        {job.timeEnd && (
          <p>
            <strong>Time End:</strong> {new Date(job.timeEnd).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}
