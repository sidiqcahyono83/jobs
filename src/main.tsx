import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { RootRoute } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { Home } from "./routes/home";
import { DetailJobRoute, loader as deatailJobsLoader } from "./routes/job";
import { JobsRoute, loader as jobsLoader } from "./routes/jobs";
import { AddJobRoute, action as addJobAction } from "./routes/add-job";
import { EditJobRoute, loader as editlJobsLoader } from "./routes/edit-job";

import { action as destroyAction } from "./routes/destroy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootRoute />,
		errorElement: <ErrorRoute />,

		children: [
			{
				path: "/",
				element: <Home />,
			},
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
			{
				path: "/jobs/:jobId/edit",
				element: <EditJobRoute />,
				loader: editlJobsLoader,
			},
			{
				path: "jobs/:jobId/destroy",
				action: destroyAction,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
