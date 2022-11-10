import React from 'react'

const DisplayItem = (props) => {
    return (
        <>
        <div style = {{height:"100px", width:"100px", border:"solid black 2px"}}>
        <em>{props.item}</em>
            <button onClick={()=>{props.addToCart(props.item)}}>
            Add this item to cart
            </button>

            </div>
        </>
    )
}

export default DisplayItem
