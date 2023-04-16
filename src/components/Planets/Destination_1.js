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
    <div className="flex flex-col">
      <label>Destination 1</label>
      <select
        onChange={dropDownChangeHandler}
        value={destination}
        placeholder="Select"
      >
        <option disabled value=" ">
          Select
        </option>
        {planets.map((planet) => (
          <option>{planet.name}</option>
        ))}
      </select>
    </div>
  );
}
export default Destination_1;
