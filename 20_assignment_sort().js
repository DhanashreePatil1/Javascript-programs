const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log("Assignment A :");
console.log("=========================================================================================");


//console.log("Before Reverse : ");
console.log(array_roll_numbers);
console.log("1. Reverse the array :");
array_roll_numbers.reverse();
//console.log("After Reverse : ");
console.log(`${array_roll_numbers}`);

console.log("=========================================================================================");
console.log("2. Using sort method : ");
array_roll_numbers.sort();
console.log(`${array_roll_numbers}`);

console.log("=========================================================================================");
console.log("3. Sort the array in Ascending order : ");
const ascending_sort = array_roll_numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(`${ascending_sort}`);

console.log("=========================================================================================");
console.log("4. Sort the array in Decending order using sort() method : ");
const decending_sort = array_roll_numbers.sort((a, b) => {
    return a > b ? -1 : 1;
});
console.log(`${decending_sort}`);

console.log("=========================================================================================");
console.log("5. Sort the array in Decending order using reverse() method : ");
/*const sort_array = array_roll_numbers.sort();
//console.log(sort_array);
const reverse_array = sort_array.reverse();
console.log(`${reverse_array}`);*/

const ascending_sort1 = array_roll_numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
const reverse_array = ascending_sort1.reverse();
console.log(`${reverse_array}`);

console.log("=========================================================================================");
console.log("6. Find the Greatest number from array : ");

var large = 0;
for (let index = 0; index < array_roll_numbers.length; index++) {
    if (array_roll_numbers[index] > large) {
        large = array_roll_numbers[index];
    }
}
console.log(`${large}`);

console.log("=========================================================================================");
console.log("7. Find the Smallest number from array : ");
var Smallest = array_roll_numbers[0];
for (let index = 0; index < array_roll_numbers.length; index++) {
    if (array_roll_numbers[index] < Smallest) {
        Smallest = array_roll_numbers[index];
    }
}
console.log(`${Smallest}`);

console.log("=========================================================================================");
console.log("8. Find the duplicate array : ");

const array_new = [...new Set(array_roll_numbers)];
console.log(array_new);

/*const ascending_sort2 = array_roll_numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});*/
/*function removeDuplicates(array_roll_numbers) {
    return array_roll_numbers.filter((item,index) => array_roll_numbers.indexOf(item) === index);
}
console.log(removeDuplicates(array_roll_numbers));*/


console.log("=========================================================================================");

