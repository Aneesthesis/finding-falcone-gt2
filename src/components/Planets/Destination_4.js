import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planetsActions } from "../../store/planets-slice";

function Destination_4() {
  const { planets, planet1, planet2, planet3 } = useSelector(
    (state) => state.planets
  );
  const { vehicle3 } = useSelector((state) => state.vehicles);
  const [destination, setDestination] = useState(" ");
  const dispatch = useDispatch();

  //conditionally rendering destination3
  if (planet3 && vehicle3) {
    function dropDownChangeHandler(e) {
      const destination = JSON.parse(e.target.value);
      setDestination(e.target.value.name);
      dispatch(planetsActions.selectPlanet4(destination));
    }

    return (
      <div className="flex flex-col">
        <label>Destination 4</label>
        <select
          onChange={dropDownChangeHandler}
          value={destination}
          placeholder="Select"
        >
          <option disabled value=" ">
            Select
          </option>
          {planets
            .filter(
              (planet) =>
                planet.name !== planet1.name &&
                planet.name !== planet2.name &&
                planet.name !== planet3.name
            )
            .map((planet) => (
              <option value={JSON.stringify(planet)}>{planet.name}</option>
            ))}
        </select>
      </div>
    );
  }
}

export default Destination_4;
