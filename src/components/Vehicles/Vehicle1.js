import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vehiclesActions } from "../../store/vehicles-slice";

const Vehicle1 = () => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const { planet1 } = useSelector((state) => state.planets);
  const [checkedBoxIndex, setCheckedBoxIndex] = useState();

  const dispatch = useDispatch();

  function checkBoxChangeHandler(e) {
    const deselectedCBIndex = +checkedBoxIndex;
    const selectedCBIndex = +e.target.id;
    setCheckedBoxIndex(selectedCBIndex);
    console.log(deselectedCBIndex, selectedCBIndex);
    dispatch(
      vehiclesActions.setVehicle1({ selectedCBIndex, deselectedCBIndex })
    );
  }

  return (
    <ul className="w-1/6" onChange={checkBoxChangeHandler}>
      {vehicles.map((vehicle, index) => (
        <div className="flex gap-1">
          <input
            id={index}
            name={vehicle.name}
            type="checkbox"
            checked={index === checkedBoxIndex}
          />
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
