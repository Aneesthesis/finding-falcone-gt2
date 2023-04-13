import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vehiclesActions } from "../../store/vehicles-slice";

const Vehicle1 = () => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const { planet1 } = useSelector((state) => state.planets);

  const dispatch = useDispatch();

  function checkBoxChangeHandler(e) {
    console.log(e.target.name);
    dispatch(vehiclesActions.setVehicle1(e.target.id));
  }

  return (
    <ul className="w-1/6" onChange={checkBoxChangeHandler}>
      {vehicles.map((vehicle, index) => (
        <div className="flex gap-1 ">
          <input id={index} name={vehicle.name} type="checkbox" />
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
