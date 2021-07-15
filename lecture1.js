const myName = 'Sarosh';
console.log(myName);

const printMyName = (name) => {
    console.log("Hello " + name);
};

printMyName(myName);

// if we have only one argument then we can omit the parenthesis

const printName = name => {
    console.log(name);
};

printName(myName);

// functions with no arguments

const printString = () => {
    console.log("Hello");
};

printString();

// multiple parameters

const add = (a, b) => {
    console.log(a+b);
};

add(2,3);

// in short form

const Add = (a, b) => console.log(a+b);

Add(2, 5);