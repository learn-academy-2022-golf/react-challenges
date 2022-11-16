import React from 'react'

const BlaBot = (props) => {
  return (
    <div>{`Blah Bot says ${props.blah.join("")}`}</div>
  )
}

export default BlaBot