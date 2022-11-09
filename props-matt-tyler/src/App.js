import React, {useState} from "react"

import './App.css'


const App = () => {

  const [dice, setDice] = useState(["1","2","3","4","5","6"])
  const [randomIndex, setRandomIndex] = [null]
  const [previousRoll, setPreviousRoll] = useState([])

  const rollDice = () => {
    let randomCard = Math.floor(Math.random() * dice.length)
    setRandomIndex(randomCard)
    setPreviousCards([...previousRoll, dice [randomIndex]])

  return (
    <>

      <div className="square-div"> 
      {color}
         </div>

<button onClicRk={}
    </>
  )
}

export default App