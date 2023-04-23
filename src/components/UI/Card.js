import React from "react";

const Card = (props) => {
  return (
    <div className=" bg-gradient-to-t from-purple-500 to-pink-500">
      {props.children}
    </div>
  );
};

export default Card;
