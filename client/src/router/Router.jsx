import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../pages/ViewApplication/ViewApplication";

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
        path: "/jobApply/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoutes>
            <MyApplication></MyApplication>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addJobs",
        element: (
          <PrivateRoutes>
           <AddJobs></AddJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoutes>
           <MyPostedJob></MyPostedJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/viewApplication/:job_id",
        loader : ({params}) => fetch(`http://localhost:3000/application/job/${params.job_id}`),
        element: (
          <PrivateRoutes>
          <ViewApplication></ViewApplication>
          </PrivateRoutes>
          
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
