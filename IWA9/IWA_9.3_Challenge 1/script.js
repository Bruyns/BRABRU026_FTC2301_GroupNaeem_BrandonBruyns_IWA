const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.75,
    transport:  10.20,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200.00,
    'large-room': 300.00,
    'small-apartment': 400.00,
    'large-apartment': 800.00,
    'small-house': 1200.00,
    'large-house': 2400.00,
}



// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100
console.log(taxAsDecimal)

const startingAfterTax = salary - (salary * taxAsDecimal)
console.log(startingAfterTax)

const type =  size + '-' + lodging
const balance = startingAfterTax - (expenses.food + expenses.transport + rent[type])
console.log(balance, type )
