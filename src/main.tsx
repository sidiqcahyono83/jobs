import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { RootRoute } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { DetailJobRoute, loader as deatailJobsLoader } from "./routes/job";

import { JobsRoute, loader as jobsLoader } from "./routes/jobs";
import { AddJobRoute, action as addJobAction } from "./routes/add-job";
import { Home } from "./routes/home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootRoute />,
		errorElement: <ErrorRoute />,
		children: [
			{
				path: "/jobs",
				element: <JobsRoute />,
				loader: jobsLoader,
			},
			{
				path: "/add-job",
				element: <AddJobRoute />,
				action: addJobAction,
			},
			{
				path: "/jobs/:jobId",
				element: <DetailJobRoute />,
				loader: deatailJobsLoader,
			},
		],
	},
	{
		path: "/home",
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
