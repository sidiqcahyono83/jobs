import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Root } from "./routes/root";
import { ErrorRoute } from "./routes/error";
import { HomeRoute } from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorRoute />
  },
  {
    path: "/home",
    element: <HomeRoute />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
