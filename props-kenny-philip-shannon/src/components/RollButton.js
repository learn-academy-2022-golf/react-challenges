import React from 'react'

const RollButton = (props) => {
    console.log(props)
  return (
    <>
        <button onClick={props.rollButton}>Roll the dice.</button>
    </>
    )
}

export default RollButton