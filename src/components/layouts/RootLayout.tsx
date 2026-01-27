import type { FC } from "react";
import { Outlet } from "react-router";

export const RootLayout: FC = () => {
  return (
    <div className="bg-gray-50 min-h-dvh">
      <Outlet />
    </div>
  );
};
