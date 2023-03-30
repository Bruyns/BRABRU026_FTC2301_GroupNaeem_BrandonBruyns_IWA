const date = 2050
let status = 'parent' 
let count = 0

if (date == 2050) {
	console.log(date, "January", 'New Year’s Day')
	console.log(date, "March", 'Human Rights Day')
	console.log(date, 'april', 'Family Day')
	console.log(date, 'april', 'Freedom Day')
	count = count + 4


	if (status == "student") {
	  console.log('June', 'Youth Day')
	count = count + 1
  }

	console.log(date, 'August', 'Women’s Day')
	console.log(date, 'September', 'Heritage Day')
	console.log(date, 'December', 'christmas')
	console.log(date, 'Day of Reconciliation')
	count = count + 3

	if (status == "parent") {
	  console.log(date, 'Christmas Day')
    count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)