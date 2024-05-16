import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/contact">Contact Us</Link>
        <span> | </span>
        <Link to="/about">About us</Link>
        <span> | </span>
        <Link to="/">Home</Link>
      </nav>

      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
