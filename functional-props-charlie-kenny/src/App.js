import store from './store'
import storePrice from './store'
import React, {useState} from 'react'
import './App.css';
import DisplayItem from './DisplayItem'
import DisplayPrice from './DisplayPrice'

{/* <div className= "wrap">
  {storePrice.italianFoodPrices.map((priceItem, index)=>{
  return <DisplayPrice item={priceItem} key={index}/>
})}
  </div> */}

const App = () =>{

  const [cart, setCart] = useState([])
  const addToCart = (item) => {
    
    setCart([...cart,item])
  }
  return (
  <>
  <h1>Olive Garden</h1>
  <h3>Your order {cart.length}</h3>
  <h3>Your cart:{cart}</h3>
  <div className= "wrap" >
  {store.italianfood.map((foodItem, index)=>{
    return <DisplayItem item={foodItem} addToCart={addToCart} key={index}/>
  })}
  </div>  
  
  </>
  )
}

export default App
