import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vehiclesActions } from "../../store/vehicles-slice";

const Vehicle3 = () => {
  const { vehicles } = useSelector((state) => state.vehicles);
  const { planet3 } = useSelector((state) => state.planets);
  const [checkedBoxIndex, setCheckedBoxIndex] = useState();
  const dispatch = useDispatch();

  function checkBoxChangeHandler(e) {
    const deselectedCBIndex = +checkedBoxIndex;
    const selectedCBIndex = +e.target.id;
    setCheckedBoxIndex(selectedCBIndex);
    console.log(deselectedCBIndex, selectedCBIndex);
    dispatch(
      vehiclesActions.setVehicle3({ selectedCBIndex, deselectedCBIndex })
    );
  }

  return planet3 ? (
    <ul className="w-1/6" onChange={checkBoxChangeHandler}>
      <h2>Select Vehicle-3</h2>
      {vehicles.map((vehicle, index) => (
        <div className="flex gap-1">
          <input
            id={index}
            name={vehicle.name}
            type="checkbox"
            checked={index === checkedBoxIndex}
            disabled={planet3.distance > vehicle.max_distance}
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

export default Vehicle3;
