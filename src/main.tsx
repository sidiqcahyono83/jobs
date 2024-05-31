import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { RootRoute } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { DetailJobRoute } from "./routes/job";
<<<<<<< HEAD
import { JobsRoute, loader as jobsLoader } from "./routes/jobs-route";
=======
import { JobsRoute, loader as jobsLoader } from "./routes/jobs";
>>>>>>> 47ab41613c6e3e99b6c1fdcdb9aebee6ef8b0632
import { AddJobRoute } from "./routes/add-job";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootRoute />,
		errorElement: <ErrorRoute />,
		children: [
			{
				path: "/jobs",
				element: <JobsRoute />,
				loader: jobsLoader
			},
			{
				path: "/jobs/:jobId",
<<<<<<< HEAD
				element: <DetailJobRoute />
			},
			{
				path: "/add-job",
=======
				element: <DetailJobRoute />,
				loader: jobsLoader
			},
			{
				path: "/addjob",
>>>>>>> 47ab41613c6e3e99b6c1fdcdb9aebee6ef8b0632
				element: <AddJobRoute />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
