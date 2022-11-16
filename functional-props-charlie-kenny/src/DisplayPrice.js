import React from 'react'

const DisplayPrice = (props) => {
    return (
        <>
        <div style = {{height:"100px", width:"100px", border:"solid black 2px"}}>
        <em>{props.item}</em>
            </div>
        </>
    )
}
export default DisplayPrice