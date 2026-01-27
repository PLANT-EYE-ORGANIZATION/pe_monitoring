import type { FC } from "react";
import { Outlet } from "react-router";

export const MainLayout: FC = () => {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
};
