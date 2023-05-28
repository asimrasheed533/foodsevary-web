import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./style.scss";
import Home from "./screens/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./RootLayout";
import Products from "./screens/Products";
import Details from "./screens/details";
import Pizza from "./screens/pizza";
import Snacks from "./screens/Snacks";
import Biryani from "./screens/Biryani";
import Barbecue from "./screens/Barbecue";
import Chickencurries from "./screens/Chickencurries";
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
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/pizza",
        element: <Pizza />,
      },
      {
        path: "/snacks",
        element: <Snacks />,
      },
      {
        path: "/biryani",
        element: <Biryani />,
      },
      {
        path: "/barbecue",
        element: <Barbecue />,
      },
      {
        path: "/chickencurries",
        element: <Chickencurries />,
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
