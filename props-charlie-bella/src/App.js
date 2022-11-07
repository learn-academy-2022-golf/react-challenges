import React, {useState} from 'react'
import './App.css';
import dice from './components/DiceRoller'

const App = () => {
    let [diceNumber, setDiceNumber] = useState([1, 2, 3, 4, 5, 6])
    let [diceIndex, setDiceIndex] = useState(0)
    
  const previousRoll = () => {
      let [previousNumber, setPreviousNumber] = useState[null]
      // null = empty number
      return setPreviousNumber.map([...previousNumber, diceNumber[diceIndex]])
      
  }  
  console.log(previousRoll)
  
  const randomDiceIndex = () => {
    let randomNum = Math.floor(Math.random() * diceNumber.length)
    setDiceIndex(randomNum)
    return (diceNumber[setDiceIndex])
      // created the setDiceIndex via the randomNum
    }
  return (
    <>
    <body>
      <p>
      <button onClick = {randomDiceIndex}>{diceNumber[diceIndex]}</button></p>
     
    
    </body>
    <body>
       <p>{previousRoll}Hello</p>
    </body>
    </>
  )  
  
}


export default App;
