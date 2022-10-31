var number1;
var number2;
console.log(`Assignment 1 : `);
console.log(`---------------------------------------------------------------`);
var result = function(number1, number2) {
var result1 = number1 >= number2 ? number1:number2;
console.log(`The greatest Number is : ${result1}`);
}

result(10, -10);
result(800,899);

console.log(`---------------------------------------------------------------`);
var even_odd = function(value1){
var result1 = value1 % 2 == 0 ? "Even" : "Odd";
console.log(`The ${value1} Number is ${result1}`);
return "true";
}
 even_odd(29);
 even_odd(44);
 even_odd(0);
 even_odd(101);
 console.log(`---------------------------------------------------------------`);

 var even_odd_length = function(str) {
 var len = str.length;
 var string_result = len % 2 == 0 ? "Even Length": "Odd Length";
 console.log(`The Length Of the "${str}" is ${len}: ${string_result}`); 
 }

 even_odd_length("JavaScript");
 even_odd_length("Developer");
 even_odd_length("Google");

 console.log(`---------------------------------------------------------------`);