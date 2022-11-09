

const rollDice = () => {
    let randomCard = Math.floor(Math.random() * dice.length)
    setRandomIndex(randomCard)
    setPreviousRoll([...previousCards, dice[randomIndex]])

}