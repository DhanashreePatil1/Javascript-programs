var num1;
var num2;
var num3;
//var Large_number;

console.log(`Assignment 2:`);
console.log(`------------------------------------------------------------------`);

var large_fun = function (num1, num2, num3) {
    console.log(`The Number is : ${num1}, ${num2}, ${num3}`);

    if (num1 === null || num1 === undefined) {
        console.log(`This is Invalid Input`);

    }
    if (num2 === null || num2 === undefined) {
        console.log(`This is Invalid Input`);

    }
    if (num3 === null || num3 === undefined) {
        console.log(` This is Invalid Input`);

    } else {
        if (typeof (num1) === 'number' && typeof (num2) == 'number' && typeof (num3) == 'number') {
            console.log(`This is Valid Input`);
        }
        if (num1 >= num2 && num1 >= num3) {
            console.log(`The Largest Number is : ${num1}`);
        } else if (num2 >= num1 && num2 >= num3) {
            console.log(`The Largest Number is : ${num2}`);
        } else {
            console.log(`The Largest Number is : ${num3}`);
        }
    }
    /*else {
           console.log(`The One value is Invalid`);*/
}




large_fun(56, 70, 80);
console.log(`------------------------------------------------------------------`);
large_fun(-20, -90, 0);
console.log(`------------------------------------------------------------------`);
large_fun(undefined, 0, 1000);
console.log(`------------------------------------------------------------------`);
large_fun(null, 5, 67);
console.log(`------------------------------------------------------------------`);
large_fun(NaN, 60, 70);
console.log(`------------------------------------------------------------------`);



/*var large_fun = function (num1, num2, num3) {
    console.log(`The Number is : ${num1}, ${num2}, ${num3}`);

    if (typeof (num1) == 'number' && typeof (num2) == 'number' && typeof (num3) == 'number') {
        console.log(`This is Valid Input`);

        if (num1 >= num2 && num1 >= num3) {
            console.log(`The Largest Number is : ${num1}`);
        } 
        if (num2 >= num1 && num2 >= num3) {
            console.log(`The Largest Number is : ${num2}`);
        } 
        else if (num3 >= num1 && num3 >= num2) {
            console.log(`The Largest Number is : ${num3}`);
        } 
        else {
            console.log(`The One value is Invalid`);
            
        }
    } 

}
*/