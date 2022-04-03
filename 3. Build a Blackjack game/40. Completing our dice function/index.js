// Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor( Math.random() * 6 )

// console.log(randomNumber)

// let diceNumber = randomNumber + 1

// console.log ("Dice number is: " + diceNumber)
function rollDice() {
    return Math.floor (Math.random() *6 ) + 1
}
console.log(rollDice())