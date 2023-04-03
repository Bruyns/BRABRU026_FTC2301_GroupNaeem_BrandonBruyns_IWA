FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0
var location = 'RSA' || 'NAM'
var shipping = null
const price = shipping + total
var currency = 'R' || 'N$'



if (location === 'RSA') 
{ let shipping = 400 && currency === 'R' }

if (location === 'NAM'){
     let shipping = 600 && currency === 'N$'
}
if (location !== 'NK'){
    let shipping = 800
}


shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED 

var total = shoes + toys + shirts + batteries + pens


if (total > 1000 ){
    let shipping = 0 && calcShipping
}
	if (location === 'NAM' ||  location === 'RSA'  && customers < 2) {
		    shipping = 0 && calcShipping
		}


if (shipping = 0 && customers !== 1) 
 console.log(FREE_WARNING) 

if (location !== 'RSA' || 'NAM'){ 
   console.log(BANNED_WARNING) 
}
else{
    console.log(total, currency, shoes + batteries + pens + shirts + shipping)
}
    
console.log(total, customers, shipping, location)
customers = '1'

currency = null