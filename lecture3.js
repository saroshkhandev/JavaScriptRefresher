// Classes

class Human {
    constructor() {
        this.gender = 'male';
    }
    
    printMyGender() {
        console.log(this.gender);
    }
}

// we inherited this human class in person in order to use the values or functions from 
// parent class we have to create a super constructor super(); inside the constructor of
// child class. this super constructor initializes the parent class everytime the 
// child class is called with an instance.

class Person extends Human {
    constructor() {
        super();
        this.name = 'Sarosh';
        this.gender = "Male";
    }

    printMyName() {
        console.log(this.name);
    }
}

// you can see here we called the function printMyGender that is a function from Human
// class the parent class.. so we created a super constructor inside the constructor
// of child class inorder to initialize the parent class at the time of call.

const person = new Person();
person.printMyName();
person.printMyGender();