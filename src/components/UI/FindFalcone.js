import React from "react";
import getToken from "../../tokenAPI/getToken";

const FindFalcone = () => {
  return (
    <div onClick={() => getToken()}>
      <button>FindFalcone</button>
    </div>
  );
};
export default FindFalcone;
