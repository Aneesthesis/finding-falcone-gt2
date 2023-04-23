import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planetsActions } from "../../store/planets-slice";

function Destination_1() {
  const [destination, setDestination] = useState(" ");

  const dispatch = useDispatch();
  const { planets } = useSelector((state) => state.planets);

  function dropDownChangeHandler(e) {
    const destination = JSON.parse(e.target.value);
    setDestination(e.target.value.name);
    dispatch(planetsActions.selectPlanet1(destination));
  }

  return (
    <div className="flex flex-col">
      <label>Destination 1</label>
      <select
        disabled={destination ? false : true}
        value={destination}
        placeholder="Select"
        onChange={dropDownChangeHandler}
      >
        <option disabled value=" ">
          Select
        </option>
        {planets.map((planet) => (
          <option value={JSON.stringify(planet)}>{planet.name}</option>
        ))}
      </select>
    </div>
  );
}
export default Destination_1;
