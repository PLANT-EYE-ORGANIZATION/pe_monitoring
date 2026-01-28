import {
  AerationControl,
  CropMeasurement,
  HomePage,
  LoginPage,
  Sensors,
} from "@/pages";

export const routes = {
  public: [
    {
      path: "/login",
      Component: LoginPage,
    },
  ],
  private: [
    { index: true, Component: HomePage, name: "Home" },
    {
      path: "/measurement",
      Component: CropMeasurement,
      name: "Measurement",
    },
    { path: "/aeration", Component: AerationControl, name: "Aeration" },
    { path: "/sensors", Component: Sensors, name: "Sensors" },
  ],
};
