import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planetsActions } from "../../store/planets-slice";

function Destination_2() {
  const { planets, planet1 } = useSelector((state) => state.planets);
  const { vehicle1 } = useSelector((state) => state.vehicles);
  const [destination, setDestination] = useState(" ");
  const dispatch = useDispatch();

  //conditionally rendering destination2
  if (planet1 && vehicle1) {
    function dropDownChangeHandler(e) {
      setDestination(e.target.value);
      dispatch(planetsActions.selectPlanet2(e.target.value));
    }

    return (
      <div className="flex flex-col">
        <label>Destination 2</label>
        <select
          onChange={dropDownChangeHandler}
          value={destination}
          placeholder="Select"
        >
          <option disabled value=" ">
            Select
          </option>
          {planets
            .filter((planet) => planet.name !== planet1)
            .map((planet) => (
              <option>{planet.name}</option>
            ))}
        </select>
      </div>
    );
  }
}
export default Destination_2;
