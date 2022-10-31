console.log(`Assignment using Array`);
console.log(`--------------------------------------------------------------------------`);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits);
console.log(`--------------------------------------------------------------------------`);


let fruits_first = fruits[0];
let fruits_last= fruits.length-1;
console.log(`Question 1 : `);
console.log(`The First Element is : ${fruits_first}`);
console.log(`The Last Element is : ${fruits_last}`);
console.log(`--------------------------------------------------------------------------`);

const add_element = fruits.unshift("Papaya");     // add first element
console.log(`2. Add New Element Papaya before the Banana `);
console.log(fruits);
console.log(`--------------------------------------------------------------------------`);

const after_remove = fruits.splice(4, 1);
console.log(`3. After Remove Mango from the Array : `);
console.log(fruits);
console.log(`--------------------------------------------------------------------------`);

const add_last_element = fruits.push("Pineapple");    //Add last element
console.log(`4. Add Element Pineapple at the Last position`);
console.log(fruits);
console.log(`--------------------------------------------------------------------------`);

const insert_element = fruits.splice(4, 0, "Dragon Fruit");
console.log(`5. Insert an Element "Dragon Fruit" befor "Water Melon" : `);
console.log(fruits);
console.log(`--------------------------------------------------------------------------`);


fruits[2] = "Kiwi";
console.log(`6. Replace an Element Orange with Kiwi `);
console.log(fruits);
console.log(`--------------------------------------------------------------------------`);

//const total_element = fruits.length;
//console.log(`Total Fruits Elements is : ${total_element}`);
//console.log(`--------------------------------------------------------------------------`);

console.log(`7. Total Elements available in Array using for loop:`);
for (const key in fruits) {
    if (Object.hasOwnProperty.call(fruits, key)) {
        const element = fruits[key];
        
        console.log(`${element}`);
    }
}
console.log(`--------------------------------------------------------------------------`);

console.log(fruits);
const start_to_end = fruits.slice(1, 5);
console.log(`8. Starting from index 1 to 4 elements : ${start_to_end}`);
console.log(`--------------------------------------------------------------------------`);


const select_last = fruits.slice(fruits.length-3)

console.log(`9. Selecting only last 3 elements : ${select_last}`);
console.log(fruits);
console.log(`--------------------------------------------------------------------------`);

console.log(`10. Traverse the Array using for loop :`);
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(`${element}`);
    
}