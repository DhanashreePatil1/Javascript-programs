const number_set = new Set(); 
console.log(number_set);
number_set.add(11);
number_set.add(22);
number_set.add(33);
number_set.add(22); // Adding duplicate element
number_set.add(44);
number_set.add(55);

console.log(number_set);
console.log(`Size of set is ${number_set.size}`);

// number_set.clear(); //Clear Set

console.log("======== Delete element from Set=========");
const isDeleted = number_set.delete(22);
console.log(isDeleted);
console.log(number_set);

console.log("======== has() =========");
const is_available = number_set.has(33);
console.log(is_available);

console.log("======== typeof Set =========");
console.log(typeof number_set);

console.log("======== Traversing using for of loop =========");
for (const element of number_set) {
    console.log(element); 
}
console.log(`============== Remove duplicate element ===================`);
const array_numbers = [11, 55, 3, 11, 40, 77, 55, 3];
const my_set = new Set();
for (const element of array_numbers) {
    my_set.add(element);
    
}
console.log(array_numbers);
console.log(my_set);