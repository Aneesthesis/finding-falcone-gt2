import React from "react";
import { useSelector } from "react-redux";

const Vehicle1 = () => {
  const { vehicles } = useSelector((state) => state.vehicles);

  return (
    <ul>
      {vehicles.map((vehicle, index) => (
        <>
          <label>{vehicle.name}</label>
          <input id={index} type="checkbox" />
        </>
      ))}
    </ul>
  );
};

export default Vehicle1;
