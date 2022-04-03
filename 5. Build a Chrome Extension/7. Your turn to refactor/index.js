// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// function saveLead() {
//     console.log("Button clicked!")
// }

let button = document.getElementById("input-btn")

button.addEventListener("click", function(){
    console.log("Button clicked! using addEventListener")
})