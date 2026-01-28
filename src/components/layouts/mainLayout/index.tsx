import type { FC } from "react";
import { MainLayoutHeader } from "./MainLayotHeader";
import { MainLayoutBody } from "./MainLayoutBody";

export const MainLayout: FC = () => {
  return (
    <div className="container mx-auto">
      <MainLayoutHeader />
      <MainLayoutBody />
    </div>
  );
};
