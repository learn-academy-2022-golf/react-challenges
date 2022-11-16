
import { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("")
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }


  return (
    
   <>
   <h1>The Three Stooges</h1>
   <input type="text" value={userInput} onChange={handleChange} />
   <p>GoodRobot says: "I heard you say {userInput}"</p>
   <p>BadRobot says: "{userInput}"</p>
   </>
  )
}

export default App;

//map over string, return 
//reverse method
/*  const [newString, setNewString] = useState("")
  const randomRobot = (e) => {
    let stringMaker = (e.target.value).toString()
    console.log(stringMaker)
    let array  = stringMaker.split("")
    let reversed = array.reverse()
    const newString = reversed.join("")
    return setNewString(newString)
  }
  
*/