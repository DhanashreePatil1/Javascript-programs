const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Assignmnet B : Using filter() Method ");
console.log("=================================================================================");
console.log("1. Find out all the numbers which are greater than 50 : ");
const greater_num = array_numbers.filter((element) =>{
    return element>50;
});
console.log(greater_num);

console.log("=================================================================================");
console.log("2. Find out all the Even numbers : ");

const even_num = array_numbers.filter((element) => {
    return element%2==0;
});
console.log(even_num);

console.log("=================================================================================");
console.log("3. Find out all the Odd numbers : ");

const odd_num = array_numbers.filter((element) => {
    return element%2!=0;
});
console.log(odd_num);

console.log("=================================================================================");
console.log("4. Find out all the numbers which are multiple of 5 : ");

const multiply_num = array_numbers.filter((element) => {
    return element%5==0;
});
console.log(multiply_num);

console.log("=================================================================================");
console.log("5. Find out all numbers which are between 20 and 50 : ");

const find_num = array_numbers.filter((element) => {
    return element>=20 && element <= 50;
});
console.log(find_num);
