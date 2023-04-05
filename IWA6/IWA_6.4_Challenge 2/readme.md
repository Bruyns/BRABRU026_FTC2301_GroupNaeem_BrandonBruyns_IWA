The following code is meant to run every hour of the day to check a user’s balance should be calculated. The only time the balance should be calculated is when it is the start of a new day (in other words midnight, when hourOfDay and minuteOfDay are both 0). However, there are cases where the time is not known (in which case both hourOfDay and minuteOfDay will be undefined. To prevent any bugs, the balance should not be calculated if the time is not known.

 

Before calculating the cost, tax needs to be deduced as a percentage of the salary. After this is done all expenses should be subtracted such as food, transport and rent. The final result should be 274.0499. However, you are required to use toFixed(2) to only show cents (up to only 2 decimals) and prefix the value with a R symbol. This means that the final logged value should be R 274.05.

 

Note that you are only allowed to change the code below the comment.

 
``` js

const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
	const taxAsDecimal = tax / '100'
  const startingAfterTax = salary * '1' - taxAsDecimal
	const balace = starting - transport - food - rent
}
	
console.log(balance.toFixed(3))
```

## what needs to happed
* code should run a check every hour
* only calculate balance when hourOfDay and minuteOfDay === 0
* if time is undefined/ unknown balance should no be calculated
* calculate how balance should be given (equation)
* prefix total with 'R' and set decimal places to 2

## code change reasoning
* created const for for each catagory being the % of tax based on salary, the total value of deductions and the formular to be used when 
  calculating the final balance to be used by the code.
* created a "true" statement that makes both if hour/minute is 00 aswell as if time is null readable by javascript.