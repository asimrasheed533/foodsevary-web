import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./style.scss";
import Home from "./screens/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./RootLayout";
import Services from "./screens/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
  {
    path: "*",
    element: <div className="not__found">404 Page Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
