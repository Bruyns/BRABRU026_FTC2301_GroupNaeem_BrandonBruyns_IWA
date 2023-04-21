
function add(a, b)  { 
	return  a + b; 
}

function multiply(a, b) { 
	return  a * b;
}
console.log(multiply)

function internal() {
	// this.add = this.add(this.a, this.b)
	// multiply.call(this.example1, this.example2)
	// return this
	add(example1.a,example1.b)
	multiply()
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()


console.log(add)
console.log(multiply)
console.log(internal)
console.log(add(a, b), multiply(a, b), internal())