
import './App.css';
import DiceRoller from './components/DiceRoller';
import roll from './components/roll';
import { useState } from 'react'
import previousDice from './components/previousDice'
import p from './components/';


const Dice = () =>{
const [roll, setRoll] = useState([1, 2, 3, 4, 5, 6])
const [randomDice, setRandomDice] = useState(null)
const [previousDice, setPreviousDice] = useState([])

const drawDice = () => {
  let DiceRoller = Math.ceil(Math.random() * 6)
  setRandomDice(randomDice)
  setPreviousDice([...previousDice, roll[randomDice]])
}
return (
  <>
  <p  onClick ={}></p>
  <roll roll={roll} index={randomDice}/>
  <previousDice previousDice={previousDice}/>
  
  
  </>
)

}






export default App;
