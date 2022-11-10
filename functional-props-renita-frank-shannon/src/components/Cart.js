import React from 'react'

const Cart = (props) => {
  return (
    <div>
    Your items:{props.cart}
    Your total cost: {props.cost}
    </div>
  )
}

export default Cart