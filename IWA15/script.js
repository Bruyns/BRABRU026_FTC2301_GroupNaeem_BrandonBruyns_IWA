const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],          //this is [0] in the array, [0][0, 1, 2, 3, 4]                (length = 5)
		['second', [2, 6, 8, 4, 14, 12, 10]],   //this is [1] in the array, [0][0, 1, 2, 3, 4, 5, 6, 7]       (length = 7)
		['third', [9, 3, 1]],                   //this is [2] in the array, [0][0, 1, 2]                      (length = 3)
	]
}

// Only edit below

const first  = data.lists[0][1]
const second  = data.lists[1][1] 
const third = data.lists[2][1] 
console.log(first[first.length - 1])
console.log(second[second.length - 1])
console.log(third[third.length - 1])

const extractBiggest = (data) => {
	if ([first.length - 1] > [second.length - 1] && [third.length - 1]) {
		// first.pop(first.length - 1)
		return first[first.length - 1]	
		first.pop(first.length - 1)
	}
	else if ([second.length - 1] > [third.length - 1] && [first.length - 1]) {
		// second.pop(second.length - 1)
		return second[second.length - 1]
		second.pop(second.length - 1)
	}
	else if ([third.length - 1] > [first.length - 1] && [second.length - 1]) {
		// third.pop(third.length - 1)
		return third[third.length - 1]
		third.pop(third.length - 1)
    }
}
const result = []

console.log(first)
console.log(second)
console.log(third)
console.log(extractBiggest(),extractBiggest(),extractBiggest(),extractBiggest())


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)