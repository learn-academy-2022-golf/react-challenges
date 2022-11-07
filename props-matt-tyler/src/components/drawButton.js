import React from 'react'

const DrawButton = (props) => {
  return (
    <>
      <button onClick={props.drawCard}>Roll the dice</button>
    </>
  )
}

export default DrawButton