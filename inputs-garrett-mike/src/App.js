import React, { useState } from 'react'
import BlaBot from './components/BlaBot'
import CoolBot from './components/CoolBot'
import Robot from './components/Robot'
import "./App.css"

const App = () => {
  const [name, setName]= useState("")
  const [blah, setBlah]= useState([])
  const handleChange = (e) => {
    console.log(e)
    setName (e.target.value)
    if(e.nativeEvent.inputType==="deleteContentBackward"){
      setBlah (blah.slice(0,name.length-1))
    } else {

    if(!blah.length||blah[blah.length-1]==="a")
    setBlah ([...blah,"b"])
    if(blah[blah.length-1]==="b")
    setBlah ([...blah,"l"])
    if(blah[blah.length-1]==="l")
    setBlah ([...blah,"a"])
    }

  }

  return (
    <div className='App'>
      <h1>Robot Conversations</h1>
      <label htmlFor='conversation'>Type here</label>
      <input id='conversation' type="text" onChange={handleChange} />
      {name!==""?<div className="wrapper">
    <div className="robot"><Robot name={name}/></div>
    <div className="robot"><CoolBot name={name}/></div>
    <div className="robot"><BlaBot blah={blah}/></div>
    </div>: <></>
    }
    </div>

  )
}

export default App
