import React from 'react'

const RollLog = (props) => {
  return (
    <>
        <h2>Previous numbers:</h2>
        {props.previousNumbers.map((number, index)=> {
            return (
                <p key={index}>{number}</p>
            )
        })}
    </>
    )
}

export default RollLog