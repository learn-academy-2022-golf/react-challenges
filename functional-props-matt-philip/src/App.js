import React, { useState } from 'react'
import './App.css'
import DisplayItem from './components/DisplayItem'
import stores from './stores'
import cost from './cost'

const App = () => {

    // State for cart
      //state is local memory held in the browser
    const [cart, setCart] = useState([])

    // functionality for adding items to the cart

    const addToCart = (item) => {
        // console.log("addToCart worked with:", item);
      setCart([...cart, item])
    }

  return (
    <>

      <h1>EZ Grocery Shopping</h1>

      <h3>You currently have {cart.length} items in your cart.</h3>
      <h4> Your cart: {cart}</h4>
      <div >
        <h2>Ralphs</h2>
        <div className="wrap">
          {stores.Ralphs.map((ralphsItem, index)=>{
            return <DisplayItem item={ralphsItem} addToCart={addToCart} key={index} />
            v className="wrap">
          {cost.ralphStores.map(( ralphStores, index)=>{
            return <DisplayItem item={ralphStores} addToCart={addToCart} key={index} />
       })}
        </div>
        <h2>Safeway</h2>
        <div className="wrap">
          {stores.Safeway.map((safewayItem, index) => {
            return <DisplayItem item={safewayItem} addToCart={addToCart} key={index} />
          })}
        </div>
        <h2>Albertsons</h2>
        <div className="wrap">
          {stores.Albertsons.map((albertsonsItem, index)=>{
            return <DisplayItem item={albertsonsItem} addToCart={addToCart} key={index} />
          })}
        </div>
      </div>

    </>
  )
}

export default App
