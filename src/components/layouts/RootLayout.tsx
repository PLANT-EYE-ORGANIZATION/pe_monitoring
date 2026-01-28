import type { FC } from "react";
import { Outlet } from "react-router";

export const RootLayout: FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-50">
      <Outlet />
    </div>
  );
};
