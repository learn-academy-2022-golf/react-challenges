import "./App.css";
import restaurants from "./restaurants";
import Food from "./components/Food";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([{}]);
  const addToCart = (item, price) => {
    setCart([...cart, { food: item, cost: price }]);
  };

  return (
    <div className="App">
      <h1>Golf Eats</h1>
      {cart.map((item, index) => {
        return <p key={index}>{`${item.food}: ${item.cost}`}</p>;
      })}
      <div>
        <h2>Burgers</h2>

        <div className="wraper">
          {restaurants.Burger.map((item, index) => {
            return <Food menu={item} key={index} />;
          })}
        </div>
        <h2>Pizzas</h2>

        <div className="wraper">
          {restaurants.Pizza.map((item, index) => {
            return <Food addToCart={addToCart} menu={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
