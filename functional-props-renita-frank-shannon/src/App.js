import logo from './logo.svg';
import './App.css';
import Display from './components/Display.js'

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

*/


function App() {

// Refactor food array into less statements

let taco = {
  name: "Fancy Taco",
  price: 4.07
}
let burger = {
    name: "Fancy Burger",
    price: 14.66
}
let burrito = {
    name: "Fancy Burrito",
    price: 20.34
}

let arrayFoodItems = [taco, burger, burrito]

  return (
    <>
      {arrayFoodItems.map((foodItem, index) => {
        return (
          <Display 
            name={foodItem.name} 
            price={foodItem.price}
            key = {index}
          />
        )
      })
    }
      
    </>
  );
}

export default App;
