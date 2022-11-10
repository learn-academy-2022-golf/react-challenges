import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice'
import RollButton from './components/RollButton'
import RollLog from './components/RollLog'
import { useState } from 'react';
const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6])
  const [randomIndex, setRandomIndex] = useState(null)
  const [previousNumbers, setPreviousNumbers] = useState([])

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * numbers.length)
    setPreviousNumbers([...previousNumbers, numbers[randomIndex]])
  }

  return (
    <>
    <h1>Roll dice</h1>
    <RollButton rollDice={rollDice}/>
    <Dice numbers={numbers} index={randomIndex}/>
    <RollLog previousNumbers={previousNumbers}/>
    </>
  );
}

export default App
