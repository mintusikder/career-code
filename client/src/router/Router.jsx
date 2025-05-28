import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import JobDetails from "../pages/JobDetails/JobDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/job/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
