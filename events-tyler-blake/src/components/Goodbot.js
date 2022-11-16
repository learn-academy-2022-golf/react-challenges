import React from 'react'


const Goodbot = (props) => {
    const goodChange = (userInput) => {
        return `I hear you saying ${userInput} is that correct?`
    }
  return (
    <>
    <div>
    <h3>Good robot</h3>
     <p>{goodChange(props.userInput)}</p>
     </div>
     </>
  )
}

export default Goodbot