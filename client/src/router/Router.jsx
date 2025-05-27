import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";

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
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
