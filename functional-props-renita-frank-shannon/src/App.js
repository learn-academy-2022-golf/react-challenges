import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display.js";
import React, { useState } from "react";
import Cart from "./components/Cart";

/*
  functional-props challenge

  As a user, I can see an application that has a list of food items and the price of each item.
  Hint: Take some time to think about the data structure that will allow you to effectively store the required information.

    objAllFoodItems = {
      objFoodItem1 = { name : "burgerName"
        cost : 99.99}
      objFoodItem2 = {name : "taco"
      cost : 199.99}
    }

    In App.js return a display component called

    <Display />

    As a user, I can click a button to select an item I wish to order.
use console.log to see the current array of items in the cart to know the button is working
When add to cart is clicked, display food item name on the console
*/

function App() {
  // Refactor food array into less statements

  let taco = {
    name: "Fancy Taco",
    price: 4.07,
  };
  let burger = {
    name: "Fancy Burger",
    price: 14.66,
  };
  let burrito = {
    name: "Fancy Burrito",
    price: 20.34,
  };

  let arrayFoodItems = [taco, burger, burrito];

  let [cart, setCart] = useState([]);
  let [cost, setCost] = useState(0);
  const addToCart = (foodItem) => {
    setCost(cost + foodItem.price);
    setCart([...cart, foodItem.name]);
    return null
  };
  console.log(cart);
  console.log(cost);

  return (
    <>
      <h1>Menu</h1>
      {arrayFoodItems.map((foodItem, index) => {
        return (
          
          <Display
            name={foodItem.name}
            price={foodItem.price}
            key={index}
            addToCart={addToCart}
          />
          
          
        );
      })}
      <Cart cart={cart} cost={cost} />
    </>
  );
}

export default App;
