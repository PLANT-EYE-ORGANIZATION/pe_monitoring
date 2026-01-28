import type { FC } from "react";
import { Outlet } from "react-router";

export const MainLayoutBody: FC = () => {
  return (
    <div className="py-10 min-h-dvh">
      <Outlet />
    </div>
  );
};
