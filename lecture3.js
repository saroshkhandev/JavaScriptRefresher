// Classes

class Human {
    constructor() {
        this.gender = 'male';
    }
    
    printMyGender() {
        console.log(this.gender);
    }
}

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

const person = new Person();
person.printMyName();
person.printMyGender();