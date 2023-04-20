import React from "react";
import Vehicle1 from "./Vehicle1";
import Vehicle2 from "./Vehicle2";
import Vehicle3 from "./Vehicle3";
import Vehicle4 from "./Vehicle4";

function Vehicles() {
  return (
    <div className="flex gap-32">
      <Vehicle1 />
      <Vehicle2 />
      <Vehicle3 />
      <Vehicle4 />
    </div>
  );
}
export default Vehicles;
