class Person{
    first_name
    last_name
    age
    address
    constructor(first_name, last_name, age, address) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.address = address;
    } 

    details() {
        console.log(` ${this.first_name} ${this.last_name} ${this.age} ${this.address}`);
    }
}
 const person_mohit = new Person("Mohit", "Sharma", 31, "PUNE Wakad");

 const person_chaitali = new Person("Chaitali", "Kable", 22, "Satara ABC");

 const person_ravi = new Person("Raviraj", "Shelke", 21, "Mumbai BCS");
 
 console.log(person_mohit);
 console.log(person_chaitali);
 console.log(person_ravi);

 person_mohit.details();
 person_ravi.details();

let my_res = person_chaitali instanceof Person;
console.log(my_res); 