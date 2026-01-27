import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TemperatureCard } from "./TemperatureCard";
import { SensorsTitle } from "./SensorsTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ResponsiveContainer } from "recharts";

const items = [
  {
    id: "Sensors",
    nestedItem: [
      { icon: "01", label: "M1" },
      { icon: "02", label: "M2" },
      { icon: "03", label: "C41" },
      { icon: "04", label: "TS1" },
      { icon: "05", label: "TS1" },
      { icon: "06", label: "TS1" },
      { icon: "06", label: "TS1" },
      { icon: "06", label: "TS1" },
      { icon: "06", label: "TS1" },
      { icon: "06", label: "TS1" },
      { icon: "06", label: "TS1" },
      { icon: "06", label: "TS1" },
      { icon: "06", label: "TS1" },
    ],
  },
  {
    id: "Sensor 01",
    nestedItem: [
      { icon: "01", label: "20" },
      { icon: "02", label: " 02" },
      { icon: "03", label: " 03" },
      { icon: "04", label: " 04" },
      { icon: "05", label: " 05" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
    ],
  },
  {
    id: "Sensor 02",
    nestedItem: [
      { icon: "01", label: "20" },
      { icon: "02", label: " 02" },
      { icon: "03", label: " 03" },
      { icon: "04", label: " 04" },
      { icon: "05", label: " 05" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
    ],
  },
  {
    id: "Sensor 03",
    nestedItem: [
      { icon: "01", label: "20" },
      { icon: "02", label: " 02" },
      { icon: "03", label: " 03" },
      { icon: "04", label: " 04" },
      { icon: "05", label: " 05" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
      { icon: "06", label: " 06" },
    ],
  },
];

export const SensorsSummarySection = () => {
  const [activeTab, setActiveTab] = useState("temperatures");

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50">
      <div className="space-y-3">
        <h2 className="border p-6 rounded-xl text-3xl font-bold">
          Sensors Pulse
        </h2>

        <Card className="p-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <CardHeader className="pb-3">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-4">
                <TabsTrigger value="temperatures">TEMPERATURES</TabsTrigger>
                <TabsTrigger value="delta">DELTA TEMPERATURES</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="temperatures" className="mt-0">
                <div>
                  {items.map((item: any, index: number) => {
                    return (
                      <div key={index}>
                        <div className="grid grid-cols-15 gap-3">
                          {item.nestedItem.map(
                            (nestedItem: any, nestedIndex: number) => {
                              return nestedIndex === 0 ? (
                                <SensorsTitle
                                  key={nestedIndex}
                                  item={item.id}
                                />
                              ) : (
                                <TemperatureCard
                                  key={nestedIndex}
                                  index={index}
                                  item={nestedItem}
                                />
                              );
                            },
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="delta" className="mt-0">
                <div>
                  {items.map((item: any, index: number) => {
                    return (
                      <div key={index}>
                        <div className="grid grid-cols-15 gap-3">
                          {item.nestedItem.map(
                            (nestedItem: any, nestedIndex: number) => {
                              return nestedIndex === 0 ? (
                                <SensorsTitle
                                  key={nestedIndex}
                                  item={item.id}
                                />
                              ) : (
                                <TemperatureCard
                                  index={index}
                                  key={nestedIndex}
                                  item={nestedItem}
                                />
                              );
                            },
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};
