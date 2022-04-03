// template strings/literals
let email = document.getElementById("email") // do not know why it is NOT working!
console.log(email)
const recipient = "James"
const sender = "Per Harald Borgen"

// Break the email string into multiple lines
const emailEl = `Hey ${recipient}! 
                How is it going? Cheers 
                ${sender}
`

console.log(emailEl)
// email.textContent = emailEl