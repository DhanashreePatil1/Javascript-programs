
const fruits = ["Appple", "Mango","Orange", "Strawberry","Grapes","Mango", "Orange"];
console.log(fruits);

console.log(`Type of Array ${typeof fruits}`);
console.log(`Total fruits : ${fruits.length}`);

let fruits_0 = fruits[0];
let fruits_3 = fruits[3];
let length_fruits = fruits.length-1;

// update element
fruits[0] = "Apple";

console.log(`Fruits at position ==> ${fruits_0}, 3 ${fruits_3}, Last Element ${fruits[length_fruits]}`);

// traversing an array

console.log(`------------------------ Total elements in Array ------------------------`);

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(`${element}`);
    
}

const include = fruits.includes("Grapes");
console.log(`includes("Grapes") ${include}`);

const mango_1 = fruits.indexOf("Mango");
console.log(`includes("Mango") ${mango_1}`);

// Inserts new elements at the start of an array, and returns the new length of the array.
const length_after_unshift = fruits.unshift("Water Melon");
console.log(`fruits.unshift("Water Melon")==>  ${length_after_unshift}`);
console.log(fruits);

// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const shift_after =  fruits.shift()
console.log(`fruits.shift()==>  ${shift_after}`);
console.log(fruits);

//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const pop_after = fruits.pop();
console.log(`fruits.pop()==>  ${pop_after}`);
console.log(fruits); 

//Appends new elements to the end of an array, and returns the new length of the array.
const push_after = fruits.push("Papaya");
console.log(`fruits.push()==>  ${push_after}`);
console.log(fruits);

//Selecting middle from given index to the end of an array
const slice_after = fruits.slice(3);
console.log(`fruits.slice(3)==>  ${slice_after}`);
console.log(fruits); 

// Selecting middle elements
const slice_after_both_index = fruits.slice(3, 5);
console.log(`fruits.slice(3, 5)==>  ${slice_after_both_index}`);
console.log(fruits);

console.log(`============================== Splice method to remove element ============================================`);

const my_list = [20, 3, 4, 5, 7, 67, 100, 1, 5];
console.log(my_list);
// Removing element using splice
// const after_splice_5 =  my_list.splice(5);
const after_splice_5 =  my_list.splice(4, 2); // where 4 is index and 2 is count element that to would be deleted 
console.log(`Removed Element  ${after_splice_5}`);
console.log(` After removing array is: ${my_list}` );


console.log("================== Splice method to Insert element===========================");
const number_array = [20, 3, 4, 5, 7, 67, 100, 1, 5];
console.log(number_array);

// Inserting just one element that is 555 at the index position 3, Here 0 means don't replace
const after_splice_insert =  number_array.splice(3, 0, 555 ); 
console.log(`Insert element  ${after_splice_insert}`);
console.log(` After insert array is: ${number_array}` );

// Insert three element [333, 444, 777] at second position (index = 2) and don't replace any existing element
number_array.splice(2, 0, 333, 444, 777);
console.log(` After insert three elements array is: ${number_array}` );

console.log("================== Splice method to Replace element===========================");
const array_nums = [20, 3, 4, 5, 7, 67, 100, 1, 5];
console.log(array_nums);
 // Replace second position element (index = 2) with value 999
// Here 1 means replace element count
array_nums.splice(2, 1, 999);

// array_nums.splice(3, 2, 888); // Replace from 3rd index with value 888 and consider 2 element 

console.log(` After replace array is: ${array_nums}` );

console.log("==================  for in loop to traverse array ======");
const array_my = [20, 3, 4, 5, 7, 67, 100, 1, 5];
for (const key in array_my) {
    console.log(array_my[key]);
}

console.log("==================  join() method ======");
const student_names = [ "Sonal", "Ravi", "Parveen", "Sagar", "Akash"]; 
console.log(student_names);
const joined_student =  student_names.join(); // default separator is comma (,)
console.log(joined_student);
const joined_student_sep =  student_names.join("::"); // separator ::
console.log(joined_student_sep);

console.log("==================  concat() method ======");
const array_1 = [1, 2, 3, 4 ];
const array_2 = [5, 3, 10, 40 ];
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const combined_array = array_1.concat(array_2);
// const combined_array = array_1 + array_2;
console.log(combined_array);

console.log("======== Resize an Array =================");
const array_3 = [1, 2, 3, 4, 6, 77, 88];
array_3.length = 3;
console.log("After resize");
console.log(array_3);

