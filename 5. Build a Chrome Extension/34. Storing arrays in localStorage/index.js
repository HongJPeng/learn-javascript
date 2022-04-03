// let myLeads = ["www.awesomelead.com"]
let myLeads = '["www.awesomelead.com"]'

myLeads = JSON.parse(myLeads)
// console.log(myLeads)
myLeads.push("www.magicleads.com")
// console.log(myLeads)
myLeads = JSON.stringify(myLeads)
console.log(myLeads)
console.log(typeof(myLeads))
console.log(typeof myLeads) // same as above. this the Per's way to do in Video


// 1. turn the myLeads string into an array
// 2. Push a new value into the array
// 3. Turn the array into a string again
// 4. Consile.log the string using typeof to verify that it is a string

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
