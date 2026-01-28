import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/components/layouts/";
import { MainLayout } from "./components/layouts/mainLayout";
import { routes } from "./constants/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: MainLayout,
        children: [
          ...(routes.private.map(({ name, ...rest }: any) => rest) || []),
        ],
      },
      ...(routes.public || []),
    ],
  },
]);
