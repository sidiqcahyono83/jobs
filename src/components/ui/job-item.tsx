import { Job } from "../../data/jobs";
import { getTimeString } from "../../datetime/date";

export function JobItem({ job }: { job: Job }) {
	const timeStart = getTimeString(job.timeStart);
	const timeEnd = getTimeString(job.timeEnd);

	return (
		<div className="flex justify-between">
			<div className="flex gap-5">
				<p className="mx-2 font-mono">{job.id} </p>
				<p className="">{job.title}</p>
				{timeStart && timeEnd && (
					<p className="gap-6">
						<time dateTime={timeStart} className="text-green-500">
							{timeStart}
						</time>
						<span>-</span>
						<time dateTime={timeEnd} className="text-red-500">
							{timeEnd}
						</time>
					</p>
				)}
			</div>

			<p>
				{job.division} {job.isDone ? "✅" : "❓"}
			</p>
		</div>
	);
}
