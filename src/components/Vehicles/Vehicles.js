import React from "react";
import Vehicle1 from "./Vehicle1";
import Vehicle2 from "./Vehicle2";
import Vehicle3 from "./Vehicle3";
import Vehicle4 from "./Vehicle4";
import Card from "../UI/Card";

function Vehicles() {
  return (
    <div className="flex gap-32">
      <Card>
        <Vehicle1 />
      </Card>
      <Vehicle2 />
      <Vehicle3 />
      <Vehicle4 />
    </div>
  );
}
export default Vehicles;
