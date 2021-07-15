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