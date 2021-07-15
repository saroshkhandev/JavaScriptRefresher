// Using Reach Operator

// In this we used reach function same ... three dots but what we did it to take multiple
// arguments in the input and reach created an array of arguments for us.

const filter = (...args) => {
    return args.filter(el => el === 1);
};

console.log(filter(1, 2, 3));