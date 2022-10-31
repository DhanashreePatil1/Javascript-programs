 
var gender;
var age;
console.log(`Assignment 2: `);
console.log(`---------------------------------------------------------------------`);
var boy_marriage = function(gender, age) {
    var result = gender == "Male" && age >= 21 ? "Hey boy you are eligible for Marriage" : "Sorry, You are not eligible for Marriage";
    console.log(`Gender : ${gender}, Age : ${age} : ${result}`);
}
boy_marriage("Male",25);
boy_marriage("Male",18);

console.log(`---------------------------------------------------------------------`);

var girl_marriage = function(gender, age) {
    var result = gender == "Female" && age >= 18 ? "Hey girl you are eligible for Marriage" : "Sorry, You are not eligible for Marriage";
    console.log(`Gender : ${gender}, Age : ${age} : ${result}`);
}
girl_marriage("Female",25);
girl_marriage("Female",18);
girl_marriage("Female",17);

console.log(`---------------------------------------------------------------------`);