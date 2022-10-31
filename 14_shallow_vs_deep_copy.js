let value_original = 100;
let value_copy = value_original;
console.log(value_original, value_copy);

value_original = 400;
console.log(value_original, value_copy);

const array_original = [1, 2, 3, 4, 6, 77, 88 ];
// let array_copy = array_original; // Shallow copy - Not recommended
console.log("============= Deep copy using spread operator===========");
let array_copy = [...array_original]; // Deep Copy
console.log(array_original);
console.log(array_copy);

array_original.push(9999);

console.log(array_original);
console.log(array_copy);


console.log("========== Object Cloning=============");
const person_elon = {
    id: 123,
    full_name : "Elon Musk",
    country: "US"
}
// const person_stew = person_elon; // Shallow copy
const person_stew = {...person_elon};
console.log(person_elon);
console.log(person_stew);
person_stew.full_name = "Stew Job"; // Updated 
console.log(`Elon Person ${person_elon.id} ${person_elon.full_name} ${person_elon.country}`);
console.log(`Stew Person ${person_stew.id} ${person_stew.full_name} ${person_stew.country}`);

const stud_anil = {
    id:444,
    full_name : "Anil Mohite",
    
}