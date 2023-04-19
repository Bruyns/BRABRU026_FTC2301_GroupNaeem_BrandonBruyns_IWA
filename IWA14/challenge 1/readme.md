# IWA_14.2: Challenge 1
The following code provides three values as variables, and creates a function called logTwice. The logTwice function should take a provided parameter and log it two times. The expected output is:

 

Hello, John (35). I love coding!

Hello, John (35). I love coding!

 

Unfortunately at the moment went attempting to run the code the following error is returned:

 

hobby is not a function

 

 

Summary:

Do not change the provided values
Edit the code so that the message is logged twice
 
Extra reading material and tools to help you complete this challenge:
 

In this challenge you will have to use your knowledge of variables, functions and taking in values/parameters. Some tools to successfully succeed in this challenge include:

Look for syntax errors, review function calls, variable naming conflicts, variable references and variable assignments.
Functions - JavaScript | MDN
Storing the information you need — Variables - Learn web development | MDN
 

With this challenge, think logically. Read through it.

 
``` js
firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console(parameter)
  console(parameter)
}

function hobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby()
```

# IWA_14.3: Challenge 2
The following code snippet should have three functions that are declared outside an object. After creation, these functions are assigned to different objects, after which the calculate method is run on each of the objects.

 

At the moment the code below gives the following error:

 

Missing initializer in const declaration


The code should log these two values to the console:

48
12
 

Please fix the code above the // Not allowed to change below this comment, while still keeping it as three different functions.

 

Summary:

Edit only the code above the comment
Keep the three functions: add, multiply, internal
Log the values 48 and 12 to the console
 

Extra reading material and tools to help you complete this challenge:
 

In this challenge you will have to use your knowledge of Function Syntax, Function Calls and Object References to successfully complete this challenge. Here are some resources that might help you in debugging this challenge:

Javascript Function call() (With Examples)
JavaScript Function and Function Expressions (with Examples)
How Functions Work in JavaScript – JS Function Code Examples
Working with objects - JavaScript | MDN
 

// script.js
``` js

function add = a, b => { a + b }

function multiply = a, b => { a - b }

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
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
```