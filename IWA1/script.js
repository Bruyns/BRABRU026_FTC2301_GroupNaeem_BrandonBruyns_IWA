const MAX_NUMBER = 15
const MIN_NUMBER = -15


const number = document.querySelector('[data-key=number]')
const add = document.querySelector('[data-key=add]')
const subtract = document.querySelector('[data-key=subtract]')

// console.log(number, subtract, number)

const addHandler = () => {
    // console.log('add was clicked!')
    const newValue = parseInt(number.value) + 1
    number.value = newValue 

    if(subtract.disabled === true){
        subtract.disabled = false
    }
    if(newValue >= MAX_NUMBER){
        add.disabled = true
    }

}

const subtractHandler = () => {
    // console.log('subtract was clicked!')
    // console.log(typeof number.value)
    // console.log('123' + 4, parseInt(123) + 4)
    const newValue = parseInt(number.value) - 1
    number.value = newValue;

    
    if(add.disabled === true){
        add.disabled = false
    }
    if(newValue <= MIN_NUMBER){
        subtract.disabled = true
    }

}


subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler)