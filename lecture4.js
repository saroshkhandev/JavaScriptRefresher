// the newer way accoring to es7

// In this method we dont need the constructor we can simply give the property a value
// and in the case of inheritance we dont have to create a super constructor because
// we dont require a constructor at very first place.

class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Sarosh';
    gender = 'Male';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printMyGender();

// this will only work with es7/babel