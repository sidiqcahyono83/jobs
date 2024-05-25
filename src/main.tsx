import React from "react";
import ReactDOM from "react-dom/client";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { RootRoute } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { DetailJobRoute } from "./routes/job";
import { JobsRoute } from "./routes/jobs-route";
import { AddJobRoute } from "./routes/add-job";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/jobs",
        element: <JobsRoute />
      },
      {
        path: "/jobs/:jobId",
        element: <DetailJobRoute />
      },
      {
        path: "/addjobs",
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
