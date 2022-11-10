import React, { useState } from "react";

const Display = (props) => {
  //use state to make an empty array, that can be updated with addiitonal items each time the button is clicked, while remmebering the previous items

  return (
    <div>
      {props.name} costs {props.price}
      <button
        onClick={() => {
          console.log(props.name)
          props.addToCart(props);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Display;
