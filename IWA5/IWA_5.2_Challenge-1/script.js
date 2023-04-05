const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
let location = 'RSA'
let shipping = null
let currency = null
let customers = 1

const shoes = 300 * 1
const toys = 100 * 5
const shirt = 150 * NONE_SELECTED
const batteries = 35 * 2
const pen = 5 * NONE_SELECTED

const cost = (shoes + toys + shirt + batteries + pen)
console.log(cost)

if (location === 'RSA'){
     shipping = 400 
} else if (location === 'NAM' ){
   shipping = 600
} else if (location !== 'RSA' || 'NAM'){
     shipping = 800
} else if (cost > 1000 && customers === 1){
    shipping = 0
}else{
    console.log(BANNED_WARNING)
}

total = cost + shipping
const notFree = 'RSA' + ' ' +  'R' + total;
const freeShipping = 'RSA' +  ' ' + 'R' + cost ;
const notRSA = 'NAM' + ' ' + 'N$' + total;
const notNAM = '$' + total

console.log(notFree)
// if ( notFree === true){
// console.log(notFree)
// }if (customers >1){
//     console.log(FREE_WARNING)
// }if (notRSA === true){
//     console.log(notRSA)
// }