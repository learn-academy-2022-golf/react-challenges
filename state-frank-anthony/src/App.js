
import React, { useState } from 'react'
import "./App.css"

const App = () => {

  let [Colors, SetColors] = useState(['red', 'orange','yellow', 'green', 'blue','purple','pink'])

  let [ColorsIndex, SetColorsIndex] = useState(0)

  const handleClick = () => {
    let randomColors = Math.floor(Math.random() * Colors.length())
    SetColorsIndex(randomColors) 
  }

  return (
    <>
      <button onClick={} className="square"> {  } </button>
    </>
  )}


export default App;