// function constructor

function Person(first_name, city) {

    this.first_name = first_name;
    this.city = city;
}

const person_anil = new Person("Anil","Pune");
const person_radha = new Person("Radha","Pune");

console.log(`${person_anil.first_name}`);
console.log(`${person_anil.city}`);


// Prototype 

Person.prototype.country = "India";
console.log(`${person_anil.country}`);
//console.log(`${person_radha.country}`);