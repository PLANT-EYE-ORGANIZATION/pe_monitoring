import { createBrowserRouter } from "react-router";

import { RootLayout, MainLayout } from "@/components/layouts/";
import {
  AerationControl,
  HomePage,
  LoginPage,
  CropMeasurement,
  Sensors,
} from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: MainLayout,
        children: [
          { index: true, Component: HomePage },
          { path: "/crop-measurement", Component: CropMeasurement },
          { path: "/aeration-control", Component: AerationControl },
          { path: "/sensors", Component: Sensors },
        ],
      },
      {
        path: "/login",
        Component: LoginPage,
      },
    ],
  },
]);
