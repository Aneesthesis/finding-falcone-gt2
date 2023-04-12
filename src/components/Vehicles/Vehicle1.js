import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Vehicle1 = () => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const { planet1 } = useSelector((state) => state.planets);

  return (
    <ul className="w-1/6">
      {vehicles.map((vehicle, index) => (
        <div className="flex gap-1 ">
          <input key={index} type="checkbox" />
          <label>
            {vehicle.name}
            <span> ({vehicle.total_no})</span>
          </label>
        </div>
      ))}
    </ul>
  );
};

export default Vehicle1;
