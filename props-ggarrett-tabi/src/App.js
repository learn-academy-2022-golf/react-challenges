import logo from './logo.svg';
import './App.css';
import Rolls from './components/Rolls';
import Dice from './components/Dice';
import { useState } from 'react';
import diceone from './assets/diceone.png'


function App() {
  const [rolls, setRolls] = useState([])
  const dice = [1,2,3,4,5,6]

  const handleClick = () => {
    setRolls([...rolls, dice[Math.floor(Math.random() * dice.length)]])
  }

  return (
    <div className="main">
      <Dice handleClick={handleClick} rolls={rolls}/>
      <Rolls rolls={rolls} />
    </div>
  );
}

export default App;
