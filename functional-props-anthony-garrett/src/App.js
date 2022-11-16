import "./App.css";
import restaurants from "./restaurants";
import Food from "./components/Food";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, price) => {
    setCart([...cart, {food: item, cost: price}])
  };

  return (
    <div className="App">
      <h1>Golf Eats</h1>
      <div className="cart">
      {cart.map((item, index) => {
        return <p key={index}>{`${item.food}: $${item.cost}`}</p>;
      })}   
      <p>Total: ${(cart.reduce((acc, obj)=>{
        return acc + obj.cost
      }, 0)) * 0.05 + (cart.reduce((acc, obj)=>{
        return acc + obj.cost
      }, 0))  }</p>
      </div>
      
      <div>
        <h2>Burgers</h2>

        <div className="wraper">
          {restaurants.Burger.map((item, index) => {
            return <Food menu={item} key={index} addToCart={addToCart}/>;
          })}
        </div>
        <h2>Pizzas</h2>

        <div className="wraper">
          {restaurants.Pizza.map((item, index) => {
            return <Food  menu={item} key={index} addToCart={addToCart} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
