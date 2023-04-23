import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planetsActions } from "../../store/planets-slice";

function Destination_3() {
  const { planets, planet1, planet2 } = useSelector((state) => state.planets);
  const { vehicle2 } = useSelector((state) => state.vehicles);
  const [destination, setDestination] = useState(" ");
  const dispatch = useDispatch();

  //conditionally rendering destination3
  if (planet2 && vehicle2) {
    console.log(planet2.name);

    function dropDownChangeHandler(e) {
      const destination = JSON.parse(e.target.value);
      setDestination(e.target.value.name);
      dispatch(planetsActions.selectPlanet3(destination));
    }

    return (
      <div className="flex flex-col">
        <label>Destination 3</label>
        <select
          disabled={destination ? false : true}
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
                planet.name !== planet1.name && planet.name !== planet2.name
            )
            .map((planet) => (
              <option value={JSON.stringify(planet)}>{planet.name}</option>
            ))}
        </select>
      </div>
    );
  }
}

export default Destination_3;
