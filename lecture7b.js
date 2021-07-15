// to make sure that reference behaviour does not happen we use spread operator.

const person = {
  name: "Sarosh",
};

const secondPerson = {
    ...person,
};

person.name = "Sarosh Khan";

console.log(secondPerson);
