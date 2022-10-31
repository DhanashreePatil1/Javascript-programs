let age=27;
let person = {
    first_name : "Chaitali",
    last_name: "Kamble",
    mobile_num: "8830 159 429",
   // pan_number: "Dlhpk5847J",
    adhar:"1234 4569 1236",

    details: function() {
        return `Person Details ${this.first_name} ${this.last_name} ${this.adhar} ${this.mobile_num}`;
    },
    address: {
        city: "Pune",
        state: "MH",
        country: "India",
        district: "Pune",
        taluka: "Haveli",
        village: "Roshangaon",
        pin_code: 431202
    }


}
console.log(person.first_name);
console.log(person.mobile_num);
console.log(person["adhar"]);

person.pan_card = "Dlhpk5847J"; // adding value
console.log(person);

person.father_name = "Mahadev";
console.log(person);

person.first_name = "Amrapali"; //update

delete person.adhar;  // delete
console.log(person);

console.log(typeof(person));

let details = person.details();
console.log(details);

console.log(person.isMarried);

console.log(typeof person.address); 
console.log(person.address.city, person.address.village); 

person.address.pin_code = 431203;
console.log(person.address.pin_code);



const student = {
first_name: "Mohit",
last_name:"Sharma",
age: 31,
address:"pune",
marks:"80%",
}

const student_keys=Object.keys(student);
console.log(student_keys);
const student_values=Object.values(student);
console.log(student_values);


for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`${key}  ${element}`);
    }
}


const is_first_name_available = "first_name" in student;
console.log(`Is Available ${is_first_name_available} `);