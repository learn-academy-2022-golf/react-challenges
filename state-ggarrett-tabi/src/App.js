import logo from './logo.svg';
import './App.css';
import React from 'react' 
import {useState} from 'react'
import Box from './components/Box'


function App() {
  const [color, setColor] = useState(["white", "red", "green", "blue", "pink"])
  let [colorIndex, setColorIndex]=useState(0)
  let [colorIndex1, setColorIndex1]=useState(1)
  let [colorIndex2, setColorIndex2]=useState(2)
  let [colorIndex3, setColorIndex3]=useState(3)
  const handleClick = () => {
    setColorIndex(Math.floor(Math.random() * color.length))
    console.log(color[colorIndex])
  }
  
  const handleClick1 = () => {
    setColorIndex1(Math.floor(Math.random() * color.length))
    console.log(color[colorIndex1])
  }
  
  const handleClick2 = () => {
    setColorIndex2(Math.floor(Math.random() * color.length))
    console.log(color[colorIndex2])
  }
  
  const handleClick3 = () => {
    setColorIndex3(Math.floor(Math.random() * color.length))
    console.log(color[colorIndex3])
  }
  
  const addBox = () => {

  }


  return (
    <div className="main">
      <h1>Pretty Boxes</h1>
      <button onClick>Add Box</button>
      <div className="box" onClick={handleClick} style={{height:"300px", width: "300px", border:"3px solid black", backgroundColor:color[colorIndex]}}>
        <p style={{textAlign: "center", marginTop: "150px"}}>
          {color[colorIndex]}
        </p>
      </div>
      <div className="box" onClick={handleClick1} style={{height:"300px", width: "300px", border:"3px solid black", backgroundColor:color[colorIndex1]}}>
        <p style={{textAlign: "center", marginTop: "150px"}}>
          {color[colorIndex1]}
        </p>
      </div>
      <div className="box" onClick={handleClick2} style={{height:"300px", width: "300px", border:"3px solid black", backgroundColor:color[colorIndex2]}}>
        <p style={{textAlign: "center", marginTop: "150px"}}>
          {color[colorIndex2]}
        </p>
      </div>
      <div className="box" onClick={handleClick3} style={{height:"300px", width: "300px", border:"3px solid black", backgroundColor:color[colorIndex3]}}>
        <p style={{textAlign: "center", marginTop: "150px"}}>
          {color[colorIndex3]}
        </p>
      </div>
    </div>
  )
    
}


export default App;
