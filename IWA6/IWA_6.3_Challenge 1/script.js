const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof primaryPhone ===  "number"   //the term following typeof should be the variable being checked
const secondaryValid = typeof parseInt(secondaryPhone) === "number"

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )