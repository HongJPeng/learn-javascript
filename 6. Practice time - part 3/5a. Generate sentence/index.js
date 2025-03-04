// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

let largestCountries = ["China", "India", "USA"]
let bestFruits = ["Apples","Bananas","Kiwi","Orange"]

function generateSentence(desc, arr) {
    let result = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length -1
    for (let i = 0; i < (arr.length); i++ ) {
        if (i === lastIndex) {
            result += arr[i]
        } else
            result += `${arr[i]}, `
    }
    
    return(result)
    
}

let sen1 = generateSentence("largest countries", largestCountries)
console.log(sen1)

let sen2 = generateSentence("best fruits", bestFruits)
console.log(sen2)