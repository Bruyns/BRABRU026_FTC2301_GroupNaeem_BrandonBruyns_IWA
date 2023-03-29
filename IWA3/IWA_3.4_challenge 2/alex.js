// alex.js

const firstname = "Alex"
const surname = "Naidoo"
const role = "Head of Marketing"

const display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display

export{
    firstname as firstname1
} 
export{
    surname as surname1
}
export{
    role as role1
}