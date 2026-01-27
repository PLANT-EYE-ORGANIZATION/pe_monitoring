import { SiloSection } from "./SiloSection";
import { TemperatureSummary } from "./TemperatureSummary";
import { SensorsSummarySection } from "./SensorsSummary";

const HomePageBody = () => {
  return (
    <div className="space-y-12">
      <SiloSection />
      <TemperatureSummary />
      <SensorsSummarySection />
    </div>
  );
};

export default HomePageBody;
