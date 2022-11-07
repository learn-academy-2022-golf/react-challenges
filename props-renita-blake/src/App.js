
import { useState } from 'react';
import './App.css';
import DiceLog from './components/DiceLog'

const App = () => {
  const [dice, setdice] = useState([1, 2, 3, 4, 5, 6])
  let [diceIndex, setdiceIndex] = useState(null)

  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * dice.length)
    setdiceIndex(randomNum)
  }

  return (
    <>
    <div onClick = {rollDice} style={{height: 500, width: 500, borderStyle: "solid", textAlign: "center"}}>{dice[diceIndex]}</div>
    <div><DiceLog dice = {dice} diceIndex = {diceIndex} /></div>
    </>
  )
}

export default App;
