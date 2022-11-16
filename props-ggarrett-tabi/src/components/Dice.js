import '../App.css'
import React from 'react'
import diceone from '../assets/diceone.png'
import dicetwo from '../assets/dicetwo.png'
import dicethree from '../assets/dicethree.png'
import dicefour from '../assets/dicefour.png'
import dicefive from '../assets/dicefive.png'
import dicesix from '../assets/dicesix.png'

const Dice = (props) => {
    const diceimage = [diceone, dicetwo, dicethree, dicefour, dicefive, dicesix ]
    return (
        <div className="dice">
            <div className="dice-box" onClick={props.handleClick}>
                <img src={props.rolls !== [] ? diceimage[props.rolls[props.rolls.length -1] -1] : diceimage[5]} alt="dice" />
            </div>
            <h1>Click Box to Roll</h1>
        </div>
    )
}

export default Dice