let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊","🍎","Kiwi","🍎", "Leeche"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let otherShelf = document.getElementById("other-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function fruitSort() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        } else if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎" 
        } else {
            otherShelf.textContent += fruit[i] + " "
        }
    }
    console.log(appleShelf)
    console.log(orangeShelf)
    console.log(otherShelf)
}

fruitSort()
console.log(fruit)