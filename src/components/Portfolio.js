import React from "react";
import Home from "./Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Experience from "./Experience";
import About from "./About";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/experience", element: <Experience /> },
    ],
  },
]);

const Portfolio = () => {
  return <RouterProvider router={router} />;
};

export default Portfolio;
