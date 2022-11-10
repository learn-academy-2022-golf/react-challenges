import React from "react";
import restaurants from "../restaurants";

const Food = (props) => {
  return (
    <div>
      <h3>{props.menu.food}</h3>
      <p>{props.menu.price}</p>
      <button
        onClick={() => {
          props.addToCart(props.menu.food, props.menu.price);
        }}
      >
        buy
      </button>
    </div>
  );
};
export default Food;
