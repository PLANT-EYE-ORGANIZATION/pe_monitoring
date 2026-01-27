import React, { type FC } from "react";

type Props = {
  item: any;
};

export const SensorsTitle: FC<Props> = ({ item }) => {
  return (
    <div className="col-span-2">
      <h6 className="p-6 text-md font-bold">{item}</h6>
    </div>
  );
};
