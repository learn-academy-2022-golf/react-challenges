import { useState } from "react"
const DiceLog = (props) => {
    
    let [pastRolls, setpastRolls] = useState([])
    return <div style={{height: 500, width: 500, borderStyle: "solid",}}>{props.dice[props.diceIndex]}</div>
}

export default DiceLog