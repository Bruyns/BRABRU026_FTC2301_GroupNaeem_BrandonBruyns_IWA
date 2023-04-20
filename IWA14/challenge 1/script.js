const firstName = 'John';
const age = 35;
const userHobby = 'Coding';

const parameter = `Hello, ${firstName} ${age}. I love ${userHobby}!`;

const logTwice = () => {
  console.log(parameter)
// why is parameters logging twice even though parameters is defined as a single string line?
}

function hobby  () {
  logTwice()
}

hobby()
console.log(hobby())