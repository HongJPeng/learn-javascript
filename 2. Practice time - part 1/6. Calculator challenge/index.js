let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

function add() {
    console.log("Add clicked")
    sum = num1 + num2
    sumEl.textContent = "Sum: " + sum
}

function subtract() {
    console.log("Substract clicked")
    sum = num1 - num2
    sumEl.textContent = "Sum: " + sum
}

function divide() {
    console.log("Divide clicked")
    sum = num1 / num2
    sumEl.textContent = "Sum: " + sum
}

function multiply() {
    console.log("Multiply clicked")
    sum = num1 * num2
    sumEl.textContent = "Sum: " + sum
}