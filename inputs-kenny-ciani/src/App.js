
import './App.css';
import { useState } from 'react'
import Robots from './components/Robots'
import LeaveTheSame from './components/Robots'

const App = () => {
const [something, setSomething] = useState("")
const []
const newSomething = (e) => {
  setSomething(e.target.value)
}
  return (
    <>
    <h1>Three robots waiting for my text</h1>
    <h3>Good Bot</h3>
    <input type="text" onChange={newSomething} /><Robots something={something} />
    <h1>Say something</h1>

    <h3>Here:</h3>
    <Robots something={something} />
    <h2>Bad Bot</h2>
    <Robots something={something} />
    <h1>Caryl Baskin Bot</h1> 
    <Robots something={something} />
    {/* <LeaveTheSame /> */}
    </>
  )
}

export default App;
