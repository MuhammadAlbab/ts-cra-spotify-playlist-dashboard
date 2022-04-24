import { lazy } from "react";

const Routes = [
  {
    path: "/",
    element: lazy(() => import("pages/Home")),
  },
  {
    path: "/about",
    element: lazy(() => import("pages/About")),
  },
];

export default Routes;
