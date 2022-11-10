import React from 'react'

const Dice = (props) => {
    console.log(props)
  return (
    <>
    <h2>Current number</h2>
    <p>{props.numbers[props.index]}</p>
    </>
    )
}

export default Dice