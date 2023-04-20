import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vehiclesActions } from "../../store/vehicles-slice";

const Vehicle2 = () => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const { planet2 } = useSelector((state) => state.planets);
  const [checkedBoxIndex, setCheckedBoxIndex] = useState();
  const dispatch = useDispatch();

  function checkBoxChangeHandler(e) {
    const deselectedCBIndex = +checkedBoxIndex;
    const selectedCBIndex = +e.target.id;
    setCheckedBoxIndex(selectedCBIndex);
    console.log(deselectedCBIndex, selectedCBIndex);
    dispatch(
      vehiclesActions.setVehicle2({ selectedCBIndex, deselectedCBIndex })
    );
  }

  return planet2 ? (
    <ul className="w-1/6" onChange={checkBoxChangeHandler}>
      <h2>Select Vehicle-2</h2>
      {vehicles.map((vehicle, index) => (
        <div className="flex gap-1">
          <input
            id={index}
            name={vehicle.name}
            type="checkbox"
            checked={index === checkedBoxIndex}
            disabled={planet2.distance > vehicle.max_distance}
          />
          <label>
            {vehicle.name}
            <span> ({vehicle.total_no})</span>
          </label>
        </div>
      ))}
    </ul>
  ) : (
    ""
  );
};

export default Vehicle2;
