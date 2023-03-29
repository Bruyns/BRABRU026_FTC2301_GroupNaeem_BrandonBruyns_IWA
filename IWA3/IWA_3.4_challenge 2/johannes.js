// johannes.js

const firstname = "Johannes"
const surname = "Potgieter"
const role = "intern"

const display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display

export{
    firstname as firstname3
}
export{
    surname as surname3
}
export{
    role as role3
}