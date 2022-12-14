import './App.css';
import React, { useState } from "react"
import Goodbot from './components/Goodbot';
import Badbot from './components/BadBot';

const App = () => {
  const [userInput, setUserInput] = useState("")
  
  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }
  return (
    <>
    <h2>Type something here!</h2>
    <input type="text" value={userInput} onChange={handleChange} />
    <Goodbot userInput={userInput}/>
    <Badbot userInput={userInput}/>

    </>
  );
}

export default App;
