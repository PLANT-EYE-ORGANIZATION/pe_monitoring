import { BorderBeam } from "@/components/ui/border-beam";
import type { FC } from "react";

type Props = {
  item: any;
  index: number;
};

export const TemperatureCard: FC<Props> = ({ item, index }) => {
  return (
    <div
      className={`relative ${index !== 0 ? "border" : ""} overflow-hidden p-5 flex items-center justify-center rounded-lg h-[70px]`}
    >
      <div className="flex items-center justify-center">
        <span>{item.label}</span>
      </div>
      {index !== 0 && <BorderBeam duration={8} size={100} />}
    </div>
  );
};
