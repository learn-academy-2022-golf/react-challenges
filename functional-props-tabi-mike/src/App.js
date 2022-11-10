import React, { useState } from 'react'
import './App.css';
import DisplayItem from './components/DisplayItem'
import mtMenu from './components/mtMenu'


const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
 
  return (
    <>
    <h1>MT Food Truck</h1>
    <h3>"You currently have ${cart.length} items in your cart."</h3>
    <h4>Your Cart: {cart}</h4>
    <div> 
      <h2>MT Food Truck Menu</h2>
      <div className='wrap'>
      <h2>beverages</h2>
      {mtMenu.beverages.map((item, index)=>{
        return <DisplayItem item={item} addToCart={addToCart}/>
      })}
      </div>
    </div>                                            
    </>
  )
}
}

export default App;
