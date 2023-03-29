// nwabisa.js

const firstname = "Nwabisa"
const surname = "Gabe"
const role = "CEO"

const display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display

export{
    firstname as firstname2
}
export{
    surname as surname2
}
export{
    role as role2
}