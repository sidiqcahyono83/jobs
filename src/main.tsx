import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { RootRoute } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { DetailJobRoute } from "./routes/job";
import { JobsRoute, loader as jobsLoader } from "./routes/jobs";
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
				element: <DetailJobRoute />,
				loader: jobsLoader
			},
			{
				path: "/addjob",
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
