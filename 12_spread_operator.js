const array_numbers = [1, 2, 3, 4, 6, 77, 88 ];
console.log(array_numbers);
console.log(1, 2,3,4,6,77,88, 99);
console.log(...array_numbers);

let value_original=100;
let value_copy = value_original;
console.log(value_original,value_copy);

value_original = 400;
console.log(value_original, value_copy);

// clone or copy the array_numbers

let array_numbers_copy = array_numbers;
console.log(array_numbers);
console.log(array_numbers_copy);

array_numbers.push(9999);

console.log(array_numbers);
console.log(array_numbers_copy);


