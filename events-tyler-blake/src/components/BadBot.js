import React from 'react'


const Badbot = (props) => {
    const badChange = (userInput) => {
        let bla = "BLA"
        return `I hear you saying ${userInput.replaceAll(bla)} is that correct?`
    }
  return (
    <>
    <div>
    <h3>Bad Bot</h3>
     <p>{badChange(props.userInput)}</p>
     </div>
     </>
  )
}

export default Badbot