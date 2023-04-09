import React from "react";
import Destination_1 from "./Destination_1";
import Destination_2 from "./Destination_2";
import Destination_3 from "./Destination_3";
import Destination_4 from "./Destination_4";

const Planets = () => {
  return (
    <div>
      <h2>Select planets you want to search in...</h2>
      <div>
        <Destination_1 />
        <Destination_2 />
        <Destination_3 />
        <Destination_4 />
      </div>
    </div>
  );
};

export default Planets;
