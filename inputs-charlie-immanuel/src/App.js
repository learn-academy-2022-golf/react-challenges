
import './App.css';
import { useState } from 'react';
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import KanyeBot5000 from './components/KanyeBot5000';

function App() {

const [input , setInput] = useState("")

const handleChange = (e) => {

setInput(e.target.value)


}

  return (
    <>
<h1>Robot Voices</h1>
<input type="text" value ={input} onChange={handleChange} />

<h2>Good Robot</h2>
<GoodRobot name={input} />

<h2>Bad Robot</h2>
<BadRobot name={input} />

<h2>KanyeBot5000 Voice</h2>
<KanyeBot5000 name={input} />
</>
  )
}

export default App;
