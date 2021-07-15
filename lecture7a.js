// Primitive types and reference types

// primitive type;

const number = 4;
const num2 = number;

console.log(num2);

const person = {
    name: 'Sarosh'
};

const secondPerson = person;

person.name = 'Sarosh Khan';

console.log(secondPerson);

// In the case of copying the constructor the values aren't copied instead it acts
// like a pointer secondPerson is acting like a pointer which is stating the 
// address of person object and if any changes happens to that person object it doesn't
// matter whether it is done after second person initialization or not.. the secondPerson
// will call the person object and that object will run each time.

// This is what REFERENCE TYPE is.