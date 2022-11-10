
import React, {useState} from "react"
import './App.css'


const App = () => {
  const [color, setColor] = useState("white")
  

  return (
    <>
      <h1>Color Counter</h1>
      <div className="square-div"> 
      {color}
         </div>
     
      
    </>
  )
}

export default App






