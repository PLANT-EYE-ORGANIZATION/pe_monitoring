import GlassIcons from "@/components/GlassIcons";
import { Card } from "@/components/ui/card";
import { AlarmCard } from "./AlarmCard";

const items = [
  { icon: "01", label: "Silo 01" },
  { icon: "02", label: "Silo 02" },
  { icon: "03", label: "Silo 03" },
  { icon: "04", label: "Silo 04" },
  { icon: "05", label: "Silo 05" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
  { icon: "06", label: "Silo 06" },
];

export const SiloSection = () => {
  return (
    <div className="grid grid-cols-2 gap-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="space-y-3">
        <h2 className="border p-6 rounded-xl text-3xl font-bold">All Silo</h2>

        <Card className="px-6 py-10">
          <GlassIcons items={items} className="custom-class" colorful={false} />
        </Card>
      </div>
      <div className="space-y-3">
        <h2 className="border p-6 rounded-xl text-3xl font-bold">All Alarm</h2>

        <Card className="p-4">
          <div className="grid grid-cols-5 gap-6">
            {items.map((item: any, index: number) => {
              return <AlarmCard key={index} item={item} />;
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};
