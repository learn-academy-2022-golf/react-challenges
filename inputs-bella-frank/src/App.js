import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// DONE - As a user, I can see a landing page with heading and a text input.

// DONE - As a user, I see titles of three robots waiting for my text.

// DONE - As a user, I see my "Good Robot" repeating exactly what I type in real time.
  // Add a handleChange function, and change event to input box
    // handleChange will pass user input upon change to good robot for display

// *** NEXT *** - As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.

// As a user, I see a third robot that modifies the input as per the developer's choice in real time.
function App() {

  const [userInput, setUserInput] = useState("")

  // Define userInput
  const handleChange = (e) => {
    console.log(e)
    setUserInput(e.target.value)
  }

  return (
    <div className="App">

      <h1>Kitty Robo Active Listening</h1>

      <input type="text" value={userInput} onChange={handleChange}/> 

      <div className='Robot'> 
        Good Robo 
        <p>{userInput}</p>
      </div>
      
      <div className='Robot'> Bad Robo"</div>
      <div className='Robot'> Kitty Robo </div>

    </div>
  );
}

export default App;
