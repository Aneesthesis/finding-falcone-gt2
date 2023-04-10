import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planetsActions } from "../../store/planets-slice";

function Destination_1() {
  const { destination, setDestination } = useState(" ");
  const dispatch = useDispatch();
  const { planets } = useSelector((state) => state.planets);

  const D1_planets = [...planets];
  console.log(D1_planets);

  function dropDownChangeHandler(e) {
    const selectedPlanet = e.target.value;
    setDestination(selectedPlanet);
    dispatch(planetsActions.selectPlanets(selectedPlanet));
  }

  return (
    <div>
      <label>
        Destination 1
        <select
          onChange={dropDownChangeHandler}
          defaultValue="select"
          value={destination}
        >
          {planets.map((planet) => (
            <option>{planet.name}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
export default Destination_1;
