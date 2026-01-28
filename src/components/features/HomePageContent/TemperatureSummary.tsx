import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const TemperatureSummary = () => {
  const [activeTab, setActiveTab] = useState("temperatures");

  // Generate sample data for the chart
  const generateData = () => {
    const data = [];
    const startDate = new Date("2024-08-24");

    for (let i = 0; i < 30; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dateStr = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      data.push({
        date: dateStr,
        maxThreshold: 32,
        avgTemp: 20 + Math.sin(i * 0.5) * 2,
        minTemp: 15 + Math.sin(i * 0.5) * 4,
        maxTemp: 25 + Math.sin(i * 0.5) * 3,
      });
    }

    return data;
  };

  // Generate delta temperature data
  const generateDeltaData = () => {
    const data = [];
    const startDate = new Date("2024-08-24");

    for (let i = 0; i < 30; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dateStr = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      data.push({
        date: dateStr,
        deltaThreshold: 2,
        avgDelta: 0.3 + Math.sin(i * 0.3) * 1.5,
        minDelta: -4 + Math.sin(i * 0.4) * 3,
        maxDelta: 8 + Math.sin(i * 0.5) * 4,
      });
    }

    return data;
  };

  const chartData = generateData();
  const deltaChartData = generateDeltaData();

  return (
    <div className="mx-auto bg-gradient-to-br from-green-50 to-blue-50 space-y-4">
      <div>
        <h2 className="border p-6 rounded-xl text-xl font-bold">
          Temperature Summary
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Temperature Card */}
        <Card className="lg:col-span-1 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">🌡️</div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">Temperature - °C</p>
                <div className="flex gap-4 text-xs mb-3">
                  <div>
                    <div className="font-semibold text-lg">6.3</div>
                    <div className="text-gray-500">Min</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">19.4</div>
                    <div className="text-gray-500">Avg</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">25</div>
                    <div className="text-gray-500">Max</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-2 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full"></div>
                  <div className="absolute -right-1 -top-6 text-xs text-gray-500">
                    32
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delta Temperature Card */}
        <Card className="lg:col-span-1 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">📊</div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">
                  Delta Temperature - °C
                </p>
                <div className="flex gap-4 text-xs mb-3">
                  <div>
                    <div className="font-semibold text-lg">-12.9</div>
                    <div className="text-gray-500">Min</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">0.3</div>
                    <div className="text-gray-500">Avg</div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">17.2</div>
                    <div className="text-gray-500">Max</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-2 bg-gradient-to-r from-blue-500 via-yellow-500 to-red-600 rounded-full"></div>
                  <div className="absolute -left-1 -top-6 text-xs text-gray-500">
                    2
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3D Visualization Card */}
        <Card className="lg:col-span-1 shadow-lg bg-gradient-to-br from-green-100 to-blue-100">
          <CardContent className="pt-6 flex items-center justify-center h-full min-h-[140px]">
            <div className="relative">
              <div className="text-6xl transform hover:scale-110 transition-transform">
                🌾
              </div>
              <svg
                width="120"
                height="40"
                viewBox="0 0 120 40"
                className="absolute -bottom-8 left-1/2 -translate-x-1/2"
              >
                <ellipse
                  cx="60"
                  cy="20"
                  rx="50"
                  ry="8"
                  fill="rgba(0,0,0,0.15)"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <CardHeader className="pb-3">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-4">
              <TabsTrigger value="temperatures">TEMPERATURES</TabsTrigger>
              <TabsTrigger value="delta">DELTA TEMPERATURES</TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent>
            <TabsContent value="temperatures" className="mt-0">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11, fill: "#666" }}
                    tickLine={{ stroke: "#ddd" }}
                  />
                  <YAxis
                    domain={[0, 40]}
                    ticks={[0, 10, 20, 30, 40]}
                    tick={{ fontSize: 11, fill: "#666" }}
                    tickFormatter={(value) => `${value} °C`}
                  />
                  <Tooltip
                    contentStyle={{ fontSize: 12 }}
                    formatter={(value) => `${Number(value).toFixed(1)} °C`}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: 11, paddingTop: 10 }}
                    iconType="rect"
                    iconSize={20}
                  />
                  <Line
                    type="monotone"
                    dataKey="maxThreshold"
                    stroke="#dc2626"
                    strokeWidth={2}
                    dot={false}
                    name="Max temperature threshold"
                  />
                  <Line
                    type="monotone"
                    dataKey="avgTemp"
                    stroke="#666"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    name="Avg temperature"
                  />
                  <Line
                    type="monotone"
                    dataKey="minTemp"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    name="Min temperature"
                  />
                  <Line
                    type="monotone"
                    dataKey="maxTemp"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={false}
                    name="Max temperature"
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="delta" className="mt-0">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart
                  data={deltaChartData}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11, fill: "#666" }}
                    tickLine={{ stroke: "#ddd" }}
                  />
                  <YAxis
                    domain={[-15, 20]}
                    ticks={[-15, -10, -5, 0, 5, 10, 15, 20]}
                    tick={{ fontSize: 11, fill: "#666" }}
                    tickFormatter={(value) => `${value} °C`}
                  />
                  <Tooltip
                    contentStyle={{ fontSize: 12 }}
                    formatter={(value) => `${Number(value).toFixed(1)} °C`}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: 11, paddingTop: 10 }}
                    iconType="rect"
                    iconSize={20}
                  />
                  <Line
                    type="monotone"
                    dataKey="deltaThreshold"
                    stroke="#dc2626"
                    strokeWidth={2}
                    dot={false}
                    name="Delta threshold"
                  />
                  <Line
                    type="monotone"
                    dataKey="avgDelta"
                    stroke="#666"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    name="Avg delta"
                  />
                  <Line
                    type="monotone"
                    dataKey="minDelta"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    name="Min delta"
                  />
                  <Line
                    type="monotone"
                    dataKey="maxDelta"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={false}
                    name="Max delta"
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};
