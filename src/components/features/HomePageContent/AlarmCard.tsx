import { BorderBeam } from "@/components/ui/border-beam";
import { BellDot } from "lucide-react";
import type { FC } from "react";

type Props = {
  item: any;
};

export const AlarmCard: FC<Props> = () => {
  return (
    <div className="relative border overflow-hidden p-5 flex items-center justify-center rounded-lg h-[108px]">
      <BellDot size={30} />
      <BorderBeam duration={8} size={100} />
    </div>
  );
};
