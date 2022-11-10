import './App.css';
import React from 'react'
import {useState} from 'react'

const App = () => {
const [words, setWords] = useState("")
const wordChange = (e) => {setWords(e.target.value)}
return (
  <>
  <h1>Robot Active Listening!</h1>
   <p>What's Up?</p><input type = "text" onChange = {wordChange}/> 
   <h3>Good Robot</h3>
   <p>I hear you saying </p>

  </>
)


}
export default App;
