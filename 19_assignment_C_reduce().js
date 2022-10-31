const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Assignmnet C : Using reduce() Method ");
console.log("======================================================================================================");
console.log("1. Find the Sum of all numbers : ");
const sum_of_all_num = array_numbers.reduce((current_total,element) => {
    return current_total + element;
});
console.log(sum_of_all_num);

console.log("======================================================================================================");
console.log("2. Find the sum of all Even numbers : ");

const sum_even_num = array_numbers.filter((element) => {
    return element%2==0;
}).reduce((current_total,element) => {
    return current_total + element;
});
console.log(sum_even_num);