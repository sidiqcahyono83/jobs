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
<<<<<<< HEAD
import { EditJobRoute } from "./routes/edit-job";
import {
	ShowJobRoute,
	loader as aboutLoader,
	action as editAction,
} from "./routes/jobstable";
=======
import { DeleteRoute } from "./routes/jobstable";
import { EditJobRoute, action as editJobAction } from "./routes/edit-job";
>>>>>>> 7084e6adf4764abc494ebe53e47146f967b10742
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
				path: "contacts/:contactId/destroy",
				action: destroyAction,
			},
			// {
			// 	path: "jobs/:jobId/destroy",
			// 	action: destroyAction,
			// 	errorElement: <div>Oops! There was an error.</div>,
			// },
			{
				path: "jobs/:jobId/edit",
				element: <EditJobRoute />,
				loader: jobsLoader,
				action: editJobAction,
			},
			{
				path: "jobs/:jobId/destroy",
				action: destroyAction,
				errorElement: <div>Oops! There was an error.</div>,
			},
			{
<<<<<<< HEAD
				path: "/about/:jodId/edit",
				element: <ShowJobRoute />,
				loader: aboutLoader,
				action: editAction,
=======
				path: "/about",
				element: <DeleteRoute />,
>>>>>>> 7084e6adf4764abc494ebe53e47146f967b10742
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
