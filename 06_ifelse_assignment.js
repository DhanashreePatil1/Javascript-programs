var number;
var number1 = typeof (number);

console.log(`Assignment 1:`);
console.log(`------------------------------------------------------------------`);

function even_odd(number) {

    if (typeof(number) === 'number') {
        console.log(`The Number ${number} is Valid Input`);
        if (number % 2 === 0) {
            console.log(`The Number ${number} is Even`);
        } else {
        console.log(`The Number ${number} is Odd`);
        }

    } else {
        console.log(`The Number ${number} is Invalid Input`);
    }
    
}
even_odd(2);
console.log(`------------------------------------------------------------------`);
even_odd(45);
console.log(`------------------------------------------------------------------`);
even_odd(null);
console.log(`------------------------------------------------------------------`);
even_odd(13);
console.log(`------------------------------------------------------------------`);
even_odd(0);
console.log(`------------------------------------------------------------------`);
even_odd("70");
console.log(`------------------------------------------------------------------`);
even_odd(undefined);
console.log(`------------------------------------------------------------------`);
even_odd("Ten");
console.log(`------------------------------------------------------------------`);
even_odd(NaN);
console.log(`------------------------------------------------------------------`);

