const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("Assignment B :");
console.log('======================================================================================================');
console.log("1. Find the Array element with it's index using forEach() with arrow function ");
array_numbers.forEach((element, index) => {
    console.log(`Element : ${element}, Index : ${index}`);
});

console.log('======================================================================================================');
console.log("2.1 Positive Numbers using forEach() with arrow function :");

array_numbers.forEach((element) => {
   if(element >= 0) {
    console.log(element);
   }
});

console.log('======================================================================================================');
console.log("2.2 Positive Numbers using forEach() with callback :");

array_numbers.forEach(function(value){
    if (value>=0){
        console.log(value)
    }
})
console.log('======================================================================================================');
console.log("3. Negative Numbers using forEach() :");

array_numbers.forEach((element) => {
    if(element < 0) {
        console.log(element);
    }
});

console.log('======================================================================================================');
console.log("4. Even Numbers using forEach() with arrow function :");

array_numbers.forEach((element) => {
    if(element%2 == 0) {
        console.log(element);
    }
});

console.log('======================================================================================================');
console.log("5. Sum of all elements from array_numbers :");
let sum_of_all_element =0;
let index=0;
array_numbers.forEach((element) => {
    sum_of_all_element += element
});
console.log(sum_of_all_element);

console.log('======================================================================================================');
console.log("6. Even Positioned array value :");
array_numbers.forEach((element,index) => {
    if(index%2 == 0) {
       element = array_numbers[index];
       console.log(element);
    }
});

console.log('======================================================================================================');
console.log("7. Odd Positioned array value :");

array_numbers.forEach((element,index) => {
    if(index%2 != 0 && element < 0) {
        element = array_numbers[index];
        console.log(element);
    }
});
