import React, { useState } from 'react'
import RandomColor from './components/RandomColor'
import './App.css'
// import section^

// functional component v
const App = () => {
  let [colors, setColors] = useState(["red", "orange", "blue", "pink", "green"])
  let [colorIndex, setcolorIndex] = useState(0)
  
  const randomUserNameIndex = () => {
    let randomNum = Math.floor(Math.random() * userNames.length)
    setUserNameIndex(randomNum)
  }

  // the functional return / display data / jsx section V
  return (
    <>
      <Count/>
      
      <h2 onClick={randomUserNameIndex}> Hello {userNames[userNameIndex]}</h2>
    </>
  )
}

export default App