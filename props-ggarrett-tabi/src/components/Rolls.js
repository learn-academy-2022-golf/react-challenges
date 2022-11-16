import '../App.css'

const Rolls = (props) => {
    return (
        <div className="rolls">
            <h2>Dice Rolls</h2>
            <ul>
                {props.rolls.map((diceRoll,index) => <li key={index}>{diceRoll}</li>)}
            </ul>
        </div>
    )
}

export default Rolls