import React from "react";
import { useSelector } from "react-redux";

function Destination_1() {
  const planets = useSelector((state) => state.planets);
  return (
    <div>
      <span>Destination 1</span>
      <select>
        {planets.map((planet) => (
          <option>{planet}</option>
        ))}
      </select>
      <ul></ul>
    </div>
  );
}
export default Destination_1;
