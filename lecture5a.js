// Using Spread Operator

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

// the ... three dots is the spread operator it is used in the case like above it passes the
// values of previous array or function with which you can pass more values.

console.log(newNumbers);

const person = {
    name: 'Sarosh'
};

const newPerson = {
    ...person,
    age: 21
};

console.log(newPerson);

// as you can see the example with object we created an object named person with one
// property called name and then created a new object called newPerson and in that 
// we used spread operator to get all the properties from it and we declared a new
// property in it called age.