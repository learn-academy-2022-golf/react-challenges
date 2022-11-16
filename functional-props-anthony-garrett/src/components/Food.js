import React from "react";


const Food = (props) => {
  return (
    <div style={{
      border: "1px solid black",
      height: "150px",
      width: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",

    }}>
      <h3>{props.menu.food}</h3>
      <p>{`$${props.menu.price}`}</p>
      <button style={{
        width: "125px"
      }
      }
      onClick={()=> {
        props.addToCart(props.menu.food, props.menu.price)
      }}
      >
        buy
      </button>
    </div>
  );
};
export default Food;
