import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planetsActions } from "../../store/planets-slice";

function Destination_1() {
  const [destination, setDestination] = useState(" ");
  const dispatch = useDispatch();
  const { planets } = useSelector((state) => state.planets);

  function dropDownChangeHandler(e) {
    setDestination(e.target.value);
    dispatch(planetsActions.selectPlanet1(e.target.value));
  }

  return (
    <div>
      <label>
        Destination 1
        <select onChange={dropDownChangeHandler} value={destination}>
          {planets.map((planet) => (
            <option>{planet.name}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
export default Destination_1;
