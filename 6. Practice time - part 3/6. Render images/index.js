// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const container = document.getElementById("container")
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function render(picArr) {
    content =""
    for (let i = 0; i < picArr.length; i++) {
        content += `<img class="team-img" alt="pictures of employees" src="${picArr[i]}">`

    }
    return content
}

container.innerHTML = render(imgs)